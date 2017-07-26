var __isServer="[object process]"===Object.prototype.toString.call("undefined"!=typeof process?process:0),zn={VERSION:"0.0.1",DEBUG:!0,ZN_PATH:"",PATH:"",GLOBAL:function(){return __isServer?global:window}.call(null),isServer:__isServer,plugin:{}};if(zn.GLOBAL.zn=zn,__isServer)zn.ZN_PATH=__dirname,zn.PATH=process.cwd(),module.exports=zn;else{var _zn_url="";try{__a__=__b__}catch(e){e.fileName?_zn_url=e.fileName:e.sourceURL?_zn_url=e.sourceURL:e.stacktrace?console.log(e.stacktrace):e.stack?(_zn_url=e.stack.split("\n")[1],_zn_url=_zn_url.replace(/\s/g,""),_zn_url=_zn_url.substring(2,_zn_url.length)):console.log(e.toString())}if(!_zn_url)for(var _scripts=document.getElementsByTagName("script"),_src="",_node,i=0,_len=scripts.length;_len>i;i++)if(_node=scripts[i],_node.getAttribute&&(_src=_node.getAttribute("src")||"","zn.js"===_src.slice(-5)||"zn.minx.js"===_src.slice(-10))){_zn_url=_src;break}if(!_zn_url)throw new Error("zn.js has not been included, please do it first.");zn.ZN_PATH=_zn_url.substring(0,_zn_url.lastIndexOf("/")+1)}!function(a){var b=Object.prototype.toString,c={isNull:function(a){return null===a||void 0===a},isNotNull:function(a){return null!==a&&void 0!==a},idle:function(){},idleArray:function(){return[]},idleObject:function(){return{}},format:function(){var a=arguments,b=null,c=null;return a.length<2?a[0]:(b=a[0],b=b.toString?b.toString():b,c=a[1],d.each(c,function(a,c){null!==a&&void 0!==a&&(a=d.is(a,"object")?JSON.stringify(a):a.toString?a.toString():a,b=b.replace(new RegExp("\\{"+c+"\\}","gi"),a))}),b)},uuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=16*Math.random()|0,c="x"==a?b:3&b|8;return c.toString(16)}).toUpperCase()},serializeJSON:function(a){return Object.keys(a).map(function(b){return encodeURIComponent(b)+"="+encodeURIComponent(a[b])}).join("&")},fix:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&"function"!=typeof b[f]&&(b[f]=e[f])}return b},extend:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b},overwrite:function(a){for(var b=a||{},c=1,d=arguments.length;d>c;c++){var e=arguments[c];for(var f in e)e.hasOwnProperty(f)&&void 0===b[f]&&(b[f]=e[f])}return b},path:function(a,b,c){var d=a||{};if(b){var e,f=b.split("."),g=f.length,h=0;if(arguments.length<3)for(;d&&g>h;h++)e=f[h],d=d.__get__?d.__get__(e):d[e];else{for(g-=1;d&&g>h;h++)e=f[h],d=d.__get__?d.__get__(e):d[e]=d[e]||{};e=f[h],d&&(d.__set__?d.__set__(e,c):d[e]=c,d=c)}}return d},invoke:function(b,c,d){if(b&&c){var e,f,g=c.lastIndexOf(".");g>0?(e=a.path(b,c.substring(0,g)),e&&(f=e[c.substring(g+1)])):(e=b,f=b[c]),f&&f.apply(e,d)}},deepEachObject:function(a,b,c){if(d.is(a,"object")){var e,f=null;for(var g in a)f=a[g],d.is(f,"object")?this.deepEachObject(f,b,c):(e=b&&b.call(c,f,g,a),void 0!==e&&null!==e&&(a[g]=e))}return a},arrayValueToObject:function(a,b,c){if(d.is(a,"array")){for(var e,f=null,g={},h=0,i=a.length;i>h;h++)f=a[h],e=b&&b.call(c,f,h,a),void 0!==e&&null!==e&&(g[f]=e);a=g}return a}},d={toString:function(a){return a&&a.toString?a.toString():b.call(a)},each:function(a,c,d){if(a&&c)if(a.__each__)a.__each__(c,d);else{var e=a.length,f=null;if(e>0&&"[object Array]"===b.call(a)){for(var g=0;e>g;g++)if(f=c.call(d,a[g],g),f===!1)return!1}else for(var h in a)if(a.hasOwnProperty(h)){if(f=c.call(d,a[h],h),f===!1)return!1;if(-1===f)continue}}},clone:function(b){if(b){if(b.__clone__)return b.__clone__();if(a.is(b,"array"))return b.slice(0);var c={};for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}return b},type:function(a){return a&&a.__type__?a.__type__:b.call(a).slice(8,-1).toLowerCase()},is:function(a,b){if(a&&a.__is__)return a.__is__(b);if("string"==typeof b)switch(b.toLowerCase()){case"plain":return a&&a.constructor===Object;default:return this.type(a)===b}else if("function"==typeof b)return a instanceof b},may:function(a,b){return a?a.__may__?a.__may__(b):a.hasOwnProperty("on"+b):!1},can:function(a,b){return a?a.__can__?a.__can__(b):"function"==typeof a[b]:!1},has:function(a,b){return a?a.__has__?a.__has__(b):a.hasOwnProperty(b):!1},get:function(a,b){return a?a.__get__?a.__get__(b):a[b]:void 0},set:function(a,b,c){a&&(a.__set__?a.__set__(b,c):a[b]=c)},gets:function(a){if(a){if(a.__gets__)return a.__gets__();var b={};for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c]);return b}},sets:function(a,b){if(a&&b)if(a.__sets__)a.__sets__(b);else for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])}};c.extend(a,c),c.extend(a,d)}(zn),function(a){{var b=Array.prototype.slice,c=Object.prototype.hasOwnProperty,d=Object.prototype.toString,e={format:function(){var b=arguments,c=this;return 1==b.length&&"object"==typeof b[0]&&(b=b[0]),a.each(b,function(b,d){null!==b&&void 0!==b&&(b="object"==a.type(b)?JSON.stringify(b):b.toString?b.toString():b,c=c.replace(new RegExp("\\{"+d+"\\}","gi"),b))}),c.toString()},firstUpperCase:function(a){return a.replace(/\b(\w)(\w*)/g,function(a,b,c){return b.toUpperCase()+c})}},f={isArray:function(b){return b&&"[object Array]"===a.toString(b)&&b.constructor===Array}},g={forEach:function(a,b){if(!a)return!1;for(var c=0,d=this.length;d>c;c++)a.call(b,this[c],c);return this},indexOf:function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},lastIndexOf:function(a){for(var b=this.length-1;b>=0;b--)if(this[b]===a)return b;return-1}},h={bind:function(a){var c=this;return function(){return c.apply(a,b.call(arguments,1))}}},i={toArray:function(a){return b.call(a)},keys:function(a){if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,d=[];for(b in a)c.call(a,b)&&d.push(b);return d},values:function(a){if(a!==Object(a))throw new TypeError("Object.keys called on a non-object");var b,d=[];for(b in a)c.call(a,b)&&d.push(a[b]);return d},create:function(){var b=function(){};return function(c,d){if(null===c)throw new Error("Cannot set a null [[Prototype]]");if("object"!=typeof c)throw new TypeError("Argument must be an object");return a.each(d,function(a,b){i.defineProperty(c,a,b)}),b.prototype=c,new b}}(),defineProperty:function(a,b,c){return a&&b&&c&&c.hasOwnProperty("value")&&(a[b]=c.value),a}};({parse:function(){return""},stringify:function(){var a=d,b=Array.isArray,c={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","	":"\\t"},e=function(a){return c[a]||"\\u"+(a.charCodeAt(0)+65536).toString(16).substr(1)},f=/[\\"\u0000-\u001F\u2028\u2029]/g;return function g(c){if(null==c)return"null";if("number"==typeof c)return isFinite(c)?c.toString():"null";if("boolean"==typeof c)return c.toString();if("object"==typeof c){var d;if("function"==typeof c.toJSON)return g(c.toJSON());if(b(c)){d="[";for(var h=0;h<c.length;h++)d+=(h?", ":"")+g(c[h]);return d+"]"}if("[object Object]"===a.call(c)){d=[];for(var i in c)c.hasOwnProperty(i)&&d.push(g(i)+": "+g(c[i]));return"{"+d.join(", ")+"}"}}return'"'+c.toString().replace(f,e)+'"'}}()})}a.fix(Array,f),a.fix(Array.prototype,g),a.fix(Function.prototype,h),a.fix(String.prototype,e)}(zn),function(a){function b(){}function c(){var c=l._arguments.apply(this,arguments),e=c.name,f=c.super,h=c.meta,i=h.methods.init;h.properties=h.properties||h.props,h.props=null,delete h.props;var j,k,n;if(f._static_)throw new Error("Static class cannot be inherited.");if(f._final_)throw new Error("Final class cannot be inherited.");if(e&&h.partial&&(j=a.path(d,e)),h.static){if(j){if(!j._static_)throw new Error('Partial class "'+e+'" must be static.')}else j=function(){throw new Error("Cannot instantiate static class.")};n=j.prototype}else{if(j){if(j._static_)throw new Error('Partial class "'+e+'" must not be static.');if(j._super_!==f&&j._super_!==b)throw new Error('Partial class "'+e+'" must have consistent super class.')}else j=h.abstract?function(){throw new Error("Cannot instantiate abstract class.")}:function(){var b=j._mixins_||[],c=j._ctors_||[],d=null,e=arguments;this.__id__=g++,this.__handlers__={},this.__initializing__=!0,this.__afters__=[];for(var f=null,h=null,i=0,k=b.length;k>i;i++)f=b[i],f["@init"]?(h=f["@init"].meta,h=a.is(h,"function")?h:h.value,m(f.prototype.__super__,this,e),h&&h.call(this)):m(f.prototype.__super__,this,e);m(this.__super__,this,e);for(var l=0,n=c.length;n>l;l++)d=c[l],d=a.is(d,"function")?d:d.value,d&&d.apply(this,e);for(;this.__afters__.length>0;){var o=this.__afters__.pop();o.handler.apply(o.context,e)}this.__afters__=null,delete this.__afters__,this.__initializing__=!1},j._ctors_=[];j._super_!==f?(k=function(){},k.prototype=f.prototype,n=new k,n.constructor=j,n.__type__=e||"Anonymous",n.__super__=f,j.prototype=n):n=j.prototype,n.class=n.constructor,i&&(j._ctors_.push(i),n.__ctor__||(n.__ctor__=i))}return l._meta(j,c),n.__define__&&n.__define__.call(j),e&&a.path(d,e,j),j}var d=a.GLOBAL,e="@",f=1,g=1,h={fixTargetCtor:function(a){return a instanceof b?a.constructor:a},fixTargetKey:function(a){return e+a},defineEvent:function(a,b,c){var d=h.fixTargetCtor(a),e=h.fixTargetKey(b),f=e in d,g={};return f||(g=Object.defineProperty(a,"on"+b.toLowerCase(),{get:function(){var a=this.__handlers__[b];return a?a[0].handler:null},set:function(a){var c=this.__handlers__,d=c[b]=c[b]||[];d[0]={owner:this,handler:a,context:null}}})),d[e]={name:b,type:"event",meta:c,descriptor:g},f},defineProperty:function(b,c,d){var e,f,g=h.fixTargetCtor(b),i=h.fixTargetKey(c),j=i in g,k={};if("value"in d){var l=d.value,m="_"+c,n=d.get,o=d.set;e=n||function(){return m in this?this[m]:a.is(l,"function")?l.call(this):l},f=d.readonly?function(a,b){return b&&b.force?void(this[m]=a):!1}:o||function(a){this[m]=a}}else e=d.get||function(){return void 0},f=d.set||function(){return!1};return j&&(e.__super__=g[i].getter,f.__super__=g[i].setter),k=Object.defineProperty(b,c,{get:e,set:f,configurable:!0}),g[i]={name:c,type:"property",meta:d,getter:e,setter:f,descriptor:k},j},defineMethod:function(a,b,c){var d=h.fixTargetCtor(a),e=h.fixTargetKey(b),f=e in d;return d[e]={name:b,type:"method",meta:c},b in a&&(c.value||(c.value=function(){}),c.value.__super__=a[b]),a[b]=c.value,f}},i={__handlers__:{},member:function(a,c){var d=h.fixTargetCtor(c||this),e=d[h.fixTargetKey(a)];return e||d===b?e:this.member(a,d._super_)},may:function(a){var b=this.member(a);return b&&"event"==b.type},has:function(a){var b=this.member(a);return b&&"property"==b.type},can:function(a){var b=this.member(a);return b&&"method"==b.type},get:function(a,b){var c=this.member(a);return c&&c.getter?c.getter.call(this,b):void 0},set:function(a,b,c){var d=this.member(a);return d&&d.setter&&d.setter.call(this,b,c),this},gets:function(b){var c={},d=h.fixTargetCtor(this)._properties_;return a.each(d,function(a){c[a]=this.get(a,b)},this),c},sets:function(a,b,c){if(a){var d=null;for(var e in a)a.hasOwnProperty(e)&&(d=a[e],(c&&c(d,e,b))!==!1&&this.set(e,d,b))}return this},each:function(a,b){for(var c=h.fixTargetCtor(this)._properties_,d=0,e=c.length;e>d;d++){var f=c[d],g=a.call(b,f,d,this.member(f),this.get(f));if(g===!1)return!1}return this},__may__:function(a){return this.may(a)},__has__:function(a){return this.has(a)},__can__:function(a){return this.can(a)},__get__:function(a){return this.get(a)},__gets__:function(){return this.gets()},__set__:function(a,b){this.set(a,b)},__sets__:function(a){this.sets(a)},__each__:function(a,b){return this.each(a,b)}},j={toString:function(){return"{ ClassName: "+(this._name_||"Anonymous")+", ClassID: "+this._id_+" }"},createSelf:function(){return new this.constructor.apply(this,Array.prototype.slice.call(arguments))},getProperties:function(b,c){var d={};if(!this.getMeta||"ZNObject"==this._name_)return d;var e=this._super_,f=this._mixins_;return e&&a.extend(d,e.getProperties(b,c)),f&&f.length&&a.each(f,function(e){a.extend(d,e.getProperties(b,c))}),a.each(this.getMeta("properties"),function(a,e){var f=b&&b.call(c||this,a,e,d);return f===!1||-1===f?f:void(a.hidden||(d[e]=a))},this),d},getProperty:function(a){var b=null;return a&&this.getProperties(function(c,d){return a==d&&(b=field),-1}),b},existProperty:function(a){return!!this.getProperty(a)},getMeta:function(a){return a?this._meta_[a]:this._meta_},setMeta:function(a,b){return a&&b&&(this._meta_[a]=b),this},defineEvent:function(a,b,c){return h.defineEvent(c||this.prototype,a,b)||this._events_.push(a),this},defineProperty:function(a,b,c){return h.defineProperty(c||this.prototype,a,b)||this._properties_.push(a),this},defineMethod:function(a,b,c){return h.defineMethod(c||this.prototype,a,b)||this._methods_.push(a),this}},k={toString:function(){var a={ClassName:this.__name__||"Anonymous",InstanceID:this.__id__,Meta:this.constructor._meta_};return JSON.stringify(a)},toJson:function(){var b={};return a.each(this.constructor.getProperties(),function(a,c){b[c]=this.get(c)},this),b},getProperties:function(){return this.constructor.getProperties.apply(this,arguments)},getPropertie:function(a){return this.constructor.getPropertie(a)},upon:function(b,c,d){if(c){var e=this.__handlers__,f=e[b]=e[b]||[];f[0]=a.extend({owner:this,handler:c},d)}return this},on:function(b,c,d){if(c){var e=this.__handlers__,f=e[b]=e[b]||[{owner:null,handler:null,context:null}];f.push(a.extend({owner:this,handler:c},d))}return this},off:function(a,b,c){var d,e=this.__handlers__[a]||[],f=c&&c.context;if(b)for(var g=e.length-1;g>=0;g--)d=e[g],d.handler!==b||f&&d.context!==f||this.__handlers__[a].splice(g,1);else this.__handlers__[a]=[{owner:null,handler:null,context:null}];return this},offs:function(){var b=Array.prototype.slice.call(arguments);return b.length?a.each(b,function(a){this.__handlers__[a]&&(this.__handlers__[a]=[{owner:null,handler:null,context:null}])}.bind(this)):this.__handlers__={},this},fire:function(a,b,c){var d,e=this.__handlers__[a],f=null;if(e)for(var g=0,h=e.length;h>g;g++)if(d=e[g],d&&d.handler&&(f=c&&"apply"==c.method?d.handler.apply(d.context||d.owner,b):d.handler.call(d.context||d.owner,d.owner,b,c),!1===f))return!1;return this},dispose:function(){return this.__handlers__={},this},destroy:function(){return this.dispose()},"super":function(){var a=this.super.caller.__super__;return a?a.apply(this,arguments):void 0},is:function(b){if("string"==typeof b&&(b=a.path(d,b)),b){if(this instanceof b)return!0;for(var c=this.constructor._mixins_,e=0,f=c.length;f>e;e++){var g=c[e];if(b===g)return!0}}return!1},__is__:function(a){return this.is(a)},__clone__:function(){}};a.extend(b,i,j,{_id_:0,_name_:"ZNObject",_statics_:{},_events_:[],_properties_:[],_methods_:[],_mixins_:[],_meta_:{}}),a.extend(b.prototype,i,k),a.isZNObject=function(a){return a instanceof b};var l={_arguments:function(){var c,d,e,f=arguments,g=f.length,h=f[0],i={"static":!1,statics:[],partial:!1,"abstract":!1,"final":!1,mixins:[],events:[],properties:[],methods:[]};if(3===g){if(c=h,d=f[1],e=f[2],!a.is(d,"function"))throw new Error("Invalid _super class.")}else if(2===g){if(a.is(h,"string"))c=h,d=null;else{if(!a.is(h,"function"))throw new Error("Invalid _super class.");c=null,d=h}e=f[1]}else{if(1!==g)throw new Error("Invalid arguments.");if(c=null,d=null,e=h,!a.is(e,"object"))throw new Error("The meta argument must be an object.")}return c=c||"",e=a.overwrite(e||{},i),d=d||b,{name:c,"super":d,meta:e}},_meta:function(b,c){var d=c.name,e=c.super,g=c.meta;return a.extend(b,i,j,{_id_:f++,_name_:d,_super_:e,_partial_:g.partial,_abstract_:g.abstract,_static_:g.static,_final_:g.final,_statics_:a.extend({},e._statics_,g.statics),_events_:e._events_.slice(0),_properties_:e._properties_.slice(0),_methods_:e._methods_.slice(0),_mixins_:e._mixins_.concat(g.mixins),_meta_:g}),a.extend(b,b._statics_),g.static?(a.each(g.events,function(a){b.defineEvent(a,{},b)}),a.each(g.properties,function(c,d){b.defineProperty(d,a.is(c,"object")?c:{value:c},b)}),a.each(g.methods,function(c,d){b.defineMethod(d,a.is(c,"function")?{value:c}:c,b)}),g.methods.init&&g.methods.init.call(b,b)):(a.each(g.mixins,function(c){var d=c.prototype;a.each(c._events_,function(a){b.defineEvent(a,d.member(a).meta)}),a.each(c._properties_,function(a){b.defineProperty(a,d.member(a).meta)}),a.each(c._methods_,function(a){i[a]||k[a]||b.defineMethod(a,d.member(a).meta)})}),a.each(g.events,function(a){b.defineEvent(a,{})}),a.each(g.properties,function(c,d){b.defineProperty(d,a.is(c,"object")?c:{value:c})}),a.each(g.methods,function(c,d){b.defineMethod(d,a.is(c,"function")?{value:c}:c)})),b}},m=function(c,d,e){if(c&&c!==b){var f=c.member("init"),g=c._mixins_,h=null;return f&&f.meta.after&&d.__afters__.push({context:d,handler:f.meta.after}),g.length&&a.each(g,function(b){b["@init"]&&(h=b["@init"].meta,h=a.is(h,"function")?h:h.value,m(b.prototype.__super__,b.prototype,e),h&&h.call(d))}),f&&f.meta.auto&&f.meta.value.apply(d,e),arguments.callee(c._super_,d)}};a.Class=c}(zn),function(a){var b=".",c="..",d="/",e={PENDING:0,LOADING:1,WAITING:2,LOADED:3},f=null;"undefined"!=typeof module&&module.exports?a.SLASH=d=require("path").sep:f=document;var g={normalizePath:function(a){for(var e,f=a.split(d),g=[f[0]],h=1,i=f.length;i>h;h++)switch(e=f[h]){case b:break;case c:var j=g[g.length-1];j===b||j===c?g.push(c):g.pop();break;default:g.push(e)}return g.join(d)},formatPath:function(b,c){var e=b;e="/"===d?e.split("\\").join(d):e.split("/").join(d);var f=c?c.get("path")||a.PATH:a.PATH,g=e.indexOf(d);return e.indexOf(a.PATH)>-1||e.indexOf(a.ZN_PATH)>-1?e:(e=g>0?f?f.substring(0,f.lastIndexOf(d)+1)+e:e:0===g?a.PATH.substring(0,a.PATH.lastIndexOf(d))+e:a.ZN_PATH+d+e+d,e.slice(-1)===d&&(e+="index.js"),e=this.normalizePath(e))}},h=a.Class("zn.Module",{events:["pending","loading","waiting","loaded"],statics:{all:{},current:null,counter:0,preLoadedPackage:{},unloadModule:function(b){try{if(!h.all[b])return this;b=require.resolve(b);var c=require.cache[b];c&&c.parent&&c.parent.children.splice(c.parent.children.indexOf(c),1),require.cache[b]=null;var d=h.all[b];h.all[b]=null,d&&d.parent&&h.unloadModule(d.parent.path)}catch(e){a.error("Module unloadModule error: ",e.message),console.log(e)}return this},loadModule:function(b,c,i){if(b="/"===d?b.split("\\").join(d):b.split("/").join(d),a.is(b,h))return b.load(c);if("node:"===b.substring(0,5))return c(require(b.substring(5)));var j=null;if(a.NODE_PATHS&&a.NODE_PATHS.length&&a.NODE_PATHS.every(function(a){return 0===b.indexOf(a)?(j=b,!1):!0}),!j&&(j=g.formatPath(b,i),!f))try{j=require.resolve(j,i)}catch(k){return a.error("node require.resolve("+j+"): ",k.message),console.log(k),c({})}var l=h.all[j];l?l.load(c):(l=h.all[j]=new h(j),h.counter++,f?this.__webModule(j,function(a){if(h.counter--,a)throw new Error("Failed to load module:"+b);l.sets({parent:i,path:j,dependencies:h.current.get("dependencies"),factory:h.current.get("factory"),status:e.LOADING}),l.load(c)}):this.__nodeModule(j,function(){h.counter--,l.sets({parent:i,path:j,dependencies:h.current.get("dependencies"),factory:h.current.get("factory"),status:e.LOADING}),l.load(c)}))},__nodeModule:function(b,c){var d=b,e=c||a.idle,f={};try{f=require(d)}catch(g){a.error("Node.js require("+d+") error: ",g.message),console.error(g)}finally{e(f)}},__webModule:function(b,c){var e=f.head||f.getElementsByTagName("head")[0],g=f.createElement("script"),h=b,i=c||a.idle,j=function(a){g.onload=null,g.onerror=null,i(a)};h=h.slice(-1)===d?h+"index.js":h,h=".js"===h.slice(-3).toLowerCase()?h:h+".js",g.src=h,"onload"in g?g.onload=function(){j(null)}:g.onreadystatechange=function(a){var b=g.readyState;j("loaded"===b||"complete"===b?null:a)},g.onerror=function(a){j(a)},e.appendChild(g)}},properties:{parent:null,status:e.PENDING,path:"",dependencies:null,factory:null,value:{set:function(a){a._ctors_&&(a.$path=this.get("path")),this._value=a},get:function(){return this._value}}},methods:{init:function(a,b,c){this.sets({path:a,dependencies:b||[],factory:c,value:{}}),this._callbacks=[]},exec:function(a){var b=process.argv,c=b[1];return this.sets({path:c,status:e.LOADING}),this.load(a),this},__pending:function(a){this._callbacks.push(a)},__loading:function(b){var c=(this.get("path"),this.get("dependencies")),d=this._depHandler,f=this.get("factory"),g=this.get("value");this.set("status",e.WAITING),this._callbacks.push(b);var i=c.length;if(0===i)g=f.call(g)||g,this.set("value",g),this.set("status",e.LOADED),a.each(this._callbacks,function(a){a(g)});else{var j=[],k=this;a.each(c,function(b,c){d&&(b=d(b,c)),h.loadModule(b,function(b){j[c]=b,i--,0===i&&(g=f.apply(g,j)||g,k.set("value",g),k.set("status",e.LOADED),a.each(k._callbacks,function(a){a(g)}))},k)})}},__waiting:function(a){var b=this;setTimeout(function(){0===h.counter&&b.set("status",e.LOADING),b.load(a)})},__loaded:function(a){a(this.get("value"))},load:function(b){var c=this.get("status"),d=b||a.idle;switch(c){case e.PENDING:this.__pending(d);break;case e.LOADING:this.__loading(d);break;case e.WAITING:this.__waiting(d);break;case e.LOADED:this.__loaded(d)}return this}}});a.define=function(){var b=arguments,c=b.length,d=b[0],e=[],f=null;switch(c){case 1:a.is(d,"function")?f=d:a.is(d,"array")?(e=d,f=function(){var b={};return a.each(arguments,function(c){c._name_?b[c._name_]=c:a.extend(b,c)}),b}):f=function(){return d};break;case 2:e=d,f=b[1];break;case 3:e=d,f=b[1]}return e&&a.is(e,"string")&&(e=[e]),h.current=new h("",e,f),b[2]&&(h.current._depHandler=b[2]),h.current};var i=a.Class("zn.Loader",{"static":!0,properties:{preLoadPackages:[]},methods:{init:function(){for(var a=this.preLoadPackages,b=0,c=a.length;c>b;b++)this.loadPackage(a[b])},loadPackage:function(b){this.load(b+"index.js",function(b){a.extend(h.preLoadedPackage,b)})},load:function(a,b,c){return h.loadModule(a,b,c),this}}});a.load=i.load,a.module=h}(zn),function(a){var b={lower:[97,123],upper:[65,91]};a.char=a.Class({"static":!0,methods:{lowercase:function(b){return a.is(b,"string")?b.replace(/[A-Z]/g,function(a){return String.fromCharCode(32|a.charCodeAt(0))}):b},uppercase:function(b){return a.is(b,"string")?b.replace(/[a-z]/g,function(a){return String.fromCharCode(-33&a.charCodeAt(0))}):b},toUnicode:function(a){for(var b=[],c=0,d=a.length;d>c;c++)b.push(a.charCodeAt(c));return b},toChar:function(a,b){for(var c=[],d=a;b>d;d++)c.push(String.fromCharCode(d));return c},getLowercaseLetters:function(){var a=b.lower;return this.toChar(a[0],a[1])},getUppercaseLetters:function(){var a=b.upper;return this.toChar(a[0],a[1])},getStringFromChar:function(a,b){for(var c=a||"A",d=b||26,e=[],f=0;d>f;f++)e.push(String.fromCharCode(c.charCodeAt(0)+f));return e.join("")}}})}(zn),function(a){var b={ISO8601:"yyyy-MM-dd hh:mm:ss.SSS",ISO8601_WITH_TZ_OFFSET:"yyyy-MM-ddThh:mm:ssO",DATETIME:"dd MM yyyy hh:mm:ss.SSS",ABSOLUTETIME:"hh:mm:ss.SSS"};a.date=a.Class({"static":!0,methods:{getSecond:function(a){var b=1*a.substring(1,a.length);switch(a.substring(0,1)){case"s":return 1e3*b;case"h":return 60*b*60*1e3;case"d":return 24*b*60*60*1e3}},asString:function(a){var c=b.ISO8601;"string"==typeof a&&(c=arguments[0],a=arguments[1]);var d=this.__addZero(a.getDate()),e=this.__addZero(a.getMonth()+1),f=this.__addZero(a.getFullYear()),g=this.__addZero(a.getFullYear().toString().substring(2,4)),h=c.indexOf("yyyy")>-1?f:g,i=this.__addZero(a.getHours()),j=this.__addZero(a.getMinutes()),k=this.__addZero(a.getSeconds()),l=this.__padWithZeros(a.getMilliseconds(),3),m=this.__offset(a),n=c.replace(/dd/g,d).replace(/MM/g,e).replace(/y{1,4}/g,h).replace(/hh/g,i).replace(/mm/g,j).replace(/ss/g,k).replace(/SSS/g,l).replace(/O/g,m);return n},__padWithZeros:function(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c},__addZero:function(a){return this.__padWithZeros(a,2)},__offset:function(a){var b=Math.abs(a.getTimezoneOffset()),c=String(Math.floor(b/60)),d=String(b%60);return 1==c.length&&(c="0"+c),1==d.length&&(d="0"+d),a.getTimezoneOffset()<0?"+"+c+d:"-"+c+d}}})}(zn),function(a){var b=Array.prototype.slice,c={PENDING:0,CANCLE:1,PAUSE:2,FINISHED:3},d=a.Class({events:["init","finished"],properties:{status:{value:c.PENDING,get:function(){return this._status}}},methods:{init:function(){},doTask:function(a,b){if(a){var c=b||[];c.unshift(this),a.handler.apply(a.context,c)}},done:function(){this._status=c.FINISHED,this._data=b.call(arguments),this.fire("finished",this._data),this.off("finished")}}}),e=a.Class({events:["clear","insert","pause","resume","exception","every","finally"],properties:{count:{get:function(){return this._tasks.length}}},methods:{init:function(a){this._exceptions=[],this._finallys=[],this._everys=[],this._tasks=[],this._taskProcessor=[],this._lastTask=null,this._data=[],this._max=(a||{}).max||1},destroy:function(){this._everys=[],this._tasks=[],this._taskProcessor=[],this.fire("finally",this._data,{method:"apply"}),this.super()},clear:function(){this._tasks=[]},pause:function(a){return this._paused=!0,a>0&&(this._pauseTimer=setTimeout(function(){this.resume()}.bind(this),a)),this.fire("pause"),this},resume:function(){return this._pauseTimer&&clearTimeout(this._pauseTimer),this._paused=!1,this.fire("resume"),this.doTask(),this},exception:function(a,b){return this.on("exception",a,b||this),this},"catch":function(a){return this.fire("exception",a),this},"finally":function(a,b){return this.on("finally",a,b||this),this},every:function(a,b){return this.on("every",a,b||this),this},unshift:function(a,b){return this.insert(a,b,0),this},push:function(a,b){return this.insert(a,b,-1),this},inserts:function(a,b,c){var d=a||[],e=c||0,f=this._tasks[0],g=null,h=null;return d=d.map(function(a){return h={handler:a,context:b||this},g&&(h.previous=g,g.next=h),g=h,h}.bind(this)),f&&(g.next=f,f.previous=g),d.unshift(0),d.unshift(e),this._tasks.splice.apply(this._tasks,d),this},insert:function(a,b,c){var d={handler:a,context:b||this},e=c||-1;switch(e){case-1:this._lastTask&&(d.previous=d,this._lastTask.next=d),this._lastTask=d,this._tasks.push(d);break;case 0:var f=this._tasks[0];f&&(d.next=f,f.previous=d),this._tasks.unshift(d);break;default:this._tasks.splice(e,0,d)}return this.fire("insert",d),this},getTaskProcessor:function(){for(var a=null,b=this._taskProcessor.length,e=0;b>e;e++)if(a=this._taskProcessor[e],a.status==c.FINISHED)return a;if(!a&&this._max>b){var f=new d;return f.queue=this,f.on("finished",this.__onProcessorFinished.bind(this),this),f}},start:function(){return this._data=[],this.doTask()},doTask:function(a){var b=this._tasks.shift();if(b){var c=this.getTaskProcessor();c&&(b.previousResult=a,c.doTask(b,a))}else this.destroy();return this},__onProcessorFinished:function(a,b){this._data.push(b),this.fire("every",b,{method:"apply"}),this.doTask(b)}}});a.queue=function(a){return new e(a)}}(zn),function(a){var b=["INFO","DEBUG","WARN","ERROR","TRACE","ALL"],c=["#100000","#2125a0","#a82c2c","#c045b7","1cb131","#100000"],d=[38,34,35,31,32,36,33],e={INFO:0,DEBUG:1,WARN:2,ERROR:3,TRACE:4,ALL:6},f=a.Class({events:["info","debug","warn","error","trace","all"],methods:{init:function(){this._config={only:null,levels:["info","debug","warn","error","trace","all"]}},config:function(b){this._config=a.overwrite(b,this._config)},info:function(){this.__log.call(this,e.INFO,arguments)},debug:function(){this.__log.call(this,e.DEBUG,arguments)},warn:function(){this.__log.call(this,e.WARN,arguments)},trace:function(){this.__log.call(this,e.TRACE,arguments)},error:function(){this.__log.call(this,e.ERROR,arguments)},all:function(){this.__log.call(this,e.ALL,arguments)},__getDateString:function(b){return a.date.asString(b||new Date)},__getPosition:function(){try{throw new Error}catch(b){return a.DEBUG&&a.CONSOLE_ERROR&&console.log(b.stack),b.stack.split("\n")[5].replace(/\(/g,"").replace(/\)/g,"").split("/").pop()}},__formatLog4Server:function(a,c){var e="",f="",g="";return c&&(f="[",g="[0m",e=d[5]+"m",c=d[a.type]+"m"),[a.time," [",f,c,b[a.type],g,"] [",f,e,a.pos,g,"] ",a.message].join("")},__formatLog4Client:function(a){return["%c"+a.time," [",b[a.type],"] "].join("")},__log:function(d,e){var f=Array.prototype.slice.call(e),g=f.slice(0),h=b[d].toLowerCase(),i=this.__getDateString(),j=this.__getPosition();if(g.unshift(j),g.unshift(h),g.unshift(i),"undefined"!=typeof module&&module.exports?f.unshift(this.__formatLog4Server({type:d,time:i,pos:j},!0)):(f.unshift("color:"+c[d]),f.unshift(this.__formatLog4Client({type:d,time:i,pos:j},!0))),this.__isOk(h)){var k=this.fire(h,g);k!==!1&&a.DEBUG&&console.log.apply(this,f)}},__isOk:function(a){if(this._config.only){if(this._config.only===a)return!0}else{var b=-1!==this._config.levels.indexOf(a);if(b)return!0}return!1}}});a.logger=new f;var g={info:function(){a.logger.info.apply(a.logger,arguments)},debug:function(){a.logger.debug.apply(a.logger,arguments)},warn:function(){a.logger.warn.apply(a.logger,arguments)},trace:function(){a.logger.trace.apply(a.logger,arguments)},error:function(){a.logger.error.apply(a.logger,arguments)}};a.extend(a,g)}(zn),function(a){var b=Array.prototype.slice,c={PENDING:0,FULFILLED:1,REJECTED:2},d=a.Class({events:["complete"],properties:{promise:null},methods:{init:function(a,b){this._promise=new e,a&&this.resolve(a),b&&this.reject(b)},resolve:function(){var d=b.call(arguments);try{var e=this.get("promise"),g=this;if(e.get("readyState")!=c.PENDING)return;e.set("readyState",c.FULFILLED),e.set("data",d),a.each(e.get("resolves"),function(a){a.apply(g,d)})}catch(h){f.catch(h,this)}this.fire("complete",d)},reject:function(){var a=b.call(arguments);try{var d=this.get("promise");if(d.get("readyState")!=c.PENDING)return;d.set("readyState",c.REJECTED),d.set("reason",a);var e=d.get("rejects")[0];e&&e.apply(this,a)}catch(g){f.catch(g,this)}this.fire("complete",a)}}}),e=a.Class({statics:{isPromise:function(a){return null!==a&&void 0!==a&&"function"==typeof a.then},defer:null},properties:{resolves:null,rejects:null,data:null,reason:null,readyState:null},methods:{init:function(){this.set("resolves",[]),this.set("rejects",[]),this.set("exceptions",[]),this.set("readyState",c.PENDING)},then:function(a,f){function g(){var c=b.call(arguments),d=a?a.apply(this,c):c;return e.isPromise(d)?d.then(function(){h.resolve.apply(h,b.call(arguments))}):h.resolve.apply(h,d),d}var h=new d;if(this.get("readyState")===c.PENDING)this.get("resolves").push(g),this.get("rejects").push(f?f:function(){h.reject.apply(h,b.call(arguments))});else if(this.get("readyState")===c.FULFILLED){var i=this;setTimeout(function(){g.apply(i,i.get("data"))})}return h.promise},"catch":function(a){return f.exception(a)},"finally":function(a){return f.finally(a)},otherwise:function(a){return this.then(void 0,a)}}}),f=a.async=a.Class({"static":!0,methods:{init:function(){this._exceptions=[],this._finallys=[],this._count=0,this._currIndex=0,this._dataArray=[]},exception:function(a){return this._exceptions.push(a),this},"catch":function(b,c){return a.each(this._exceptions,function(a){a.call(c,b)}),this},"finally":function(a){return this._finallys.push(a),this},defer:function(b,c){var e=this,f=new d(b,c);return f.on("complete",function(b,c){e._currIndex++,e._dataArray.push(c),e._currIndex==e._count&&(a.each(e._finallys,function(b){try{b(e._dataArray)}catch(c){a.error(c.message)}}),e._finallys=[])}),e._count++,f},all:function(b){var c=f.defer(),d=0,e=[];return a.each(b,function(a){a.then(function(a){e.push(a),d++,d>=b.length&&c.resolve(e)})}),c.promise},any:function(b){var c=f.defer();return a.each(b,function(a){a.then(function(a){c.resolve(a)})}),c.promise}}})}(zn),function(){zn.querystring=zn.Class({"static":!0,properties:{config:{get:function(){}}},methods:{init:function(){this._config={separator:"&",equal:"=",minIndex:0,maxIndex:1e3}},config:function(a){return this.overwrite(this._config,a),this},parse:function(a,b){var c=zn.extend({},this._config,b),d={},e=c.equal,f=a.split(c.separator),g=f.length;c.maxIndex>0&&g>c.maxIndex&&(g=c.maxIndex);for(var h=c.minIndex;g>h;h++){var i=f[h].replace(/\+/g,"%20"),j=i.indexOf(e),k=null,l=null;j>=0?(k=i.substr(0,j),l=i.substr(j+1)):(k=i,l=""),k=decodeURIComponent(k),l=decodeURIComponent(l),hasOwnProperty(d,k)?zn.is(d[k],"array")?d[k].push(l):d[k]=[d[k],l]:d[k]=l}return d},stringify:function(a,b){var c=zn.extend({},this._config,b),d=[],e=c.equal,f={};if(f=zn.isZNObject(a)?a.gets():a,!zn.is(f,"object"))throw new Error("Agrument Error.");
for(var g in a){var h=a[g],i=encodeURIComponent(this.__stringifyValue(g));h=encodeURIComponent(this.__stringifyValue(h)),d.push(i+e+h)}return d.join(c.separator)},__stringifyValue:function(a){switch(zn.type(a)){case"string":return a;case"boolean":return a?"true":"false";case"object":case"array":return JSON.stringify(a);case"number":return isFinite(a)?a:"";default:return""}}}})}(zn),function(a){a.data=a.Class({"static":!0,methods:{arrayToTree:function(b,c){var d={},e={},f=[],g=null,h=null,i=a.extend({id:"id",pid:"pid"},c),j=i.id,k=i.pid;for(h in b)g=b[h],d[g[k]]||(d[g[k]]=[]),d[g[k]].push(g),e[g[j]]=g;for(h in b)d[b[h][j]]&&(b[h].children=d[b[h][j]]);for(var l in d)if(!e[l]){f=d[l];break}return f}}})}(zn);