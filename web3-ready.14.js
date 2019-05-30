(window["web3Ready_jsonp"] = window["web3Ready_jsonp"] || []).push([[14],{

/***/ "33d7":
/***/ (function(module, exports) {

module.exports = "\"data:image/svg+xml,%3C?xml version='1.0' encoding='UTF-8' standalone='no'?%3E %3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E %3Csvg xmlns:svg='http://www.w3.org/2000/svg' xmlns='http://www.w3.org/2000/svg' version='1.1' width='482' height='768' viewBox='-2.77410003 -2.77410003 98.01820106 156.13971006' id='svg3314'%3E %3Cdefs id='defs3316' /%3E %3Cpath d='M 46.22125,55.68413 0,76.69288 46.22125,104.01413 92.4425,76.69288 46.22125,55.68413 z' id='path3078' style='opacity:0.60000598;fill:%23010101;fill-opacity:1;fill-rule:nonzero;stroke:none' /%3E %3Cpath d='m 3.7e-4,76.6925 46.22125,27.32125 0,-48.33 L 46.22162,0 3.7e-4,76.6925 z' id='path3094' style='opacity:0.44999701;fill:%23010101;fill-opacity:1;fill-rule:nonzero;stroke:none' /%3E %3Cpath d='m 46.22125,0 0,55.68375 0,48.33 L 92.4425,76.6925 46.22125,0 z' id='path3110' style='opacity:0.80000299;fill:%23010101;fill-opacity:1;fill-rule:nonzero;stroke:none' /%3E %3Cpath d='m 3.7e-4,85.45725 46.22125,65.13375 0,-37.82625 L 3.7e-4,85.45725 z' id='path3126' style='opacity:0.44999701;fill:%23010101;fill-opacity:1;fill-rule:nonzero;stroke:none' /%3E %3Cpath d='m 46.22125,112.76525 0,37.82625 L 92.47,85.45775 46.22125,112.76525 z' id='path3142' style='opacity:0.80000299;fill:%23010101;fill-opacity:1;fill-rule:nonzero;stroke:none' /%3E %3C/svg%3E\""

/***/ }),

/***/ "3cf8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6f05");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = __webpack_require__("35d6").default
module.exports.__inject__ = function (shadowRoot) {
  add("0790c9a0", content, shadowRoot)
};

/***/ }),

/***/ "502b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2a6aea26-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NetworkIndicator.vue?vue&type=template&id=035eb1b2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.className},[_c('span',{directives:[{name:"tooltip",rawName:"v-tooltip",value:(_vm.tooltip),expression:"tooltip"}],staticClass:"network-indicator--icon"},[(_vm.isOk)?_c('span',{staticClass:"network-indicator--icon-status icon-ok"}):_vm._e(),(_vm.isUnknown)?_c('span',{staticClass:"network-indicator--icon-status icon-unknown"}):_vm._e(),(_vm.isError)?_c('span',{staticClass:"network-indicator--icon-status icon-error"}):_vm._e()]),(!_vm.tiny)?_c('span',{staticClass:"network-indicator--info"},[_vm._v("\n    "+_vm._s(_vm.getMessage)+"\n  ")]):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/NetworkIndicator.vue?vue&type=template&id=035eb1b2&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js + 1 modules
var objectSpread = __webpack_require__("cebc");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/mixins/createTooltip.js
var createTooltip = __webpack_require__("f71f");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/NetworkIndicator.vue?vue&type=script&lang=js&

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


/* harmony default export */ var NetworkIndicatorvue_type_script_lang_js_ = ({
  mixins: [createTooltip["a" /* default */]],
  props: {
    network_id: {
      type: String,
      default: null
    },
    required_network: {
      type: String,
      required: true
    },
    tiny: {
      type: Boolean,
      default: false
    }
  },
  computed: Object(objectSpread["a" /* default */])({}, Object(vuex_esm["c" /* mapState */])(['signerId', 'networkId']), {
    getMessage() {
      if (this.isUnknown) {
        return this.noRequiredInfo;
      }

      if (this.isOk) {
        return this.connectedWithInfo;
      }

      return this.networkMismatchInfo;
    },

    tooltip() {
      return this.createTooltip(this.getMessage);
    },

    connectedWithInfo() {
      return this.$t('app.networkStatus.connectedWithInfo', {
        signer: this.$t(`globals.providers.${this.signerId}.label`),
        network: this.$t(`globals.networks.${this.networkId}.label`)
      });
    },

    noRequiredInfo() {
      return this.$t('app.networkStatus.noRequiredInfo');
    },

    networkMismatchInfo() {
      return this.$t('app.networkStatus.networkMismatchInfo', {
        networkLabel: this.$t(`globals.networks.${this.required_network}.label`),
        networkId: this.required_network
      });
    },

    isUnknown() {
      return this.required_network === '*';
    },

    isOk() {
      return !this.isUnknown && this.required_network === this.network_id;
    },

    isError() {
      return !this.isUnknown && this.required_network !== this.network_id;
    },

    className() {
      if (this.tiny) {
        return 'network-indicator network-indicator--tiny';
      }

      return 'network-indicator network-indicator--large';
    }

  })
});
// CONCATENATED MODULE: ./src/components/NetworkIndicator.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_NetworkIndicatorvue_type_script_lang_js_ = (NetworkIndicatorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/NetworkIndicator.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__("de5d")
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_NetworkIndicatorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "035eb1b2",
  null
  ,true
)

/* harmony default export */ var NetworkIndicator = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "6f05":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("b041");
exports = module.exports = __webpack_require__("2350")(false);
// imports


// module
exports.push([module.i, ".network-indicator[data-v-035eb1b2]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.network-indicator--large[data-v-035eb1b2]{padding-bottom:1em}@media (min-width:600px){.network-indicator--large[data-v-035eb1b2]{padding:1em 0}}.network-indicator--tiny[data-v-035eb1b2]{display:inline-block;vertical-align:middle}.network-indicator--icon[data-v-035eb1b2]{position:relative;background:transparent url(" + escape(__webpack_require__("33d7")) + ") 0 no-repeat;background-size:contain;vertical-align:top;margin:0 10px 0 5px;cursor:help;display:inline-block;height:30px;width:28px;-ms-flex-preferred-size:28px;flex-basis:28px;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.network-indicator--icon-status[data-v-035eb1b2]{position:absolute;width:100%;height:100%;bottom:0;right:-10px}.network-indicator--info[data-v-035eb1b2]{padding-left:1em}", ""]);

// exports


/***/ }),

/***/ "de5d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetworkIndicator_vue_vue_type_style_index_0_id_035eb1b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3cf8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetworkIndicator_vue_vue_type_style_index_0_id_035eb1b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetworkIndicator_vue_vue_type_style_index_0_id_035eb1b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetworkIndicator_vue_vue_type_style_index_0_id_035eb1b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetworkIndicator_vue_vue_type_style_index_0_id_035eb1b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_index_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NetworkIndicator_vue_vue_type_style_index_0_id_035eb1b2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f71f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    createTooltip(msg) {
      return {
        content: msg,
        placement: 'auto',
        classes: ['info'],
        targetClasses: ['has-tooltip'],
        trigger: 'hover focus click',
        delay: {
          show: 300,
          hide: 500
        }
      };
    }

  }
});

/***/ })

}]);