/**
 * Created by yangyxu on 3/11/15.
 */
module("zn");

test("zn", function () {
    ok(zn, 'window.zn global var is exist.');
    ok(zn.version, "zn's version is exist.");
});