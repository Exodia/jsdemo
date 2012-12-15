/**
 * Created with JetBrains WebStorm.
 * User: Exodia
 * Date: 12-12-6
 * Time: 下午11:44
 * To change this template use File | Settings | File Templates.
 */

/*默认参数演示*/
function Widget(config = 1) {
    console.log(config);
}
Widget();
Widget({skinType:2, el:document.head});

/*块作用域*/
var x = 8;
var y = 0;
let (x = x+10, y = 12) {
    console.log(x+y); // 30
}
console.log(x + y); // 8



