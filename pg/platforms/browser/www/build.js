/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mutations__ = __webpack_require__(17);

let pugId = 1;
const Store = {
  state: {
    viewMode: 'ALL18',
    players: [{
      userInfo: {
        name: 'Me',
        imgUrl: null
      },
      scores: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    }, {
      userInfo: {
        name: 'Pug 1',
        imgUrl: null
      },
      scores: [4, 3, 3, 4, 5, 6, null, null, null, null, null, null, null, null, null, null, null, null]
    }]

  },
  mutations: {
    [__WEBPACK_IMPORTED_MODULE_0__mutations__["a" /* ADD_PLAYER */]](state, payload) {
      state.players.push(payload.value);
    },
    [__WEBPACK_IMPORTED_MODULE_0__mutations__["b" /* SET_VIEW */]](state, payload) {
      state.viewMode = payload.value;
    }
  },
  actions: {
    addPlayer({ commit, state }, player) {
      let playerToAdd = player || {
        userInfo: {
          name: `Pug ${pugId++}`,
          imgUrl: null
        },
        scores: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]
      };
      commit({ type: __WEBPACK_IMPORTED_MODULE_0__mutations__["a" /* ADD_PLAYER */], value: playerToAdd });
    },
    setViewMode({ commit, state }, viewMode) {
      commit({ type: __WEBPACK_IMPORTED_MODULE_0__mutations__["b" /* SET_VIEW */], value: viewMode });
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Store);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(31)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(29)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  "data-v-38979096",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Pages
// import tweet from './tweet.vue';
// import searchResults from './searchresults.vue';

/* harmony default export */ __webpack_exports__["a"] = ([
  // {
  //   path: '/tweet/',
  //   component: tweet
  // },
  // {
  //   path: '/search/',
  //   component: searchResults
  // }
]);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Framework7 Vue 0.7.8
 * Build full featured iOS & Android apps using Framework7 & Vue
 * http://www.framework7.io/vue/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: January 31, 2017
 */
!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Framework7Vue=t()}(this,function(){var e={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"statusbar-overlay"})},staticRenderFns:[]},t={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"panel",class:e.classesObject,on:{"panel:open":e.onOpen,"panel:opened":e.onOpened,"panel:close":e.onClose,"panel:closed":e.onClosed}},[e._t("default")],2)},staticRenderFns:[],props:{side:String,effect:String,cover:Boolean,reveal:Boolean,left:Boolean,right:Boolean,theme:String,layout:String,opened:Boolean},computed:{classesObject:function(){var e=this,t=e.side||(e.left?"left":"right"),o=e.effect||(e.reveal?"reveal":"cover"),n={};return n["panel-"+t]=!0,n["panel-"+o]=!0,e.layout&&(n["layout-"+e.layout]=!0),e.theme&&(n["theme-"+e.theme]=!0),n.active=e.opened,n}},watch:{opened:function(e){var t=this;if(t.$f7){var o=t.side||(t.left?"left":"right");e?t.$f7.openPanel(o):t.$f7.closePanel(o)}}},mounted:function(){var e=this;e.opened&&(e.$el.style.display="block");var t=e.$$;if(t){var o=e.side||(e.left?"left":"right"),n=e.effect||(e.reveal?"reveal":"cover");e.opened&&t("body").addClass("with-panel-"+o+"-"+n)}},methods:{onOpen:function(e){this.$emit("panel:open",e)},onOpened:function(e){this.$emit("panel:opened",e)},onClose:function(e){this.$emit("panel:open",e)},onClosed:function(e){this.$emit("panel:closed",e)},onF7Init:function(){var e=this.$$;e&&0===e(".panel-overlay").length&&e('<div class="panel-overlay"></div>').insertBefore(this.$el)},open:function(){var e=this;if(e.$f7){var t=e.side||(e.left?"left":"right");e.$f7.openPanel(t)}},close:function(){var e=this;if(e.$f7){var t=e.side||(e.left?"left":"right");e.$f7.closePanel(t)}}}},o={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"views",class:e.classObject},[e._t("default")],2)},staticRenderFns:[],props:{"navbar-fixed":Boolean,"navbar-through":Boolean,"toolbar-fixed":Boolean,"toolbar-through":Boolean,"tabbar-fixed":Boolean,"tabbar-through":Boolean,"tabbar-labels-fixed":Boolean,"tabbar-labels-through":Boolean,tabs:Boolean,theme:String,layout:String},computed:{classObject:function(){var e={tabs:this.tabs,"navbar-fixed":this.navbarFixed||this.navbarThrough&&this.$theme.material,"navbar-through":this.navbarThrough,"toolbar-fixed":this.toolbarFixed,"toolbar-through":this.toolbarThrough,"tabbar-fixed":this.tabbarFixed,"tabbar-through":this.tabbarThrough,"tabbar-labels-fixed":this.tabbarLabelsFixed,"tabbar-labels-through":this.tabbarLabelsThrough};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}}},n={render:function(e){var t,o,n,a,i=this;if(i.$slots.default)for(var r=0;r<i.$slots.default.length;r++){var s=i.$slots.default[r];s.tag&&s.tag.indexOf("navbar")>=0&&(t=!0),s.tag&&s.tag.indexOf("pages")>=0&&(o=!0)}return o||(n=e("f7-pages")),t||i.$theme.material||!i.dynamicNavbar||(a=e("f7-navbar")),e("div",{class:i.classesObject,on:{"swipeback:move":i.onSwipeBackMove,"swipeback:beforechange":i.onSwipeBackBeforeChange,"swipeback:afterchange":i.onSwipeBackAfterChange,"swipeback:beforereset":i.onSwipeBackBeforeReset,"swipeback:afterreset":i.onSwipeBackAfterReset,"tab:show":i.onTabShow,"tab:hide":i.onTabHide}},[a,n,i.$slots.default])},beforeDestroy:function(){var e=this;e.f7View&&e.f7View.destroy&&e.f7View.destroy()},props:{main:Boolean,"navbar-fixed":Boolean,"navbar-through":Boolean,"toolbar-fixed":Boolean,"toolbar-through":Boolean,"tabbar-fixed":Boolean,"tabbar-through":Boolean,"tabbar-labels-fixed":Boolean,"tabbar-labels-through":Boolean,tab:Boolean,active:Boolean,"dynamic-navbar":Boolean,"dom-cache":Boolean,"links-view":[String,Object],"reload-pages":Boolean,"unique-history":Boolean,"unique-history-ignore-get-parameters":Boolean,"allow-duplicate-urls":Boolean,"swipe-back-page":Boolean,"swipe-back-page-animate-shadow":Boolean,"swipe-back-page-animate-opacity":Boolean,"swipe-back-page-active-area":Boolean,"swipe-back-page-threshold":Boolean,"animate-pages":Boolean,"preload-previous-page":Boolean,name:String,params:Object,url:String,init:{type:Boolean,default:!0},theme:String,layout:String},computed:{classesObject:function(){var e={view:!0,"view-main":this.main,active:this.active,tab:this.tab,"navbar-fixed":this.navbarFixed||this.navbarThrough&&this.$theme.material,"navbar-through":this.navbarThrough,"toolbar-fixed":this.toolbarFixed,"toolbar-through":this.toolbarThrough,"tabbar-fixed":this.tabbarFixed,"tabbar-through":this.tabbarThrough,"tabbar-labels-fixed":this.tabbarLabelsFixed,"tabbar-labels-through":this.tabbarLabesThrough};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}},methods:{onF7Init:function(e){var t=this;if(t.init){var o=t.$options.propsData,n=t.params||{name:t.name,url:t.url,dynamicNavbar:o.dynamicNavbar,domCache:"undefined"==typeof o.domCache||o.domCache,linksView:o.linksView,reloadPages:o.reloadPages,uniqueHistory:o.uniqueHistory,uniqueHistoryIgnoreGetParameters:o.uniqueHistoryIgnoreGetParameters,allowDuplicateUrls:o.allowDuplicateUrls,swipeBackPage:o.swipeBackPage,swipeBackPageAnimateShadow:o.swipeBackPageAnimateShadow,swipeBackPageAnimateOpacity:o.swipeBackPageAnimateOpacity,swipeBackPageActiveArea:o.swipeBackPageActiveArea,swipeBackPageThreshold:o.swipeBackPageThreshold,animatePages:o.animatePages,preloadPreviousPage:o.preloadPreviousPage};t.f7View=e.addView(t.$el,n),t.f7View&&0===t.f7View.pagesContainer.querySelectorAll(".page").length&&t.f7View.router.load({url:t.url,reload:!0})}},onSwipeBackMove:function(e){this.$emit("swipeback:move",e,e.detail)},onSwipeBackBeforeChange:function(e){this.$emit("swipeback:beforechange",e,e.detail)},onSwipeBackAfterChange:function(e){this.$emit("swipeback:afterchange",e,e.detail)},onSwipeBackBeforeReset:function(e){this.$emit("swipeback:beforereset",e,e.detail)},onSwipeBackAfterReset:function(e){this.$emit("swipeback:afterreset",e,e.detail)},onTabShow:function(e){this.$emit("tab:show",e)},onTabHide:function(e){this.$emit("tab:hide",e)}}},a={render:function(e){var t=this,o=[];for(var n in t.pages){var a=t.pages[n];o.push(e(a.component,{tag:"component"}))}return e("div",{staticClass:"pages",ref:"pages",on:{"page:beforeremove":t.onPageBeforeRemove}},[t.$slots.default,o])},props:{"navbar-fixed":Boolean,"navbar-through":Boolean,"toolbar-fixed":Boolean,"toolbar-through":Boolean,"tabbar-fixed":Boolean,"tabbar-through":Boolean,"tabbar-labels-fixed":Boolean,"tabbar-labels-through":Boolean,theme:String,layout:String},data:function(){return{pages:{}}},computed:{classesObject:function(){var e={"navbar-fixed":this.navbarFixed||this.navbarThrough&&this.$theme.material,"navbar-through":this.navbarThrough,"toolbar-fixed":this.toolbarFixed,"toolbar-through":this.toolbarThrough,"tabbar-fixed":this.tabbarFixed,"tabbar-through":this.tabbarThrough,"tabbar-labels-fixed":this.tabbarLabelsFixed,"tabbar-labels-through":this.tabbarLabesThrough};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}},methods:{onPageBeforeRemove:function(e){var t,o=this;for(var n in o.pages)if(e.target===o.pages[n].pageElement){t=n;break}t&&this.$set(this.pages,t,{})}}},i={render:function(e){var t,o,n,a,i=[],r=[],s=this;s.pullToRefresh&&s.ptrLayer&&s.pullToRefreshLayer&&(n=e("div",{class:{"pull-to-refresh-layer":!0}},[e("div",{class:{preloader:!0}}),e("div",{class:{"pull-to-refresh-arrow":!0}})])),(s.infiniteScroll||""===s.infiniteScroll)&&s.infiniteScrollPreloader&&(a=e("div",{class:{"infinite-scroll-preloader":!0}},[e("div",{class:{preloader:!0}})]));var l,c,u,d,p,h,f,m="navbar toolbar tabbar subnavbar searchbar messagebar fab speed-dial floating-button".split(" ");if(s.$slots.default)for(h=0;h<s.$slots.default.length;h++)if(c=s.$slots.default[h],l=c.tag){var b=!1;for(l.indexOf("messages")>=0&&(d=!0),l.indexOf("subnavbar")>=0&&(u=!0),l.indexOf("searchbar")>=0&&(p=!0),f=0;f<m.length;f++)l.indexOf(m[f])>=0&&(b=!0);b?i.push(c):r.push(c)}else r.push(c);if(i.length>0&&p&&i.push(e("div",{class:{"searchbar-overlay":!0}})),d&&(s.classesObjectPageContent["messages-content"]=!0),s.noPageContent)if(o=[],s.$slots.default&&i.length>0)for(h=0;h<s.$slots.default.length;h++)i.indexOf(s.$slots.default[h])<0&&o.push(s.$slots.default[h]);else o=[s.$slots.default];else o=e("div",{staticClass:"page-content",class:s.classesObjectPageContent,attrs:{"data-ptr-distance":s.pullToRefreshDistance||s.ptrDistance,"data-distance":s.infiniteScrollDistance},on:{"ptr:pullstart":s.onPtrPullstart,"ptr:pullmove":s.onPtrPullmove,"ptr:pullend":s.onPtrPullend,"ptr:refresh":s.onPtrRefresh,"ptr:done":s.onPtrRefreshdone,infinite:s.onInfinite}},"top"===s.infiniteScroll?[n,a,s.$slots.static,r]:[n,s.$slots.static,r,a]);return i.push(s.$slots.fixed),u&&(s.classesObjectPage["with-subnavbar"]=!0),t=e("div",{staticClass:"page",class:s.classesObjectPage,attrs:{"data-page":s.name},on:{"page:beforeinit":s.onPageBeforeInit,"page:init":s.onPageInit,"page:reinit":s.onPageReinit,"page:beforeanimation":s.onPageBeforeAnimation,"page:afteranimation":s.onPageAfterAnimation,"page:beforeremove":s.onPageBeforeRemove,"page:back":s.onPageBack,"page:afterback":s.onPageAfterBack}},[i,o])},props:{name:String,cached:Boolean,"navbar-fixed":Boolean,"navbar-through":Boolean,"toolbar-fixed":Boolean,"toolbar-through":Boolean,"tabbar-fixed":Boolean,"tabbar-through":Boolean,"tabbar-labels-fixed":Boolean,"tabbar-labels-through":Boolean,"with-subnavbar":Boolean,subnavbar:Boolean,"no-navbar":Boolean,"no-toolbar":Boolean,"no-tabbar":Boolean,"pull-to-refresh":Boolean,"pull-to-refresh-distance":Number,"ptr-distance":Number,"pull-to-refresh-layer":{type:Boolean,default:!0},"ptr-layer":{type:Boolean,default:!0},"infinite-scroll":[Boolean,String],"infinite-scroll-distance":Number,"infinite-scroll-preloader":{type:Boolean,default:!0},"hide-bars-on-scroll":Boolean,"hide-navbar-on-scroll":Boolean,"hide-toolbar-on-scroll":Boolean,"hide-tabbar-on-scroll":Boolean,messages:Boolean,tabs:Boolean,"no-page-content":Boolean,"login-screen":Boolean,theme:String,layout:String,"no-swipeback":Boolean},computed:{classesObjectPage:function(){var e={cached:this.cached,"navbar-fixed":this.navbarFixed||this.navbarThrough&&this.$theme.material,"navbar-through":this.navbarThrough,"toolbar-fixed":this.toolbarFixed,"toolbar-through":this.toolbarThrough,"tabbar-fixed":this.tabbarFixed,"tabbar-through":this.tabbarThrough,"tabbar-labels-fixed":this.tabbarLabelsFixed,"tabbar-labels-through":this.tabbarLabelsThrough,"with-subnavbar":this.subnavbar||this.withSubnavbar,"no-navbar":this.noNavbar,"no-toolbar":this.noToolbar,"no-tabbar":this.noTabbar,tabs:this.tabs,"no-swipeback":this.noSwipeBack};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e},classesObjectPageContent:function(){return{"pull-to-refresh-content":this.pullToRefresh,"infinite-scroll":this.infiniteScroll||""===this.infiniteScroll,"infinite-scroll-top":"top"===this.infiniteScroll,"hide-bars-on-scroll":this.hideBarsOnScroll,"hide-navbar-on-scroll":this.hideNavbarOnScroll,"hide-toolbar-on-scroll":this.hideToolbarOnScroll,"hide-tabbar-on-scroll":this.hideTabbarOnScroll,"messages-content":this.messages,"login-screen-content":this.loginScreen}}},methods:{onPtrPullstart:function(e){this.$emit("ptr:pullstart",e)},onPtrPullmove:function(e){this.$emit("ptr:pullmove",e)},onPtrPullend:function(e){this.$emit("ptr:pullend",e)},onPtrRefresh:function(e){this.$emit("ptr:refresh",e,e.detail.done)},onPtrRefreshdone:function(e){this.$emit("ptr:done",e)},onInfinite:function(e){this.$emit("infinite",e)},onPageBeforeInit:function(e){this.f7PageData=e.detail.page,this.$emit("page:beforeinit",e,e.detail.page)},onPageInit:function(e){this.$emit("page:init",e,e.detail.page)},onPageReinit:function(e){this.$emit("page:reinit",e,e.detail.page)},onPageBeforeAnimation:function(e){this.$emit("page:beforeanimation",e,e.detail.page)},onPageAfterAnimation:function(e){this.$emit("page:afteranimation",e,e.detail.page)},onPageBeforeRemove:function(e){this.$emit("page:beforeremove",e,e.detail.page)},onPageBack:function(e){this.$emit("page:back",e,e.detail.page)},onPageAfterBack:function(e){this.$emit("page:afterback",e,e.detail.page)}}},r={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"page-content",class:e.classesObject,on:{"tab:show":e.onTabShow,"tab:hide":e.onTabHide}},[e._t("default")],2)},staticRenderFns:[],props:{tab:Boolean,active:Boolean},computed:{classesObject:function(){var e=this;return{tab:e.tab,active:e.active}}},methods:{onTabShow:function(e){this.$emit("tab:show",e)},onTabHide:function(e){this.$emit("tab:hide",e)}}},s={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"navbar",class:e.classesObject,on:{"navbar:beforeinit":e.onBeforeInit,"navbar:init":e.onInit,"navbar:reinit":e.onReinit,"navbar:beforeremove":e.onBeforeRemove}},[e._t("before-inner"),e._v(" "),t("div",{staticClass:"navbar-inner"},[e.backLink?t("f7-nav-left",{attrs:{"back-link":e.backLink,sliding:e.sliding,"back-link-href":e.backLinkUrl||e.backLinkHref}}):e._e(),e._v(" "),e.title?t("f7-nav-center",{attrs:{title:e.title,sliding:e.sliding}}):e._e(),e._v(" "),e._t("default")],2),e._v(" "),e._t("after-inner")],2)},staticRenderFns:[],updated:function(){var e=this;e.$nextTick(function(){e.$f7.sizeNavbars()})},props:{backLink:[Boolean,String],backLinkUrl:String,backLinkHref:String,sliding:Boolean,title:String,theme:String,layout:String,hidden:Boolean},computed:{classesObject:function(){var e={"navbar-hidden":this.hidden};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}},methods:{hide:function(){if(this.$f7)return this.$f7.hideNavbar(this.$el)},show:function(){if(this.$f7)return this.$f7.showNavbar(this.$el)},size:function(){if(this.$f7&&!this.$theme.material)return this.$f7.sizeNavbars()},onBeforeInit:function(e){this.$emit("navbar:beforeinit",e)},onInit:function(e){this.$emit("navbar:init",e)},onReinit:function(e){this.$emit("navbar:reinit",e)},onBeforeRemove:function(e){this.$emit("navbar:beforeremove",e)}}},l={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"center",class:{sliding:e.sliding}},[e._t("default",[e._v(e._s(e.title))])],2)},staticRenderFns:[],props:{sliding:Boolean,title:String}},c={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"left",class:{sliding:e.sliding}},[e.backLink?t("f7-link",{class:{"icon-only":e.backLink===!0||e.backLink&&e.$theme.material},attrs:{href:e.backLinkUrl||e.backLinkHref||"#",back:"",icon:"icon-back",text:e.backLink===!0||e.$theme.material?void 0:e.backLink}}):e._e(),e._v(" "),e._t("default")],2)},staticRenderFns:[],props:{backLink:[Boolean,String],backLinkUrl:String,backLinkHref:String,sliding:Boolean}},u={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"right",class:{sliding:e.sliding}},[e._t("default")],2)},staticRenderFns:[],props:{sliding:Boolean}},d={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"subnavbar",class:!!e.sliding&&"sliding"},[e._t("default")],2)},staticRenderFns:[],props:{sliding:Boolean}},p={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"toolbar",class:e.classesObject},[e._t("before-inner"),e._v(" "),t("div",{staticClass:"toolbar-inner"},[e._t("default")],2),e._v(" "),e._t("after-inner")],2)},staticRenderFns:[],props:{bottom:Boolean,tabbar:Boolean,labels:Boolean,scrollable:Boolean,theme:String,layout:String,hidden:Boolean},computed:{classesObject:function(){var e={"toolbar-bottom":this.bottom,tabbar:this.tabbar,"tabbar-labels":this.labels,"tabbar-scrollable":this.scrollable,"toolbar-hidden":this.hidden};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}},methods:{hide:function(){if(this.$f7)return this.$f7.hideToolbar(this.$el)},show:function(){if(this.$f7)return this.$f7.showToolbar(this.$el)}}},h={render:function(e){var t,o,n,a,i=this;return i.title&&(t=e("f7-card-header",{domProps:{innerHTML:i.title}})),i.content&&(n=e("div",{domProps:{innerHTML:i.content}}),o=e("f7-card-content",{props:{inner:i.inner}},[n])),i.footer&&(a=e("f7-card-footer",{domProps:{innerHTML:i.footer}})),e("div",{staticClass:"card"},[t,o,a,i.$slots.default])},props:{title:[String,Number],content:[String,Number],footer:[String,Number],inner:{type:Boolean,default:!0}}},f={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"card-header"},[e._t("default")],2)},staticRenderFns:[]},m={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"card-footer"},[e._t("default")],2)},staticRenderFns:[]},b={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"card-content"},[e.inner?t("div",{staticClass:"card-content-inner"},[e._t("default")],2):e._t("default")],2)},staticRenderFns:[],props:{inner:{type:Boolean,default:!0}}},g={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"content-block",class:e.classesObject,on:{"tab:show":e.onTabShow,"tab:hide":e.onTabHide}},[e.inner?t("div",{staticClass:"content-block-inner"},[e._t("default")],2):e._t("default")],2)},staticRenderFns:[],props:{inset:Boolean,inner:Boolean,tabs:Boolean,tab:Boolean,active:Boolean,"no-hairlines":Boolean,"no-hairlines-between":Boolean},computed:{classesObject:function(){var e=this;return{inset:e.inset,tabs:e.tabs,tab:e.tab,active:e.active,"no-hairlines":e.noHairlines,"no-hairlines-between":e.noHairlinesBetween}}},methods:{onTabShow:function(e){this.$emit("tab:show",e)},onTabHide:function(e){this.$emit("tab:hide",e)}}},v={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"content-block-title"},[e._t("default")],2)},staticRenderFns:[]},$={render:function(){var e=this,t=(e.$createElement,e._c);return t("span",{staticClass:"badge",class:e.color?"color-"+e.color:""},[e._t("default")],2)},staticRenderFns:[],props:{color:String}},k={render:function(){var e=this,t=(e.$createElement,e._c);return t("i",{staticClass:"icon",class:e.classesObject,style:{"font-size":e.sizeComputed}},[e._v(e._s(e.iconTextComputed)),e._t("default")],2)},staticRenderFns:[],props:{color:String,material:String,f7:String,ion:String,fa:String,icon:String,"if-material":String,"if-ios":String,size:[String,Number]},computed:{sizeComputed:function(){var e=this,t=e.size;return"number"!=typeof t&&parseFloat(t)!==1*t||(t+="px"),t},iconTextComputed:function(){var e=this,t=e.material||e.f7;return e.ifMaterial&&e.$theme.material&&(e.ifMaterial.indexOf("material:")>=0||e.ifMaterial.indexOf("f7:")>=0)?t=e.ifMaterial.split(":")[1]:e.ifIos&&e.$theme.ios&&(e.ifIos.indexOf("material:")>=0||e.ifIos.indexOf("f7:")>=0)&&(t=e.ifIos.split(":")[1]),t},classesObject:function(){var e={},t=this;if(t.ifMaterial||t.ifIos){var o=t[t.$theme.material?"ifMaterial":"ifIos"].split(":"),n=o[0],a=o[1];"material"!==n&&"fa"!==n&&"f7"!==n||(e.fa="fa"===n,e["material-icons"]="material"===n,e["f7-icons"]="f7"===n),"fa"!==n&&"ion"!==n||(e[n+"-"+a]=!0),"icon"===n&&(e[a]=!0)}else e={"material-icons":this.material,"f7-icons":this.f7,fa:this.fa},this.ion&&(e["ion-"+this.ion]=!0),this.fa&&(e["fa-"+this.fa]=!0),this.icon&&(e[this.icon]=!0);return this.color&&(e["color-"+this.color]=!0),e}}},S={beforeDestroy:function(){var e=this;e.virtual&&e.virtualInit&&e.f7VirtualList&&e.f7VirtualList.destroy&&e.f7VirtualList.destroy()},watch:{virtualItems:function(){var e=this;e.virtual&&e.virtualInit&&e.f7VirtualList&&e.f7VirtualList.replaceAllItems(e.virtualItems)}},render:function(e){var t,o,n=this;o=n.grouped?n.$slots.default:e("ul",{},n.$slots.default);var a=[],i=[];if(n.$slots.default)for(var r=0;r<n.$slots.default.length;r++){var s=n.$slots.default[r].tag;s&&!("li"==s||s.indexOf("list-item")>=0||s.indexOf("list-button")>=0)?a.push(n.$slots.default[r]):i.push(n.$slots.default[r])}return t=e(n.form?"form":"div",{staticClass:"list-block",class:{inset:n.inset,"media-list":n.mediaList,sortable:n.sortable,"accordion-list":n.accordion,"contacts-block":n.contacts,"virtual-list":n.virtual,tab:n.tab,active:n.active,"no-hairlines":n.noHairlines,"no-hairlines-between":n.noHairlinesBetween,"store-data":n.storeData},on:{"sortable:open":n.onSortableOpen,"sortable:close":n.onSortableClose,"sortable:sort":n.onSortableSort,"tab:show":n.onTabShow,"tab:hide":n.onTabHide}},[i.length>0?[e("ul",{},i),a]:a])},props:{inset:Boolean,"media-list":Boolean,grouped:Boolean,sortable:Boolean,label:String,accordion:Boolean,contacts:Boolean,"no-hairlines":Boolean,"no-hairlines-between":Boolean,tab:Boolean,active:Boolean,form:Boolean,"store-data":Boolean,virtual:Boolean,"virtual-init":{type:Boolean,default:!0},"virtual-items":[Array,Object],"virtual-height":[Number,Function],"virtual-rows-before":Number,"virtual-rows-after":Number,"virtual-cols":{type:Number,default:1},"virtual-cache":{type:Boolean,default:!0},"virtual-filtered-only":{type:Boolean,default:!1},"virtual-search-by-item":Function,"virtual-search-all":Function,"virtual-render-item":Function},methods:{onSortableOpen:function(e){this.$emit("sortable:open",e)},onSortableClose:function(e){this.$emit("sortable:close",e)},onSortableSort:function(e){this.$emit("sortable:sort",e,e.detail)},onTabShow:function(e){this.$emit("tab:show",e)},onTabHide:function(e){this.$emit("tab:hide",e)},onF7Init:function(e){var t=this;if(t.virtual&&t.virtualInit){var o=t.$$,n=o(t.$el).find("script").html();(n||t.virtualRenderItem)&&(n&&(n=t.$t7.compile(n)),t.f7VirtualList=e.virtualList(t.$el,{items:t.virtualItems||[],template:n,height:t.virtualHeight||void 0,cols:t.virtualCols,rowsBefore:t.virtualRowsBefore||void 0,rowsAfter:t.virtualRowsAfter||void 0,showFilteredItemsOnly:t.virtualFilteredOnly,searchByItem:t.virtualSearchByItem,searchAll:t.virtualSearchAll,renderItem:t.virtualRenderItem,onItemBeforeInsert:function(e,o){t.$emit("virtual:itembeforeinsert",e,o)},onBeforeClear:function(e,o){t.$emit("virtual:beforeclear",e,o)},onItemsBeforeInsert:function(e,o){t.$emit("virtual:itemsbeforeinsert",e,o)},onItemsAfterInsert:function(e,o){t.$emit("virtual:itemsafterinsert",e,o)}}))}}}},B={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"list-block-group"},[t("ul",[e._t("default")],2)])},staticRenderFns:[],props:{"media-list":Boolean,sortable:Boolean},computed:{sortableComputed:function(){return this.sortable||this.$parent.sortable},mediaListComputed:function(){return this.mediaList||this.$parent.mediaList}},data:function(){return{}}},C={render:function(e){function t(e){return!(!e&&""!==e)}function o(e){return"string"==typeof e&&""!==e}var n,a,i,r=this;if(i=e("f7-list-item-content",{props:{title:r.title,text:r.text,media:r.media,subtitle:r.subtitle,after:r.after,badge:r.badge,"badge-color":r.badgeColor,"media-list":r.mediaListComputed,"accordion-item":r.accordionItem,checkbox:r.checkbox,checked:r.checkedComputed,radio:r.radio,name:r.name,value:r.valueComputed,readonly:r.readonly,required:r.required,disabled:r.disabled},on:r.link||r.accordionItem||r.smartSelect?{}:{click:r.onClick,change:r.onChange}},[r.$slots["content-start"],r.$slots.content,r.$slots["media-start"],r.$slots.media,r.$slots["inner-start"],r.$slots.inner,r.$slots["after-start"],r.$slots.after,r.swipeout||r.accordionItem?[]:r.$slots.default]),(r.link||r.accordionItem||r.smartSelect)&&(a=e("a",{attrs:{href:r.link===!0||r.accordionItem||r.smartSelect?"#":r.link,target:r.linkTarget,"data-searchbar":r.smartSelectSearchbar,"data-searchbar-placeholder":r.smartSelectSearchbarPlaceholder,"data-searchbar-cancel":r.smartSelectSearchbarCancel,"data-page-title":r.smartSelectPageTitle,"data-back-text":r.smartSelectBackText,"data-back-on-select":r.smartSelectBackOnSelect,"data-virtual-list":r.smartSelectVirtualList,"data-virtual-list-height":r.smartSelectVirtualListHeight,"data-open-in":r.smartSelectOpenIn,"data-navbar-theme":r.smartSelectNavbarTheme,"data-form-theme":r.smartSelectFormTheme,"data-view":!!o(r.linkView)&&r.linkView,"data-panel":!!o(r.linkOpenPanel)&&r.linkOpenPanel,"data-popup":!!o(r.linkOpenPopup)&&r.linkOpenPopup,"data-popover":!!o(r.linkOpenPopover)&&r.linkOpenPopover,"data-picker":!!o(r.linkOpenPicker)&&r.linkOpenPicker,"data-login-screen":!!o(r.linkOpenLoginScreen)&&r.linkOpenLoginScreen,"data-sortable":o(r.linkOpenSortable)?r.linkOpenSortable:!!o(r.linkToggleSortable)&&r.linkToggleSortable,"data-force":r.linkForce,"data-reload":r.linkReload,"data-animate-pages":r.linkAnimatePages,"data-ignore-cache":r.linkIgnoreCache,"data-page-name":"string"==typeof r.linkPageName&&r.linkPageName,"data-template":"string"==typeof r.linkTemplate&&r.linkTemplate},class:{"item-link":!0,external:r.linkExternal,back:r.linkBack,"no-fastclick":r.linkNoFastclick,"smart-select":r.smartSelect,"close-panel":t(r.linkClosePanel),"open-panel":r.linkOpenPanel||""===r.linkOpenPanel,"close-popup":t(r.linkClosePopup),"open-popup":r.linkOpenPopup||""===r.linkOpenPopup,"close-popover":t(r.linkClosePopover),"open-popover":r.linkOpenPopover||""===r.linkOpenPopover,"close-picker":t(r.linkClosePicker),"open-picker":r.linkOpenPicker||""===r.linkOpenPicker,"close-login-screen":t(r.linkCloseLoginScreen),"open-login-screen":r.linkOpenLoginScreen||""===r.linkOpenLoginScreen,"close-sortable":t(r.linkCloseSortable),"open-sortable":r.linkOpenSortable||""===r.linkOpenSortable,"toggle-sortable":r.linkToggleSortable||""===r.linkToggleSortable},on:{click:r.onClick}},[i])),r.dividerOrGroupTitle)n=[e("span",r.$slots.default||r.title)];else{var s=r.link||r.smartSelect||r.accordionItem?a:i;n=r.swipeout?[e("div",{class:{"swipeout-content":!0}},[s])]:[s],r.sortableComputed&&n.push(e("div",{class:{"sortable-handler":!0}})),(r.swipeout||r.accordionItem)&&n.push(r.$slots.default),n.unshift(r.$slots["root-start"]),n.push(r.$slots.root)}return e("li",{class:{"item-divider":r.divider,"list-group-title":r.groupTitle,swipeout:r.swipeout,"accordion-item":r.accordionItem},on:{"swipeout:open":r.onSwipeoutOpen,"swipeout:opened":r.onSwipeoutOpened,"swipeout:close":r.onSwipeoutClose,"swipeout:closed":r.onSwipeoutClosed,"swipeout:delete":r.onSwipeoutDelete,"swipeout:deleted":r.onSwipeoutDeleted,swipeout:r.onSwipeout,"accordion:open":r.onAccOpen,"accordion:opened":r.onAccOpened,"accordion:close":r.onAccClose,"accordion:closed":r.onAccClosed}},n)},props:{title:[String,Number],text:[String,Number],media:String,subtitle:[String,Number],link:[Boolean,String],"link-external":Boolean,"link-back":Boolean,"link-no-fastclick":Boolean,"link-force":Boolean,"link-reload":Boolean,"link-animate-pages":Boolean,"link-ignore-cache":Boolean,"link-page-name":String,"link-template":String,"link-target":String,"link-view":String,"link-open-panel":[Boolean,String],"link-close-panel":[Boolean,String],"link-open-popup":[Boolean,String],"link-close-popup":[Boolean,String],"link-open-popover":[Boolean,String],"link-close-popover":[Boolean,String],"link-open-login-screen":[Boolean,String],"link-close-login-screen":[Boolean,String],"link-open-picker":[Boolean,String],"link-close-picker":[Boolean,String],after:[String,Number],badge:[String,Number],"badge-color":String,"media-item":Boolean,"media-list-item":Boolean,"media-list":Boolean,divider:Boolean,"group-title":Boolean,swipeout:Boolean,sortable:Boolean,"accordion-item":Boolean,"smart-select":Boolean,"smart-select-searchbar":Boolean,"smart-select-searchbar-placeholder":String,"smart-select-searchbar-cancel":String,"smart-select-page-title":String,"smart-select-back-text":String,"smart-select-back-on-select":Boolean,"smart-select-virtual-list":Boolean,"smart-select-virtual-list-height":Number,"smart-select-open-in":String,"smart-select-navbar-theme":String,"smart-select-form-theme":String,checkbox:Boolean,checked:Boolean,radio:Boolean,name:String,value:[String,Number,Boolean,Array],"input-value":[String,Number],readonly:Boolean,required:Boolean,disabled:Boolean},computed:{dividerOrGroupTitle:function(){return this.divider||this.groupTitle},sortableComputed:function(){return this.sortable||this.$parent.sortable||this.$parent.sortableComputed},mediaListComputed:function(){return this.mediaList||this.mediaItem||this.$parent.mediaList||this.$parent.mediaListComputed},hasCheckboxModel:function(){var e=this;return e.checkbox&&("boolean"==typeof e.value||Array.isArray(e.value))},hasRadioModel:function(){var e=this;return e.radio&&"undefined"!=typeof e.inputValue},valueComputed:function(){var e=this;return e.inputValue?e.inputValue:e.hasCheckboxModel?void 0:e.value},checkedComputed:function(){var e=this;return e.hasCheckboxModel?e.inputValue&&Array.isArray(e.value)?e.value.indexOf(e.inputValue)>=0:e.value:e.hasRadioModel?e.value===e.inputValue:e.checked}},methods:{onClick:function(e){this.$emit("click",e)},onSwipeoutDeleted:function(e){this.$emit("swipeout:deleted",e)},onSwipeoutDelete:function(e){this.$emit("swipeout:delete",e)},onSwipeoutClose:function(e){this.$emit("swipeout:close",e)},onSwipeoutClosed:function(e){this.$emit("swipeout:closed",e)},onSwipeoutOpen:function(e){this.$emit("swipeout:open",e)},onSwipeoutOpened:function(e){this.$emit("swipeout:opened",e)},onSwipeout:function(e){this.$emit("swipeout",e)},onAccClose:function(e){this.$emit("accordion:close",e)},onAccClosed:function(e){this.$emit("accordion:closed",e)},onAccOpen:function(e){this.$emit("accordion:open",e)},onAccOpened:function(e){this.$emit("accordion:opened",e)},onChange:function(e){var t=this;t.hasCheckboxModel?Array.isArray(t.value)?(e.target.checked?t.value.push(e.target.value):t.value.splice(t.value.indexOf(e.target.value),1),t.$emit("change",e)):t.$emit("input",e.target.checked):t.hasRadioModel?t.$emit("input",e.target.value):t.$emit("change",e)}}},y={render:function(e){var t,o,n,a,i,r,s,l,c,u,d,p=this,h=[],f=[],m=[],b=[],g=[],v=[],$=[],k=[];if(p.$slots.default&&p.$slots.default.length>0)for(var S=0;S<p.$slots.default.length;S++){var B=p.$slots.default[S].data?p.$slots.default[S].data.slot:void 0;B&&"content-start"===B&&h.push(p.$slots.default[S]),B&&"content"===B&&f.push(p.$slots.default[S]),B&&"after-start"===B&&g.push(p.$slots.default[S]),B&&"after"===B&&v.push(p.$slots.default[S]),B&&"media-start"===B&&$.push(p.$slots.default[S]),B&&"media"===B&&k.push(p.$slots.default[S]),B&&"inner-start"===B&&m.push(p.$slots.default[S]),(!B||B&&"inner"===B)&&b.push(p.$slots.default[S])}if((p.radio||p.checkbox)&&(u=e("input",{attrs:{value:p.value,name:p.name,checked:p.checked,readonly:p.readonly,disabled:p.disabled,required:p.required,type:p.radio?"radio":"checkbox"},on:{change:p.onChange},domProps:{checked:p.checked}})),p.media||p.checkbox||p.radio&&p.$theme.material||$.length||k.length)if(p.checkbox||p.radio&&p.$theme.material)if(p.media)d='<i class="icon icon-form-'+(p.radio?"radio":"checkbox")+'"></i>',c=e("div",{class:{"item-media":!0},domProps:{innerHTML:d+(p.media?p.media:"")}});else{var C={icon:!0};C["icon-form-"+(p.radio?"radio":"checkbox")]=!0,d=e("i",{class:C}),c=e("div",{class:{"item-media":!0}},[$,d,k])}else c=p.media?e("div",{staticClass:"item-media",domProps:{innerHTML:p.media}}):e("div",{staticClass:"item-media"},[$,k]);return p.title&&(t=e("div",{staticClass:"item-title",domProps:{innerHTML:p.title}},[p.title])),p.subtitle&&(s=e("div",{staticClass:"item-subtitle",domProps:{innerHTML:p.subtitle}},[p.subtitle])),p.text&&(l=e("div",{staticClass:"item-text",domProps:{innerHTML:p.text}})),(p.after||p.badge||v.length)&&(p.after&&(n=e("span",{domProps:{innerHTML:p.after}})),p.badge&&(a=e("f7-badge",{props:{color:p.badgeColor}},[p.badge])),o=e("div",{staticClass:"item-after"},[g,n,a,v])),p.mediaList&&(r=e("div",{staticClass:"item-title-row"},[t,o])),i=e("div",{staticClass:"item-inner"},p.mediaList?[m,r,s,l,b]:[m,t,o,b]),e(p.checkbox||p.radio?"label":"div",{staticClass:"item-content",class:{"label-checkbox":p.checkbox,"label-radio":p.radio},on:{click:p.onClick}},[h,u,c,i,f])},props:{title:[String,Number],
text:[String,Number],media:String,subtitle:[String,Number],after:[String,Number],badge:[String,Number],"badge-color":String,"media-list":Boolean,checkbox:Boolean,checked:Boolean,radio:Boolean,name:String,value:[String,Number,Boolean,Array],"input-value":[String,Number],readonly:Boolean,required:Boolean,disabled:Boolean},methods:{onClick:function(e){this.$emit("click",e)},onChange:function(e){this.$emit("change",e)}}},w={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{class:"swipeout-actions-"+e.sideComputed},[e._t("default")],2)},staticRenderFns:[],props:{left:Boolean,right:Boolean,side:String},computed:{sideComputed:function(){return this.side?this.side:this.left?"left":(this.right,"right")}},data:function(){return{}}},x={render:function(){var e=this,t=(e.$createElement,e._c);return t("a",{class:e.classObject,attrs:{href:"#"},on:{click:e.onClick}},[e._t("default")],2)},staticRenderFns:[],props:{overswipe:Boolean,close:Boolean,delete:Boolean,color:String,bg:String},computed:{classObject:function(){var e={"swipeout-overswipe":this.overswipe,"swipeout-delete":this.delete,"swipeout-close":this.close};return this.color&&(e["bg-"+this.color]=!0),this.bg&&(e["bg-"+this.bg]=!0),e}},data:function(){return{}},methods:{onClick:function(e){this.$emit("click",e)}}},P={render:function(e){var t,o=this;return t=o.title?e("a",{staticClass:"item-link list-button",attrs:o.attrsObject,class:o.classesObject,domProps:{innerHTML:o.title},on:{click:o.onClick}}):e("a",{staticClass:"item-link list-button",attrs:o.attrsObject,class:o.classesObject,on:{click:o.onClick}},[o.$slots.default]),e("li",{},[t])},props:{title:[String,Number],link:[Boolean,String],href:[Boolean,String],external:Boolean,"link-external":Boolean,back:Boolean,"link-back":Boolean,"no-fastclick":Boolean,"link-no-fastlick":Boolean,color:String,force:Boolean,reload:Boolean,animatePages:Boolean,ignoreCache:Boolean,pageName:String,template:String,view:String,openPanel:[Boolean,String],closePanel:[Boolean,String],openPopup:[Boolean,String],closePopup:[Boolean,String],openPopover:[Boolean,String],closePopover:[Boolean,String],openLoginScreen:[Boolean,String],closeLoginScreen:[Boolean,String],openPicker:[Boolean,String],closePicker:[Boolean,String],tabLink:[Boolean,String],openSortable:[Boolean,String],closeSortable:[Boolean,String],toggleSortable:[Boolean,String]},computed:{attrsObject:function(){function e(e){return"string"==typeof e&&""!==e}var t=this,o={href:"boolean"==typeof t.link&&"boolean"==typeof t.href?"#":t.link||t.href},n=t.$options.propsData;return"force"in n&&(o["data-force"]=t.force),"reload"in n&&(o["data-reload"]="true"),"animatePages"in n&&(o["data-animate-pages"]="true"),"ignoreCache"in n&&(o["data-ignore-cache"]="true"),t.pageName&&(o["data-page-name"]=t.pageName),t.template&&(o["data-template"]=t.template),t.view&&(o["data-view"]=t.view),e(t.openPanel)&&(o["data-panel"]=t.openPanel),e(t.openPopup)&&(o["data-popup"]=t.openPopup),e(t.openPopover)&&(o["data-popover"]=t.openPopover),e(t.openPicker)&&(o["data-picker"]=t.openPicker),e(t.openLoginScreen)&&(o["data-login-screen"]=t.openLoginScreen),e(t.openSortable)&&(o["data-sortable"]=t.openSortable),e(t.toggleSortable)&&(o["data-sortable"]=t.toggleSortable),e(t.closePopup)&&(o["data-popup"]=t.closePopup),e(t.closePopover)&&(o["data-popover"]=t.closePopover),e(t.closePicker)&&(o["data-picker"]=t.closePicker),e(t.closeLoginScreen)&&(o["data-login-screen"]=t.closeLoginScreen),e(t.closeSortable)&&(o["data-sortable"]=t.closeSortable),e(t.tabLink)&&(o["data-tab"]=t.tabLink),o},classesObject:function(){function e(e){return!(!e&&""!==e)}var t=this,o={external:t.external||t.linkExternal,back:t.back||t.linkBack,"no-fastclick":t.noFastclick||t.linkNoFastclick};return e(t.closePanel)&&(o["close-panel"]=!0),(t.openPanel||""===t.openPanel)&&(o["open-panel"]=!0),e(t.closePopup)&&(o["close-popup"]=!0),(t.openPopup||""===t.openPopup)&&(o["open-popup"]=!0),e(t.closePopover)&&(o["close-popover"]=!0),(t.openPopover||""===t.openPopover)&&(o["open-popover"]=!0),e(t.closePicker)&&(o["close-picker"]=!0),(t.openPicker||""===t.openPicker)&&(o["open-picker"]=!0),e(t.closeLoginScreen)&&(o["close-login-screen"]=!0),(t.openLoginScreen||""===t.openLoginScreen)&&(o["open-login-screen"]=!0),e(t.closeSortable)&&(o["close-sortable"]=!0),(t.openSortable||""===t.openSortable)&&(o["open-sortable"]=!0),(t.toggleSortable||""===t.toggleSortable)&&(o["toggle-sortable"]=!0),e(t.tabLink)&&(o["tab-link"]=!0),t.color&&(o["color-"+t.color]=!0),o}},methods:{onClick:function(e){this.$emit("click",e)}}},_={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"list-block-label"},[e._t("default")],2)},staticRenderFns:[]},O={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"accordion-list"},[e._t("default")],2)},staticRenderFns:[]},M={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"accordion-item",on:{"accordion:open":e.onOpen,"accordion:opened":e.onOpened,"accordion:close":e.onClose,"accordion:closed":e.onClosed}},[e._t("default")],2)},staticRenderFns:[],methods:{onOpen:function(e){this.$emit("accordion:open",e)},onOpened:function(e){this.$emit("accordion:opened",e)},onClose:function(e){this.$emit("accordion:close",e)},onClosed:function(e){this.$emit("accordion:closed",e)}}},L={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"accordion-item-toggle"},[e._t("default")],2)},staticRenderFns:[]},F={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"accordion-item-content"},[e._t("default")],2)},staticRenderFns:[]},T={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"buttons-row",class:e.colorComputed?"theme-"+e.colorComputed:""},[e._t("default")],2)},staticRenderFns:[],props:{color:String,theme:String,bg:String},computed:{colorComputed:function(){return this.color||this.theme||this.bg}}},I={props:{noLinkClass:Boolean,noFastclick:Boolean,external:Boolean,color:String,bg:String,theme:String,text:String,iconOnly:Boolean,icon:String,iconMaterial:String,iconIon:String,iconFa:String,iconF7:String,iconIfMaterial:String,iconIfIos:String,iconSize:[String,Number],rippleColor:String,href:{type:String,default:"#"},round:Boolean,fill:Boolean,big:Boolean,raised:Boolean,force:Boolean,reload:Boolean,animatePages:Boolean,ignoreCache:Boolean,pageName:String,template:String,view:String,openPanel:[Boolean,String],closePanel:[Boolean,String],openPopup:[Boolean,String],closePopup:[Boolean,String],openPopover:[Boolean,String],closePopover:[Boolean,String],openLoginScreen:[Boolean,String],closeLoginScreen:[Boolean,String],openPicker:[Boolean,String],closePicker:[Boolean,String],tabLink:[Boolean,String],openSortable:[Boolean,String],closeSortable:[Boolean,String],toggleSortable:[Boolean,String],active:Boolean,badge:[String,Number],iconBadge:[String,Number],badgeColor:[String],back:Boolean},computed:{attrsObject:function(){function e(e){return"string"==typeof e&&""!==e}var t=this,o={href:t.href},n=t.$options.propsData;return"force"in n&&(o["data-force"]=t.force),"reload"in n&&(o["data-reload"]="true"),"animatePages"in n&&(o["data-animate-pages"]="true"),"ignoreCache"in n&&(o["data-ignore-cache"]="true"),t.pageName&&(o["data-page-name"]=t.pageName),t.template&&(o["data-template"]=t.template),t.view&&(o["data-view"]=t.view),e(t.openPanel)&&(o["data-panel"]=t.openPanel),e(t.openPopup)&&(o["data-popup"]=t.openPopup),e(t.openPopover)&&(o["data-popover"]=t.openPopover),e(t.openPicker)&&(o["data-picker"]=t.openPicker),e(t.openLoginScreen)&&(o["data-login-screen"]=t.openLoginScreen),e(t.openSortable)&&(o["data-sortable"]=t.openSortable),e(t.toggleSortable)&&(o["data-sortable"]=t.toggleSortable),e(t.closePopup)&&(o["data-popup"]=t.closePopup),e(t.closePopover)&&(o["data-popover"]=t.closePopover),e(t.closePicker)&&(o["data-picker"]=t.closePicker),e(t.closeLoginScreen)&&(o["data-login-screen"]=t.closeLoginScreen),e(t.closeSortable)&&(o["data-sortable"]=t.closeSortable),e(t.tabLink)&&(o["data-tab"]=t.tabLink),o},classesObject:function(){function e(e){return!(!e&&""!==e)}var t=this,o={};t.$options.propsData;return t.rippleColor&&(o["ripple-color-"+t.rippleColor]=!0),t.color&&(o["color-"+t.color]=!0),t.theme&&(o["theme-"+t.theme]=!0),t.bg&&(o["bg-"+t.bg]=!0),o.back=t.back,o.external=t.external,o["no-fastclick"]=t.noFastclick,["round","fill","big","raised"].forEach(function(e,n){t[e]&&(o["button-"+e]=!0)}),o.active=t.active,e(t.closePanel)&&(o["close-panel"]=!0),(t.openPanel||""===t.openPanel)&&(o["open-panel"]=!0),e(t.closePopup)&&(o["close-popup"]=!0),(t.openPopup||""===t.openPopup)&&(o["open-popup"]=!0),e(t.closePopover)&&(o["close-popover"]=!0),(t.openPopover||""===t.openPopover)&&(o["open-popover"]=!0),e(t.closePicker)&&(o["close-picker"]=!0),(t.openPicker||""===t.openPicker)&&(o["open-picker"]=!0),e(t.closeLoginScreen)&&(o["close-login-screen"]=!0),(t.openLoginScreen||""===t.openLoginScreen)&&(o["open-login-screen"]=!0),e(t.closeSortable)&&(o["close-sortable"]=!0),(t.openSortable||""===t.openSortable)&&(o["open-sortable"]=!0),(t.toggleSortable||""===t.toggleSortable)&&(o["toggle-sortable"]=!0),(t.tabLink||""===t.tabLink)&&(o["tab-link"]=!0),o}},methods:{onClick:function(e){this.$emit("click",e)}}},N={mixins:[I],render:function(e){var t,o,n,a,i,r=this;n=(r.tabLink||""===r.tabLink)&&r.$parent&&r.$parent.tabbar&&r.$parent.labels,r.text&&(r.badge&&(a=e("f7-badge",{props:{color:r.badgeColor}},r.badge)),o=e("span",{class:{"tabbar-label":n}},[r.text,a])),(r.icon||r.iconMaterial||r.iconIon||r.iconFa||r.iconF7||r.iconIfMaterial||r.iconIfIos)&&(r.iconBadge&&(i=e("f7-badge",{props:{color:r.badgeColor}},r.iconBadge)),t=e("f7-icon",{props:{material:r.iconMaterial,ion:r.iconIon,fa:r.iconFa,f7:r.iconF7,icon:r.icon,ifMaterial:r.iconIfMaterial,ifIos:r.iconIfIos,size:r.iconSize}},[i])),(!r.text&&r.$slots.default&&0===r.$slots.default.length||r.iconOnly||!r.text&&!r.$slots.default)&&(r.classesObject["icon-only"]=!0),r.classesObject.link=!r.noLinkClass&&!n;var s=e("a",{class:r.classesObject,attrs:r.attrsObject,on:{click:r.onClick}},[t,o,r.$slots.default]);return s},methods:{onClick:function(e){this.$emit("click",e)}}},R={render:function(e){var t,o,n=this;n.text&&(o=e("span",{},n.text)),(n.icon||n.iconMaterial||n.iconIon||n.iconFa||n.iconF7||n.iconIfMaterial||n.iconIfIos)&&(t=e("f7-icon",{props:{material:n.iconMaterial,ion:n.iconIon,fa:n.iconFa,f7:n.iconF7,icon:n.icon,ifMaterial:n.iconIfMaterial,ifIos:n.iconIfIos,size:n.iconSize}})),n.classesObject.button=!0;var a=e("a",{class:n.classesObject,attrs:n.attrsObject,on:{click:n.onClick}},[t,o,n.$slots.default]);return a},mixins:[I],methods:{onClick:function(e){this.$emit("click",e)}}},j={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"row",class:{"no-gutter":e.noGutter}},[e._t("default")],2)},staticRenderFns:[],props:{"no-gutter":Boolean},data:function(){return{}}},E={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{class:"col-"+e.width+(e.tabletWidth?" tablet-"+e.tabletWidth:"")},[e._t("default")],2)},staticRenderFns:[],props:{width:{type:[Number,String],default:"auto"},"tablet-width":{type:[Number,String]}},data:function(){return{}}},A={render:function(){var e=this,t=(e.$createElement,e._c);return t("span",{staticClass:"preloader",class:e.color?"color-"+e.color+" preloader-"+e.color:"",style:{width:e.sizeComputed?e.sizeComputed+"px":"",height:e.sizeComputed?e.sizeComputed+"px":""}},[e.$theme.material?t("span",{staticClass:"preloader-inner"},[t("span",{staticClass:"preloader-inner-gap"}),e._v(" "),e._m(0),e._v(" "),e._m(1)]):e._e()])},staticRenderFns:[function(){var e=this,t=(e.$createElement,e._c);return t("span",{staticClass:"preloader-inner-left"},[t("span",{staticClass:"preloader-inner-half-circle"})])},function(){var e=this,t=(e.$createElement,e._c);return t("span",{staticClass:"preloader-inner-right"},[t("span",{staticClass:"preloader-inner-half-circle"})])}],props:{color:String,size:[Number,String]},computed:{sizeComputed:function(){var e=this.size;return e&&"string"==typeof e&&e.indexOf("px")>=0&&(e=e.replace("px","")),e}}},H={render:function(e){var t=this,o=t.color,n=t.progress,a=t.infinite;return e("span",{staticClass:"progressbar",class:[o?"color-"+o+" progressbar-"+o:"",a?"progressbar-infinite":""].join(" ")},[e("span",{style:{transform:n?"translate3d("+(-100+n)+"%,0,0)":""}})])},props:{color:String,progress:Number,infinite:Boolean},methods:{set:function(e,t){var o=this;if(o.$f7)return o.$f7.setProgressbar(o.$el,e,t)},show:function(e,t,o){var n=this;if(n.$f7)return n.$f7.showProgressbar(e,t,o)}}},z={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"item-title",class:{label:!e.floating,"floating-label":e.floating}},[e._t("default")],2)},staticRenderFns:[],props:{floating:Boolean}},D={render:function(e){var t,o=this,n={name:o.name,type:o.type,placeholder:o.placeholder,id:o.id,value:o.valueComputed,size:o.size,accept:o.accept,autocomplete:o.autocomplete,autocorrect:o.autocorrect,autocapitalize:o.autocapitalize,spellcheck:o.spellcheck,autofocus:o.autofocus,autosave:o.autosave,checked:o.checkedComputed,disabled:o.disabled,max:o.max,maxlength:o.maxlength,min:o.min,minlength:o.minlength,step:o.step,multiple:o.multiple,readonly:o.readonly,required:o.required,style:o.style,color:o.color,pattern:o.pattern},a={focus:o.onFocus,blur:o.onBlur,input:o.onInput,change:o.onChange,click:o.onClick,keypress:o.onKeyPress,keyup:o.onKeyUp,keydown:o.onKeyDown,beforeinput:o.onBeforeInput,compositionstart:o.onCompositionStart,compositionupdate:o.onCompositionUpdate,compositionend:o.onCompositionEnd,focusin:o.onFocusIn,focusout:o.onFocusOut,dblclick:o.onDblClick,mousedown:o.onMouseDown,mouseenter:o.onMouseEnter,mouseleave:o.onMouseLeave,mousemove:o.onMouseMove,mouseout:o.onMouseOut,mouseover:o.onMouseOver,mouseup:o.onMouseUp,wheel:o.onWheel,select:o.onSelect};if("select"===o.type||"textarea"===o.type)if("select"===o.type)o.hasSelectModel?(delete n.value,t=e("select",{attrs:n,on:a},o.$slots.default)):t=e("select",{attrs:n,on:a,domProps:{value:o.valueComputed}},o.$slots.default);else{var i=o.$slots.default;o.value&&(delete n.value,i=o.value),t=e("textarea",{attrs:n,on:a},i)}else t=o.$slots.default&&o.$slots.default.length>0||!o.type?o.$slots.default:"switch"===o.type?e("f7-switch",{props:n,on:a}):"range"===o.type?e("f7-range",{props:n,on:a}):e("input",{attrs:n,on:a,domProps:{value:o.valueComputed,checked:o.checkedComputed}});var r=o.wrap?e("div",{staticClass:"item-input"},[t]):t;return r},watch:{value:function(){var e=this;if(e.hasSelectModel){var t=e.$$;t(e.$el).find("option").each(function(t,o){e.value.indexOf(o.value)>=0?o.selected=!0:o.selected=!1})}}},mounted:function(){var e=this;if(e.hasSelectModel){var t=e.$$;t(e.$el).find("option").each(function(t,o){e.value.indexOf(o.value)>=0?o.selected=!0:o.selected=!1})}},props:{type:String,name:String,placeholder:String,id:String,value:[String,Number,Boolean,Array,Object],inputValue:[String,Number],size:[String,Number],accept:[String,Number],autocomplete:[String],autocorrect:[String],autocapitalize:[String],spellcheck:[String],autofocus:Boolean,autosave:String,checked:Boolean,disabled:Boolean,max:[String,Number],min:[String,Number],step:[String,Number],maxlength:[String,Number],minlength:[String,Number],multiple:Boolean,readonly:Boolean,required:Boolean,style:String,pattern:String,color:String,wrap:{type:Boolean,default:!0}},computed:{hasCheckboxModel:function(){var e=this;return("checkbox"===e.type||"switch"===e.type)&&("boolean"==typeof e.value||Array.isArray(e.value))},hasRadioModel:function(){var e=this;return"radio"===e.type&&"undefined"!=typeof e.inputValue},hasSelectModel:function(){var e=this;return"select"===e.type&&Array.isArray(e.value)},valueComputed:function(){var e=this;if(e.inputValue)return e.inputValue;if(!e.hasCheckboxModel)return e.$options.propsData&&e.$options.propsData.value?e.value:void 0},checkedComputed:function(){var e=this;return e.hasCheckboxModel?e.inputValue&&Array.isArray(e.value)?e.value.indexOf(e.inputValue)>=0:e.value:e.hasRadioModel?e.value===e.inputValue:e.checked}},methods:{onInput:function(e){this.hasSelectModel||(e&&e.type&&"input"===e.type?this.$emit("input",e.target.value):this.$emit("input",e))},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)},onChange:function(e){var t=this;if(t.hasCheckboxModel)Array.isArray(t.value)?(e.target.checked?t.value.push(e.target.value):t.value.splice(t.value.indexOf(e.target.value),1),t.$emit("change",e)):t.$emit("input",e.target.checked);else if(t.hasRadioModel)t.$emit("input",e.target.value);else if(t.hasSelectModel){var o=Array.prototype.filter.call(e.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});t.$emit("input",o)}else t.$emit("change",e)},onClick:function(e){this.$emit("click",e)},onKeyPress:function(e){this.$emit("keypress",e)},onKeyUp:function(e){this.$emit("keyup",e)},onKeyDown:function(e){this.$emit("keydown",e)},onBeforeInput:function(e){this.$emit("beforeinput",e)},onCompositionStart:function(e){this.$emit("compositionstart",e)},onCompositionUpdate:function(e){this.$emit("compositionupdate",e)},onCompositionEnd:function(e){this.$emit("compositionend",e)},onFocusIn:function(e){this.$emit("focusin",e)},onFocusOut:function(e){this.$emit("focusout",e)},onDblClick:function(e){this.$emit("dblclick",e)},onMouseDown:function(e){this.$emit("mousedown",e)},onMouseEnter:function(e){this.$emit("mouseenter",e)},onMouseLeave:function(e){this.$emit("mouseleave",e)},onMouseMove:function(e){this.$emit("mousemove",e)},onMouseOut:function(e){this.$emit("mouseout",e)},onMouseOver:function(e){this.$emit("mouseover",e)},onMouseUp:function(e){this.$emit("mouseup",e)},onWheel:function(e){this.$emit("wheel",e)},onSelect:function(e){this.$emit("select",e)}}},V={render:function(){var e=this,t=(e.$createElement,e._c);return t("label",{staticClass:"label-switch",class:e.color?"color-"+e.color:"",on:{click:e.onClick}},[t("input",{style:e.style,attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled,readonly:e.readonly,required:e.required},domProps:{value:e.valueComputed,checked:e.checkedComputed},on:{input:e.onInput,change:e.onChange}}),e._v(" "),t("div",{staticClass:"checkbox"})])},staticRenderFns:[],props:{name:String,id:String,value:[String,Number,Boolean,Array],inputValue:[String,Number],checked:Boolean,disabled:Boolean,readonly:Boolean,required:Boolean,style:String,color:String},computed:{hasCheckboxModel:function(){return"boolean"==typeof this.value||Array.isArray(this.value)},valueComputed:function(){var e=this;if(e.inputValue)return e.inputValue;if(!e.hasCheckboxModel)return e.$options.propsData&&e.$options.propsData.value?e.value:void 0},checkedComputed:function(){var e=this;return e.hasCheckboxModel?e.inputValue&&Array.isArray(e.value)?e.value.indexOf(e.inputValue)>=0:e.value:e.checked}},methods:{onInput:function(e){this.$emit("input",e)},onChange:function(e){var t=this;t.hasCheckboxModel?Array.isArray(t.value)?(e.target.checked?t.value.push(e.target.value):t.value.splice(t.value.indexOf(e.target.value),1),t.$emit("change",e)):t.$emit("input",e.target.checked):t.$emit("change",e)},onClick:function(e){this.$emit("click",e)}}},q={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"range-slider",class:e.color?"color-"+e.color:""},[t("input",{style:e.style,attrs:{type:"range",name:e.name,id:e.id,disabled:e.disabled,readonly:e.readonly,required:e.required,max:e.max,min:e.min,step:e.step},domProps:{value:e.value},on:{input:e.onInput,change:e.onChange,click:e.onClick}})])},staticRenderFns:[],props:{name:String,id:String,value:[String,Number],disabled:Boolean,readonly:Boolean,required:Boolean,style:String,max:[String,Number],min:[String,Number],step:[String,Number],color:String},methods:{onInput:function(e){this.$emit("input",e.target.value)},onChange:function(e){this.$emit("change",e)},onClick:function(e){this.$emit("click",e)}}},U={render:function(){var e=this,t=(e.$createElement,e._c);return t("span",{staticClass:"chip",class:e.chipClassObject,on:{click:e.onClick}},[e.media?t("span",{staticClass:"chip-media",class:e.mediaClassObject,domProps:{innerHTML:e._s(e.media)}}):e._e(),e._v(" "),e.text?t("span",{staticClass:"chip-label",domProps:{innerHTML:e._s(e.text)}}):e._e(),e._v(" "),e.deleteable?t("a",{staticClass:"chip-delete",attrs:{href:"#"},on:{click:e.onDeleteClick}}):e._e()])},staticRenderFns:[],props:{media:String,text:[String,Number],deleteable:Boolean,color:String,bg:String,mediaBg:String,mediaColor:String},computed:{mediaClassObject:function(){var e={};return this.mediaColor&&(e["color-"+this.mediaColor]=!0),this.mediaBg&&(e["color-"+this.mediaBg]=!0),e},chipClassObject:function(){var e={};return this.color&&(e["color-"+this.color]=!0),this.bg&&(e["bg-"+this.bg]=!0),e}},methods:{onClick:function(e){this.$emit("click",e)},onDeleteClick:function(e){this.$emit("delete",e)}}},G={render:function(){var e=this,t=(e.$createElement,e._c);return t("a",{staticClass:"floating-button",class:!!e.color&&"color-"+e.color,attrs:{href:"#"},on:{click:e.onClick}},[e._t("default")],2)},staticRenderFns:[],props:{color:String},methods:{onClick:function(e){this.$emit("click",e)}}},K={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"speed-dial",class:!!e.theme&&"theme-"+e.theme},[e._t("default")],2)},staticRenderFns:[],props:{theme:String}},W={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"speed-dial-buttons",class:!!e.theme&&"theme-"+e.theme},[e._t("default")],2)},staticRenderFns:[],props:{theme:String}},Z={render:function(){var e=this,t=(e.$createElement,e._c);return t("a",{class:e.classesObject,attrs:{href:"#"},on:{click:e.onClick}},[e._t("default")],2)},staticRenderFns:[],props:{color:String,closeSpeedDial:Boolean},computed:{classesObject:function(){var e={};return this.color&&(e["color-"+this.color]=!0),this.closeSpeedDial&&(e["close-speed-dial"]=!0),e}},methods:{onClick:function(e){this.$emit("click",e)}}},Q={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"swiper-container"},[t("div",{staticClass:"swiper-wrapper"},[e._t("default")],2),e._v(" "),e.paginationComputed===!0?t("div",{staticClass:"swiper-pagination"}):e._e(),e._v(" "),e.scrollbarComputed===!0?t("div",{staticClass:"swiper-scrollbar"}):e._e(),e._v(" "),e.nextButtonComputed===!0?t("div",{staticClass:"swiper-button-next"}):e._e(),e._v(" "),e.prevButtonComputed===!0?t("div",{staticClass:"swiper-button-prev"}):e._e()])},staticRenderFns:[],beforeDestroy:function(){var e=this;e.init&&e.swiper&&e.swiper.destroy&&e.swiper.destroy()},props:{params:Object,pagination:[Boolean,String,Object],scrollbar:[Boolean,String,Object],"next-button":[Boolean,String,Object],"prev-button":[Boolean,String,Object],init:{type:Boolean,default:!0}},computed:{paramsComputed:function(){return this.params||{}},paginationComputed:function(){var e=this;return e.pagination===!0||""===e.pagination?(e.paramsComputed.pagination=".swiper-pagination",!0):("object"==typeof e.pagination||"string"==typeof e.pagination)&&(e.paramsComputed.pagination=e.pagination,!0)},scrollbarComputed:function(){var e=this;return e.scrollbar||""===e.scrollbar?(e.paramsComputed.scrollbar=".swiper-scrollbar",!0):("object"==typeof e.scrollbar||"string"==typeof e.scrollbar)&&(e.paramsComputed.scrollbar=e.scrollbar,!0)},nextButtonComputed:function(){var e=this;return e.nextButton||""===e.nextButton?(e.paramsComputed.nextButton=".swiper-button-next",!0):("object"==typeof e.nextButton||"string"==typeof e.nextButton)&&(e.paramsComputed.nextButton=e.nextButton,!0)},prevButtonComputed:function(){var e=this;return e.prevButton||""===e.prevButton?(e.paramsComputed.prevButton=".swiper-button-prev",!0):("object"==typeof e.prevButton||"string"==typeof e.prevButton)&&(e.paramsComputed.prevButton=e.prevButton,!0)}},methods:{onF7Init:function(){this.init&&(this.swiper=new window.Swiper(this.$el,this.paramsComputed))}}},J={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"swiper-slide"},[e.zoom?t("div",{staticClass:"swiper-zoom-container"},[e._t("default")],2):e._t("default")],2)},staticRenderFns:[],props:{zoom:Boolean}},X={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"messages"},[e._t("default")],2)},staticRenderFns:[],beforeDestroy:function(){this.f7Messages&&this.f7Messages.destroy&&this.f7Messages.destroy()},beforeUpdate:function(e,t){var o=this;o.init&&o.$children.forEach(function(e){o.$$(e.$el).addClass("message-appeared")})},updated:function(e,t){var o=this;o.init&&(o.$children.forEach(function(e){var t=o.$$(e.$el);t.hasClass("message-appeared")||t.addClass("message-appear-from-bottom")}),this.f7Messages&&this.f7Messages.layout&&this.autoLayout&&this.f7Messages.layout(),this.f7Messages&&this.f7Messages.layout&&this.autoLayout&&this.f7Messages.scrollMessages())},props:{autoLayout:{type:Boolean,default:!0},newMessagesFirst:Boolean,messages:Array,scrollMessages:{type:Boolean,default:!0},scrollMessagesOnlyOnEdge:Boolean,init:{type:Boolean,default:!0}},methods:{addMessage:function(e,t,o){if(this.f7Messages)return this.f7Messages.addMessage(e,t,o)},appendMessage:function(e,t){if(this.f7Messages)return this.f7Messages.appendMessage(e,t)},prependMessage:function(e,t){if(this.f7Messages)return this.f7Messages.prependMessage(e,t)},addMessages:function(e,t,o){if(this.f7Messages)return this.f7Messages.addMessages(e,t,o)},removeMessage:function(e){if(this.f7Messages)return this.f7Messages.removeMessage(e)},removeMessages:function(e){if(this.f7Messages)return this.f7Messages.removeMessages(e)},scroll:function(){if(this.f7Messages)return this.f7Messages.scrollMessages()},layout:function(){if(this.f7Messages)return this.f7Messages.layout()},clean:function(){if(this.f7Messages)return this.f7Messages.clean()},onF7Init:function(e){var t=this;t.init&&(t.f7Messages=e.messages(t.$el,{autoLayout:t.autoLayout,newMessagesFirst:t.newMessagesFirst,messages:t.messages,scrollMessages:t.scrollMessages,scrollMessagesOnlyOnEdge:t.scrollMessagesOnlyOnEdge}))}}},Y={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{class:e.classesObject,on:{click:e.onClick}},[e._v("\n  "+e._s(e.day)+" "),e.time?t("span",[e._v(e._s(e.time))]):e._e(),e._v(" "),e._t("start"),e._v(" "),e.name?t("div",{staticClass:"message-name",on:{click:e.onNameClick}},[e._v(e._s(e.name))]):e._e(),e._v(" "),t("div",{staticClass:"message-text",on:{click:e.onTextClick}},[e._t("default",[e._v(e._s(e.text))]),e._v(" "),e.date?t("div",{staticClass:"message-date"},[e._v(e._s(e.date))]):e._e()],2),e._v(" "),e.avatar?t("div",{staticClass:"message-avatar",style:{"background-image":"url("+e.avatar+")"},on:{click:e.onAvatarClick}}):e._e(),e._v(" "),e.label?t("div",{staticClass:"message-label"},[e._v(e._s(e.label))]):e._e(),e._v(" "),e._t("end")],2)},staticRenderFns:[],props:{text:String,name:String,avatar:String,type:{type:String,default:"sent"},label:String,day:String,date:String,time:String,last:{type:Boolean,default:!0},first:{type:Boolean,default:!0}},computed:{classesObject:function(){var e={},t=this;if(t.day||t.time)e["messages-date"]=t.day||t.time;else{var o="bottom";t.$parent.newFirst&&(o="top"),e["message-date"]=t.day||t.time,e.message=!(t.day||t.time),e["message-"+t.type]=!0,e["message-with-avatar"]=t.avatar,e["message-first"]=t.first,e["message-last"]=t.last,e["message-with-tail"]=t.last}return e}},methods:{onClick:function(e){this.$emit("click",e)},onNameClick:function(e){this.$emit("click:name",e)},onTextClick:function(e){this.$emit("click:text",e)},onAvatarClick:function(e){this.$emit("click:avatar",e)}}},ee={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"toolbar messagebar"},[e._t("before-inner"),e._v(" "),t("div",{staticClass:"toolbar-inner"},[e._t("before-textarea"),e._v(" "),t("textarea",{ref:"area",attrs:{placeholder:e.placeholder,disabled:e.disabled,name:e.name,readonly:e.readonly},on:{input:e.onInput,change:e.onChange,focus:e.onFocus,blur:e.onBlur}},[e._v(e._s(e.value))]),e._v(" "),e._t("after-textarea"),e._v(" "),e.sendLink&&e.sendLink.indexOf("<")>=0?t("f7-link",{domProps:{innerHTML:e._s(e.sendLink)},on:{click:e.onClick}}):t("f7-link",{on:{click:e.onClick}},[e._t("send-link",[e._v(e._s(e.sendLink))])],2),e._v(" "),e._t("default")],2),e._v(" "),e._t("after-inner")],2)},staticRenderFns:[],beforeDestroy:function(){this.f7Messagebar&&this.f7Messagebar.destroy&&this.f7Messagebar.destroy()},props:{placeholder:{type:String,default:"Message"},init:{type:Boolean,default:!0},maxHeight:Number,sendLink:String,value:[String,Number],disabled:Boolean,readonly:Boolean,name:String},methods:{getValue:function(){if(this.f7Messagebar)return this.f7Messagebar.value()},setValue:function(e){if(this.f7Messagebar)return this.f7Messagebar.value(e)},clear:function(){if(this.f7Messagebar)return this.f7Messagebar.clear()},onChange:function(e){this.$emit("change",e)},onInput:function(e){this.$emit("input",e.target.value)},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)},onClick:function(e){var t=this.$refs.area.value,o=this.f7Messagebar?this.f7Messagebar.clear:function(){};this.$emit("submit",t,o),this.$emit("click",e)},onF7Init:function(){var e=this;e.init&&(e.f7Messagebar=e.$f7.messagebar(e.$el,{maxHeight:e.maxHeight}))}}},te={render:function(e){var t,o,n,a,i=this;return n=e("input",{attrs:{placeholder:i.placeholder,type:"search"},on:{input:i.onInput,change:i.onChange,focus:i.onFocus,blur:i.onBlur}}),i.clearButtonComputed&&(t=e("a",{staticClass:"searchbar-clear",attrs:{href:"#"},on:{click:i.onClearClick}})),i.cancelLink&&(o=e("a",{staticClass:"searchbar-cancel",attrs:{href:"#"},domProps:{innerHTML:i.cancelLink},on:{click:i.onCancelClick}})),a=e("div",{staticClass:"searchbar-input"},[n,t]),e(i.form?"form":"div",{staticClass:"searchbar",on:{submit:i.onSubmit,"searchbar:search":i.onSearch,"searchbar:enable":i.onEnable,"searchbar:disable":i.onDisable,"searchbar:clear":i.onClear}},[i.$slots["before-input"],a,i.$slots["after-input"],o,i.$slots.default])},beforeDestroy:function(){this.f7Searchbar&&this.f7Searchbar.destroy&&this.f7Searchbar.destroy()},props:{form:{type:Boolean,default:!0},placeholder:{type:String,default:"Search"},cancelLink:String,clear:Boolean,clearButton:{type:Boolean,default:!0},params:Object,searchList:[String,Object],searchIn:{type:String,default:".item-title"},searchBy:String,found:[String,Object],notFound:[String,Object],overlay:[String,Object],ignore:{type:String,default:".searchbar-ignore"},customSearch:{type:Boolean,default:!1},removeDiacritics:{type:Boolean,default:!1},hideDividers:{type:Boolean,default:!0},hideGroups:{type:Boolean,default:!0},init:{type:Boolean,default:!0}},computed:{clearButtonComputed:function(){var e=this,t=e.clearButton;return e.$options.propsData.clear===!1&&(t=!1),t}},methods:{search:function(e){if(this.f7Searchbar)return this.f7Searchbar.search(e)},enable:function(){if(this.f7Searchbar)return this.f7Searchbar.enable()},disable:function(){if(this.f7Searchbar)return this.f7Searchbar.disable()},empty:function(){if(this.f7Searchbar)return this.f7Searchbar.clear()},onChange:function(e){this.$emit("change",e)},onInput:function(e){this.$emit("input",e.target.value)},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e)},onSubmit:function(e){this.$emit("submit",e)},onSearch:function(e){e.detail&&this.$emit("searchbar:search",e.detail.query,e.detail.foundItems)},onClear:function(e){this.$emit("searchbar:clear",e)},onEnable:function(e){this.$emit("searchbar:enable",e)},onDisable:function(e){this.$emit("searchbar:disable",e)},onClearClick:function(e){this.$emit("click:clear",e)},onCancelClick:function(e){this.$emit("click:cancel",e)},onF7Init:function(){var e=this;e.init&&(e.f7Searchbar=e.$f7.searchbar(e.$el,e.params||{
searchList:e.searchList,searchIn:e.searchIn,searchBy:e.searchBy,found:e.found,notFound:e.notFound,overlay:e.overlay,ignore:e.ignore,customSearch:e.customSearch,removeDiacritics:e.removeDiacritics,hideDividers:e.hideDividers,hideGroups:e.hideGroups}))}}},oe={render:function(e){var t=this,o=e("div",{staticClass:"tabs"},[t.$slots.default]);return t.animated||t.swipeable?e("div",{class:t.classesObject},[o]):o},props:{animated:Boolean,swipeable:Boolean},computed:{classesObject:function(){return{"tabs-animated-wrap":this.animated,"tabs-swipeable-wrap":this.swipeable}}}},ne={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"tab",class:!!e.active&&"active",on:{"tab:show":e.onTabShow,"tab:hide":e.onTabHide}},[e._t("default")],2)},staticRenderFns:[],props:{active:Boolean},methods:{show:function(){this.$f7&&this.$f7.showTab(this.$el)},onTabShow:function(e){this.$emit("tab:show",e)},onTabHide:function(e){this.$emit("tab:hide",e)}}},ae={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"popover",on:{"popover:open":e.onOpen,"popover:opened":e.onOpened,"popover:close":e.onClose,"popover:closed":e.onClosed}},[t("div",{staticClass:"popover-angle"}),e._v(" "),t("div",{staticClass:"popover-content"},[e._t("default")],2)])},staticRenderFns:[],methods:{onOpen:function(e){this.$emit("popover:open",e)},onOpened:function(e){this.$emit("popover:opened",e)},onClose:function(e){this.$emit("popover:close",e)},onClosed:function(e){this.$emit("popover:closed",e)},open:function(e){var t=this;if(t.$f7)return t.$f7.popover(t.$el,e)},close:function(){var e=this;if(e.$f7)return e.$f7.closeModal(e.$el)}}},ie={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"popup",class:e.classesObject,on:{"popup:open":e.onOpen,"popup:opened":e.onOpened,"popup:close":e.onClose,"popup:closed":e.onClosed}},[e._t("default")],2)},staticRenderFns:[],mounted:function(){var e=this;e.opened&&(e.$el.style.display="block")},watch:{opened:function(e){var t=this;if(t.$f7){var o=t.$$;if(e)t.$f7.popup(t.$el);else{if(!o(t.$el).hasClass("modal-in"))return;t.$f7.closeModal(t.$el)}}}},props:{"tablet-fullscreen":Boolean,theme:String,layout:String,opened:Boolean},computed:{classesObject:function(){var e={"tablet-fullscreen":this.tabletFullscreen,"modal-in":this.opened,"modal-out":!this.opened};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}},methods:{onOpen:function(e){this.$emit("popup:open",e)},onOpened:function(e){this.$emit("popup:opened",e)},onClose:function(e){this.$emit("popup:close",e)},onClosed:function(e){this.$emit("popup:closed",e)},onF7Init:function(){var e=this.$$;e&&0===e(".popup-overlay").length&&e('<div class="popup-overlay '+(this.opened?" modal-overlay-visible":"")+'"></div>').insertBefore(this.$el)},open:function(){var e=this;if(e.$f7)return e.$f7.popup(e.$el)},close:function(){var e=this;if(e.$f7)return e.$f7.closeModal(e.$el)}}},re={render:function(e){var t,o,n,a=[],i=[],r=this,s="navbar toolbar tabbar subnavbar searchbar messagebar fab speed-dial floating-button".split(" ");if(r.$slots.default)for(var l=0;l<r.$slots.default.length;l++)if(n=r.$slots.default[l],o=n.tag){for(var c=!1,u=0;u<s.length;u++)o.indexOf(s[u])>=0&&(c=!0);c?a.push(n):i.push(n)}else i.push(n);return t=e("div",{staticClass:"picker-modal-inner"},i),e("div",{class:r.classesObject,staticClass:"picker-modal",on:{"picker:open":r.onOpen,"picker:opened":r.onOpened,"picker:close":r.onClose,"picker:closed":r.onClosed}},[a,t])},mounted:function(){var e=this;e.opened&&(e.$el.style.display="block")},watch:{opened:function(e){var t=this;t.$f7&&(e?t.$f7.pickerModal(t.$el):t.$f7.closeModal(t.$el))}},props:{opened:Boolean,theme:String,layout:String,overlay:Boolean},computed:{classesObject:function(){var e={"modal-in":this.opened,"modal-out":!this.opened};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}},methods:{onOpen:function(e){this.overlay&&this.$$(".picker-modal-overlay").addClass("modal-overlay-visible"),this.$emit("picker:open",e)},onOpened:function(e){this.$emit("picker:opened",e)},onClose:function(e){this.overlay&&this.$$(".picker-modal-overlay").removeClass("modal-overlay-visible"),this.$emit("picker:close",e)},onClosed:function(e){this.$emit("picker:closed",e)},onF7Init:function(){var e=this.$$;e&&0===e(".picker-modal-overlay").length&&(this.$theme&&this.$theme.material||this.overlay)&&e('<div class="picker-modal-overlay '+(this.opened?" modal-overlay-visible":"")+'"></div>').insertBefore(this.$el)},open:function(){var e=this;if(e.$f7)return e.$f7.pickerModal(e.$el)},close:function(){var e=this;if(e.$f7)return e.$f7.closeModal(e.$el)}}},se={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"login-screen",class:e.classesObject,on:{"loginscreen:open":e.onOpen,"loginscreen:opened":e.onOpened,"loginscreen:close":e.onClose,"loginscreen:closed":e.onClosed}},[e._t("default")],2)},staticRenderFns:[],mounted:function(){var e=this;e.opened&&(e.$el.style.display="block")},watch:{opened:function(e){var t=this;if(t.$f7){var o=t.$$;if(e)t.$f7.loginScreen(t.$el);else{if(!o(t.$el).hasClass("modal-in"))return;t.$f7.closeModal(t.$el)}}}},props:{theme:String,layout:String,opened:Boolean},computed:{classesObject:function(){var e={"modal-in":this.opened,"modal-out":!this.opened};return this.theme&&(e["theme-"+this.theme]=!0),this.layout&&(e["layout-"+this.layout]=!0),e}},methods:{onOpen:function(e){this.$emit("loginscreen:open",e)},onOpened:function(e){this.$emit("loginscreen:opened",e)},onClose:function(e){this.$emit("loginscreen:close",e)},onClosed:function(e){this.$emit("loginscreen:closed",e)},open:function(){var e=this;if(e.$f7)return e.$f7.loginScreen(e.$el)},close:function(){var e=this;if(e.$f7)return e.$f7.closeModal(e.$el)}}},le={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"login-screen-title"},[e._t("default")],2)},staticRenderFns:[]},ce={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"actions-modal keep-on-close",class:{"modal-in":e.opened},on:{"actions:open":e.onOpen,"actions:opened":e.onOpened,"actions:close":e.onClose,"actions:closed":e.onClosed}},[e._t("default")],2)},staticRenderFns:[],mounted:function(){var e=this;e.opened&&(e.$el.style.display="block")},watch:{opened:function(e){var t=this;t.$f7&&(e?t.$f7.openModal(t.$el):t.$f7.closeModal(t.$el))}},props:{opened:Boolean},methods:{onOpen:function(e){this.$emit("actions:open",e)},onOpened:function(e){this.$emit("actions:opened",e)},onClose:function(e){this.$emit("actions:close",e)},onClosed:function(e){this.$emit("actions:closed",e)},onF7Init:function(){var e=this.$$;e&&0===e(".modal-overlay").length&&e('<div class="modal-overlay'+(this.opened?" modal-overlay-visible":"")+'"></div>').insertBefore(this.$el)},open:function(){var e=this;if(e.$f7)return e.$f7.openModal(e.$el)},close:function(){var e=this;if(e.$f7)return e.$f7.closeModal(e.$el)}}},ue={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"actions-modal-group"},[e._t("default")],2)},staticRenderFns:[]},de={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"actions-modal-button",class:e.classesObject,on:{click:e.onClick}},[e._t("default")],2)},staticRenderFns:[],props:{color:String,bold:Boolean,close:{type:Boolean,default:!0}},computed:{classesObject:function(){var e=this,t={"actions-modal-button-bold":e.bold};return e.color&&(t["color-"+e.color]=!0),t}},methods:{onClick:function(e){this.close&&this.$f7&&this.$f7.closeModal(this.$parent.$parent.$el),this.$emit("click",e)}}},pe={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"actions-modal-label",class:e.classesObject,on:{click:e.onClick}},[e._t("default")],2)},staticRenderFns:[],props:{color:String,bold:Boolean},computed:{classesObject:function(){var e=this,t={"actions-modal-button-bold":e.bold};return e.color&&(t["color-"+e.color]=!0),t}},methods:{onClick:function(e){this.$emit("click",e)}}},he={render:function(){},beforeDestroy:function(){var e=this;e.f7PhotoBrowser&&e.f7PhotoBrowser.destroy&&e.f7PhotoBrowser.destroy()},props:{init:{type:Boolean,default:!0},params:Object,photos:Array,initialSlide:Number,spaceBetween:Number,speed:Number,zoom:Boolean,zoomMax:Number,zoomMin:Number,exposition:Boolean,expositionHideCaptions:Boolean,type:String,navbar:Boolean,toolbar:Boolean,theme:String,captionsTheme:String,swipeToClose:Boolean,backLinkText:String,ofText:String,loop:Boolean,lazyLoading:Boolean,lazyLoadingInPrevNext:Boolean,lazyLoadingOnTransitionStart:Boolean},methods:{open:function(e){return this.f7PhotoBrowser.open(e)},close:function(){return this.f7PhotoBrowser.close()},toggleZoom:function(){return this.f7PhotoBrowser.toggleZoom()},toggleExposition:function(){return this.f7PhotoBrowser.toggleExposition()},enableExposition:function(){return this.f7PhotoBrowser.enableExposition()},disableExposition:function(){return this.f7PhotoBrowser.disableExposition()},onF7Init:function(e){var t=this;if(t.init){var o=t.$options.propsData;t.f7PhotoBrowser=e.photoBrowser(t.params||{photos:o.photos,initialSlide:o.initialSlide,spaceBetween:o.spaceBetween,speed:o.speed,zoom:o.zoom,zoomMax:o.zoomMax,zoomMin:o.zoomMin,exposition:o.exposition,expositionHideCaptions:o.expositionHideCaptions,type:o.type,navbar:o.navbar,toolbar:o.toolbar,theme:o.theme,captionsTheme:o.captionsTheme,swipeToClose:o.swipeToClose,backLinkText:o.backLinkText,ofText:o.ofText,loop:o.loop,lazyLoading:o.lazyLoading,lazyLoadingInPrevNext:o.lazyLoadingInPrevNext,lazyLoadingOnTransitionStart:o.lazyLoadingOnTransitionStart,onOpen:function(e){t.$emit("open",e)},onClose:function(e){t.$emit("close",e)},onSwipeToClose:function(e){t.$emit("swipeToClose",e)},onSlideChangeStart:function(e){t.$emit("slideChangeStart",e)},onSlideChangeEnd:function(e){t.$emit("slideChangeEnd",e)},onTransitionStart:function(e){t.$emit("transitionStart",e)},onTransitionEnd:function(e){t.$emit("transitionEnd",e)},onClick:function(e,o){t.$emit("click",e,o)},onTap:function(e,o){t.$emit("tap",e,o)},onDoubleTap:function(e,o){t.$emit("doubleTap",e,o)},onLazyImageLoad:function(e,o){t.$emit("lazyImageLoad",e,o)},onLazyImageReady:function(e,o){t.$emit("lazyImageReady",e,o)}})}}}},fe={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"timeline",class:e.classesObject},[e._t("default")],2)},staticRenderFns:[],props:{sides:Boolean,"tablet-sides":Boolean,col:[Number,String],"tablet-col":[Number,String],horizontal:Boolean},computed:{classesObject:function(){var e={},t=this;return t.sides&&(e["timeline-sides"]=!0),t.tabletSides&&(e["tablet-sides"]=!0),t.horizontal&&(e["timeline-horizontal"]=!0),t.col&&(e["col-"+t.col]=!0),t.tabletCol&&(e["tablet-"+t.tabletCol]=!0),e}}},me={render:function(e){var t,o,n,a,i,r,s,l,c=this;return i=c.day||c.month?e("div",{staticClass:"timeline-item-date",domProps:{innerHTML:[c.day,"<small>"+c.month+"</small>"].join(" ")}}):e("div",{staticClass:"timeline-item-date",domProps:{innerHTML:c.date}}),r=e("div",{staticClass:"timeline-item-divider"}),c.time&&(t=e("div",{staticClass:"timeline-item-time",domProps:{innerHTML:c.time}})),c.title&&(o=e("div",{staticClass:"timeline-item-title",domProps:{innerHTML:c.title}})),c.subtitle&&(n=e("div",{staticClass:"timeline-item-subtitle",domProps:{innerHTML:c.subtitle}})),c.text&&(a=e("div",{staticClass:"timeline-item-text",domProps:{innerHTML:c.text}})),l=c.inner?c.content?e("div",{staticClass:"timeline-item-inner",domProps:{innerHTML:c.content}}):e("div",{staticClass:"timeline-item-inner"},[t,o,n,a,c.$slots.default]):[t,o,n,a,c.$slots.default],s=c.content&&!c.inner?e("div",{staticClass:"timeline-item-content",domProps:{innerHTML:c.content}}):e("div",{staticClass:"timeline-item-content"},[l]),e("div",{staticClass:"timeline-item",class:{"timeline-item-left":"left"===c.side,"timeline-item-right":"right"===c.side}},[i,r,s])},props:{date:[String,Number,Date],day:[String,Number],month:[String,Number],inner:Boolean,content:String,side:String,time:String,title:String,subtitle:String,text:String}},be={render:function(e){var t,o,n,a,i=this;return i.time&&(t=e("div",{staticClass:"timeline-item-time",domProps:{innerHTML:i.time}})),i.title&&(o=e("div",{staticClass:"timeline-item-title",domProps:{innerHTML:i.title}})),i.subtitle&&(n=e("div",{staticClass:"timeline-item-subtitle",domProps:{innerHTML:i.subtitle}})),i.text&&(a=e("div",{staticClass:"timeline-item-text",domProps:{innerHTML:i.text}})),i.content?e("div",{class:{"timeline-item-inner":i.inner,"timeline-item-child":!i.inner},domProps:{innerHTML:i.content}}):e("div",{class:{"timeline-item-inner":i.inner,"timeline-item-child":!i.inner}},[t,o,n,a,i.$slots.default])},props:{inner:Boolean,content:String,time:String,title:String,subtitle:String,text:String}},ge={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"timeline-year"},[e.year||e.title?t("div",{staticClass:"timeline-year-title"},[t("span",{domProps:{innerHTML:e._s(e.year||e.title)}})]):e._e(),e._v(" "),e._t("default")],2)},staticRenderFns:[],props:{year:[Number,String],title:[Number,String]}},ve={render:function(){var e=this,t=(e.$createElement,e._c);return t("div",{staticClass:"timeline-month"},[e.month||e.title?t("div",{staticClass:"timeline-month-title"},[t("span",{domProps:{innerHTML:e._s(e.month||e.title)}})]):e._e(),e._v(" "),e._t("default")],2)},staticRenderFns:[],props:{month:[Number,String],title:[Number,String]}},$e={render:function(e){return e("script",{attrs:{type:"text/template7"}},this.$slots.default)}},ke={install:function(I,ke){function Se(e){var t=[];return e.split("/").forEach(function(e){""!==e&&(0===e.indexOf(":")?t.push({name:e.replace(":","")}):t.push(e))}),t}function Be(e,t){var o;if(!e)return o;var n,a,i=xe.parseUrlQuery(e),r=e.split("#")[1],s={},l=e.split("#")[0].split("?")[0],c=l.split("/").filter(function(e){if(""!==e)return e});for(n=0;n<t.length;n++)if(!o){var u=t[n],d=Se(u.path);if(d.length===c.length){var p=0;for(a=0;a<d.length;a++)"string"==typeof d[a]&&c[a]===d[a]&&p++,"object"==typeof d[a]&&(s[d[a].name]=c[a],p++);p===c.length&&(o={query:i,hash:r,params:s,url:e,path:l,route:u})}}return o}function Ce(e,t,o){if(!e.allowPageChange)return!1;var n=t.url,a=t.pageElement;if(n&&a||!n||"#"===n)return!0;if(n&&e.url===n&&!t.reload&&!e.params.allowDuplicateUrls)return!1;var i=Be(n,o),r=e.history.indexOf(n)>=0,s=e.pagesCache[n];if(r&&s)return!0;if(!i)return!0;var l=e.pagesContainer.__vue__;if(!l)return!0;var c=(new Date).getTime();return I.set(l.pages,c,{component:i.route.component}),e.container.__vue__.$route={route:i.route.path,query:i.query,hash:i.hash,params:i.params,url:i.url,path:i.path},e.container.__vue__.$router=e.router,e.allowPageChange=!1,I.nextTick(function(){var o=e.pagesContainer.querySelector(".page:last-child");l.pages[c].pageElement=o,t.pageElement=o,e.allowPageChange=!0,t.isBack?e.router.back(t):e.router.load(t)}),!1}function ye(e){if(window.Framework7){e=e||{},"undefined"==typeof e.material&&I.prototype.$theme.material&&(e.material=!0),e.routerRemoveTimeout=!0,e.routes=e.routes||[];var t=e.preroute;e.preroute=function(o,n){var a=!0;return t&&(a=t(o,n)),!!a&&Ce(o,n,e.routes)},_e=I.prototype.$f7=window.f7=new window.Framework7(e),Oe=!0,we.$emit("f7init",_e)}}ke=ke||{};var we=new I,xe=window.Dom7;I.prototype.Dom7=xe,I.prototype.$$=xe,I.prototype.Template7=window.Template7,I.prototype.$t7=window.Template7,I.prototype.$device=window.Framework7.prototype.device;var Pe={ios:!1,material:!1};I.prototype.$theme=Pe,"auto"===ke.theme&&(window&&window.navigator.userAgent.match(/(Android);?[\s\/]+([\d.]+)?/)?Pe.material=!0:Pe.ios=!0),"material"===ke.theme?(Pe.ios=!1,Pe.material=!0):"ios"===ke.theme&&(Pe.ios=!0,Pe.material=!1);var _e,Oe=!1;I.mixin({beforeCreate:function(){var e=this;e.$parent&&e.$parent.$refs.pages&&(e.$route=e.$parent.$parent.$route,e.$router=e.$parent.$parent.$router),Pe.ios===!1&&Pe.material===!1&&(e.$root.$options.framework7&&e.$root.$options.framework7.material||e.$f7&&e.$f7.params.material||"material"===ke.theme?Pe.material=!0:Pe.ios=!0)},mounted:function(){var e=this;return Oe?void(e.onF7Init&&e.onF7Init(_e)):(we.$on("f7init",function(t){e.onF7Init&&e.onF7Init(t)}),void(e===e.$root&&ye(e.$options.framework7)))},components:{"f7-statusbar":e,"f7-views":o,"f7-panel":t,"f7-view":n,"f7-pages":a,"f7-page":i,"f7-page-content":r,"f7-navbar":s,"f7-nav-left":c,"f7-nav-center":l,"f7-nav-right":u,"f7-subnavbar":d,"f7-toolbar":p,"f7-block-title":v,"f7-content-block-title":v,"f7-list-block-title":v,"f7-content-block":g,"f7-block":g,"f7-card":h,"f7-card-header":f,"f7-card-footer":m,"f7-card-content":b,"f7-list":S,"f7-list-group":B,"f7-list-item":C,"f7-list-item-content":y,"f7-list-button":P,"f7-list-label":_,"f7-swipeout-actions":w,"f7-swipeout-button":x,"f7-accordion":O,"f7-accordion-item":M,"f7-accordion-toggle":L,"f7-accordion-content":F,"f7-badge":$,"f7-icon":k,"f7-link":N,"f7-buttons":T,"f7-segmented":T,"f7-button":R,"f7-grid":j,"f7-col":E,"f7-preloader":A,"f7-progressbar":H,"f7-label":z,"f7-input":D,"f7-switch":V,"f7-range":q,"f7-chip":U,"f7-fab":G,"f7-fab-speed-dial":K,"f7-fab-action":Z,"f7-fab-actions":W,"f7-swiper":Q,"f7-swiper-slide":J,"f7-messages":X,"f7-message":Y,"f7-messagebar":ee,"f7-searchbar":te,"f7-tabs":oe,"f7-tab":ne,"f7-popover":ae,"f7-popup":ie,"f7-login-screen":se,"f7-login-screen-title":le,"f7-picker-modal":re,"f7-actions":ce,"f7-actions-group":ue,"f7-actions-label":pe,"f7-actions-button":de,"f7-photo-browser":he,"f7-timeline":fe,"f7-timeline-item":me,"f7-timeline-item-child":be,"f7-timeline-year":ge,"f7-timeline-month":ve,"t7-template":$e}})}};return ke});
//# sourceMappingURL=framework7-vue.min.js.map


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * Framework7 1.6.5
 * Full featured mobile HTML framework for building iOS & Android apps
 * 
 * http://framework7.io/
 * 
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 * 
 * Licensed under MIT
 * 
 * Released on: September 7, 2017
 */
window.Dom7=function(){"use strict";function e(e,a){var t=[],r=0;if(e&&!a&&e instanceof C)return e;if(e)if("string"==typeof e){var n,i,s=e.trim();if(s.indexOf("<")>=0&&s.indexOf(">")>=0){var o="div";for(0===s.indexOf("<li")&&(o="ul"),0===s.indexOf("<tr")&&(o="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(o="tr"),0===s.indexOf("<tbody")&&(o="table"),0===s.indexOf("<option")&&(o="select"),i=document.createElement(o),i.innerHTML=s,r=0;r<i.childNodes.length;r+=1)t.push(i.childNodes[r])}else for(n=a||"#"!==e[0]||e.match(/[ .<>:~]/)?(a||document).querySelectorAll(e.trim()):[document.getElementById(e.trim().split("#")[1])],r=0;r<n.length;r+=1)n[r]&&t.push(n[r])}else if(e.nodeType||e===window||e===document)t.push(e);else if(e.length>0&&e[0].nodeType)for(r=0;r<e.length;r+=1)t.push(e[r]);return new C(t)}function a(e){var a,t,r,n,i={},s=e||window.location.href;if("string"==typeof s&&s.length)for(s=s.indexOf("?")>-1?s.replace(/\S*\?/,""):"",t=s.split("&").filter(function(e){return""!==e}),n=t.length,a=0;a<n;a+=1)r=t[a].replace(/#\S+/g,"").split("="),i[decodeURIComponent(r[0])]=void 0===r[1]?void 0:decodeURIComponent(r[1])||"";return i}function t(e){return Array.isArray(e)}function r(e,a){if("object"==typeof e&&a)if(Array.isArray(e)||e instanceof C){for(var t=0;t<e.length;t+=1)if(!1===a(t,e[t]))return}else for(var r in e)if(e.hasOwnProperty(r)&&!1===a(r,e[r]))return}function n(e){for(var a=[],t=0;t<e.length;t+=1)-1===a.indexOf(e[t])&&a.push(e[t]);return a}function i(e,a){function t(e){if(a.length>0){for(var t="",r=0;r<a.length;r+=1)t+=0===r?a[r]:"["+encodeURIComponent(a[r])+"]";return t+"["+encodeURIComponent(e)+"]"}return encodeURIComponent(e)}function r(e){return encodeURIComponent(e)}if(void 0===a&&(a=[]),"string"==typeof e)return e;var n,s=[];return Object.keys(e).forEach(function(o){var l;if(Array.isArray(e[o])){l=[];for(var p=0;p<e[o].length;p+=1)Array.isArray(e[o][p])||"object"!=typeof e[o][p]?l.push(t(o)+"[]="+r(e[o][p])):(n=a.slice(),n.push(o),n.push(String(p)),l.push(i(e[o][p],n)));l.length>0&&s.push(l.join("&"))}else null===e[o]||""===e[o]?s.push(t(o)+"="):"object"==typeof e[o]?(n=a.slice(),n.push(o),""!==(l=i(e[o],n))&&s.push(l)):void 0!==e[o]&&""!==e[o]?s.push(t(o)+"="+r(e[o])):""===e[o]&&s.push(t(o))}),s.join("&")}function s(e){return e.toLowerCase().replace(/-(.)/g,function(e,a){return a.toUpperCase()})}function o(a){return e(a).dataset()}function l(e){return window.requestAnimationFrame?window.requestAnimationFrame(e):window.webkitRequestAnimationFrame?window.webkitRequestAnimationFrame(e):window.setTimeout(e,1e3/60)}function p(e){return window.cancelAnimationFrame?window.cancelAnimationFrame(e):window.webkitCancelAnimationFrame?window.webkitCancelAnimationFrame(e):window.clearTimeout(e)}function d(e){return"object"==typeof e&&null!==e&&e.constructor&&e.constructor===Object}function c(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];for(var t=Object(e[0]),r=1;r<e.length;r+=1){var n=e[r];if(void 0!==n&&null!==n)for(var i=Object.keys(Object(n)),s=0,o=i.length;s<o;s+=1){var l=i[s],p=Object.getOwnPropertyDescriptor(n,l);void 0!==p&&p.enumerable&&(d(t[l])&&d(n[l])?c(t[l],n[l]):!d(t[l])&&d(n[l])?(t[l]={},c(t[l],n[l])):t[l]=n[l])}}return t}function m(a,t){var r=this,n={props:e.extend({},a),params:e.extend({duration:300,easing:"swing"},t),elements:r,animating:!1,que:[],easingProgress:function(e,a){return"swing"===e?.5-Math.cos(a*Math.PI)/2:"function"==typeof e?e(a):a},stop:function(){n.frameId&&p(n.frameId),n.animating=!1,n.elements.each(function(e,a){delete a.dom7AnimateInstance}),n.que=[]},done:function(e){if(n.animating=!1,n.elements.each(function(e,a){delete a.dom7AnimateInstance}),e&&e(r),n.que.length>0){var a=n.que.shift();n.animate(a[0],a[1])}},animate:function(e,a){function t(){s=(new Date).getTime();var u,h;m||(m=!0,a.begin&&a.begin(r)),null===p&&(p=s),a.progress&&a.progress(r,Math.max(Math.min((s-p)/a.duration,1),0),p+a.duration-s<0?0:p+a.duration-s,p),i.forEach(function(t){var r=t;o||r.done||Object.keys(e).forEach(function(t){if(!o&&!r.done){u=Math.max(Math.min((s-p)/a.duration,1),0),h=n.easingProgress(a.easing,u);var l=r[t],m=l.initialValue,f=l.finalValue,g=l.unit;r[t].currentValue=m+h*(f-m);var v=r[t].currentValue;if((f>m&&v>=f||f<m&&v<=f)&&(r.container.style[t]=f+g,c+=1,c===Object.keys(e).length&&(r.done=!0,d+=1),d===i.length&&(o=!0)),o)return void n.done(a.complete);r.container.style[t]=v+g}})}),o||(n.frameId=l(t))}if(n.animating)return n.que.push([e,a]),n;var i=[];n.elements.each(function(a,t){var r,s,o,l,p;t.dom7AnimateInstance||(n.elements[a].dom7AnimateInstance=n),i[a]={container:t},Object.keys(e).forEach(function(n){r=window.getComputedStyle(t,null).getPropertyValue(n).replace(",","."),s=parseFloat(r),o=r.replace(s,""),l=parseFloat(e[n]),p=e[n]+o,i[a][n]={initialFullValue:r,initialValue:s,unit:o,finalValue:l,finalFullValue:p,currentValue:s}})});var s,o,p=null,d=0,c=0,m=!1;return n.animating=!0,n.frameId=l(t),n}};if(0===n.elements.length)return r;for(var i,s=0;s<n.elements.length;s+=1)n.elements[s].dom7AnimateInstance?i=n.elements[s].dom7AnimateInstance:n.elements[s].dom7AnimateInstance=n;return i||(i=n),"stop"===a?i.stop():i.animate(n.props,n.params),r}function u(){for(var e=this,a=0;a<e.length;a+=1)e[a].dom7AnimateInstance&&e[a].dom7AnimateInstance.stop()}function h(e){e.type&&!e.method&&(e.method=e.type),r(e,function(e,a){D[e]=a})}function f(a){function t(t,r,n){var i=arguments;t&&e(document).trigger(t,r),n&&(n in o&&o[n](i[3],i[4],i[5],i[6]),a[n]&&a[n](i[3],i[4],i[5],i[6]))}var n={method:"GET",data:!1,async:!0,cache:!0,user:"",password:"",headers:{},xhrFields:{},statusCode:{},processData:!0,dataType:"text",contentType:"application/x-www-form-urlencoded",timeout:0},s=["beforeSend","error","complete","success","statusCode"];a.type&&(a.method=a.type);var o=D;r(o,function(e,a){s.indexOf(e)<0&&(n[e]=a)}),r(n,function(e,t){e in a||(a[e]=t)}),a.url||(a.url=window.location.toString());var l=a.url.indexOf("?")>=0?"&":"?",p=a.method.toUpperCase();if(("GET"===p||"HEAD"===p||"OPTIONS"===p||"DELETE"===p)&&a.data){var d;d="string"==typeof a.data?a.data.indexOf("?")>=0?a.data.split("?")[1]:a.data:i(a.data),d.length&&(a.url+=l+d,"?"===l&&(l="&"))}if("json"===a.dataType&&a.url.indexOf("callback=")>=0){var c,m="f7jsonp_"+(Date.now()+(z+=1)),u=a.url.split("callback="),h=u[0]+"callback="+m;if(u[1].indexOf("&")>=0){var f=u[1].split("&").filter(function(e){return e.indexOf("=")>0}).join("&");f.length>0&&(h+="&"+f)}var g=document.createElement("script");return g.type="text/javascript",g.onerror=function(){clearTimeout(c),t(void 0,void 0,"error",null,"scripterror"),t("ajaxComplete ajax:complete",{scripterror:!0},"complete",null,"scripterror")},g.src=h,window[m]=function(e){clearTimeout(c),t(void 0,void 0,"success",e),g.parentNode.removeChild(g),g=null,delete window[m]},document.querySelector("head").appendChild(g),void(a.timeout>0&&(c=setTimeout(function(){g.parentNode.removeChild(g),g=null,t(void 0,void 0,"error",null,"timeout")},a.timeout)))}"GET"!==p&&"HEAD"!==p&&"OPTIONS"!==p&&"DELETE"!==p||!1===a.cache&&(a.url+=l+"_nocache"+Date.now());var v=new XMLHttpRequest;v.requestUrl=a.url,v.requestParameters=a,v.open(p,a.url,a.async,a.user,a.password);var b=null;if(("POST"===p||"PUT"===p||"PATCH"===p)&&a.data)if(a.processData){var w=[ArrayBuffer,Blob,Document,FormData];if(w.indexOf(a.data.constructor)>=0)b=a.data;else{var C="---------------------------"+Date.now().toString(16);"multipart/form-data"===a.contentType?v.setRequestHeader("Content-Type","multipart/form-data; boundary="+C):v.setRequestHeader("Content-Type",a.contentType),b="";var y=i(a.data);if("multipart/form-data"===a.contentType){y=y.split("&");for(var x=[],T=0;T<y.length;T+=1)x.push('Content-Disposition: form-data; name="'+y[T].split("=")[0]+'"\r\n\r\n'+y[T].split("=")[1]+"\r\n");b="--"+C+"\r\n"+x.join("--"+C+"\r\n")+"--"+C+"--\r\n"}else b=y}}else b=a.data;a.headers&&r(a.headers,function(e,a){v.setRequestHeader(e,a)}),void 0===a.crossDomain&&(a.crossDomain=/^([\w-]+:)?\/\/([^\/]+)/.test(a.url)&&RegExp.$2!==window.location.host),a.crossDomain||v.setRequestHeader("X-Requested-With","XMLHttpRequest"),a.xhrFields&&r(a.xhrFields,function(e,a){v[e]=a});var k;return v.onload=function(){if(k&&clearTimeout(k),v.status>=200&&v.status<300||0===v.status){var e;if("json"===a.dataType)try{e=JSON.parse(v.responseText),t("ajaxSuccess ajax:success",{xhr:v},"success",e,v.status,v)}catch(e){t("ajaxError ajax:error",{xhr:v,parseerror:!0},"error",v,"parseerror")}else e="text"===v.responseType||""===v.responseType?v.responseText:v.response,t("ajaxSuccess ajax:success",{xhr:v},"success",e,v.status,v)}else t("ajaxError ajax:error",{xhr:v},"error",v,v.status);a.statusCode&&(o.statusCode&&o.statusCode[v.status]&&o.statusCode[v.status](v),a.statusCode[v.status]&&a.statusCode[v.status](v)),t("ajaxComplete ajax:complete",{xhr:v},"complete",v,v.status)},v.onerror=function(){k&&clearTimeout(k),t("ajaxError ajax:error",{xhr:v},"error",v,v.status),t("ajaxComplete ajax:complete",{xhr:v,error:!0},"complete",v,"error")},t("ajaxStart ajax:start",{xhr:v},"start",v),t(void 0,void 0,"beforeSend",v),a.timeout>0&&(v.onabort=function(){k&&clearTimeout(k)},k=setTimeout(function(){v.abort(),t("ajaxError ajax:error",{xhr:v,timeout:!0},"error",v,"timeout"),t("ajaxComplete ajax:complete",{xhr:v,timeout:!0},"complete",v,"timeout")},a.timeout)),v.send(b),v}function g(e){for(var a=[],t=arguments.length-1;t-- >0;)a[t]=arguments[t+1];var r,n,i,s,o;if("function"==typeof a[1]){var l;l=a,r=l[0],i=l[1],s=l[2],o=l[3]}else{var p;p=a,r=p[0],n=p[1],i=p[2],s=p[3],o=p[4]}return[i,s].forEach(function(e){"string"==typeof e&&(o=e,e===i?i=void 0:s=void 0)}),o=o||("getJSON"===e?"json":void 0),f({url:r,method:"post"===e?"POST":"GET",data:n,success:i,error:s,dataType:o})}function v(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return e.unshift("get"),g.apply(this,e)}function b(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return e.unshift("post"),g.apply(this,e)}function w(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];return e.unshift("getJSON"),g.apply(this,e)}var C=function(e){for(var a=this,t=0;t<e.length;t+=1)a[t]=e[t];return a.length=e.length,this};e.fn=C.prototype,e.Class=C,e.use=function(){for(var a=[],t=arguments.length;t--;)a[t]=arguments[t];a.forEach(function(a){var t="__utils"in a;Object.keys(a).forEach(function(r){"__utils"!==r&&(t?e[r]=a[r]:e.fn[r]=a[r])})})};for(var y=[{base:"A",letters:"AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"},{base:"AA",letters:"Ꜳ"},{base:"AE",letters:"ÆǼǢ"},{base:"AO",letters:"Ꜵ"},{base:"AU",letters:"Ꜷ"},{base:"AV",letters:"ꜸꜺ"},{base:"AY",letters:"Ꜽ"},{base:"B",letters:"BⒷＢḂḄḆɃƂƁ"},{base:"C",letters:"CⒸＣĆĈĊČÇḈƇȻꜾ"},{base:"D",letters:"DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"},{base:"DZ",letters:"ǱǄ"},{base:"Dz",letters:"ǲǅ"},{base:"E",letters:"EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"},{base:"F",letters:"FⒻＦḞƑꝻ"},{base:"G",letters:"GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"},{base:"H",letters:"HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"},{base:"I",letters:"IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"},{base:"J",letters:"JⒿＪĴɈ"},{base:"K",letters:"KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"},{base:"L",letters:"LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"},{base:"LJ",letters:"Ǉ"},{base:"Lj",letters:"ǈ"},{base:"M",letters:"MⓂＭḾṀṂⱮƜ"},{base:"N",letters:"NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"},{base:"NJ",letters:"Ǌ"},{base:"Nj",letters:"ǋ"},{base:"O",letters:"OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"},{base:"OI",letters:"Ƣ"},{base:"OO",letters:"Ꝏ"},{base:"OU",letters:"Ȣ"},{base:"OE",letters:"Œ"},{base:"oe",letters:"œ"},{base:"P",letters:"PⓅＰṔṖƤⱣꝐꝒꝔ"},{base:"Q",letters:"QⓆＱꝖꝘɊ"},{base:"R",letters:"RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"},{base:"S",letters:"SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"},{base:"T",letters:"TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"},{base:"TZ",letters:"Ꜩ"},{base:"U",letters:"UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"},{base:"V",letters:"VⓋＶṼṾƲꝞɅ"},{base:"VY",letters:"Ꝡ"},{base:"W",letters:"WⓌＷẀẂŴẆẄẈⱲ"},{base:"X",letters:"XⓍＸẊẌ"},{base:"Y",letters:"YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"},{base:"Z",letters:"ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"},{base:"a",letters:"aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"},{base:"aa",letters:"ꜳ"},{base:"ae",letters:"æǽǣ"},{base:"ao",letters:"ꜵ"},{base:"au",letters:"ꜷ"},{base:"av",letters:"ꜹꜻ"},{base:"ay",letters:"ꜽ"},{base:"b",letters:"bⓑｂḃḅḇƀƃɓ"},{base:"c",letters:"cⓒｃćĉċčçḉƈȼꜿↄ"},{base:"d",letters:"dⓓｄḋďḍḑḓḏđƌɖɗꝺ"},{base:"dz",letters:"ǳǆ"},{base:"e",letters:"eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"},{base:"f",letters:"fⓕｆḟƒꝼ"},{base:"g",letters:"gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"},{base:"h",letters:"hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"},{base:"hv",letters:"ƕ"},{base:"i",letters:"iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"},{base:"j",letters:"jⓙｊĵǰɉ"},{base:"k",letters:"kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"},{base:"l",letters:"lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"},{base:"lj",letters:"ǉ"},{base:"m",letters:"mⓜｍḿṁṃɱɯ"},{base:"n",letters:"nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"},{base:"nj",letters:"ǌ"},{base:"o",letters:"oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"},{base:"oi",letters:"ƣ"},{base:"ou",letters:"ȣ"},{base:"oo",letters:"ꝏ"},{base:"p",letters:"pⓟｐṕṗƥᵽꝑꝓꝕ"},{base:"q",letters:"qⓠｑɋꝗꝙ"},{base:"r",letters:"rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"},{base:"s",letters:"sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"},{base:"t",letters:"tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"},{base:"tz",letters:"ꜩ"},{base:"u",letters:"uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"},{base:"v",letters:"vⓥｖṽṿʋꝟʌ"},{base:"vy",letters:"ꝡ"},{base:"w",letters:"wⓦｗẁẃŵẇẅẘẉⱳ"},{base:"x",letters:"xⓧｘẋẍ"},{base:"y",letters:"yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"},{base:"z",letters:"zⓩｚźẑżžẓẕƶȥɀⱬꝣ"}],x={},T=0;T<y.length;T+=1)for(var k=y[T].letters,P=0;P<k.length;P+=1)x[k[P]]=y[T].base;for(var S={__utils:!0,parseUrlQuery:a,parseQuery:a,isArray:t,each:r,unique:n,serializeObject:i,param:i,toCamelCase:s,dataset:o,requestAnimationFrame:l,cancelAnimationFrame:p,extend:c,removeDiacritics:function(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return x[e]||e})},getTranslate:function(e,a){void 0===a&&(a="x");var t,r,n,i=window.getComputedStyle(e,null);return window.WebKitCSSMatrix?(r=i.transform||i.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),n=new window.WebKitCSSMatrix("none"===r?"":r)):(n=i.transform||i.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=n.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?n.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?n.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),r||0}},M=({addClass:function(e){var a=this;if(void 0===e)return this;for(var t=e.split(" "),r=0;r<t.length;r+=1)for(var n=0;n<this.length;n+=1)void 0!==a[n].classList&&a[n].classList.add(t[r]);return this},removeClass:function(e){for(var a=this,t=e.split(" "),r=0;r<t.length;r+=1)for(var n=0;n<this.length;n+=1)void 0!==a[n].classList&&a[n].classList.remove(t[r]);return this},hasClass:function(e){return!!this[0]&&this[0].classList.contains(e)},toggleClass:function(e){for(var a=this,t=e.split(" "),r=0;r<t.length;r+=1)for(var n=0;n<this.length;n+=1)void 0!==a[n].classList&&a[n].classList.toggle(t[r]);return this},attr:function(e,a){var t=arguments,r=this;if(1!==arguments.length||"string"!=typeof e){for(var n=0;n<this.length;n+=1)if(2===t.length)r[n].setAttribute(e,a);else for(var i in e)r[n][i]=e[i],r[n].setAttribute(i,e[i]);return this}if(this[0])return this[0].getAttribute(e)},removeAttr:function(e){for(var a=this,t=0;t<this.length;t+=1)a[t].removeAttribute(e);return this},prop:function(e,a){var t=arguments,r=this;if(1!==arguments.length||"string"!=typeof e){for(var n=0;n<this.length;n+=1)if(2===t.length)r[n][e]=a;else for(var i in e)r[n][i]=e[i];return this}if(this[0])return this[0][e]},data:function(e,a){var t,r=this;if(void 0!==a){for(var n=0;n<this.length;n+=1)t=r[n],t.dom7ElementDataStorage||(t.dom7ElementDataStorage={}),t.dom7ElementDataStorage[e]=a;return this}if(t=this[0]){if(t.dom7ElementDataStorage&&e in t.dom7ElementDataStorage)return t.dom7ElementDataStorage[e];var i=t.getAttribute("data-"+e);if(i)return i}else;},removeData:function(e){for(var a=this,t=0;t<this.length;t+=1){var r=a[t];r.dom7ElementDataStorage&&r.dom7ElementDataStorage[e]&&(r.dom7ElementDataStorage[e]=null,delete r.dom7ElementDataStorage[e])}},dataset:function(){var e=this[0];if(e){var a={};if(e.dataset)for(var t in e.dataset)a[t]=e.dataset[t];else for(var r=0;r<e.attributes.length;r+=1){var n=e.attributes[r];n.name.indexOf("data-")>=0&&(a[s(n.name.split("data-")[1])]=n.value)}for(var i in a)"false"===a[i]?a[i]=!1:"true"===a[i]?a[i]=!0:parseFloat(a[i])===1*a[i]&&(a[i]*=1);return a}},val:function(e){var a=this;{if(void 0!==e){for(var t=0;t<this.length;t+=1)a[t].value=e;return this}if(this[0]){if(this[0].multiple&&"select"===this[0].nodeName.toLowerCase()){for(var r=[],n=0;n<this[0].selectedOptions.length;n+=1)r.push(a[0].selectedOptions[n].value);return r}return this[0].value}}},transform:function(e){for(var a=this,t=0;t<this.length;t+=1){var r=a[t].style;r.webkitTransform=e,r.transform=e}return this},transition:function(e){var a=this;"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t+=1){var r=a[t].style;r.webkitTransitionDuration=e,r.transitionDuration=e}return this},on:function(){function a(a){var t=a.target;if(t){var r=a.target.dom7EventData||[];if(r.unshift(a),e(t).is(s))o.apply(t,r);else for(var n=e(t).parents(),i=0;i<n.length;i+=1)e(n[i]).is(s)&&o.apply(n[i],r)}}function t(e){var a=e&&e.target?e.target.dom7EventData||[]:[];a.unshift(e),o.apply(this,a)}for(var r=this,n=[],i=arguments.length;i--;)n[i]=arguments[i];var s,o,l=n[0],p=!1;"function"==typeof n[1]?(s=!1,o=n[1],p=n[2]):(s=n[1],o=n[2],p=n[3]);for(var d,c=l.split(" "),m=0;m<this.length;m+=1){var u=r[m];if(s)for(d=0;d<c.length;d+=1)u.dom7LiveListeners||(u.dom7LiveListeners=[]),u.dom7LiveListeners.push({type:l,listener:o,proxyListener:a}),u.addEventListener(c[d],a,p);else for(d=0;d<c.length;d+=1)u.dom7Listeners||(u.dom7Listeners=[]),u.dom7Listeners.push({type:l,listener:o,proxyListener:t}),u.addEventListener(c[d],t,p)}return this},off:function(){for(var e=this,a=[],t=arguments.length;t--;)a[t]=arguments[t];var r,n,i=a[0],s=!1;"function"==typeof a[1]?(r=!1,n=a[1],s=a[2]):(r=a[1],n=a[2],s=a[3]);for(var o=i.split(" "),l=0;l<o.length;l+=1)for(var p=0;p<this.length;p+=1){var d=e[p];if(r){if(d.dom7LiveListeners)for(var c=0;c<d.dom7LiveListeners.length;c+=1)n?d.dom7LiveListeners[c].listener===n&&d.removeEventListener(o[l],d.dom7LiveListeners[c].proxyListener,s):d.dom7LiveListeners[c].type===o[l]&&d.removeEventListener(o[l],d.dom7LiveListeners[c].proxyListener,s)}else if(d.dom7Listeners)for(var m=0;m<d.dom7Listeners.length;m+=1)n?d.dom7Listeners[m].listener===n&&d.removeEventListener(o[l],d.dom7Listeners[m].proxyListener,s):d.dom7Listeners[m].type===o[l]&&d.removeEventListener(o[l],d.dom7Listeners[m].proxyListener,s)}return this},once:function(e,a,t,r){function n(s){var o=s.target.dom7EventData||[];t.apply(this,o),i.off(e,a,n,r)}var i=this;return"function"==typeof a&&(t=arguments[1],r=arguments[2],a=!1),i.on(e,a,n,r)},trigger:function(){for(var e=this,a=[],t=arguments.length;t--;)a[t]=arguments[t];for(var r=a[0].split(" "),n=a[1],i=0;i<r.length;i+=1)for(var s=0;s<this.length;s+=1){var o=void 0;try{o=new window.CustomEvent(r[i],{detail:n,bubbles:!0,cancelable:!0})}catch(e){o=document.createEvent("Event"),o.initEvent(r[i],!0,!0),o.detail=n}e[s].dom7EventData=a.filter(function(e,a){return a>0}),e[s].dispatchEvent(o),e[s].dom7EventData=[],delete e[s].dom7EventData}return this},transitionEnd:function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t+=1)n.off(r[t],a)}var t,r=["webkitTransitionEnd","transitionend"],n=this;if(e)for(t=0;t<r.length;t+=1)n.on(r[t],a);return this},animationEnd:function(e){function a(i){if(i.target===this)for(e.call(this,i),t=0;t<r.length;t+=1)n.off(r[t],a)}var t,r=["webkitAnimationEnd","animationend"],n=this;if(e)for(t=0;t<r.length;t+=1)n.on(r[t],a);return this},width:function(){return this[0]===window?window.innerWidth:this.length>0?parseFloat(this.css("width")):null},outerWidth:function(e){if(this.length>0){if(e){var a=this.styles();return this[0].offsetWidth+parseFloat(a.getPropertyValue("margin-right"))+parseFloat(a.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},height:function(){return this[0]===window?window.innerHeight:this.length>0?parseFloat(this.css("height")):null},outerHeight:function(e){if(this.length>0){if(e){var a=this.styles();return this[0].offsetHeight+parseFloat(a.getPropertyValue("margin-top"))+parseFloat(a.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},offset:function(){if(this.length>0){var e=this[0],a=e.getBoundingClientRect(),t=document.body,r=e.clientTop||t.clientTop||0,n=e.clientLeft||t.clientLeft||0,i=e===window?window.scrollY:e.scrollTop,s=e===window?window.scrollX:e.scrollLeft;return{top:a.top+i-r,left:a.left+s-n}}return null},hide:function(){for(var e=this,a=0;a<this.length;a+=1)e[a].style.display="none";return this},show:function(){for(var e=this,a=0;a<this.length;a+=1){var t=e[a];"none"===t.style.display&&(t.style.display=""),"none"===window.getComputedStyle(t,null).getPropertyValue("display")&&(t.style.display="block")}return this},styles:function(){return this[0]?window.getComputedStyle(this[0],null):{}},css:function(e,a){var t,r=this;if(1===arguments.length){if("string"!=typeof e){for(t=0;t<this.length;t+=1)for(var n in e)r[t].style[n]=e[n];return this}if(this[0])return window.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(t=0;t<this.length;t+=1)r[t].style[e]=a;return this}return this},toArray:function(){for(var e=this,a=[],t=0;t<this.length;t+=1)a.push(e[t]);return a},each:function(e){var a=this;if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(a[t],t,a[t]))return a;return this},forEach:function(e){var a=this;if(!e)return this;for(var t=0;t<this.length;t+=1)if(!1===e.call(a[t],a[t],t))return a;return this},filter:function(e){for(var a=[],t=this,r=0;r<t.length;r+=1)e.call(t[r],r,t[r])&&a.push(t[r]);return new C(a)},map:function(e){for(var a=[],t=this,r=0;r<t.length;r+=1)a.push(e.call(t[r],r,t[r]));return new C(a)},html:function(e){var a=this;if(void 0===e)return this[0]?this[0].innerHTML:void 0;for(var t=0;t<this.length;t+=1)a[t].innerHTML=e;return this},text:function(e){var a=this;if(void 0===e)return this[0]?this[0].textContent.trim():null;for(var t=0;t<this.length;t+=1)a[t].textContent=e;return this},is:function(a){var t,r,n=this[0];if(!n||void 0===a)return!1;if("string"==typeof a){if(n.matches)return n.matches(a);if(n.webkitMatchesSelector)return n.webkitMatchesSelector(a);if(n.msMatchesSelector)return n.msMatchesSelector(a);for(t=e(a),r=0;r<t.length;r+=1)if(t[r]===n)return!0;return!1}if(a===document)return n===document;if(a===window)return n===window;if(a.nodeType||a instanceof C){for(t=a.nodeType?[a]:a,r=0;r<t.length;r+=1)if(t[r]===n)return!0;return!1}return!1},indexOf:function(e){for(var a=this,t=0;t<this.length;t+=1)if(a[t]===e)return t},index:function(){var e,a=this[0];if(a){for(e=0;null!==(a=a.previousSibling);)1===a.nodeType&&(e+=1);return e}},eq:function(e){if(void 0===e)return this;var a,t=this.length;return e>t-1?new C([]):e<0?(a=t+e,new C(a<0?[]:[this[a]])):new C([this[e]])},append:function(){for(var e=this,a=[],t=arguments.length;t--;)a[t]=arguments[t];for(var r,n=0;n<a.length;n+=1){r=a[n];for(var i=0;i<this.length;i+=1)if("string"==typeof r){var s=document.createElement("div");for(s.innerHTML=r;s.firstChild;)e[i].appendChild(s.firstChild)}else if(r instanceof C)for(var o=0;o<r.length;o+=1)e[i].appendChild(r[o]);else e[i].appendChild(r)}return this},appendTo:function(a){return e(a).append(this),this},prepend:function(e){var a,t,r=this;for(a=0;a<this.length;a+=1)if("string"==typeof e){var n=document.createElement("div");for(n.innerHTML=e,t=n.childNodes.length-1;t>=0;t-=1)r[a].insertBefore(n.childNodes[t],r[a].childNodes[0])}else if(e instanceof C)for(t=0;t<e.length;t+=1)r[a].insertBefore(e[t],r[a].childNodes[0]);else r[a].insertBefore(e,r[a].childNodes[0]);return this},prependTo:function(a){return e(a).prepend(this),this},insertBefore:function(a){for(var t=this,r=e(a),n=0;n<this.length;n+=1)if(1===r.length)r[0].parentNode.insertBefore(t[n],r[0]);else if(r.length>1)for(var i=0;i<r.length;i+=1)r[i].parentNode.insertBefore(t[n].cloneNode(!0),r[i])},insertAfter:function(a){for(var t=this,r=e(a),n=0;n<this.length;n+=1)if(1===r.length)r[0].parentNode.insertBefore(t[n],r[0].nextSibling);else if(r.length>1)for(var i=0;i<r.length;i+=1)r[i].parentNode.insertBefore(t[n].cloneNode(!0),r[i].nextSibling)},next:function(a){return new C(this.length>0?a?this[0].nextElementSibling&&e(this[0].nextElementSibling).is(a)?[this[0].nextElementSibling]:[]:this[0].nextElementSibling?[this[0].nextElementSibling]:[]:[])},nextAll:function(a){var t=[],r=this[0];if(!r)return new C([]);for(;r.nextElementSibling;){var n=r.nextElementSibling;a?e(n).is(a)&&t.push(n):t.push(n),r=n}return new C(t)},prev:function(a){if(this.length>0){var t=this[0];return new C(a?t.previousElementSibling&&e(t.previousElementSibling).is(a)?[t.previousElementSibling]:[]:t.previousElementSibling?[t.previousElementSibling]:[])}return new C([])},prevAll:function(a){var t=[],r=this[0];if(!r)return new C([]);for(;r.previousElementSibling;){var n=r.previousElementSibling;a?e(n).is(a)&&t.push(n):t.push(n),r=n}return new C(t)},siblings:function(e){return this.nextAll(e).add(this.prevAll(e))},parent:function(a){for(var t=this,r=[],i=0;i<this.length;i+=1)null!==t[i].parentNode&&(a?e(t[i].parentNode).is(a)&&r.push(t[i].parentNode):r.push(t[i].parentNode));return e(n(r))},parents:function(a){for(var t=this,r=[],i=0;i<this.length;i+=1)for(var s=t[i].parentNode;s;)a?e(s).is(a)&&r.push(s):r.push(s),s=s.parentNode;return e(n(r))},closest:function(e){var a=this;return void 0===e?new C([]):(a.is(e)||(a=a.parents(e).eq(0)),a)},find:function(e){for(var a=this,t=[],r=0;r<this.length;r+=1)for(var n=a[r].querySelectorAll(e),i=0;i<n.length;i+=1)t.push(n[i]);return new C(t)},children:function(a){for(var t=this,r=[],i=0;i<this.length;i+=1)for(var s=t[i].childNodes,o=0;o<s.length;o+=1)a?1===s[o].nodeType&&e(s[o]).is(a)&&r.push(s[o]):1===s[o].nodeType&&r.push(s[o]);return new C(n(r))},remove:function(){for(var e=this,a=0;a<this.length;a+=1)e[a].parentNode&&e[a].parentNode.removeChild(e[a]);return this},detach:function(){return this.remove()},add:function(){for(var a=[],t=arguments.length;t--;)a[t]=arguments[t];var r,n,i=this;for(r=0;r<a.length;r+=1){var s=e(a[r]);for(n=0;n<s.length;n+=1)i[i.length]=s[n],i.length+=1}return i},empty:function(){for(var e=this,a=0;a<this.length;a+=1){var t=e[a];if(1===t.nodeType){for(var r=0;r<t.childNodes.length;r+=1)t.childNodes[r].parentNode&&t.childNodes[r].parentNode.removeChild(t.childNodes[r]);t.textContent=""}}return this}}),I="click blur focus focusin focusout keyup keydown keypress submit change mousedown mousemove mouseup mouseenter mouseleave mouseout mouseover touchstart touchend touchmove resize scroll".split(" "),E="resize scroll".split(" "),T=0;T<I.length;T+=1)!function(a){M[a]=function(t,r,n){var i=this;if(void 0===t){for(var s=0;s<this.length;s+=1)E.indexOf(a)<0&&(a in i[s]?i[s][a]():e(i[s]).trigger(a));return this}return this.on(a,t,r,n)}}(I[T]);var O={scrollTo:function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];var t=e[0],r=e[1],n=e[2],i=e[3],s=e[4];if(4===e.length&&"function"==typeof i){s=i;var o;o=e,t=o[0],r=o[1],n=o[2],s=o[3],i=o[4]}return void 0===i&&(i="swing"),this.each(function(){function e(t){void 0===t&&(t=(new Date).getTime()),null===b&&(b=t);var r,p=Math.max(Math.min((t-b)/n,1),0),d="linear"===i?p:.5-Math.cos(p*Math.PI)/2;if(g&&(u=a+d*(c-a)),v&&(h=o+d*(m-o)),g&&c>a&&u>=c&&(f.scrollTop=c,r=!0),g&&c<a&&u<=c&&(f.scrollTop=c,r=!0),v&&m>o&&h>=m&&(f.scrollLeft=m,r=!0),v&&m<o&&h<=m&&(f.scrollLeft=m,r=!0),r)return void(s&&s());g&&(f.scrollTop=u),v&&(f.scrollLeft=h),l(e)}var a,o,p,d,c,m,u,h,f=this,g=r>0||0===r,v=t>0||0===t;if(void 0===i&&(i="swing"),g&&(a=f.scrollTop,n||(f.scrollTop=r)),v&&(o=f.scrollLeft,n||(f.scrollLeft=t)),n){g&&(p=f.scrollHeight-f.offsetHeight,c=Math.max(Math.min(r,p),0)),v&&(d=f.scrollWidth-f.offsetWidth,m=Math.max(Math.min(t,d),0));var b=null;g&&c===a&&(g=!1),v&&m===o&&(v=!1),l(e)}})},scrollTop:function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];var t=e[0],r=e[1],n=e[2],i=e[3];if(3===e.length&&"function"==typeof n){var s;s=e,t=s[0],r=s[1],i=s[2],n=s[3]}var o=this;return void 0===t?o.length>0?o[0].scrollTop:null:o.scrollTo(void 0,t,r,n,i)},scrollLeft:function(){for(var e=[],a=arguments.length;a--;)e[a]=arguments[a];var t=e[0],r=e[1],n=e[2],i=e[3];if(3===e.length&&"function"==typeof n){var s;s=e,t=s[0],r=s[1],i=s[2],n=s[3]}var o=this;return void 0===t?o.length>0?o[0].scrollLeft:null:o.scrollTo(t,void 0,r,n,i)}},L={animate:m,stop:u},D={},z=0,B={__utils:!0,ajaxSetup:h,ajax:f,get:v,post:b,getJSON:w};return e.use(S,M,O,L,B),e}(),window.Template7=function(){"use strict";function e(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.apply(e)}function a(e){return"function"==typeof e}function t(e){return(void 0!==l&&l.escape?l.escape(e):e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function r(e){var a,t,r,n=e.replace(/[{}#}]/g,"").split(" "),i=[];for(t=0;t<n.length;t+=1){var s=n[t],o=void 0,l=void 0;if(0===t)i.push(s);else if(0===s.indexOf('"')||0===s.indexOf("'"))if(o=0===s.indexOf('"')?d:p,l=0===s.indexOf('"')?'"':"'",2===s.match(o).length)i.push(s);else{for(a=0,r=t+1;r<n.length;r+=1)if(s+=" "+n[r],n[r].indexOf(l)>=0){a=r,i.push(s);break}a&&(t=a)}else if(s.indexOf("=")>0){var c=s.split("="),m=c[0],u=c[1];if(o||(o=0===u.indexOf('"')?d:p,l=0===u.indexOf('"')?'"':"'"),2!==u.match(o).length){for(a=0,r=t+1;r<n.length;r+=1)if(u+=" "+n[r],n[r].indexOf(l)>=0){a=r;break}a&&(t=a)}var h=[m,u.replace(o,"")];i.push(h)}else i.push(s)}return i}function n(a){var t,n,i=[];if(!a)return[];var s=a.split(/({{[^{^}]*}})/);for(t=0;t<s.length;t+=1){var o=s[t];if(""!==o)if(o.indexOf("{{")<0)i.push({type:"plain",content:o});else{if(o.indexOf("{/")>=0)continue;if(o.indexOf("{#")<0&&o.indexOf(" ")<0&&o.indexOf("else")<0){i.push({type:"variable",contextName:o.replace(/[{}]/g,"")});continue}var l=r(o),p=l[0],d=">"===p,c=[],m={};for(n=1;n<l.length;n+=1){var u=l[n];e(u)?m[u[0]]="false"!==u[1]&&u[1]:c.push(u)}if(o.indexOf("{#")>=0){var h="",f="",g=0,v=void 0,b=!1,w=!1,C=0;for(n=t+1;n<s.length;n+=1)if(s[n].indexOf("{{#")>=0&&(C+=1),s[n].indexOf("{{/")>=0&&(C-=1),s[n].indexOf("{{#"+p)>=0)h+=s[n],w&&(f+=s[n]),g+=1;else if(s[n].indexOf("{{/"+p)>=0){if(!(g>0)){v=n,b=!0;break}g-=1,h+=s[n],w&&(f+=s[n])}else s[n].indexOf("else")>=0&&0===C?w=!0:(w||(h+=s[n]),w&&(f+=s[n]));b&&(v&&(t=v),i.push({type:"helper",helperName:p,contextName:c,content:h,inverseContent:f,hash:m}))}else o.indexOf(" ")>0&&(d&&(p="_partial",c[0]&&(c[0]='"'+c[0].replace(/"|'/g,"")+'"')),i.push({type:"helper",helperName:p,contextName:c,hash:m}))}}return i}function i(e,a,t){return e.split(/([+ -*\/^])/g).map(function(e){if(e.indexOf(a)<0)return e;if(!t)return JSON.stringify("");var r=t;return e.indexOf(a+".")>=0&&e.split(a+".")[1].split(".").forEach(function(e){r=r[e]?r[e]:"undefined"}),JSON.stringify(r)}).join("")}function s(e,a){return e.split(/([+ -*^])/g).map(function(e){if(e.indexOf("../")<0)return e;if(!a||0===a.length)return JSON.stringify("");var t=e.split("../").length-1,r=t>a.length?a[a.length-1]:a[t-1],n=r;return e.replace(/..\//g,"").split(".").forEach(function(e){n=n[e]?n[e]:"undefined"}),JSON.stringify(n)}).join("")}function o(e,a){if(2===arguments.length){var t=new c(e),r=t.compile()(a);return t=null,r}return new c(e)}var l;l="undefined"!=typeof window?window:"undefined"!=typeof global?global:void 0;var p=new RegExp("'","g"),d=new RegExp('"',"g"),c=function(e){function a(e,a,t){void 0===t&&(t="data_1");var r,n,i=a,s=0;0===e.indexOf("../")?(s=e.split("../").length-1,n=i.split("_")[1]-s,i="ctx_"+(n>=1?n:1),r=e.split("../")[s].split(".")):0===e.indexOf("@global")?(i="Template7.global",r=e.split("@global.")[1].split(".")):0===e.indexOf("@root")?(i="root",r=e.split("@root.")[1].split(".")):r=e.split(".");for(var o=0;o<r.length;o+=1){var l=r[o];if(0===l.indexOf("@")){var p=t.split("_")[1];s>0&&(p=n),
o>0?i+="[(data_"+p+" && data_"+p+"."+l.replace("@","")+")]":i="(data_"+p+" && data_"+p+"."+l.replace("@","")+")"}else isFinite(l)?i+="["+l+"]":"this"===l||l.indexOf("this.")>=0||l.indexOf("this[")>=0||l.indexOf("this(")>=0?i=l.replace("this",a):i+="."+l}return i}function t(e,t,r){for(var n=[],i=0;i<e.length;i+=1)/^['"]/.test(e[i])?n.push(e[i]):/^(true|false|\d+)$/.test(e[i])?n.push(e[i]):n.push(a(e[i],t,r));return n.join(", ")}function r(e,s){function o(e,a){return e.content?r(e.content,a):function(){return""}}function p(e,a){return e.inverseContent?r(e.inverseContent,a):function(){return""}}if(void 0===e&&(e=i.template),void 0===s&&(s=1),"string"!=typeof e)throw new Error("Template7: Template must be a string");var d=n(e),c="ctx_"+s,m="data_"+s;if(0===d.length)return function(){return""};var u="";u+=1===s?"(function ("+c+", "+m+", root) {\n":"(function ("+c+", "+m+") {\n",1===s&&(u+="function isArray(arr){return Object.prototype.toString.apply(arr) === '[object Array]';}\n",u+="function isFunction(func){return (typeof func === 'function');}\n",u+='function c(val, ctx) {if (typeof val !== "undefined" && val !== null) {if (isFunction(val)) {return val.call(ctx);} else return val;} else return "";}\n',u+="root = root || ctx_1 || {};\n"),u+="var r = '';\n";var h;for(h=0;h<d.length;h+=1){var f=d[h];if("plain"!==f.type){var g=void 0,v=void 0;if("variable"===f.type&&(g=a(f.contextName,c,m),u+="r += c("+g+", "+c+");"),"helper"===f.type){var b=void 0;if("ctx_1"!==c){for(var w=c.split("_")[1],C="ctx_"+(w-1),y=w-2;y>=1;y-=1)C+=", ctx_"+y;b="["+C+"]"}else b="["+c+"]";if(f.helperName in i.helpers)v=t(f.contextName,c,m),u+="r += (Template7.helpers."+f.helperName+").call("+c+", "+(v&&v+", ")+"{hash:"+JSON.stringify(f.hash)+", data: "+m+" || {}, fn: "+o(f,s+1)+", inverse: "+p(f,s+1)+", root: root, parents: "+b+"});";else{if(f.contextName.length>0)throw new Error('Template7: Missing helper: "'+f.helperName+'"');g=a(f.helperName,c,m),u+="if ("+g+") {",u+="if (isArray("+g+")) {",u+="r += (Template7.helpers.each).call("+c+", "+g+", {hash:"+JSON.stringify(f.hash)+", data: "+m+" || {}, fn: "+o(f,s+1)+", inverse: "+p(f,s+1)+", root: root, parents: "+b+"});",u+="}else {",u+="r += (Template7.helpers.with).call("+c+", "+g+", {hash:"+JSON.stringify(f.hash)+", data: "+m+" || {}, fn: "+o(f,s+1)+", inverse: "+p(f,s+1)+", root: root, parents: "+b+"});",u+="}}"}}}else u+="r +='"+f.content.replace(/\r/g,"\\r").replace(/\n/g,"\\n").replace(/'/g,"\\'")+"';"}return u+="\nreturn r;})",eval.call(l,u)}var i=this;i.template=e,i.compile=function(e){return i.compiled||(i.compiled=r(e)),i.compiled}};return c.prototype={options:{},partials:{},helpers:{_partial:function(e,a){var t=c.prototype.partials[e];if(!t||t&&!t.template)return"";t.compiled||(t.compiled=new c(t.template).compile());var r=this;for(var n in a.hash)r[n]=a.hash[n];return t.compiled(r,a.data,a.root)},escape:function(e,a){if("string"!=typeof e)throw new Error('Template7: Passed context to "escape" helper should be a string');return t(e)},if:function(e,t){var r=e;return a(r)&&(r=r.call(this)),r?t.fn(this,t.data):t.inverse(this,t.data)},unless:function(e,t){var r=e;return a(r)&&(r=r.call(this)),r?t.inverse(this,t.data):t.fn(this,t.data)},each:function(t,r){var n=t,i="",s=0;if(a(n)&&(n=n.call(this)),e(n)){for(r.hash.reverse&&(n=n.reverse()),s=0;s<n.length;s+=1)i+=r.fn(n[s],{first:0===s,last:s===n.length-1,index:s});r.hash.reverse&&(n=n.reverse())}else for(var o in n)s+=1,i+=r.fn(n[o],{key:o});return s>0?i:r.inverse(this)},with:function(e,t){var r=e;return a(r)&&(r=e.call(this)),t.fn(r)},join:function(e,t){var r=e;return a(r)&&(r=r.call(this)),r.join(t.hash.delimiter||t.hash.delimeter)},js:function(e,a){var t,r=a.data,n=e;return"index first last key".split(" ").forEach(function(e){if(void 0!==r[e]){var a=new RegExp("this.@"+e,"g"),t=new RegExp("@"+e,"g");n=n.replace(a,JSON.stringify(r[e])).replace(t,JSON.stringify(r[e]))}}),a.root&&n.indexOf("@root")>=0&&(n=i(n,"@root",a.root)),n.indexOf("@global")>=0&&(n=i(n,"@global",l.Template7.global)),n.indexOf("../")>=0&&(n=s(n,a.parents)),t=n.indexOf("return")>=0?"(function(){"+n+"})":"(function(){return ("+n+")})",eval.call(this,t).call(this)},js_if:function(e,a){var t,r=a.data,n=e;return"index first last key".split(" ").forEach(function(e){if(void 0!==r[e]){var a=new RegExp("this.@"+e,"g"),t=new RegExp("@"+e,"g");n=n.replace(a,JSON.stringify(r[e])).replace(t,JSON.stringify(r[e]))}}),a.root&&n.indexOf("@root")>=0&&(n=i(n,"@root",a.root)),n.indexOf("@global")>=0&&(n=i(n,"@global",c.global)),n.indexOf("../")>=0&&(n=s(n,a.parents)),t=n.indexOf("return")>=0?"(function(){"+n+"})":"(function(){return ("+n+")})",eval.call(this,t).call(this)?a.fn(this,a.data):a.inverse(this,a.data)}}},c.prototype.helpers.js_compare=c.prototype.helpers.js_if,o.registerHelper=function(e,a){c.prototype.helpers[e]=a},o.unregisterHelper=function(e){c.prototype.helpers[e]=void 0,delete c.prototype.helpers[e]},o.registerPartial=function(e,a){c.prototype.partials[e]={template:a}},o.unregisterPartial=function(e){c.prototype.partials[e]&&(c.prototype.partials[e]=void 0,delete c.prototype.partials[e])},o.compile=function(e,a){return new c(e,a).compile()},o.options=c.prototype.options,o.helpers=c.prototype.helpers,o.partials=c.prototype.partials,o}(),function(){"use strict";window.Framework7=function(e){function a(){var e,a=i(this),t=a[0].scrollTop,r=a[0].scrollHeight,n=a[0].offsetHeight,s=a[0].getAttribute("data-distance"),o=a.find(".virtual-list"),l=a.hasClass("infinite-scroll-top");if(s||(s=50),"string"==typeof s&&s.indexOf("%")>=0&&(s=parseInt(s,10)/100*n),s>n&&(s=n),l)t<s&&a.trigger("infinite");else if(t+n>=r-s){if(o.length>0&&(e=o.eq(-1)[0].f7VirtualList)&&!e.reachEnd&&!e.params.updatableScroll)return;a.trigger("infinite")}}function t(){r.device.ipad&&(document.body.scrollLeft=0,setTimeout(function(){document.body.scrollLeft=0},0))}var r=this;r.version="1.6.0",r.params={root:"body",cache:!0,cacheIgnore:[],cacheIgnoreGetParameters:!1,cacheDuration:6e5,preloadPreviousPage:!0,uniqueHistory:!1,uniqueHistoryIgnoreGetParameters:!1,dynamicPageUrl:"content-{{index}}",allowDuplicateUrls:!1,router:!0,routerRemoveTimeout:!1,routerRemoveWithTimeout:!1,pushState:!1,pushStateRoot:void 0,pushStateNoAnimation:!1,pushStateSeparator:"#!/",pushStateOnLoad:!0,fastClicks:!0,fastClicksDistanceThreshold:10,fastClicksDelayBetweenClicks:50,fastClicksExclude:"",tapHold:!1,tapHoldDelay:750,tapHoldPreventClicks:!0,activeState:!0,activeStateElements:"a, button, label, span",animateNavBackIcon:!1,swipeBackPage:!0,swipeBackPageThreshold:0,swipeBackPageActiveArea:30,swipeBackPageAnimateShadow:!0,swipeBackPageAnimateOpacity:!0,ajaxLinks:void 0,externalLinks:".external",sortable:!0,hideNavbarOnPageScroll:!1,hideToolbarOnPageScroll:!1,hideTabbarOnPageScroll:!1,showBarsOnPageScrollEnd:!0,showBarsOnPageScrollTop:!0,swipeout:!0,swipeoutActionsNoFold:!1,swipeoutNoFollow:!1,swipeoutRemoveWithTimeout:!1,smartSelectOpenIn:"page",smartSelectBackText:"Back",smartSelectPopupCloseText:"Close",smartSelectPickerCloseText:"Done",smartSelectSearchbar:!1,smartSelectBackOnSelect:!1,scrollTopOnNavbarClick:!1,scrollTopOnStatusbarClick:!1,panelLeftBreakpoint:null,panelRightBreakpoint:null,swipePanel:!1,swipePanelActiveArea:0,swipePanelCloseOpposite:!0,swipePanelOnlyClose:!1,swipePanelNoFollow:!1,swipePanelThreshold:0,panelsCloseByOutside:!0,modalButtonOk:"OK",modalButtonCancel:"Cancel",modalUsernamePlaceholder:"Username",modalPasswordPlaceholder:"Password",modalTitle:"Framework7",modalCloseByOutside:!1,actionsCloseByOutside:!0,popupCloseByOutside:!0,popoverCloseByOutside:!0,modalPreloaderTitle:"Loading... ",modalStack:!0,modalsMoveToRoot:!0,imagesLazyLoadThreshold:0,imagesLazyLoadSequential:!0,viewClass:"view",viewMainClass:"view-main",viewsClass:"views",notificationCloseOnClick:!1,notificationCloseIcon:!0,notificationCloseButtonText:"Close",animatePages:!0,templates:{},template7Data:{},template7Pages:!1,precompileTemplates:!1,material:!1,materialPageLoadDelay:0,materialPreloaderSvg:'<svg xmlns="http://www.w3.org/2000/svg" height="75" width="75" viewbox="0 0 75 75"><circle cx="37.5" cy="37.5" r="33.5" stroke-width="8"/></svg>',materialPreloaderHtml:'<span class="preloader-inner"><span class="preloader-inner-gap"></span><span class="preloader-inner-left"><span class="preloader-inner-half-circle"></span></span><span class="preloader-inner-right"><span class="preloader-inner-half-circle"></span></span></span>',materialRipple:!0,materialRippleElements:".ripple, a.link, a.item-link, .button, .modal-button, .tab-link, .label-radio, .label-checkbox, .actions-modal-button, a.searchbar-clear, a.floating-button, .floating-button > a, .speed-dial-buttons a, .form-checkbox, .form-radio, .data-table .sortable-cell",init:!0};for(var n in e)r.params[n]=e[n];var i=Dom7,s=Template7;r._compiledTemplates={},r.root=i(r.params.root),r.root.eq(0).addClass("framework7-root"),r.touchEvents={start:r.support.touch?"touchstart":"mousedown",move:r.support.touch?"touchmove":"mousemove",end:r.support.touch?"touchend":"mouseup"},r.ls=window.localStorage,r.rtl="rtl"===i("body").css("direction"),r.rtl&&i("html").attr("dir","rtl"),void 0!==r.params.statusbarOverlay?r.params.statusbarOverlay?i("html").addClass("with-statusbar-overlay"):i("html").removeClass("with-statusbar-overlay"):r.device.ios&&(window.cordova||window.phonegap)&&i(document).on("resume",function(){r.device.needsStatusBar()&&i("html").addClass("with-statusbar-overlay")},!1),r.views=[];var o=function(e,a){var t,n={dynamicNavbar:!1,domCache:!1,linksView:void 0,reloadPages:!1,uniqueHistory:r.params.uniqueHistory,uniqueHistoryIgnoreGetParameters:r.params.uniqueHistoryIgnoreGetParameters,allowDuplicateUrls:r.params.allowDuplicateUrls,swipeBackPage:r.params.swipeBackPage,swipeBackPageAnimateShadow:r.params.swipeBackPageAnimateShadow,swipeBackPageAnimateOpacity:r.params.swipeBackPageAnimateOpacity,swipeBackPageActiveArea:r.params.swipeBackPageActiveArea,swipeBackPageThreshold:r.params.swipeBackPageThreshold,animatePages:r.params.animatePages,preloadPreviousPage:r.params.preloadPreviousPage};a=a||{},a.dynamicNavbar&&r.params.material&&(a.dynamicNavbar=!1);for(var s in n)void 0===a[s]&&(a[s]=n[s]);var o=this;o.params=a,o.selector=e;var l=i(e);if(o.container=l[0],"string"!=typeof e&&(e=(l.attr("id")?"#"+l.attr("id"):"")+(l.attr("class")?"."+l.attr("class").replace(/ /g,".").replace(".active",""):""),o.selector=e),o.main=l.hasClass(r.params.viewMainClass),o.contentCache={},o.contextCache={},o.pagesCache={},o.pageElementsCache={},l[0].f7View=o,o.pagesContainer=l.find(".pages")[0],o.initialPages=[],o.initialPagesUrl=[],o.initialNavbars=[],o.params.domCache){var p=l.find(".page");for(t=0;t<p.length;t++)o.initialPages.push(p[t]),o.initialPagesUrl.push("#"+p.eq(t).attr("data-page"));if(o.params.dynamicNavbar){var d=l.find(".navbar-inner");for(t=0;t<d.length;t++)o.initialNavbars.push(d[t])}}o.allowPageChange=!0;var c=document.location.href;o.history=[];var m=c,u=r.params.pushStateSeparator,h=r.params.pushStateRoot;r.params.pushState&&o.main&&(h?m=h:u&&m.indexOf(u)>=0&&m.indexOf(u+"#")<0&&(m=m.split(u)[0]));var f,g;o.activePage||(f=i(o.pagesContainer).find(".page-on-center"),0===f.length&&(f=i(o.pagesContainer).find(".page:not(.cached)"),f=f.eq(f.length-1)),f.length>0&&(g=f[0].f7PageData)),o.params.domCache&&f?(o.url=l.attr("data-url")||o.params.url||"#"+f.attr("data-page"),o.pagesCache[o.url]=f.attr("data-page")):o.url=l.attr("data-url")||o.params.url||m,g&&(g.view=o,g.url=o.url,o.params.domCache&&o.params.dynamicNavbar&&!g.navbarInnerContainer&&(g.navbarInnerContainer=o.initialNavbars[o.initialPages.indexOf(g.container)]),o.activePage=g,f[0].f7PageData=g),o.url&&o.history.push(o.url);var v,b,w,C,y,x,T,k,P,S,M,I,E=!1,O=!1,L={},D=[],z=[],B=!0,N=[],A=[];if(o.handleTouchStart=function(e){B&&o.params.swipeBackPage&&!E&&!r.swipeoutOpenedEl&&o.allowPageChange&&(O=!1,E=!0,v=void 0,L.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,L.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,C=(new Date).getTime(),P=o.params.dynamicNavbar&&l.find(".navbar-inner").length>1)},o.handleTouchMove=function(e){if(E){var a="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,t="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY;if(void 0===v&&(v=!!(v||Math.abs(t-L.y)>Math.abs(a-L.x))),v||e.f7PreventSwipeBack||r.preventSwipeBack)return void(E=!1);if(!O){var n=!1;b=l.width();var s=i(e.target),p=s.hasClass("swipeout")?s:s.parents(".swipeout");p.length>0&&(!r.rtl&&p.find(".swipeout-actions-left").length>0&&(n=!0),r.rtl&&p.find(".swipeout-actions-right").length>0&&(n=!0)),D=s.is(".page")?s:s.parents(".page"),D.hasClass("no-swipeback")&&(n=!0),z=l.find(".page-on-left:not(.cached)");var d=L.x-l.offset().left>o.params.swipeBackPageActiveArea;if(d=r.rtl?L.x<l.offset().left-l[0].scrollLeft+b-o.params.swipeBackPageActiveArea:L.x-l.offset().left>o.params.swipeBackPageActiveArea,d&&(n=!0),0!==z.length&&0!==D.length||(n=!0),n)return void(E=!1);o.params.swipeBackPageAnimateShadow&&!r.device.android&&(S=D.find(".swipeback-page-shadow"),0===S.length&&(S=i('<div class="swipeback-page-shadow"></div>'),D.append(S))),o.params.swipeBackPageAnimateOpacity&&(M=z.find(".swipeback-page-opacity"),0===M.length&&(M=i('<div class="swipeback-page-opacity"></div>'),z.append(M))),P&&(N=l.find(".navbar-on-center:not(.cached)"),A=l.find(".navbar-on-left:not(.cached)"),y=N.find(".left, .center, .right, .subnavbar, .fading"),x=A.find(".left, .center, .right, .subnavbar, .fading"),r.params.animateNavBackIcon&&(T=N.find(".left.sliding .back .icon"),k=A.find(".left.sliding .back .icon"))),i(".picker-modal.modal-in").length>0&&r.closeModal(i(".picker-modal.modal-in"))}e.f7PreventPanelSwipe=!0,O=!0,e.preventDefault();var c=r.rtl?-1:1;w=(a-L.x-o.params.swipeBackPageThreshold)*c,w<0&&(w=0);var m=w/b,u={percentage:m,activePage:D[0],previousPage:z[0],activeNavbar:N[0],previousNavbar:A[0]};o.params.onSwipeBackMove&&o.params.onSwipeBackMove(u),l.trigger("swipeBackMove swipeback:move",u);var h=w*c,f=(w/5-b/5)*c;if(1===r.device.pixelRatio&&(h=Math.round(h),f=Math.round(f)),D.transform("translate3d("+h+"px,0,0)"),o.params.swipeBackPageAnimateShadow&&!r.device.android&&(S[0].style.opacity=1-1*m),z.transform("translate3d("+f+"px,0,0)"),o.params.swipeBackPageAnimateOpacity&&(M[0].style.opacity=1-1*m),P){var g;for(g=0;g<y.length;g++)if(I=i(y[g]),I.is(".subnavbar.sliding")||(I[0].style.opacity=1-1.3*m),I[0].className.indexOf("sliding")>=0){var C=m*I[0].f7NavbarRightOffset;1===r.device.pixelRatio&&(C=Math.round(C)),I.transform("translate3d("+C+"px,0,0)"),r.params.animateNavBackIcon&&I[0].className.indexOf("left")>=0&&T.length>0&&T.transform("translate3d("+-C+"px,0,0)")}for(g=0;g<x.length;g++)if(I=i(x[g]),I.is(".subnavbar.sliding")||(I[0].style.opacity=1.3*m-.3),I[0].className.indexOf("sliding")>=0){var B=I[0].f7NavbarLeftOffset*(1-m);1===r.device.pixelRatio&&(B=Math.round(B)),I.transform("translate3d("+B+"px,0,0)"),r.params.animateNavBackIcon&&I[0].className.indexOf("left")>=0&&k.length>0&&k.transform("translate3d("+-B+"px,0,0)")}}}},o.handleTouchEnd=function(e){if(!E||!O)return E=!1,void(O=!1);if(E=!1,O=!1,0===w)return i([D[0],z[0]]).transform(""),void(P&&(y.transform("").css({opacity:""}),x.transform("").css({opacity:""}),T&&T.length>0&&T.transform(""),k&&T.length>0&&k.transform("")));var a=(new Date).getTime()-C,t=!1;(a<300&&w>10||a>=300&&w>b/2)&&(D.removeClass("page-on-center").addClass("page-on-right"),z.removeClass("page-on-left").addClass("page-on-center"),P&&(N.removeClass("navbar-on-center").addClass("navbar-on-right"),A.removeClass("navbar-on-left").addClass("navbar-on-center")),t=!0),i([D[0],z[0]]).transform("").addClass("page-transitioning"),P&&(y.css({opacity:""}).each(function(){var e=t?this.f7NavbarRightOffset:0,a=i(this);a.transform("translate3d("+e+"px,0,0)"),r.params.animateNavBackIcon&&a.hasClass("left")&&T.length>0&&T.addClass("page-transitioning").transform("translate3d("+-e+"px,0,0)")}).addClass("page-transitioning"),x.transform("").css({opacity:""}).each(function(){var e=t?0:this.f7NavbarLeftOffset,a=i(this);a.transform("translate3d("+e+"px,0,0)"),r.params.animateNavBackIcon&&a.hasClass("left")&&k.length>0&&k.addClass("page-transitioning").transform("translate3d("+-e+"px,0,0)")}).addClass("page-transitioning")),B=!1,o.allowPageChange=!1;var n={activePage:D[0],previousPage:z[0],activeNavbar:N[0],previousNavbar:A[0]};if(t){var s=o.history[o.history.length-2];o.url=s,r.pageBackCallback("before",o,{pageContainer:D[0],url:s,position:"center",newPage:z,oldPage:D,swipeBack:!0}),r.pageAnimCallback("before",o,{pageContainer:z[0],url:s,position:"left",newPage:z,oldPage:D,swipeBack:!0}),o.params.onSwipeBackBeforeChange&&o.params.onSwipeBackBeforeChange(n),l.trigger("swipeBackBeforeChange swipeback:beforechange",n)}else o.params.onSwipeBackBeforeReset&&o.params.onSwipeBackBeforeReset(n),l.trigger("swipeBackBeforeReset swipeback:beforereset",n);D.transitionEnd(function(){i([D[0],z[0]]).removeClass("page-transitioning"),P&&(y.removeClass("page-transitioning").css({opacity:""}),x.removeClass("page-transitioning").css({opacity:""}),T&&T.length>0&&T.removeClass("page-transitioning"),k&&k.length>0&&k.removeClass("page-transitioning")),B=!0,o.allowPageChange=!0,t?(r.params.pushState&&o.main&&history.back(),r.pageBackCallback("after",o,{pageContainer:D[0],url:s,position:"center",newPage:z,oldPage:D,swipeBack:!0}),r.pageAnimCallback("after",o,{pageContainer:z[0],url:s,position:"left",newPage:z,oldPage:D,swipeBack:!0}),r.router.afterBack(o,D,z),o.params.onSwipeBackAfterChange&&o.params.onSwipeBackAfterChange(n),l.trigger("swipeBackAfterChange swipeback:afterchange",n)):(o.params.onSwipeBackAfterReset&&o.params.onSwipeBackAfterReset(n),l.trigger("swipeBackAfterReset swipeback:afterreset",n)),S&&S.length>0&&S.remove(),M&&M.length>0&&M.remove()})},o.attachEvents=function(e){var a=e?"off":"on",t=!("touchstart"!==r.touchEvents.start||!r.support.passiveListener)&&{passive:!0,capture:!1},n=!!r.support.passiveListener&&{passive:!1,capture:!1};l[a](r.touchEvents.start,o.handleTouchStart,t),l[a](r.touchEvents.move,o.handleTouchMove,n),l[a](r.touchEvents.end,o.handleTouchEnd,t)},o.detachEvents=function(){o.attachEvents(!0)},o.params.swipeBackPage&&!r.params.material&&o.attachEvents(),o.params.name&&(o.params.name=o.params.name.replace(/[^a-zA-Z]/g,"")),r.views.push(o),o.main?(r.mainView=o,r.views.main=o):o.params.name&&(r[o.params.name+"View"]=o,r.views[o.params.name]=o),o.router={load:function(e){return r.router.load(o,e)},back:function(e){return r.router.back(o,e)},loadPage:function(e){if("string"==typeof(e=e||{})){var a=e;e={},a&&0===a.indexOf("#")&&o.params.domCache?e.pageName=a.split("#")[1]:e.url=a}return r.router.load(o,e)},loadContent:function(e){return r.router.load(o,{content:e})},reloadPage:function(e){return r.router.load(o,{url:e,reload:!0})},reloadContent:function(e){return r.router.load(o,{content:e,reload:!0})},reloadPreviousPage:function(e){return r.router.load(o,{url:e,reloadPrevious:!0,reload:!0})},reloadPreviousContent:function(e){return r.router.load(o,{content:e,reloadPrevious:!0,reload:!0})},refreshPage:function(){var e={url:o.url,reload:!0,ignoreCache:!0};return e.url&&0===e.url.indexOf("#")&&(o.params.domCache&&o.pagesCache[e.url]?(e.pageName=o.pagesCache[e.url],e.url=void 0,delete e.url):o.contentCache[e.url]&&(e.content=o.contentCache[e.url],e.url=void 0,delete e.url)),r.router.load(o,e)},refreshPreviousPage:function(){var e={url:o.history[o.history.length-2],reload:!0,reloadPrevious:!0,ignoreCache:!0};return e.url&&0===e.url.indexOf("#")&&o.params.domCache&&o.pagesCache[e.url]&&(e.pageName=o.pagesCache[e.url],e.url=void 0,delete e.url),r.router.load(o,e)}},o.loadPage=o.router.loadPage,o.loadContent=o.router.loadContent,o.reloadPage=o.router.reloadPage,o.reloadContent=o.router.reloadContent,o.reloadPreviousPage=o.router.reloadPreviousPage,o.reloadPreviousContent=o.router.reloadPreviousContent,o.refreshPage=o.router.refreshPage,o.refreshPreviousPage=o.router.refreshPreviousPage,o.back=o.router.back,o.hideNavbar=function(e){return r.hideNavbar(l.find(".navbar"),e)},o.showNavbar=function(e){return r.showNavbar(l.find(".navbar"),e)},o.hideToolbar=function(e){return r.hideToolbar(l.find(".toolbar"),e)},o.showToolbar=function(e){return r.showToolbar(l.find(".toolbar"),e)},r.params.pushState&&r.params.pushStateOnLoad&&o.main){var H,R=c.split(u)[1];h?H=c.split(r.params.pushStateRoot+u)[1]:u&&c.indexOf(u)>=0&&c.indexOf(u+"#")<0&&(H=R);var V=!r.params.pushStateNoAnimation&&void 0,Y=history.state;H?H.indexOf("#")>=0&&o.params.domCache&&Y&&Y.pageName&&"viewIndex"in Y?r.router.load(o,{pageName:Y.pageName,url:Y.url,animatePages:V,pushState:!1}):H.indexOf("#")>=0&&o.params.domCache&&o.initialPagesUrl.indexOf(H)>=0?r.router.load(o,{pageName:H.replace("#",""),animatePages:V,pushState:!1}):r.router.load(o,{url:H,animatePages:V,pushState:!1}):o.params.domCache&&c.indexOf(u+"#")>=0&&(Y&&Y.pageName&&"viewIndex"in Y?r.router.load(o,{pageName:Y.pageName,url:Y.url,animatePages:V,pushState:!1}):u&&0===R.indexOf("#")&&o.initialPagesUrl.indexOf(R)&&r.router.load(o,{pageName:R.replace("#",""),animatePages:V,pushState:!1}))}return o.destroy=function(){o.detachEvents(),o.main?(r.mainView=null,delete r.mainView,r.views.main=null,delete r.views.main):o.params.name&&(r[o.params.name+"View"]=null,delete r[o.params.name+"View"],r.views[o.params.name]=null,delete r.views[o.params.name]),l.removeAttr("data-page"),l[0].f7View=null,delete l[0].f7View,r.views.splice(r.views.indexOf(o),1);for(var e in o)o.hasOwnProperty(e)&&(o[e]=null,delete o[e]);o=null},r.pluginHook("addView",o),o};r.addView=function(e,a){return new o(e,a)},r.getCurrentView=function(e){var a=i(".popover.modal-in .view"),t=i(".popup.modal-in .view"),r=i(".panel.active .view"),n=i(".views"),s=n.children(".view");if(s.length>1&&s.hasClass("tab")&&(s=n.children(".view.active")),a.length>0&&a[0].f7View)return a[0].f7View;if(t.length>0&&t[0].f7View)return t[0].f7View;if(r.length>0&&r[0].f7View)return r[0].f7View;if(s.length>0){if(1===s.length&&s[0].f7View)return s[0].f7View;if(s.length>1){for(var o=[],l=0;l<s.length;l++)s[l].f7View&&o.push(s[l].f7View);if(o.length>0&&void 0!==e)return o[e];if(o.length>1)return o;if(1===o.length)return o[0];return}}},r.navbarInitCallback=function(e,a,t,n){if(!t&&n&&(t=i(n).parent(".navbar")[0]),n&&(!n.f7NavbarInitialized||!e||e.params.domCache)){var s={container:t,innerContainer:n},o=a&&a.f7PageData,l={page:o,navbar:s};if(n.f7NavbarInitialized&&(e&&e.params.domCache||!e&&i(t).parents(".popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal").length>0))return r.reinitNavbar(t,n),r.pluginHook("navbarReinit",l),void i(n).trigger("navbarReinit navbar:reinit",l);n.f7NavbarInitialized=!0,r.pluginHook("navbarBeforeInit",s,o),i(n).trigger("navbarBeforeInit navbar:beforeinit",l),r.initNavbar(t,n),r.pluginHook("navbarInit",s,o),i(n).trigger("navbarInit navbar:init",l)}},r.navbarRemoveCallback=function(e,a,t,n){!t&&n&&(t=i(n).parent(".navbar")[0]);var s,o={container:t,innerContainer:n};a&&(s=a.f7PageData);var l={page:s,navbar:o};r.pluginHook("navbarBeforeRemove",o,s),i(n).trigger("navbarBeforeRemove navbar:beforeremove",l),o=null,s=null},r.initNavbar=function(e,a){r.initSearchbar&&r.initSearchbar(a)},r.reinitNavbar=function(e,a){},r.initNavbarWithCallback=function(e){e=i(e);var a,t=e.parents("."+r.params.viewClass);0!==t.length&&(0===e.parents(".navbar-through").length&&0===t.find(".navbar-through").length||(a=t[0].f7View||void 0,e.find(".navbar-inner").each(function(){var n,s=this;if(i(s).attr("data-page")&&(n=t.find('.page[data-page="'+i(s).attr("data-page")+'"]')[0]),!n){var o=t.find(".page");1===o.length?n=o[0]:t.find(".page").each(function(){this.f7PageData&&this.f7PageData.navbarInnerContainer===s&&(n=this)})}r.navbarInitCallback(a,n,e[0],s)})))},r.sizeNavbars=function(e){if(!r.params.material){(e?i(e).find(".navbar .navbar-inner:not(.cached)"):i(".navbar .navbar-inner:not(.cached)")).each(function(){var e=i(this);if(!e.hasClass("cached")){var a,t,n=r.rtl?e.find(".right"):e.find(".left"),s=r.rtl?e.find(".left"):e.find(".right"),o=e.find(".center"),l=e.find(".subnavbar"),p=0===n.length,d=0===s.length,c=p?0:n.outerWidth(!0),m=d?0:s.outerWidth(!0),u=o.outerWidth(!0),h=e.styles(),f=e[0].offsetWidth-parseInt(h.paddingLeft,10)-parseInt(h.paddingRight,10),g=e.hasClass("navbar-on-left");d&&(a=f-u),p&&(a=0),p||d||(a=(f-m-u+c)/2);var v=(f-u)/2;f-c-m>u?(v<c&&(v=c),v+u>f-m&&(v=f-m-u),t=v-a):t=0;var b=r.rtl?-1:1;if(o.hasClass("sliding")&&(o[0].f7NavbarLeftOffset=-(a+t)*b,o[0].f7NavbarRightOffset=(f-a-t-u)*b,g)){if(r.params.animateNavBackIcon){var w=e.parent().find(".navbar-on-center").find(".left.sliding .back .icon ~ span");w.length>0&&(o[0].f7NavbarLeftOffset+=w[0].offsetLeft)}o.transform("translate3d("+o[0].f7NavbarLeftOffset+"px, 0, 0)")}!p&&n.hasClass("sliding")&&(r.rtl?(n[0].f7NavbarLeftOffset=-(f-n[0].offsetWidth)/2*b,n[0].f7NavbarRightOffset=c*b):(n[0].f7NavbarLeftOffset=-c,n[0].f7NavbarRightOffset=(f-n[0].offsetWidth)/2,r.params.animateNavBackIcon&&n.find(".back .icon").length>0&&(n[0].f7NavbarRightOffset-=n.find(".back .icon")[0].offsetWidth)),g&&n.transform("translate3d("+n[0].f7NavbarLeftOffset+"px, 0, 0)")),!d&&s.hasClass("sliding")&&(r.rtl?(s[0].f7NavbarLeftOffset=-m*b,s[0].f7NavbarRightOffset=(f-s[0].offsetWidth)/2*b):(s[0].f7NavbarLeftOffset=-(f-s[0].offsetWidth)/2,s[0].f7NavbarRightOffset=m),g&&s.transform("translate3d("+s[0].f7NavbarLeftOffset+"px, 0, 0)")),l.length&&l.hasClass("sliding")&&(l[0].f7NavbarLeftOffset=r.rtl?l[0].offsetWidth:-l[0].offsetWidth,l[0].f7NavbarRightOffset=-l[0].f7NavbarLeftOffset);var C=t;r.rtl&&p&&d&&o.length>0&&(C=-C),o.css({left:C+"px"})}})}},r.hideNavbar=function(e,a){return void 0===a&&(a=!0),i(e).addClass("navbar-hidden"+(a?"":" not-animated")),!0},r.showNavbar=function(e,a){void 0===a&&(a=!0);var t=i(e);return a?(t.removeClass("not-animated"),t.addClass("navbar-hiding").removeClass("navbar-hidden").transitionEnd(function(){t.removeClass("navbar-hiding")})):t.removeClass("navbar-hidden navbar-hiding not-animated"),!0},r.hideToolbar=function(e,a){return void 0===a&&(a=!0),i(e).addClass("toolbar-hidden"+(a?"":" not-animated")),!0},r.showToolbar=function(e,a){void 0===a&&(a=!0);var t=i(e);a?(t.removeClass("not-animated"),t.addClass("toolbar-hiding").removeClass("toolbar-hidden").transitionEnd(function(){t.removeClass("toolbar-hiding"+(a?"":" not-animated"))})):t.removeClass("toolbar-hidden toolbar-hiding not-animated")};var l=function(e,a){function t(e){e.preventDefault()}var n={input:null,clearButton:null,cancelButton:null,searchList:null,searchIn:".item-title",searchBy:"",found:null,notFound:null,overlay:null,ignore:".searchbar-ignore",customSearch:!1,removeDiacritics:!0,hideDividers:!0,hideGroups:!0};a=a||{};for(var s in n)(void 0===a[s]||null===a[s]&&n.hasOwnProperty(s))&&(a[s]=n[s]);var o=this;o.material=r.params.material,o.params=a,e=i(e),o.container=e,o.active=!1,o.input=o.params.input?i(o.params.input):o.container.find('input[type="search"]'),o.clearButton=o.params.clearButton?i(o.params.clearButton):o.container.find(".searchbar-clear"),o.cancelButton=o.params.cancelButton?i(o.params.cancelButton):o.container.find(".searchbar-cancel"),o.searchList=i(o.params.searchList),o.isVirtualList=o.searchList.hasClass("virtual-list"),o.pageContainer=o.container.parents(".page").eq(0),o.params.overlay?o.overlay=i(o.params.overlay):o.overlay=o.pageContainer.length>0?o.pageContainer.find(".searchbar-overlay"):i(".searchbar-overlay"),o.params.found?o.found=i(o.params.found):o.found=o.pageContainer.length>0?o.pageContainer.find(".searchbar-found"):i(".searchbar-found"),o.params.notFound?o.notFound=i(o.params.notFound):o.notFound=o.pageContainer.length>0?o.pageContainer.find(".searchbar-not-found"):i(".searchbar-not-found");var l=r.rtl?"margin-left":"margin-right",p=!1;o.setCancelButtonMargin=function(){o.cancelButton.transition(0).show(),o.cancelButton.css(l,-o.cancelButton[0].offsetWidth+"px");o.cancelButton[0].clientLeft;o.cancelButton.transition(""),p=!0},o.triggerEvent=function(e,a,t){o.container.trigger(e,t),o.searchList.length>0&&o.searchList.trigger(e,t),a&&o.params[a]&&o.params[a](o,t)},o.enable=function(e){function a(){!o.searchList.length&&!o.params.customSearch||o.container.hasClass("searchbar-active")||o.query||o.overlay.addClass("searchbar-overlay-active"),o.container.addClass("searchbar-active"),o.cancelButton.length>0&&!o.material&&(p||o.setCancelButtonMargin(),o.cancelButton.css(l,"0px")),o.triggerEvent("enableSearch searchbar:enable","onEnable"),o.active=!0}r.device.ios&&!r.params.material&&e&&"focus"===e.type?setTimeout(function(){a()},400):a()},o.disable=function(){function e(){o.input.blur()}o.input.val("").trigger("change"),o.container.removeClass("searchbar-active searchbar-not-empty"),o.cancelButton.length>0&&!o.material&&o.cancelButton.css(l,-o.cancelButton[0].offsetWidth+"px"),(o.searchList.length||o.params.customSearch)&&o.overlay.removeClass("searchbar-overlay-active"),o.active=!1,r.device.ios?setTimeout(function(){e()},400):e(),o.triggerEvent("disableSearch searchbar:disable","onDisable")},o.clear=function(e){if(!o.query&&e&&i(e.target).hasClass("searchbar-clear"))return void o.disable();var a=o.value;o.input.val("").trigger("change").focus(),o.triggerEvent("clearSearch searchbar:clear","onClear",{previousQuery:a})},o.handleInput=function(){setTimeout(function(){var e=o.input.val().trim();(o.searchList.length>0||o.params.customSearch)&&(o.params.searchIn||o.isVirtualList)&&o.search(e,!0)},0)};var d,c="";return o.search=function(e,a){if(!c||e.trim()!==c){if(c=e.trim(),a||(o.active||o.enable(),o.input.val(e)),o.query=o.value=e,0===e.length?(o.container.removeClass("searchbar-not-empty"),o.searchList.length&&o.container.hasClass("searchbar-active")&&o.overlay.addClass("searchbar-overlay-active")):(o.container.addClass("searchbar-not-empty"),o.searchList.length&&o.container.hasClass("searchbar-active")&&o.overlay.removeClass("searchbar-overlay-active")),o.params.customSearch)return void o.triggerEvent("search searchbar:search","onSearch",{query:e});var t,r=[];if(o.isVirtualList){if(d=o.searchList[0].f7VirtualList,""===e.trim())return d.resetFilter(),o.notFound.hide(),void o.found.show();if(t=o.params.removeDiacritics?i.removeDiacritics(e):e,d.params.searchAll)r=d.params.searchAll(t,d.items)||[];else if(d.params.searchByItem)for(var n=0;n<d.items.length;n++)d.params.searchByItem(t,n,d.params.items[n])&&r.push(n)}else{var s;s=o.params.removeDiacritics?i.removeDiacritics(e.trim().toLowerCase()).split(" "):e.trim().toLowerCase().split(" "),o.searchList.find("li").removeClass("hidden-by-searchbar").each(function(e,a){a=i(a);var t=[];a.find(o.params.searchIn).each(function(){var e=i(this).text().trim().toLowerCase();o.params.removeDiacritics&&(e=i.removeDiacritics(e)),t.push(e)}),t=t.join(" ");for(var n=0,l=0;l<s.length;l++)t.indexOf(s[l])>=0&&n++;n===s.length||o.params.ignore&&a.is(o.params.ignore)?r.push(a[0]):a.addClass("hidden-by-searchbar")}),o.params.hideDividers&&o.searchList.find(".item-divider, .list-group-title").each(function(){for(var e=i(this),a=e.nextAll("li"),t=!0,r=0;r<a.length;r++){var n=i(a[r]);if(n.hasClass("list-group-title")||n.hasClass("item-divider"))break;n.hasClass("hidden-by-searchbar")||(t=!1)}var s=o.params.ignore&&e.is(o.params.ignore);t&&!s?e.addClass("hidden-by-searchbar"):e.removeClass("hidden-by-searchbar")}),o.params.hideGroups&&o.searchList.find(".list-group").each(function(){var e=i(this),a=o.params.ignore&&e.is(o.params.ignore);0!==e.find("li:not(.hidden-by-searchbar)").length||a?e.removeClass("hidden-by-searchbar"):e.addClass("hidden-by-searchbar")})}o.triggerEvent("search searchbar:search","onSearch",{query:e,foundItems:r}),0===r.length?(o.notFound.show(),o.found.hide()):(o.notFound.hide(),o.found.show()),o.isVirtualList&&d.filterItems(r)}},o.attachEvents=function(e){var a=e?"off":"on";o.container[a]("submit",t),o.material||o.cancelButton[a]("click",o.disable),
o.overlay[a]("click",o.disable),o.input[a]("focus",o.enable),o.input[a]("change keydown keypress keyup compositionend",o.handleInput),o.clearButton[a]("click",o.clear)},o.detachEvents=function(){o.attachEvents(!0)},o.init=function(){o.attachEvents()},o.destroy=function(){o&&(o.detachEvents(),o=null)},o.init(),o.container[0].f7Searchbar=o,o};r.searchbar=function(e,a){return new l(e,a)},r.initSearchbar=function(e){function a(){n&&n.destroy()}e=i(e);var t=e.hasClass("searchbar")?e:e.find(".searchbar");if(0!==t.length&&t.hasClass("searchbar-init")){var n=r.searchbar(t,t.dataset());e.hasClass("page")?e.once("pageBeforeRemove",a):e.hasClass("navbar-inner")&&e.once("navbarBeforeRemove",a)}};var p=function(e,a){function t(e){e.preventDefault()}var r={textarea:null,maxHeight:null};a=a||{};for(var n in r)void 0!==a[n]&&null!==a[n]||(a[n]=r[n]);var s=this;if(s.params=a,s.container=i(e),0!==s.container.length)return s.textarea=s.params.textarea?i(s.params.textarea):s.container.find("textarea"),s.pageContainer=s.container.parents(".page").eq(0),s.pageContent=s.pageContainer.find(".page-content"),s.pageContentPadding=parseInt(s.pageContent.css("padding-bottom")),s.initialBarHeight=s.container[0].offsetHeight,s.initialAreaHeight=s.textarea[0].offsetHeight,s.sizeTextarea=function(){s.textarea.css({height:""});var e=s.textarea[0].offsetHeight,a=e-s.textarea[0].clientHeight,t=s.textarea[0].scrollHeight;if(t+a>e){var r=t+a,n=s.initialBarHeight+(r-s.initialAreaHeight),i=s.params.maxHeight||s.container.parents(".view")[0].offsetHeight-88;n>i&&(n=parseInt(i,10),r=n-s.initialBarHeight+s.initialAreaHeight),s.textarea.css("height",r+"px"),s.container.css("height",n+"px");var o=s.pageContent[0].scrollTop===s.pageContent[0].scrollHeight-s.pageContent[0].offsetHeight;s.pageContent.length>0&&(s.pageContent.css("padding-bottom",n+"px"),0===s.pageContent.find(".messages-new-first").length&&o&&s.pageContent.scrollTop(s.pageContent[0].scrollHeight-s.pageContent[0].offsetHeight))}else s.pageContent.length>0&&(s.container.css({height:"",bottom:""}),s.pageContent.css({"padding-bottom":""}))},s.clear=function(){s.textarea.val("").trigger("change")},s.value=function(e){if(void 0===e)return s.textarea.val();s.textarea.val(e).trigger("change")},s.textareaTimeout=void 0,s.handleTextarea=function(e){clearTimeout(s.textareaTimeout),s.textareaTimeout=setTimeout(function(){s.sizeTextarea()},0)},s.attachEvents=function(e){var a=e?"off":"on";s.container[a]("submit",t),s.textarea[a]("change keydown keypress keyup paste cut",s.handleTextarea)},s.detachEvents=function(){s.attachEvents(!0)},s.init=function(){s.attachEvents()},s.destroy=function(){s.detachEvents(),s=null},s.init(),s.container[0].f7Messagebar=s,s};r.messagebar=function(e,a){return new p(e,a)},r.initPageMessagebar=function(e){function a(){n.destroy(),e.off("page:beforeremove",a)}e=i(e);var t=e.hasClass("messagebar")?e:e.find(".messagebar");if(0!==t.length&&t.hasClass("messagebar-init")){var n=r.messagebar(t,t.dataset());e.hasClass("page")&&e.on("page:beforeremove",a)}},r.cache=[],r.removeFromCache=function(e){for(var a=!1,t=0;t<r.cache.length;t++)r.cache[t].url===e&&(a=t);!1!==a&&r.cache.splice(a,1)},r.xhr=!1,r.get=function(e,a,t,n){var s=e;if(r.params.cacheIgnoreGetParameters&&e.indexOf("?")>=0&&(s=e.split("?")[0]),r.params.cache&&!t&&e.indexOf("nocache")<0&&r.params.cacheIgnore.indexOf(s)<0)for(var o=0;o<r.cache.length;o++)if(r.cache[o].url===s&&(new Date).getTime()-r.cache[o].time<r.params.cacheDuration)return n(r.cache[o].content),!1;return r.xhr=i.ajax({url:e,method:"GET",beforeSend:r.params.onAjaxStart,complete:function(e,a){"error"!==a&&"timeout"!==a&&e.status>=200&&e.status<300||0===e.status?(r.params.cache&&""!==e.responseText&&(r.removeFromCache(s),r.cache.push({url:s,time:(new Date).getTime(),content:e.responseText})),n(e.responseText,!1)):n(e.responseText,!0),r.params.onAjaxComplete&&r.params.onAjaxComplete(e)},error:function(e){n(e.responseText,!0),r.params.onAjaxError&&r.params.onAjaxError(e)}}),a&&(a.xhr=r.xhr),r.xhr},r.pageCallbacks={},r.onPage=function(e,a,t){if(a&&a.split(" ").length>1){for(var n=a.split(" "),i=[],s=0;s<n.length;s++)i.push(r.onPage(e,n[s],t));return i.remove=function(){for(var e=0;e<i.length;e++)i[e].remove()},i.trigger=function(){for(var e=0;e<i.length;e++)i[e].trigger()},i}var o=r.pageCallbacks[e][a];return o||(o=r.pageCallbacks[e][a]=[]),r.pageCallbacks[e][a].push(t),{remove:function(){for(var e,a=0;a<o.length;a++)o[a].toString()===t.toString()&&(e=a);void 0!==e&&o.splice(e,1)},trigger:t}};for(var d="beforeInit init reinit beforeAnimation afterAnimation back afterBack beforeRemove".split(" "),c=0;c<d.length;c++)r.pageCallbacks[d[c]]={},function(e){var a=e.replace(/^./,function(e){return e.toUpperCase()});r["onPage"+a]=function(a,t){return r.onPage(e,a,t)}}(d[c]);r.triggerPageCallbacks=function(e,a,t){var n=r.pageCallbacks[e]["*"];if(n)for(var i=0;i<n.length;i++)n[i](t);var s=r.pageCallbacks[e][a];if(s&&0!==s.length)for(var o=0;o<s.length;o++)s[o](t)},r.pageInitCallback=function(e,a){var t=a.pageContainer;if(t&&(!t.f7PageInitialized||!e||e.params.domCache)){var n=a.query;n||(n=a.url&&a.url.indexOf("?")>0?i.parseUrlQuery(a.url||""):t.f7PageData&&t.f7PageData.query?t.f7PageData.query:{});var s={container:t,url:a.url,query:n,name:i(t).attr("data-page"),view:e,from:a.position,context:a.context,navbarInnerContainer:a.navbarInnerContainer,fromPage:a.fromPage};if(a.fromPage&&!a.fromPage.navbarInnerContainer&&a.oldNavbarInnerContainer&&(a.fromPage.navbarInnerContainer=a.oldNavbarInnerContainer),t.f7PageInitialized&&(e&&e.params.domCache||!e&&i(t).parents(".popup, .popover, .login-screen, .modal, .actions-modal, .picker-modal").length>0))return r.reinitPage(t),r.pluginHook("pageReinit",s),r.params.onPageReinit&&r.params.onPageReinit(r,s),r.triggerPageCallbacks("reinit",s.name,s),void i(s.container).trigger("pageReinit page:reinit",{page:s});t.f7PageInitialized=!0,t.f7PageData=s,!e||a.preloadOnly||a.reloadPrevious||(i(e.container).attr("data-page",s.name),e.activePage=s),r.pluginHook("pageBeforeInit",s),r.params.onPageBeforeInit&&r.params.onPageBeforeInit(r,s),r.triggerPageCallbacks("beforeInit",s.name,s),i(s.container).trigger("pageBeforeInit page:beforeinit",{page:s}),r.initPage(t),r.pluginHook("pageInit",s),r.params.onPageInit&&r.params.onPageInit(r,s),r.triggerPageCallbacks("init",s.name,s),i(s.container).trigger("pageInit page:init",{page:s})}},r.pageRemoveCallback=function(e,a,t){var n;if(a){a.f7PageData&&(n=a.f7PageData.context);var s={container:a,name:i(a).attr("data-page"),view:e,url:a.f7PageData&&a.f7PageData.url,query:a.f7PageData&&a.f7PageData.query,navbarInnerContainer:a.f7PageData&&a.f7PageData.navbarInnerContainer,from:t,context:n};r.pluginHook("pageBeforeRemove",s),r.params.onPageBeforeRemove&&r.params.onPageBeforeRemove(r,s),r.triggerPageCallbacks("beforeRemove",s.name,s),i(s.container).trigger("pageBeforeRemove page:beforeremove",{page:s}),s=null}},r.pageBackCallback=function(e,a,t){var n,s=t.pageContainer;if(s){s.f7PageData&&(n=s.f7PageData.context);var o={container:s,name:i(s).attr("data-page"),url:s.f7PageData&&s.f7PageData.url,query:s.f7PageData&&s.f7PageData.query,view:a,from:t.position,context:n,navbarInnerContainer:s.f7PageData&&s.f7PageData.navbarInnerContainer,swipeBack:t.swipeBack};"after"===e&&(r.pluginHook("pageAfterBack",o),r.params.onPageAfterBack&&r.params.onPageAfterBack(r,o),r.triggerPageCallbacks("afterBack",o.name,o),i(s).trigger("pageAfterBack page:afterback",{page:o})),"before"===e&&(r.pluginHook("pageBack",o),r.params.onPageBack&&r.params.onPageBack(r,o),r.triggerPageCallbacks("back",o.name,o),i(o.container).trigger("pageBack page:back",{page:o}))}},r.pageAnimCallback=function(e,a,t){var n,s=t.pageContainer;if(s){s.f7PageData&&(n=s.f7PageData.context);var o=t.query;o||(o=t.url&&t.url.indexOf("?")>0?i.parseUrlQuery(t.url||""):s.f7PageData&&s.f7PageData.query?s.f7PageData.query:{});var l={container:s,url:t.url,query:o,name:i(s).attr("data-page"),view:a,from:t.position,context:n,swipeBack:t.swipeBack,navbarInnerContainer:s.f7PageData&&s.f7PageData.navbarInnerContainer,fromPage:t.fromPage},p=t.oldPage,d=t.newPage;if(s.f7PageData=l,"after"===e&&(r.pluginHook("pageAfterAnimation",l),r.params.onPageAfterAnimation&&r.params.onPageAfterAnimation(r,l),r.triggerPageCallbacks("afterAnimation",l.name,l),i(l.container).trigger("pageAfterAnimation page:afteranimation",{page:l})),"before"===e){i(a.container).attr("data-page",l.name),a&&(a.activePage=l),d.hasClass("no-navbar")&&!p.hasClass("no-navbar")&&a.hideNavbar(),d.hasClass("no-navbar")||!p.hasClass("no-navbar")&&!p.hasClass("no-navbar-by-scroll")||a.showNavbar(),d.hasClass("no-toolbar")&&!p.hasClass("no-toolbar")&&a.hideToolbar(),d.hasClass("no-toolbar")||!p.hasClass("no-toolbar")&&!p.hasClass("no-toolbar-by-scroll")||a.showToolbar();var c;d.hasClass("no-tabbar")&&!p.hasClass("no-tabbar")&&(c=i(a.container).find(".tabbar"),0===c.length&&(c=i(a.container).parents("."+r.params.viewsClass).find(".tabbar")),r.hideToolbar(c)),d.hasClass("no-tabbar")||!p.hasClass("no-tabbar")&&!p.hasClass("no-tabbar-by-scroll")||(c=i(a.container).find(".tabbar"),0===c.length&&(c=i(a.container).parents("."+r.params.viewsClass).find(".tabbar")),r.showToolbar(c)),p.removeClass("no-navbar-by-scroll no-toolbar-by-scroll"),r.pluginHook("pageBeforeAnimation",l),r.params.onPageBeforeAnimation&&r.params.onPageBeforeAnimation(r,l),r.triggerPageCallbacks("beforeAnimation",l.name,l),i(l.container).trigger("pageBeforeAnimation page:beforeanimation",{page:l})}}},r.initPage=function(e){e=i(e),0!==e.length&&(r.sizeNavbars&&r.sizeNavbars(e.parents("."+r.params.viewClass)[0]),r.initPageMessages&&r.initPageMessages(e),r.initFormsStorage&&r.initFormsStorage(e),r.initSmartSelects&&r.initSmartSelects(e),r.initPageSwiper&&r.initPageSwiper(e),r.initPullToRefresh&&r.initPullToRefresh(e),r.initPageInfiniteScroll&&r.initPageInfiniteScroll(e),r.initSearchbar&&r.initSearchbar(e),r.initPageMessagebar&&r.initPageMessagebar(e),r.initPageScrollToolbars&&r.initPageScrollToolbars(e),r.initImagesLazyLoad&&r.initImagesLazyLoad(e),r.initPageProgressbar&&r.initPageProgressbar(e),r.initPageResizableTextarea&&r.initPageResizableTextarea(e),r.initPageDataTables&&r.initPageDataTables(e),r.params.material&&r.initPageMaterialPreloader&&r.initPageMaterialPreloader(e),r.params.material&&r.initPageMaterialInputs&&r.initPageMaterialInputs(e),r.params.material&&r.initPageMaterialTabbar&&r.initPageMaterialTabbar(e))},r.reinitPage=function(e){e=i(e),0!==e.length&&(r.sizeNavbars&&r.sizeNavbars(e.parents("."+r.params.viewClass)[0]),r.reinitPageSwiper&&r.reinitPageSwiper(e),r.reinitLazyLoad&&r.reinitLazyLoad(e))},r.initPageWithCallback=function(e){e=i(e);var a=e.parents("."+r.params.viewClass);if(0!==a.length){var t=a[0].f7View||void 0,n=t&&t.url?t.url:void 0;a&&e.attr("data-page")&&a.attr("data-page",e.attr("data-page")),r.pageInitCallback(t,{pageContainer:e[0],url:n,position:"center"})}},r.router={_remove:function(e){r.params.routerRemoveTimeout||r.params.routerRemoveWithTimeout?setTimeout(function(){i(e).remove()},0):i(e).remove()},_modalsSelector:".popup, .modal, .popover, .actions-modal, .picker-modal, .login-screen",temporaryDom:document.createElement("div"),findElement:function(e,a,t,n){a=i(a),n&&(e+=":not(.cached)");var s=a.find(e).filter(function(e,a){return 0===i(a).parents(r.router._modalsSelector).length});return s.length>1&&("string"==typeof t.selector&&(s=a.find(t.selector+" "+e)),s.length>1&&(s=a.find("."+r.params.viewMainClass+" "+e))),1===s.length?s:(n||(s=r.router.findElement(e,a,t,!0)),s&&1===s.length?s:s&&s.length>1?i(s[0]):void 0)},animatePages:function(e,a,t){var r="page-on-center page-on-right page-on-left";"to-left"===t&&(e.removeClass(r).addClass("page-from-center-to-left"),a.removeClass(r).addClass("page-from-right-to-center")),"to-right"===t&&(e.removeClass(r).addClass("page-from-left-to-center"),a.removeClass(r).addClass("page-from-center-to-right"))},prepareNavbar:function(e,a,t){i(e).find(".sliding").each(function(){var e=i(this),a="right"===t?this.f7NavbarRightOffset:this.f7NavbarLeftOffset;r.params.animateNavBackIcon&&e.hasClass("left")&&e.find(".back .icon").length>0&&e.find(".back .icon").transform("translate3d("+-a+"px,0,0)"),e.transform("translate3d("+a+"px,0,0)")})},animateNavbars:function(e,a,t){var n="navbar-on-right navbar-on-center navbar-on-left";"to-left"===t&&(a.removeClass(n).addClass("navbar-from-right-to-center"),a.find(".sliding").each(function(){var e=i(this);e.transform("translate3d(0px,0,0)"),r.params.animateNavBackIcon&&e.hasClass("left")&&e.find(".back .icon").length>0&&e.find(".back .icon").transform("translate3d(0px,0,0)")}),e.removeClass(n).addClass("navbar-from-center-to-left"),e.find(".sliding").each(function(){var e,t=i(this);r.params.animateNavBackIcon&&(t.hasClass("center")&&a.find(".sliding.left .back .icon").length>0&&(e=a.find(".sliding.left .back span"),e.length>0&&(this.f7NavbarLeftOffset+=e[0].offsetLeft)),t.hasClass("left")&&t.find(".back .icon").length>0&&t.find(".back .icon").transform("translate3d("+-this.f7NavbarLeftOffset+"px,0,0)")),t.transform("translate3d("+this.f7NavbarLeftOffset+"px,0,0)")})),"to-right"===t&&(e.removeClass(n).addClass("navbar-from-left-to-center"),e.find(".sliding").each(function(){var e=i(this);e.transform("translate3d(0px,0,0)"),r.params.animateNavBackIcon&&e.hasClass("left")&&e.find(".back .icon").length>0&&e.find(".back .icon").transform("translate3d(0px,0,0)")}),a.removeClass(n).addClass("navbar-from-center-to-right"),a.find(".sliding").each(function(){var e=i(this);r.params.animateNavBackIcon&&e.hasClass("left")&&e.find(".back .icon").length>0&&e.find(".back .icon").transform("translate3d("+-this.f7NavbarRightOffset+"px,0,0)"),e.transform("translate3d("+this.f7NavbarRightOffset+"px,0,0)")}))},preprocess:function(e,a,t,n){r.pluginHook("routerPreprocess",e,a,t,n),a=r.pluginProcess("preprocess",a),e&&e.params&&e.params.preprocess?void 0!==(a=e.params.preprocess(a,t,n))&&n(a):r.params.preprocess?void 0!==(a=r.params.preprocess(a,t,n))&&n(a):n(a)},preroute:function(e,a,t){return t&&(a.isBack=!0),r.pluginHook("routerPreroute",e,a),!!(r.params.preroute&&!1===r.params.preroute(e,a)||e&&e.params.preroute&&!1===e.params.preroute(e,a))},template7Render:function(e,a){var t,n,o=a.url,l=a.content,p=a.content,d=a.context,c=a.contextName,m=a.template;if("string"==typeof l?o?r.template7Cache[o]&&!a.ignoreCache?n=s.cache[o]:(n=s.compile(l),s.cache[o]=n):n=s.compile(l):m&&(n=m),d)t=d,d&&o&&(e.contextCache[o]=d);else{if(c)if(c.indexOf(".")>=0){for(var u=c.split("."),h=s.data[u[0]],f=1;f<u.length;f++)u[f]&&(h=h[u[f]]);t=h}else t=s.data[c];if(!t&&o&&(t=s.data["url:"+o]),!t&&"string"==typeof l&&!m){var g=l.match(/(data-page=["'][^"^']*["'])/);if(g){var v=g[0].split("data-page=")[1].replace(/['"]/g,"");v&&(t=s.data["page:"+v])}}if(!t&&m&&s.templates)for(var b in s.templates)s.templates[b]===m&&(t=s.data[b]);!t&&o&&o in e.contextCache&&(t=e.contextCache[o]),t||(t={})}if(n&&t){if("function"==typeof t&&(t=t()),o){var w=i.parseUrlQuery(o);t.url_query={};for(var C in w)t.url_query[C]=w[C]}try{p=n(t)}catch(e){p="",window.console&&window.console.error&&console.error(e)}}return{content:p,context:t}}},r.router._load=function(e,a){function t(){e.allowPageChange=!0,n.removeClass("page-from-right-to-center page-on-right page-on-left").addClass("page-on-center"),s.removeClass("page-from-center-to-left page-on-center page-on-right").addClass("page-on-left"),m&&(d.removeClass("navbar-from-right-to-center navbar-on-left navbar-on-right").addClass("navbar-on-center"),p.removeClass("navbar-from-center-to-left navbar-on-center navbar-on-right").addClass("navbar-on-left")),r.pageAnimCallback("after",e,{pageContainer:n[0],url:h,position:"right",oldPage:s,newPage:n,query:a.query,fromPage:s&&s.length&&s[0].f7PageData}),r.params.pushState&&e.main&&r.pushStateClearQueue(),e.params.swipeBackPage||e.params.preloadPreviousPage||(e.params.domCache?(s.addClass("cached"),m&&p.addClass("cached")):0===h.indexOf("#")&&0===n.attr("data-page").indexOf("smart-select-")||(r.pageRemoveCallback(e,s[0],"left"),m&&r.navbarRemoveCallback(e,s[0],c[0],p[0]),r.router._remove(s),m&&r.router._remove(p))),e.params.uniqueHistory&&O&&e.refreshPreviousPage()}r.pluginHook("routerLoad",e,a);var n,s,o,l,p,d,c,m,u,h=a.url,f=a.content,g={content:a.content},v=a.template,b=a.pageName,w=i(e.container),C=i(e.pagesContainer),y=a.animatePages,x=void 0===h&&f||v,T=a.pushState,k=a.pageElement;if(void 0===y&&(y=e.params.animatePages),(r.params.template7Pages&&"string"==typeof f||v)&&(g=r.router.template7Render(e,a),g.content&&!f&&(f=g.content)),r.router.temporaryDom.innerHTML="",!b&&!k)if("string"==typeof f||h&&"string"==typeof f)r.router.temporaryDom.innerHTML=g.content;else if("length"in f&&f.length>1)for(var P=0;P<f.length;P++)i(r.router.temporaryDom).append(f[P]);else i(r.router.temporaryDom).append(f);if(u=a.reload&&(a.reloadPrevious?"left":"center"),!(n=b?C.find('.page[data-page="'+b+'"]'):k?i(k):r.router.findElement(".page",r.router.temporaryDom,e))||0===n.length||b&&e.activePage&&e.activePage.name===b)return void(e.allowPageChange=!0);if(n.addClass(a.reload?"page-on-"+u:"page-on-right"),o=C.children(".page:not(.cached)"),k&&(o=o.filter(function(e,a){if(a!==k)return a})),a.reload&&a.reloadPrevious&&1===o.length)return void(e.allowPageChange=!0);if(a.reload)s=o.eq(o.length-1);else{if(o.length>1){for(l=0;l<o.length-2;l++)e.params.domCache?i(o[l]).addClass("cached"):(r.pageRemoveCallback(e,o[l],"left"),r.router._remove(o[l]));e.params.domCache?i(o[l]).addClass("cached"):(r.pageRemoveCallback(e,o[l],"left"),r.router._remove(o[l]))}s=C.children(".page:not(.cached)")}if(k&&s.length>1&&(s=s.filter(function(e,a){if(a!==k)return a})),(e.params.domCache||k)&&n.removeClass("cached"),e.params.dynamicNavbar)if(m=!0,d=b?w.find('.navbar-inner[data-page="'+b+'"]'):r.router.findElement(".navbar-inner",r.router.temporaryDom,e),d&&0!==d.length||(d=n.find(".navbar-inner"),d&&0!==d.length?d.parent(".navbar").length>0&&d.prependTo(n):m=!1),m&&n.find(".navbar").length>0&&r.router._remove(n.find(".navbar").filter(function(e,a){return 0===i(a).parents(r.router._modalsSelector).length})),c=w.children(".navbar"),a.reload)p=c.find(".navbar-inner:not(.cached):last-child");else if(p=c.find(".navbar-inner:not(.cached)"),p.length>0){for(l=0;l<p.length-1;l++)e.params.domCache?i(p[l]).addClass("cached"):(r.navbarRemoveCallback(e,o[l],c[0],p[l]),r.router._remove(p[l]));d||1!==p.length||(e.params.domCache?i(p[0]).addClass("cached"):(r.navbarRemoveCallback(e,o[0],c[0],p[0]),r.router._remove(p[0]))),p=c.find(".navbar-inner:not(.cached)")}if(m&&(d.addClass(a.reload?"navbar-on-"+u:"navbar-on-right"),(e.params.domCache||k)&&d.removeClass("cached"),n[0].f7RelatedNavbar=d[0],d[0].f7RelatedPage=n[0]),h)h&&k&&(e.pageElementsCache[h]={page:n,navbarInner:d});else{var S=b||n.attr("data-page");h=x?"#"+r.params.dynamicPageUrl.replace(/{{name}}/g,S).replace(/{{index}}/g,e.history.length-(a.reload?1:0)):"#"+S,e.params.domCache||(e.contentCache[h]=f),e.params.domCache&&b&&(e.pagesCache[h]=b)}if(r.params.pushState&&!a.reloadPrevious&&e.main){void 0===T&&(T=!0);var M=r.params.pushStateRoot||"",I=a.reload?"replaceState":"pushState";T&&(x||b?x&&f?history[I]({content:"string"==typeof f?f:"",url:h,viewIndex:r.views.indexOf(e)},"",M+r.params.pushStateSeparator+h):b&&history[I]({pageName:b,url:h,viewIndex:r.views.indexOf(e)},"",M+r.params.pushStateSeparator+h):history[I]({url:h,viewIndex:r.views.indexOf(e)},"",M+r.params.pushStateSeparator+h))}if(e.url=h,a.reload){var E=e.history[e.history.length-(a.reloadPrevious?2:1)];E&&0===E.indexOf("#")&&E in e.contentCache&&E!==h&&-1===e.history.indexOf(E)?(e.contentCache[E]=null,delete e.contentCache[E]):E&&E in e.pageElementsCache&&E!==h&&(-1===e.history.indexOf(E)||e.history.indexOf(E)===e.history.length-1)&&(e.pageElementsCache[E]=null,delete e.pageElementsCache[E]),E&&E in e.contextCache&&E!==h&&(-1===e.history.indexOf(E)||e.history.indexOf(E)===e.history.length-1)&&(e.contextCache[E]=null,delete e.contextCache[E]),e.history[e.history.length-(a.reloadPrevious?2:1)]=h}else e.history.push(h);var O=!1;if(e.params.uniqueHistory){var L=e.history,D=h;if(e.params.uniqueHistoryIgnoreGetParameters)for(L=[],D=h.split("?")[0],l=0;l<e.history.length;l++)L.push(e.history[l].split("?")[0]);L.indexOf(D)!==L.lastIndexOf(D)&&(e.history=e.history.slice(0,L.indexOf(D)),e.history.push(h),O=!0)}if(a.reloadPrevious?(s=s.prev(".page"),n.insertBefore(s),m&&(p=p.prev(".navbar-inner"),d.insertAfter(p))):(C.append(n[0]),m&&c.append(d[0])),a.reload&&(e.params.domCache&&e.initialPages.indexOf(s[0])>=0?(s.addClass("cached"),m&&p.addClass("cached")):(r.pageRemoveCallback(e,s[0],u),m&&r.navbarRemoveCallback(e,s[0],c[0],p[0]),r.router._remove(s),m&&r.router._remove(p))),r.pageInitCallback(e,{pageContainer:n[0],url:h,position:a.reload?u:"right",navbarInnerContainer:m?d&&d[0]:void 0,oldNavbarInnerContainer:m?p&&p[0]:void 0,context:g.context||a.context,query:a.query,fromPage:s&&s.length&&s[0].f7PageData,reload:a.reload,reloadPrevious:a.reloadPrevious}),m&&r.navbarInitCallback(e,n[0],c[0],d[0],h,a.reload?u:"right"),a.reload)return e.allowPageChange=!0,void(O&&e.refreshPreviousPage());m&&y&&r.router.prepareNavbar(d,p,"right");n[0].clientLeft;r.pageAnimCallback("before",e,{pageContainer:n[0],url:h,position:"right",oldPage:s,newPage:n,query:a.query,fromPage:s&&s.length&&s[0].f7PageData}),y?(r.params.material&&r.params.materialPageLoadDelay?setTimeout(function(){r.router.animatePages(s,n,"to-left",e)},r.params.materialPageLoadDelay):r.router.animatePages(s,n,"to-left",e),m&&setTimeout(function(){r.router.animateNavbars(p,d,"to-left",e)},0),n.animationEnd(function(){t()})):(m&&d.find(".sliding, .sliding .back .icon").transform(""),t())},r.router.load=function(e,a){function t(t){r.router.preprocess(e,t,n,function(t){a.content=t,r.router._load(e,a)})}if(a=a||{},r.routerPreOptions&&(a=r.routerPreOptions(e,a)||{}),!a.component||!r.componentLoader){if(r.router.preroute(e,a))return!1;var n=a.url,s=a.content,o=a.pageName,l=a.pageElement;o&&o.indexOf("?")>0&&(a.query=i.parseUrlQuery(o),a.pageName=o=o.split("?")[0]);var p=a.template;return!0===e.params.reloadPages&&(a.reload=!0),e.allowPageChange?!(n&&e.url===n&&!a.reload&&!e.params.allowDuplicateUrls)&&(e.allowPageChange=!1,r.xhr&&e.xhr&&e.xhr===r.xhr&&(r.xhr.abort(),r.xhr=!1),s||o||l?void t(s):p?void r.router._load(e,a):a.url&&"#"!==a.url?void r.get(a.url,e,a.ignoreCache,function(a,r){if(r)return void(e.allowPageChange=!0);t(a)}):void(e.allowPageChange=!0)):!1}try{r.componentLoader(e,a,function(a){r.router.load(e,a)})}catch(e){}},r.router._back=function(e,a){function t(){r.pageBackCallback("after",e,{pageContainer:l[0],url:f,position:"center",oldPage:l,newPage:p}),r.pageAnimCallback("after",e,{pageContainer:p[0],url:f,position:"left",oldPage:l,newPage:p,query:a.query,fromPage:l&&l.length&&l[0].f7PageData}),r.router.afterBack(e,l[0],p[0])}function n(){r.pageBackCallback("before",e,{pageContainer:l[0],url:f,position:"center",oldPage:l,newPage:p}),r.pageAnimCallback("before",e,{pageContainer:p[0],url:f,position:"left",oldPage:l,newPage:p,query:a.query,fromPage:l&&l.length&&l[0].f7PageData}),w?(r.router.animatePages(p,l,"to-right",e),h&&setTimeout(function(){r.router.animateNavbars(c,d,"to-right",e)},0),p.animationEnd(function(){t()})):(h&&c.find(".sliding, .sliding .back .icon").transform(""),t())}function s(){if(r.router.temporaryDom.innerHTML="","string"==typeof g||f&&"string"==typeof g)r.router.temporaryDom.innerHTML=v.content;else if("length"in g&&g.length>1)for(var a=0;a<g.length;a++)i(r.router.temporaryDom).append(g[a]);else i(r.router.temporaryDom).append(g);p=k?i(k):r.router.findElement(".page",r.router.temporaryDom,e),e.params.dynamicNavbar&&(c=r.router.findElement(".navbar-inner",r.router.temporaryDom,e))}function o(){if(!p||0===p.length)return void(e.allowPageChange=!0);if(e.params.dynamicNavbar&&void 0===h&&(h=!(!c||0===c.length)),p.addClass("page-on-left").removeClass("cached"),h&&(m=P.children(".navbar"),u=m.find(".navbar-inner:not(.cached)"),c.addClass("navbar-on-left").removeClass("cached")),x){var t,s;if(t=i(M[M.length-2]),h&&(s=i(t[0]&&t[0].f7RelatedNavbar||u[u.length-2])),e.params.domCache&&e.initialPages.indexOf(t[0])>=0)t.length&&t[0]!==p[0]&&t.addClass("cached"),h&&s.length&&s[0]!==c[0]&&s.addClass("cached");else{var o=h&&s.length;t.length?(r.pageRemoveCallback(e,t[0],"right"),o&&r.navbarRemoveCallback(e,t[0],m[0],s[0]),r.router._remove(t),o&&r.router._remove(s)):o&&(r.navbarRemoveCallback(e,t[0],m[0],s[0]),r.router._remove(s))}M=S.children(".page:not(.cached)"),h&&(u=P.children(".navbar").find(".navbar-inner:not(.cached)")),e.history.indexOf(f)>=0?e.history=e.history.slice(0,e.history.indexOf(f)+2):e.history[[e.history.length-2]]?e.history[e.history.length-2]=f:e.history.unshift(f)}if(l=i(M[M.length-1]),e.params.domCache&&l[0]===p[0]&&(l=S.children(".page.page-on-center"),0===l.length&&e.activePage&&(l=i(e.activePage.container))),h&&!d&&(d=i(u[u.length-1]),e.params.domCache&&(d[0]===c[0]&&(d=m.children(".navbar-inner.navbar-on-center:not(.cached)")),0===d.length&&(d=m.children('.navbar-inner[data-page="'+l.attr("data-page")+'"]'))),0!==d.length&&c[0]!==d[0]||(h=!1)),h&&(I&&c.insertBefore(d),c[0].f7RelatedPage=p[0],p[0].f7RelatedNavbar=c[0]),I&&p.insertBefore(l),r.pageInitCallback(e,{pageContainer:p[0],url:f,position:"left",navbarInnerContainer:h?c[0]:void 0,oldNavbarInnerContainer:h?d&&d[0]:void 0,context:v.context,query:a.query,fromPage:l&&l.length&&l[0].f7PageData,preloadOnly:C}),h&&r.navbarInitCallback(e,p[0],m[0],c[0],f,"right"),h&&c.hasClass("navbar-on-left")&&w&&r.router.prepareNavbar(c,d,"left"),C)return void(e.allowPageChange=!0);e.url=f;p[0].clientLeft;n(),r.params.pushState&&e.main&&(void 0===y&&(y=!0),!C&&history.state&&y&&history.back())}a=a||{},r.pluginHook("routerBack",e,a);var l,p,d,c,m,u,h,f=a.url,g=a.content,v={content:a.content},b=a.template,w=a.animatePages,C=a.preloadOnly,y=a.pushState,x=(a.ignoreCache,a.force),T=a.pageName,k=a.pageElement,P=i(e.container),S=i(e.pagesContainer),M=S.children(".page:not(.cached)"),I=!0;return void 0===w&&(w=e.params.animatePages),(r.params.template7Pages&&"string"==typeof g||b)&&(v=r.router.template7Render(e,a),v.content&&!g&&(g=v.content)),M.length>1&&!x?C?void(e.allowPageChange=!0):(e.url=e.history[e.history.length-2],f=e.url,p=i(M[M.length-2]),l=i(M[M.length-1]),e.params.dynamicNavbar&&(h=!0,u=P.children(".navbar").find(".navbar-inner:not(.cached)"),c=i(u[0]),d=i(u[1]),0!==c.length&&0!==d.length&&d[0]!==c[0]||(h=!1)),I=!1,void o()):x?f&&f===e.url||T&&e.activePage&&e.activePage.name===T?void(e.allowPageChange=!0):g?(s(),void o()):T&&e.params.domCache?(T&&(f="#"+T),p=i(P).find('.page[data-page="'+T+'"]'),p[0].f7PageData&&p[0].f7PageData.url&&(f=p[0].f7PageData.url),e.params.dynamicNavbar&&(c=i(P).children(".navbar").find('.navbar-inner[data-page="'+T+'"]'),0===c.length&&p[0].f7RelatedNavbar&&(c=i(p[0].f7RelatedNavbar)),0===c.length&&p[0].f7PageData&&(c=i(p[0].f7PageData.navbarInnerContainer))),void o()):k&&f?(p=i(k),e.params.dynamicNavbar&&(c=p.find(".navbar-inner").filter(function(e,a){return 0===i(a).parents(r.router._modalsSelector).length}),c.length>0&&(p.prepend(c),r.router._remove(p.find(".navbar").filter(function(e,a){return 0===i(a).parents(r.router._modalsSelector).length})))),void o()):void(e.allowPageChange=!0):(C||(e.url=e.history[e.history.length-2],f=e.url),g?(s(),void o()):T?(p=i(P).find('.page[data-page="'+T+'"]'),e.params.dynamicNavbar&&(c=i(P).children(".navbar").find('.navbar-inner[data-page="'+T+'"]'),0===c.length&&p[0].f7RelatedNavbar&&(c=i(p[0].f7RelatedNavbar)),0===c.length&&p[0].f7PageData&&(c=i(p[0].f7PageData.navbarInnerContainer))),void o()):f&&f in e.pageElementsCache?(p=e.pageElementsCache[f].page,c=e.pageElementsCache[f].navbarInner,void o()):void(e.allowPageChange=!0))},r.router.back=function(e,a){function t(t){r.router.preprocess(e,t,n,function(t){a.content=t,r.router._back(e,a)})}if(a=a||{},r.routerPreOptions&&(a=r.routerPreOptions(e,a)||{}),a.component&&r.componentLoader)try{r.componentLoader(e,a,function(a){r.router.load(e,a)})}catch(e){}else{if(r.router.preroute(e,a,!0))return!1;var n=a.url,s=a.content,o=a.pageName,l=a.pageElement;o&&o.indexOf("?")>0&&(a.query=i.parseUrlQuery(o),a.pageName=o=o.split("?")[0]);var p=a.force;if(!e.allowPageChange)return!1;e.allowPageChange=!1,r.xhr&&e.xhr&&e.xhr===r.xhr&&(r.xhr.abort(),r.xhr=!1);if(i(e.pagesContainer).find(".page:not(.cached)").length>1&&!p)return void r.router._back(e,a);if(p){if(!n&&s)return void t(s);if(!n&&o)return o&&(n="#"+o),void t();if(n&&l)return void t();if(n)return void r.get(a.url,e,a.ignoreCache,function(a,r){if(r)return void(e.allowPageChange=!0);t(a)})}else{if(n=e.history[e.history.length-2]||a.url,a.url||(a.url=n),!n)return void(e.allowPageChange=!0);if(0===n.indexOf("#")&&e.contentCache[n])return void t(e.contentCache[n]);if(0===n.indexOf("#")&&e.params.domCache)return o||(a.pageName=n.split("#")[1]),void t();if(n&&n in e.pageElementsCache)t();else if(0!==n.indexOf("#"))return void r.get(a.url,e,a.ignoreCache,function(a,r){if(r)return void(e.allowPageChange=!0);t(a)})}e.allowPageChange=!0}},r.router.afterBack=function(e,a,t){a=i(a),t=i(t),e.params.domCache&&e.initialPages.indexOf(a[0])>=0?a.removeClass("page-from-center-to-right").addClass("cached"):(r.pageRemoveCallback(e,a[0],"right"),r.router._remove(a)),t.removeClass("page-from-left-to-center page-on-left").addClass("page-on-center"),e.allowPageChange=!0;var n,s=e.history.pop();if(e.params.dynamicNavbar){var o=i(e.container).children(".navbar").find(".navbar-inner:not(.cached)"),l=i(a[0].f7RelatedNavbar||o[1]);e.params.domCache&&e.initialNavbars.indexOf(l[0])>=0?l.removeClass("navbar-from-center-to-right").addClass("cached"):(r.navbarRemoveCallback(e,a[0],void 0,l[0]),r.router._remove(l)),n=i(o[0]).removeClass("navbar-on-left navbar-from-left-to-center").addClass("navbar-on-center")}if(e.params.domCache&&i(e.container).find(".page.cached").each(function(){var a=i(this),t=a[0].f7PageData&&a[0].f7PageData.url;t&&e.history.indexOf(t)<0&&e.initialPages.indexOf(this)<0&&(r.pageRemoveCallback(e,a[0],"right"),a[0].f7RelatedNavbar&&e.params.dynamicNavbar&&r.navbarRemoveCallback(e,a[0],void 0,a[0].f7RelatedNavbar),r.router._remove(a),a[0].f7RelatedNavbar&&e.params.dynamicNavbar&&r.router._remove(a[0].f7RelatedNavbar))}),!e.params.domCache&&s&&s.indexOf("#")>-1&&s in e.contentCache&&-1===e.history.indexOf(s)&&(e.contentCache[s]=null,delete e.contentCache[s]),s&&s in e.pageElementsCache&&-1===e.history.indexOf(s)&&(e.pageElementsCache[s]=null,delete e.pageElementsCache[s]),s&&s in e.contextCache&&-1===e.history.indexOf(s)&&(e.contextCache[s]=null,delete e.contextCache[s]),r.params.pushState&&e.main&&r.pushStateClearQueue(),e.params.preloadPreviousPage)if(e.params.domCache&&e.history.length>1){var p,d,c=e.history[e.history.length-2];c&&e.pagesCache[c]?(p=i(e.container).find('.page[data-page="'+e.pagesCache[c]+'"]'),p.next(".page")[0]!==t[0]&&p.insertBefore(t),n&&(d=i(e.container).children(".navbar").find('.navbar-inner[data-page="'+e.pagesCache[c]+'"]'),d&&0!==d.length||(d=n.prev(".navbar-inner.cached")),d.next(".navbar-inner")[0]!==n[0]&&d.insertBefore(n))):(p=t.prev(".page.cached"),n&&(d=n.prev(".navbar-inner.cached"))),p&&p.length>0&&p.removeClass("cached page-on-right page-on-center").addClass("page-on-left"),d&&d.length>0&&d.removeClass("cached navbar-on-right navbar-on-center").addClass("navbar-on-left")}else r.router.back(e,{preloadOnly:!0})};var m=document.createElement("div");r.modalStack=[],r.modalStackClearQueue=function(){r.modalStack.length&&r.modalStack.shift()()},r.modal=function(e){e=e||{};var a="";if(r.params.modalTemplate)r._compiledTemplates.modal||(r._compiledTemplates.modal=s.compile(r.params.modalTemplate)),a=r._compiledTemplates.modal(e);else{var t=""
;if(e.buttons&&e.buttons.length>0)for(var n=0;n<e.buttons.length;n++)t+='<span class="modal-button'+(e.buttons[n].bold?" modal-button-bold":"")+'">'+e.buttons[n].text+"</span>";var o=e.title?'<div class="modal-title">'+e.title+"</div>":"",l=e.text?'<div class="modal-text">'+e.text+"</div>":"",p=e.afterText?e.afterText:"",d=e.buttons&&0!==e.buttons.length?"":"modal-no-buttons",c=e.verticalButtons?"modal-buttons-vertical":"",u=e.buttons&&e.buttons.length>0?'<div class="modal-buttons modal-buttons-'+e.buttons.length+" "+c+'">'+t+"</div>":"";a='<div class="modal '+d+" "+(e.cssClass||"")+'"><div class="modal-inner">'+(o+l+p)+"</div>"+u+"</div>"}m.innerHTML=a;var h=i(m).children();return r.root.append(h[0]),h.find(".modal-button").each(function(a,t){i(t).on("click",function(t){!1!==e.buttons[a].close&&r.closeModal(h),e.buttons[a].onClick&&e.buttons[a].onClick(h,t),e.onClick&&e.onClick(h,a)})}),r.openModal(h),h[0]},r.alert=function(e,a,t){return"function"==typeof a&&(t=arguments[1],a=void 0),r.modal({text:e||"",title:void 0===a?r.params.modalTitle:a,buttons:[{text:r.params.modalButtonOk,bold:!0,onClick:t}]})},r.confirm=function(e,a,t,n){return"function"==typeof a&&(n=arguments[2],t=arguments[1],a=void 0),r.modal({text:e||"",title:void 0===a?r.params.modalTitle:a,buttons:[{text:r.params.modalButtonCancel,onClick:n},{text:r.params.modalButtonOk,bold:!0,onClick:t}]})},r.prompt=function(e,a,t,n){return"function"==typeof a&&(n=arguments[2],t=arguments[1],a=void 0),r.modal({text:e||"",title:void 0===a?r.params.modalTitle:a,afterText:'<div class="input-field"><input type="text" class="modal-text-input"></div>',buttons:[{text:r.params.modalButtonCancel},{text:r.params.modalButtonOk,bold:!0}],onClick:function(e,a){0===a&&n&&n(i(e).find(".modal-text-input").val()),1===a&&t&&t(i(e).find(".modal-text-input").val())}})},r.modalLogin=function(e,a,t,n){return"function"==typeof a&&(n=arguments[2],t=arguments[1],a=void 0),r.modal({text:e||"",title:void 0===a?r.params.modalTitle:a,afterText:'<div class="input-field modal-input-double"><input type="text" name="modal-username" placeholder="'+r.params.modalUsernamePlaceholder+'" class="modal-text-input"></div><div class="input-field modal-input-double"><input type="password" name="modal-password" placeholder="'+r.params.modalPasswordPlaceholder+'" class="modal-text-input"></div>',buttons:[{text:r.params.modalButtonCancel},{text:r.params.modalButtonOk,bold:!0}],onClick:function(e,a){var r=i(e).find('.modal-text-input[name="modal-username"]').val(),s=i(e).find('.modal-text-input[name="modal-password"]').val();0===a&&n&&n(r,s),1===a&&t&&t(r,s)}})},r.modalPassword=function(e,a,t,n){return"function"==typeof a&&(n=arguments[2],t=arguments[1],a=void 0),r.modal({text:e||"",title:void 0===a?r.params.modalTitle:a,afterText:'<div class="input-field"><input type="password" name="modal-password" placeholder="'+r.params.modalPasswordPlaceholder+'" class="modal-text-input"></div>',buttons:[{text:r.params.modalButtonCancel},{text:r.params.modalButtonOk,bold:!0}],onClick:function(e,a){var r=i(e).find('.modal-text-input[name="modal-password"]').val();0===a&&n&&n(r),1===a&&t&&t(r)}})},r.showPreloader=function(e){return r.modal({title:e||r.params.modalPreloaderTitle,text:'<div class="preloader">'+(r.params.material?r.params.materialPreloaderHtml:"")+"</div>",cssClass:"modal-preloader"})},r.hidePreloader=function(){r.closeModal(".modal-preloader")},r.showIndicator=function(){i(".preloader-indicator-overlay").length>0||r.root.append('<div class="preloader-indicator-overlay"></div><div class="preloader-indicator-modal"><span class="preloader preloader-white">'+(r.params.material?r.params.materialPreloaderHtml:"")+"</span></div>")},r.hideIndicator=function(){i(".preloader-indicator-overlay, .preloader-indicator-modal").remove()},r.actions=function(e,a,t){var n,o,l,p=!1;1===arguments.length||2===arguments.length&&"boolean"==typeof arguments[1]?(a=arguments[0],t=arguments[1]):r.device.ios?r.device.ipad&&(p=!0):r.width>=768&&(p=!0),void 0===t&&(t=!0),a=a||[],a.length>0&&!Array.isArray(a[0])&&(a=[a]);var d;if(p){var c=r.params.modalActionsToPopoverTemplate||'<div class="popover actions-popover"><div class="popover-inner">{{#each this}}<div class="list-block"><ul>{{#each this}}{{#if label}}<li class="actions-popover-label {{#if color}}color-{{color}}{{/if}} {{#if bold}}actions-popover-bold{{/if}}">{{text}}</li>{{else}}<li><a href="#" class="item-link list-button {{#if color}}color-{{color}}{{/if}} {{#if bg}}bg-{{bg}}{{/if}} {{#if bold}}actions-popover-bold{{/if}} {{#if disabled}}disabled{{/if}}">{{text}}</a></li>{{/if}}{{/each}}</ul></div>{{/each}}</div></div>';r._compiledTemplates.actionsToPopover||(r._compiledTemplates.actionsToPopover=s.compile(c));var u=r._compiledTemplates.actionsToPopover(a);n=i(r.popover(u,e,!0,t)),o=".list-block ul",l=".list-button"}else{if(r.params.modalActionsTemplate)r._compiledTemplates.actions||(r._compiledTemplates.actions=s.compile(r.params.modalActionsTemplate)),d=r._compiledTemplates.actions(a);else{for(var h="",f=0;f<a.length;f++)for(var g=0;g<a[f].length;g++){0===g&&(h+='<div class="actions-modal-group">');var v=a[f][g],b=v.label?"actions-modal-label":"actions-modal-button";v.bold&&(b+=" actions-modal-button-bold"),v.color&&(b+=" color-"+v.color),v.bg&&(b+=" bg-"+v.bg),v.disabled&&(b+=" disabled"),h+='<div class="'+b+'">'+v.text+"</div>",g===a[f].length-1&&(h+="</div>")}d='<div class="actions-modal">'+h+"</div>"}m.innerHTML=d,n=i(m).children(),r.root.append(n[0]),o=".actions-modal-group",l=".actions-modal-button"}return n.find(o).each(function(e,t){var s=e;i(t).children().each(function(e,t){var o,d=e,c=a[s][d];!p&&i(t).is(l)&&(o=i(t)),p&&i(t).find(l).length>0&&(o=i(t).find(l)),o&&o.on("click",function(e){!1!==c.close&&r.closeModal(n),c.onClick&&c.onClick(n,e)})})}),p||r.openModal(n,t),n[0]},r.popover=function(e,a,t,n,s){function o(){e.css({left:"",top:""});var t,n,i,s=e.width(),o=e.height(),l=0;p?e.removeClass("popover-on-left popover-on-right popover-on-top popover-on-bottom").css({left:"",top:""}):(t=e.find(".popover-angle"),l=t.width()/2,t.removeClass("on-left on-right on-top on-bottom").css({left:"",top:""}));var d=a.outerWidth(),c=a.outerHeight(),m=a.offset(),u=m.left-r.left,h=m.top-r.top,f=a.parents(".page");f.length>0&&(h-=f[0].scrollTop);var g=0,v=0,b=0,w=p?"bottom":"top";if(p)if(o<r.height-h-c?(w="bottom",g=h):o<h?(g=h-o+c,w="top"):(w="bottom",g=h),g<=0?g=8:g+o>=r.height&&(g=r.height-o-8),v=u,v+s>=r.width-8&&(v=u+d-s-8),v<8&&(v=8),"top"===w&&e.addClass("popover-on-top"),"bottom"===w&&e.addClass("popover-on-bottom"),a.hasClass("floating-button-to-popover")&&!e.hasClass("modal-in")){e.addClass("popover-floating-button");var C=v+s/2-(u+d/2),y=g+o/2-(h+c/2);a.addClass("floating-button-to-popover-in").transform("translate3d("+C+"px, "+y+"px,0)").transitionEnd(function(e){a.hasClass("floating-button-to-popover-in")&&a.addClass("floating-button-to-popover-scale").transform("translate3d("+C+"px, "+y+"px,0) scale("+s/d+", "+o/c+")")}),e.once("popover:close",function(){a.removeClass("floating-button-to-popover-in floating-button-to-popover-scale").addClass("floating-button-to-popover-out").transform("").transitionEnd(function(e){a.removeClass("floating-button-to-popover-out")})}),e.once("popover:closed",function(){e.removeClass("popover-floating-button")})}else a.hasClass("floating-button-to-popover")&&e.hasClass("modal-in")&&(v=u,g=h);else o+l<h?g=h-o-l:o+l<r.height-h-c?(w="bottom",g=h+c+l):(w="middle",g=c/2+h-o/2,b=g,g<=0?g=5:g+o>=r.height&&(g=r.height-o-5),b-=g),"top"===w||"bottom"===w?(v=d/2+u-s/2,b=v,v<5&&(v=5),v+s>r.width&&(v=r.width-s-5),"top"===w&&t.addClass("on-bottom"),"bottom"===w&&t.addClass("on-top"),b-=v,n=s/2-l+b,n=Math.max(Math.min(n,s-2*l-13),13),t.css({left:n+"px"})):"middle"===w&&(v=u-s-l,t.addClass("on-right"),(v<5||v+s>r.width)&&(v<5&&(v=u+d+l),v+s>r.width&&(v=r.width-s-5),t.removeClass("on-right").addClass("on-left")),i=o/2-l+b,i=Math.max(Math.min(i,o-2*l-13),13),t.css({top:i+"px"}));e.css({top:g+"px",left:v+"px"})}if(void 0===t&&(t=!0),void 0===s&&(s=!0),void 0===n&&(n=!0),"string"==typeof e&&e.indexOf("<")>=0){var l=document.createElement("div");if(l.innerHTML=e.trim(),!(l.childNodes.length>0))return!1;e=l.childNodes[0],t&&e.classList.add("remove-on-close"),s||e.classList.add("ignore-close-by-outside"),r.root.append(e)}if(e=i(e),a=i(a),0===e.length||0===a.length)return!1;0===e.parents("body").length&&(t&&e.addClass("remove-on-close"),s||e.addClass.add("ignore-close-by-outside"),r.root.append(e[0])),0!==e.find(".popover-angle").length||r.params.material||e.append('<div class="popover-angle"></div>'),e.show();var p=r.params.material;return o(),r.onResize(o),e.on("popover:close",function(){r.offResize(o)}),r.openModal(e,n),e[0]},r.popup=function(e,a,t){if(void 0===a&&(a=!0),void 0===t&&(t=!0),"string"==typeof e&&e.indexOf("<")>=0){var n=document.createElement("div");if(n.innerHTML=e.trim(),!(n.childNodes.length>0))return!1;e=n.childNodes[0],a&&e.classList.add("remove-on-close"),r.root.append(e)}return e=i(e),0!==e.length&&(0===e.parents("body").length&&(a&&e.addClass("remove-on-close"),r.root.append(e[0])),e.show(),r.openModal(e,t),e[0])},r.pickerModal=function(e,a,t){if(void 0===a&&(a=!0),void 0===t&&(t=!0),"string"==typeof e&&e.indexOf("<")>=0){if(e=i(e),!(e.length>0))return!1;a&&e.addClass("remove-on-close"),r.root.append(e[0])}return e=i(e),0!==e.length&&(0===e.parents("body").length&&(a&&e.addClass("remove-on-close"),r.root.append(e[0])),i(".picker-modal.modal-in:not(.modal-out)").length>0&&!e.hasClass("modal-in")&&r.closeModal(".picker-modal.modal-in:not(.modal-out)"),e.show(),r.openModal(e,t),e[0])},r.loginScreen=function(e,a){return e||(e=".login-screen"),void 0===a&&(a=!0),e=i(e),0!==e.length&&(i(".login-screen.modal-in:not(.modal-out)").length>0&&!e.hasClass("modal-in")&&r.closeModal(".login-screen.modal-in:not(.modal-out)"),e.show(),r.openModal(e,a),e[0])},r.openModal=function(e,a){void 0===a&&(a=!0),e=i(e),e[a?"removeClass":"addClass"]("not-animated");var t=e.hasClass("modal"),n=e.hasClass("popover"),s=e.hasClass("popup"),o=e.hasClass("login-screen"),l=e.hasClass("picker-modal"),p=e.hasClass("actions-modal"),d="modal";if(n&&(d="popover"),s&&(d="popup"),o&&(d="loginscreen"),l&&(d="picker"),p&&(d="actions"),i(".modal.modal-in:not(.modal-out)").length&&r.params.modalStack&&t)return void r.modalStack.push(function(){r.openModal(e)});if(!0!==e.data("f7-modal-shown")){e.data("f7-modal-shown",!0);var c=e.parent();r.params.modalsMoveToRoot&&!c.is(r.root)&&(r.root.append(e),e.once(d+":closed",function(){c.append(e)})),e.once(d+":close",function(){e.removeData("f7-modal-shown")}),t&&(e.show(),e.css({marginTop:-Math.round(e.outerHeight()/2)+"px"}));var m;o||l||(0!==i(".modal-overlay").length||s||r.root.append('<div class="modal-overlay"></div>'),0===i(".popup-overlay").length&&s&&r.root.append('<div class="popup-overlay"></div>'),m=i(s?".popup-overlay":".modal-overlay")),r.params.material&&l&&e.hasClass("picker-calendar")&&(0!==i(".picker-modal-overlay").length||s||r.root.append('<div class="picker-modal-overlay"></div>'),m=i(".picker-modal-overlay")),m&&m[a?"removeClass":"addClass"]("not-animated");e[0].clientLeft;return e.trigger("open "+d+":open"),l&&i("body").addClass("with-picker-modal"),e.find("."+r.params.viewClass).length>0&&(e.find(".page").each(function(){r.initPageWithCallback(this)}),e.find(".navbar").each(function(){r.initNavbarWithCallback(this)})),o||l||m.addClass("modal-overlay-visible"),r.params.material&&l&&m&&m.addClass("modal-overlay-visible"),a?e.removeClass("modal-out").addClass("modal-in").transitionEnd(function(a){e.hasClass("modal-out")?e.trigger("closed "+d+":closed"):e.trigger("opened "+d+":opened")}):(e.removeClass("modal-out").addClass("modal-in"),e.trigger("opened "+d+":opened")),!0}},r.closeModal=function(e,a){if(void 0===a&&(a=!0),void 0===(e=i(e||".modal-in"))||0!==e.length){e[a?"removeClass":"addClass"]("not-animated");var t=e.hasClass("modal"),n=e.hasClass("popover"),s=e.hasClass("popup"),o=e.hasClass("login-screen"),l=e.hasClass("picker-modal"),p=e.hasClass("actions-modal"),d="modal";n&&(d="popover"),s&&(d="popup"),o&&(d="loginscreen"),l&&(d="picker"),p&&(d="actions");var c=e.hasClass("remove-on-close");if(!n||c||!e.hasClass("ignore-close-by-outside")){var m,u=e.hasClass("keep-on-close");return s?m=i(".popup-overlay"):l&&r.params.material?m=i(".picker-modal-overlay"):l||(m=i(".modal-overlay")),s?e.length===i(".popup.modal-in").length&&m.removeClass("modal-overlay-visible"):m&&m.length>0&&m.removeClass("modal-overlay-visible"),m&&m[a?"removeClass":"addClass"]("not-animated"),e.trigger("close "+d+":close"),l&&(i("body").removeClass("with-picker-modal"),i("body").addClass("picker-modal-closing")),!n||r.params.material?(a?e.removeClass("modal-in").addClass("modal-out").transitionEnd(function(a){if(e.hasClass("modal-out"))e.trigger("closed "+d+":closed");else if(e.trigger("opened "+d+":opened"),n)return;l&&i("body").removeClass("picker-modal-closing"),s||o||l||n?(e.removeClass("modal-out").hide(),c&&e.length>0&&e.remove()):u||e.remove()}):(e.trigger("closed "+d+":closed"),e.removeClass("modal-in modal-out"),l&&i("body").removeClass("picker-modal-closing"),s||o||l||n?(e.hide(),c&&e.length>0&&e.remove()):u||e.remove()),t&&r.params.modalStack&&r.modalStackClearQueue()):(e.removeClass("modal-in modal-out not-animated").trigger("closed "+d+":closed").hide(),c&&e.remove()),!0}}},r.setProgressbar=function(e,a,t){if(e=i(e||r.root),0!==e.length){a&&(a=Math.min(Math.max(a,0),100));var n;if(n=e.hasClass("progressbar")?e:e.children(".progressbar"),0!==n.length&&!n.hasClass("progressbar-infinite")){n[0].clientLeft;return n.children("span").transform("translate3d("+(-100+a)+"%,0,0)"),void 0!==t?n.children("span").transition(t):n.children("span").transition(""),n[0]}}},r.showProgressbar=function(e,a,t){if("number"==typeof e&&(e=r.root,a=arguments[0],t=arguments[1]),a&&"string"==typeof a&&parseFloat(a)!==1*a&&(t=a,a=void 0),e=i(e||r.root),0!==e.length){var n;return e.hasClass("progressbar")?n=e:(n=e.children(".progressbar:not(.progressbar-out), .progressbar-infinite:not(.progressbar-out)"),0===n.length&&(n=i(void 0!==a?'<span class="progressbar progressbar-in'+(t?" color-"+t:"")+'"><span></span></span>':'<span class="progressbar-infinite progressbar-in'+(t?" color-"+t:"")+'"></span>'),e.append(n))),a&&r.setProgressbar(e,a),n[0]}},r.hideProgressbar=function(e){if(e=i(e||r.root),0!==e.length){var a;a=e.hasClass("progressbar")?e:e.children(".progressbar, .progressbar-infinite"),0!==a.length&&a.hasClass("progressbar-in")&&!a.hasClass("progressbar-out")&&a.removeClass("progressbar-in").addClass("progressbar-out").animationEnd(function(){a.remove(),a=null})}},r.initPageProgressbar=function(e){e=i(e),e.find(".progressbar").each(function(){var e=i(this);0===e.children("span").length&&e.append("<span></span>"),e.attr("data-progress")&&r.setProgressbar(e,e.attr("data-progress"))})},r.allowPanelOpen=!0,r.openPanel=function(e,a){function t(){l.transitionEnd(function(e){i(e.target).is(l)?(n.hasClass("active")?n.trigger("opened panel:opened"):n.trigger("closed panel:closed"),o.css({display:""}),r.allowPanelOpen=!0):t()})}if(void 0===a&&(a=!0),!r.allowPanelOpen)return!1;var n=i(".panel-"+e);if(0===n.length||n.hasClass("active")||n.hasClass("panel-visible-by-breakpoint"))return!1;r.closePanel(),r.allowPanelOpen=!1;var s=n.hasClass("panel-reveal")?"reveal":"cover";n[a?"removeClass":"addClass"]("not-animated"),n.css({display:"block"}).addClass("active"),n.trigger("open panel:open");var o=i(".panel-overlay");o[a?"removeClass":"addClass"]("not-animated"),o.show(),n.find("."+r.params.viewClass).length>0&&r.sizeNavbars&&r.sizeNavbars(n.find("."+r.params.viewClass)[0]);var l=(n[0].clientLeft,"reveal"===s?i("."+r.params.viewsClass):n);return a?t():(n.trigger("opened panel:opened"),o.css({display:""}),r.allowPanelOpen=!0),i("body").addClass("with-panel-"+e+"-"+s),!0},r.closePanel=function(e){void 0===e&&(e=!0);var a=i(".panel.active");if(0===a.length||a.hasClass("panel-visible-by-breakpoint"))return!1;var t=a.hasClass("panel-reveal")?"reveal":"cover",n=a.hasClass("panel-left")?"left":"right";a[e?"removeClass":"addClass"]("not-animated"),a.removeClass("active"),i(".panel-overlay").removeClass("not-animated");var s="reveal"===t?i("."+r.params.viewsClass):a;a.trigger("close panel:close"),r.allowPanelOpen=!1,e?(s.transitionEnd(function(){a.hasClass("active")||(a.css({display:""}),a.trigger("closed panel:closed"),i("body").removeClass("panel-closing"),r.allowPanelOpen=!0)}),i("body").addClass("panel-closing").removeClass("with-panel-"+n+"-"+t)):(a.css({display:""}),a.trigger("closed panel:closed"),a.removeClass("not-animated"),i("body").removeClass("with-panel-"+n+"-"+t),r.allowPanelOpen=!0)},r.initPanelsBreakpoints=function(){function e(){r.params.panelLeftBreakpoint&&t.length>0&&(a=t.hasClass("panel-visible-by-breakpoint"),r.width>=r.params.panelLeftBreakpoint?a||(i("body").removeClass("with-panel-left-reveal with-panel-left-cover"),t.css("display","").addClass("panel-visible-by-breakpoint").removeClass("active"),t.trigger("open panel:open opened panel:opened"),s.css({"margin-left":t.width()+"px"}),r.allowPanelOpen=!0):a&&(t.css("display","").removeClass("panel-visible-by-breakpoint active"),t.trigger("close panel:close closed panel:closed"),s.css({"margin-left":""}),r.allowPanelOpen=!0)),r.params.panelRightBreakpoint&&n.length>0&&(a=n.hasClass("panel-visible-by-breakpoint"),r.width>=r.params.panelRightBreakpoint?a||(i("body").removeClass("with-panel-right-reveal with-panel-right-cover"),n.css("display","").addClass("panel-visible-by-breakpoint").removeClass("active"),n.trigger("open panel:open opened panel:opened"),s.css({"margin-right":n.width()+"px"}),r.allowPanelOpen=!0):a&&(n.css("display","").removeClass("panel-visible-by-breakpoint active"),n.trigger("close panel:close closed panel:closed"),s.css({"margin-right":""}),r.allowPanelOpen=!0))}var a,t=i(".panel-left"),n=i(".panel-right"),s=r.root.children(".views");r.onResize(e),e()},r.initSwipePanels=function(){function e(e){if(r.allowPanelOpen&&(r.params.swipePanel||r.params.swipePanelOnlyClose)&&!o&&!(i(".modal-in, .photo-browser-in").length>0)&&(r.params.swipePanelCloseOpposite||r.params.swipePanelOnlyClose||!(i(".panel.active").length>0)||n.hasClass("active"))&&!(e.target&&"input"===e.target.nodeName.toLowerCase()&&"range"===e.target.type||i(e.target).closest(".tabs-swipeable-wrap").length>0)){if(w.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,w.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,r.params.swipePanelCloseOpposite||r.params.swipePanelOnlyClose){if(i(".panel.active").length>0)s=i(".panel.active").hasClass("panel-left")?"left":"right";else{if(r.params.swipePanelOnlyClose)return;s=r.params.swipePanel}if(!s)return}if(n=i(".panel.panel-"+s),h=n.hasClass("active"),r.params.swipePanelActiveArea&&!h){if("left"===s&&w.x>r.params.swipePanelActiveArea)return;if("right"===s&&w.x<r.width-r.params.swipePanelActiveArea)return}l=!1,o=!0,p=void 0,d=(new Date).getTime(),v=void 0}}function a(e){if(o&&!e.f7PreventPanelSwipe){var a="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,t="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY;if(void 0===p&&(p=!!(p||Math.abs(t-w.y)>Math.abs(a-w.x))),p)return void(o=!1);if(!v){if(v=a>w.x?"to-right":"to-left","both"===s){if(s=i(".panel.active").length>0?i(".panel.active").hasClass("panel-left")?"left":"right":"to-right"===v?"left":"right",r.params.swipePanelActiveArea>0){if("left"===s&&w.x>r.params.swipePanelActiveArea)return void(o=!1);if("right"===s&&w.x<r.width-r.params.swipePanelActiveArea)return void(o=!1)}n=i(".panel.panel-"+s)}if(n.hasClass("panel-visible-by-breakpoint"))return void(o=!1);if("left"===s&&"to-left"===v&&!n.hasClass("active")||"right"===s&&"to-right"===v&&!n.hasClass("active"))return void(o=!1)}if(r.params.swipePanelNoFollow){return(new Date).getTime()-d<300&&("to-left"===v&&("right"===s&&r.openPanel(s),"left"===s&&n.hasClass("active")&&r.closePanel()),"to-right"===v&&("left"===s&&r.openPanel(s),"right"===s&&n.hasClass("active")&&r.closePanel())),o=!1,void(l=!1)}l||(g=n.hasClass("panel-cover")?"cover":"reveal",h||(n.show(),b.show()),f=n[0].offsetWidth,n.transition(0),n.find("."+r.params.viewClass).length>0&&r.sizeNavbars&&r.sizeNavbars(n.find("."+r.params.viewClass)[0])),l=!0,e.preventDefault();var y=h?0:-r.params.swipePanelThreshold;"right"===s&&(y=-y),c=a-w.x+y,"right"===s?"cover"===g?(m=c+(h?0:f),m<0&&(m=0),m>f&&(m=f)):(m=c-(h?f:0),m>0&&(m=0),m<-f&&(m=-f)):(m=c+(h?f:0),m<0&&(m=0),m>f&&(m=f)),"reveal"===g?(C.transform("translate3d("+m+"px,0,0)").transition(0),b.transform("translate3d("+m+"px,0,0)").transition(0),n.trigger("panel:swipe",{progress:Math.abs(m/f)}),r.pluginHook("swipePanelSetTransform",C[0],n[0],Math.abs(m/f))):("left"===s&&(m-=f),n.transform("translate3d("+m+"px,0,0)").transition(0),b.transition(0),u=1-Math.abs(m/f),b.css({opacity:u}),n.trigger("panel:swipe",{progress:Math.abs(m/f)}),r.pluginHook("swipePanelSetTransform",C[0],n[0],Math.abs(m/f)))}}function t(e){if(!o||!l)return o=!1,void(l=!1);o=!1,l=!1;var a,t=(new Date).getTime()-d,p=0===m||Math.abs(m)===f;if(a=h?"cover"===g?0===m?"reset":t<300&&Math.abs(m)>0?"swap":t>=300&&Math.abs(m)<f/2?"reset":"swap":m===-f?"reset":t<300&&Math.abs(m)>=0||t>=300&&Math.abs(m)<=f/2?"left"===s&&m===f?"reset":"swap":"reset":"cover"===g?0===m?"swap":t<300&&Math.abs(m)>0?"swap":t>=300&&Math.abs(m)<f/2?"swap":"reset":0===m?"reset":t<300&&Math.abs(m)>0||t>=300&&Math.abs(m)>=f/2?"swap":"reset","swap"===a&&(r.allowPanelOpen=!0,h?(r.closePanel(),p&&(n.css({display:""}),i("body").removeClass("panel-closing"))):r.openPanel(s),p&&(r.allowPanelOpen=!0)),"reset"===a)if(h)r.allowPanelOpen=!0,r.openPanel(s);else if(r.closePanel(),p)r.allowPanelOpen=!0,n.css({display:""});else{var c="reveal"===g?C:n;n.trigger("close panel:close"),i("body").addClass("panel-closing"),c.transitionEnd(function(){n.hasClass("active")||(n.trigger("close panel:closed"),n.css({display:""}),i("body").removeClass("panel-closing"),r.allowPanelOpen=!0)})}"reveal"===g&&(C.transition(""),C.transform("")),n.transition("").transform(""),b.css({display:""}).transform("").transition("").css("opacity","")}var n,s;if(r.params.swipePanel){if(n=i(".panel.panel-"+r.params.swipePanel),s=r.params.swipePanel,0===n.length&&"both"!==s)return}else{if(!r.params.swipePanelOnlyClose)return;if(0===i(".panel").length)return}var o,l,p,d,c,m,u,h,f,g,v,b=i(".panel-overlay"),w={},C=i("."+r.params.viewsClass),y=!("touchstart"!==r.touchEvents.start||!r.support.passiveListener)&&{passive:!0,capture:!1},x=!!r.support.passiveListener&&{passive:!1,capture:!1};i(document).on(r.touchEvents.start,e,y),i(document).on(r.touchEvents.move,a,x),i(document).on(r.touchEvents.end,t,y)},r.initImagesLazyLoad=function(e){function a(e){function t(){e.removeClass("lazy").addClass("lazy-loaded"),s?e.css("background-image","url("+o+")"):e.attr("src",o),r.params.imagesLazyLoadSequential&&(m=!1,c.length>0&&a(c.shift())),e.trigger("lazy-loaded"),r.params.onLazyLoaded&&r.params.onLazyLoaded(e)}function n(){e.removeClass("lazy").addClass("lazy-loaded"),s?e.css("background-image","url("+d+")"):e.attr("src",d),r.params.imagesLazyLoadSequential&&(m=!1,c.length>0&&a(c.shift())),e.trigger("lazy-error"),r.params.onLazyError&&r.params.onLazyError(e)}e=i(e);var s=e.attr("data-background"),o=s||e.attr("data-src");if(o){if(r.params.imagesLazyLoadSequential&&m)return void(c.indexOf(e[0])<0&&c.push(e[0]));m=!0;var l=new Image;l.onload=t,l.onerror=n,l.src=o,e.trigger("lazy-load"),r.params.onLazyLoad&&!e.hasClass("lazy-loaded")&&r.params.onLazyLoad(e)}}function t(){l=e.find(".lazy"),l.each(function(e,t){t=i(t),t.parents(".tab:not(.active)").length>0||n(t[0])&&a(t)})}function n(e){var a=e.getBoundingClientRect(),t=r.params.imagesLazyLoadThreshold||0;return a.top>=0-t&&a.left>=0-t&&a.top<=r.height+t&&a.left<=r.width+t}function s(a){var n=a?"off":"on";l[n]("lazy",t),l.parents(".tab")[n]("show",t),e[n]("lazy",t),p[n]("lazy",t),p[n]("scroll",t),r["on"===n?"onResize":"offResize"](t)}function o(){s(!0)}e=i(e);var l;if(e.hasClass("lazy")?(l=e,e=l.parents(".page")):l=e.find(".lazy"),0!==l.length){var p;if(e.hasClass("page-content")?(p=e,e=e.parents(".page")):p=e.find(".page-content"),0!==p.length){var d="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEXCwsK592mkAAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==";"string"==typeof r.params.imagesLazyLoadPlaceholder&&(d=r.params.imagesLazyLoadPlaceholder),!1!==r.params.imagesLazyLoadPlaceholder&&l.each(function(){i(this).attr("data-src")&&!i(this).attr("src")&&i(this).attr("src",d)});var c=[],m=!1;e[0].f7DestroyImagesLazyLoad=o,s(),e.hasClass("page")&&e.once("page:beforeremove",o),t(),e.once("page:afteranimation",t)}}},r.destroyImagesLazyLoad=function(e){e=i(e),e.length>0&&e[0].f7DestroyImagesLazyLoad&&e[0].f7DestroyImagesLazyLoad()},r.reinitImagesLazyLoad=function(e){e=i(e),e.length>0&&e.trigger("lazy")},r.initPageMaterialPreloader=function(e){i(e).find(".preloader").each(function(){0===i(this).children().length&&i(this).html(r.params.materialPreloaderHtml)})};var u=function(e,a){var t={autoLayout:!0,newMessagesFirst:!1,scrollMessages:!0,scrollMessagesOnlyOnEdge:!1,messageTemplate:'{{#if day}}<div class="messages-date">{{day}} {{#if time}}, <span>{{time}}</span>{{/if}}</div>{{/if}}<div class="message message-{{type}} {{#if hasImage}}message-pic{{/if}} {{#if avatar}}message-with-avatar{{/if}} {{#if position}}message-appear-from-{{position}}{{/if}}">{{#if name}}<div class="message-name">{{name}}</div>{{/if}}<div class="message-text">{{text}}{{#if date}}<div class="message-date">{{date}}</div>{{/if}}</div>{{#if avatar}}<div class="message-avatar" style="background-image:url({{avatar}})"></div>{{/if}}{{#if label}}<div class="message-label">{{label}}</div>{{/if}}</div>'};a=a||{};for(var r in t)void 0!==a[r]&&null!==a[r]||(a[r]=t[r]);var n=this;if(n.params=a,n.container=i(e),0!==n.container.length)return n.params.autoLayout&&n.container.addClass("messages-auto-layout"),n.params.newMessagesFirst&&n.container.addClass("messages-new-first"),n.pageContainer=n.container.parents(".page").eq(0),n.pageContent=n.pageContainer.find(".page-content"),n.template=Template7.compile(n.params.messageTemplate),n.layout=function(){n.container.hasClass("messages-auto-layout")||n.container.addClass("messages-auto-layout"),n.container.find(".message").each(function(){var e=i(this);if(e.find(".message-text img").length>0){for(var a=e.find(".message-text")[0].childNodes,t=!0,r=0;r<a.length;r++)1===a[r].nodeType&&"img"!==a[r].nodeName.toLowerCase()&&(t=!1),3===a[r].nodeType&&""!==a[r].textContent.trim()&&(t=!1);t?e.addClass("message-pic"):e.removeClass("message-pic")}e.find(".message-avatar").length>0&&e.addClass("message-with-avatar")}),n.container.find(".message").each(function(){var e=i(this),a=e.hasClass("message-sent"),t=e.next(".message-"+(a?"sent":"received")),r=e.prev(".message-"+(a?"sent":"received"));0===t.length?e.addClass("message-last message-with-tail"):e.removeClass("message-last message-with-tail"),0===r.length?e.addClass("message-first"):e.removeClass("message-first"),r.length>0&&r.find(".message-name").length>0&&e.find(".message-name").length>0&&r.find(".message-name").text()!==e.find(".message-name").text()&&(r.addClass("message-last message-with-tail"),e.addClass("message-first"))})},n.appendMessage=function(e,a){return n.addMessage(e,"append",a)},n.prependMessage=function(e,a){return n.addMessage(e,"prepend",a)},n.addMessage=function(e,a,t){return n.addMessages([e],a,t)},n.addMessages=function(e,a,t){void 0===t&&(t=!0),void 0===a&&(a=n.params.newMessagesFirst?"prepend":"append");var r,i="";for(r=0;r<e.length;r++){var s=e[r]||{};s.type=s.type||"sent",s.text&&(s.hasImage=s.text.indexOf("<img")>=0,!1===s.onlyImage&&(s.hasImage=!1),t&&(s.position="append"===a?"bottom":"top"),i+=n.template(s))}var o=n.pageContent[0].scrollHeight,l=n.pageContent[0].offsetHeight,p=n.pageContent[0].scrollTop;if(n.container[a](i),n.params.autoLayout&&n.layout(),"prepend"===a&&(n.pageContent[0].scrollTop=p+(n.pageContent[0].scrollHeight-o)),n.params.scrollMessages&&"append"===a&&!n.params.newMessagesFirst||"prepend"===a&&n.params.newMessagesFirst)if(n.params.scrollMessagesOnlyOnEdge){var d=!1;n.params.newMessagesFirst?0===p&&(d=!0):p-(o-l)>=-10&&(d=!0),d&&n.scrollMessages(t?void 0:0)}else n.scrollMessages(t?void 0:0);var c=n.container.find(".message");if(1===e.length)return"append"===a?c[c.length-1]:c[0];var m=[];if("append"===a)for(r=c.length-e.length;r<c.length;r++)m.push(c[r]);else for(r=0;r<e.length;r++)m.push(c[r]);return m},n.removeMessage=function(e){return e=i(e),0!==e.length&&(e.remove(),n.params.autoLayout&&n.layout(),!0)},n.removeMessages=function(e){n.removeMessage(e)},n.clean=function(){n.container.html("")},n.scrollMessages=function(e,a){void 0===e&&(e=400);var t,r=n.pageContent[0].scrollTop;if(void 0!==a)t=a;else if((t=n.params.newMessagesFirst?0:n.pageContent[0].scrollHeight-n.pageContent[0].offsetHeight)===r)return;n.pageContent.scrollTop(t,e)},n.init=function(){n.params.messages?n.addMessages(n.params.messages,void 0,!1):(n.params.autoLayout&&n.layout(),n.scrollMessages(0))},n.destroy=function(){n=null},n.init(),n.container[0].f7Messages=n,n};r.messages=function(e,a){return new u(e,a)},r.initPageMessages=function(e){function a(){n.destroy(),e.off("page:beforeremove",a)}e=i(e);var t=e.find(".messages");if(0!==t.length&&t.hasClass("messages-init")){var n=r.messages(t,t.dataset());e.hasClass("page")&&e.on("page:beforeremove",a)}},r.swipeoutOpenedEl=void 0,r.allowSwipeout=!0,r.initSwipeout=function(e){function a(e){r.allowSwipeout&&(o=!1,s=!0,l=void 0,E.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,E.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,p=(new Date).getTime())}function t(e){if(s){var a="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,t="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY;if(void 0===l&&(l=!!(l||Math.abs(t-E.y)>Math.abs(a-E.x))),l)return void(s=!1);if(!o){if(i(".list-block.sortable-opened").length>0)return;c=i(this),m=c.find(".swipeout-content"),u=c.find(".swipeout-actions-right"),h=c.find(".swipeout-actions-left"),f=g=C=y=k=T=null,M=h.hasClass("swipeout-actions-no-fold")||r.params.swipeoutActionsNoFold,I=u.hasClass("swipeout-actions-no-fold")||r.params.swipeoutActionsNoFold,h.length>0&&(f=h.outerWidth(),C=h.children("a"),T=h.find(".swipeout-overswipe")),u.length>0&&(g=u.outerWidth(),y=u.children("a"),k=u.find(".swipeout-overswipe")),b=c.hasClass("swipeout-opened"),b&&(w=c.find(".swipeout-actions-left.swipeout-actions-opened").length>0?"left":"right"),c.removeClass("transitioning"),r.params.swipeoutNoFollow||(c.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),c.removeClass("swipeout-opened"))}if(o=!0,e.preventDefault(),d=a-E.x,v=d,b&&("right"===w?v-=g:v+=f),v>0&&0===h.length||v<0&&0===u.length){if(!b)return s=o=!1,m.transform(""),y&&y.length>0&&y.transform(""),void(C&&C.length>0&&C.transform(""));v=0}v<0?x="to-left":v>0?x="to-right":x||(x="to-left");var n,p,O;if(e.f7PreventPanelSwipe=!0,r.params.swipeoutNoFollow)return b?("right"===w&&d>0&&r.swipeoutClose(c),"left"===w&&d<0&&r.swipeoutClose(c)):(d<0&&u.length>0&&r.swipeoutOpen(c,"right"),d>0&&h.length>0&&r.swipeoutOpen(c,"left")),s=!1,void(o=!1);P=!1,S=!1;var L;if(u.length>0)for(O=v/g,v<-g&&(v=-g-Math.pow(-v-g,.8),k.length>0&&(S=!0)),n=0;n<y.length;n++)void 0===y[n]._buttonOffset&&(y[n]._buttonOffset=y[n].offsetLeft),p=y[n]._buttonOffset,L=i(y[n]),k.length>0&&L.hasClass("swipeout-overswipe")&&(L.css({left:(S?-p:0)+"px"}),S?L.addClass("swipeout-overswipe-active"):L.removeClass("swipeout-overswipe-active")),L.transform("translate3d("+(v-p*(1+Math.max(O,-1)))+"px,0,0)");if(h.length>0)for(O=v/f,v>f&&(v=f+Math.pow(v-f,.8),T.length>0&&(P=!0)),n=0;n<C.length;n++)void 0===C[n]._buttonOffset&&(C[n]._buttonOffset=f-C[n].offsetLeft-C[n].offsetWidth),p=C[n]._buttonOffset,L=i(C[n]),
T.length>0&&L.hasClass("swipeout-overswipe")&&(L.css({left:(P?p:0)+"px"}),P?L.addClass("swipeout-overswipe-active"):L.removeClass("swipeout-overswipe-active")),C.length>1&&L.css("z-index",C.length-n),L.transform("translate3d("+(v+p*(1-Math.min(O,1)))+"px,0,0)");m.transform("translate3d("+v+"px,0,0)")}}function n(e){if(!s||!o)return s=!1,void(o=!1);s=!1,o=!1;var a,t,n,l,w,T=(new Date).getTime()-p;if(n="to-left"===x?u:h,t="to-left"===x?g:f,a=T<300&&(d<-10&&"to-left"===x||d>10&&"to-right"===x)||T>=300&&Math.abs(v)>t/2?"open":"close",T<300&&(0===Math.abs(v)&&(a="close"),Math.abs(v)===t&&(a="open")),"open"===a){r.swipeoutOpenedEl=c,c.trigger("open swipeout:open"),c.addClass("swipeout-opened transitioning");var k="to-left"===x?-t:t;if(m.transform("translate3d("+k+"px,0,0)"),n.addClass("swipeout-actions-opened"),l="to-left"===x?y:C)for(w=0;w<l.length;w++)i(l[w]).transform("translate3d("+k+"px,0,0)");S&&u.find(".swipeout-overswipe")[0].click(),P&&h.find(".swipeout-overswipe")[0].click()}else c.trigger("close swipeout:close"),r.swipeoutOpenedEl=void 0,c.addClass("transitioning").removeClass("swipeout-opened"),m.transform(""),n.removeClass("swipeout-actions-opened");var M;if(C&&C.length>0&&C!==l)for(w=0;w<C.length;w++)M=C[w]._buttonOffset,void 0===M&&(C[w]._buttonOffset=f-C[w].offsetLeft-C[w].offsetWidth),i(C[w]).transform("translate3d("+M+"px,0,0)");if(y&&y.length>0&&y!==l)for(w=0;w<y.length;w++)M=y[w]._buttonOffset,void 0===M&&(y[w]._buttonOffset=y[w].offsetLeft),i(y[w]).transform("translate3d("+-M+"px,0,0)");m.transitionEnd(function(e){b&&"open"===a||closed&&"close"===a||(c.trigger("open"===a?"opened":"closed"),b&&"close"===a&&(u.length>0&&y.transform(""),h.length>0&&C.transform("")))})}var s,o,l,p,d,c,m,u,h,f,g,v,b,w,C,y,x,T,k,P,S,M,I,E={},O=!!r.support.passiveListener&&{passive:!1,capture:!1};i(document).on(r.touchEvents.start,function(e){if(r.swipeoutOpenedEl){var a=i(e.target);r.swipeoutOpenedEl.is(a[0])||a.parents(".swipeout").is(r.swipeoutOpenedEl)||a.hasClass("modal-in")||a.hasClass("modal-overlay")||a.hasClass("actions-modal")||a.parents(".actions-modal.modal-in, .modal.modal-in").length>0||r.swipeoutClose(r.swipeoutOpenedEl)}},O),e?(i(e).on(r.touchEvents.start,a,O),i(e).on(r.touchEvents.move,t,O),i(e).on(r.touchEvents.end,n,O)):(i(document).on(r.touchEvents.start,".list-block li.swipeout",a,O),i(document).on(r.touchEvents.move,".list-block li.swipeout",t,O),i(document).on(r.touchEvents.end,".list-block li.swipeout",n,O))},r.swipeoutOpen=function(e,a,t){if(e=i(e),2===arguments.length&&"function"==typeof arguments[1]&&(t=a),0!==e.length&&(e.length>1&&(e=i(e[0])),e.hasClass("swipeout")&&!e.hasClass("swipeout-opened"))){a||(a=e.find(".swipeout-actions-right").length>0?"right":"left");var n=e.find(".swipeout-actions-"+a);if(0!==n.length){e.trigger("open swipeout:open").addClass("swipeout-opened").removeClass("transitioning"),n.addClass("swipeout-actions-opened");var s,o=n.children("a"),l=n.outerWidth(),p="right"===a?-l:l;if(o.length>1){for(s=0;s<o.length;s++)"right"===a?i(o[s]).transform("translate3d("+-o[s].offsetLeft+"px,0,0)"):i(o[s]).css("z-index",o.length-s).transform("translate3d("+(l-o[s].offsetWidth-o[s].offsetLeft)+"px,0,0)");o[1].clientLeft}for(e.addClass("transitioning"),s=0;s<o.length;s++)i(o[s]).transform("translate3d("+p+"px,0,0)");e.find(".swipeout-content").transform("translate3d("+p+"px,0,0)").transitionEnd(function(){e.trigger("opened swipeout:opened"),t&&t.call(e[0])}),r.swipeoutOpenedEl=e}}},r.swipeoutClose=function(e,a){function t(){r.allowSwipeout=!0,e.hasClass("swipeout-opened")||(e.removeClass("transitioning"),o.transform(""),e.trigger("closed swipeout:closed"),a&&a.call(e[0]),p&&clearTimeout(p))}if(e=i(e),0!==e.length&&e.hasClass("swipeout-opened")){var n=e.find(".swipeout-actions-opened").hasClass("swipeout-actions-right")?"right":"left",s=e.find(".swipeout-actions-opened").removeClass("swipeout-actions-opened"),o=s.children("a"),l=s.outerWidth();r.allowSwipeout=!1,e.trigger("close swipeout:close"),e.removeClass("swipeout-opened").addClass("transitioning");var p;e.find(".swipeout-content").transform("").transitionEnd(t),p=setTimeout(t,500);for(var d=0;d<o.length;d++)"right"===n?i(o[d]).transform("translate3d("+-o[d].offsetLeft+"px,0,0)"):i(o[d]).transform("translate3d("+(l-o[d].offsetWidth-o[d].offsetLeft)+"px,0,0)"),i(o[d]).css({left:"0px"}).removeClass("swipeout-overswipe-active");r.swipeoutOpenedEl&&r.swipeoutOpenedEl[0]===e[0]&&(r.swipeoutOpenedEl=void 0)}},r.swipeoutDelete=function(e,a){if(e=i(e),0!==e.length){e.length>1&&(e=i(e[0])),r.swipeoutOpenedEl=void 0,e.trigger("delete swipeout:delete"),e.css({height:e.outerHeight()+"px"});e[0].clientLeft;e.css({height:"0px"}).addClass("deleting transitioning").transitionEnd(function(){if(e.trigger("deleted swipeout:deleted"),a&&a.call(e[0]),e.parents(".virtual-list").length>0){var t=e.parents(".virtual-list")[0].f7VirtualList,n=e[0].f7VirtualListIndex;t&&void 0!==n&&t.deleteItem(n)}else r.params.swipeoutRemoveWithTimeout?setTimeout(function(){e.remove()},0):e.remove()});e.find(".swipeout-content").transform("translate3d(-100%,0,0)")}},r.sortableToggle=function(e){return e=i(e),0===e.length&&(e=i(".list-block.sortable")),e.toggleClass("sortable-opened"),e.hasClass("sortable-opened")?e.trigger("open sortable:open"):e.trigger("close sortable:close"),e},r.sortableOpen=function(e){return e=i(e),0===e.length&&(e=i(".list-block.sortable")),e.addClass("sortable-opened"),e.trigger("open sortable:open"),e},r.sortableClose=function(e){return e=i(e),0===e.length&&(e=i(".list-block.sortable")),e.removeClass("sortable-opened"),e.trigger("close sortable:close"),e},r.initSortable=function(){function e(e){s=!1,n=!0,o="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,p=i(this).parent(),v=p.index(),c=p.parent().children("li"),g=p.parents(".sortable"),e.preventDefault(),r.allowPanelOpen=r.allowSwipeout=!1}function a(e){if(n&&p){var a=("touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);s||(p.addClass("sorting"),g.addClass("sortable-sorting"),m=p[0].offsetTop,u=p.parent().height()-p[0].offsetTop-p.height(),d=p[0].offsetHeight),s=!0,e.preventDefault(),e.f7PreventPanelSwipe=!0,l=a-o;var t=l;t<-m&&(t=-m),t>u&&(t=u),p.transform("translate3d(0,"+t+"px,0)"),f=h=void 0,c.each(function(){var e=i(this);if(e[0]!==p[0]){var a=e[0].offsetTop,r=e.height(),n=p[0].offsetTop+t;n>=a-r/2&&p.index()<e.index()?(e.transform("translate3d(0, "+-d+"px,0)"),h=e,f=void 0):n<=a+r/2&&p.index()>e.index()?(e.transform("translate3d(0, "+d+"px,0)"),h=void 0,f||(f=e)):i(this).transform("translate3d(0, 0%,0)")}})}}function t(e){if(r.allowPanelOpen=r.allowSwipeout=!0,!n||!s)return n=!1,void(s=!1);e.preventDefault(),c.transform(""),p.removeClass("sorting"),g.removeClass("sortable-sorting");var a,t,i;h&&(p.insertAfter(h),p.trigger("sort sortable:sort",{startIndex:v,newIndex:p.index()})),f&&(p.insertBefore(f),p.trigger("sort sortable:sort",{startIndex:v,newIndex:p.index()})),(h||f)&&g.hasClass("virtual-list")&&(a=g[0].f7VirtualList,t=p[0].f7VirtualListIndex,i=f?f[0].f7VirtualListIndex:h[0].f7VirtualListIndex,a&&a.moveItem(t,i)),h=f=void 0,n=!1,s=!1}var n,s,o,l,p,d,c,m,u,h,f,g,v,b=!!r.support.passiveListener&&{passive:!1,capture:!1};i(document).on(r.touchEvents.start,".list-block.sortable .sortable-handler",e,b),r.support.touch?(i(document).on(r.touchEvents.move,".list-block.sortable .sortable-handler",a,b),i(document).on(r.touchEvents.end,".list-block.sortable .sortable-handler",t,b)):(i(document).on(r.touchEvents.move,a,b),i(document).on(r.touchEvents.end,t,b))},r.initSmartSelects=function(e){e=i(e);var a;a=e.is(".smart-select")?e:e.find(".smart-select"),0!==a.length&&a.each(function(){var e=i(this),a=e.find("select");if(0!==a.length){var t=a[0];if(0!==t.length){for(var r,n=[],s=0;s<t.length;s++)t[s].selected&&(r=t[s].dataset?t[s].dataset.displayAs:i(t[s]).data("display-as"),r&&void 0!==r?n.push(r):n.push(t[s].textContent.trim()));var o=e.find(".item-after");if(0===o.length)e.find(".item-inner").append('<div class="item-after">'+n.join(", ")+"</div>");else{var l=o.text();if(o.hasClass("smart-select-value"))for(s=0;s<t.length;s++)t[s].selected=t[s].textContent.trim()===l.trim();else o.text(n.join(", "))}a.on("change",function(){for(var a=[],r=0;r<t.length;r++)if(t[r].selected){var n=t[r].dataset?t[r].dataset.displayAs:i(t[r]).data("display-as");n&&void 0!==n?a.push(n):a.push(t[r].textContent.trim())}e.find(".item-after").text(a.join(", "))})}}})},r.smartSelectAddOption=function(e,a,t){e=i(e);var n=e.parents(".smart-select");void 0===t?e.append(a):i(a).insertBefore(e.find("option").eq(t)),r.initSmartSelects(n);var s=n.find("select").attr("name");i('.page.smart-select-page[data-select-name="'+s+'"]').length>0&&r.smartSelectOpen(n,!0)},r.smartSelectOpen=function(e,a){function t(a){var t=!0;(a.target===e[0]||i(a.target).parents(e[0]).length>0)&&(t=!1),i(a.target).parents(".picker-modal").length>0&&(t=!1),t&&r.closeModal(".smart-select-picker.modal-in")}function n(e){T.selectedOptions.length>=q?e.find('input[type="checkbox"]').each(function(){this.checked?i(this).parents("li").removeClass("disabled"):i(this).parents("li").addClass("disabled")}):e.find(".disabled").removeClass("disabled")}function o(a){if(a=i(a),w){var t=r.virtualList(a.find(".virtual-list"),{items:H,template:X,height:C||void 0,searchByItem:function(e,a,t){return!!(t.text&&t.text.toLowerCase().indexOf(e.trim().toLowerCase())>=0)}});a.once("popup"===d||"picker"===d?"closed":"pageBeforeRemove",function(){t&&t.destroy&&t.destroy()})}q&&n(a),f&&a.find('input[type="radio"][name="'+Y+'"]:checked').parents("label").once("click",function(){"popup"===d?r.closeModal(re):"picker"===d?r.closeModal(ne):p.router.back()}),a.on("change",'input[name="'+Y+'"]',function(){var t,s,o,l=this,c=l.value,m=[];if("checkbox"===l.type){for(var u=0;u<T.options.length;u++)t=T.options[u],t.value===c&&(t.selected=l.checked),t.selected&&(o=t.dataset?t.dataset.displayAs:i(t).data("display-as"),s=o&&void 0!==o?o:t.textContent,m.push(s.trim()));q&&n(a)}else t=e.find('option[value="'+c+'"]')[0],o=t.dataset?t.dataset.displayAs:i(t).data("display-as"),s=o&&void 0!==o?o:t.textContent,m=[s],T.value=c;k.trigger("change"),e.find(".item-after").text(m.join(", ")),f&&"radio"===V&&("popup"===d?r.closeModal(re):"picker"===d?r.closeModal(ne):p.router.back())})}function l(e){var a=e.detail.page;a.name===ae&&o(a.container)}if(e=i(e),0!==e.length){var p=e.parents("."+r.params.viewClass);if(0!==p.length){p=p[0].f7View;var d=e.attr("data-open-in")||r.params.smartSelectOpenIn;if("popup"===d){if(i(".popup.smart-select-popup").length>0)return}else if("picker"===d){if(i(".picker-modal.modal-in").length>0&&!a){if(e[0].f7SmartSelectPicker===i(".picker-modal.modal-in:not(.modal-out)")[0])return;r.closeModal(i(".picker-modal.modal-in:not(.modal-out)"))}}else if(!p)return;var c,m=e.dataset(),u=m.pageTitle||e.find(".item-title").text(),h=m.backText||r.params.smartSelectBackText;c="picker"===d?m.pickerCloseText||m.backText||r.params.smartSelectPickerCloseText:m.popupCloseText||m.backText||r.params.smartSelectPopupCloseText;var f=void 0!==m.backOnSelect?m.backOnSelect:r.params.smartSelectBackOnSelect,g=m.formTheme||r.params.smartSelectFormTheme,v=m.navbarTheme||r.params.smartSelectNavbarTheme,b=m.toolbarTheme||r.params.smartSelectToolbarTheme,w=m.virtualList,C=m.virtualListHeight,y=r.params.material,x=m.pickerHeight||r.params.smartSelectPickerHeight,T=e.find("select")[0],k=i(T),P=k.dataset();if(!(T.disabled||e.hasClass("disabled")||k.hasClass("disabled"))){for(var S,M,I,E,O,L,D,z,B,N,A,H=[],R=(new Date).getTime(),V=T.multiple?"checkbox":"radio",Y=V+"-"+R,q=k.attr("maxlength"),F=T.name,W=0;W<T.length;W++)S=i(T[W]),A=S.dataset(),I=A.optionImage||P.optionImage||m.optionImage,E=A.optionIcon||P.optionIcon||m.optionIcon,M=I||E||"checkbox"===V,y&&(M=I||E),B=A.optionColor,N=A.optionClass,S[0].disabled&&(N+=" disabled"),O=S.parent("optgroup")[0],L=O&&O.label,D=!1,O&&O!==z&&(D=!0,z=O,H.push({groupLabel:L,isLabel:D})),H.push({value:S[0].value,text:S[0].textContent.trim(),selected:S[0].selected,group:O,groupLabel:L,image:I,icon:E,color:B,className:N,disabled:S[0].disabled,inputType:V,id:R,hasMedia:M,checkbox:"checkbox"===V,inputName:Y,material:r.params.material});r._compiledTemplates.smartSelectItem||(r._compiledTemplates.smartSelectItem=s.compile(r.params.smartSelectItemTemplate||'{{#if isLabel}}<li class="item-divider">{{groupLabel}}</li>{{else}}<li{{#if className}} class="{{className}}"{{/if}}><label class="label-{{inputType}} item-content"><input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>{{#if material}}{{#if hasMedia}}<div class="item-media">{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{#if image}}<img src="{{image}}">{{/if}}</div><div class="item-inner"><div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div></div><div class="item-after"><i class="icon icon-form-{{inputType}}"></i></div>{{else}}<div class="item-media"><i class="icon icon-form-{{inputType}}"></i></div><div class="item-inner"><div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div></div>{{/if}}{{else}}{{#if hasMedia}}<div class="item-media">{{#if checkbox}}<i class="icon icon-form-checkbox"></i>{{/if}}{{#if icon}}<i class="icon {{icon}}"></i>{{/if}}{{#if image}}<img src="{{image}}">{{/if}}</div>{{/if}}<div class="item-inner"><div class="item-title{{#if color}} color-{{color}}{{/if}}">{{text}}</div></div>{{/if}}</label></li>{{/if}}'));var X=r._compiledTemplates.smartSelectItem,G="";if(!w)for(var j=0;j<H.length;j++)G+=X(H[j]);var _,U,J="",Q="",K="",Z="";"picker"===d?(r._compiledTemplates.smartSelectToolbar||(r._compiledTemplates.smartSelectToolbar=s.compile(r.params.smartSelectToolbarTemplate||'<div class="toolbar {{#if toolbarTheme}}theme-{{toolbarTheme}}{{/if}}"><div class="toolbar-inner"><div class="left"></div><div class="right"><a href="#" class="link close-picker"><span>{{closeText}}</span></a></div></div></div>')),J=r._compiledTemplates.smartSelectToolbar({pageTitle:u,closeText:c,openIn:d,toolbarTheme:b,inPicker:"picker"===d})):(r._compiledTemplates.smartSelectNavbar||(r._compiledTemplates.smartSelectNavbar=s.compile(r.params.smartSelectNavbarTemplate||'<div class="navbar {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}"><div class="navbar-inner">{{leftTemplate}}<div class="center sliding">{{pageTitle}}</div></div></div>')),_=r._compiledTemplates.smartSelectNavbar({pageTitle:u,backText:h,closeText:c,openIn:d,navbarTheme:v,inPopup:"popup"===d,inPage:"page"===d,leftTemplate:"popup"===d?(r.params.smartSelectPopupCloseTemplate||(y?'<div class="left"><a href="#" class="link close-popup icon-only"><i class="icon icon-back"></i></a></div>':'<div class="left"><a href="#" class="link close-popup"><i class="icon icon-back"></i><span>{{closeText}}</span></a></div>')).replace(/{{closeText}}/g,c):(r.params.smartSelectBackTemplate||(y?'<div class="left"><a href="#" class="back link icon-only"><i class="icon icon-back"></i></a></div>':'<div class="left sliding"><a href="#" class="back link"><i class="icon icon-back"></i><span>{{backText}}</span></a></div>')).replace(/{{backText}}/g,h)}),"page"===d?(U="static",e.parents(".navbar-through").length>0&&(U="through"),e.parents(".navbar-fixed").length>0&&(U="fixed"),K=e.parents(".page").hasClass("no-toolbar")?"no-toolbar":"",Q=e.parents(".page").hasClass("no-navbar")?"no-navbar":"navbar-"+U,Z=e.parents(".page").hasClass("no-tabbar")?"no-tabbar":""):U="fixed");var $,ee,ae="smart-select-"+Y,te=void 0===e.data("searchbar")?r.params.smartSelectSearchbar:"true"===e.data("searchbar");te&&($=e.data("searchbar-placeholder")||"Search",ee=e.data("searchbar-cancel")||"Cancel");var re,ne,ie='<form class="searchbar searchbar-init" data-search-list=".smart-select-list-'+R+'" data-search-in=".item-title"><div class="searchbar-input"><input type="search" placeholder="'+$+'"><a href="#" class="searchbar-clear"></a></div>'+(y?"":'<a href="#" class="searchbar-cancel">'+ee+"</a>")+'</form><div class="searchbar-overlay"></div>',se=("picker"!==d&&"through"===U?_:"")+'<div class="pages">  <div data-page="'+ae+'" data-select-name="'+F+'" class="page smart-select-page '+Q+" "+K+" "+Z+'">'+("picker"!==d&&"fixed"===U?_:"")+(te?ie:"")+'    <div class="page-content">'+("picker"!==d&&"static"===U?_:"")+'      <div class="list-block '+(w?"virtual-list":"")+" smart-select-list-"+R+" "+(g?"theme-"+g:"")+'">        <ul>'+(w?"":G)+"        </ul>      </div>    </div>  </div></div>";"popup"===d?(a?(re=i(".popup.smart-select-popup .view"),re.html(se)):(re=r.popup('<div class="popup smart-select-popup smart-select-popup-'+Y+'"><div class="view navbar-fixed">'+se+"</div></div>"),re=i(re)),r.initPage(re.find(".page")),o(re)):"picker"===d?(a?(ne=i(".picker-modal.smart-select-picker .view"),ne.html(se)):(ne=r.pickerModal('<div class="picker-modal smart-select-picker smart-select-picker-'+Y+'"'+(x?' style="height:'+x+'"':"")+">"+J+'<div class="picker-modal-inner"><div class="view">'+se+"</div></div></div>"),ne=i(ne),function(){var a=e.parents(".page-content");if(0!==a.length){var t,r=parseInt(a.css("padding-top"),10),n=parseInt(a.css("padding-bottom"),10),i=a[0].offsetHeight-r-ne.height(),s=a[0].scrollHeight-r-ne.height(),o=e.offset().top-r+e[0].offsetHeight;if(o>i){var l=a.scrollTop()+o-i;l+i>s&&(t=l+i-s+n,i===s&&(t=ne.height()),a.css({"padding-bottom":t+"px"})),a.scrollTop(l,300)}}}(),i("html").on("click",t),ne.once("picker:close",function(){e[0].f7SmartSelectPicker=void 0,i("html").off("click",t),e.parents(".page-content").css({paddingBottom:""})}),e[0].f7SmartSelectPicker=ne[0]),r.initPage(ne.find(".page")),o(ne)):(i(document).once("page:init",".smart-select-page",l),p.router.load({content:se,reload:!!a||void 0}))}}}};var h=function(e,a){var t={cols:1,height:r.params.material?48:44,cache:!0,dynamicHeightBufferSize:1,showFilteredItemsOnly:!1,renderExternal:void 0,template:'<li><div class="item-content"><div class="item-inner"><div class="item-title">{{this}}</div></div></div></li>'};a=a||{};for(var n in t)void 0===a[n]&&(a[n]=t[n]);var o=this;o.listBlock=i(e),o.params=a,o.items=o.params.items,o.params.showFilteredItemsOnly&&(o.filteredItems=[]),o.params.template&&!o.params.renderItem&&("string"==typeof o.params.template?o.template=s.compile(o.params.template):"function"==typeof o.params.template&&(o.template=o.params.template)),o.pageContent=o.listBlock.parents(".page-content");var l;void 0!==o.params.updatableScroll?l=o.params.updatableScroll:(l=!0,r.device.ios&&r.device.osVersion.split(".")[0]<8&&(l=!1),o.params.updatableScroll=l),o.ul=o.params.ul?i(o.params.ul):o.listBlock.children("ul"),0===o.ul.length&&(o.listBlock.append("<ul></ul>"),o.ul=o.listBlock.children("ul")),o.domCache={},o.displayDomCache={},o.tempDomElement=document.createElement("ul"),o.lastRepaintY=null,o.fragment=document.createDocumentFragment(),o.filterItems=function(e,a){o.filteredItems=[];for(var t=(e[0],e[e.length-1],0);t<e.length;t++)o.filteredItems.push(o.items[e[t]]);void 0===a&&(a=!0),a&&(o.pageContent[0].scrollTop=0),o.update()},o.resetFilter=function(){o.params.showFilteredItemsOnly?o.filteredItems=[]:(o.filteredItems=null,delete o.filteredItems),o.update()};var p,d,c,m,u,h,f=0,g="function"==typeof o.params.height;return o.setListSize=function(){var e=o.filteredItems||o.items;if(p=o.pageContent[0].offsetHeight,g){h=0,o.heights=[];for(var a=0;a<e.length;a++){var t=o.params.height(e[a]);h+=t,o.heights.push(t)}}else h=Math.ceil(e.length/o.params.cols)*o.params.height,d=Math.ceil(p/o.params.height),c=o.params.rowsBefore||2*d,m=o.params.rowsAfter||d,u=d+c+m,f=c/2*o.params.height;l&&o.ul.css({height:h+"px"})},o.render=function(e,a){e&&(o.lastRepaintY=null);var t=-(o.listBlock[0].getBoundingClientRect().top-o.pageContent[0].getBoundingClientRect().top);if(void 0!==a&&(t=a),null===o.lastRepaintY||Math.abs(t-o.lastRepaintY)>f||!l&&o.pageContent[0].scrollTop+p>=o.pageContent[0].scrollHeight){o.lastRepaintY=t;var r,n,i=o.filteredItems||o.items,s=0,d=0;if(g){var m,v,b=0;for(f=p,m=0;m<o.heights.length;m++)v=o.heights[m],void 0===r&&(b+v>=t-2*p*o.params.dynamicHeightBufferSize?r=m:s+=v),void 0===n&&((b+v>=t+2*p*o.params.dynamicHeightBufferSize||m===o.heights.length-1)&&(n=m+1),d+=v),b+=v;n=Math.min(n,i.length)}else r=(parseInt(t/o.params.height)-c)*o.params.cols,r<0&&(r=0),n=Math.min(r+u*o.params.cols,i.length);var w,C=[];o.reachEnd=!1;for(var y=r;y<n;y++){var x,T;T=o.items.indexOf(i[y]),y===r&&(o.currentFromIndex=T),y===n-1&&(o.currentToIndex=T),o.filteredItems?o.items[T]===o.filteredItems[o.filteredItems.length-1]&&(o.reachEnd=!0):T===o.items.length-1&&(o.reachEnd=!0),o.params.renderExternal?C.push(i[y]):o.domCache[T]?(x=o.domCache[T],x.f7VirtualListIndex=T):(o.template&&!o.params.renderItem?o.tempDomElement.innerHTML=o.template(i[y],{index:T}).trim():o.params.renderItem?o.tempDomElement.innerHTML=o.params.renderItem(T,i[y]).trim():o.tempDomElement.innerHTML=i[y].toString().trim(),x=o.tempDomElement.childNodes[0],o.params.cache&&(o.domCache[T]=x),x.f7VirtualListIndex=T),y===r&&(w=g?s:y*o.params.height/o.params.cols),o.params.renderExternal||(x.style.top=w+"px",o.params.onItemBeforeInsert&&o.params.onItemBeforeInsert(o,x),o.fragment.appendChild(x))}l||(o.ul[0].style.height=g?d+"px":y*o.params.height/o.params.cols+"px"),o.params.renderExternal?i&&0===i.length&&(o.reachEnd=!0):(o.params.onBeforeClear&&o.params.onBeforeClear(o,o.fragment),o.ul[0].innerHTML="",o.params.onItemsBeforeInsert&&o.params.onItemsBeforeInsert(o,o.fragment),i&&0===i.length?(o.reachEnd=!0,o.params.emptyTemplate&&(o.ul[0].innerHTML=o.params.emptyTemplate)):o.ul[0].appendChild(o.fragment),o.params.onItemsAfterInsert&&o.params.onItemsAfterInsert(o,o.fragment)),void 0!==a&&e&&o.pageContent.scrollTop(a,0),o.params.renderExternal&&o.params.renderExternal(o,{fromIndex:r,toIndex:n,listHeight:h,topPosition:w,items:C})}},o.scrollToItem=function(e){if(e>o.items.length)return!1;var a,t=0;if(g)for(var r=0;r<e;r++)t+=o.heights[r];else t=e*o.params.height;return a=o.listBlock[0].offsetTop,o.render(!0,a+t-parseInt(o.pageContent.css("padding-top"),10)),!0},o.handleScroll=function(e){o.render()},o._isVisible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},o.handleResize=function(e){o._isVisible(o.listBlock[0])&&(o.setListSize(),o.render(!0))},o.attachEvents=function(e){var a=e?"off":"on";o.pageContent[a]("scroll",o.handleScroll),o.listBlock.parents(".tab").eq(0)[a]("tab:show",o.handleResize),o.listBlock.parents(".panel").eq(0)[a]("panel:open",o.handleResize),o.listBlock.parents(".popup").eq(0)[a]("popup:open",o.handleResize),r["on"===a?"onResize":"offResize"](o.handleResize)},o.init=function(){o.attachEvents(),o.setListSize(),o.render()},o.appendItems=function(e){for(var a=0;a<e.length;a++)o.items.push(e[a]);o.update()},o.appendItem=function(e){o.appendItems([e])},o.replaceAllItems=function(e){o.items=e,delete o.filteredItems,o.domCache={},o.update()},o.replaceItem=function(e,a){o.items[e]=a,o.params.cache&&delete o.domCache[e],o.update()},o.prependItems=function(e){for(var a=e.length-1;a>=0;a--)o.items.unshift(e[a]);if(o.params.cache){var t={};for(var r in o.domCache)t[parseInt(r,10)+e.length]=o.domCache[r];o.domCache=t}o.update()},o.prependItem=function(e){o.prependItems([e])},o.moveItem=function(e,a){if(e!==a){var t=o.items.splice(e,1)[0];if(a>=o.items.length?(o.items.push(t),a=o.items.length-1):o.items.splice(a,0,t),o.params.cache){var r={};for(var n in o.domCache){var i=parseInt(n,10),s=e<a?e:a,l=e<a?a:e,p=e<a?-1:1;(i<s||i>l)&&(r[i]=o.domCache[i]),i===s&&(r[l]=o.domCache[i]),i>s&&i<=l&&(r[i+p]=o.domCache[i])}o.domCache=r}o.update()}},o.insertItemBefore=function(e,a){if(0===e)return void o.prependItem(a);if(e>=o.items.length)return void o.appendItem(a);if(o.items.splice(e,0,a),o.params.cache){var t={};for(var r in o.domCache){var n=parseInt(r,10);n>=e&&(t[n+1]=o.domCache[n])}o.domCache=t}o.update()},o.deleteItems=function(e){for(var a,t=0,r=0;r<e.length;r++){var n=e[r];void 0!==a&&n>a&&(t=-r),n+=t,a=e[r];var i=o.items.splice(n,1)[0];if(o.filteredItems&&o.filteredItems.indexOf(i)>=0&&o.filteredItems.splice(o.filteredItems.indexOf(i),1),o.params.cache){var s={};for(var l in o.domCache){var p=parseInt(l,10);p===n?delete o.domCache[n]:parseInt(l,10)>n?s[p-1]=o.domCache[l]:s[p]=o.domCache[l]}o.domCache=s}}o.update()},o.deleteAllItems=function(){o.items=[],delete o.filteredItems,o.params.cache&&(o.domCache={}),o.update()},o.deleteItem=function(e){o.deleteItems([e])},o.clearCache=function(){o.domCache={}},o.update=function(){o.setListSize(),o.render(!0)},o.destroy=function(){o.attachEvents(!0),delete o.items,delete o.domCache},o.init(),o.listBlock[0].f7VirtualList=o,o};r.virtualList=function(e,a){return new h(e,a)},r.reinitVirtualList=function(e){var a=i(e),t=a.find(".virtual-list");if(0!==t.length)for(var r=0;r<t.length;r++){var n=t[r].f7VirtualList;n&&n.update()}},r.initPullToRefresh=function(e){function a(e){if(d)if("android"===r.device.os){if("targetTouches"in e&&e.targetTouches.length>1)return}else if(c&&d&&m)return;f=i(this),f.hasClass("refreshing")||(c=!1,y=!1,d=!0,m=void 0,b=void 0,"touchstart"===e.type&&(p=e.targetTouches[0].identifier),x.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,x.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,h=(new Date).getTime())}function t(e){if(d){var a,t,n;if("touchmove"===e.type){if(p&&e.touches)for(var i=0;i<e.touches.length;i++)e.touches[i].identifier===p&&(n=e.touches[i]);n||(n=e.targetTouches[0]),a=n.pageX,t=n.pageY}else a=e.pageX,t=e.pageY;if(a&&t){if(void 0===m&&(m=!!(m||Math.abs(t-x.y)>Math.abs(a-x.x))),!m)return void(d=!1);if(v=f[0].scrollTop,void 0===b&&0!==v&&(b=!0),!c){if(f.removeClass("transitioning"),v>f[0].offsetHeight)return void(d=!1);C&&(w=f.attr("data-ptr-distance"),w.indexOf("%")>=0&&(w=f[0].offsetHeight*parseInt(w,10)/100)),P=f.hasClass("refreshing")?w:0,k=f[0].scrollHeight===f[0].offsetHeight||"ios"!==r.device.os}if(c=!0,!((u=t-x.y)>0&&v<=0||v<0))return y=!1,f.removeClass("pull-up pull-down"),void(T=!1);"ios"===r.device.os&&parseInt(r.device.osVersion.split(".")[0],10)>7&&0===v&&!b&&(k=!0),k&&(e.preventDefault(),g=Math.pow(u,.85)+P,f.transform("translate3d(0,"+g+"px,0)")),k&&Math.pow(u,.85)>w||!k&&u>=2*w?(T=!0,f.addClass("pull-up").removeClass("pull-down")):(T=!1,f.removeClass("pull-up").addClass("pull-down")),y||(f.trigger("pullstart ptr:pullstart"),y=!0),f.trigger("pullmove ptr:pullmove",{event:e,scrollTop:v,translate:g,touchesDiff:u})}}}function n(e){return"touchend"===e.type&&e.changedTouches&&e.changedTouches.length>0&&p&&e.changedTouches[0].identifier!==p?(d=!1,m=!1,c=!1,void(p=null)):d&&c?(g&&(f.addClass("transitioning"),g=0),f.transform(""),T?(f.addClass("refreshing"),f.trigger("refresh ptr:refresh",{done:function(){r.pullToRefreshDone(f)}})):f.removeClass("pull-down"),d=!1,c=!1,void(y&&f.trigger("pullend ptr:pullend"))):(d=!1,void(c=!1))}function s(e){e.off(r.touchEvents.start,a,I),e.off(r.touchEvents.move,t,E),e.off(r.touchEvents.end,n,I)}function o(){s(l),S.off("page:beforeremove",o)}var l=i(e);if(l.hasClass("pull-to-refresh-content")||(l=l.find(".pull-to-refresh-content")),l&&0!==l.length){var p,d,c,m,u,h,f,g,v,b,w,C,y,x={},T=!1,k=!1,P=0,S=l.hasClass("page")?l:l.parents(".page"),M=!1;(S.find(".navbar").length>0||S.parents(".navbar-fixed, .navbar-through").length>0||S.hasClass("navbar-fixed")||S.hasClass("navbar-through"))&&(M=!0),S.hasClass("no-navbar")&&(M=!1),M||l.addClass("pull-to-refresh-no-navbar"),f=l,f.attr("data-ptr-distance")?C=!0:w=44;var I=!("touchstart"!==r.touchEvents.start||!r.support.passiveListener)&&{passive:!0,capture:!1},E=!!r.support.passiveListener&&{passive:!1,capture:!1};if(l.on(r.touchEvents.start,a,I),l.on(r.touchEvents.move,t,E),l.on(r.touchEvents.end,n,I),0!==S.length){for(var O=0;O<l.length;O++)l[O].f7DestroyPullToRefresh=s;S.on("page:beforeremove",o)}}},r.pullToRefreshDone=function(e){e=i(e),0===e.length&&(e=i(".pull-to-refresh-content.refreshing")),e.removeClass("refreshing").addClass("transitioning"),e.transitionEnd(function(){e.removeClass("transitioning pull-up pull-down"),e.trigger("refreshdone ptr:done")})},r.pullToRefreshTrigger=function(e){e=i(e),0===e.length&&(e=i(".pull-to-refresh-content")),e.hasClass("refreshing")||(e.addClass("transitioning refreshing"),e.trigger("refresh ptr:refresh",{done:function(){r.pullToRefreshDone(e)}}))},r.destroyPullToRefresh=function(e){e=i(e);var a=e.hasClass("pull-to-refresh-content")?e:e.find(".pull-to-refresh-content");0!==a.length&&a[0].f7DestroyPullToRefresh&&a[0].f7DestroyPullToRefresh(e)},r.attachInfiniteScroll=function(e){i(e).on("scroll",a)},r.detachInfiniteScroll=function(e){i(e).off("scroll",a)},r.initPageInfiniteScroll=function(e){function a(){r.detachInfiniteScroll(t),e.off("page:beforeremove",a)}e=i(e);var t=e.find(".infinite-scroll");0!==t.length&&(r.attachInfiniteScroll(t),e.on("page:beforeremove",a))},r.initPageScrollToolbars=function(e){function a(a){e.hasClass("page-on-left")||(u=t[0].scrollTop,v=t[0].scrollHeight,b=t[0].offsetHeight,w=u+b>=v-S,y=d.hasClass("navbar-hidden"),x=c.hasClass("toolbar-hidden"),T=p&&p.hasClass("toolbar-hidden"),w?r.params.showBarsOnPageScrollEnd&&(C="show"):C=m>u?r.params.showBarsOnPageScrollTop||u<=44?"show":"hide":u>44?"hide":"show","show"===C?(h&&n&&y&&(r.showNavbar(d),e.removeClass("no-navbar-by-scroll"),y=!1),f&&s&&x&&(r.showToolbar(c),e.removeClass("no-toolbar-by-scroll"),x=!1),g&&o&&T&&(r.showToolbar(p),e.removeClass("no-tabbar-by-scroll"),T=!1)):(h&&n&&!y&&(r.hideNavbar(d),e.addClass("no-navbar-by-scroll"),y=!0),f&&s&&!x&&(r.hideToolbar(c),e.addClass("no-toolbar-by-scroll"),x=!0),g&&o&&!T&&(r.hideToolbar(p),e.addClass("no-tabbar-by-scroll"),T=!0)),m=u)}e=i(e);var t=e.find(".page-content");if(0!==t.length){var n=(r.params.hideNavbarOnPageScroll||t.hasClass("hide-navbar-on-scroll")||t.hasClass("hide-bars-on-scroll"))&&!(t.hasClass("keep-navbar-on-scroll")||t.hasClass("keep-bars-on-scroll")),s=(r.params.hideToolbarOnPageScroll||t.hasClass("hide-toolbar-on-scroll")||t.hasClass("hide-bars-on-scroll"))&&!(t.hasClass("keep-toolbar-on-scroll")||t.hasClass("keep-bars-on-scroll")),o=(r.params.hideTabbarOnPageScroll||t.hasClass("hide-tabbar-on-scroll"))&&!t.hasClass("keep-tabbar-on-scroll");if(n||s||o){var l=t.parents("."+r.params.viewClass);if(0!==l.length){var p,d=l.find(".navbar"),c=l.find(".toolbar");o&&(p=l.find(".tabbar"),0===p.length&&(p=l.parents("."+r.params.viewsClass).find(".tabbar")));var m,u,h=d.length>0,f=c.length>0,g=p&&p.length>0;m=u=t[0].scrollTop;var v,b,w,C,y,x,T,k=f&&s?c[0].offsetHeight:0,P=g&&o?p[0].offsetHeight:0,S=P||k;t.on("scroll",a),t[0].f7ScrollToolbarsHandler=a}}}},r.destroyScrollToolbars=function(e){e=i(e);var a=e.find(".page-content");if(0!==a.length){a[0].f7ScrollToolbarsHandler&&a.off("scroll",a[0].f7ScrollToolbarsHandler)}},r.materialTabbarSetHighlight=function(e,a){i(e).each(function(){var e=i(this);if((a=a||e.find(".tab-link.active"))&&a.length>0){var t,n;e.hasClass("tabbar-scrollable")?(t=a[0].offsetWidth+"px",n=a[0].offsetLeft+"px"):(t=1/e.find(".tab-link").length*100+"%",n=100*(r.rtl?-a.index():a.index())+"%"),e.find(".tab-link-highlight").css({width:t}).transform("translate3d("+n+",0,0)")}})},r.initPageMaterialTabbar=function(e){function a(){r.materialTabbarSetHighlight(t)}e=i(e);var t=e.find(".tabbar");0===t.length&&e.hasClass("tabbar")&&(t=e),t.length>0&&(0===t.find(".tab-link-highlight").length&&t.find(".toolbar-inner").append('<span class="tab-link-highlight"></span>'),a(),r.onResize(a),e.once("page:beforeremove",function(){r.offResize(a)}))},r.initMaterialTabbar=function(e){return r.initPageMaterialTabbar(e)},r.showTab=function(e,a,t,n){var s=i(e);if(2===arguments.length&&"boolean"==typeof arguments[1]&&(e=arguments[0],t=arguments[1]),3===arguments.length&&"boolean"==typeof arguments[1]&&"boolean"==typeof arguments[2]&&(e=arguments[0],t=arguments[1],n=arguments[2]),void 0===t&&(t=!0),0===s.length)return!1;if(s.hasClass("active"))return n&&s.trigger("show tab:show"),!1
;var o=s.parent(".tabs");if(0===o.length)return!1;r.allowSwipeout=!0;var l=o.parent().hasClass("tabs-animated-wrap");if(l){o.parent()[t?"removeClass":"addClass"]("not-animated");var p=100*(r.rtl?s.index():-s.index());o.transform("translate3d("+p+"%,0,0)")}var d,c=o.parent().hasClass("tabs-swipeable-wrap");c&&(d=o.parent()[0].swiper,d.activeIndex!==s.index()&&d.slideTo(s.index(),t?void 0:0,!1));var m=o.children(".tab.active").removeClass("active").trigger("hide tab:hide");if(s.addClass("active"),s.trigger("show tab:show"),!l&&!c&&s.find(".navbar").length>0){var u;u=s.hasClass(r.params.viewClass)?s[0]:s.parents("."+r.params.viewClass)[0],r.sizeNavbars(u)}if(a?a=i(a):(!(a=i("string"==typeof e?'.tab-link[href="'+e+'"]':'.tab-link[href="#'+s.attr("id")+'"]'))||a&&0===a.length)&&i("[data-tab]").each(function(){s.is(i(this).attr("data-tab"))&&(a=i(this))}),0!==a.length){var h;if(m&&m.length>0){var f=m.attr("id");f&&(h=i('.tab-link[href="#'+f+'"]')),(!h||h&&0===h.length)&&i("[data-tab]").each(function(){m.is(i(this).attr("data-tab"))&&(h=i(this))})}if(a&&a.length>0&&(a.addClass("active"),r.params.material)){var g=a.parents(".tabbar");g.length>0&&(0===g.find(".tab-link-highlight").length&&g.find(".toolbar-inner").append('<span class="tab-link-highlight"></span>'),r.materialTabbarSetHighlight(g,a))}return h&&h.length>0&&h.removeClass("active"),!0}},r.accordionToggle=function(e){e=i(e),0!==e.length&&(e.hasClass("accordion-item-expanded")?r.accordionClose(e):r.accordionOpen(e))},r.accordionOpen=function(e){e=i(e);var a=e.parents(".accordion-list").eq(0),t=e.children(".accordion-item-content");0===t.length&&(t=e.find(".accordion-item-content"));var n=a.length>0&&e.parent().children(".accordion-item-expanded");n.length>0&&r.accordionClose(n),t.css("height",t[0].scrollHeight+"px").transitionEnd(function(){if(e.hasClass("accordion-item-expanded")){t.transition(0),t.css("height","auto");t[0].clientLeft;t.transition(""),e.trigger("opened accordion:opened")}else t.css("height",""),e.trigger("closed accordion:closed")}),e.trigger("open accordion:open"),e.addClass("accordion-item-expanded")},r.accordionClose=function(e){e=i(e);var a=e.children(".accordion-item-content");0===a.length&&(a=e.find(".accordion-item-content")),e.removeClass("accordion-item-expanded"),a.transition(0),a.css("height",a[0].scrollHeight+"px");a[0].clientLeft;a.transition(""),a.css("height","").transitionEnd(function(){if(e.hasClass("accordion-item-expanded")){a.transition(0),a.css("height","auto");a[0].clientLeft;a.transition(""),e.trigger("opened accordion:opened")}else a.css("height",""),e.trigger("closed accordion:closed")}),e.trigger("close accordion:close")},r.initFastClicks=function(){function e(e){var a,t=i(e),n=t.parents(r.params.activeStateElements);return t.is(r.params.activeStateElements)&&(a=t),n.length>0&&(a=a?a.add(n):n),a||t}function a(e){var a=e.parents(".page-content, .panel");return 0!==a.length&&("yes"!==a.prop("scrollHandlerSet")&&(a.on("scroll",function(){clearTimeout(R),clearTimeout(X)}),a.prop("scrollHandlerSet","yes")),!0)}function t(){H&&H.addClass("active-state")}function n(e){H&&(H.removeClass("active-state"),H=null)}function s(e){var a="input select textarea label".split(" ");return!!(e.nodeName&&a.indexOf(e.nodeName.toLowerCase())>=0)}function o(e){var a="button input textarea select".split(" ");return!(!document.activeElement||e===document.activeElement||document.activeElement===document.body)&&!(a.indexOf(e.nodeName.toLowerCase())>=0)}function l(e){var a=i(e);return("input"!==e.nodeName.toLowerCase()||"file"!==e.type&&"range"!==e.type)&&(("select"!==e.nodeName.toLowerCase()||!r.device.android)&&(!(a.hasClass("no-fastclick")||a.parents(".no-fastclick").length>0)&&(!r.params.fastClicksExclude||!a.is(r.params.fastClicksExclude))))}function p(e){if(document.activeElement===e)return!1;var a=e.nodeName.toLowerCase(),t="button checkbox file image radio submit".split(" ");return!e.disabled&&!e.readOnly&&("textarea"===a||("select"===a?!r.device.android:"input"===a&&t.indexOf(e.type)<0||void 0))}function d(e){e=i(e);var a=!0;return(e.is("label")||e.parents("label").length>0)&&(a=!r.device.android&&!(!r.device.ios||!e.is("input"))),a}function c(a){e(a.target).addClass("active-state"),"which"in a&&3===a.which&&setTimeout(function(){i(".active-state").removeClass("active-state")},0),r.params.material&&r.params.materialRipple&&(S=a.pageX,M=a.pageY,v(a.target,a.pageX,a.pageY))}function m(e){i(".active-state").removeClass("active-state"),r.params.material&&r.params.materialRipple&&b()}function u(e){i(".active-state").removeClass("active-state"),r.params.material&&r.params.materialRipple&&w()}function h(e){var a=r.params.materialRippleElements,t=i(e);if(t.is(a))return!t.hasClass("no-ripple")&&t;if(t.parents(a).length>0){var n=t.parents(a).eq(0);return!n.hasClass("no-ripple")&&n}return!1}function f(e,a,t){if(t){var r=t[0].getBoundingClientRect(),n={x:e-r.left,y:a-r.top},s=r.height,o=r.width,l=Math.max(Math.pow(Math.pow(s,2)+Math.pow(o,2),.5),48);q=i('<div class="ripple-wave" style="width: '+l+"px; height: "+l+"px; margin-top:-"+l/2+"px; margin-left:-"+l/2+"px; left:"+n.x+"px; top:"+n.y+'px;"></div>'),t.prepend(q);q[0].clientLeft;W="translate3d("+(o/2-n.x)+"px, "+(s/2-n.y)+"px, 0) scale(1)",q.transform(W)}}function g(){if(q){var e=q,a=setTimeout(function(){e.remove()},400);q.addClass("ripple-wave-fill").transform(W.replace("scale(1)","scale(1.01)")).transitionEnd(function(){clearTimeout(a);var e=i(this).addClass("ripple-wave-out").transform(W.replace("scale(1)","scale(1.01)"));a=setTimeout(function(){e.remove()},700),setTimeout(function(){e.transitionEnd(function(){clearTimeout(a),i(this).remove()})},0)}),q=F=void 0}}function v(e,t,r){if(!(F=h(e))||0===F.length)return void(F=void 0);a(F)?X=setTimeout(function(){f(S,M,F)},80):f(S,M,F)}function b(){clearTimeout(X),g()}function w(){q?g():F&&!B?(clearTimeout(X),f(S,M,F),setTimeout(g,0)):g()}function C(e){var a=e.changedTouches[0],t=document.createEvent("MouseEvents"),n="click";r.device.android&&"select"===E.nodeName.toLowerCase()&&(n="mousedown"),t.initMouseEvent(n,!0,!0,window,1,a.screenX,a.screenY,a.clientX,a.clientY,!1,!1,!1,!1,0,null),t.forwardedTouchEvent=!0,r.device.ios&&navigator.standalone?setTimeout(function(){E=document.elementFromPoint(e.changedTouches[0].clientX,e.changedTouches[0].clientY),E.dispatchEvent(t)},10):E.dispatchEvent(t)}function y(s){if(B=!1,N=!1,s.targetTouches.length>1)return H&&n(),!0;if(s.touches.length>1&&H&&n(),r.params.tapHold&&(A&&clearTimeout(A),A=setTimeout(function(){s&&s.touches&&s.touches.length>1||(N=!0,s.preventDefault(),i(s.target).trigger("taphold"))},r.params.tapHoldDelay)),Y&&clearTimeout(Y),!(V=l(s.target)))return O=!1,!0;if(r.device.ios||r.device.android&&"getSelection"in window){var p=window.getSelection();if(p.rangeCount&&p.focusNode!==document.body&&(!p.isCollapsed||document.activeElement===p.focusNode))return L=!0,!0;L=!1}r.device.android&&o(s.target)&&document.activeElement.blur(),O=!0,E=s.target,I=(new Date).getTime(),S=s.targetTouches[0].pageX,M=s.targetTouches[0].pageY,r.device.ios&&(D=void 0,i(E).parents().each(function(){var e=this;e.scrollHeight>e.offsetHeight&&!D&&(D=e,D.f7ScrollTop=D.scrollTop)})),s.timeStamp-z<r.params.fastClicksDelayBetweenClicks&&s.preventDefault(),r.params.activeState&&(H=e(E),a(H)?R=setTimeout(t,80):t()),r.params.material&&r.params.materialRipple&&v(E,S,M)}function x(e){if(O){var a=!1,t=r.params.fastClicksDistanceThreshold;if(t){var i=e.targetTouches[0].pageX,s=e.targetTouches[0].pageY;(Math.abs(i-S)>t||Math.abs(s-M)>t)&&(a=!0)}else a=!0;a&&(O=!1,E=null,B=!0,r.params.tapHold&&clearTimeout(A),r.params.activeState&&(clearTimeout(R),n()),r.params.material&&r.params.materialRipple&&b())}}function T(e){if(clearTimeout(R),clearTimeout(A),!O)return!L&&V&&(r.device.android&&!e.cancelable||e.preventDefault()),!0;if(document.activeElement===e.target)return r.params.activeState&&n(),r.params.material&&r.params.materialRipple&&w(),!0;if(L||e.preventDefault(),e.timeStamp-z<r.params.fastClicksDelayBetweenClicks)return setTimeout(n,0),!0;if(z=e.timeStamp,O=!1,r.device.ios&&D&&D.scrollTop!==D.f7ScrollTop)return!1;if(r.params.activeState&&(t(),setTimeout(n,0)),r.params.material&&r.params.materialRipple&&w(),p(E)){if(r.device.ios&&r.device.webView)return event.timeStamp-I>159?(E=null,!1):(E.focus(),!1);E.focus()}return document.activeElement&&E!==document.activeElement&&document.activeElement!==document.body&&"label"!==E.nodeName.toLowerCase()&&document.activeElement.blur(),e.preventDefault(),C(e),!1}function k(e){O=!1,E=null,clearTimeout(R),clearTimeout(A),r.params.activeState&&n(),r.params.material&&r.params.materialRipple&&w()}function P(e){var a=!1;return O?(E=null,O=!1,!0):"submit"===e.target.type&&0===e.detail||"file"===e.target.type||(E||s(e.target)||(a=!0),V||(a=!0),document.activeElement===E&&(a=!0),e.forwardedTouchEvent&&(a=!0),e.cancelable||(a=!0),r.params.tapHold&&r.params.tapHoldPreventClicks&&N&&(a=!1),a||(e.stopImmediatePropagation(),e.stopPropagation(),E?(d(E)||B)&&e.preventDefault():e.preventDefault(),E=null),Y=setTimeout(function(){V=!1},r.device.ios||r.device.androidChrome?100:400),r.params.tapHold&&(A=setTimeout(function(){N=!1},r.device.ios||r.device.androidChrome?100:400)),a)}r.params.activeState&&i("html").addClass("watch-active-state"),r.device.ios&&r.device.webView&&window.addEventListener("touchstart",function(){});var S,M,I,E,O,L,D,z,B,N,A,H,R,V,Y,q,F,W,X;r.support.touch?(document.addEventListener("click",P,!0),document.addEventListener("touchstart",y),document.addEventListener("touchmove",x),document.addEventListener("touchend",T),document.addEventListener("touchcancel",k)):r.params.activeState&&(document.addEventListener("mousedown",c),document.addEventListener("mousemove",m),document.addEventListener("mouseup",u)),r.params.material&&r.params.materialRipple&&document.addEventListener("contextmenu",function(e){H&&n(),w()})},r.initClickEvents=function(){function e(e){var a=i(this),t=i(e.target);if(!("a"===a[0].nodeName.toLowerCase()||a.parents("a").length>0||"a"===t[0].nodeName.toLowerCase()||t.parents("a").length>0)){var n;if(r.params.scrollTopOnNavbarClick&&a.is(".navbar .center")){var s=a.parents(".navbar");n=s.parents(".page-content"),0===n.length&&(s.parents(".page").length>0&&(n=s.parents(".page").find(".page-content")),0===n.length&&s.nextAll(".pages").length>0&&(n=s.nextAll(".pages").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")))}r.params.scrollTopOnStatusbarClick&&a.is(".statusbar-overlay")&&(n=i(".popup.modal-in").length>0?i(".popup.modal-in").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content"):i(".panel.active").length>0?i(".panel.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content"):i(".views > .view.active").length>0?i(".views > .view.active").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content"):i(".views").find(".page:not(.page-on-left):not(.page-on-right):not(.cached)").find(".page-content")),n&&n.length>0&&(n.hasClass("tab")&&(n=n.parent(".tabs").children(".page-content.active")),n.length>0&&n.scrollTop(0,300))}}function a(e){var a=i(this),t=a.attr("href"),n="a"===a[0].nodeName.toLowerCase();if(n&&(a.is(r.params.externalLinks)||t&&t.indexOf("javascript:")>=0))return void(t&&"_system"===a.attr("target")&&(e.preventDefault(),window.open(t,"_system")));var l=a.dataset();if(a.hasClass("smart-select")&&r.smartSelectOpen&&r.smartSelectOpen(a),a.hasClass("open-panel")&&(1===i(".panel").length?i(".panel").hasClass("panel-left")?r.openPanel("left"):r.openPanel("right"):"right"===l.panel?r.openPanel("right"):r.openPanel("left")),a.hasClass("close-panel")&&r.closePanel(),a.hasClass("panel-overlay")&&(i(".panel.active").trigger("panel:overlay-click"),r.params.panelsCloseByOutside&&r.closePanel()),a.hasClass("open-popover")){var p;p=l.popover?l.popover:".popover",r.popover(p,a)}a.hasClass("close-popover")&&r.closeModal(".popover.modal-in");var d;a.hasClass("open-popup")&&(d=l.popup?l.popup:".popup",r.popup(d)),a.hasClass("close-popup")&&(d=l.popup?l.popup:".popup.modal-in",r.closeModal(d));var c;if(a.hasClass("open-login-screen")&&(c=l.loginScreen?l.loginScreen:".login-screen",r.loginScreen(c)),a.hasClass("close-login-screen")&&r.closeModal(".login-screen.modal-in"),a.hasClass("modal-overlay")&&(i(".modal.modal-in").length>0&&r.params.modalCloseByOutside&&r.closeModal(".modal.modal-in"),i(".actions-modal.modal-in").length>0&&r.params.actionsCloseByOutside&&r.closeModal(".actions-modal.modal-in"),i(".popover.modal-in").length>0&&r.params.popoverCloseByOutside&&r.closeModal(".popover.modal-in")),a.hasClass("popup-overlay")&&i(".popup.modal-in").length>0&&r.params.popupCloseByOutside&&r.closeModal(".popup.modal-in"),a.hasClass("picker-modal-overlay")&&i(".picker-modal.modal-in").length>0&&r.closeModal(".picker-modal.modal-in"),a.hasClass("close-picker")){var m=i(".picker-modal.modal-in");m.length>0?r.closeModal(m):(m=i(".popover.modal-in .picker-modal"),m.length>0&&r.closeModal(m.parents(".popover")))}if(a.hasClass("open-picker")){var u;u=l.picker?l.picker:".picker-modal",r.pickerModal(u,a)}var h;if(a.hasClass("tab-link")&&(h=!0,r.showTab(l.tab||a.attr("href"),a)),a.hasClass("swipeout-close")&&r.swipeoutClose(a.parents(".swipeout-opened")),a.hasClass("swipeout-delete"))if(l.confirm){var f=l.confirm,g=l.confirmTitle;g?r.confirm(f,g,function(){r.swipeoutDelete(a.parents(".swipeout"))},function(){l.closeOnCancel&&r.swipeoutClose(a.parents(".swipeout"))}):r.confirm(f,function(){r.swipeoutDelete(a.parents(".swipeout"))},function(){l.closeOnCancel&&r.swipeoutClose(a.parents(".swipeout"))})}else r.swipeoutDelete(a.parents(".swipeout"));if(a.hasClass("toggle-sortable")&&r.sortableToggle(l.sortable),a.hasClass("open-sortable")&&r.sortableOpen(l.sortable),a.hasClass("close-sortable")&&r.sortableClose(l.sortable),a.hasClass("accordion-item-toggle")||a.hasClass("item-link")&&a.parent().hasClass("accordion-item")){var v=a.parent(".accordion-item");0===v.length&&(v=a.parents(".accordion-item")),0===v.length&&(v=a.parents("li")),r.accordionToggle(v)}if(a.hasClass("floating-button")&&a.parent().hasClass("speed-dial")&&a.parent().toggleClass("speed-dial-opened"),a.hasClass("close-speed-dial")&&i(".speed-dial-opened").removeClass("speed-dial-opened"),(!r.params.ajaxLinks||a.is(r.params.ajaxLinks))&&n&&r.params.router){n&&e.preventDefault();var b=t&&t.length>0&&"#"!==t&&!h,w=l.template;if(b||a.hasClass("back")||w){var C;if(l.view?C=i(l.view)[0].f7View:(C=a.parents("."+r.params.viewClass)[0]&&a.parents("."+r.params.viewClass)[0].f7View)&&C.params.linksView&&("string"==typeof C.params.linksView?C=i(C.params.linksView)[0].f7View:C.params.linksView instanceof o&&(C=C.params.linksView)),C||r.mainView&&(C=r.mainView),!C)return;var y;if(w)t=void 0;else{if(t&&0===t.indexOf("#")&&"#"!==t){if(!C.params.domCache)return;y=t.split("#")[1]}if("#"===t&&!a.hasClass("back"))return}var x;void 0!==l.animatePages?x=l.animatePages:(a.hasClass("with-animation")&&(x=!0),a.hasClass("no-animation")&&(x=!1));var T={animatePages:x,ignoreCache:l.ignoreCache,force:l.force,reload:l.reload,reloadPrevious:l.reloadPrevious,pageName:y,pushState:l.pushState,url:t};if(r.params.template7Pages){T.contextName=l.contextName;var k=l.context;k&&(T.context=JSON.parse(k))}w&&w in s.templates&&(T.template=s.templates[w]),a.hasClass("back")?C.router.back(T):C.router.load(T)}}}function t(e){e.preventDefault()}if(i(document).on("click","a, .open-panel, .close-panel, .panel-overlay, .modal-overlay, .popup-overlay, .swipeout-delete, .swipeout-close, .close-popup, .open-popup, .open-popover, .open-login-screen, .close-login-screen .smart-select, .toggle-sortable, .open-sortable, .close-sortable, .accordion-item-toggle, .close-picker, .picker-modal-overlay",a),(r.params.scrollTopOnNavbarClick||r.params.scrollTopOnStatusbarClick)&&i(document).on("click",".statusbar-overlay, .navbar .center",e),r.support.touch&&!r.device.android){var n=!!r.support.passiveListener&&{passive:!1,capture:!1};i(document).on(r.params.fastClicks?"touchstart":"touchmove",".panel-overlay, .modal-overlay, .preloader-indicator-overlay, .popup-overlay, .searchbar-overlay",t,n)}};var f=[];r.getSize=function(){var e=r.root.offset();r.width=r.root[0].offsetWidth,r.height=r.root[0].offsetHeight,r.left=e.left,r.top=e.top},r.onResize=function(e){f.push(e)},r.offResize=function(e){for(var a=0;a<f.length;a++)f[a]===e&&f.splice(a,1)},r.resize=function(){t(),r.getSize(),r.sizeNavbars&&r.sizeNavbars();for(var e=0;e<f.length;e++)f[e]()},r.orientationchange=function(){r.device&&r.device.minimalUi&&(90!==window.orientation&&-90!==window.orientation||(document.body.scrollTop=0)),t()},r.initResize=function(){i(window).on("resize",r.resize),i(window).on("orientationchange",r.orientationchange),r.getSize()},r.formsData={},r.formStoreData=function(e,a){r.formsData[e]=a,r.ls["f7form-"+e]=JSON.stringify(a)},r.formDeleteData=function(e){r.formsData[e]&&(r.formsData[e]="",delete r.formsData[e]),r.ls["f7form-"+e]&&(r.ls["f7form-"+e]="",r.ls.removeItem("f7form-"+e))},r.formGetData=function(e){return r.ls["f7form-"+e]?JSON.parse(r.ls["f7form-"+e]):r.formsData[e]?r.formsData[e]:void 0},r.formToData=function(e){if(e=i(e),1!==e.length)return!1;var a={},t=["submit","image","button","file"],r=[];return e.find("input, select, textarea").each(function(){var n=i(this),s=n.attr("name"),o=n.attr("type"),l=this.nodeName.toLowerCase();if(!(t.indexOf(o)>=0)&&!(r.indexOf(s)>=0)&&s)if("select"===l&&n.prop("multiple"))r.push(s),a[s]=[],e.find('select[name="'+s+'"] option').each(function(){this.selected&&a[s].push(this.value)});else switch(o){case"checkbox":r.push(s),a[s]=[],e.find('input[name="'+s+'"]').each(function(){this.checked&&a[s].push(this.value)});break;case"radio":r.push(s),e.find('input[name="'+s+'"]').each(function(){this.checked&&(a[s]=this.value)});break;default:a[s]=n.val()}}),e.trigger("formToJSON formToData form:todata",{formData:a}),a},r.formToJSON=r.formToData,r.formFromData=function(e,a){if(e=i(e),1!==e.length)return!1;var t=["submit","image","button","file"],r=[];e.find("input, select, textarea").each(function(){var n=i(this),s=n.attr("name"),o=n.attr("type"),l=this.nodeName.toLowerCase();if(void 0!==a[s]&&null!==a[s]&&!(t.indexOf(o)>=0)&&!(r.indexOf(s)>=0)&&s){if("select"===l&&n.prop("multiple"))r.push(s),e.find('select[name="'+s+'"] option').each(function(){a[s].indexOf(this.value)>=0?this.selected=!0:this.selected=!1});else switch(o){case"checkbox":r.push(s),e.find('input[name="'+s+'"]').each(function(){a[s].indexOf(this.value)>=0?this.checked=!0:this.checked=!1});break;case"radio":r.push(s),e.find('input[name="'+s+'"]').each(function(){a[s]===this.value?this.checked=!0:this.checked=!1});break;default:n.val(a[s])}"select"!==l&&"input"!==l&&"textarea"!==l||n.trigger("change")}}),e.trigger("formFromJSON formFromData form:fromdata",{formData:a})},r.formFromJSON=r.formFromData,r.initFormsStorage=function(e){function a(){var e=i(this),a=e[0].id;if(a){var t=r.formToData(e);t&&(r.formStoreData(a,t),e.trigger("store form:storedata",{data:t}))}}function t(){n.off("change submit",a),e.off("page:beforeremove",t)}e=i(e);var n=e.find("form.store-data");0!==n.length&&(n.each(function(){var e=this.getAttribute("id");if(e){var a=r.formGetData(e);a&&r.formFromData(this,a)}}),n.on("change submit",a),e.on("page:beforeremove",t))},i(document).on("submit change","form.ajax-submit, form.ajax-submit-onchange",function(e){var a=i(this);if("change"!==e.type||a.hasClass("ajax-submit-onchange")){"submit"===e.type&&e.preventDefault();var t=(a.attr("method")||"GET").toUpperCase(),n=a.prop("enctype")||a.attr("enctype"),s=a.attr("action");if(s){var o;o="POST"===t?new FormData(a[0]):i.serializeObject(r.formToJSON(a[0]));var l=i.ajax({method:t,url:s,contentType:n,data:o,beforeSend:function(e){a.trigger("beforeSubmit form:beforesend",{data:o,xhr:e})},error:function(e){a.trigger("submitError form:error",{data:o,xhr:e})},success:function(e){a.trigger("submitted form:success",{data:e,xhr:l})}})}}}),r.resizeTextarea=function(e){if(e=i(e),e.hasClass("resizable")){e.css({height:""});var a=e[0].offsetHeight,t=a-e[0].clientHeight,r=e[0].scrollHeight;if(r+t>a){var n=r+t;e.css("height",n+"px")}}},r.resizableTextarea=function(e){function a(){clearTimeout(t),t=setTimeout(function(){r.resizeTextarea(e)},0)}if(e=i(e),0!==e.length){var t;return e[0].f7DestroyResizableTextarea=function(){e.off("change keydown keypress keyup paste cut",a)},e.on("change keydown keypress keyup paste cut",a)}},r.destroyResizableTextarea=function(e){e=i(e),e.length>0&&e.is("textarea")&&e[0].f7DestroyResizableTextarea?e[0].f7DestroyResizableTextarea():e.length>0&&e.find("textarea.resiable").each(function(){var e=this;e.f7DestroyResizableTextarea&&e.f7DestroyResizableTextarea()})},r.initPageResizableTextarea=function(e){e=i(e),e.find("textarea.resizable").each(function(){r.resizableTextarea(this)})},r.initPageMaterialInputs=function(e){e=i(e);e.find("textarea.resizable");e.find(".item-input").each(function(){var e=i(this),a=["checkbox","button","submit","range","radio","image"];e.find("input, select, textarea").each(function(){var t=i(this);a.indexOf(t.attr("type"))<0&&(e.addClass("item-input-field"),""!==t.val().trim()&&t.parents(".item-input, .input-field").add(t.parents(".item-inner")).addClass("not-empty-state"))}),e.parents(".input-item, .inputs-list").length>0||e.parents(".list-block").eq(0).addClass("inputs-list")})},r.initMaterialWatchInputs=function(){function e(e){var a=i(this),t=a.attr("type");if(!(r.indexOf(t)>=0)){a.add(a.parents(".item-input, .input-field")).add(a.parents(".item-inner").eq(0)).removeClass("not-empty-state").addClass("focus-state")}}function a(e){var a=i(this),t=a.val(),n=a.attr("type");if(!(r.indexOf(n)>=0)){var s=a.add(a.parents(".item-input, .input-field")).add(a.parents(".item-inner").eq(0));s.removeClass("focus-state"),t&&""!==t.trim()?s.removeClass("focus-state").addClass("not-empty-state"):s.removeClass("not-empty-state")}}function t(e){var a=i(this),t=a.val(),n=a.attr("type");if(!(r.indexOf(n)>=0)){var s=a.add(a.parents(".item-input, .input-field")).add(a.parents(".item-inner").eq(0));0!==s.length&&(t&&"string"==typeof t&&""!==t.trim()||Array.isArray(t)&&t.length>0?s.addClass("not-empty-state"):s.removeClass("not-empty-state"))}}var r=["checkbox","button","submit","range","radio","image"];i(document).on("change","input, textarea, select",t,!0),i(document).on("focus","input, textarea, select",e,!0),i(document).on("blur","input, textarea, select",a,!0)},r.pushStateQueue=[],r.pushStateClearQueue=function(){if(0!==r.pushStateQueue.length){var e,a=r.pushStateQueue.pop();!0===r.params.pushStateNoAnimation&&(e=!1),"back"===a.action&&r.router.back(a.view,{animatePages:e}),"loadPage"===a.action&&r.router.load(a.view,{url:a.stateUrl,animatePages:e,pushState:!1}),"loadContent"===a.action&&r.router.load(a.view,{content:a.stateContent,animatePages:e,pushState:!1}),"loadPageName"===a.action&&r.router.load(a.view,{pageName:a.statePageName,url:a.stateUrl,animatePages:e,pushState:!1})}},r.initPushState=function(){function e(e){if(!a){var t=r.mainView;if(t){var n=e.state;if(n||(n={viewIndex:r.views.indexOf(t),url:t.history[0]}),!(n.viewIndex<0)){var i,s=r.views[n.viewIndex],o=n&&n.url||void 0,l=n&&n.content||void 0,p=n&&n.pageName||void 0;!0===r.params.pushStateNoAnimation&&(i=!1),o!==s.url&&(s.history.indexOf(o)>=0?s.allowPageChange?r.router.back(s,{url:void 0,animatePages:i,pushState:!1,preloadOnly:!1}):r.pushStateQueue.push({action:"back",view:s}):l?s.allowPageChange?r.router.load(s,{content:l,animatePages:i,pushState:!1}):r.pushStateQueue.unshift({action:"loadContent",stateContent:l,view:s}):p?s.allowPageChange?r.router.load(s,{pageName:p,url:o,animatePages:i,pushState:!1}):r.pushStateQueue.unshift({action:"loadPageName",statePageName:p,view:s}):s.allowPageChange?r.router.load(s,{url:o,animatePages:i,pushState:!1}):r.pushStateQueue.unshift({action:"loadPage",stateUrl:o,view:s}))}}}}var a=!0;i(window).on("load",function(){setTimeout(function(){a=!1},0)}),document.readyState&&"complete"===document.readyState&&(a=!1),i(window).on("popstate",e)},r.swiper=function(e,a){return new Swiper(e,a)},r.initPageSwiper=function(e){function a(a){function t(){a.destroy(),e.off("page:beforeremove",t)}e.on("page:beforeremove",t)}e=i(e);var t=e.find(".swiper-init, .tabs-swipeable-wrap");0!==t.length&&t.each(function(){var e,t,n=i(this);n.hasClass("tabs-swipeable-wrap")&&(n.addClass("swiper-container").children(".tabs").addClass("swiper-wrapper").children(".tab").addClass("swiper-slide"),e=n.children(".tabs").children(".tab.active").index()),t=n.data("swiper")?JSON.parse(n.data("swiper")):n.dataset(),void 0===t.initialSlide&&void 0!==e&&(t.initialSlide=e),n.hasClass("tabs-swipeable-wrap")&&(t.onSlideChangeStart=function(e){r.showTab(e.slides.eq(e.activeIndex))}),a(r.swiper(n[0],t))})},r.reinitPageSwiper=function(e){e=i(e);var a=e.find(".swiper-init, .tabs-swipeable-wrap");if(0!==a.length)for(var t=0;t<a.length;t++){var r=a[0].swiper;r&&r.update(!0)}};var g=function(e){var a=this,t={photos:[],initialSlide:0,spaceBetween:20,speed:300,zoom:!0,zoomMax:3,zoomMin:1,exposition:!0,expositionHideCaptions:!1,type:"standalone",navbar:!0,toolbar:!0,theme:"light",swipeToClose:!0,backLinkText:"Close",ofText:"of",loop:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingOnTransitionStart:!1,material:r.params.material,materialPreloaderSvg:r.params.materialPreloaderSvg,materialPreloaderHtml:r.params.materialPreloaderHtml};e=e||{},!e.backLinkText&&r.params.material&&(t.backLinkText="");for(var n in t)void 0===e[n]&&(e[n]=t[n]);e.maxZoom&&(e.zoomMax=e.maxZoom),e.minZoom&&(e.zoomMin=e.minZoom),a.params=e,a.params.iconsColorClass=a.params.iconsColor?"color-"+a.params.iconsColor:"dark"===a.params.theme?"color-white":"",a.params.preloaderColorClass="dark"===a.params.theme?"preloader-white":"";var o=a.params.photoTemplate||'<div class="photo-browser-slide swiper-slide"><span class="swiper-zoom-container"><img src="{{js "this.url || this"}}"></span></div>',l=a.params.lazyPhotoTemplate||'<div class="photo-browser-slide photo-browser-slide-lazy swiper-slide"><div class="preloader {{@root.preloaderColorClass}}">{{#if @root.material}}{{@root.materialPreloaderHtml}}{{/if}}</div><span class="swiper-zoom-container"><img data-src="{{js "this.url || this"}}" class="swiper-lazy"></span></div>',p=a.params.objectTemplate||'<div class="photo-browser-slide photo-browser-object-slide swiper-slide">{{js "this.html || this"}}</div>',d=a.params.captionTemplate||'<div class="photo-browser-caption" data-caption-index="{{@index}}">{{caption}}</div>',c=a.params.navbarTemplate||'<div class="navbar"><div class="navbar-inner"><div class="left sliding"><a href="#" class="link '+("popup"===e.type?"close-popup":"photo-browser-close-link")+' {{#unless backLinkText}}icon-only{{/unless}} {{js "this.type === \'page\' ? \'back\' : \'\'"}}"><i class="icon icon-back {{iconsColorClass}}"></i>{{#if backLinkText}}<span>{{backLinkText}}</span>{{/if}}</a></div><div class="center sliding"><span class="photo-browser-current"></span> <span class="photo-browser-of">{{ofText}}</span> <span class="photo-browser-total"></span></div><div class="right"></div></div></div>',m=a.params.toolbarTemplate||'<div class="toolbar tabbar"><div class="toolbar-inner"><a href="#" class="link photo-browser-prev"><i class="icon icon-prev {{iconsColorClass}}"></i></a><a href="#" class="link photo-browser-next"><i class="icon icon-next {{iconsColorClass}}"></i></a></div></div>',u=s.compile('<div class="photo-browser photo-browser-{{theme}}"><div class="view navbar-fixed toolbar-fixed">{{#unless material}}{{#if navbar}}'+c+'{{/if}}{{/unless}}<div class="page no-toolbar {{#unless navbar}}no-navbar{{/unless}} toolbar-fixed navbar-fixed" data-page="photo-browser-slides">{{#if material}}{{#if navbar}}'+c+"{{/if}}{{/if}}{{#if toolbar}}"+m+'{{/if}}<div class="photo-browser-captions photo-browser-captions-{{js "this.captionsTheme || this.theme"}}">{{#each photos}}{{#if caption}}'+d+"{{/if}}{{/each}}</div><div class=\"photo-browser-swiper-container swiper-container\"><div class=\"photo-browser-swiper-wrapper swiper-wrapper\">{{#each photos}}{{#js_compare \"this.html || ((typeof this === 'string' || this instanceof String) && (this.indexOf('<') >= 0 || this.indexOf('>') >= 0))\"}}"+p+"{{else}}{{#if @root.lazyLoading}}"+l+"{{else}}"+o+"{{/if}}{{/js_compare}}{{/each}}</div></div></div></div></div>")(a.params);a.activeIndex=a.params.initialSlide,a.openIndex=a.activeIndex,a.opened=!1,a.open=function(e){return void 0===e&&(e=a.activeIndex),e=parseInt(e,10),a.opened&&a.swiper?void a.swiper.slideTo(e):(a.opened=!0,a.openIndex=e,"standalone"===a.params.type&&r.root.append(u),"popup"===a.params.type&&(a.popup=r.popup('<div class="popup photo-browser-popup">'+u+"</div>"),i(a.popup).on("popup:closed",a.onPopupClose)),"page"===a.params.type?(i(document).once("page:beforeinit",a.onPageBeforeInit),i(document).once("page:beforeremove",a.onPageBeforeRemove),a.params.view||(a.params.view=r.mainView),void a.params.view.loadContent(u)):(a.layout(a.openIndex),void(a.params.onOpen&&a.params.onOpen(a))))},a.close=function(){a.opened=!1,a.swiperContainer&&0!==a.swiperContainer.length&&(a.params.onClose&&a.params.onClose(a),a.attachEvents(!0),"standalone"===a.params.type&&a.container.removeClass("photo-browser-in").addClass("photo-browser-out").animationEnd(function(){a.container.remove()}),a.swiper.destroy(),a.swiper=a.swiperContainer=a.swiperWrapper=a.slides=void 0)},a.onPopupClose=function(e){a.close(),i(a.popup).off("page:beforeinit",a.onPopupClose)},a.onPageBeforeInit=function(e){"photo-browser-slides"===e.detail.page.name&&(a.layout(a.openIndex),a.params.onOpen&&a.params.onOpen(a))},a.onPageBeforeRemove=function(e){"photo-browser-slides"===e.detail.page.name&&a.close()},a.onSliderTransitionStart=function(e){a.activeIndex=e.activeIndex;var t=e.activeIndex+1,r=e.slides.length;if(a.params.loop&&(r-=2,t-=e.loopedSlides,t<1&&(t=r+t),t>r&&(t-=r)),a.container.find(".photo-browser-current").text(t),a.container.find(".photo-browser-total").text(r),i(".photo-browser-prev, .photo-browser-next").removeClass("photo-browser-link-inactive"),e.isBeginning&&!a.params.loop&&i(".photo-browser-prev").addClass("photo-browser-link-inactive"),e.isEnd&&!a.params.loop&&i(".photo-browser-next").addClass("photo-browser-link-inactive"),a.captions.length>0){a.captionsContainer.find(".photo-browser-caption-active").removeClass("photo-browser-caption-active");var n=a.params.loop?e.slides.eq(e.activeIndex).attr("data-swiper-slide-index"):a.activeIndex;a.captionsContainer.find('[data-caption-index="'+n+'"]').addClass("photo-browser-caption-active")}var s=e.slides.eq(e.previousIndex).find("video");s.length>0&&"pause"in s[0]&&s[0].pause(),a.params.onTransitionStart&&a.params.onTransitionStart(e)},a.onSliderTransitionEnd=function(e){a.params.onTransitionEnd&&a.params.onTransitionEnd(e)},a.layout=function(e){"page"===a.params.type?a.container=i(".photo-browser-swiper-container").parents(".view"):a.container=i(".photo-browser"),"standalone"===a.params.type&&(a.container.addClass("photo-browser-in"),r.sizeNavbars(a.container)),a.swiperContainer=a.container.find(".photo-browser-swiper-container"),a.swiperWrapper=a.container.find(".photo-browser-swiper-wrapper"),a.slides=a.container.find(".photo-browser-slide"),a.captionsContainer=a.container.find(".photo-browser-captions"),a.captions=a.container.find(".photo-browser-caption");var t={nextButton:a.params.nextButton||".photo-browser-next",prevButton:a.params.prevButton||".photo-browser-prev",indexButton:a.params.indexButton,initialSlide:e,spaceBetween:a.params.spaceBetween,speed:a.params.speed,loop:a.params.loop,lazyLoading:a.params.lazyLoading,lazyLoadingInPrevNext:a.params.lazyLoadingInPrevNext,lazyLoadingOnTransitionStart:a.params.lazyLoadingOnTransitionStart,preloadImages:!a.params.lazyLoading,zoom:a.params.zoom,
zoomMax:a.params.zoomMax,zoomMin:a.params.zoomMin,onTap:function(e,t){a.params.onTap&&a.params.onTap(e,t)},onClick:function(e,t){a.params.exposition&&a.toggleExposition(),a.params.onClick&&a.params.onClick(e,t)},onDoubleTap:function(e,t){a.params.onDoubleTap&&a.params.onDoubleTap(e,t)},onTransitionStart:function(e){a.onSliderTransitionStart(e)},onTransitionEnd:function(e){a.onSliderTransitionEnd(e)},onSlideChangeStart:a.params.onSlideChangeStart,onSlideChangeEnd:a.params.onSlideChangeEnd,onLazyImageLoad:function(e,t,r){a.params.onLazyImageLoad&&a.params.onLazyImageLoad(a,t,r)},onLazyImageReady:function(e,t,r){i(t).removeClass("photo-browser-slide-lazy"),a.params.onLazyImageReady&&a.params.onLazyImageReady(a,t,r)}};a.params.swipeToClose&&"page"!==a.params.type&&(t.onTouchStart=a.swipeCloseTouchStart,t.onTouchMoveOpposite=a.swipeCloseTouchMove,t.onTouchEnd=a.swipeCloseTouchEnd),a.swiper=r.swiper(a.swiperContainer,t),0===e&&a.onSliderTransitionStart(a.swiper),a.attachEvents()},a.attachEvents=function(e){var t=e?"off":"on";a.container.find(".photo-browser-close-link")[t]("click",a.close)},a.exposed=!1,a.toggleExposition=function(){a.container&&a.container.toggleClass("photo-browser-exposed"),a.params.expositionHideCaptions&&a.captionsContainer.toggleClass("photo-browser-captions-exposed"),a.exposed=!a.exposed},a.enableExposition=function(){a.container&&a.container.addClass("photo-browser-exposed"),a.params.expositionHideCaptions&&a.captionsContainer.addClass("photo-browser-captions-exposed"),a.exposed=!0},a.disableExposition=function(){a.container&&a.container.removeClass("photo-browser-exposed"),a.params.expositionHideCaptions&&a.captionsContainer.removeClass("photo-browser-captions-exposed"),a.exposed=!1};var h,f,g,v,b,w=!1,C=!0,y=!1;return a.swipeCloseTouchStart=function(e,a){C&&(w=!0)},a.swipeCloseTouchMove=function(e,t){if(w){y||(y=!0,f="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,v=a.swiper.slides.eq(a.swiper.activeIndex),b=(new Date).getTime()),t.preventDefault(),g="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,h=f-g;var r=1-Math.abs(h)/300;v.transform("translate3d(0,"+-h+"px,0)"),a.swiper.container.css("opacity",r).transition(0)}},a.swipeCloseTouchEnd=function(e,t){if(w=!1,!y)return void(y=!1);y=!1,C=!1;var n=Math.abs(h),i=(new Date).getTime()-b;if(i<300&&n>20||i>=300&&n>100)return void setTimeout(function(){"standalone"===a.params.type&&a.close(),"popup"===a.params.type&&r.closeModal(a.popup),a.params.onSwipeToClose&&a.params.onSwipeToClose(a),C=!0},0);0!==n?v.addClass("transitioning").transitionEnd(function(){C=!0,v.removeClass("transitioning")}):C=!0,a.swiper.container.css("opacity","").transition(""),v.transform("")},a};r.photoBrowser=function(e){return new g(e)};var v=function(e){function a(e){var a=o.input.val();o.params.source&&o.params.source(o,a,function(e){var t="",r=o.params.limit?Math.min(o.params.limit,e.length):e.length;o.items=e;var n,i;for(o.params.highlightMatches&&(a=a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&"),i=new RegExp("("+a+")","i")),n=0;n<r;n++){var s="object"==typeof e[n]?e[n][o.params.valueProperty]:e[n],l="object"!=typeof e[n]?e[n]:e[n][o.params.textProperty];t+=o.dropdownItemTemplate({value:s,text:o.params.highlightMatches?l.replace(i,"<b>$1</b>"):l})}""===t&&""===a&&o.params.dropdownPlaceholderText&&(t+=o.dropdownPlaceholderTemplate({text:o.params.dropdownPlaceholderText})),o.dropdown.find("ul").html(t)})}function t(e){for(var a,t=i(this),r=0;r<o.items.length;r++){var n="object"==typeof o.items[r]?o.items[r][o.params.valueProperty]:o.items[r],s=t.attr("data-value");n!==s&&1*n!=1*s||(a=o.items[r])}o.params.updateInputValueOnSelect&&(o.input.val("object"==typeof a?a[o.params.valueProperty]:a),o.input.trigger("input change")),o.params.onChange&&o.params.onChange(o,a),o.close()}function n(e){var a=i(e.target);a.is(o.input[0])||o.dropdown&&a.parents(o.dropdown[0]).length>0||o.close()}var o=this,l={popupCloseText:"Close",backText:"Back",searchbarPlaceholderText:"Search...",searchbarCancelText:"Cancel",openWithAnimation:!0,autoFocus:!1,openIn:"page",backOnSelect:!1,notFoundText:"Nothing found",requestSourceOnOpen:!1,valueProperty:"id",textProperty:"text",highlightMatches:!0,updateInputValueOnSelect:!0,expandInput:!1,preloaderColor:!1,preloader:!1};e=e||{};for(var p in l)void 0===e[p]&&(e[p]=l[p]);o.params=e,o.params.opener&&(o.opener=i(o.params.opener));var d=o.params.view;if(!o.params.view&&o.opener&&o.opener.length){if(d=o.opener.parents("."+r.params.viewClass),0===d.length)return;d=d[0].f7View}if(!o.params.input||(o.input=i(o.params.input),0!==o.input.length||"dropdown"!==o.params.openIn)){o.value=o.params.value||[],o.id=(new Date).getTime(),o.inputType=o.params.multiple?"checkbox":"radio",o.inputName=o.inputType+"-"+o.id;var c=r.params.material;o.params.backOnSelect;if("dropdown"!==o.params.openIn){o.itemTemplate=s.compile(o.params.itemTemplate||'<li><label class="label-{{inputType}} item-content"><input type="{{inputType}}" name="{{inputName}}" value="{{value}}" {{#if selected}}checked{{/if}}>{{#if material}}<div class="item-media"><i class="icon icon-form-{{inputType}}"></i></div><div class="item-inner"><div class="item-title">{{text}}</div></div>{{else}}{{#if checkbox}}<div class="item-media"><i class="icon icon-form-checkbox"></i></div>{{/if}}<div class="item-inner"><div class="item-title">{{text}}</div></div>{{/if}}</label></li>');var m=o.params.pageTitle||"";!m&&o.opener&&o.opener.length&&(m=o.opener.find(".item-title").text());var u,h,f="autocomplete-"+o.inputName,g=o.params.navbarTheme,v=o.params.formTheme,b="",w="";o.navbarTemplate=s.compile(o.params.navbarTemplate||'<div class="navbar no-shadow {{#if navbarTheme}}theme-{{navbarTheme}}{{/if}}"><div class="navbar-inner"><div class="left sliding">{{#if material}}<a href="#" class="link {{#if inPopup}}close-popup{{else}}back{{/if}} icon-only" {{#unless animated}}data-animate-pages="false"{{/unless}}><i class="icon icon-back"></i></a>{{else}}<a href="#" class="link {{#if inPopup}}close-popup{{else}}back{{/if}}" {{#unless animated}}data-animate-pages="false"{{/unless}}><i class="icon icon-back"></i>{{#if inPopup}}<span>{{popupCloseText}}</span>{{else}}<span>{{backText}}</span>{{/if}}</a>{{/if}}</div><div class="center sliding">{{pageTitle}}</div>{{#if preloader}}<div class="right"><div class="autocomplete-preloader preloader {{#if preloaderColor}}preloader-{{preloaderColor}}{{/if}}"></div></div>{{/if}}</div></div>'),u=o.navbarTemplate({pageTitle:m,backText:o.params.backText,popupCloseText:o.params.popupCloseText,openIn:o.params.openIn,navbarTheme:g,inPopup:"popup"===o.params.openIn,inPage:"page"===o.params.openIn,material:c,preloader:o.params.preloader,preloaderColor:o.params.preloaderColor,animated:o.params.openWithAnimation}),"page"===o.params.openIn?(h="static",o.opener?(o.opener.parents(".navbar-through").length>0&&(h="through"),o.opener.parents(".navbar-fixed").length>0&&(h="fixed"),w=o.opener.parents(".page").hasClass("no-toolbar")?"no-toolbar":"",b=o.opener.parents(".page").hasClass("no-navbar")?"no-navbar":"navbar-"+h):d.container&&((i(d.container).hasClass("navbar-through")||i(d.container).find(".navbar-through").length>0)&&(h="through"),(i(d.container).hasClass("navbar-fixed")||i(d.container).find(".navbar-fixed").length>0)&&(h="fixed"),w=i(d.activePage.container).hasClass("no-toolbar")?"no-toolbar":"",b=i(d.activePage.container).hasClass("no-navbar")?"no-navbar":"navbar-"+h)):h="fixed";var C='<form class="searchbar"><div class="searchbar-input"><input type="search" placeholder="'+o.params.searchbarPlaceholderText+'"><a href="#" class="searchbar-clear"></a></div>'+(c?"":'<a href="#" class="searchbar-cancel">'+o.params.searchbarCancelText+"</a>")+'</form><div class="searchbar-overlay"></div>',y=("through"===h?u:"")+'<div class="pages"><div data-page="'+f+'" class="page autocomplete-page '+b+" "+w+'">'+("fixed"===h?u:"")+C+'<div class="page-content">'+("static"===h?u:"")+'<div class="list-block autocomplete-found autocomplete-list-'+o.id+" "+(v?"theme-"+v:"")+'"><ul></ul></div><div class="list-block autocomplete-not-found"><ul><li class="item-content"><div class="item-inner"><div class="item-title">'+o.params.notFoundText+'</div></div></li></ul></div><div class="list-block autocomplete-values"><ul></ul></div></div></div></div>'}else o.dropdownItemTemplate=s.compile(o.params.dropdownItemTemplate||'<li><label class="{{#unless placeholder}}label-radio{{/unless}} item-content" data-value="{{value}}"><div class="item-inner"><div class="item-title">{{text}}</div></div></label></li>'),o.dropdownPlaceholderTemplate=s.compile(o.params.dropdownPlaceholderTemplate||'<li class="autocomplete-dropdown-placeholder"><div class="item-content"><div class="item-inner"><div class="item-title">{{text}}</div></div></label></li>'),o.dropdownTemplate=s.compile(o.params.dropdownTemplate||'<div class="autocomplete-dropdown"><div class="autocomplete-dropdown-inner"><div class="list-block"><ul></ul></div></div>{{#if preloader}}<div class="autocomplete-preloader preloader {{#if preloaderColor}}preloader-{{preloaderColor}}{{/if}}">{{#if material}}{{materialPreloaderHtml}}{{/if}}</div>{{/if}}</div>');return o.popup=void 0,o.dropdown=void 0,o.positionDropDown=function(){var e=o.input.parents(".list-block"),a=o.input.parents(".page-content"),t=(parseInt(a.css("padding-top"),10),parseInt(a.css("padding-top"),10)),r=e.length>0?e.offset().left-e.parent().offset().left:0,n=o.input.offset().left-(e.length>0?e.offset().left:0),i=o.input.offset().top-(a.offset().top-a[0].scrollTop),s=a[0].scrollHeight-t-(i+a[0].scrollTop)-o.input[0].offsetHeight;o.dropdown.css({left:(e.length>0?r:n)+"px",top:i+a[0].scrollTop+o.input[0].offsetHeight+"px",width:(e.length>0?e[0].offsetWidth:o.input[0].offsetWidth)+"px"}),o.dropdown.children(".autocomplete-dropdown-inner").css({maxHeight:s+"px",paddingLeft:e.length>0&&!o.params.expandInput?n-(c?16:15)+"px":""})},o.pageInit=function(e){function a(e){if(o.params.source){var a,t;o.params.source(o,e,function(r){var n="",i=o.params.limit?Math.min(o.params.limit,r.length):r.length;for(o.items=r,a=0;a<i;a++){var l=!1,p="object"==typeof r[a]?r[a][o.params.valueProperty]:r[a];for(t=0;t<o.value.length;t++){var d="object"==typeof o.value[t]?o.value[t][o.params.valueProperty]:o.value[t];d!==p&&1*d!=1*p||(l=!0)}n+=o.itemTemplate({value:p,text:"object"!=typeof r[a]?r[a]:r[a][o.params.textProperty],inputType:o.inputType,id:o.id,inputName:o.inputName,selected:l,checkbox:"checkbox"===o.inputType,material:c})}s.find(".autocomplete-found ul").html(n),0===r.length?0!==e.length?(s.find(".autocomplete-not-found").show(),s.find(".autocomplete-found, .autocomplete-values").hide()):(s.find(".autocomplete-values").show(),s.find(".autocomplete-found, .autocomplete-not-found").hide()):(s.find(".autocomplete-found").show(),s.find(".autocomplete-not-found, .autocomplete-values").hide())})}}function t(){var e,a="";for(e=0;e<o.value.length;e++)a+=o.itemTemplate({value:"object"==typeof o.value[e]?o.value[e][o.params.valueProperty]:o.value[e],text:"object"==typeof o.value[e]?o.value[e][o.params.textProperty]:o.value[e],inputType:o.inputType,id:o.id,inputName:o.inputName+"-checked",checkbox:"checkbox"===o.inputType,material:c,selected:!0});s.find(".autocomplete-values ul").html(a)}var n=e.detail.page;if(o.page=i(n.container),o.pageData=n,n.name===f){var s=i(n.container),l=r.searchbar(s.find(".searchbar"),{customSearch:!0,onSearch:function(e,t){0===t.query.length&&e.active?e.overlay.addClass("searchbar-overlay-active"):e.overlay.removeClass("searchbar-overlay-active"),a(t.query)}});o.searchbar=l,!o.params.multiple&&o.params.backOnSelect&&s.once("click",".list-block label",function(){"popup"===o.params.openIn?r.closeModal(o.popup):d.router.back({animatePages:o.params.openWithAnimation})}),s.on("change",'input[type="radio"], input[type="checkbox"]',function(){var e,a,r,n,s=this,l=s.value,p=(i(s).parents("li").find(".item-title").text(),i(s).parents(".autocomplete-values").length>0);if(p){if("checkbox"===o.inputType&&!s.checked){for(e=0;e<o.value.length;e++)(n="string"==typeof o.value[e]?o.value[e]:o.value[e][o.params.valueProperty])!==l&&1*n!=1*l||o.value.splice(e,1);t(),o.params.onChange&&o.params.onChange(o,o.value)}}else{for(e=0;e<o.items.length;e++)(r="string"==typeof o.items[e]?o.items[e]:o.items[e][o.params.valueProperty])!==l&&1*r!=1*l||(a=o.items[e]);if("radio"===o.inputType)o.value=[a];else if(s.checked)o.value.push(a);else for(e=0;e<o.value.length;e++)(n="string"==typeof o.value[e]?o.value[e]:o.value[e][o.params.valueProperty])!==l&&1*n!=1*l||o.value.splice(e,1);t(),("radio"===o.inputType&&s.checked||"checkbox"===o.inputType)&&o.params.onChange&&o.params.onChange(o,o.value)}}),t(),o.params.requestSourceOnOpen&&a(""),o.params.onOpen&&o.params.onOpen(o)}},o.showPreloader=function(){"dropdown"===o.params.openIn?o.dropdown&&o.dropdown.find(".autocomplete-preloader").addClass("autocomplete-preloader-visible"):i(".autocomplete-preloader").addClass("autocomplete-preloader-visible")},o.hidePreloader=function(){"dropdown"===o.params.openIn?o.dropdown&&o.dropdown.find(".autocomplete-preloader").removeClass("autocomplete-preloader-visible"):i(".autocomplete-preloader").removeClass("autocomplete-preloader-visible")},o.autoFocus=function(e){var a=this;setTimeout(function(){i(a).find("input[type=search]").focus()},0)},o.open=function(){if(!o.opened)if(o.opened=!0,"dropdown"===o.params.openIn){o.dropdown||(o.dropdown=i(o.dropdownTemplate({preloader:o.params.preloader,preloaderColor:o.params.preloaderColor,material:c,materialPreloaderHtml:r.params.materialPreloaderHtml})),o.dropdown.on("click","label",t));var e=o.input.parents(".list-block");e.length&&o.input.parents(".item-content").length>0&&o.params.expandInput&&o.input.parents(".item-content").addClass("item-content-dropdown-expand"),o.positionDropDown(),o.input.parents(".page-content").append(o.dropdown),o.dropdown.addClass("autocomplete-dropdown-in"),o.input.trigger("input"),r.onResize(o.positionDropDown),o.params.onOpen&&o.params.onOpen(o)}else i(document).once("page:init",".autocomplete-page",o.pageInit),"popup"===o.params.openIn?(o.popup=r.popup('<div class="popup autocomplete-popup autocomplete-popup-'+o.inputName+'"><div class="view navbar-fixed">'+y+"</div></div>",!0,o.params.openWithAnimation),o.popup=i(o.popup),o.params.autoFocus&&(o.params.openWithAnimation?o.popup.once("popup:opened",o.autoFocus):o.autoFocus.bind(o.popup)()),o.popup.once("popup:closed",function(){o.popup=void 0,o.opened=!1,o.params.onClose&&o.params.onClose(o)})):(o.params.autoFocus&&i(document).once(o.params.openWithAnimation?"page:afteranimation":"page:init",".autocomplete-page",o.autoFocus),d.router.load({content:y,animatePages:o.params.openWithAnimation}),i(document).once("page:back",".autocomplete-page",function(){o.opened=!1,o.params.onClose&&o.params.onClose(o)}))},o.close=function(e){if(o.opened){if("dropdown"===o.params.openIn){if(e&&"blur"===e.type&&o.dropdown.find("label.active-state").length>0)return;o.dropdown.removeClass("autocomplete-dropdown-in").remove(),o.input.parents(".item-content-dropdown-expand").removeClass("item-content-dropdown-expand"),o.opened=!1,r.offResize(o.positionDropDown),o.params.onClose&&o.params.onClose(o)}"popup"===o.params.openIn&&o.popup&&r.closeModal(o.popup)}},o.initEvents=function(e){var t=e?"off":"on";"dropdown"!==o.params.openIn&&o.opener&&o.opener[t]("click",o.open),"dropdown"===o.params.openIn&&o.input&&(o.input[t]("focus",o.open),o.input[t]("input",a),r.device.android?i("html")[t]("click",n):o.input[t]("blur",o.close)),e&&o.dropdown&&(o.dropdown=null)},o.init=function(){o.initEvents()},o.destroy=function(){o.initEvents(!0),o=null},o.init(),o}};r.autocomplete=function(e){return new v(e)};var b=function(e){function a(){var e=!1;return p.params.convertToPopover||p.params.onlyInPopover?(!p.inline&&p.params.input&&(p.params.onlyInPopover?e=!0:r.device.ios?e=!!r.device.ipad:r.width>=768&&(e=!0)),e):e}function t(){return!!(p.opened&&p.container&&p.container.length>0&&p.container.parents(".popover").length>0)}function n(){if(p.opened)for(var e=0;e<p.cols.length;e++)p.cols[e].divider||(p.cols[e].calcSize(),p.cols[e].setValue(p.cols[e].value,0,!1))}function s(e){if(e.preventDefault(),!p.opened&&(p.open(),p.params.scrollToInput&&!a())){var t=p.input.parents(".page-content");if(0===t.length)return;var r,n=parseInt(t.css("padding-top"),10),i=parseInt(t.css("padding-bottom"),10),s=t[0].offsetHeight-n-p.container.height(),o=t[0].scrollHeight-n-p.container.height(),l=p.input.offset().top-n+p.input[0].offsetHeight;if(l>s){var d=t.scrollTop()+l-s;d+s>o&&(r=d+s-o+i,s===o&&(r=p.container.height()),t.css({"padding-bottom":r+"px"})),t.scrollTop(d,300)}}}function o(e){t()||(p.input&&p.input.length>0?e.target!==p.input[0]&&0===i(e.target).parents(".picker-modal").length&&p.close():0===i(e.target).parents(".picker-modal").length&&p.close())}function l(){p.opened=!1,p.input&&p.input.length>0&&(p.input.parents(".page-content").css({"padding-bottom":""}),r.params.material&&p.input.trigger("blur")),p.params.onClose&&p.params.onClose(p),p.container.find(".picker-items-col").each(function(){p.destroyPickerCol(this)})}var p=this,d={updateValuesOnMomentum:!1,updateValuesOnTouchmove:!0,rotateEffect:!1,momentumRatio:7,freeMode:!1,closeByOutsideClick:!0,scrollToInput:!0,inputReadOnly:!0,convertToPopover:!0,onlyInPopover:!1,toolbar:!0,toolbarCloseText:"Done",toolbarTemplate:'<div class="toolbar"><div class="toolbar-inner"><div class="left"></div><div class="right"><a href="#" class="link close-picker">{{closeText}}</a></div></div></div>'};e=e||{};for(var c in d)void 0===e[c]&&(e[c]=d[c]);p.params=e,p.cols=[],p.initialized=!1,p.inline=!!p.params.container;var m=r.device.ios||navigator.userAgent.toLowerCase().indexOf("safari")>=0&&navigator.userAgent.toLowerCase().indexOf("chrome")<0&&!r.device.android;return p.setValue=function(e,a){var t=0;if(0===p.cols.length)return p.value=e,void p.updateValue(e);for(var r=0;r<p.cols.length;r++)p.cols[r]&&!p.cols[r].divider&&(p.cols[r].setValue(e[t],a),t++)},p.updateValue=function(e){var a,t,r=e||[],n=[];if(0===p.cols.length){var s=p.params.cols.filter(function(e){return!e.divider});for(a=0;a<s.length;a++)t=s[a],void 0!==t.displayValues&&void 0!==t.values&&-1!==t.values.indexOf(r[a])?n.push(t.displayValues[t.values.indexOf(r[a])]):n.push(r[a])}else for(a=0;a<p.cols.length;a++)p.cols[a].divider||(r.push(p.cols[a].value),n.push(p.cols[a].displayValue));r.indexOf(void 0)>=0||(p.value=r,p.displayValue=n,p.params.onChange&&p.params.onChange(p,p.value,p.displayValue),p.input&&p.input.length>0&&(i(p.input).val(p.params.formatValue?p.params.formatValue(p,p.value,p.displayValue):p.value.join(" ")),i(p.input).trigger("change")))},p.initPickerCol=function(e,a){function t(){w=i.requestAnimationFrame(function(){u.updateItems(void 0,void 0,0),t()})}function n(e){y||C||(e.preventDefault(),C=!0,x=T="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,k=(new Date).getTime(),D=!0,S=I=i.getTranslate(u.wrapper[0],"y"))}function s(e){if(C){e.preventDefault(),D=!1,T="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,y||(i.cancelAnimationFrame(w),y=!0,S=I=i.getTranslate(u.wrapper[0],"y"),u.wrapper.transition(0));I=S+(T-x),M=void 0,I<v&&(I=v-Math.pow(v-I,.8),M="min"),I>b&&(I=b+Math.pow(I-b,.8),M="max"),u.wrapper.transform("translate3d(0,"+I+"px,0)"),u.updateItems(void 0,I,0,p.params.updateValuesOnTouchmove),O=I-E||I,L=(new Date).getTime(),E=I}}function o(e){if(!C||!y)return void(C=y=!1);C=y=!1,u.wrapper.transition(""),M&&("min"===M?u.wrapper.transform("translate3d(0,"+v+"px,0)"):u.wrapper.transform("translate3d(0,"+b+"px,0)")),P=(new Date).getTime();var a;P-k>300?a=I:(Math.abs(O/(P-L)),a=I+O*p.params.momentumRatio),a=Math.max(Math.min(a,b),v);var r=-Math.floor((a-b)/f);p.params.freeMode||(a=-r*f+b),u.wrapper.transform("translate3d(0,"+parseInt(a,10)+"px,0)"),u.updateItems(r,a,"",!0),p.params.updateValuesOnMomentum&&(t(),u.wrapper.transitionEnd(function(){i.cancelAnimationFrame(w)})),setTimeout(function(){D=!0},100)}function l(e){if(D){i.cancelAnimationFrame(w);var a=i(this).attr("data-picker-value");u.setValue(a)}}var d=i(e),c=d.index(),u=p.cols[c];if(!u.divider){u.container=d,u.wrapper=u.container.find(".picker-items-col-wrapper"),u.items=u.wrapper.find(".picker-item");var h,f,g,v,b;u.replaceValues=function(e,a){u.destroyEvents(),u.values=e,u.displayValues=a;var t=p.columnHTML(u,!0);u.wrapper.html(t),u.items=u.wrapper.find(".picker-item"),u.calcSize(),u.setValue(u.values[0],0,!0),u.initEvents()};u.calcSize=function(){p.params.rotateEffect&&(u.container.removeClass("picker-items-col-absolute"),u.width||u.container.css({width:""}));var e,a;e=0,a=u.container[0].offsetHeight,h=u.wrapper[0].offsetHeight,f=u.items[0].offsetHeight,g=f*u.items.length,v=a/2-g+f/2,b=a/2-f/2,u.width&&(e=u.width,parseInt(e,10)===e&&(e+="px"),u.container.css({width:e})),p.params.rotateEffect&&(u.width||(u.items.each(function(){var a=i(this).children("span");e=Math.max(e,a[0].offsetWidth)}),u.container.css({width:e+2+"px"})),u.container.addClass("picker-items-col-absolute"))},u.calcSize(),u.wrapper.transform("translate3d(0,"+b+"px,0)").transition(0);var w;u.setValue=function(e,a,r){void 0===a&&(a="");var n=u.wrapper.find('.picker-item[data-picker-value="'+e+'"]').index();if(void 0!==n&&-1!==n){var s=-n*f+b;u.wrapper.transition(a),u.wrapper.transform("translate3d(0,"+s+"px,0)"),p.params.updateValuesOnMomentum&&u.activeIndex&&u.activeIndex!==n&&(i.cancelAnimationFrame(w),u.wrapper.transitionEnd(function(){i.cancelAnimationFrame(w)}),t()),u.updateItems(n,s,a,r)}},u.updateItems=function(e,a,t,r){void 0===a&&(a=i.getTranslate(u.wrapper[0],"y")),void 0===e&&(e=-Math.round((a-b)/f)),e<0&&(e=0),e>=u.items.length&&(e=u.items.length-1);var n=u.activeIndex;u.activeIndex=e,u.wrapper.find(".picker-selected").removeClass("picker-selected"),u.items.transition(t);var s=u.items.eq(e).addClass("picker-selected").transform("");if(p.params.rotateEffect){Math.floor((a-b)/f);u.items.each(function(){var e=i(this),t=e.index()*f,r=b-a,n=t-r,s=n/f,o=Math.ceil(u.height/f/2)+1,l=-18*s;l>180&&(l=180),l<-180&&(l=-180),Math.abs(s)>o?e.addClass("picker-item-far"):e.removeClass("picker-item-far"),e.transform("translate3d(0, "+(-a+b)+"px, "+(m?-110:0)+"px) rotateX("+l+"deg)")})}(r||void 0===r)&&(u.value=s.attr("data-picker-value"),u.displayValue=u.displayValues?u.displayValues[e]:u.value,n!==e&&(u.onChange&&u.onChange(p,u.value,u.displayValue),p.updateValue()))},a&&u.updateItems(0,b,0);var C,y,x,T,k,P,S,M,I,E,O,L,D=!0;u.initEvents=function(e){var a=e?"off":"on",t=!!r.support.passiveListener&&{passive:!1,capture:!1};u.container[a](r.touchEvents.start,n,t),u.container[a](r.touchEvents.move,s,t),u.container[a](r.touchEvents.end,o,t),u.items[a]("click",l)},u.destroyEvents=function(){u.initEvents(!0)},u.container[0].f7DestroyPickerCol=function(){u.destroyEvents()},u.initEvents()}},p.destroyPickerCol=function(e){e=i(e),"f7DestroyPickerCol"in e[0]&&e[0].f7DestroyPickerCol()},r.onResize(n),p.columnHTML=function(e,a){var t="",r="";if(e.divider)r+='<div class="picker-items-col picker-items-col-divider '+(e.textAlign?"picker-items-col-"+e.textAlign:"")+" "+(e.cssClass||"")+'">'+e.content+"</div>";else{for(var n=0;n<e.values.length;n++)t+='<div class="picker-item" data-picker-value="'+e.values[n]+'"><span>'+(e.displayValues?e.displayValues[n]:e.values[n])+"</span></div>";r+='<div class="picker-items-col '+(e.textAlign?"picker-items-col-"+e.textAlign:"")+" "+(e.cssClass||"")+'"><div class="picker-items-col-wrapper">'+t+"</div></div>"}return a?t:r},p.layout=function(){var e,a="",t="";p.cols=[];var r="";for(e=0;e<p.params.cols.length;e++){var n=p.params.cols[e];r+=p.columnHTML(p.params.cols[e]),p.cols.push(n)}t="picker-modal picker-columns "+(p.params.cssClass||"")+(p.params.rotateEffect?" picker-3d":""),a='<div class="'+t+'">'+(p.params.toolbar?p.params.toolbarTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText):"")+'<div class="picker-modal-inner picker-items">'+r+'<div class="picker-center-highlight"></div></div></div>',p.pickerHTML=a},p.params.input&&(p.input=i(p.params.input),p.input.length>0&&(p.params.inputReadOnly&&p.input.prop("readOnly",!0),p.inline||p.input.on("click",s),p.params.inputReadOnly&&p.input.on("focus mousedown",function(e){e.preventDefault()}))),!p.inline&&p.params.closeByOutsideClick&&i("html").on("click",o),p.opened=!1,p.open=function(){var e=a();p.opened||(p.layout(),e?(p.pickerHTML='<div class="popover popover-picker-columns"><div class="popover-inner">'+p.pickerHTML+"</div></div>",p.popover=r.popover(p.pickerHTML,p.params.input,!0),p.container=i(p.popover).find(".picker-modal"),i(p.popover).on("popover:close",function(){l()})):p.inline?(p.container=i(p.pickerHTML),p.container.addClass("picker-modal-inline"),i(p.params.container).append(p.container)):(p.container=i(r.pickerModal(p.pickerHTML)),i(p.container).on("picker:close",function(){l()})),p.container[0].f7Picker=p,p.container.find(".picker-items-col").each(function(){var e=!0;(!p.initialized&&p.params.value||p.initialized&&p.value)&&(e=!1),p.initPickerCol(this,e)}),p.initialized?p.value&&p.setValue(p.value,0):p.value?p.setValue(p.value,0):p.params.value&&p.setValue(p.params.value,0),p.input&&p.input.length>0&&r.params.material&&p.input.trigger("focus")),p.opened=!0,p.initialized=!0,p.params.onOpen&&p.params.onOpen(p)},p.close=function(){if(p.opened&&!p.inline)return t()?void r.closeModal(p.popover):void r.closeModal(p.container)},p.destroy=function(){p.close(),p.params.input&&p.input.length>0&&p.input.off("click focus",s),i("html").off("click",o),r.offResize(n)},p.inline?p.open():!p.initialized&&p.params.value&&p.setValue(p.params.value),p};r.picker=function(e){return new b(e)};var w=function(e){function a(){var e=!1;return p.params.convertToPopover||p.params.onlyInPopover?(!p.inline&&p.params.input&&(p.params.onlyInPopover?e=!0:r.device.ios?e=!!r.device.ipad:r.width>=768&&(e=!0)),e):e}function t(){return!!(p.opened&&p.container&&p.container.length>0&&p.container.parents(".popover").length>0)}function n(e){e=new Date(e);var a=e.getFullYear(),t=e.getMonth(),r=t+1,n=e.getDate(),i=e.getDay();return p.params.dateFormat.replace(/yyyy/g,a).replace(/yy/g,(a+"").substring(2)).replace(/mm/g,r<10?"0"+r:r).replace(/m(\W+)/g,r+"$1").replace(/MM/g,p.params.monthNames[t]).replace(/M(\W+)/g,p.params.monthNamesShort[t]+"$1").replace(/dd/g,n<10?"0"+n:n).replace(/d(\W+)/g,n+"$1").replace(/DD/g,p.params.dayNames[i]).replace(/D(\W+)/g,p.params.dayNamesShort[i]+"$1")}function s(e){if(e.preventDefault(),!p.opened&&(p.open(),p.params.scrollToInput&&!a()&&!r.params.material)){var t=p.input.parents(".page-content");if(0===t.length)return;var n,i=parseInt(t.css("padding-top"),10),s=parseInt(t.css("padding-bottom"),10),o=t[0].offsetHeight-i-p.container.height(),l=t[0].scrollHeight-i-p.container.height(),d=p.input.offset().top-i+p.input[0].offsetHeight;if(d>o){var c=t.scrollTop()+d-o;c+o>l&&(n=c+o-l+s,o===l&&(n=p.container.height()),t.css({"padding-bottom":n+"px"})),t.scrollTop(c,300)}}}function o(e){t()||(p.input&&p.input.length>0?e.target!==p.input[0]&&0===i(e.target).parents(".picker-modal").length&&p.close():0===i(e.target).parents(".picker-modal").length&&p.close())}function l(){p.opened=!1,p.input&&p.input.length>0&&(p.input.parents(".page-content").css({"padding-bottom":""}),r.params.material&&p.input.trigger("blur")),p.params.onClose&&p.params.onClose(p),p.destroyCalendarEvents()}var p=this,d={monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDay:1,weekendDays:[0,6],multiple:!1,rangePicker:!1,dateFormat:"yyyy-mm-dd",direction:"horizontal",minDate:null,maxDate:null,disabled:null,events:null,rangesClasses:null,touchMove:!0,animate:!0,closeOnSelect:!1,monthPicker:!0,monthPickerTemplate:'<div class="picker-calendar-month-picker"><a href="#" class="link icon-only picker-calendar-prev-month"><i class="icon icon-prev"></i></a><span class="current-month-value"></span><a href="#" class="link icon-only picker-calendar-next-month"><i class="icon icon-next"></i></a></div>',yearPicker:!0,yearPickerTemplate:'<div class="picker-calendar-year-picker"><a href="#" class="link icon-only picker-calendar-prev-year"><i class="icon icon-prev"></i></a><span class="current-year-value"></span><a href="#" class="link icon-only picker-calendar-next-year"><i class="icon icon-next"></i></a></div>',weekHeader:!0,closeByOutsideClick:!0,scrollToInput:!0,inputReadOnly:!0,convertToPopover:!0,onlyInPopover:!1,toolbar:!0,toolbarCloseText:"Done",headerPlaceholder:"Select date",header:r.params.material,footer:r.params.material,toolbarTemplate:'<div class="toolbar"><div class="toolbar-inner">{{monthPicker}}{{yearPicker}}</div></div>',headerTemplate:'<div class="picker-header"><div class="picker-calendar-selected-date">{{placeholder}}</div></div>',footerTemplate:'<div class="picker-footer"><a href="#" class="button close-picker">{{closeText}}</a></div>'};e=e||{};for(var c in d)void 0===e[c]&&(e[c]=d[c]);p.params=e,p.initialized=!1,p.inline=!!p.params.container,p.isH="horizontal"===p.params.direction;var m=p.isH&&r.rtl?-1:1;return p.animating=!1,p.addValue=function(e){if(p.params.multiple){p.value||(p.value=[]);for(var a,t=0;t<p.value.length;t++)new Date(e).getTime()===new Date(p.value[t]).getTime()&&(a=t);void 0===a?p.value.push(e):p.value.splice(a,1),p.updateValue()}else p.params.rangePicker?(p.value||(p.value=[]),2!==p.value.length&&0!==p.value.length||(p.value=[]),p.value[0]!==e?p.value.push(e):p.value=[],p.value.sort(function(e,a){return e-a}),p.updateValue()):(p.value=[e],p.updateValue())},p.setValue=function(e){p.value=e,p.updateValue()},p.updateValue=function(e){var a,t;if(p.container&&p.container.length>0){p.wrapper.find(".picker-calendar-day-selected").removeClass("picker-calendar-day-selected");var s;if(p.params.rangePicker&&2===p.value.length)for(a=new Date(p.value[0]).getTime();a<=new Date(p.value[1]).getTime();a+=864e5)s=new Date(a),p.wrapper.find('.picker-calendar-day[data-date="'+s.getFullYear()+"-"+s.getMonth()+"-"+s.getDate()+'"]').addClass("picker-calendar-day-selected");else for(a=0;a<p.value.length;a++)s=new Date(p.value[a]),p.wrapper.find('.picker-calendar-day[data-date="'+s.getFullYear()+"-"+s.getMonth()+"-"+s.getDate()+'"]').addClass("picker-calendar-day-selected")}if(p.params.onChange&&p.params.onChange(p,p.value),p.input&&p.input.length>0||r.params.material&&p.params.header){if(p.params.formatValue)t=p.params.formatValue(p,p.value);else{for(t=[],a=0;a<p.value.length;a++)t.push(n(p.value[a]));t=t.join(p.params.rangePicker?" - ":", ")}r.params.material&&p.params.header&&p.container&&p.container.length>0&&p.container.find(".picker-calendar-selected-date").text(t),p.input&&p.input.length>0&&!e&&(i(p.input).val(t),i(p.input).trigger("change"))}},p.initCalendarEvents=function(){function e(e){o||s||(s=!0,l=u="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,d=u="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,h=(new Date).getTime(),C=0,T=!0,x=void 0,g=v=p.monthsTranslate)}function a(e){if(s){if(c="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,u="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,void 0===x&&(x=!!(x||Math.abs(u-d)>Math.abs(c-l))),p.isH&&x)return void(s=!1);if(e.preventDefault(),p.animating)return void(s=!1);T=!1,o||(o=!0,b=p.wrapper[0].offsetWidth,w=p.wrapper[0].offsetHeight,p.wrapper.transition(0)),y=p.isH?c-l:u-d,C=y/(p.isH?b:w),v=100*(p.monthsTranslate*m+C),p.wrapper.transform("translate3d("+(p.isH?v:0)+"%, "+(p.isH?0:v)+"%, 0)")}}function t(e){if(!s||!o)return void(s=o=!1);s=o=!1,f=(new Date).getTime(),
f-h<300?Math.abs(y)<10?p.resetMonth():y>=10?r.rtl?p.nextMonth():p.prevMonth():r.rtl?p.prevMonth():p.nextMonth():C<=-.5?r.rtl?p.prevMonth():p.nextMonth():C>=.5?r.rtl?p.nextMonth():p.prevMonth():p.resetMonth(),setTimeout(function(){T=!0},100)}function n(e){if(T){var a=i(e.target).parents(".picker-calendar-day");if(0===a.length&&i(e.target).hasClass("picker-calendar-day")&&(a=i(e.target)),0!==a.length&&!a.hasClass("picker-calendar-day-disabled")){p.params.rangePicker||(a.hasClass("picker-calendar-day-next")&&p.nextMonth(),a.hasClass("picker-calendar-day-prev")&&p.prevMonth());var t=a.attr("data-year"),r=a.attr("data-month"),n=a.attr("data-day");p.params.onDayClick&&p.params.onDayClick(p,a[0],t,r,n),(!a.hasClass("picker-calendar-day-selected")||p.params.multiple||p.params.rangePicker)&&p.addValue(new Date(t,r,n,0,0,0)),p.params.closeOnSelect&&(p.params.rangePicker&&2===p.value.length||!p.params.rangePicker)&&p.close()}}}var s,o,l,d,c,u,h,f,g,v,b,w,C,y,x,T=!0;p.container.find(".picker-calendar-prev-month").on("click",p.prevMonth),p.container.find(".picker-calendar-next-month").on("click",p.nextMonth),p.container.find(".picker-calendar-prev-year").on("click",p.prevYear),p.container.find(".picker-calendar-next-year").on("click",p.nextYear),p.wrapper.on("click",n);var k=!("touchstart"!==r.touchEvents.start||!r.support.passiveListener)&&{passive:!0,capture:!1},P=!!r.support.passiveListener&&{passive:!1,capture:!1};p.params.touchMove&&(p.wrapper.on(r.touchEvents.start,e,k),p.wrapper.on(r.touchEvents.move,a,P),p.wrapper.on(r.touchEvents.end,t,k)),p.container[0].f7DestroyCalendarEvents=function(){p.container.find(".picker-calendar-prev-month").off("click",p.prevMonth),p.container.find(".picker-calendar-next-month").off("click",p.nextMonth),p.container.find(".picker-calendar-prev-year").off("click",p.prevYear),p.container.find(".picker-calendar-next-year").off("click",p.nextYear),p.wrapper.off("click",n),p.params.touchMove&&(p.wrapper.off(r.touchEvents.start,e,k),p.wrapper.off(r.touchEvents.move,a,P),p.wrapper.off(r.touchEvents.end,t,k))}},p.destroyCalendarEvents=function(e){"f7DestroyCalendarEvents"in p.container[0]&&p.container[0].f7DestroyCalendarEvents()},p.dateInRange=function(e,a){var t,r=!1;if(!a)return!1;if(Array.isArray(a))for(t=0;t<a.length;t++)a[t].from||a[t].to?a[t].from&&a[t].to?e<=new Date(a[t].to).getTime()&&e>=new Date(a[t].from).getTime()&&(r=!0):a[t].from?e>=new Date(a[t].from).getTime()&&(r=!0):a[t].to&&e<=new Date(a[t].to).getTime()&&(r=!0):e===new Date(a[t]).getTime()&&(r=!0);else a.from||a.to?a.from&&a.to?e<=new Date(a.to).getTime()&&e>=new Date(a.from).getTime()&&(r=!0):a.from?e>=new Date(a.from).getTime()&&(r=!0):a.to&&e<=new Date(a.to).getTime()&&(r=!0):"function"==typeof a&&(r=a(new Date(e)));return r},p.daysInMonth=function(e){var a=new Date(e);return new Date(a.getFullYear(),a.getMonth()+1,0).getDate()},p.monthHTML=function(e,a){e=new Date(e);var t=e.getFullYear(),r=e.getMonth();e.getDate();"next"===a&&(e=11===r?new Date(t+1,0):new Date(t,r+1,1)),"prev"===a&&(e=0===r?new Date(t-1,11):new Date(t,r-1,1)),"next"!==a&&"prev"!==a||(r=e.getMonth(),t=e.getFullYear());var n=p.daysInMonth(new Date(e.getFullYear(),e.getMonth()).getTime()-864e6),i=p.daysInMonth(e),s=new Date(e.getFullYear(),e.getMonth()).getDay();0===s&&(s=7);var o,l,d,c,m,u,h=[],f="",g=p.params.firstDay-1+0,v=(new Date).setHours(0,0,0,0),b=p.params.minDate?new Date(p.params.minDate).getTime():null,w=p.params.maxDate?new Date(p.params.maxDate).getTime():null;if(p.value&&p.value.length)for(l=0;l<p.value.length;l++)h.push(new Date(p.value[l]).setHours(0,0,0,0));for(l=1;l<=6;l++){var C="";for(d=1;d<=7;d++){var y=d;g++;var x=g-s,T=y-1+p.params.firstDay>6?y-1-7+p.params.firstDay:y-1+p.params.firstDay,k="";if(x<0?(x=n+x+1,k+=" picker-calendar-day-prev",o=new Date(r-1<0?t-1:t,r-1<0?11:r-1,x).getTime()):(x+=1,x>i?(x-=i,k+=" picker-calendar-day-next",o=new Date(r+1>11?t+1:t,r+1>11?0:r+1,x).getTime()):o=new Date(t,r,x).getTime()),o===v&&(k+=" picker-calendar-day-today"),p.params.rangePicker&&2===h.length?o>=h[0]&&o<=h[1]&&(k+=" picker-calendar-day-selected"):h.indexOf(o)>=0&&(k+=" picker-calendar-day-selected"),p.params.weekendDays.indexOf(T)>=0&&(k+=" picker-calendar-day-weekend"),u=!1,p.params.events&&p.dateInRange(o,p.params.events)&&(u=!0),u&&(k+=" picker-calendar-day-has-events"),p.params.rangesClasses)for(c=0;c<p.params.rangesClasses.length;c++)p.dateInRange(o,p.params.rangesClasses[c].range)&&(k+=" "+p.params.rangesClasses[c].cssClass);m=!1,(b&&o<b||w&&o>w)&&(m=!0),p.params.disabled&&p.dateInRange(o,p.params.disabled)&&(m=!0),m&&(k+=" picker-calendar-day-disabled"),o=new Date(o);var P=o.getFullYear(),S=o.getMonth();C+='<div data-year="'+P+'" data-month="'+S+'" data-day="'+x+'" class="picker-calendar-day'+k+'" data-date="'+P+"-"+S+"-"+x+'"><span>'+x+"</span></div>"}f+='<div class="picker-calendar-row">'+C+"</div>"}return f='<div class="picker-calendar-month" data-year="'+t+'" data-month="'+r+'">'+f+"</div>"},p.animating=!1,p.updateCurrentMonthYear=function(e){void 0===e?(p.currentMonth=parseInt(p.months.eq(1).attr("data-month"),10),p.currentYear=parseInt(p.months.eq(1).attr("data-year"),10)):(p.currentMonth=parseInt(p.months.eq("next"===e?p.months.length-1:0).attr("data-month"),10),p.currentYear=parseInt(p.months.eq("next"===e?p.months.length-1:0).attr("data-year"),10)),p.container.find(".current-month-value").text(p.params.monthNames[p.currentMonth]),p.container.find(".current-year-value").text(p.currentYear)},p.onMonthChangeStart=function(e){p.updateCurrentMonthYear(e),p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");var a="next"===e?p.months.length-1:0;p.months.eq(a).addClass("picker-calendar-month-current"),p.months.eq("next"===e?a-1:a+1).addClass("next"===e?"picker-calendar-month-prev":"picker-calendar-month-next"),p.params.onMonthYearChangeStart&&p.params.onMonthYearChangeStart(p,p.currentYear,p.currentMonth)},p.onMonthChangeEnd=function(e,a){p.animating=!1;var t,r,n;p.wrapper.find(".picker-calendar-month:not(.picker-calendar-month-prev):not(.picker-calendar-month-current):not(.picker-calendar-month-next)").remove(),void 0===e&&(e="next",a=!0),a?(p.wrapper.find(".picker-calendar-month-next, .picker-calendar-month-prev").remove(),r=p.monthHTML(new Date(p.currentYear,p.currentMonth),"prev"),t=p.monthHTML(new Date(p.currentYear,p.currentMonth),"next")):n=p.monthHTML(new Date(p.currentYear,p.currentMonth),e),("next"===e||a)&&p.wrapper.append(n||t),("prev"===e||a)&&p.wrapper.prepend(n||r),p.months=p.wrapper.find(".picker-calendar-month"),p.setMonthsTranslate(p.monthsTranslate),p.params.onMonthAdd&&p.params.onMonthAdd(p,"next"===e?p.months.eq(p.months.length-1)[0]:p.months.eq(0)[0]),p.params.onMonthYearChangeEnd&&p.params.onMonthYearChangeEnd(p,p.currentYear,p.currentMonth)},p.setMonthsTranslate=function(e){e=e||p.monthsTranslate||0,void 0===p.monthsTranslate&&(p.monthsTranslate=e),p.months.removeClass("picker-calendar-month-current picker-calendar-month-prev picker-calendar-month-next");var a=100*-(e+1)*m,t=100*-e*m,r=100*-(e-1)*m;p.months.eq(0).transform("translate3d("+(p.isH?a:0)+"%, "+(p.isH?0:a)+"%, 0)").addClass("picker-calendar-month-prev"),p.months.eq(1).transform("translate3d("+(p.isH?t:0)+"%, "+(p.isH?0:t)+"%, 0)").addClass("picker-calendar-month-current"),p.months.eq(2).transform("translate3d("+(p.isH?r:0)+"%, "+(p.isH?0:r)+"%, 0)").addClass("picker-calendar-month-next")},p.nextMonth=function(e){void 0!==e&&"object"!=typeof e||(e="",p.params.animate||(e=0));var a=parseInt(p.months.eq(p.months.length-1).attr("data-month"),10),t=parseInt(p.months.eq(p.months.length-1).attr("data-year"),10),r=new Date(t,a),n=r.getTime(),s=!p.animating;if(p.params.maxDate&&n>new Date(p.params.maxDate).getTime())return p.resetMonth();if(p.monthsTranslate--,a===p.currentMonth){var o=100*-p.monthsTranslate*m,l=i(p.monthHTML(n,"next")).transform("translate3d("+(p.isH?o:0)+"%, "+(p.isH?0:o)+"%, 0)").addClass("picker-calendar-month-next");p.wrapper.append(l[0]),p.months=p.wrapper.find(".picker-calendar-month"),p.params.onMonthAdd&&p.params.onMonthAdd(p,p.months.eq(p.months.length-1)[0])}p.animating=!0,p.onMonthChangeStart("next");var d=100*p.monthsTranslate*m;p.wrapper.transition(e).transform("translate3d("+(p.isH?d:0)+"%, "+(p.isH?0:d)+"%, 0)"),s&&p.wrapper.transitionEnd(function(){p.onMonthChangeEnd("next")}),p.params.animate||p.onMonthChangeEnd("next")},p.prevMonth=function(e){void 0!==e&&"object"!=typeof e||(e="",p.params.animate||(e=0));var a=parseInt(p.months.eq(0).attr("data-month"),10),t=parseInt(p.months.eq(0).attr("data-year"),10),r=new Date(t,a+1,-1),n=r.getTime(),s=!p.animating;if(p.params.minDate&&n<new Date(p.params.minDate).getTime())return p.resetMonth();if(p.monthsTranslate++,a===p.currentMonth){var o=100*-p.monthsTranslate*m,l=i(p.monthHTML(n,"prev")).transform("translate3d("+(p.isH?o:0)+"%, "+(p.isH?0:o)+"%, 0)").addClass("picker-calendar-month-prev");p.wrapper.prepend(l[0]),p.months=p.wrapper.find(".picker-calendar-month"),p.params.onMonthAdd&&p.params.onMonthAdd(p,p.months.eq(0)[0])}p.animating=!0,p.onMonthChangeStart("prev");var d=100*p.monthsTranslate*m;p.wrapper.transition(e).transform("translate3d("+(p.isH?d:0)+"%, "+(p.isH?0:d)+"%, 0)"),s&&p.wrapper.transitionEnd(function(){p.onMonthChangeEnd("prev")}),p.params.animate||p.onMonthChangeEnd("prev")},p.resetMonth=function(e){void 0===e&&(e="");var a=100*p.monthsTranslate*m;p.wrapper.transition(e).transform("translate3d("+(p.isH?a:0)+"%, "+(p.isH?0:a)+"%, 0)")},p.setYearMonth=function(e,a,t){void 0===e&&(e=p.currentYear),void 0===a&&(a=p.currentMonth),void 0!==t&&"object"!=typeof t||(t="",p.params.animate||(t=0));var r;if(r=e<p.currentYear?new Date(e,a+1,-1).getTime():new Date(e,a).getTime(),p.params.maxDate&&r>new Date(p.params.maxDate).getTime())return!1;if(p.params.minDate&&r<new Date(p.params.minDate).getTime())return!1;var n=new Date(p.currentYear,p.currentMonth).getTime(),i=r>n?"next":"prev",s=p.monthHTML(new Date(e,a));p.monthsTranslate=p.monthsTranslate||0;var o,l,d=p.monthsTranslate,c=!p.animating;r>n?(p.monthsTranslate--,p.animating||p.months.eq(p.months.length-1).remove(),p.wrapper.append(s),p.months=p.wrapper.find(".picker-calendar-month"),o=100*-(d-1)*m,p.months.eq(p.months.length-1).transform("translate3d("+(p.isH?o:0)+"%, "+(p.isH?0:o)+"%, 0)").addClass("picker-calendar-month-next")):(p.monthsTranslate++,p.animating||p.months.eq(0).remove(),p.wrapper.prepend(s),p.months=p.wrapper.find(".picker-calendar-month"),o=100*-(d+1)*m,p.months.eq(0).transform("translate3d("+(p.isH?o:0)+"%, "+(p.isH?0:o)+"%, 0)").addClass("picker-calendar-month-prev")),p.params.onMonthAdd&&p.params.onMonthAdd(p,"next"===i?p.months.eq(p.months.length-1)[0]:p.months.eq(0)[0]),p.animating=!0,p.onMonthChangeStart(i),l=100*p.monthsTranslate*m,p.wrapper.transition(t).transform("translate3d("+(p.isH?l:0)+"%, "+(p.isH?0:l)+"%, 0)"),c&&p.wrapper.transitionEnd(function(){p.onMonthChangeEnd(i,!0)}),p.params.animate||p.onMonthChangeEnd(i)},p.nextYear=function(){p.setYearMonth(p.currentYear+1)},p.prevYear=function(){p.setYearMonth(p.currentYear-1)},p.layout=function(){var e,a="",t="",r=p.value&&p.value.length?p.value[0]:(new Date).setHours(0,0,0,0),n=p.monthHTML(r,"prev"),i=p.monthHTML(r),s=p.monthHTML(r,"next"),o='<div class="picker-calendar-months"><div class="picker-calendar-months-wrapper">'+(n+i+s)+"</div></div>",l="";if(p.params.weekHeader){for(e=0;e<7;e++){var d=e+p.params.firstDay>6?e-7+p.params.firstDay:e+p.params.firstDay,c=p.params.dayNamesShort[d];l+='<div class="picker-calendar-week-day '+(p.params.weekendDays.indexOf(d)>=0?"picker-calendar-week-day-weekend":"")+'"> '+c+"</div>"}l='<div class="picker-calendar-week-days">'+l+"</div>"}t="picker-modal picker-calendar"+(p.params.rangePicker?" picker-calendar-range":"")+(p.params.cssClass?" "+p.params.cssClass:"");var m=p.params.toolbar?p.params.toolbarTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText):"";p.params.toolbar&&(m=p.params.toolbarTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText).replace(/{{monthPicker}}/g,p.params.monthPicker?p.params.monthPickerTemplate:"").replace(/{{yearPicker}}/g,p.params.yearPicker?p.params.yearPickerTemplate:"")),a='<div class="'+t+'">'+(p.params.header?p.params.headerTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText).replace(/{{placeholder}}/g,p.params.headerPlaceholder):"")+(p.params.footer?p.params.footerTemplate.replace(/{{closeText}}/g,p.params.toolbarCloseText):"")+m+'<div class="picker-modal-inner">'+l+o+"</div></div>",p.pickerHTML=a},p.params.input&&(p.input=i(p.params.input),p.input.length>0&&(p.params.inputReadOnly&&p.input.prop("readOnly",!0),p.inline||p.input.on("click",s),p.params.inputReadOnly&&p.input.on("focus mousedown",function(e){e.preventDefault()}))),!p.inline&&p.params.closeByOutsideClick&&i("html").on("click",o),p.opened=!1,p.open=function(){var e=a(),t=!1;p.opened||(p.value||p.params.value&&(p.value=p.params.value,t=!0),p.layout(),e?(p.pickerHTML='<div class="popover popover-picker-calendar"><div class="popover-inner">'+p.pickerHTML+"</div></div>",p.popover=r.popover(p.pickerHTML,p.params.input,!0),p.container=i(p.popover).find(".picker-modal"),i(p.popover).on("popover:close",function(){l()})):p.inline?(p.container=i(p.pickerHTML),p.container.addClass("picker-modal-inline"),i(p.params.container).append(p.container)):(p.container=i(r.pickerModal(p.pickerHTML)),i(p.container).on("picker:close",function(){l()})),p.container[0].f7Calendar=p,p.wrapper=p.container.find(".picker-calendar-months-wrapper"),p.months=p.wrapper.find(".picker-calendar-month"),p.updateCurrentMonthYear(),p.monthsTranslate=0,p.setMonthsTranslate(),p.initCalendarEvents(),t?p.updateValue():r.params.material&&p.value&&p.updateValue(!0),p.input&&p.input.length>0&&r.params.material&&p.input.trigger("focus")),p.opened=!0,p.initialized=!0,p.params.onMonthAdd&&p.months.each(function(){p.params.onMonthAdd(p,this)}),p.params.onOpen&&p.params.onOpen(p)},p.close=function(){if(p.opened&&!p.inline)return t()?void r.closeModal(p.popover):void r.closeModal(p.container)},p.destroy=function(){p.close(),p.params.input&&p.input.length>0&&p.input.off("click focus",s),i("html").off("click",o)},p.inline?p.open():!p.initialized&&p.params.value&&p.setValue(p.params.value),p};r.calendar=function(e){return new w(e)};var C;r.addNotification=function(e){if(e){void 0===e.media&&(e.media=r.params.notificationMedia),void 0===e.title&&(e.title=r.params.notificationTitle),void 0===e.subtitle&&(e.subtitle=r.params.notificationSubtitle),void 0===e.closeIcon&&(e.closeIcon=r.params.notificationCloseIcon),void 0===e.hold&&(e.hold=r.params.notificationHold),void 0===e.closeOnClick&&(e.closeOnClick=r.params.notificationCloseOnClick),void 0===e.button&&(e.button=r.params.notificationCloseButtonText&&{text:r.params.notificationCloseButtonText,close:!0}),C||(C=document.createElement("div")),e.material=r.params.material;var a=i(".notifications");0===a.length&&(r.root.append('<div class="notifications list-block'+(e.material?"":" media-list")+'"><ul></ul></div>'),a=i(".notifications"));var t=a.children("ul"),n=r.params.notificationTemplate||'{{#if custom}}<li>{{custom}}</li>{{else}}<li class="notification-item notification-hidden"><div class="item-content">{{#if material}}<div class="item-inner"><div class="item-title">{{js "this.message || this.title || this.subtitle"}}</div>{{#if ../button}}{{#button}}<div class="item-after"><a href="#" class="button {{#if color}}color-{{color}}{{/if}} {{#js_compare "this.close !== false"}}close-notification{{/js_compare}}">{{text}}</a></div>{{/button}}{{/if}}</div>{{else}}{{#if media}}<div class="item-media">{{media}}</div>{{/if}}<div class="item-inner"><div class="item-title-row">{{#if title}}<div class="item-title">{{title}}</div>{{/if}}{{#if closeIcon}}<div class="item-after"><a href="#" class="close-notification"><span></span></a></div>{{/if}}</div>{{#if subtitle}}<div class="item-subtitle">{{subtitle}}</div>{{/if}}{{#if message}}<div class="item-text">{{message}}</div></div>{{/if}}{{/if}}</div></li>{{/if}}';r._compiledTemplates.notification||(r._compiledTemplates.notification=s.compile(n)),C.innerHTML=r._compiledTemplates.notification(e);var o=i(C).children();o.on("click",function(a){var t=!1,n=i(a.target);e.material&&n.hasClass("button")&&e.button&&e.button.onClick&&e.button.onClick.call(n[0],a,o[0]),n.is(".close-notification")||i(a.target).parents(".close-notification").length>0?t=!0:(e.onClick&&e.onClick(a,o[0]),e.closeOnClick&&(t=!0)),t&&r.closeNotification(o[0],a)}),e.onClose&&o.data("f7NotificationOnClose",function(a){e.onClose(o[0],a)}),e.additionalClass&&o.addClass(e.additionalClass),e.hold&&setTimeout(function(){o.length>0&&r.closeNotification(o[0])},e.hold),r.params.material||r.closeNotification(t.children("li.notification-item:last-child")),t.append(o[0]),a.show();var l=o.outerHeight();return e.material?(a.transform("translate3d(0, "+l+"px, 0)"),a.transition(0),o[0].clientLeft,a.transform("translate3d(0, 0, 0)"),a.transition("")):(o.transform("translate3d(0,"+-l+"px,0)"),o.transition(0),o[0].clientLeft,o.transition(""),o.transform("translate3d(0,0px,0)")),a.transform("translate3d(0, 0,0)"),o.removeClass("notification-hidden"),o[0]}},r.closeNotification=function(e,a){if(e=i(e),0!==e.length&&!e.hasClass("notification-item-removing")){var t=i(".notifications"),r=e.outerHeight();e.css("height",r+"px").transition(0).addClass("notification-item-removing");e[0].clientLeft;e.css({height:"0px",marginBottom:"0px"}).transition(""),e.data("f7NotificationOnClose")&&e.data("f7NotificationOnClose")(a),0===t.find(".notification-item:not(.notification-item-removing)").length&&t.transform(""),e.addClass("notification-hidden").transitionEnd(function(){e.remove(),0===t.find(".notification-item").length&&t.hide()})}},r.initDataTable=function(e){function a(){if(r.length>0&&n.length>0){var a=e.find("tbody .checkbox-cell input:checked").length;e[a>0?"addClass":"removeClass"]("data-table-has-checked"),n.find(".data-table-selected-count").text(a)}}function t(e,a,t){0===e&&a[t?"addClass":"removeClass"]("data-table-row-selected")}e=i(e);var r=e.find(".data-table-header"),n=e.find(".data-table-header-selected");e.on("change",'.checkbox-cell input[type="checkbox"]',function(r){if(!r.detail||!r.detail._sentByF7DataTable){var n=i(this),s=n[0].checked,o=n.parents("th"),l=n.parents("td,th").index();o.length>0?(t(l,e.find("tbody tr"),s),e.find("tbody tr td:nth-child("+(l+1)+") input").prop("checked",s).trigger("change",{_sentByF7DataTable:!0})):(t(l,n.parents("tr"),s),s?e.find("tbody .checkbox-cell:nth-child("+(l+1)+') input[type="checkbox"]:checked').length===e.find("tbody tr").length&&e.find("thead .checkbox-cell:nth-child("+(l+1)+') input[type="checkbox"]').prop("checked",!0).trigger("change",{_sentByF7DataTable:!0}):e.find("thead .checkbox-cell:nth-child("+(l+1)+') input[type="checkbox"]').prop("checked",!1)),a()}}),a(),e.find("thead .sortable-cell").on("click",function(){var a,t=i(this),r=t.hasClass("sortable-active");r?(a=t.hasClass("sortable-desc")?"desc":"asc",t.removeClass("sortable-desc sortable-asc").addClass("sortable-"+("desc"===a?"asc":"desc"))):(e.find("thead .sortable-active").removeClass("sortable-active"),t.addClass("sortable-active"))}),e.hasClass("data-table-collapsible")&&e.find("tbody td:not(.checkbox-cell)").each(function(){var a=i(this).index(),t=i(this).attr("data-collapsible-title");t||""===t||i(this).attr("data-collapsible-title",e.find("thead th").eq(a).text())})},r.initPageDataTables=function(e){e=i(e);var a=e.find(".data-table-init");0===a.length&&e.hasClass("data-table-init")&&(a=e),a.each(function(){r.initDataTable(this)})},r.initTemplate7Templates=function(){window.Template7&&(Template7.templates=Template7.templates||r.params.templates||{},Template7.data=Template7.data||r.params.template7Data||{},Template7.cache=Template7.cache||{},r.templates=Template7.templates,r.template7Data=Template7.data,r.template7Cache=Template7.cache,r.params.precompileTemplates&&i('script[type="text/template7"]').each(function(){var e=i(this).attr("id");e&&(Template7.templates[e]=Template7.compile(i(this).html()))}))};var y=[];return r.initPlugins=function(){for(var e in r.plugins){var a=r.plugins[e](r,r.params[e]);a&&y.push(a)}},r.pluginHook=function(e){for(var a=0;a<y.length;a++)y[a].hooks&&e in y[a].hooks&&y[a].hooks[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},r.pluginPrevent=function(e){for(var a=!1,t=0;t<y.length;t++)y[t].prevents&&e in y[t].prevents&&y[t].prevents[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])&&(a=!0);return a},r.pluginProcess=function(e,a){for(var t=a,r=0;r<y.length;r++)y[r].preprocess&&e in y[r].preprocess&&(t=y[r].preprocess[e](a,arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]));return t},r.init=function(){r.initTemplate7Templates&&r.initTemplate7Templates(),r.initPlugins&&r.initPlugins(),r.getDeviceInfo&&r.getDeviceInfo(),r.initResize&&r.initResize(),r.initPanelsBreakpoints&&(r.params.panelLeftBreakpoint||r.params.panelRightBreakpoint)&&r.initPanelsBreakpoints(),r.initFastClicks&&r.params.fastClicks&&r.initFastClicks(),r.initClickEvents&&r.initClickEvents(),i(".page:not(.cached)").each(function(){r.initPageWithCallback(this)}),i(".navbar:not(.cached)").each(function(){r.initNavbarWithCallback(this)}),r.initPushState&&r.params.pushState&&r.initPushState(),r.initSwipeout&&r.params.swipeout&&r.initSwipeout(),r.initSortable&&r.params.sortable&&r.initSortable(),r.initSwipePanels&&(r.params.swipePanel||r.params.swipePanelOnlyClose)&&r.initSwipePanels(),r.params.material&&r.initMaterialWatchInputs&&r.initMaterialWatchInputs(),r.params.material&&i(".tabbar").each(function(e,a){0===i(a).parents(".page").length&&r.initMaterialTabbar(a)}),r.params.onAppInit&&r.params.onAppInit(),r.pluginHook("appInit")},r.params.init&&r.init(),r},Framework7.$=window.Dom7,Framework7.prototype.support=function(){return{touch:!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}()}}(),Framework7.prototype.device=function(){var e={},a=navigator.userAgent,t=Dom7,r=a.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),n=a.match(/(Android);?[\s\/]+([\d.]+)?/),i=a.match(/(iPad).*OS\s([\d_]+)/),s=a.match(/(iPod)(.*OS\s([\d_]+))?/),o=!i&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/);if(e.ios=e.android=e.windows=e.iphone=e.ipod=e.ipad=e.androidChrome=!1,r&&(e.os="windows",e.osVersion=r[2],e.windows=!0),n&&!r&&(e.os="android",e.osVersion=n[2],e.android=!0,e.androidChrome=a.toLowerCase().indexOf("chrome")>=0),(i||o||s)&&(e.os="ios",e.ios=!0),o&&!s&&(e.osVersion=o[2].replace(/_/g,"."),e.iphone=!0),i&&(e.osVersion=i[2].replace(/_/g,"."),e.ipad=!0),s&&(e.osVersion=s[3]?s[3].replace(/_/g,"."):null,e.iphone=!0),e.ios&&e.osVersion&&a.indexOf("Version/")>=0&&"10"===e.osVersion.split(".")[0]&&(e.osVersion=a.toLowerCase().split("version/")[1].split(" ")[0]),e.webView=(o||i||s)&&a.match(/.*AppleWebKit(?!.*Safari)/i),e.os&&"ios"===e.os){var l=e.osVersion.split(".");e.minimalUi=!e.webView&&(s||o)&&(1*l[0]==7?1*l[1]>=1:1*l[0]>7)&&t('meta[name="viewport"]').length>0&&t('meta[name="viewport"]').attr("content").indexOf("minimal-ui")>=0}var p=t(window).width(),d=t(window).height();e.needsStatusBar=function(){return!(!e.webView||p*d!=screen.width*screen.height)},e.statusBar=e.needsStatusBar();var c=[];if(e.pixelRatio=window.devicePixelRatio||1,c.push("pixel-ratio-"+Math.floor(e.pixelRatio)),e.pixelRatio>=2&&c.push("retina"),e.os&&(c.push(e.os,e.os+"-"+e.osVersion.split(".")[0],e.os+"-"+e.osVersion.replace(/\./g,"-")),"ios"===e.os))for(var m=parseInt(e.osVersion.split(".")[0],10),u=m-1;u>=6;u--)c.push("ios-gt-"+u);return e.statusBar?c.push("with-statusbar-overlay"):t("html").removeClass("with-statusbar-overlay"),c.length>0&&t("html").addClass(c.join(" ")),e}(),Framework7.prototype.plugins={},window.Swiper=function(e,a){function t(e){return Math.floor(e)}function r(){var e=f.params.autoplay,t=f.slides.eq(f.activeIndex);t.attr("data-swiper-autoplay")&&(e=t.attr("data-swiper-autoplay")||f.params.autoplay),f.autoplayTimeoutId=setTimeout(function(){f.params.loop?(f.fixLoop(),f._slideNext(),f.emit("onAutoplay",f)):f.isEnd?a.autoplayStopOnLast?f.stopAutoplay():(f._slideTo(0),f.emit("onAutoplay",f)):(f._slideNext(),f.emit("onAutoplay",f))},e)}function n(e,a){var t=g(e.target);if(!t.is(a))if("string"==typeof a)t=t.parents(a);else if(a.nodeType){var r;return t.parents().each(function(e,t){t===a&&(r=a)}),r?a:void 0}if(0!==t.length)return t[0]}function i(e,a){a=a||{};var t=window.MutationObserver||window.WebkitMutationObserver,r=new t(function(e){e.forEach(function(e){f.onResize(!0),f.emit("onObserverUpdate",f,e)})});r.observe(e,{attributes:void 0===a.attributes||a.attributes,childList:void 0===a.childList||a.childList,characterData:void 0===a.characterData||a.characterData}),f.observers.push(r)}function s(e,a){e=g(e);var t,r,n,i=f.rtl?-1:1;t=e.attr("data-swiper-parallax")||"0",r=e.attr("data-swiper-parallax-x"),n=e.attr("data-swiper-parallax-y"),r||n?(r=r||"0",n=n||"0"):f.isHorizontal()?(r=t,n="0"):(n=t,r="0"),r=r.indexOf("%")>=0?parseInt(r,10)*a*i+"%":r*a*i+"px",n=n.indexOf("%")>=0?parseInt(n,10)*a+"%":n*a+"px",e.transform("translate3d("+r+", "+n+",0px)")}function o(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof Swiper))return new Swiper(e,a);var l={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeMomentumVelocityRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,zoom:!1,zoomMax:3,zoomMin:1,zoomToggle:!0,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,mousewheelEventsTarged:"container",hashnav:!1,hashnavWatchState:!1,history:!1,replaceState:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,touchReleaseOnEdges:!1,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",normalizeSlideIndex:!0,allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",passiveListeners:!0,containerModifierClass:"swiper-container-",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",paginationClickableClass:"swiper-pagination-clickable",paginationModifierClass:"swiper-pagination-",lazyLoadingClass:"swiper-lazy",lazyStatusLoadingClass:"swiper-lazy-loading",lazyStatusLoadedClass:"swiper-lazy-loaded",lazyPreloaderClass:"swiper-lazy-preloader",notificationClass:"swiper-notification",preloaderClass:"preloader",zoomContainerClass:"swiper-zoom-container",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},p=a&&a.virtualTranslate;a=a||{};var d={};for(var c in a)if("object"!=typeof a[c]||null===a[c]||(a[c].nodeType||a[c]===window||a[c]===document||"undefined"!=typeof Dom7&&a[c]instanceof Dom7||"undefined"!=typeof jQuery&&a[c]instanceof jQuery))d[c]=a[c];else{d[c]={};for(var m in a[c])d[c][m]=a[c][m]}for(var u in l)if(void 0===a[u])a[u]=l[u];else if("object"==typeof a[u])for(var h in l[u])void 0===a[u][h]&&(a[u][h]=l[u][h]);var f=this;f.params=a,f.originalParams=d,f.classNames=[];var g=g;if(void 0!==g&&"undefined"!=typeof Dom7&&(g=Dom7),(void 0!==g||(g="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(f.$=g,f.currentBreakpoint=void 0,f.getActiveBreakpoint=function(){if(!f.params.breakpoints)return!1;var e,a=!1,t=[];for(e in f.params.breakpoints)f.params.breakpoints.hasOwnProperty(e)&&t.push(e);t.sort(function(e,a){return parseInt(e,10)>parseInt(a,10)});for(var r=0;r<t.length;r++)(e=t[r])>=window.innerWidth&&!a&&(a=e);return a||"max"},f.setBreakpoint=function(){var e=f.getActiveBreakpoint();if(e&&f.currentBreakpoint!==e){var a=e in f.params.breakpoints?f.params.breakpoints[e]:f.originalParams,t=f.params.loop&&a.slidesPerView!==f.params.slidesPerView;for(var r in a)f.params[r]=a[r];f.currentBreakpoint=e,t&&f.destroyLoop&&f.reLoop(!0)}},f.params.breakpoints&&f.setBreakpoint(),f.container=g(e),0!==f.container.length)){if(f.container.length>1){var v=[];return f.container.each(function(){v.push(new Swiper(this,a))}),v}f.container[0].swiper=f,f.container.data("swiper",f),f.classNames.push(f.params.containerModifierClass+f.params.direction),f.params.freeMode&&f.classNames.push(f.params.containerModifierClass+"free-mode"),f.support.flexbox||(f.classNames.push(f.params.containerModifierClass+"no-flexbox"),f.params.slidesPerColumn=1),f.params.autoHeight&&f.classNames.push(f.params.containerModifierClass+"autoheight"),(f.params.parallax||f.params.watchSlidesVisibility)&&(f.params.watchSlidesProgress=!0),f.params.touchReleaseOnEdges&&(f.params.resistanceRatio=0),["cube","coverflow","flip"].indexOf(f.params.effect)>=0&&(f.support.transforms3d?(f.params.watchSlidesProgress=!0,f.classNames.push(f.params.containerModifierClass+"3d")):f.params.effect="slide"),"slide"!==f.params.effect&&f.classNames.push(f.params.containerModifierClass+f.params.effect),"cube"===f.params.effect&&(f.params.resistanceRatio=0,f.params.slidesPerView=1,f.params.slidesPerColumn=1,f.params.slidesPerGroup=1,f.params.centeredSlides=!1,f.params.spaceBetween=0,f.params.virtualTranslate=!0),"fade"!==f.params.effect&&"flip"!==f.params.effect||(f.params.slidesPerView=1,f.params.slidesPerColumn=1,f.params.slidesPerGroup=1,f.params.watchSlidesProgress=!0,f.params.spaceBetween=0,void 0===p&&(f.params.virtualTranslate=!0)),
f.params.grabCursor&&f.support.touch&&(f.params.grabCursor=!1),f.wrapper=f.container.children("."+f.params.wrapperClass),f.params.pagination&&(f.paginationContainer=g(f.params.pagination),f.params.uniqueNavElements&&"string"==typeof f.params.pagination&&f.paginationContainer.length>1&&1===f.container.find(f.params.pagination).length&&(f.paginationContainer=f.container.find(f.params.pagination)),"bullets"===f.params.paginationType&&f.params.paginationClickable?f.paginationContainer.addClass(f.params.paginationModifierClass+"clickable"):f.params.paginationClickable=!1,f.paginationContainer.addClass(f.params.paginationModifierClass+f.params.paginationType)),(f.params.nextButton||f.params.prevButton)&&(f.params.nextButton&&(f.nextButton=g(f.params.nextButton),f.params.uniqueNavElements&&"string"==typeof f.params.nextButton&&f.nextButton.length>1&&1===f.container.find(f.params.nextButton).length&&(f.nextButton=f.container.find(f.params.nextButton))),f.params.prevButton&&(f.prevButton=g(f.params.prevButton),f.params.uniqueNavElements&&"string"==typeof f.params.prevButton&&f.prevButton.length>1&&1===f.container.find(f.params.prevButton).length&&(f.prevButton=f.container.find(f.params.prevButton)))),f.isHorizontal=function(){return"horizontal"===f.params.direction},f.rtl=f.isHorizontal()&&("rtl"===f.container[0].dir.toLowerCase()||"rtl"===f.container.css("direction")),f.rtl&&f.classNames.push(f.params.containerModifierClass+"rtl"),f.rtl&&(f.wrongRTL="-webkit-box"===f.wrapper.css("display")),f.params.slidesPerColumn>1&&f.classNames.push(f.params.containerModifierClass+"multirow"),f.device.android&&f.classNames.push(f.params.containerModifierClass+"android"),f.container.addClass(f.classNames.join(" ")),f.translate=0,f.progress=0,f.velocity=0,f.lockSwipeToNext=function(){f.params.allowSwipeToNext=!1,!1===f.params.allowSwipeToPrev&&f.params.grabCursor&&f.unsetGrabCursor()},f.lockSwipeToPrev=function(){f.params.allowSwipeToPrev=!1,!1===f.params.allowSwipeToNext&&f.params.grabCursor&&f.unsetGrabCursor()},f.lockSwipes=function(){f.params.allowSwipeToNext=f.params.allowSwipeToPrev=!1,f.params.grabCursor&&f.unsetGrabCursor()},f.unlockSwipeToNext=function(){f.params.allowSwipeToNext=!0,!0===f.params.allowSwipeToPrev&&f.params.grabCursor&&f.setGrabCursor()},f.unlockSwipeToPrev=function(){f.params.allowSwipeToPrev=!0,!0===f.params.allowSwipeToNext&&f.params.grabCursor&&f.setGrabCursor()},f.unlockSwipes=function(){f.params.allowSwipeToNext=f.params.allowSwipeToPrev=!0,f.params.grabCursor&&f.setGrabCursor()},f.setGrabCursor=function(e){f.container[0].style.cursor="move",f.container[0].style.cursor=e?"-webkit-grabbing":"-webkit-grab",f.container[0].style.cursor=e?"-moz-grabbin":"-moz-grab",f.container[0].style.cursor=e?"grabbing":"grab"},f.unsetGrabCursor=function(){f.container[0].style.cursor=""},f.params.grabCursor&&f.setGrabCursor(),f.imagesToLoad=[],f.imagesLoaded=0,f.loadImage=function(e,a,t,r,n,i){function s(){i&&i()}var o;e.complete&&n?s():a?(o=new window.Image,o.onload=s,o.onerror=s,r&&(o.sizes=r),t&&(o.srcset=t),a&&(o.src=a)):s()},f.preloadImages=function(){function e(){void 0!==f&&null!==f&&f&&(void 0!==f.imagesLoaded&&f.imagesLoaded++,f.imagesLoaded===f.imagesToLoad.length&&(f.params.updateOnImagesReady&&f.update(),f.emit("onImagesReady",f)))}f.imagesToLoad=f.container.find("img");for(var a=0;a<f.imagesToLoad.length;a++)f.loadImage(f.imagesToLoad[a],f.imagesToLoad[a].currentSrc||f.imagesToLoad[a].getAttribute("src"),f.imagesToLoad[a].srcset||f.imagesToLoad[a].getAttribute("srcset"),f.imagesToLoad[a].sizes||f.imagesToLoad[a].getAttribute("sizes"),!0,e)},f.autoplayTimeoutId=void 0,f.autoplaying=!1,f.autoplayPaused=!1,f.startAutoplay=function(){return void 0===f.autoplayTimeoutId&&(!!f.params.autoplay&&(!f.autoplaying&&(f.autoplaying=!0,f.emit("onAutoplayStart",f),void r())))},f.stopAutoplay=function(e){f.autoplayTimeoutId&&(f.autoplayTimeoutId&&clearTimeout(f.autoplayTimeoutId),f.autoplaying=!1,f.autoplayTimeoutId=void 0,f.emit("onAutoplayStop",f))},f.pauseAutoplay=function(e){f.autoplayPaused||(f.autoplayTimeoutId&&clearTimeout(f.autoplayTimeoutId),f.autoplayPaused=!0,0===e?(f.autoplayPaused=!1,r()):f.wrapper.transitionEnd(function(){f&&(f.autoplayPaused=!1,f.autoplaying?r():f.stopAutoplay())}))},f.minTranslate=function(){return-f.snapGrid[0]},f.maxTranslate=function(){return-f.snapGrid[f.snapGrid.length-1]},f.updateAutoHeight=function(){var e,a=[],t=0;if("auto"!==f.params.slidesPerView&&f.params.slidesPerView>1)for(e=0;e<Math.ceil(f.params.slidesPerView);e++){var r=f.activeIndex+e;if(r>f.slides.length)break;a.push(f.slides.eq(r)[0])}else a.push(f.slides.eq(f.activeIndex)[0]);for(e=0;e<a.length;e++)if(void 0!==a[e]){var n=a[e].offsetHeight;t=n>t?n:t}t&&f.wrapper.css("height",t+"px")},f.updateContainerSize=function(){var e,a;e=void 0!==f.params.width?f.params.width:f.container[0].clientWidth,a=void 0!==f.params.height?f.params.height:f.container[0].clientHeight,0===e&&f.isHorizontal()||0===a&&!f.isHorizontal()||(e=e-parseInt(f.container.css("padding-left"),10)-parseInt(f.container.css("padding-right"),10),a=a-parseInt(f.container.css("padding-top"),10)-parseInt(f.container.css("padding-bottom"),10),f.width=e,f.height=a,f.size=f.isHorizontal()?f.width:f.height)},f.updateSlidesSize=function(){f.slides=f.wrapper.children("."+f.params.slideClass),f.snapGrid=[],f.slidesGrid=[],f.slidesSizesGrid=[];var e,a=f.params.spaceBetween,r=-f.params.slidesOffsetBefore,n=0,i=0;if(void 0!==f.size){"string"==typeof a&&a.indexOf("%")>=0&&(a=parseFloat(a.replace("%",""))/100*f.size),f.virtualSize=-a,f.rtl?f.slides.css({marginLeft:"",marginTop:""}):f.slides.css({marginRight:"",marginBottom:""});var s;f.params.slidesPerColumn>1&&(s=Math.floor(f.slides.length/f.params.slidesPerColumn)===f.slides.length/f.params.slidesPerColumn?f.slides.length:Math.ceil(f.slides.length/f.params.slidesPerColumn)*f.params.slidesPerColumn,"auto"!==f.params.slidesPerView&&"row"===f.params.slidesPerColumnFill&&(s=Math.max(s,f.params.slidesPerView*f.params.slidesPerColumn)));var o,l=f.params.slidesPerColumn,p=s/l,d=p-(f.params.slidesPerColumn*p-f.slides.length);for(e=0;e<f.slides.length;e++){o=0;var c=f.slides.eq(e);if(f.params.slidesPerColumn>1){var m,u,h;"column"===f.params.slidesPerColumnFill?(u=Math.floor(e/l),h=e-u*l,(u>d||u===d&&h===l-1)&&++h>=l&&(h=0,u++),m=u+h*s/l,c.css({"-webkit-box-ordinal-group":m,"-moz-box-ordinal-group":m,"-ms-flex-order":m,"-webkit-order":m,order:m})):(h=Math.floor(e/p),u=e-h*p),c.css("margin-"+(f.isHorizontal()?"top":"left"),0!==h&&f.params.spaceBetween&&f.params.spaceBetween+"px").attr("data-swiper-column",u).attr("data-swiper-row",h)}"none"!==c.css("display")&&("auto"===f.params.slidesPerView?(o=f.isHorizontal()?c.outerWidth(!0):c.outerHeight(!0),f.params.roundLengths&&(o=t(o))):(o=(f.size-(f.params.slidesPerView-1)*a)/f.params.slidesPerView,f.params.roundLengths&&(o=t(o)),f.isHorizontal()?f.slides[e].style.width=o+"px":f.slides[e].style.height=o+"px"),f.slides[e].swiperSlideSize=o,f.slidesSizesGrid.push(o),f.params.centeredSlides?(r=r+o/2+n/2+a,0===n&&0!==e&&(r=r-f.size/2-a),0===e&&(r=r-f.size/2-a),Math.abs(r)<.001&&(r=0),i%f.params.slidesPerGroup==0&&f.snapGrid.push(r),f.slidesGrid.push(r)):(i%f.params.slidesPerGroup==0&&f.snapGrid.push(r),f.slidesGrid.push(r),r=r+o+a),f.virtualSize+=o+a,n=o,i++)}f.virtualSize=Math.max(f.virtualSize,f.size)+f.params.slidesOffsetAfter;var g;if(f.rtl&&f.wrongRTL&&("slide"===f.params.effect||"coverflow"===f.params.effect)&&f.wrapper.css({width:f.virtualSize+f.params.spaceBetween+"px"}),f.support.flexbox&&!f.params.setWrapperSize||(f.isHorizontal()?f.wrapper.css({width:f.virtualSize+f.params.spaceBetween+"px"}):f.wrapper.css({height:f.virtualSize+f.params.spaceBetween+"px"})),f.params.slidesPerColumn>1&&(f.virtualSize=(o+f.params.spaceBetween)*s,f.virtualSize=Math.ceil(f.virtualSize/f.params.slidesPerColumn)-f.params.spaceBetween,f.isHorizontal()?f.wrapper.css({width:f.virtualSize+f.params.spaceBetween+"px"}):f.wrapper.css({height:f.virtualSize+f.params.spaceBetween+"px"}),f.params.centeredSlides)){for(g=[],e=0;e<f.snapGrid.length;e++)f.snapGrid[e]<f.virtualSize+f.snapGrid[0]&&g.push(f.snapGrid[e]);f.snapGrid=g}if(!f.params.centeredSlides){for(g=[],e=0;e<f.snapGrid.length;e++)f.snapGrid[e]<=f.virtualSize-f.size&&g.push(f.snapGrid[e]);f.snapGrid=g,Math.floor(f.virtualSize-f.size)-Math.floor(f.snapGrid[f.snapGrid.length-1])>1&&f.snapGrid.push(f.virtualSize-f.size)}0===f.snapGrid.length&&(f.snapGrid=[0]),0!==f.params.spaceBetween&&(f.isHorizontal()?f.rtl?f.slides.css({marginLeft:a+"px"}):f.slides.css({marginRight:a+"px"}):f.slides.css({marginBottom:a+"px"})),f.params.watchSlidesProgress&&f.updateSlidesOffset()}},f.updateSlidesOffset=function(){for(var e=0;e<f.slides.length;e++)f.slides[e].swiperSlideOffset=f.isHorizontal()?f.slides[e].offsetLeft:f.slides[e].offsetTop},f.currentSlidesPerView=function(){var e,a,t=1;if(f.params.centeredSlides){var r,n=f.slides[f.activeIndex].swiperSlideSize;for(e=f.activeIndex+1;e<f.slides.length;e++)f.slides[e]&&!r&&(n+=f.slides[e].swiperSlideSize,t++,n>f.size&&(r=!0));for(a=f.activeIndex-1;a>=0;a--)f.slides[a]&&!r&&(n+=f.slides[a].swiperSlideSize,t++,n>f.size&&(r=!0))}else for(e=f.activeIndex+1;e<f.slides.length;e++)f.slidesGrid[e]-f.slidesGrid[f.activeIndex]<f.size&&t++;return t},f.updateSlidesProgress=function(e){if(void 0===e&&(e=f.translate||0),0!==f.slides.length){void 0===f.slides[0].swiperSlideOffset&&f.updateSlidesOffset();var a=-e;f.rtl&&(a=e),f.slides.removeClass(f.params.slideVisibleClass);for(var t=0;t<f.slides.length;t++){var r=f.slides[t],n=(a+(f.params.centeredSlides?f.minTranslate():0)-r.swiperSlideOffset)/(r.swiperSlideSize+f.params.spaceBetween);if(f.params.watchSlidesVisibility){var i=-(a-r.swiperSlideOffset),s=i+f.slidesSizesGrid[t];(i>=0&&i<f.size||s>0&&s<=f.size||i<=0&&s>=f.size)&&f.slides.eq(t).addClass(f.params.slideVisibleClass)}r.progress=f.rtl?-n:n}}},f.updateProgress=function(e){void 0===e&&(e=f.translate||0);var a=f.maxTranslate()-f.minTranslate(),t=f.isBeginning,r=f.isEnd;0===a?(f.progress=0,f.isBeginning=f.isEnd=!0):(f.progress=(e-f.minTranslate())/a,f.isBeginning=f.progress<=0,f.isEnd=f.progress>=1),f.isBeginning&&!t&&f.emit("onReachBeginning",f),f.isEnd&&!r&&f.emit("onReachEnd",f),f.params.watchSlidesProgress&&f.updateSlidesProgress(e),f.emit("onProgress",f,f.progress)},f.updateActiveIndex=function(){var e,a,t,r=f.rtl?f.translate:-f.translate;for(a=0;a<f.slidesGrid.length;a++)void 0!==f.slidesGrid[a+1]?r>=f.slidesGrid[a]&&r<f.slidesGrid[a+1]-(f.slidesGrid[a+1]-f.slidesGrid[a])/2?e=a:r>=f.slidesGrid[a]&&r<f.slidesGrid[a+1]&&(e=a+1):r>=f.slidesGrid[a]&&(e=a);f.params.normalizeSlideIndex&&(e<0||void 0===e)&&(e=0),t=Math.floor(e/f.params.slidesPerGroup),t>=f.snapGrid.length&&(t=f.snapGrid.length-1),e!==f.activeIndex&&(f.snapIndex=t,f.previousIndex=f.activeIndex,f.activeIndex=e,f.updateClasses(),f.updateRealIndex())},f.updateRealIndex=function(){f.realIndex=parseInt(f.slides.eq(f.activeIndex).attr("data-swiper-slide-index")||f.activeIndex,10)},f.updateClasses=function(){f.slides.removeClass(f.params.slideActiveClass+" "+f.params.slideNextClass+" "+f.params.slidePrevClass+" "+f.params.slideDuplicateActiveClass+" "+f.params.slideDuplicateNextClass+" "+f.params.slideDuplicatePrevClass);var e=f.slides.eq(f.activeIndex);e.addClass(f.params.slideActiveClass),a.loop&&(e.hasClass(f.params.slideDuplicateClass)?f.wrapper.children("."+f.params.slideClass+":not(."+f.params.slideDuplicateClass+')[data-swiper-slide-index="'+f.realIndex+'"]').addClass(f.params.slideDuplicateActiveClass):f.wrapper.children("."+f.params.slideClass+"."+f.params.slideDuplicateClass+'[data-swiper-slide-index="'+f.realIndex+'"]').addClass(f.params.slideDuplicateActiveClass));var t=e.next("."+f.params.slideClass).addClass(f.params.slideNextClass);f.params.loop&&0===t.length&&(t=f.slides.eq(0),t.addClass(f.params.slideNextClass));var r=e.prev("."+f.params.slideClass).addClass(f.params.slidePrevClass);if(f.params.loop&&0===r.length&&(r=f.slides.eq(-1),r.addClass(f.params.slidePrevClass)),a.loop&&(t.hasClass(f.params.slideDuplicateClass)?f.wrapper.children("."+f.params.slideClass+":not(."+f.params.slideDuplicateClass+')[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(f.params.slideDuplicateNextClass):f.wrapper.children("."+f.params.slideClass+"."+f.params.slideDuplicateClass+'[data-swiper-slide-index="'+t.attr("data-swiper-slide-index")+'"]').addClass(f.params.slideDuplicateNextClass),r.hasClass(f.params.slideDuplicateClass)?f.wrapper.children("."+f.params.slideClass+":not(."+f.params.slideDuplicateClass+')[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(f.params.slideDuplicatePrevClass):f.wrapper.children("."+f.params.slideClass+"."+f.params.slideDuplicateClass+'[data-swiper-slide-index="'+r.attr("data-swiper-slide-index")+'"]').addClass(f.params.slideDuplicatePrevClass)),f.paginationContainer&&f.paginationContainer.length>0){var n,i=f.params.loop?Math.ceil((f.slides.length-2*f.loopedSlides)/f.params.slidesPerGroup):f.snapGrid.length;if(f.params.loop?(n=Math.ceil((f.activeIndex-f.loopedSlides)/f.params.slidesPerGroup),n>f.slides.length-1-2*f.loopedSlides&&(n-=f.slides.length-2*f.loopedSlides),n>i-1&&(n-=i),n<0&&"bullets"!==f.params.paginationType&&(n=i+n)):n=void 0!==f.snapIndex?f.snapIndex:f.activeIndex||0,"bullets"===f.params.paginationType&&f.bullets&&f.bullets.length>0&&(f.bullets.removeClass(f.params.bulletActiveClass),f.paginationContainer.length>1?f.bullets.each(function(){g(this).index()===n&&g(this).addClass(f.params.bulletActiveClass)}):f.bullets.eq(n).addClass(f.params.bulletActiveClass)),"fraction"===f.params.paginationType&&(f.paginationContainer.find("."+f.params.paginationCurrentClass).text(n+1),f.paginationContainer.find("."+f.params.paginationTotalClass).text(i)),"progress"===f.params.paginationType){var s=(n+1)/i,o=s,l=1;f.isHorizontal()||(l=s,o=1),f.paginationContainer.find("."+f.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+l+")").transition(f.params.speed)}"custom"===f.params.paginationType&&f.params.paginationCustomRender&&(f.paginationContainer.html(f.params.paginationCustomRender(f,n+1,i)),f.emit("onPaginationRendered",f,f.paginationContainer[0]))}f.params.loop||(f.params.prevButton&&f.prevButton&&f.prevButton.length>0&&(f.isBeginning?(f.prevButton.addClass(f.params.buttonDisabledClass),f.params.a11y&&f.a11y&&f.a11y.disable(f.prevButton)):(f.prevButton.removeClass(f.params.buttonDisabledClass),f.params.a11y&&f.a11y&&f.a11y.enable(f.prevButton))),f.params.nextButton&&f.nextButton&&f.nextButton.length>0&&(f.isEnd?(f.nextButton.addClass(f.params.buttonDisabledClass),f.params.a11y&&f.a11y&&f.a11y.disable(f.nextButton)):(f.nextButton.removeClass(f.params.buttonDisabledClass),f.params.a11y&&f.a11y&&f.a11y.enable(f.nextButton))))},f.updatePagination=function(){if(f.params.pagination&&f.paginationContainer&&f.paginationContainer.length>0){var e="";if("bullets"===f.params.paginationType){for(var a=f.params.loop?Math.ceil((f.slides.length-2*f.loopedSlides)/f.params.slidesPerGroup):f.snapGrid.length,t=0;t<a;t++)f.params.paginationBulletRender?e+=f.params.paginationBulletRender(f,t,f.params.bulletClass):e+="<"+f.params.paginationElement+' class="'+f.params.bulletClass+'"></'+f.params.paginationElement+">";f.paginationContainer.html(e),f.bullets=f.paginationContainer.find("."+f.params.bulletClass),f.params.paginationClickable&&f.params.a11y&&f.a11y&&f.a11y.initPagination()}"fraction"===f.params.paginationType&&(e=f.params.paginationFractionRender?f.params.paginationFractionRender(f,f.params.paginationCurrentClass,f.params.paginationTotalClass):'<span class="'+f.params.paginationCurrentClass+'"></span> / <span class="'+f.params.paginationTotalClass+'"></span>',f.paginationContainer.html(e)),"progress"===f.params.paginationType&&(e=f.params.paginationProgressRender?f.params.paginationProgressRender(f,f.params.paginationProgressbarClass):'<span class="'+f.params.paginationProgressbarClass+'"></span>',f.paginationContainer.html(e)),"custom"!==f.params.paginationType&&f.emit("onPaginationRendered",f,f.paginationContainer[0])}},f.update=function(e){function a(){f.rtl,f.translate;t=Math.min(Math.max(f.translate,f.maxTranslate()),f.minTranslate()),f.setWrapperTranslate(t),f.updateActiveIndex(),f.updateClasses()}if(f){f.updateContainerSize(),f.updateSlidesSize(),f.updateProgress(),f.updatePagination(),f.updateClasses(),f.params.scrollbar&&f.scrollbar&&f.scrollbar.set();var t;if(e){f.controller&&f.controller.spline&&(f.controller.spline=void 0),f.params.freeMode?(a(),f.params.autoHeight&&f.updateAutoHeight()):(("auto"===f.params.slidesPerView||f.params.slidesPerView>1)&&f.isEnd&&!f.params.centeredSlides?f.slideTo(f.slides.length-1,0,!1,!0):f.slideTo(f.activeIndex,0,!1,!0))||a()}else f.params.autoHeight&&f.updateAutoHeight()}},f.onResize=function(e){f.params.onBeforeResize&&f.params.onBeforeResize(f),f.params.breakpoints&&f.setBreakpoint();var a=f.params.allowSwipeToPrev,t=f.params.allowSwipeToNext;f.params.allowSwipeToPrev=f.params.allowSwipeToNext=!0,f.updateContainerSize(),f.updateSlidesSize(),("auto"===f.params.slidesPerView||f.params.freeMode||e)&&f.updatePagination(),f.params.scrollbar&&f.scrollbar&&f.scrollbar.set(),f.controller&&f.controller.spline&&(f.controller.spline=void 0);var r=!1;if(f.params.freeMode){var n=Math.min(Math.max(f.translate,f.maxTranslate()),f.minTranslate());f.setWrapperTranslate(n),f.updateActiveIndex(),f.updateClasses(),f.params.autoHeight&&f.updateAutoHeight()}else f.updateClasses(),r=("auto"===f.params.slidesPerView||f.params.slidesPerView>1)&&f.isEnd&&!f.params.centeredSlides?f.slideTo(f.slides.length-1,0,!1,!0):f.slideTo(f.activeIndex,0,!1,!0);f.params.lazyLoading&&!r&&f.lazy&&f.lazy.load(),f.params.allowSwipeToPrev=a,f.params.allowSwipeToNext=t,f.params.onAfterResize&&f.params.onAfterResize(f)},f.touchEventsDesktop={start:"mousedown",move:"mousemove",end:"mouseup"},window.navigator.pointerEnabled?f.touchEventsDesktop={start:"pointerdown",move:"pointermove",end:"pointerup"}:window.navigator.msPointerEnabled&&(f.touchEventsDesktop={start:"MSPointerDown",move:"MSPointerMove",end:"MSPointerUp"}),f.touchEvents={start:f.support.touch||!f.params.simulateTouch?"touchstart":f.touchEventsDesktop.start,move:f.support.touch||!f.params.simulateTouch?"touchmove":f.touchEventsDesktop.move,end:f.support.touch||!f.params.simulateTouch?"touchend":f.touchEventsDesktop.end},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===f.params.touchEventsTarget?f.container:f.wrapper).addClass("swiper-wp8-"+f.params.direction),f.initEvents=function(e){var t=e?"off":"on",r=e?"removeEventListener":"addEventListener",n="container"===f.params.touchEventsTarget?f.container[0]:f.wrapper[0],i=f.support.touch?n:document,s=!!f.params.nested;if(f.browser.ie)n[r](f.touchEvents.start,f.onTouchStart,!1),i[r](f.touchEvents.move,f.onTouchMove,s),i[r](f.touchEvents.end,f.onTouchEnd,!1);else{if(f.support.touch){var o=!("touchstart"!==f.touchEvents.start||!f.support.passiveListener||!f.params.passiveListeners)&&{passive:!0,capture:!1};n[r](f.touchEvents.start,f.onTouchStart,o),n[r](f.touchEvents.move,f.onTouchMove,s),n[r](f.touchEvents.end,f.onTouchEnd,o)}(a.simulateTouch&&!f.device.ios&&!f.device.android||a.simulateTouch&&!f.support.touch&&f.device.ios)&&(n[r]("mousedown",f.onTouchStart,!1),document[r]("mousemove",f.onTouchMove,s),document[r]("mouseup",f.onTouchEnd,!1))}window[r]("resize",f.onResize),f.params.nextButton&&f.nextButton&&f.nextButton.length>0&&(f.nextButton[t]("click",f.onClickNext),f.params.a11y&&f.a11y&&f.nextButton[t]("keydown",f.a11y.onEnterKey)),f.params.prevButton&&f.prevButton&&f.prevButton.length>0&&(f.prevButton[t]("click",f.onClickPrev),f.params.a11y&&f.a11y&&f.prevButton[t]("keydown",f.a11y.onEnterKey)),f.params.pagination&&f.params.paginationClickable&&(f.paginationContainer[t]("click","."+f.params.bulletClass,f.onClickIndex),f.params.a11y&&f.a11y&&f.paginationContainer[t]("keydown","."+f.params.bulletClass,f.a11y.onEnterKey)),(f.params.preventClicks||f.params.preventClicksPropagation)&&n[r]("click",f.preventClicks,!0)},f.attachEvents=function(){f.initEvents()},f.detachEvents=function(){f.initEvents(!0)},f.allowClick=!0,f.preventClicks=function(e){f.allowClick||(f.params.preventClicks&&e.preventDefault(),f.params.preventClicksPropagation&&f.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},f.onClickNext=function(e){e.preventDefault(),f.isEnd&&!f.params.loop||f.slideNext()},f.onClickPrev=function(e){e.preventDefault(),f.isBeginning&&!f.params.loop||f.slidePrev()},f.onClickIndex=function(e){e.preventDefault();var a=g(this).index()*f.params.slidesPerGroup;f.params.loop&&(a+=f.loopedSlides),f.slideTo(a)},f.updateClickedSlide=function(e){var a=n(e,"."+f.params.slideClass),t=!1;if(a)for(var r=0;r<f.slides.length;r++)f.slides[r]===a&&(t=!0);if(!a||!t)return f.clickedSlide=void 0,void(f.clickedIndex=void 0);if(f.clickedSlide=a,f.clickedIndex=g(a).index(),f.params.slideToClickedSlide&&void 0!==f.clickedIndex&&f.clickedIndex!==f.activeIndex){var i,s=f.clickedIndex,o="auto"===f.params.slidesPerView?f.currentSlidesPerView():f.params.slidesPerView;if(f.params.loop){if(f.animating)return;i=parseInt(g(f.clickedSlide).attr("data-swiper-slide-index"),10),f.params.centeredSlides?s<f.loopedSlides-o/2||s>f.slides.length-f.loopedSlides+o/2?(f.fixLoop(),s=f.wrapper.children("."+f.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+f.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){f.slideTo(s)},0)):f.slideTo(s):s>f.slides.length-o?(f.fixLoop(),s=f.wrapper.children("."+f.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.'+f.params.slideDuplicateClass+")").eq(0).index(),setTimeout(function(){f.slideTo(s)},0)):f.slideTo(s)}else f.slideTo(s)}};var b,w,C,y,x,T,k,P,S,M,I="input, select, textarea, button, video",E=Date.now(),O=[];f.animating=!1,f.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var L,D;f.onTouchStart=function(e){if(e.originalEvent&&(e=e.originalEvent),(L="touchstart"===e.type)||!("which"in e)||3!==e.which){if(f.params.noSwiping&&n(e,"."+f.params.noSwipingClass))return void(f.allowClick=!0);if(!f.params.swipeHandler||n(e,f.params.swipeHandler)){var a=f.touches.currentX="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,t=f.touches.currentY="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY;if(!(f.device.ios&&f.params.iOSEdgeSwipeDetection&&a<=f.params.iOSEdgeSwipeThreshold)){if(b=!0,w=!1,C=!0,x=void 0,D=void 0,f.touches.startX=a,f.touches.startY=t,y=Date.now(),f.allowClick=!0,f.updateContainerSize(),f.swipeDirection=void 0,f.params.threshold>0&&(P=!1),"touchstart"!==e.type){var r=!0;g(e.target).is(I)&&(r=!1),document.activeElement&&g(document.activeElement).is(I)&&document.activeElement.blur(),r&&e.preventDefault()}f.emit("onTouchStart",f,e)}}}},f.onTouchMove=function(e){if(e.originalEvent&&(e=e.originalEvent),!L||"mousemove"!==e.type){if(e.preventedByNestedSwiper)return f.touches.startX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,void(f.touches.startY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY);if(f.params.onlyExternal)return f.allowClick=!1,void(b&&(f.touches.startX=f.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touches.startY=f.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,y=Date.now()));if(L&&f.params.touchReleaseOnEdges&&!f.params.loop)if(f.isHorizontal()){if(f.touches.currentX<f.touches.startX&&f.translate<=f.maxTranslate()||f.touches.currentX>f.touches.startX&&f.translate>=f.minTranslate())return}else if(f.touches.currentY<f.touches.startY&&f.translate<=f.maxTranslate()||f.touches.currentY>f.touches.startY&&f.translate>=f.minTranslate())return;if(L&&document.activeElement&&e.target===document.activeElement&&g(e.target).is(I))return w=!0,void(f.allowClick=!1);if(C&&f.emit("onTouchMove",f,e),!(e.targetTouches&&e.targetTouches.length>1)){if(f.touches.currentX="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,f.touches.currentY="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,void 0===x){var t;f.isHorizontal()&&f.touches.currentY===f.touches.startY||!f.isHorizontal()&&f.touches.currentX===f.touches.startX?x=!1:(t=180*Math.atan2(Math.abs(f.touches.currentY-f.touches.startY),Math.abs(f.touches.currentX-f.touches.startX))/Math.PI,x=f.isHorizontal()?t>f.params.touchAngle:90-t>f.params.touchAngle)}if(x&&f.emit("onTouchMoveOpposite",f,e),void 0===D&&(f.touches.currentX===f.touches.startX&&f.touches.currentY===f.touches.startY||(D=!0)),b){if(x)return void(b=!1);if(D){f.allowClick=!1,f.emit("onSliderMove",f,e),e.preventDefault(),f.params.touchMoveStopPropagation&&!f.params.nested&&e.stopPropagation(),w||(a.loop&&f.fixLoop(),k=f.getWrapperTranslate(),f.setWrapperTransition(0),f.animating&&f.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),f.params.autoplay&&f.autoplaying&&(f.params.autoplayDisableOnInteraction?f.stopAutoplay():f.pauseAutoplay()),M=!1,!f.params.grabCursor||!0!==f.params.allowSwipeToNext&&!0!==f.params.allowSwipeToPrev||f.setGrabCursor(!0)),w=!0;var r=f.touches.diff=f.isHorizontal()?f.touches.currentX-f.touches.startX:f.touches.currentY-f.touches.startY;r*=f.params.touchRatio,f.rtl&&(r=-r),f.swipeDirection=r>0?"prev":"next",T=r+k;var n=!0;if(r>0&&T>f.minTranslate()?(n=!1,f.params.resistance&&(T=f.minTranslate()-1+Math.pow(-f.minTranslate()+k+r,f.params.resistanceRatio))):r<0&&T<f.maxTranslate()&&(n=!1,f.params.resistance&&(T=f.maxTranslate()+1-Math.pow(f.maxTranslate()-k-r,f.params.resistanceRatio))),n&&(e.preventedByNestedSwiper=!0),!f.params.allowSwipeToNext&&"next"===f.swipeDirection&&T<k&&(T=k),!f.params.allowSwipeToPrev&&"prev"===f.swipeDirection&&T>k&&(T=k),f.params.threshold>0){if(!(Math.abs(r)>f.params.threshold||P))return void(T=k);if(!P)return P=!0,f.touches.startX=f.touches.currentX,f.touches.startY=f.touches.currentY,T=k,void(f.touches.diff=f.isHorizontal()?f.touches.currentX-f.touches.startX:f.touches.currentY-f.touches.startY)}f.params.followFinger&&((f.params.freeMode||f.params.watchSlidesProgress)&&f.updateActiveIndex(),f.params.freeMode&&(0===O.length&&O.push({position:f.touches[f.isHorizontal()?"startX":"startY"],time:y}),O.push({position:f.touches[f.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),f.updateProgress(T),f.setWrapperTranslate(T))}}}}},f.onTouchEnd=function(e){if(e.originalEvent&&(e=e.originalEvent),C&&f.emit("onTouchEnd",f,e),C=!1,b){f.params.grabCursor&&w&&b&&(!0===f.params.allowSwipeToNext||!0===f.params.allowSwipeToPrev)&&f.setGrabCursor(!1);var a=Date.now(),t=a-y;if(f.allowClick&&(f.updateClickedSlide(e),f.emit("onTap",f,e),t<300&&a-E>300&&(S&&clearTimeout(S),S=setTimeout(function(){f&&(f.params.paginationHide&&f.paginationContainer.length>0&&!g(e.target).hasClass(f.params.bulletClass)&&f.paginationContainer.toggleClass(f.params.paginationHiddenClass),f.emit("onClick",f,e))},300)),t<300&&a-E<300&&(S&&clearTimeout(S),f.emit("onDoubleTap",f,e))),E=Date.now(),setTimeout(function(){f&&(f.allowClick=!0)},0),!b||!w||!f.swipeDirection||0===f.touches.diff||T===k)return void(b=w=!1);b=w=!1;var r;if(r=f.params.followFinger?f.rtl?f.translate:-f.translate:-T,f.params.freeMode){if(r<-f.minTranslate())return void f.slideTo(f.activeIndex);if(r>-f.maxTranslate())return void(f.slides.length<f.snapGrid.length?f.slideTo(f.snapGrid.length-1):f.slideTo(f.slides.length-1));if(f.params.freeModeMomentum){if(O.length>1){var n=O.pop(),i=O.pop(),s=n.position-i.position,o=n.time-i.time;f.velocity=s/o,f.velocity=f.velocity/2,Math.abs(f.velocity)<f.params.freeModeMinimumVelocity&&(f.velocity=0),(o>150||(new window.Date).getTime()-n.time>300)&&(f.velocity=0)}else f.velocity=0;f.velocity=f.velocity*f.params.freeModeMomentumVelocityRatio,O.length=0;var l=1e3*f.params.freeModeMomentumRatio,p=f.velocity*l,d=f.translate+p;f.rtl&&(d=-d);var c,m=!1,u=20*Math.abs(f.velocity)*f.params.freeModeMomentumBounceRatio;if(d<f.maxTranslate())f.params.freeModeMomentumBounce?(d+f.maxTranslate()<-u&&(d=f.maxTranslate()-u),c=f.maxTranslate(),m=!0,M=!0):d=f.maxTranslate();else if(d>f.minTranslate())f.params.freeModeMomentumBounce?(d-f.minTranslate()>u&&(d=f.minTranslate()+u),c=f.minTranslate(),m=!0,M=!0):d=f.minTranslate();else if(f.params.freeModeSticky){var h,v=0;for(v=0;v<f.snapGrid.length;v+=1)if(f.snapGrid[v]>-d){h=v;break}d=Math.abs(f.snapGrid[h]-d)<Math.abs(f.snapGrid[h-1]-d)||"next"===f.swipeDirection?f.snapGrid[h]:f.snapGrid[h-1],f.rtl||(d=-d)}if(0!==f.velocity)l=f.rtl?Math.abs((-d-f.translate)/f.velocity):Math.abs((d-f.translate)/f.velocity);else if(f.params.freeModeSticky)return void f.slideReset();f.params.freeModeMomentumBounce&&m?(f.updateProgress(c),f.setWrapperTransition(l),f.setWrapperTranslate(d),f.onTransitionStart(),f.animating=!0,f.wrapper.transitionEnd(function(){f&&M&&(f.emit("onMomentumBounce",f),f.setWrapperTransition(f.params.speed),f.setWrapperTranslate(c),f.wrapper.transitionEnd(function(){f&&f.onTransitionEnd()}))})):f.velocity?(f.updateProgress(d),f.setWrapperTransition(l),f.setWrapperTranslate(d),f.onTransitionStart(),f.animating||(f.animating=!0,f.wrapper.transitionEnd(function(){f&&f.onTransitionEnd()}))):f.updateProgress(d),f.updateActiveIndex()}return void((!f.params.freeModeMomentum||t>=f.params.longSwipesMs)&&(f.updateProgress(),f.updateActiveIndex()))}var x,P=0,I=f.slidesSizesGrid[0];for(x=0;x<f.slidesGrid.length;x+=f.params.slidesPerGroup)void 0!==f.slidesGrid[x+f.params.slidesPerGroup]?r>=f.slidesGrid[x]&&r<f.slidesGrid[x+f.params.slidesPerGroup]&&(P=x,I=f.slidesGrid[x+f.params.slidesPerGroup]-f.slidesGrid[x]):r>=f.slidesGrid[x]&&(P=x,I=f.slidesGrid[f.slidesGrid.length-1]-f.slidesGrid[f.slidesGrid.length-2]);var L=(r-f.slidesGrid[P])/I;if(t>f.params.longSwipesMs){if(!f.params.longSwipes)return void f.slideTo(f.activeIndex);"next"===f.swipeDirection&&(L>=f.params.longSwipesRatio?f.slideTo(P+f.params.slidesPerGroup):f.slideTo(P)),"prev"===f.swipeDirection&&(L>1-f.params.longSwipesRatio?f.slideTo(P+f.params.slidesPerGroup):f.slideTo(P))}else{if(!f.params.shortSwipes)return void f.slideTo(f.activeIndex);"next"===f.swipeDirection&&f.slideTo(P+f.params.slidesPerGroup),"prev"===f.swipeDirection&&f.slideTo(P)}}},f._slideTo=function(e,a){return f.slideTo(e,a,!0,!0)},f.slideTo=function(e,a,t,r){void 0===t&&(t=!0),void 0===e&&(e=0),e<0&&(e=0),f.snapIndex=Math.floor(e/f.params.slidesPerGroup),f.snapIndex>=f.snapGrid.length&&(f.snapIndex=f.snapGrid.length-1);var n=-f.snapGrid[f.snapIndex];if(f.params.autoplay&&f.autoplaying&&(r||!f.params.autoplayDisableOnInteraction?f.pauseAutoplay(a):f.stopAutoplay()),f.updateProgress(n),f.params.normalizeSlideIndex)for(var i=0;i<f.slidesGrid.length;i++)-Math.floor(100*n)>=Math.floor(100*f.slidesGrid[i])&&(e=i);return!(!f.params.allowSwipeToNext&&n<f.translate&&n<f.minTranslate())&&(!(!f.params.allowSwipeToPrev&&n>f.translate&&n>f.maxTranslate()&&(f.activeIndex||0)!==e)&&(void 0===a&&(a=f.params.speed),f.previousIndex=f.activeIndex||0,f.activeIndex=e,f.updateRealIndex(),f.rtl&&-n===f.translate||!f.rtl&&n===f.translate?(f.params.autoHeight&&f.updateAutoHeight(),f.updateClasses(),"slide"!==f.params.effect&&f.setWrapperTranslate(n),!1):(f.updateClasses(),f.onTransitionStart(t),0===a||f.browser.lteIE9?(f.setWrapperTranslate(n),f.setWrapperTransition(0),f.onTransitionEnd(t)):(f.setWrapperTranslate(n),f.setWrapperTransition(a),f.animating||(f.animating=!0,f.wrapper.transitionEnd(function(){f&&f.onTransitionEnd(t)}))),!0)))},f.onTransitionStart=function(e){void 0===e&&(e=!0),f.params.autoHeight&&f.updateAutoHeight(),f.lazy&&f.lazy.onTransitionStart(),e&&(f.emit("onTransitionStart",f),f.activeIndex!==f.previousIndex&&(f.emit("onSlideChangeStart",f),f.activeIndex>f.previousIndex?f.emit("onSlideNextStart",f):f.emit("onSlidePrevStart",f)))},f.onTransitionEnd=function(e){f.animating=!1,f.setWrapperTransition(0),void 0===e&&(e=!0),f.lazy&&f.lazy.onTransitionEnd(),
e&&(f.emit("onTransitionEnd",f),f.activeIndex!==f.previousIndex&&(f.emit("onSlideChangeEnd",f),f.activeIndex>f.previousIndex?f.emit("onSlideNextEnd",f):f.emit("onSlidePrevEnd",f))),f.params.history&&f.history&&f.history.setHistory(f.params.history,f.activeIndex),f.params.hashnav&&f.hashnav&&f.hashnav.setHash()},f.slideNext=function(e,a,t){if(f.params.loop){if(f.animating)return!1;f.fixLoop();f.container[0].clientLeft;return f.slideTo(f.activeIndex+f.params.slidesPerGroup,a,e,t)}return f.slideTo(f.activeIndex+f.params.slidesPerGroup,a,e,t)},f._slideNext=function(e){return f.slideNext(!0,e,!0)},f.slidePrev=function(e,a,t){if(f.params.loop){if(f.animating)return!1;f.fixLoop();f.container[0].clientLeft;return f.slideTo(f.activeIndex-1,a,e,t)}return f.slideTo(f.activeIndex-1,a,e,t)},f._slidePrev=function(e){return f.slidePrev(!0,e,!0)},f.slideReset=function(e,a,t){return f.slideTo(f.activeIndex,a,e)},f.disableTouchControl=function(){return f.params.onlyExternal=!0,!0},f.enableTouchControl=function(){return f.params.onlyExternal=!1,!0},f.setWrapperTransition=function(e,a){f.wrapper.transition(e),"slide"!==f.params.effect&&f.effects[f.params.effect]&&f.effects[f.params.effect].setTransition(e),f.params.parallax&&f.parallax&&f.parallax.setTransition(e),f.params.scrollbar&&f.scrollbar&&f.scrollbar.setTransition(e),f.params.control&&f.controller&&f.controller.setTransition(e,a),f.emit("onSetTransition",f,e)},f.setWrapperTranslate=function(e,a,r){var n=0,i=0;f.isHorizontal()?n=f.rtl?-e:e:i=e,f.params.roundLengths&&(n=t(n),i=t(i)),f.params.virtualTranslate||(f.support.transforms3d?f.wrapper.transform("translate3d("+n+"px, "+i+"px, 0px)"):f.wrapper.transform("translate("+n+"px, "+i+"px)")),f.translate=f.isHorizontal()?n:i;var s,o=f.maxTranslate()-f.minTranslate();s=0===o?0:(e-f.minTranslate())/o,s!==f.progress&&f.updateProgress(e),a&&f.updateActiveIndex(),"slide"!==f.params.effect&&f.effects[f.params.effect]&&f.effects[f.params.effect].setTranslate(f.translate),f.params.parallax&&f.parallax&&f.parallax.setTranslate(f.translate),f.params.scrollbar&&f.scrollbar&&f.scrollbar.setTranslate(f.translate),f.params.control&&f.controller&&f.controller.setTranslate(f.translate,r),f.emit("onSetTranslate",f,f.translate)},f.getTranslate=function(e,a){var t,r,n,i;return void 0===a&&(a="x"),f.params.virtualTranslate?f.rtl?-f.translate:f.translate:(n=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(r=n.transform||n.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===r?"":r)):(i=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),t=i.toString().split(",")),"x"===a&&(r=window.WebKitCSSMatrix?i.m41:16===t.length?parseFloat(t[12]):parseFloat(t[4])),"y"===a&&(r=window.WebKitCSSMatrix?i.m42:16===t.length?parseFloat(t[13]):parseFloat(t[5])),f.rtl&&r&&(r=-r),r||0)},f.getWrapperTranslate=function(e){return void 0===e&&(e=f.isHorizontal()?"x":"y"),f.getTranslate(f.wrapper[0],e)},f.observers=[],f.initObservers=function(){if(f.params.observeParents)for(var e=f.container.parents(),a=0;a<e.length;a++)i(e[a]);i(f.container[0],{childList:!1}),i(f.wrapper[0],{attributes:!1})},f.disconnectObservers=function(){for(var e=0;e<f.observers.length;e++)f.observers[e].disconnect();f.observers=[]},f.createLoop=function(){f.wrapper.children("."+f.params.slideClass+"."+f.params.slideDuplicateClass).remove();var e=f.wrapper.children("."+f.params.slideClass);"auto"!==f.params.slidesPerView||f.params.loopedSlides||(f.params.loopedSlides=e.length),f.loopedSlides=parseInt(f.params.loopedSlides||f.params.slidesPerView,10),f.loopedSlides=f.loopedSlides+f.params.loopAdditionalSlides,f.loopedSlides>e.length&&(f.loopedSlides=e.length);var a,t=[],r=[];for(e.each(function(a,n){var i=g(this);a<f.loopedSlides&&r.push(n),a<e.length&&a>=e.length-f.loopedSlides&&t.push(n),i.attr("data-swiper-slide-index",a)}),a=0;a<r.length;a++)f.wrapper.append(g(r[a].cloneNode(!0)).addClass(f.params.slideDuplicateClass));for(a=t.length-1;a>=0;a--)f.wrapper.prepend(g(t[a].cloneNode(!0)).addClass(f.params.slideDuplicateClass))},f.destroyLoop=function(){f.wrapper.children("."+f.params.slideClass+"."+f.params.slideDuplicateClass).remove(),f.slides.removeAttr("data-swiper-slide-index")},f.reLoop=function(e){var a=f.activeIndex-f.loopedSlides;f.destroyLoop(),f.createLoop(),f.updateSlidesSize(),e&&f.slideTo(a+f.loopedSlides,0,!1)},f.fixLoop=function(){var e;f.activeIndex<f.loopedSlides?(e=f.slides.length-3*f.loopedSlides+f.activeIndex,e+=f.loopedSlides,f.slideTo(e,0,!1,!0)):("auto"===f.params.slidesPerView&&f.activeIndex>=2*f.loopedSlides||f.activeIndex>f.slides.length-2*f.params.slidesPerView)&&(e=-f.slides.length+f.activeIndex+f.loopedSlides,e+=f.loopedSlides,f.slideTo(e,0,!1,!0))},f.appendSlide=function(e){if(f.params.loop&&f.destroyLoop(),"object"==typeof e&&e.length)for(var a=0;a<e.length;a++)e[a]&&f.wrapper.append(e[a]);else f.wrapper.append(e);f.params.loop&&f.createLoop(),f.params.observer&&f.support.observer||f.update(!0)},f.prependSlide=function(e){f.params.loop&&f.destroyLoop();var a=f.activeIndex+1;if("object"==typeof e&&e.length){for(var t=0;t<e.length;t++)e[t]&&f.wrapper.prepend(e[t]);a=f.activeIndex+e.length}else f.wrapper.prepend(e);f.params.loop&&f.createLoop(),f.params.observer&&f.support.observer||f.update(!0),f.slideTo(a,0,!1)},f.removeSlide=function(e){f.params.loop&&(f.destroyLoop(),f.slides=f.wrapper.children("."+f.params.slideClass));var a,t=f.activeIndex;if("object"==typeof e&&e.length){for(var r=0;r<e.length;r++)a=e[r],f.slides[a]&&f.slides.eq(a).remove(),a<t&&t--;t=Math.max(t,0)}else a=e,f.slides[a]&&f.slides.eq(a).remove(),a<t&&t--,t=Math.max(t,0);f.params.loop&&f.createLoop(),f.params.observer&&f.support.observer||f.update(!0),f.params.loop?f.slideTo(t+f.loopedSlides,0,!1):f.slideTo(t,0,!1)},f.removeAllSlides=function(){for(var e=[],a=0;a<f.slides.length;a++)e.push(a);f.removeSlide(e)},f.effects={fade:{setTranslate:function(){for(var e=0;e<f.slides.length;e++){var a=f.slides.eq(e),t=a[0].swiperSlideOffset,r=-t;f.params.virtualTranslate||(r-=f.translate);var n=0;f.isHorizontal()||(n=r,r=0);var i=f.params.fade.crossFade?Math.max(1-Math.abs(a[0].progress),0):1+Math.min(Math.max(a[0].progress,-1),0);a.css({opacity:i}).transform("translate3d("+r+"px, "+n+"px, 0px)")}},setTransition:function(e){if(f.slides.transition(e),f.params.virtualTranslate&&0!==e){var a=!1;f.slides.transitionEnd(function(){if(!a&&f){a=!0,f.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)f.wrapper.trigger(e[t])}})}}},flip:{setTranslate:function(){for(var e=0;e<f.slides.length;e++){var a=f.slides.eq(e),t=a[0].progress;f.params.flip.limitRotation&&(t=Math.max(Math.min(a[0].progress,1),-1));var r=a[0].swiperSlideOffset,n=-180*t,i=n,s=0,o=-r,l=0;if(f.isHorizontal()?f.rtl&&(i=-i):(l=o,o=0,s=-i,i=0),a[0].style.zIndex=-Math.abs(Math.round(t))+f.slides.length,f.params.flip.slideShadows){var p=f.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),d=f.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===p.length&&(p=g('<div class="swiper-slide-shadow-'+(f.isHorizontal()?"left":"top")+'"></div>'),a.append(p)),0===d.length&&(d=g('<div class="swiper-slide-shadow-'+(f.isHorizontal()?"right":"bottom")+'"></div>'),a.append(d)),p.length&&(p[0].style.opacity=Math.max(-t,0)),d.length&&(d[0].style.opacity=Math.max(t,0))}a.transform("translate3d("+o+"px, "+l+"px, 0px) rotateX("+s+"deg) rotateY("+i+"deg)")}},setTransition:function(e){if(f.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),f.params.virtualTranslate&&0!==e){var a=!1;f.slides.eq(f.activeIndex).transitionEnd(function(){if(!a&&f&&g(this).hasClass(f.params.slideActiveClass)){a=!0,f.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],t=0;t<e.length;t++)f.wrapper.trigger(e[t])}})}}},cube:{setTranslate:function(){var e,a=0;f.params.cube.shadow&&(f.isHorizontal()?(e=f.wrapper.find(".swiper-cube-shadow"),0===e.length&&(e=g('<div class="swiper-cube-shadow"></div>'),f.wrapper.append(e)),e.css({height:f.width+"px"})):(e=f.container.find(".swiper-cube-shadow"),0===e.length&&(e=g('<div class="swiper-cube-shadow"></div>'),f.container.append(e))));for(var t=0;t<f.slides.length;t++){var r=f.slides.eq(t),n=90*t,i=Math.floor(n/360);f.rtl&&(n=-n,i=Math.floor(-n/360));var s=Math.max(Math.min(r[0].progress,1),-1),o=0,l=0,p=0;t%4==0?(o=4*-i*f.size,p=0):(t-1)%4==0?(o=0,p=4*-i*f.size):(t-2)%4==0?(o=f.size+4*i*f.size,p=f.size):(t-3)%4==0&&(o=-f.size,p=3*f.size+4*f.size*i),f.rtl&&(o=-o),f.isHorizontal()||(l=o,o=0);var d="rotateX("+(f.isHorizontal()?0:-n)+"deg) rotateY("+(f.isHorizontal()?n:0)+"deg) translate3d("+o+"px, "+l+"px, "+p+"px)";if(s<=1&&s>-1&&(a=90*t+90*s,f.rtl&&(a=90*-t-90*s)),r.transform(d),f.params.cube.slideShadows){var c=f.isHorizontal()?r.find(".swiper-slide-shadow-left"):r.find(".swiper-slide-shadow-top"),m=f.isHorizontal()?r.find(".swiper-slide-shadow-right"):r.find(".swiper-slide-shadow-bottom");0===c.length&&(c=g('<div class="swiper-slide-shadow-'+(f.isHorizontal()?"left":"top")+'"></div>'),r.append(c)),0===m.length&&(m=g('<div class="swiper-slide-shadow-'+(f.isHorizontal()?"right":"bottom")+'"></div>'),r.append(m)),c.length&&(c[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}}if(f.wrapper.css({"-webkit-transform-origin":"50% 50% -"+f.size/2+"px","-moz-transform-origin":"50% 50% -"+f.size/2+"px","-ms-transform-origin":"50% 50% -"+f.size/2+"px","transform-origin":"50% 50% -"+f.size/2+"px"}),f.params.cube.shadow)if(f.isHorizontal())e.transform("translate3d(0px, "+(f.width/2+f.params.cube.shadowOffset)+"px, "+-f.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+f.params.cube.shadowScale+")");else{var u=Math.abs(a)-90*Math.floor(Math.abs(a)/90),h=1.5-(Math.sin(2*u*Math.PI/360)/2+Math.cos(2*u*Math.PI/360)/2),v=f.params.cube.shadowScale,b=f.params.cube.shadowScale/h,w=f.params.cube.shadowOffset;e.transform("scale3d("+v+", 1, "+b+") translate3d(0px, "+(f.height/2+w)+"px, "+-f.height/2/b+"px) rotateX(-90deg)")}var C=f.isSafari||f.isUiWebView?-f.size/2:0;f.wrapper.transform("translate3d(0px,0,"+C+"px) rotateX("+(f.isHorizontal()?0:a)+"deg) rotateY("+(f.isHorizontal()?-a:0)+"deg)")},setTransition:function(e){f.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),f.params.cube.shadow&&!f.isHorizontal()&&f.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var e=f.translate,a=f.isHorizontal()?-e+f.width/2:-e+f.height/2,t=f.isHorizontal()?f.params.coverflow.rotate:-f.params.coverflow.rotate,r=f.params.coverflow.depth,n=0,i=f.slides.length;n<i;n++){var s=f.slides.eq(n),o=f.slidesSizesGrid[n],l=s[0].swiperSlideOffset,p=(a-l-o/2)/o*f.params.coverflow.modifier,d=f.isHorizontal()?t*p:0,c=f.isHorizontal()?0:t*p,m=-r*Math.abs(p),u=f.isHorizontal()?0:f.params.coverflow.stretch*p,h=f.isHorizontal()?f.params.coverflow.stretch*p:0;Math.abs(h)<.001&&(h=0),Math.abs(u)<.001&&(u=0),Math.abs(m)<.001&&(m=0),Math.abs(d)<.001&&(d=0),Math.abs(c)<.001&&(c=0);var v="translate3d("+h+"px,"+u+"px,"+m+"px)  rotateX("+c+"deg) rotateY("+d+"deg)";if(s.transform(v),s[0].style.zIndex=1-Math.abs(Math.round(p)),f.params.coverflow.slideShadows){var b=f.isHorizontal()?s.find(".swiper-slide-shadow-left"):s.find(".swiper-slide-shadow-top"),w=f.isHorizontal()?s.find(".swiper-slide-shadow-right"):s.find(".swiper-slide-shadow-bottom");0===b.length&&(b=g('<div class="swiper-slide-shadow-'+(f.isHorizontal()?"left":"top")+'"></div>'),s.append(b)),0===w.length&&(w=g('<div class="swiper-slide-shadow-'+(f.isHorizontal()?"right":"bottom")+'"></div>'),s.append(w)),b.length&&(b[0].style.opacity=p>0?p:0),w.length&&(w[0].style.opacity=-p>0?-p:0)}}if(f.browser.ie){f.wrapper[0].style.perspectiveOrigin=a+"px 50%"}},setTransition:function(e){f.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},f.lazy={initialImageLoaded:!1,loadImageInSlide:function(e,a){if(void 0!==e&&(void 0===a&&(a=!0),0!==f.slides.length)){var t=f.slides.eq(e),r=t.find("."+f.params.lazyLoadingClass+":not(."+f.params.lazyStatusLoadedClass+"):not(."+f.params.lazyStatusLoadingClass+")");!t.hasClass(f.params.lazyLoadingClass)||t.hasClass(f.params.lazyStatusLoadedClass)||t.hasClass(f.params.lazyStatusLoadingClass)||(r=r.add(t[0])),0!==r.length&&r.each(function(){var e=g(this);e.addClass(f.params.lazyStatusLoadingClass);var r=e.attr("data-background"),n=e.attr("data-src"),i=e.attr("data-srcset"),s=e.attr("data-sizes");f.loadImage(e[0],n||r,i,s,!1,function(){if(void 0!==f&&null!==f&&f){if(r?(e.css("background-image",'url("'+r+'")'),e.removeAttr("data-background")):(i&&(e.attr("srcset",i),e.removeAttr("data-srcset")),s&&(e.attr("sizes",s),e.removeAttr("data-sizes")),n&&(e.attr("src",n),e.removeAttr("data-src"))),e.addClass(f.params.lazyStatusLoadedClass).removeClass(f.params.lazyStatusLoadingClass),t.find("."+f.params.lazyPreloaderClass+", ."+f.params.preloaderClass).remove(),f.params.loop&&a){var o=t.attr("data-swiper-slide-index");if(t.hasClass(f.params.slideDuplicateClass)){var l=f.wrapper.children('[data-swiper-slide-index="'+o+'"]:not(.'+f.params.slideDuplicateClass+")");f.lazy.loadImageInSlide(l.index(),!1)}else{var p=f.wrapper.children("."+f.params.slideDuplicateClass+'[data-swiper-slide-index="'+o+'"]');f.lazy.loadImageInSlide(p.index(),!1)}}f.emit("onLazyImageReady",f,t[0],e[0])}}),f.emit("onLazyImageLoad",f,t[0],e[0])})}},load:function(){var e,a=f.params.slidesPerView;if("auto"===a&&(a=0),f.lazy.initialImageLoaded||(f.lazy.initialImageLoaded=!0),f.params.watchSlidesVisibility)f.wrapper.children("."+f.params.slideVisibleClass).each(function(){f.lazy.loadImageInSlide(g(this).index())});else if(a>1)for(e=f.activeIndex;e<f.activeIndex+a;e++)f.slides[e]&&f.lazy.loadImageInSlide(e);else f.lazy.loadImageInSlide(f.activeIndex);if(f.params.lazyLoadingInPrevNext)if(a>1||f.params.lazyLoadingInPrevNextAmount&&f.params.lazyLoadingInPrevNextAmount>1){var t=f.params.lazyLoadingInPrevNextAmount,r=a,n=Math.min(f.activeIndex+r+Math.max(t,r),f.slides.length),i=Math.max(f.activeIndex-Math.max(r,t),0);for(e=f.activeIndex+a;e<n;e++)f.slides[e]&&f.lazy.loadImageInSlide(e);for(e=i;e<f.activeIndex;e++)f.slides[e]&&f.lazy.loadImageInSlide(e)}else{var s=f.wrapper.children("."+f.params.slideNextClass);s.length>0&&f.lazy.loadImageInSlide(s.index());var o=f.wrapper.children("."+f.params.slidePrevClass);o.length>0&&f.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){f.params.lazyLoading&&(f.params.lazyLoadingOnTransitionStart||!f.params.lazyLoadingOnTransitionStart&&!f.lazy.initialImageLoaded)&&f.lazy.load()},onTransitionEnd:function(){f.params.lazyLoading&&!f.params.lazyLoadingOnTransitionStart&&f.lazy.load()}},f.scrollbar={isTouched:!1,setDragPosition:function(e){var a=f.scrollbar,t=f.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,r=t-a.track.offset()[f.isHorizontal()?"left":"top"]-a.dragSize/2,n=-f.minTranslate()*a.moveDivider,i=-f.maxTranslate()*a.moveDivider;r<n?r=n:r>i&&(r=i),r=-r/a.moveDivider,f.updateProgress(r),f.setWrapperTranslate(r,!0)},dragStart:function(e){var a=f.scrollbar;a.isTouched=!0,e.preventDefault(),e.stopPropagation(),a.setDragPosition(e),clearTimeout(a.dragTimeout),a.track.transition(0),f.params.scrollbarHide&&a.track.css("opacity",1),f.wrapper.transition(100),a.drag.transition(100),f.emit("onScrollbarDragStart",f)},dragMove:function(e){var a=f.scrollbar;a.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,a.setDragPosition(e),f.wrapper.transition(0),a.track.transition(0),a.drag.transition(0),f.emit("onScrollbarDragMove",f))},dragEnd:function(e){var a=f.scrollbar;a.isTouched&&(a.isTouched=!1,f.params.scrollbarHide&&(clearTimeout(a.dragTimeout),a.dragTimeout=setTimeout(function(){a.track.css("opacity",0),a.track.transition(400)},1e3)),f.emit("onScrollbarDragEnd",f),f.params.scrollbarSnapOnRelease&&f.slideReset())},draggableEvents:function(){return!1!==f.params.simulateTouch||f.support.touch?f.touchEvents:f.touchEventsDesktop}(),enableDraggable:function(){var e=f.scrollbar,a=f.support.touch?e.track:document;g(e.track).on(e.draggableEvents.start,e.dragStart),g(a).on(e.draggableEvents.move,e.dragMove),g(a).on(e.draggableEvents.end,e.dragEnd)},disableDraggable:function(){var e=f.scrollbar,a=f.support.touch?e.track:document;g(e.track).off(e.draggableEvents.start,e.dragStart),g(a).off(e.draggableEvents.move,e.dragMove),g(a).off(e.draggableEvents.end,e.dragEnd)},set:function(){if(f.params.scrollbar){var e=f.scrollbar;e.track=g(f.params.scrollbar),f.params.uniqueNavElements&&"string"==typeof f.params.scrollbar&&e.track.length>1&&1===f.container.find(f.params.scrollbar).length&&(e.track=f.container.find(f.params.scrollbar)),e.drag=e.track.find(".swiper-scrollbar-drag"),0===e.drag.length&&(e.drag=g('<div class="swiper-scrollbar-drag"></div>'),e.track.append(e.drag)),e.drag[0].style.width="",e.drag[0].style.height="",e.trackSize=f.isHorizontal()?e.track[0].offsetWidth:e.track[0].offsetHeight,e.divider=f.size/f.virtualSize,e.moveDivider=e.divider*(e.trackSize/f.size),e.dragSize=e.trackSize*e.divider,f.isHorizontal()?e.drag[0].style.width=e.dragSize+"px":e.drag[0].style.height=e.dragSize+"px",e.divider>=1?e.track[0].style.display="none":e.track[0].style.display="",f.params.scrollbarHide&&(e.track[0].style.opacity=0)}},setTranslate:function(){if(f.params.scrollbar){var e,a=f.scrollbar,t=(f.translate,a.dragSize);e=(a.trackSize-a.dragSize)*f.progress,f.rtl&&f.isHorizontal()?(e=-e,e>0?(t=a.dragSize-e,e=0):-e+a.dragSize>a.trackSize&&(t=a.trackSize+e)):e<0?(t=a.dragSize+e,e=0):e+a.dragSize>a.trackSize&&(t=a.trackSize-e),f.isHorizontal()?(f.support.transforms3d?a.drag.transform("translate3d("+e+"px, 0, 0)"):a.drag.transform("translateX("+e+"px)"),a.drag[0].style.width=t+"px"):(f.support.transforms3d?a.drag.transform("translate3d(0px, "+e+"px, 0)"):a.drag.transform("translateY("+e+"px)"),a.drag[0].style.height=t+"px"),f.params.scrollbarHide&&(clearTimeout(a.timeout),a.track[0].style.opacity=1,a.timeout=setTimeout(function(){a.track[0].style.opacity=0,a.track.transition(400)},1e3))}},setTransition:function(e){f.params.scrollbar&&f.scrollbar.drag.transition(e)}},f.controller={LinearSpline:function(e,a){var t=function(){var e,a,t;return function(r,n){for(a=-1,e=r.length;e-a>1;)r[t=e+a>>1]<=n?a=t:e=t;return e}}();this.x=e,this.y=a,this.lastIndex=e.length-1;var r,n;this.x.length;this.interpolate=function(e){return e?(n=t(this.x,e),r=n-1,(e-this.x[r])*(this.y[n]-this.y[r])/(this.x[n]-this.x[r])+this.y[r]):0}},getInterpolateFunction:function(e){f.controller.spline||(f.controller.spline=f.params.loop?new f.controller.LinearSpline(f.slidesGrid,e.slidesGrid):new f.controller.LinearSpline(f.snapGrid,e.snapGrid))},setTranslate:function(e,a){function t(a){e=a.rtl&&"horizontal"===a.params.direction?-f.translate:f.translate,"slide"===f.params.controlBy&&(f.controller.getInterpolateFunction(a),n=-f.controller.spline.interpolate(-e)),n&&"container"!==f.params.controlBy||(r=(a.maxTranslate()-a.minTranslate())/(f.maxTranslate()-f.minTranslate()),n=(e-f.minTranslate())*r+a.minTranslate()),f.params.controlInverse&&(n=a.maxTranslate()-n),a.updateProgress(n),a.setWrapperTranslate(n,!1,f),a.updateActiveIndex()}var r,n,i=f.params.control;if(Array.isArray(i))for(var s=0;s<i.length;s++)i[s]!==a&&i[s]instanceof Swiper&&t(i[s]);else i instanceof Swiper&&a!==i&&t(i)},setTransition:function(e,a){function t(a){a.setWrapperTransition(e,f),0!==e&&(a.onTransitionStart(),a.wrapper.transitionEnd(function(){n&&(a.params.loop&&"slide"===f.params.controlBy&&a.fixLoop(),a.onTransitionEnd())}))}var r,n=f.params.control;if(Array.isArray(n))for(r=0;r<n.length;r++)n[r]!==a&&n[r]instanceof Swiper&&t(n[r]);else n instanceof Swiper&&a!==n&&t(n)}},f.parallax={setTranslate:function(){f.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){s(this,f.progress)}),f.slides.each(function(){var e=g(this);e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){s(this,Math.min(Math.max(e[0].progress,-1),1))})})},setTransition:function(e){void 0===e&&(e=f.params.speed),f.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=g(this),t=parseInt(a.attr("data-swiper-parallax-duration"),10)||e;0===e&&(t=0),a.transition(t)})}},f.zoom={scale:1,currentScale:1,isScaling:!1,gesture:{slide:void 0,slideWidth:void 0,slideHeight:void 0,image:void 0,imageWrap:void 0,zoomMax:f.params.zoomMax},image:{isTouched:void 0,isMoved:void 0,currentX:void 0,currentY:void 0,minX:void 0,minY:void 0,maxX:void 0,maxY:void 0,width:void 0,height:void 0,startX:void 0,startY:void 0,touchesStart:{},touchesCurrent:{}},velocity:{x:void 0,y:void 0,prevPositionX:void 0,prevPositionY:void 0,prevTime:void 0},getDistanceBetweenTouches:function(e){if(e.targetTouches.length<2)return 1;var a=e.targetTouches[0].pageX,t=e.targetTouches[0].pageY,r=e.targetTouches[1].pageX,n=e.targetTouches[1].pageY;return Math.sqrt(Math.pow(r-a,2)+Math.pow(n-t,2))},onGestureStart:function(e){var a=f.zoom;if(!f.support.gestures){if("touchstart"!==e.type||"touchstart"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleStart=a.getDistanceBetweenTouches(e)}if(!(a.gesture.slide&&a.gesture.slide.length||(a.gesture.slide=g(this),0===a.gesture.slide.length&&(a.gesture.slide=f.slides.eq(f.activeIndex)),a.gesture.image=a.gesture.slide.find("img, svg, canvas"),a.gesture.imageWrap=a.gesture.image.parent("."+f.params.zoomContainerClass),a.gesture.zoomMax=a.gesture.imageWrap.attr("data-swiper-zoom")||f.params.zoomMax,0!==a.gesture.imageWrap.length)))return void(a.gesture.image=void 0);a.gesture.image.transition(0),a.isScaling=!0},onGestureChange:function(e){var a=f.zoom;if(!f.support.gestures){if("touchmove"!==e.type||"touchmove"===e.type&&e.targetTouches.length<2)return;a.gesture.scaleMove=a.getDistanceBetweenTouches(e)}a.gesture.image&&0!==a.gesture.image.length&&(f.support.gestures?a.scale=e.scale*a.currentScale:a.scale=a.gesture.scaleMove/a.gesture.scaleStart*a.currentScale,a.scale>a.gesture.zoomMax&&(a.scale=a.gesture.zoomMax-1+Math.pow(a.scale-a.gesture.zoomMax+1,.5)),a.scale<f.params.zoomMin&&(a.scale=f.params.zoomMin+1-Math.pow(f.params.zoomMin-a.scale+1,.5)),a.gesture.image.transform("translate3d(0,0,0) scale("+a.scale+")"))},onGestureEnd:function(e){var a=f.zoom;!f.support.gestures&&("touchend"!==e.type||"touchend"===e.type&&e.changedTouches.length<2)||a.gesture.image&&0!==a.gesture.image.length&&(a.scale=Math.max(Math.min(a.scale,a.gesture.zoomMax),f.params.zoomMin),a.gesture.image.transition(f.params.speed).transform("translate3d(0,0,0) scale("+a.scale+")"),a.currentScale=a.scale,a.isScaling=!1,1===a.scale&&(a.gesture.slide=void 0))},onTouchStart:function(e,a){var t=e.zoom;t.gesture.image&&0!==t.gesture.image.length&&(t.image.isTouched||("android"===e.device.os&&a.preventDefault(),t.image.isTouched=!0,t.image.touchesStart.x="touchstart"===a.type?a.targetTouches[0].pageX:a.pageX,t.image.touchesStart.y="touchstart"===a.type?a.targetTouches[0].pageY:a.pageY))},onTouchMove:function(e){var a=f.zoom;if(a.gesture.image&&0!==a.gesture.image.length&&(f.allowClick=!1,a.image.isTouched&&a.gesture.slide)){a.image.isMoved||(a.image.width=a.gesture.image[0].offsetWidth,a.image.height=a.gesture.image[0].offsetHeight,a.image.startX=f.getTranslate(a.gesture.imageWrap[0],"x")||0,a.image.startY=f.getTranslate(a.gesture.imageWrap[0],"y")||0,a.gesture.slideWidth=a.gesture.slide[0].offsetWidth,a.gesture.slideHeight=a.gesture.slide[0].offsetHeight,a.gesture.imageWrap.transition(0),f.rtl&&(a.image.startX=-a.image.startX),f.rtl&&(a.image.startY=-a.image.startY));var t=a.image.width*a.scale,r=a.image.height*a.scale;if(!(t<a.gesture.slideWidth&&r<a.gesture.slideHeight)){if(a.image.minX=Math.min(a.gesture.slideWidth/2-t/2,0),a.image.maxX=-a.image.minX,a.image.minY=Math.min(a.gesture.slideHeight/2-r/2,0),a.image.maxY=-a.image.minY,a.image.touchesCurrent.x="touchmove"===e.type?e.targetTouches[0].pageX:e.pageX,a.image.touchesCurrent.y="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY,!a.image.isMoved&&!a.isScaling){if(f.isHorizontal()&&Math.floor(a.image.minX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x<a.image.touchesStart.x||Math.floor(a.image.maxX)===Math.floor(a.image.startX)&&a.image.touchesCurrent.x>a.image.touchesStart.x)return void(a.image.isTouched=!1);if(!f.isHorizontal()&&Math.floor(a.image.minY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y<a.image.touchesStart.y||Math.floor(a.image.maxY)===Math.floor(a.image.startY)&&a.image.touchesCurrent.y>a.image.touchesStart.y)return void(a.image.isTouched=!1)}e.preventDefault(),e.stopPropagation(),a.image.isMoved=!0,a.image.currentX=a.image.touchesCurrent.x-a.image.touchesStart.x+a.image.startX,a.image.currentY=a.image.touchesCurrent.y-a.image.touchesStart.y+a.image.startY,a.image.currentX<a.image.minX&&(a.image.currentX=a.image.minX+1-Math.pow(a.image.minX-a.image.currentX+1,.8)),a.image.currentX>a.image.maxX&&(a.image.currentX=a.image.maxX-1+Math.pow(a.image.currentX-a.image.maxX+1,.8)),a.image.currentY<a.image.minY&&(a.image.currentY=a.image.minY+1-Math.pow(a.image.minY-a.image.currentY+1,.8)),a.image.currentY>a.image.maxY&&(a.image.currentY=a.image.maxY-1+Math.pow(a.image.currentY-a.image.maxY+1,.8)),a.velocity.prevPositionX||(a.velocity.prevPositionX=a.image.touchesCurrent.x),a.velocity.prevPositionY||(a.velocity.prevPositionY=a.image.touchesCurrent.y),a.velocity.prevTime||(a.velocity.prevTime=Date.now()),a.velocity.x=(a.image.touchesCurrent.x-a.velocity.prevPositionX)/(Date.now()-a.velocity.prevTime)/2,a.velocity.y=(a.image.touchesCurrent.y-a.velocity.prevPositionY)/(Date.now()-a.velocity.prevTime)/2,Math.abs(a.image.touchesCurrent.x-a.velocity.prevPositionX)<2&&(a.velocity.x=0),Math.abs(a.image.touchesCurrent.y-a.velocity.prevPositionY)<2&&(a.velocity.y=0),a.velocity.prevPositionX=a.image.touchesCurrent.x,a.velocity.prevPositionY=a.image.touchesCurrent.y,a.velocity.prevTime=Date.now(),a.gesture.imageWrap.transform("translate3d("+a.image.currentX+"px, "+a.image.currentY+"px,0)")}}},onTouchEnd:function(e,a){var t=e.zoom;if(t.gesture.image&&0!==t.gesture.image.length){if(!t.image.isTouched||!t.image.isMoved)return t.image.isTouched=!1,void(t.image.isMoved=!1);t.image.isTouched=!1,t.image.isMoved=!1;var r=300,n=300,i=t.velocity.x*r,s=t.image.currentX+i,o=t.velocity.y*n,l=t.image.currentY+o;0!==t.velocity.x&&(r=Math.abs((s-t.image.currentX)/t.velocity.x)),0!==t.velocity.y&&(n=Math.abs((l-t.image.currentY)/t.velocity.y));var p=Math.max(r,n);t.image.currentX=s,t.image.currentY=l;var d=t.image.width*t.scale,c=t.image.height*t.scale;t.image.minX=Math.min(t.gesture.slideWidth/2-d/2,0),t.image.maxX=-t.image.minX,t.image.minY=Math.min(t.gesture.slideHeight/2-c/2,0),t.image.maxY=-t.image.minY,t.image.currentX=Math.max(Math.min(t.image.currentX,t.image.maxX),t.image.minX),t.image.currentY=Math.max(Math.min(t.image.currentY,t.image.maxY),t.image.minY),t.gesture.imageWrap.transition(p).transform("translate3d("+t.image.currentX+"px, "+t.image.currentY+"px,0)")}},onTransitionEnd:function(e){var a=e.zoom;a.gesture.slide&&e.previousIndex!==e.activeIndex&&(a.gesture.image.transform("translate3d(0,0,0) scale(1)"),a.gesture.imageWrap.transform("translate3d(0,0,0)"),a.gesture.slide=a.gesture.image=a.gesture.imageWrap=void 0,a.scale=a.currentScale=1)},toggleZoom:function(e,a){var t=e.zoom;if(t.gesture.slide||(t.gesture.slide=e.clickedSlide?g(e.clickedSlide):e.slides.eq(e.activeIndex),t.gesture.image=t.gesture.slide.find("img, svg, canvas"),t.gesture.imageWrap=t.gesture.image.parent("."+e.params.zoomContainerClass)),t.gesture.image&&0!==t.gesture.image.length){var r,n,i,s,o,l,p,d,c,m,u,h,f,v,b,w,C,y;void 0===t.image.touchesStart.x&&a?(r="touchend"===a.type?a.changedTouches[0].pageX:a.pageX,n="touchend"===a.type?a.changedTouches[0].pageY:a.pageY):(r=t.image.touchesStart.x,n=t.image.touchesStart.y),t.scale&&1!==t.scale?(t.scale=t.currentScale=1,t.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"),t.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"),t.gesture.slide=void 0):(t.scale=t.currentScale=t.gesture.imageWrap.attr("data-swiper-zoom")||e.params.zoomMax,a?(C=t.gesture.slide[0].offsetWidth,y=t.gesture.slide[0].offsetHeight,i=t.gesture.slide.offset().left,s=t.gesture.slide.offset().top,o=i+C/2-r,l=s+y/2-n,c=t.gesture.image[0].offsetWidth,m=t.gesture.image[0].offsetHeight,u=c*t.scale,h=m*t.scale,f=Math.min(C/2-u/2,0),v=Math.min(y/2-h/2,0),b=-f,w=-v,p=o*t.scale,d=l*t.scale,p<f&&(p=f),p>b&&(p=b),d<v&&(d=v),d>w&&(d=w)):(p=0,d=0),t.gesture.imageWrap.transition(300).transform("translate3d("+p+"px, "+d+"px,0)"),t.gesture.image.transition(300).transform("translate3d(0,0,0) scale("+t.scale+")"))}},attachEvents:function(e){var a=e?"off":"on";if(f.params.zoom){var t=(f.slides,!("touchstart"!==f.touchEvents.start||!f.support.passiveListener||!f.params.passiveListeners)&&{passive:!0,capture:!1});f.support.gestures?(f.slides[a]("gesturestart",f.zoom.onGestureStart,t),f.slides[a]("gesturechange",f.zoom.onGestureChange,t),f.slides[a]("gestureend",f.zoom.onGestureEnd,t)):"touchstart"===f.touchEvents.start&&(f.slides[a](f.touchEvents.start,f.zoom.onGestureStart,t),f.slides[a](f.touchEvents.move,f.zoom.onGestureChange,t),f.slides[a](f.touchEvents.end,f.zoom.onGestureEnd,t)),f[a]("touchStart",f.zoom.onTouchStart),f.slides.each(function(e,t){g(t).find("."+f.params.zoomContainerClass).length>0&&g(t)[a](f.touchEvents.move,f.zoom.onTouchMove)}),f[a]("touchEnd",f.zoom.onTouchEnd),f[a]("transitionEnd",f.zoom.onTransitionEnd),f.params.zoomToggle&&f.on("doubleTap",f.zoom.toggleZoom)}},init:function(){f.zoom.attachEvents()},destroy:function(){f.zoom.attachEvents(!0)}},f._plugins=[];for(var z in f.plugins){var B=f.plugins[z](f,f.params[z]);B&&f._plugins.push(B)}return f.callPlugins=function(e){for(var a=0;a<f._plugins.length;a++)e in f._plugins[a]&&f._plugins[a][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},f.emitterEventListeners={},f.emit=function(e){f.params[e]&&f.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var a;if(f.emitterEventListeners[e])for(a=0;a<f.emitterEventListeners[e].length;a++)f.emitterEventListeners[e][a](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);f.callPlugins&&f.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},f.on=function(e,a){return e=o(e),f.emitterEventListeners[e]||(f.emitterEventListeners[e]=[]),f.emitterEventListeners[e].push(a),f},f.off=function(e,a){var t;if(e=o(e),void 0===a)return f.emitterEventListeners[e]=[],f;if(f.emitterEventListeners[e]&&0!==f.emitterEventListeners[e].length){for(t=0;t<f.emitterEventListeners[e].length;t++)f.emitterEventListeners[e][t]===a&&f.emitterEventListeners[e].splice(t,1);return f}},f.once=function(e,a){e=o(e);var t=function(){a(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),f.off(e,t)};return f.on(e,t),f},f.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,a){return e.attr("role",a),e},addLabel:function(e,a){return e.attr("aria-label",a),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(e){
13===e.keyCode&&(g(e.target).is(f.params.nextButton)?(f.onClickNext(e),f.isEnd?f.a11y.notify(f.params.lastSlideMessage):f.a11y.notify(f.params.nextSlideMessage)):g(e.target).is(f.params.prevButton)&&(f.onClickPrev(e),f.isBeginning?f.a11y.notify(f.params.firstSlideMessage):f.a11y.notify(f.params.prevSlideMessage)),g(e.target).is("."+f.params.bulletClass)&&g(e.target)[0].click())},liveRegion:g('<span class="'+f.params.notificationClass+'" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var a=f.a11y.liveRegion;0!==a.length&&(a.html(""),a.html(e))},init:function(){f.params.nextButton&&f.nextButton&&f.nextButton.length>0&&(f.a11y.makeFocusable(f.nextButton),f.a11y.addRole(f.nextButton,"button"),f.a11y.addLabel(f.nextButton,f.params.nextSlideMessage)),f.params.prevButton&&f.prevButton&&f.prevButton.length>0&&(f.a11y.makeFocusable(f.prevButton),f.a11y.addRole(f.prevButton,"button"),f.a11y.addLabel(f.prevButton,f.params.prevSlideMessage)),g(f.container).append(f.a11y.liveRegion)},initPagination:function(){f.params.pagination&&f.params.paginationClickable&&f.bullets&&f.bullets.length&&f.bullets.each(function(){var e=g(this);f.a11y.makeFocusable(e),f.a11y.addRole(e,"button"),f.a11y.addLabel(e,f.params.paginationBulletMessage.replace(/{{index}}/,e.index()+1))})},destroy:function(){f.a11y.liveRegion&&f.a11y.liveRegion.length>0&&f.a11y.liveRegion.remove()}},f.init=function(){f.params.loop&&f.createLoop(),f.updateContainerSize(),f.updateSlidesSize(),f.updatePagination(),f.params.scrollbar&&f.scrollbar&&(f.scrollbar.set(),f.params.scrollbarDraggable&&f.scrollbar.enableDraggable()),"slide"!==f.params.effect&&f.effects[f.params.effect]&&(f.params.loop||f.updateProgress(),f.effects[f.params.effect].setTranslate()),f.params.loop?f.slideTo(f.params.initialSlide+f.loopedSlides,0,f.params.runCallbacksOnInit):(f.slideTo(f.params.initialSlide,0,f.params.runCallbacksOnInit),0===f.params.initialSlide&&(f.parallax&&f.params.parallax&&f.parallax.setTranslate(),f.lazy&&f.params.lazyLoading&&(f.lazy.load(),f.lazy.initialImageLoaded=!0))),f.attachEvents(),f.params.observer&&f.support.observer&&f.initObservers(),f.params.preloadImages&&!f.params.lazyLoading&&f.preloadImages(),f.params.zoom&&f.zoom&&f.zoom.init(),f.params.autoplay&&f.startAutoplay(),f.params.keyboardControl&&f.enableKeyboardControl&&f.enableKeyboardControl(),f.params.mousewheelControl&&f.enableMousewheelControl&&f.enableMousewheelControl(),f.params.hashnavReplaceState&&(f.params.replaceState=f.params.hashnavReplaceState),f.params.history&&f.history&&f.history.init(),f.params.hashnav&&f.hashnav&&f.hashnav.init(),f.params.a11y&&f.a11y&&f.a11y.init(),f.emit("onInit",f)},f.cleanupStyles=function(){f.container.removeClass(f.classNames.join(" ")).removeAttr("style"),f.wrapper.removeAttr("style"),f.slides&&f.slides.length&&f.slides.removeClass([f.params.slideVisibleClass,f.params.slideActiveClass,f.params.slideNextClass,f.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),f.paginationContainer&&f.paginationContainer.length&&f.paginationContainer.removeClass(f.params.paginationHiddenClass),f.bullets&&f.bullets.length&&f.bullets.removeClass(f.params.bulletActiveClass),f.params.prevButton&&g(f.params.prevButton).removeClass(f.params.buttonDisabledClass),f.params.nextButton&&g(f.params.nextButton).removeClass(f.params.buttonDisabledClass),f.params.scrollbar&&f.scrollbar&&(f.scrollbar.track&&f.scrollbar.track.length&&f.scrollbar.track.removeAttr("style"),f.scrollbar.drag&&f.scrollbar.drag.length&&f.scrollbar.drag.removeAttr("style"))},f.destroy=function(e,a){f.detachEvents(),f.stopAutoplay(),f.params.scrollbar&&f.scrollbar&&f.params.scrollbarDraggable&&f.scrollbar.disableDraggable(),f.params.loop&&f.destroyLoop(),a&&f.cleanupStyles(),f.disconnectObservers(),f.params.zoom&&f.zoom&&f.zoom.destroy(),f.params.keyboardControl&&f.disableKeyboardControl&&f.disableKeyboardControl(),f.params.mousewheelControl&&f.disableMousewheelControl&&f.disableMousewheelControl(),f.params.a11y&&f.a11y&&f.a11y.destroy(),f.params.history&&!f.params.replaceState&&window.removeEventListener("popstate",f.history.setHistoryPopState),f.params.hashnav&&f.hashnav&&f.hashnav.destroy(),f.emit("onDestroy"),!1!==e&&(f=null)},f.init(),f}},Swiper.prototype={isSafari:function(){var e=window.navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1,lteIE9:function(){var e=document.createElement("div");return e.innerHTML="\x3c!--[if lte IE 9]><i></i><![endif]--\x3e",1===e.getElementsByTagName("i").length}()},device:function(){var e=window.navigator.userAgent,a=e.match(/(Android);?[\s\/]+([\d.]+)?/),t=e.match(/(iPad).*OS\s([\d_]+)/),r=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!t&&e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);return{ios:t||n||r,android:a}}(),support:{touch:window.Modernizr&&!0===Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&!0===Modernizr.csstransforms3d||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,a="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),t=0;t<a.length;t++)if(a[t]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}(),passiveListener:function(){var e=!1;try{var a=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("testPassiveListener",null,a)}catch(e){}return e}(),gestures:function(){return"ongesturestart"in window}()},plugins:{}}}();
//# sourceMappingURL=framework7.min.js.map

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(28)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(30)

var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(27),
  /* scopeId */
  "data-v-6c106a1e",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.functionalOptions = undefined;
  this.functionalScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.children = cloneVNodes(vnode.children);
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if ("development" !== 'production' && inject) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if (inBrowser && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  // static trees can be rendered once and cached on the contructor options
  // so every instance shares the same cached trees
  var renderFns = this.$options.staticRenderFns;
  var cached = renderFns.cached || (renderFns.cached = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.functionalScopeId = options._scopeId;
        vnode.functionalContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.functionalContext = contextVm;
    vnode.functionalOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        if (slot._rendered) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && cached$$1 !== current) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }

      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(
            config.ignoredElements.length &&
            config.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(tag)
                : ignore === tag
            })
          ) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.functionalScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.functionalContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (!el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });
      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(24).setImmediate))

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vuex = factory());
}(this, (function () { 'use strict';

var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    "development" !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ("development" !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if ("development" !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ("development" !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

return index;

})));


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vues_scorecard_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vues_scorecard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__vues_scorecard_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




let self;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'main',
  data() {
    return {
      // tweets : store.tweets,
      // newTweet : ''
    };
  },
  created() {
    self = this;
  },
  methods: {}
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_gsap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_gsap__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




let self;

const SCORES_TO_SHOW = ['FRONT9', 'BACK9', 'ALL18'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'leaderboard',
    data() {
        return {
            // viewMode: '',
            totalHolesToPlay: 18, // default to 18.
            isPortrait: window.matchMedia("(orientation: portrait)").matches,
            selection: 1,
            showSelection: false,
            selector: {
                width: 0
            },
            toSelector: {
                width: 0
            }
        };
    },
    computed: {
        viewMode() {
            return this.$store.state.viewMode;
        },
        players() {
            return this.$store.state.players;
        },
        columnsToDisplay() {
            // names
            let columns = [{
                description: 'player names',
                header: {
                    classes: ['lb-header-cell--name', 'lb-header-text'],
                    value: this.viewMode
                },
                classes: ['lb-col--name'],
                textClasses: ['lb-data-cell--name'],
                values: this.players.map(player => {
                    return player.userInfo.name;
                }),
                selectable: false
            }];

            if (this.viewMode && this.viewMode === 'FRONT9' || this.viewMode === 'ALL18') {
                // Front 9 scores
                for (let i = 0; i < 9; i++) {
                    columns.push({
                        description: `hole ${i + 1} score`,
                        header: {
                            classes: ['lb-header-cell', 'lb-header-text'],
                            value: i + 1
                        },
                        classes: ['lb-col'],
                        textClasses: ['lb-data-cell'],
                        holeNumber: i + 1,
                        values: this.players.map(player => {
                            return player.scores[i];
                        }),
                        selectable: true
                    });
                }

                // Front 9 subtotal
                columns.push({
                    description: 'Font 9 score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: ''
                    },
                    classes: ['lb-col'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map(player => {
                        return this.subTotal(player.scores, 0, 8);
                    }),
                    selectable: false
                });
            }

            if (this.viewMode && this.viewMode === 'BACK9' || this.viewMode === 'ALL18') {

                // Back 9 scores
                for (let i = 9; i < 18; i++) {
                    columns.push({
                        description: `hole ${i + 1} score`,
                        header: {
                            classes: ['lb-header-cell', 'lb-header-text'],
                            value: i + 1
                        },
                        classes: ['lb-col'],
                        textClasses: ['lb-data-cell'],
                        holeNumber: i + 1,
                        values: this.players.map(player => {
                            return player.scores[i];
                        }),
                        selectable: true
                    });
                }

                // Back 9 subtotal
                columns.push({
                    description: 'Back 9 score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: ''
                    },
                    classes: ['lb-col'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map(player => {
                        return this.subTotal(player.scores, 9, 17);
                    }),
                    selectable: false
                });

                // Total score
                columns.push({
                    description: 'Total score',
                    header: {
                        classes: ['lb-header-cell', 'lb-header-text'],
                        value: 'TOT'
                    },
                    classes: ['lb-col'],
                    textClasses: ['lb-data-cell'],
                    values: this.players.map(player => {
                        return this.subTotal(player.scores, 0, 17);
                    }),
                    selectable: false
                });
            }

            return columns;
        },
        leaderBoardHeight() {
            return 2 * (this.players.length + 1);
        },
        compLeaderBoardHeight: function () {
            return {
                active: true,
                height: 2 * (this.players.length + 1) + 'rem'
            };
        },
        selectorStyles() {
            return {
                active: true,
                height: 2 * (this.players.length + 1) + 'rem',
                width: this.selector.width + 'px'
                // left: this.selector.left +'px'
            };
        }
    },
    created() {
        self = this;
        var mediaQueryRule = window.matchMedia("(orientation: portrait)");
        mediaQueryRule.onchange = function (e) {
            self.isPortrait = window.matchMedia("(orientation: portrait)").matches;
            self.updateViewMode();
        };
        window.addEventListener('resize', self.syncSelector);
        self.updateViewMode();
    },
    mounted() {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            self.initialSelection();
        });
    },
    methods: {
        // beforeEnter(el) {
        // },
        // enter(el, done) {
        //     TweenMax.to(el, 1, {left: this.toSelector.offset, onComplete: done});
        // },
        // leave(el, done) {
        // },
        setViewMode(mode) {
            this.$store.dispatch('setViewMode', mode);
        },
        syncSelector() {
            let targetElm = this.$refs['hole' + this.selection][0];
            let targetBox = targetElm.getBoundingClientRect();
            let lbSelectorElm = this.$refs.lbSelector;
            this.selector.width = targetBox.width;
            __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(lbSelectorElm, 0, { left: targetBox.left });
        },
        initialSelection() {
            //Move it into position.
            let newTargetElm = this.$refs.hole1[0];
            let lbSelectorElm = this.$refs.lbSelector;

            let targetBox = newTargetElm.getBoundingClientRect();
            this.selector.width = targetBox.width;
            // this.selector.left = targetBox.left;
            // lbSelectorElm.left = targetBox.left;
            __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(lbSelectorElm, 0, { left: targetBox.left });
            __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(lbSelectorElm, .225, { opacity: 1 });

            //Fade in.
            this.showSelection = true;
        },
        updateViewMode() {
            if (this.isPortrait) {
                this.setViewMode(this.selection < 10 ? 'FRONT9' : 'BACK9');
                // this.viewMode = this.selection < 10 ? 'FRONT9' : 'BACK9';
            } else {
                this.setViewMode('ALL18');
                // this.viewMode = 'ALL18'
            }
        },
        subTotal(scores, start, end) {
            return scores.slice(start, end).reduce((prev, cur) => {
                return prev + cur;
            });
        },
        handleScoreSelect(selectable, event) {
            if (!selectable || !event.currentTarget.attributes.hole) return;
            let newTarget = event.currentTarget;
            let newHoleNumber = newTarget.attributes.hole.value;
            let previousHole = this.selection || 1;
            let distanceToTravel = Math.abs(newHoleNumber - previousHole);

            let animationLength = (225 + 150 * distanceToTravel / 17) / 1000;

            this.selection = parseInt(event.currentTarget.attributes.hole.value);
            let targetBox = event.currentTarget.getBoundingClientRect();
            let toBeState = {
                left: targetBox.left,
                height: targetBox.height,
                width: targetBox.width
            };
            let lbSelectorElm = this.$refs.lbSelector;
            console.log('animation length: ', animationLength);
            __WEBPACK_IMPORTED_MODULE_0_gsap__["TweenMax"].to(lbSelectorElm, animationLength, toBeState);

            this.selector = Object.assign({}, this.selector, toBeState);
        }
    }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store_js__ = __webpack_require__(1);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



let self;

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'scorecard',
    data() {
        return {
            //      tweets : store.tweets,
            //      newTweet : ''
        };
    },
    created() {
        self = this;
    },
    methods: {
        addPlayer() {
            this.$store.dispatch('addPlayer');
        }
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vuex__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_vue__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Framework7__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_Framework7___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_Framework7__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Framework7Vue__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_Framework7Vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_Framework7Vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vues_scorecard_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__vues_scorecard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__vues_scorecard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vues_leaderboard_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vues_leaderboard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__vues_leaderboard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__store_js__ = __webpack_require__(1);










document.addEventListener('deviceready', function () {

  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vuex___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_5_Framework7Vue___default.a);

  const store = new __WEBPACK_IMPORTED_MODULE_1_vuex___default.a.Store(__WEBPACK_IMPORTED_MODULE_8__store_js__["a" /* default */]);

  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('scorecard', __WEBPACK_IMPORTED_MODULE_6__vues_scorecard_vue___default.a);
  __WEBPACK_IMPORTED_MODULE_0_vue___default.a.component('leaderboard', __WEBPACK_IMPORTED_MODULE_7__vues_leaderboard_vue___default.a);

  new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    render: h => h(__WEBPACK_IMPORTED_MODULE_2__main_vue___default.a),
    store,
    //    components: {'scorecard', Scorecard},
    framework7: {
      root: '#app',
      animateNavBackIcon: true,
      routes: __WEBPACK_IMPORTED_MODULE_3__routes_js__["a" /* default */],
      material: true
    }
  });
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const ADD_PLAYER = 'ADD_PLAYER';
/* harmony export (immutable) */ __webpack_exports__["a"] = ADD_PLAYER;

const SET_VIEW = 'SET_VIEW';
/* harmony export (immutable) */ __webpack_exports__["b"] = SET_VIEW;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, ".banner-ad__horiz{height:50px;background-color:#639;border:1px solid #000}.statusbar-overlay{background:#000}.navbar{box-shadow:0 2px 5px rgba(0,0,0,.26)}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "#leaderboard[data-v-38979096]{height:100px;width:100%}#scorecard .page[data-v-38979096]{background:#ccc5af}.se-player-card[data-v-38979096]{height:110px;display:flex;margin:8px;background-color:#fff;border-radius:4px;padding:10px;box-shadow:0 1px 3px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.24)}.se-pc-user-info[data-v-38979096]{flex:1 0 0}.se-pc-user-info__label[data-v-38979096]{flex:1 0 0;font-family:Supercell-Magic;font-size:20px}.se-pc-user-info__pic[data-v-38979096]{flex:1 0 0}.se-pc-user-info__pic>img[data-v-38979096]{width:50px;height:auto}.se-pc-score-box[data-v-38979096]{flex:1 0 0;height:100%;margin-right:8px;border-radius:12px;font-family:Supercell-Magic;font-size:45px;vertical-align:middle;line-height:100px;text-align:center;background-color:#32681d;color:#fff;text-shadow:4px 4px #000}.se-pc-score-pad[data-v-38979096]{flex:2 0 0;height:100%;flex-direction:row}.se-pc-sp-number-container[data-v-38979096],.se-pc-sp-row[data-v-38979096]{flex:1 0 0;justify-content:space-around}.se-pc-sp-row[data-v-38979096]{display:flex}.se-pc-sp-number[data-v-38979096]{flex:1 0 0;margin:2px 4px}.scorepad__button[data-v-38979096]{text-decoration:none;text-align:center;border-radius:2px;box-sizing:border-box;appearance:none;-webkit-appearance:none;-moz-appearance:none;-ms-appearance:none;white-space:nowrap;text-overflow:ellipsis;font-size:14px;text-transform:uppercase;font-family:inherit;cursor:pointer;overflow:hidden;outline:0;border:none;transition-duration:.3s;-webkit-transition-duration:.3s;transform:translateZ(0);-webkit-transform:translateZ(0);user-select:none;-webkit-user-select:none;background:#629749;color:#fff;font-family:Supercell-Magic;text-shadow:2px 2px #000;padding:1px 0}", ""]);

// exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)();
// imports


// module
exports.push([module.i, "#leaderboard[data-v-6c106a1e]{height:100px;width:100%}.lb-layer[data-v-6c106a1e]{position:absolute;width:100%}.lb-layer-background--container[data-v-6c106a1e]{background-color:#fff8e1}.lb-layer-background--header[data-v-6c106a1e]{height:2rem;display:flex;flex-direction:row;align-items:center;background-color:#32681d;color:#fff}.lb-selection-indicator[data-v-6c106a1e]{opacity:0;position:absolute;background-color:hsla(120,2%,88%,.8);border:2px solid;border-radius:4px;box-shadow:1px 0 3px rgba(0,0,0,.12)}.lb-layer-info--container[data-v-6c106a1e]{display:flex;flex-direction:row;align-items:center}.lb-col--name[data-v-6c106a1e]{width:5rem;margin-left:1rem}.lb-col[data-v-6c106a1e]{display:flex;flex:1 0 0;flex-direction:column;align-items:center}.lb-header-text[data-v-6c106a1e]{text-shadow:2px 2px #000;-webkit-text-fill-color:#fff;-webkit-text-stroke-width:1px;-webkit-text-stroke-color:#000}.lb-data-cell[data-v-6c106a1e],.lb-header-cell--name[data-v-6c106a1e],.lb-header-cell[data-v-6c106a1e]{height:2rem;display:flex;line-height:2rem;text-align:center;justify-content:center;user-select:none}.lb-data-cell--name[data-v-6c106a1e]{height:2rem;display:flex;line-height:2rem;text-align:center;user-select:none}.fade-enter-active[data-v-6c106a1e],.fade-leave-active[data-v-6c106a1e]{transition:opacity .5s}.fade-enter[data-v-6c106a1e],.fade-leave-to[data-v-6c106a1e]{opacity:0}", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * VERSION: 1.20.3
 * DATE: 2017-10-02
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.3",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.3",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.3",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,
d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.3",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{
parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},q.config=b.config=function(a,c){return new b(a,c)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"=="function"&&__webpack_require__(32)&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return o}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){return arguments.length?(p=a||1/m,void(q=Math.min(b,p,0))):1/m>p},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&("hidden"!==d.visibilityState||!i.lagSmoothing())&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||m,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,
this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.3",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=null),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0), __webpack_require__(22)))

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(23);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "theme-golf",
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "statusbar-overlay"
  }), _vm._v(" "), _c('div', {
    staticClass: "panel-overlay"
  }), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "views"
  }, [_c('div', {
    staticClass: "view view-main"
  }, [_c('div', {
    staticClass: "pages navbar-fixed"
  }, [_vm._m(1), _vm._v(" "), _c('scorecard')], 1)])])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "panel panel-left panel-cover"
  }, [_c('div', {
    staticClass: "view navbar-fixed"
  }, [_c('div', {
    staticClass: "pages"
  }, [_c('div', {
    staticClass: "page",
    attrs: {
      "data-page": "panel-left"
    }
  }, [_c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "navbar-inner"
  }, [_c('div', {
    staticClass: "center"
  }, [_vm._v("Options and Such")])])]), _vm._v(" "), _c('div', {
    staticClass: "page-content"
  }, [_c('div', {
    staticClass: "content-block"
  }, [_c('p', [_c('b', [_vm._v("TODO:")]), _vm._v(" navigation and quick options.  Also maybe "), _c('a', {
    staticClass: "close-panel",
    attrs: {
      "href": "#"
    }
  }, [_vm._v("close me")]), _vm._v(" btn.")])]), _vm._v(" "), _c('div', {
    staticClass: "content-block-title"
  }, [_vm._v("Lorem Ipsum")]), _vm._v(" "), _c('div', {
    staticClass: "content-block"
  }, [_c('p', [_vm._v("Long text block goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sem urna, gravida non scelerisque id, fringilla ac velit. Phasellus elementum a ipsum at ornare. Mauris sagittis rhoncus euismod. Integer convallis augue eu lacus ultrices, in dictum elit consequat. Nulla faucibus massa id felis egestas eleifend. Proin consequat dignissim magna ut scelerisque. Vestibulum ac lorem semper, posuere sapien nec, pharetra massa. Nulla a tellus facilisis, sollicitudin quam porta, aliquam lorem. Fusce dignissim eros ac diam molestie, ut ultrices lorem tristique. Ut facilisis augue ac nisi egestas malesuada. Nunc posuere tortor quis eleifend mollis. Aliquam erat volutpat. Donec feugiat elit tellus, nec convallis orci elementum in. Sed urna mi, vestibulum id tempus id, pretium et ante. Pellentesque eget sollicitudin ligula. Phasellus pellentesque velit eu porta suscipit.")])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "navbar"
  }, [_c('div', {
    staticClass: "navbar-inner"
  }, [_c('div', {
    staticClass: "center"
  }, [_vm._v("Golf Scorecard")]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('a', {
    staticClass: "open-panel link icon-only",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "icon icon-bars"
  })])])])])
}]}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "scorecard"
    }
  }, [_c('div', {
    staticClass: "page",
    attrs: {
      "data-page": "scorecard"
    }
  }, [_c('div', {
    staticStyle: {
      "margin-top": "56px"
    },
    attrs: {
      "id": "scorecard"
    }
  }, [_c('leaderboard'), _vm._v(" "), _c('div', {
    attrs: {
      "id": "hole-card"
    }
  })], 1), _vm._v(" "), _c('div', [_c('a', {
    staticClass: "open-popup link floating-button color-golf",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.addPlayer
    }
  }, [_c('i', {
    staticClass: "icon icon-plus"
  })])]), _vm._v(" "), _vm._m(0)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "score-entry-container"
  }, [_c('div', {
    staticClass: "se-player-card"
  }, [_c('span', {
    staticClass: "se-pc-user-info"
  }, [_c('span', {
    staticClass: "se-pc-user-info__label"
  }, [_vm._v("Pug 1")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-user-info__pic"
  }, [_c('img', {
    attrs: {
      "src": "img/profile-placeholder.png"
    }
  })])]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-score-box"
  }, [_c('span', [_vm._v("5")])]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-score-pad"
  }, [_c('span', {
    staticClass: "se-pc-sp-number-container"
  }, [_c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("1")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("2")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("3")])]), _vm._v(" "), _c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("4")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("5")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("6")])]), _vm._v(" "), _c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("7")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("8")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("9")])]), _vm._v(" "), _c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("10")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("+")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "se-player-card"
  }, [_c('span', {
    staticClass: "se-pc-user-info__label"
  }, [_vm._v("Pug 2")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-score-box"
  }, [_c('span', [_vm._v("-")])]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-score-pad"
  }, [_c('span', {
    staticClass: "se-pc-sp-number-container"
  }, [_c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("1")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("2")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("3")])]), _vm._v(" "), _c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("4")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("5")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("6")])]), _vm._v(" "), _c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("7")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("8")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("9")])]), _vm._v(" "), _c('div', {
    staticClass: "se-pc-sp-row"
  }, [_c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("10")]), _vm._v(" "), _c('span', {
    staticClass: "se-pc-sp-number scorepad__button button-raised ripple"
  }, [_vm._v("+")])])])])])])
}]}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    style: ({
      height: _vm.leaderBoardHeight + 'rem'
    }),
    attrs: {
      "id": "leaderboard"
    }
  }, [_c('div', {
    staticClass: "lb-layer lb-layer-background--container",
    style: (_vm.compLeaderBoardHeight)
  }, [_c('div', {
    staticClass: "lb-layer-background--header"
  })]), _vm._v(" "), _c('div', {
    staticClass: "lb-layer",
    style: (_vm.compLeaderBoardHeight),
    attrs: {
      "id": "qa-lb-layer-select-indicator"
    }
  }, [_c('div', {
    ref: "lbSelector",
    staticClass: "lb-selection-indicator",
    style: (_vm.selectorStyles),
    attrs: {
      "id": "qa-lb-selection-indicator"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "lb-layer",
    style: (_vm.compLeaderBoardHeight),
    attrs: {
      "id": "qa-lb-layer-information"
    }
  }, [_c('div', {
    staticClass: "lb-layer-info--container"
  }, _vm._l((_vm.columnsToDisplay), function(col, index) {
    return _c('div', {
      ref: 'hole' + col.holeNumber,
      refInFor: true,
      class: [_vm.compLeaderBoardHeight ].concat( col.classes),
      attrs: {
        "id": 'lb-col-' + index,
        "hole": col.holeNumber
      },
      on: {
        "!click": function($event) {
          _vm.handleScoreSelect(col.selectable, $event)
        }
      }
    }, [_c('div', {
      class: col.header.classes
    }, [_vm._v(_vm._s(col.header.value))]), _vm._v(" "), _vm._l((col.values), function(val) {
      return _c('div', {
        class: col.textClasses
      }, [_vm._v(_vm._s(val || '-'))])
    })], 2)
  }))])])
},staticRenderFns: []}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("26b9febd", content, true);

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(19);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("39d2f510", content, true);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("f5f2f22e", content, true);

/***/ }),
/* 31 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 32 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ })
/******/ ]);
//# sourceMappingURL=build.js.map