var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _ApiClient=_interopRequireDefault(require("../ApiClient"));var _CreateUserRequestIdentitiesInnerDetails=_interopRequireDefault(require("./CreateUserRequestIdentitiesInnerDetails"));var CreateUserRequestIdentitiesInner=function(){function CreateUserRequestIdentitiesInner(){(0,_classCallCheck2["default"])(this,CreateUserRequestIdentitiesInner);CreateUserRequestIdentitiesInner.initialize(this);}(0,_createClass2["default"])(CreateUserRequestIdentitiesInner,null,[{key:"initialize",value:function initialize(obj){}},{key:"constructFromObject",value:function constructFromObject(data,obj){if(data){obj=obj||new CreateUserRequestIdentitiesInner();if(data.hasOwnProperty('type')){obj['type']=_ApiClient["default"].convertToType(data['type'],'String');}if(data.hasOwnProperty('details')){obj['details']=_CreateUserRequestIdentitiesInnerDetails["default"].constructFromObject(data['details']);}}return obj;}}]);return CreateUserRequestIdentitiesInner;}();CreateUserRequestIdentitiesInner.prototype['type']=undefined;CreateUserRequestIdentitiesInner.prototype['details']=undefined;var _default=CreateUserRequestIdentitiesInner;exports["default"]=_default;