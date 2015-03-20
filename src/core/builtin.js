/**
 * Builtin Functions
 */
(function (zn) {
    var __toString = Object.prototype.toString;

    var __builtin__ = {
        fix: function (target){
            var _target = target||{};
            for (var i = 1, _len = arguments.length; i < _len; i++) {
                var _fix = arguments[i];
                for (var key in _fix) {
                    if (_fix.hasOwnProperty(key) && typeof _target[key] !== 'function') {
                        _target[key] = _fix[key];
                    }
                }
            }

            return _target;
        },
        extend: function (target){
            var _target = target||{};
            for (var i = 1, _len = arguments.length; i < _len; i++) {
                var _args = arguments[i];
                for (var key in _args) {
                    if (_args.hasOwnProperty(key)) {
                        _target[key] = _args[key];
                    }
                }
            }

            return _target;
        },
        overwrite: function (target){
            var _target = target||{};
            for(var i = 1, _len = arguments.length; i < _len; i++){
                var _args = arguments[i];
                for(var key in _args){
                    if(_args.hasOwnProperty(key) && _target[key]===undefined){
                        _target[key] = _args[key];
                    }
                }
            }

            return _target;
        },
        path: function (target, path, value) {
            var _result = target||{};
            if (path) {
                var _tokens = path.split('.'), _token,
                    i = 0, _length = _tokens.length;

                if (arguments.length < 3) {
                    for (; _result && i < _length; i++) {
                        _token = _tokens[i];
                        if (_result.__get__) {
                            _result = _result.__get__(_token);
                        } else {
                            _result = _result[token];
                        }
                    }
                } else {
                    _length -= 1;
                    for (; _result && i < _length; i++) {
                        _token = _tokens[i];
                        if (_result.__get__) {
                            _result = _result.__get__(_token);
                        } else {
                            _result = _result[_token] = _result[_token] || {};
                        }
                    }

                    _token = _tokens[i];
                    if (_result) {
                        if (_result.__set__) {
                            _result.__set__(_token, _value);
                        } else {
                            _result[_token] = value;
                        }

                        _result = value;
                    }
                }
            }

            return _result;
        },
        invoke: function (target, path, args) {
            if (target && path) {
                var index = path.lastIndexOf('.');
                var context, method;

                if (index > 0) {
                    context = zn.path(target, path.substring(0, index));
                    if (context) {
                        method = context[path.substring(index + 1)];
                    }
                } else {
                    context = target;
                    method = target[path];
                }

                if (method) {
                    method.apply(context, args);
                }
            }
        }
    };

    var __objectBasePrototypePrivateMethods__ = {
        toString: function (target){
            if(target&&target.__toString__){
                return target.__toString__();
            } else {
                return __toString.call(target);
            }
        },
        each: function (target, callback, context) {
            if (target && callback) {
                if(target.__each__){
                    target.__each__(callback, context);
                } else {
                    var _len = target.length;
                    if (_len >= 0 && __toString.call(target) === '[object Array]') {
                        for (var i = 0; i < _len; i++) {
                            callback.call(context, target[i], i);
                        }
                    } else {
                        for (var key in target) {
                            if (target.hasOwnProperty(key)) {
                                callback.call(context, target[key], key);
                            }
                        }
                    }
                }
            }
        },
        clone: function (target) {
            if (target) {
                if (target.__clone__){
                    return target.__clone__();
                } else {
                    if (zn.is(target, 'array')) {
                        return target.slice(0);
                    } else {
                        var result = {};
                        for (var key in target) {
                            if (target.hasOwnProperty(key)) {
                                result[key] = target[key];
                            }
                        }

                        return result;
                    }
                }
            } else {
                return target;
            }
        },
        type: function (target) {
            if (target && target.__type__) {
                return target.__type__;
            } else {
                return __toString.call(target).slice(8, -1).toLowerCase();
            }
        },
        is: function (target, type) {
            if (target && target.__is__) {
                return target.__is__(type);
            } else {
                if (typeof type === 'string') {
                    var _targetType = __toString.call(target).slice(8, -1).toLowerCase();
                    type = type.toLowerCase();
                    switch (type) {
                        case 'plain':
                            return target && target.constructor === Object;
                        default:
                            return _targetType === type;
                    }
                } else if (typeof type === 'function') {
                    return target instanceof type;
                }
            }
        },
        may: function (target, name) {
            if (target) {
                if (target.__may__) {
                    return target.__may__(name);
                } else {
                    return target.hasOwnProperty('on' + name);
                }
            } else {
                return false;
            }
        },
        can: function (target, name) {
            if (target) {
                if (target.__can__) {
                    return target.__can__(name);
                } else {
                    return typeof target[name] === 'function';
                }
            } else {
                return false;
            }
        },
        has: function (target, name) {
            if (target) {
                if (target.__has__) {
                    return target.__has__(name);
                } else {
                    return target.hasOwnProperty(name);
                }
            } else {
                return false;
            }
        },
        get: function (target, name) {
            if (target) {
                if (target.__get__) {
                    return target.__get__(name);
                } else {
                    return target[name];
                }
            }
        },
        set: function (target, name, value) {
            if (target) {
                if (target.__set__) {
                    target.__set__(name, value);
                } else {
                    target[name] = value;
                }
            }
        },
        gets: function (target) {
            if (target) {
                if (target.__gets__) {
                    return target.__gets__();
                } else {
                    var result = {};
                    for (var key in target) {
                        if (target.hasOwnProperty(key)) {
                            result[key] = target[key];
                        }
                    }

                    return result;
                }
            }
        },
        sets: function (target, dict) {
            if (target && dict) {
                if (target.__sets__) {
                    target.__sets__(dict);
                } else {
                    for (var key in dict) {
                        if (dict.hasOwnProperty(key)) {
                            target[key] = dict[key];
                        }
                    }
                }
            }
        }
    }

    __builtin__.extend(zn, __builtin__);

})(zn);