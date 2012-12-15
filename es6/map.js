/**
 * Created with JetBrains WebStorm.
 * User: Exodia
 * Date: 12-12-15
 * Time: 下午7:04
 * To change this template use File | Settings | File Templates.
 */
;
void function () {
    if (typeof window.Map === 'function') {
        return;
    }

    if (window.ActiveXObject) {
        window.Map = function (arrs) {
            this._data = new ActiveXObject("Scripting.Dictionary");
            if (arrs instanceof Array) {
                for (var i = 0, len = arrs.length; i < len; ++i) {
                    this.set(arrs[i][0], arrs[i][1]);
                }
            }
        };

        Map.prototype = {
            constructor:Map,
            set:function (key, val) {
                this._data(key) = val;
            },
            get:function (key) {
                return this._data(key);
            },
            has:function (key) {
                return this._data.Exists(key);
            },
            keys:function () {
                return (new VBArray(this._data.Keys())).toArray();
            },
            values:function () {
                return (new VBArray(this._data.Items())).toArray()
            },
            items:function () {
                var data = this._data,
                    ret = [],
                    keys = data.keys();
                for (var i = 0, len = keys.length; i < len; ++i) {
                    ret.push(keys[i], data(keys[i]));
                }
                return ret;
            },
            delete: function(key) {
                if(this._data.has(key)){
                    this._data.remove(key);
                    return true;
                }
                return false;

            },
            size:function () {
                return this._data.Count;
            },
            forEach: function(fn, scope) {

                scope = scope || this;
                var keys = this.keys(),
                    data = this._data;
                for(var i = 0, len = keys.length; i < len; ++i ) {
                     if(false === fn.call(scope, data(keys[i]), keys[i], this)) {
                         return;
                     }
                }
            }
        }
    }
}();