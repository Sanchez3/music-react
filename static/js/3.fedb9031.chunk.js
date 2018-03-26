webpackJsonp([3,11],{191:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t(0),a=t.n(o),r=t(211),s=(t.n(r),function(n){console.log("===================================="),console.log("render arheader"),console.log("====================================");var e=n.artist,t=e.img1v1Url,o=e.name,r=e.musicSize,s=e.albumSize,i=e.mvSize,l=e.briefDesc;return a.a.createElement("div",{className:"ar-header"},a.a.createElement("div",{className:"avatar"},a.a.createElement("img",{src:t,alt:"artist-avatar"})),a.a.createElement("div",{className:"num"},a.a.createElement("span",{className:"name"},o),a.a.createElement("span",null,a.a.createElement("i",{className:"icon-music"}),"\u6b4c\u66f2\u6570:",r),a.a.createElement("span",null,a.a.createElement("i",{className:"icon-shocked"}),"\u4e13\u8f91\u6570:",s),a.a.createElement("span",null,a.a.createElement("i",{className:"icon-film"}),"MV\u6570:",i)),a.a.createElement("div",{className:"desc"},a.a.createElement("p",null,l)))});e.default=s},199:function(n,e,t){"use strict";function o(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?n:e}function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0}),t.d(e,"default",function(){return v});var s,i,l=t(0),c=t.n(l),m=t(12),f=t(191),g=t(213),p=t(206),u=t(127),d=t(135),x=t(228),b=(t.n(x),function(){function n(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}return function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}}()),h=function(n){if(!n)return null;var e=n.artist,t=n.hotSongs;return[c.a.createElement(p.a,{title:"\u6b4c\u624b\u4fe1\u606f",key:"artist-title"}),c.a.createElement(f.default,{artist:e,key:"artist-info"}),c.a.createElement(g.a,{tracks:t,isShowAr:!1,key:"artist-hot-songs"})]},v=(s=Object(m.connect)(function(n){return{artistinfo:n.artistinfo}},{fetchArtistInfo:d.b}))(i=function(n){function e(){return o(this,e),a(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return r(e,n),b(e,[{key:"componentDidMount",value:function(){var n=this.props.match.params.id;this.props.fetchArtistInfo(n)}},{key:"componentWillReceiveProps",value:function(n){var e=n.match.params.id;e!==this.props.match.params.id&&n.fetchArtistInfo(e)}},{key:"render",value:function(){var n=this.props.artistinfo,e=n.isFetching,t=n.artistDetail;return c.a.createElement("div",{className:"artist-info"},e?c.a.createElement(u.a,null):h(t))}}]),e}(l.Component))||i},206:function(n,e,t){"use strict";var o=t(0),a=t.n(o),r=t(207),s=(t.n(r),function(n){return a.a.createElement("h4",{className:"subtitle"},n.title)});e.a=s},207:function(n,e,t){var o=t(208);"string"===typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0};a.transform=void 0;t(9)(o,a);o.locals&&(n.exports=o.locals)},208:function(n,e,t){e=n.exports=t(8)(void 0),e.push([n.i,".subtitle {\n  color: #666;\n  font-size: 12px;\n  margin-bottom: 20px;\n}\n",""])},211:function(n,e,t){var o=t(212);"string"===typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0};a.transform=void 0;t(9)(o,a);o.locals&&(n.exports=o.locals)},212:function(n,e,t){e=n.exports=t(8)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ar-header {\n  display: -webkit-box;\n  display: -moz-box;\n  display: flex;\n  margin-bottom: 40px;\n}\n.ar-header .avatar {\n  flex: 0 0 200px;\n  width: 200px;\n  height: 200px;\n  margin-right: 20px;\n  position: relative;\n}\n.ar-header .avatar > img {\n  width: 100%;\n  height: 100%;\n}\n.ar-header .num {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  flex: 1;\n  box-flex: 1;\n  min-width: 0;\n  margin-top: 4px;\n  padding: 10px;\n}\n.ar-header .num .name {\n  font-size: 18px;\n  margin-bottom: 45px;\n}\n.ar-header .num > span {\n  display: block;\n  font-size: 12px;\n  letter-spacing: 1px;\n  margin-bottom: 20px;\n}\n.ar-header .desc {\n  -webkit-box-flex: 6;\n  -moz-box-flex: 6;\n  flex: 6;\n  box-flex: 6;\n  min-width: 0;\n  font-size: 14px;\n  line-height: 25px;\n  padding-top: 40px;\n}\n",""])},213:function(n,e,t){"use strict";var o=t(0),a=t.n(o),r=t(5),s=t(12),i=t(43),l=t(128),c=t(214),m=(t.n(c),function(n){return a.a.createElement("div",{className:"song-artist"},n.ar.map(function(n){return a.a.createElement(r.Link,{key:Math.random()+n.id,to:{pathname:"/artistinfo/"+n.id}}," ",n.name)}))}),f=function(n){var e=n.tracks,t=n.isShowAr,o=void 0===t||t;return console.log("===================================="),console.log("render songlist"),console.log("===================================="),a.a.createElement("div",{className:"songList"},a.a.createElement("p",{className:"play-all-btn"},"\u64ad\u653e\u5168\u90e8(",e.length,")"),a.a.createElement("ul",{className:"song-container"},e.map(function(e,t){return a.a.createElement("li",{className:"song-item",key:e.id},a.a.createElement("div",{className:"section-one"},a.a.createElement("span",{className:"song-index"},Object(l.d)(t)),a.a.createElement("i",{className:"icon-heart"}),a.a.createElement("span",{className:"song-name"},e.name)),a.a.createElement("div",{className:"section-two"},a.a.createElement("i",{className:"icon-plus",onClick:function(){return n.addSong2Que(e)}}),a.a.createElement("i",{className:"icon-play3",onClick:function(){return n.playSong2Que(e)}}),o?m(e):null),a.a.createElement("span",{className:"song-album"},e.al.name),a.a.createElement("span",{className:"song-duration"},Object(l.b)(e.dt)))})))},g=function(){return{state:null}},p={addSong2Que:i.a,playSong2Que:i.e};e.a=Object(s.connect)(g,p)(f)},214:function(n,e,t){var o=t(215);"string"===typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0};a.transform=void 0;t(9)(o,a);o.locals&&(n.exports=o.locals)},215:function(n,e,t){e=n.exports=t(8)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.songList .play-all-btn {\n  display: inline-block;\n  font-size: 14px;\n  margin-left: 12px;\n  margin-bottom: 15px;\n  cursor: pointer;\n}\n.songList .song-container {\n  font-size: 12px;\n  color: #b0b0b1;\n  text-align: left;\n}\n.songList .song-container .song-item {\n  display: -webkit-box;\n  display: -moz-box;\n  display: flex;\n  height: 45px;\n  line-height: 45px;\n  padding-left: 15px;\n}\n.songList .song-container .song-item .section-one,\n.songList .song-container .song-item .section-two {\n  -webkit-box-flex: 2;\n  -moz-box-flex: 2;\n  flex: 2;\n  box-flex: 2;\n  min-width: 0;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.songList .song-container .song-item .section-one .song-index,\n.songList .song-container .song-item .section-two .song-index,\n.songList .song-container .song-item .section-one .song-name,\n.songList .song-container .song-item .section-two .song-name {\n  color: #333;\n}\n.songList .song-container .song-item .section-one .song-artist,\n.songList .song-container .song-item .section-two .song-artist {\n  display: inline-block;\n}\n.songList .song-container .song-item .section-one > i,\n.songList .song-container .song-item .section-two > i {\n  margin: 0 12px;\n}\n.songList .song-container .song-item .song-album {\n  -webkit-box-flex: 2;\n  -moz-box-flex: 2;\n  flex: 2;\n  box-flex: 2;\n  min-width: 0;\n}\n.songList .song-container .song-item .song-duration {\n  -webkit-box-flex: 1;\n  -moz-box-flex: 1;\n  flex: 1;\n  box-flex: 1;\n  min-width: 0;\n}\n.songList .song-container .song-item:nth-child(odd) {\n  background-color: #f4f4f6;\n}\n.songList .song-container .song-item:nth-child(even) {\n  background-color: #fafafc;\n}\n",""])},228:function(n,e,t){var o=t(229);"string"===typeof o&&(o=[[n.i,o,""]]);var a={hmr:!0};a.transform=void 0;t(9)(o,a);o.locals&&(n.exports=o.locals)},229:function(n,e,t){e=n.exports=t(8)(void 0),e.push([n.i,"@-moz-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-webkit-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@-o-keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes roll {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.artist-info {\n  margin: 20px 30px;\n}\n",""])}});
//# sourceMappingURL=3.fedb9031.chunk.js.map