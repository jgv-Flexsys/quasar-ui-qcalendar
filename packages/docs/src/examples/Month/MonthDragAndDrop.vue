<template>
  <div class="subcontent">
    <navigation-bar @today="onToday" @prev="onPrev" @next="onNext" />

    <div class="row justify-center">
      <div style="display: flex; justify-content: center; width: 100%">
        <div style="margin: 10px">
          <ul class="list">
            <li
              v-for="item in dragItems"
              :key="item.id"
              class="button list-item"
              draggable="true"
              @dragstart="onDragStart($event, item)"
            >
              {{ item.name }}
            </li>
          </ul>
        </div>

        <div style="display: flex; justify-content: center; max-width: 600px; width: 100%">
          <q-calendar-month
            ref="calendar"
            v-model="selectedDate"
            :weekdays="[1, 2, 3, 4, 5]"
            hoverable
            bordered
            animated
            :day-min-height="50"
            :day-height="0"
            :day-class="onDayClass"
            :weekday-class="onWeekdayClass"
            :drag-enter-func="onDragEnter"
            :drag-over-func="onDragOver"
            :drag-leave-func="onDragLeave"
            :drop-func="onDrop"
            @change="onChange"
            @moved="onMoved"
            @click-date="onClickDate"
            @click-day="onClickDay"
            @click-workweek="onClickWorkweek"
            @click-head-workweek="onClickHeadWorkweek"
            @click-head-day="onClickHeadDay"
          >
            <template #head-day-event="{ scope }">
              <div
                v-if="hasWeekdayEvents(scope.weekday) && printScope(scope)"
                style="
                  display: flex;
                  justify-content: space-evenly;
                  flex-wrap: wrap;
                  align-items: center;
                  font-weight: 400;
                  font-size: 12px;
                  height: auto;
                "
              >
                <template
                  v-for="(event, index) in getWeekdayEvents(scope.weekday)"
                  :key="event.weekday + index"
                >
                  <span
                    style="border: 1px solid pink; border-radius: 2px; padding: 2px; margin: 1px"
                  >
                    {{ event.name }}
                  </span>
                </template>
              </div> </template
            >"

            <template #day="{ scope }">
              <div
                v-if="hasEvents(scope.timestamp) && printScope(scope)"
                style="
                  display: flex;
                  justify-content: space-evenly;
                  flex-wrap: wrap;
                  align-items: center;
                  font-weight: 400;
                  font-size: 12px;
                  height: auto;
                "
              >
                <template v-for="event in getEvents(scope.timestamp)" :key="event.time">
                  <span
                    style="border: 1px solid pink; border-radius: 2px; padding: 2px; margin: 1px"
                  >
                    {{ event.name }}
                  </span>
                </template>
              </div>
            </template>
          </q-calendar-month>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { QCalendarMonth, today } from '@quasar/quasar-ui-qcalendar/src'
import '@quasar/quasar-ui-qcalendar/src/QCalendarVariables.scss'
import '@quasar/quasar-ui-qcalendar/src/QCalendarTransitions.scss'
import '@quasar/quasar-ui-qcalendar/src/QCalendarMonth.scss'

import { defineComponent } from 'vue'
import NavigationBar from 'components/NavigationBar.vue'

export default defineComponent({
  name: 'MonthDragAndDrop',
  components: {
    NavigationBar,
    QCalendarMonth,
  },
  data() {
    return {
      selectedDate: today(),
      dragItems: [
        {
          id: 1,
          name: 'Appointment',
        },
        {
          id: 2,
          name: 'Reminder',
        },
        {
          id: 3,
          name: 'Task',
        },
      ],
      defaultEvent: {
        id: 0,
        type: 0,
        name: '',
        date: '',
        time: '',
        allDay: false,
      },
      events: [],
    }
  },

  computed: {
    // convert the events into a map of lists keyed by date or weekday
    eventsMap() {
      const map = {}
      if (this.events.length > 0) {
        this.events.forEach((event) =>
          (map[event.date || event.weekday] = map[event.date || event.weekday] || []).push(event),
        )
      }
      console.log('eventsMap', map)
      return map
    },
  },

  methods: {
    onDragStart(e, item) {
      console.log('onDragStart called')
      e.dataTransfer.dropEffect = 'copy'
      e.dataTransfer.effectAllowed = 'move'
      e.dataTransfer.setData('ID', item.id)
    },

    onDragEnter(e /*, type, scope*/) {
      console.log('onDragEnter')
      e.preventDefault()
      return true
    },

    onDragOver(e /*, type, scope*/) {
      console.log('onDragOver')
      e.preventDefault()
      return true
    },

    onDragLeave(/*e, type, scope*/) {
      console.log('onDragLeave')
      return false
    },

    onDrop(e, type, scope) {
      console.log('onDrop')
      const itemID = parseInt(e.dataTransfer.getData('ID'), 10)
      const event = { ...this.defaultEvent }
      event.id = this.events.length + 1
      const item = this.dragItems.filter((item) => item.id === itemID)
      event.type = item[0].id
      event.name = item[0].name
      event.weekday = scope.timestamp.weekday
      if (type === 'day') {
        event.date = scope.timestamp.date
        event.time = scope.timestamp.time
      } else {
        // head-day
        event.allDay = true
      }
      this.events.push(event)
      return false
    },

    getEvents(timestamp) {
      const events = this.eventsMap[timestamp.date]
      if (!events) return []
      return events
    },

    getWeekdayEvents(weekday) {
      const events = this.eventsMap[weekday]
      if (!events) return []
      return events
    },

    hasEvents(timestamp) {
      return this.getEvents(timestamp).length > 0
    },

    hasWeekdayEvents(weekday) {
      return this.getWeekdayEvents(weekday).length > 0
    },

    onDayClass({ scope }) {
      return {
        droppable: scope.droppable === true,
      }
    },

    onWeekdayClass({ scope }) {
      return {
        droppable: scope.droppable === true,
      }
    },

    onToday() {
      this.$refs.calendar.moveToToday()
    },
    onPrev() {
      this.$refs.calendar.prev()
    },
    onNext() {
      this.$refs.calendar.next()
    },
    onMoved(data) {
      console.log('onMoved', data)
    },
    onChange(data) {
      console.log('onChange', data)
    },
    onClickDate(data) {
      console.log('onClickDate', data)
    },
    onClickDay(data) {
      console.log('onClickDay', data)
    },
    onClickWorkweek(data) {
      console.log('onClickWorkweek', data)
    },
    onClickHeadDay(data) {
      console.log('onClickHeadDay', data)
    },
    onClickHeadWorkweek(data) {
      console.log('onClickHeadWorkweek', data)
    },
    // this method is used only to print the scope to dev tools
    printScope(scope) {
      console.log('scope:', scope)
      return true
    },
  },
})
</script>

<style lang="sass">
.droppable
  box-shadow: inset 0 0 0 1px rgba(0,140,200,.8)
</style>
