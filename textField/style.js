'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _branding = require('../_utils/branding');

var _defaultExport = new String('.kirk-textField{position:relative;box-sizing:border-box;}.kirk-textField-wrapper{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;color:' + _branding.color.primaryText + ';background-color:' + _branding.color.inputBackground + ';border-radius:' + _branding.radius.l + ';border:solid 1px ' + _branding.color.inputBorder + ';box-shadow:none;}.kirk-textField input,.kirk-textField textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:' + _branding.radius.l + ';background-color:' + _branding.color.inputBackground + ';color:' + _branding.color.primaryText + ';-webkit-flex:1;-ms-flex:1;flex:1;font-size:' + _branding.font.base.size + ';line-height:' + _branding.font.base.lineHeight + ';width:100%;}.kirk-textField textarea{padding:' + _branding.space.l + ';}.kirk-textField input{padding:' + _branding.space.l + ' 0 ' + _branding.space.l + ' ' + _branding.space.l + ';margin-right:48px;}.kirk-textField input:not(:first-child),.kirk-textField textarea:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;padding-left:0;}.kirk-textField input::-webkit-input-placeholder,.kirk-textField textarea::-webkit-input-placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField input::-moz-placeholder,.kirk-textField textarea::-moz-placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField input:-ms-input-placeholder,.kirk-textField textarea:-ms-input-placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField input::placeholder,.kirk-textField textarea::placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField input::-ms-clear{display:none;}.kirk-textField input[type="number"]::-webkit-outer-spin-button,.kirk-textField input[type="number"]::-webkit-inner-spin-button{-webkit-appearance:none;}.kirk-textField input[type="number"]{-moz-appearance:textfield;-webkit-appearance:none;}.kirk-textField input[type="search"]{width:100%;box-sizing:border-box;}.kirk-textField input[type="number"],.kirk-textField input[type="search"]{box-shadow:none;}.kirk-textField input:disabled{color:' + _branding.color.disabled + ';}.kirk-textField textarea{min-height:150px;}.kirk-textField textarea:disabled{color:' + _branding.color.disabled + ';}.kirk-textField input:focus,.kirk-textField textarea:focus{border-color:' + _branding.color.inputBorder + ';box-shadow:none;outline:none;}.kirk-error .kirk-textField-wrapper{background:' + _branding.color.inputError + ';border:solid 1px ' + _branding.color.inputError + ';-webkit-animation:textFieldError ' + _branding.transition.duration.fast + ' ease-in-out;animation:textFieldError ' + _branding.transition.duration.fast + ' ease-in-out;}.kirk-error input,.kirk-error textarea{background-color:' + _branding.color.inputError + ';}.kirk-error .kirk-error-message{color:' + _branding.color.danger + ';display:block;padding:' + _branding.space.m + ';}.kirk-textField label{color:' + _branding.color.primaryText + ';padding:0 ' + _branding.space.m + ' ' + _branding.space.s + ' ' + _branding.space.m + ';}.kirk-textField .kirk-button{background-color:transparent;color:' + _branding.color.secondaryText + ';height:auto;}.kirk-textField .kirk-textField-button{position:absolute;top:0;bottom:0;right:0;}.kirk-textField .kirk-textField-button[hidden]{visibility:hidden;}@-webkit-keyframes textFieldError{20%{margin-left:-10px;margin-right:10px;}40%{margin-left:10px;margin-right:-10px;}60%{margin-left:-5px;margin-right:5px;}80%{margin-left:5px;margin-right:-5px;}100%{margin-left:0px;margin-right:0px;}}@keyframes textFieldError{20%{margin-left:-10px;margin-right:10px;}40%{margin-left:10px;margin-right:-10px;}60%{margin-left:-5px;margin-right:5px;}80%{margin-left:5px;margin-right:-5px;}100%{margin-left:0px;margin-right:0px;}}');

_defaultExport.__hash = '1203624368';
_defaultExport.__scoped = '.kirk-textField.jsx-2564806001{position:relative;box-sizing:border-box;}.kirk-textField-wrapper.jsx-2564806001{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;box-sizing:border-box;color:' + _branding.color.primaryText + ';background-color:' + _branding.color.inputBackground + ';border-radius:' + _branding.radius.l + ';border:solid 1px ' + _branding.color.inputBorder + ';box-shadow:none;}.kirk-textField.jsx-2564806001 input.jsx-2564806001,.kirk-textField.jsx-2564806001 textarea.jsx-2564806001{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;border-radius:' + _branding.radius.l + ';background-color:' + _branding.color.inputBackground + ';color:' + _branding.color.primaryText + ';-webkit-flex:1;-ms-flex:1;flex:1;font-size:' + _branding.font.base.size + ';line-height:' + _branding.font.base.lineHeight + ';width:100%;}.kirk-textField.jsx-2564806001 textarea.jsx-2564806001{padding:' + _branding.space.l + ';}.kirk-textField.jsx-2564806001 input.jsx-2564806001{padding:' + _branding.space.l + ' 0 ' + _branding.space.l + ' ' + _branding.space.l + ';margin-right:48px;}.kirk-textField.jsx-2564806001 input.jsx-2564806001:not(:first-child),.kirk-textField.jsx-2564806001 textarea.jsx-2564806001:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0;padding-left:0;}.kirk-textField.jsx-2564806001 input.jsx-2564806001::-webkit-input-placeholder,.kirk-textField.jsx-2564806001 textarea.jsx-2564806001::-webkit-input-placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField.jsx-2564806001 input.jsx-2564806001::-moz-placeholder,.kirk-textField.jsx-2564806001 textarea.jsx-2564806001::-moz-placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField.jsx-2564806001 input.jsx-2564806001:-ms-input-placeholder,.kirk-textField.jsx-2564806001 textarea.jsx-2564806001:-ms-input-placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField.jsx-2564806001 input.jsx-2564806001::placeholder,.kirk-textField.jsx-2564806001 textarea.jsx-2564806001::placeholder{color:' + _branding.color.inputPlaceholder + ';}.kirk-textField.jsx-2564806001 input.jsx-2564806001::-ms-clear{display:none;}.kirk-textField.jsx-2564806001 input[type="number"].jsx-2564806001::-webkit-outer-spin-button,.kirk-textField.jsx-2564806001 input[type="number"].jsx-2564806001::-webkit-inner-spin-button{-webkit-appearance:none;}.kirk-textField.jsx-2564806001 input[type="number"].jsx-2564806001{-moz-appearance:textfield;-webkit-appearance:none;}.kirk-textField.jsx-2564806001 input[type="search"].jsx-2564806001{width:100%;box-sizing:border-box;}.kirk-textField.jsx-2564806001 input[type="number"].jsx-2564806001,.kirk-textField.jsx-2564806001 input[type="search"].jsx-2564806001{box-shadow:none;}.kirk-textField.jsx-2564806001 input.jsx-2564806001:disabled{color:' + _branding.color.disabled + ';}.kirk-textField.jsx-2564806001 textarea.jsx-2564806001{min-height:150px;}.kirk-textField.jsx-2564806001 textarea.jsx-2564806001:disabled{color:' + _branding.color.disabled + ';}.kirk-textField.jsx-2564806001 input.jsx-2564806001:focus,.kirk-textField.jsx-2564806001 textarea.jsx-2564806001:focus{border-color:' + _branding.color.inputBorder + ';box-shadow:none;outline:none;}.kirk-error.jsx-2564806001 .kirk-textField-wrapper.jsx-2564806001{background:' + _branding.color.inputError + ';border:solid 1px ' + _branding.color.inputError + ';-webkit-animation:textFieldError-jsx-2564806001 ' + _branding.transition.duration.fast + ' ease-in-out;animation:textFieldError-jsx-2564806001 ' + _branding.transition.duration.fast + ' ease-in-out;}.kirk-error.jsx-2564806001 input.jsx-2564806001,.kirk-error.jsx-2564806001 textarea.jsx-2564806001{background-color:' + _branding.color.inputError + ';}.kirk-error .kirk-error-message{color:' + _branding.color.danger + ';display:block;padding:' + _branding.space.m + ';}.kirk-textField.jsx-2564806001 label.jsx-2564806001{color:' + _branding.color.primaryText + ';padding:0 ' + _branding.space.m + ' ' + _branding.space.s + ' ' + _branding.space.m + ';}.kirk-textField .kirk-button{background-color:transparent;color:' + _branding.color.secondaryText + ';height:auto;}.kirk-textField .kirk-textField-button{position:absolute;top:0;bottom:0;right:0;}.kirk-textField .kirk-textField-button[hidden]{visibility:hidden;}@-webkit-keyframes textFieldError-jsx-2564806001{20%{margin-left:-10px;margin-right:10px;}40%{margin-left:10px;margin-right:-10px;}60%{margin-left:-5px;margin-right:5px;}80%{margin-left:5px;margin-right:-5px;}100%{margin-left:0px;margin-right:0px;}}@keyframes textFieldError-jsx-2564806001{20%{margin-left:-10px;margin-right:10px;}40%{margin-left:10px;margin-right:-10px;}60%{margin-left:-5px;margin-right:5px;}80%{margin-left:5px;margin-right:-5px;}100%{margin-left:0px;margin-right:0px;}}';
_defaultExport.__scopedHash = '2564806001';
exports.default = _defaultExport;
//# sourceMappingURL=style.js.map