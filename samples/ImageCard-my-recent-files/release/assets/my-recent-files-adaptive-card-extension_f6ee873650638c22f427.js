define("f997a81c-9411-4b24-8dd7-2c0cb094268d_0.0.1",["@microsoft/sp-loader","MyRecentFilesAdaptiveCardExtensionStrings","@microsoft/sp-adaptive-card-extension-base"],function(n,a,i){return function(e){function t(t){for(var n,i,r=t[0],o=t[1],s=0,c=[];s<r.length;s++)i=r[s],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&c.push(a[i][0]),a[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);for(d&&d(t);c.length;)c.shift()()}var n={},a={1:0};function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){for(var n=[],o=function(e){return{0:[{i:"f9e737b7-f0df-4597-ba8c-3060f82380db",v:"1.14.0",m:"26ea"}]}[e]||[]}(t),s=0;s<o.length;s++)e[o[s].m]||function(t){n.push(r.SPComponentLoader.loadComponentById(t.i,t.v).then(function(n){e[t.m]=function(e){e.exports=n}}))}(o[s]);var c=a[t];if(0!==c)if(c)n.push(c[2]);else{var d=new Promise(function(e,n){c=a[t]=[e,n]});n.push(c[2]=d);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=function(e){return i.p+"chunk."+({0:"MyRecentFiles-property-pane"}[e]||e)+"_"+{0:"312872298b44ec16c82d"}[e]+".js"}(t),0!==u.src.indexOf(window.location.origin+"/")&&(u.crossOrigin="anonymous");var f=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(p);var n=a[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",f.name="ChunkLoadError",f.type=i,f.request=r,n[1](f)}a[t]=void 0}};var p=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},i.m=e,i.c=n,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var r=i("I6O9");i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonpf997a81c_9411_4b24_8dd7_2c0cb094268d_0_0_1=window.webpackJsonpf997a81c_9411_4b24_8dd7_2c0cb094268d_0_0_1||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=s;return function(){var e,t=document.getElementsByTagName("script"),n=/my-recent-files-adaptive-card-extension_f6ee873650638c22f427\.js/i;if(t&&t.length)for(var a=0;a<t.length;a++)if(t[a]){var r=t[a].getAttribute("src");if(r&&r.match(n)){e=r.substring(0,r.lastIndexOf("/")+1);break}}if(!e)for(var o in window.__setWebpackPublicPathLoaderSrcRegistry__)if(o&&o.match(n)){e=o.substring(0,o.lastIndexOf("/")+1);break}i.p=e}(),i(i.s="Wzpe")}({I6O9:function(e,t){e.exports=n},OIdv:function(e,t){e.exports=a},Wzpe:function(e,t,n){"use strict";n.r(t),n.d(t,"QUICK_VIEW_REGISTRY_ID",function(){return X});var a=n("lz/E");function i(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function r(e){i(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function o(e,t){i(2,arguments);var n=r(e),a=r(t),o=n.getTime()-a.getTime();return o<0?-1:o>0?1:o}function s(e,t){i(2,arguments);var n=r(e),a=r(t),o=n.getFullYear()-a.getFullYear(),s=n.getMonth()-a.getMonth();return 12*o+s}function c(e){i(1,arguments);var t=r(e);return t.setHours(23,59,59,999),t}function d(e){i(1,arguments);var t=r(e),n=t.getMonth();return t.setFullYear(t.getFullYear(),n+1,0),t.setHours(23,59,59,999),t}function l(e){i(1,arguments);var t=r(e);return c(t).getTime()===d(t).getTime()}function u(e,t){i(2,arguments);var n,a=r(e),c=r(t),d=o(a,c),u=Math.abs(s(a,c));if(u<1)n=0;else{1===a.getMonth()&&a.getDate()>27&&a.setDate(30),a.setMonth(a.getMonth()-d*u);var f=o(a,c)===-d;l(r(e))&&1===u&&1===o(e,c)&&(f=!1),n=d*(u-Number(f))}return 0===n?0:n}function f(e,t){return i(2,arguments),r(e).getTime()-r(t).getTime()}var p={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function m(e){return e?p[e]:p.trunc}function _(e,t,n){i(2,arguments);var a=f(e,t)/1e3;return m(null==n?void 0:n.roundingMethod)(a)}var h={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function b(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,a=e.formats[n]||e.formats[e.defaultWidth];return a}}var g={date:b({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:b({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:b({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},v={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function y(e){return function(t,n){var a,i=n||{};if("formatting"===(i.context?String(i.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=i.width?String(i.width):r;a=e.formattingValues[o]||e.formattingValues[r]}else{var s=e.defaultWidth,c=i.width?String(i.width):e.defaultWidth;a=e.values[c]||e.values[s]}return a[e.argumentCallback?e.argumentCallback(t):t]}}var S={ordinalNumber:function(e,t){var n=Number(e),a=n%100;if(a>20||a<10)switch(a%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:y({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:y({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:y({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:y({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:y({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})};function D(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.width,i=a&&e.matchPatterns[a]||e.matchPatterns[e.defaultMatchWidth],r=t.match(i);if(!r)return null;var o,s=r[0],c=a&&e.parsePatterns[a]||e.parsePatterns[e.defaultParseWidth],d=Array.isArray(c)?x(c,function(e){return e.test(s)}):I(c,function(e){return e.test(s)});o=e.valueCallback?e.valueCallback(d):d,o=n.valueCallback?n.valueCallback(o):o;var l=t.slice(s.length);return{value:o,rest:l}}}function I(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function x(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var C,O={ordinalNumber:(C={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(C.matchPattern);if(!n)return null;var a=n[0],i=e.match(C.parsePattern);if(!i)return null;var r=C.valueCallback?C.valueCallback(i[0]):i[0];r=t.valueCallback?t.valueCallback(r):r;var o=e.slice(a.length);return{value:r,rest:o}}),era:D({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:D({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:D({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:D({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},w={code:"en-US",formatDistance:function(e,t,n){var a,i=h[e];return a="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",t.toString()),null!=n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+a:a+" ago":a},formatLong:g,formatRelative:function(e,t,n,a){return v[e]},localize:S,match:O,options:{weekStartsOn:0,firstWeekContainsDate:1}};function E(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}function A(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var L=1440,k=43200;function M(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};i(2,arguments);var a=n.locale||w;if(!a.formatDistance)throw new RangeError("locale must contain formatDistance property");var s=o(e,t);if(isNaN(s))throw new RangeError("Invalid time value");var c,d,l=E(n);l.addSuffix=Boolean(n.addSuffix),l.comparison=s,s>0?(c=r(t),d=r(e)):(c=r(e),d=r(t));var f,p=_(d,c),m=(A(d)-A(c))/1e3,h=Math.round((p-m)/60);if(h<2)return n.includeSeconds?p<5?a.formatDistance("lessThanXSeconds",5,l):p<10?a.formatDistance("lessThanXSeconds",10,l):p<20?a.formatDistance("lessThanXSeconds",20,l):p<40?a.formatDistance("halfAMinute",null,l):p<60?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",1,l):0===h?a.formatDistance("lessThanXMinutes",1,l):a.formatDistance("xMinutes",h,l);if(h<45)return a.formatDistance("xMinutes",h,l);if(h<90)return a.formatDistance("aboutXHours",1,l);if(h<L){var b=Math.round(h/60);return a.formatDistance("aboutXHours",b,l)}if(h<2520)return a.formatDistance("xDays",1,l);if(h<k){var g=Math.round(h/L);return a.formatDistance("xDays",g,l)}if(h<86400)return f=Math.round(h/k),a.formatDistance("aboutXMonths",f,l);if((f=u(d,c))<12){var v=Math.round(h/k);return a.formatDistance("xMonths",v,l)}var y=f%12,S=Math.floor(f/12);return y<3?a.formatDistance("aboutXYears",S,l):y<9?a.formatDistance("overXYears",S,l):a.formatDistance("almostXYears",S+1,l)}function P(e,t){return i(1,arguments),M(e,Date.now(),t)}var T,U=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},F=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},H="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/genericfile.png",R=function(){function e(){}return e.GetFileImageUrl=function(e){return U(this,void 0,void 0,function(){var t,n,a;return F(this,function(i){if(t=H,n=e.split("."),!(a=n[1]))return[2,Promise.resolve(t)];switch(a.toLowerCase()){case"xlsx":case"xls":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/xlsx.png";break;case"docx":case"doc":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/docx.png";break;case"pptx":case"ppt":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/pptx.png";break;case"mppx":case"mpp":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/mpp.png";break;case"csv":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/csv.png";break;case"pdf":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/pdf.png";break;case"txt":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/txt.png";break;case"jpg":case"jpeg":case"png":case"ico":case"tiff":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/photo.png";break;case"msg":case"eml":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/email.png";break;case"pub":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/pub.png";break;case"accdb":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/accdb.png";break;case"zip":case"7z":case"tar":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/zip.png";break;case"js":case"json":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/code.png";break;case"html":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/html.png";break;case"xml":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/xml.png";break;case"aspx":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/spo.png";break;case"mp4":case"mov":case"wmv":case"ogg":case"webm":t="https://static2.sharepointonline.com/files/fabric/assets/item-types/96/video.png";break;default:t=H}return[2,t]})})},e.getShortName=function(e){if(!e)return"";var t=e.split(".");return t[0].substring(0,25)+"..."+t[t.length-1]},e.isOndrive=function(e){return U(void 0,void 0,void 0,function(){return F(this,function(t){return e?[2,e.indexOf("my.sharepoint.com")>-1]:[2,!1]})})},e}(),N=function(){return N=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},N.apply(this,arguments)},B=function(e,t,n,a){return new(n||(n=Promise))(function(i,r){function o(e){try{c(a.next(e))}catch(e){r(e)}}function s(e){try{c(a.throw(e))}catch(e){r(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(o,s)}c((a=a.apply(e,t||[])).next())})},j=function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}},V=function(e){var t=this;this._context=void 0,this._msGraphClient=void 0,this.init=function(){return B(t,void 0,void 0,function(){var e;return j(this,function(t){switch(t.label){case 0:return e=this,[4,this._context.msGraphClientFactory.getClient()];case 1:return e._msGraphClient=t.sent(),[2]}})})},this.getSiteInfo=function(e){return B(t,void 0,void 0,function(){return j(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),!this._msGraphClient||e?[2]:[4,this._msGraphClient.api("/sites/"+e).select("displayName").get()];case 1:return[2,t.sent()];case 2:throw t.sent();case 3:return[2]}})})},this.getDriveInfo=function(e){return B(t,void 0,void 0,function(){return j(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this._msGraphClient&&e?[4,this._msGraphClient.api("/drives/"+e).select("name").get()]:[2];case 1:return[2,t.sent()];case 2:throw t.sent();case 3:return[2]}})})},this.getRecentFiles=function(){return B(t,void 0,void 0,function(){return j(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),this._msGraphClient?[4,this._msGraphClient.api("/me/drive/recent").top(15).get()]:[2];case 1:return[2,e.sent().value];case 2:throw e.sent();case 3:return[2]}})})},this.getFiles=function(){return B(t,void 0,void 0,function(){var e,t,n,a,i,r,o,s,c,d;return j(this,function(l){switch(l.label){case 0:return l.trys.push([0,11,,12]),[4,this.getRecentFiles()];case 1:e=l.sent(),t=[],n=0,a=e,l.label=2;case 2:return n<a.length?(i=a[n],[4,R.GetFileImageUrl(i.name)]):[3,10];case 3:return r=l.sent(),[4,R.isOndrive(i.webUrl)];case 4:return o=l.sent(),s="",o?(s="OnDrive > "+this._context.pageContext.user.displayName,[3,8]):[3,5];case 5:return[4,this.getSiteInfo(i.remoteItem.sharepointIds.siteId)];case 6:return c=l.sent(),[4,this.getDriveInfo(i.remoteItem.parentReference.driveId)];case 7:d=l.sent(),s=(null==c?void 0:c.displayName)+" > "+(null==d?void 0:d.name),l.label=8;case 8:t.push(N(N({},i),{fileLocation:s,name:R.getShortName(i.name),fileIcon:r,lastModifiedDateString:P(new Date(i.lastModifiedDateTime),{addSuffix:!0})})),l.label=9;case 9:return n++,[3,2];case 10:return[2,t];case 11:throw l.sent();case 12:return[2]}})})},this._context=e},z=n("OIdv"),G=(T=function(e,t){return T=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},T(e,t)},function(e,t){function n(){this.constructor=e}T(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),K=n("nf1g"),W=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return G(t,e),Object.defineProperty(t.prototype,"cardButtons",{get:function(){return[{title:z.QuickViewButton,action:{type:"QuickView",parameters:{view:X}}}]},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"data",{get:function(){return{primaryText:z.PrimaryText,imageUrl:K,title:this.properties.title,iconProperty:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJYTUxJRF84MDdfIj4NCgk8ZyBpZD0iWE1MSURfODA4XyI+DQoJCTxwb2x5Z29uIGlkPSJYTUxJRF83NV8iIHN0eWxlPSJmaWxsOiNBQ0FCQjE7IiBwb2ludHM9IjkwLDMyMCA5MCwwIDI5MCwwIDM1MCw2MCAzNTAsMzIwIAkJIi8+DQoJCTxwb2x5Z29uIGlkPSJYTUxJRF84MDlfIiBzdHlsZT0iZmlsbDojODE4MDg1OyIgcG9pbnRzPSIyOTAsMCAzNTAsNjAgMjkwLDYwIAkJIi8+DQoJPC9nPg0KCTxnIGlkPSJYTUxJRF84MTBfIj4NCgkJPHBvbHlnb24gaWQ9IlhNTElEXzcyXyIgc3R5bGU9ImZpbGw6I0VFRUVFRjsiIHBvaW50cz0iNzAsMzYwIDcwLDQwIDI3MCw0MCAzMzAsMTAwIDMzMCwzNjAgCQkiLz4NCgkJPHBvbHlnb24gaWQ9IlhNTElEXzgxMV8iIHN0eWxlPSJmaWxsOiNERURERTA7IiBwb2ludHM9IjI3MCw0MCAzMzAsMTAwIDI3MCwxMDAgCQkiLz4NCgk8L2c+DQoJPHBvbHlnb24gaWQ9IlhNTElEXzY4XyIgc3R5bGU9ImZpbGw6Izc4QjlFQjsiIHBvaW50cz0iNTAsNDAwIDUwLDgwIDI1MCw4MCAzMTAsMTQwIDMxMCw0MDAgCSIvPg0KCTxwb2x5Z29uIGlkPSJYTUxJRF84MTJfIiBzdHlsZT0iZmlsbDojNUE4QkIwOyIgcG9pbnRzPSIzMTAsMjUzLjc1IDUwLDQwMCAzMTAsNDAwIAkiLz4NCgk8cmVjdCBpZD0iWE1MSURfODEzXyIgeD0iMTEwIiB5PSIyMDAiIHN0eWxlPSJmaWxsOiNERURERTA7IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIwIi8+DQoJPHJlY3QgaWQ9IlhNTElEXzgxNF8iIHg9IjExMCIgeT0iMjQwIiBzdHlsZT0iZmlsbDojREVEREUwOyIgd2lkdGg9IjE0MCIgaGVpZ2h0PSIyMCIvPg0KCTxyZWN0IGlkPSJYTUxJRF84MTVfIiB4PSIxMTAiIHk9IjE2MCIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIvPg0KCTxyZWN0IGlkPSJYTUxJRF84MTZfIiB4PSIxMTAiIHk9IjIwMCIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIvPg0KCTxyZWN0IGlkPSJYTUxJRF84MTdfIiB4PSIxMTAiIHk9IjI0MCIgc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIHdpZHRoPSI3MCIgaGVpZ2h0PSIyMCIvPg0KCTxyZWN0IGlkPSJYTUxJRF84MThfIiB4PSIxMTAiIHk9IjI4MCIgc3R5bGU9ImZpbGw6I0RFRERFMDsiIHdpZHRoPSIxNDAiIGhlaWdodD0iMjAiLz4NCgk8cmVjdCBpZD0iWE1MSURfODE5XyIgeD0iMTEwIiB5PSIyODAiIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiB3aWR0aD0iNzAiIGhlaWdodD0iMjAiLz4NCgk8cmVjdCBpZD0iWE1MSURfODIwXyIgeD0iMTEwIiB5PSIzMjAiIHN0eWxlPSJmaWxsOiNERURERTA7IiB3aWR0aD0iMTQwIiBoZWlnaHQ9IjIwIi8+DQoJPHJlY3QgaWQ9IlhNTElEXzgyMV8iIHg9IjExMCIgeT0iMzIwIiBzdHlsZT0iZmlsbDojRkZGRkZGOyIgd2lkdGg9IjcwIiBoZWlnaHQ9IjIwIi8+DQoJPHBvbHlnb24gaWQ9IlhNTElEXzgyMl8iIHN0eWxlPSJmaWxsOiMxRTJFM0I7IiBwb2ludHM9IjI1MCw4MCAzMTAsMTQwIDI1MCwxNDAgCSIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"onCardSelection",{get:function(){return"Large"===this.cardSize?null:{type:"QuickView",parameters:{view:X}}},enumerable:!1,configurable:!0}),t}(a.BaseImageCardView),q=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),Q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return q(t,e),Object.defineProperty(t.prototype,"data",{get:function(){return{title:this.properties.title,files:this.state.files}},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"template",{get:function(){return n("Y0IB")},enumerable:!1,configurable:!0}),t}(a.BaseAdaptiveCardView),Y=function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},e(t,n)};return function(t,n){function a(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(a.prototype=n.prototype,new a)}}(),J="MyRecentFiles_CARD_VIEW",X="MyRecentFiles_QUICK_VIEW",Z=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return Y(t,e),t.prototype.onInit=function(){return e=this,void 0,n=function(){var e;return function(e,t){var n,a,i,r,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return r={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function s(r){return function(s){return function(r){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,a&&(i=2&r[0]?a.return:r[0]?a.throw||((i=a.return)&&i.call(a),0):a.next)&&!(i=i.call(a,r[1])).done)return i;switch(a=0,i&&(r=[2&r[0],i.value]),r[0]){case 0:case 1:i=r;break;case 4:return o.label++,{value:r[1],done:!1};case 5:o.label++,a=r[1],r=[0];continue;case 7:r=o.ops.pop(),o.trys.pop();continue;default:if(!((i=(i=o.trys).length>0&&i[i.length-1])||6!==r[0]&&2!==r[0])){o=0;continue}if(3===r[0]&&(!i||r[1]>i[0]&&r[1]<i[3])){o.label=r[1];break}if(6===r[0]&&o.label<i[1]){o.label=i[1],i=r;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(r);break}i[2]&&o.ops.pop(),o.trys.pop();continue}r=t.call(e,o)}catch(e){r=[6,e],a=0}finally{n=i=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,s])}}}(this,function(t){switch(t.label){case 0:return this.cardNavigator.register(J,function(){return new W}),this.quickViewNavigator.register(X,function(){return new Q}),this._services=new V(this.context),[4,this._services.init()];case 1:return t.sent(),[4,this._services.getFiles()];case 2:return e=t.sent(),this.state={files:e},[2,Promise.resolve()]}})},new((t=void 0)||(t=Promise))(function(a,i){function r(e){try{s(n.next(e))}catch(e){i(e)}}function o(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t(function(e){e(n)})).then(r,o)}s((n=n.apply(e,[])).next())});var e,t,n},t.prototype.loadPropertyPaneResources=function(){var e=this;return n.e(0).then(n.bind(null,"juUy")).then(function(t){e._deferredPropertyPane=new t.MyRecentFilesPropertyPane})},t.prototype.renderCard=function(){return J},t.prototype.getPropertyPaneConfiguration=function(){return this._deferredPropertyPane.getPropertyPaneConfiguration()},t}(a.BaseAdaptiveCardExtension);t.default=Z},Y0IB:function(e){e.exports=JSON.parse('{"type":"AdaptiveCard","$schema":"http://adaptivecards.io/schemas/adaptive-card.json","version":"1.3","body":[{"type":"Container","style":"emphasis","minHeight":"4px","$data":"${files}","items":[{"type":"ColumnSet","columns":[{"type":"Column","width":"auto","items":[{"type":"Image","url":"${fileIcon}","size":"Small","width":"38px"}],"verticalContentAlignment":"Center"},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","size":"Default","weight":"Bolder","text":"${name}","maxLines":1},{"type":"TextBlock","spacing":"None","maxLines":1,"size":"Default","text":"${fileLocation}","isSubtle":true},{"type":"TextBlock","text":"${lastModifiedDateString}","maxLines":1,"spacing":"None","isSubtle":true,"size":"Small"}]}]}],"selectAction":{"type":"Action.OpenUrl","url":"${webUrl}"}},{"type":"Container","spacing":"Medium","items":[{"type":"ColumnSet","columns":[{"type":"Column","width":"stretch"},{"type":"Column","width":"stretch"},{"type":"Column","width":"stretch","selectAction":{"type":"Action.OpenUrl","url":"http://www.microsoft.com"}}]}]}]}')},"lz/E":function(e,t){e.exports=i},nf1g:function(e,t,n){e.exports=n.p+"files_33b4bd7de4765cb8e048804a46a9fefb.png"}})});