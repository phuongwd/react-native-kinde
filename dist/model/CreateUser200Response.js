var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports["default"]=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _ApiClient=_interopRequireDefault(require("../ApiClient"));var _UserIdentity=_interopRequireDefault(require("./UserIdentity"));var CreateUser200Response=function(){function CreateUser200Response(){(0,_classCallCheck2["default"])(this,CreateUser200Response);CreateUser200Response.initialize(this);}(0,_createClass2["default"])(CreateUser200Response,null,[{key:"initialize",value:function initialize(obj){}},{key:"constructFromObject",value:function constructFromObject(data,obj){if(data){obj=obj||new CreateUser200Response();if(data.hasOwnProperty('id')){obj['id']=_ApiClient["default"].convertToType(data['id'],'String');}if(data.hasOwnProperty('created')){obj['created']=_ApiClient["default"].convertToType(data['created'],'Boolean');}if(data.hasOwnProperty('identities')){obj['identities']=_ApiClient["default"].convertToType(data['identities'],[_UserIdentity["default"]]);}}return obj;}}]);return CreateUser200Response;}();CreateUser200Response.prototype['id']=undefined;CreateUser200Response.prototype['created']=undefined;CreateUser200Response.prototype['identities']=undefined;var _default=CreateUser200Response;exports["default"]=_default;