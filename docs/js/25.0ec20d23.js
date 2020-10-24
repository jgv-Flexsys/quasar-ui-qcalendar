(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[25],{"5fe9":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"q-markdown"},[a("example-title",{attrs:{title:"Resource View"}}),a("example-viewer",{attrs:{title:"Basic",file:"ResourceViewBasic","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nYou can set the `sticky` property to make the resource column and interval labels row **sticky** so they don't scroll.\n::: warning\n`sticky` will not work with IE/Edge.\n:::\n    ")]),a("example-viewer",{attrs:{title:"Sticky",file:"ResourceViewSticky","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Bordered",file:"ResourceViewBordered","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Dark",file:"ResourceViewDark","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Navigation"}}),a("example-viewer",{attrs:{title:"Prev/Next",file:"ResourceViewPrevNext","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"Swipe",file:"ResourceViewSwipe","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Intervals"}}),a("example-viewer",{attrs:{title:"Interval Header Width/Height",file:"ResourceViewIntervalHeaderWidthHeight","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-count` to `4`, the default is `24`. This is the number of intervals to be displayed.\n    ")]),a("example-viewer",{attrs:{title:"Interval Count",file:"ResourceViewIntervalCount","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-minutes` to `30`, the default is `60`. This is the number of minutes in an interval. For this example, if you wanted the full 24 hours, you would also need to set `interval-count` to `48` (if you cut `interval-minutes` in half, then you need to double `interval-count`).\n    ")]),a("example-viewer",{attrs:{title:"Interval Minutes (30)",file:"ResourceViewIntervalMinutes30","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-minutes` to `15`, the default is `60`. This is the number of minutes in an interval. For this example, if you wanted the full 24 hours, you would also need to set `interval-count` to `96` (if you cut `interval-minutes` in quarter, then you need to quadruple `interval-count`).\n    ")]),a("example-viewer",{attrs:{title:"Interval Minutes (15)",file:"ResourceViewIntervalMinutes15","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nThe example below is setting the `interval-start` to `8`, the default is `0`. It is a good idea to also adjust the `interval-count` so that extra intervals are not displayed. In this example, the `interval-count` is set to `10`, so the intervals displayed are from 08:00-18:00.\n    ")]),a("example-viewer",{attrs:{title:"Interval Start",file:"ResourceViewIntervalStart","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Resource"}}),a("example-viewer",{attrs:{title:"Resource Width/Height",file:"ResourceViewResourceWidthHeight","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Hierarchy"}}),a("q-markdown",[e._v("\nThe example below is uses keys `children` and `expanded`, in the `resources` object, to show a tree hierarchy.\n    ")]),a("example-viewer",{attrs:{title:"Children",file:"ResourceViewChildren","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Events"}}),a("q-markdown",[e._v('\n::: tip\nThe events below won\'t show up unless there is a listener for it. Therefore, if using `Vue Dev Tools`, you won\'t see it unless you add it.\n:::\n\nYou can add a listener for the following events. An event is comprised of an `event + suffix`. By adding the event with the suffix, you get the completed listener name.\n\n| Event       | `:interval2`       | `:resource2`       | `:time2`             | `:resource:header2`| `:date2`           |\n| ----------- | :----------------: | :----------------: | :-----------------: | :----------------: | :----------------: |\n| click       | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |\n| contextmenu | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :heavy_check_mark: |\n| mousedown   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mousemove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseup     | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseenter  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| mouseleave  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchstart  | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchmove   | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n| touchend    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark:  | :heavy_check_mark: | :x:                |\n\n::: warning\nDo NOT combine suffixes. Only one suffix per event. A different suffix will give you a different event.\n:::\n\n| Suffix | Description | Data |\n| ------ | ----------- | ---- |\n| `:interval2` | The time header area | `{ scope: { timestamp: { "..." } }, event: { "..." } } |\n| `:resource2` | A resource | `{ scope: { resource: { "..."}, index, intervals: [ "..." ] }, event: { "..." } } |\n| `:time2` | The time associated with a resource | `{ scope: { timestamp: { "..." }, index, resource: { "..."} }, event: { "..." } } |\n| `:resource:header2` | The header area above the resources | `{ scope: { timestamp: { "..." }, resources: [ "..." ], intervals: [ "..." ] }, event: { "..." } } |\n| `:date2` | The date button | Date in format YYYY-MM-DD |\n\n::: tip\n`:resource:header2` is new since v2.4.0\n:::\n\n::: warning\nThe events `:interval`, `:resource`, `:time` and `:date` still exist, but have been marked as deprecated starting with v2.4.0\n:::\n\nThe example below is only showing `click` events as well as the `input` event.\n    ')]),a("example-viewer",{attrs:{title:"Events",file:"ResourceViewEvents","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Slots"}}),a("q-markdown",[e._v("\nFor slots that return `timestamp`, it looks like this:\n```js\n{\n  date: '',       // YYYY-MM-DD\n  time: '',       // 00:00:00 (optional)\n  year: 0,        // YYYY\n  month: 0,       // mm (Jan = 1, etc)\n  day: 0,         // day of the month\n  weekday: 0,     // week day\n  hour: 0,        // 24-hr\n  minute: 0,      // mm\n  doy: 0,         // day of year\n  workweek: 0,    // workweek number\n  hasDay: false,  // if this timestamp is supposed to have a date\n  hasTime: false, // if this timestamp is supposed to have a time\n  past: false,    // if timestamp is in the past (based on `now` property)\n  current: false, // if timestamp is current date (based on `now` property)\n  future: false,  // if timestamp is in the future (based on `now` property)\n  disabled: false // if timestamp is disabled\n}\n```\n\nYou can use the slots `resource-intervals` and `resource-interval` to control visual aspects of your event system.\n\nThe example below is using the `resource-label` slot to indicate there are events in that time interval, in case it is not visible, indicating to the user they should scroll sideways to see the event.\n\nThe `resource-intervals` slot is used to get information about the date and time of an event and then to calculate where the absolute position of the event based on passed in functions `timeStartPosX` and `timeDurationWidth`.\n\nScroll until you see 10:00am to see example.\n    ")]),a("example-viewer",{attrs:{title:"resource-interval Slot",file:"ResourceViewSlots","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-viewer",{attrs:{title:"resource-header Slot",file:"ResourceViewSlotResourceHeader","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("q-markdown",[e._v("\nBelow, the slot receives the `resource` to be displayed. In this case, an avatar (or icon) is being displayed along with the resource name.\n    ")]),a("example-viewer",{attrs:{title:"resource-label Slot",file:"ResourceViewSlotResourceLabel","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Themes"}}),a("example-viewer",{attrs:{title:"Theme",file:"ResourceViewTheme","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}}),a("example-title",{attrs:{title:"Locale Support"}}),a("example-viewer",{attrs:{title:"Locale",file:"ResourceViewLocale","location-url":e.locationUrl,"js-paths":e.jsPaths,"css-paths":e.cssPaths}})],1)},i=[],o=a("fe7d"),n=a("8669"),r=a("384e"),l={name:"SchedulerView",components:{ExampleTitle:o["a"]},data(){return{tempToc:[],locationUrl:"https://github.com/quasarframework/quasar-ui-qcalendar/tree/dev/demo/src/examples/",jsPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${r["b"]}/dist/index.umd.min.js`],cssPaths:[`https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qcalendar@${r["b"]}/dist/index.min.css`,"https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.12.0/css/all.css"]}},mounted(){this.toc=[],this.tempToc=[],this.addToToc("Resource View"),this.addToToc("Basic",2),this.addToToc("Sticky",2),this.addToToc("Bordered",2),this.addToToc("Dark",2),this.addToToc("Navigation"),this.addToToc("Prev/Next",2),this.addToToc("Swipe",2),this.addToToc("Intervals"),this.addToToc("Interval Header Width/Height",2),this.addToToc("Interval Count",2),this.addToToc("Interval Minutes (30)",2),this.addToToc("Interval Minutes (15)",2),this.addToToc("Interval Start",2),this.addToToc("Resource"),this.addToToc("Resource Width/Height",2),this.addToToc("Hierarchy"),this.addToToc("Children",2),this.addToToc("Events"),this.addToToc("Events",2),this.addToToc("Slots"),this.addToToc("resource-interval Slot",2),this.addToToc("resource-header Slot",2),this.addToToc("resource-label Slot",2),this.addToToc("Themes"),this.addToToc("Theme",2),this.addToToc("Locale Support"),this.addToToc("Locale",2),this.toc=this.tempToc},computed:{toc:{get(){return this.$store.state.common.toc},set(e){this.$store.commit("common/toc",e)}}},methods:{addToToc(e,t=1){let a=e;a=1===t?"title-"+a:"example-"+a;const s=Object(n["b"])(a);this.tempToc.push({children:[],id:s,label:e,level:t})}}},c=l,h=a("2877"),d=Object(h["a"])(c,s,i,!1,null,null,null);t["default"]=d.exports},8669:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o}));a("5319"),a("498a");function s(e){var t=document.createElement("textarea");t.className="fixed-top",t.value=e,document.body.appendChild(t),t.focus(),t.select(),document.execCommand("copy"),document.body.removeChild(t)}function i(e){const t=window.location.origin+window.location.pathname+"#"+e,a=document.getElementById(e);a&&(a.id=""),window.location.hash="#"+e,a&&setTimeout((()=>{a.id=e}),300),s(t),this.$q.notify({message:"Anchor has been copied to clipboard.",color:"white",textColor:"primary",icon:"done",position:"top",timeout:2e3})}function o(e){return encodeURIComponent(String(e).trim().replace(/\s+/g,"-"))}},fe7d:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",{staticClass:"q-markdown--heading-h1 q-markdown--title-heavy example-title",attrs:{id:e.slugifiedTitle},on:{click:function(t){return e.copyHeading(e.slugifiedTitle)}}},[e._v(e._s(e.title))])},i=[],o=a("8669"),n={name:"ExampleTitle",props:{title:{type:String,required:!0}},computed:{slugifiedTitle(){return Object(o["b"])("title-"+this.title)}},methods:{copyHeading:o["a"]}},r=n,l=a("2877"),c=Object(l["a"])(r,s,i,!1,null,null,null);t["a"]=c.exports}}]);