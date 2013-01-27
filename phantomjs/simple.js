/**
 * Created with JetBrains WebStorm.
 * User: tafeng.dxx
 * Date: 12-12-19
 * Time: 上午11:52
 */
console.log("we can log stuff out.");
function add(a, b) {
    return a + b;
}
console.log("We can execute regular JS too:", add(1, 2));
phantom.exit();