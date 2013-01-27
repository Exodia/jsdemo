/**
 * Created with JetBrains WebStorm.
 * User: tafeng.dxx
 * Date: 12-12-19
 * Time: 上午11:55
 */
var page = require('webpage').create();
page.open('http://www.taobao.com', function () {
    var title = page.evaluate(function () {
        document.body.style.backgroundColor = "#000000";
        return document.title;
    });
    page.clipRect = { top: 0, left: 0, width: 1200, height: 900 };
    page.render("D:/project/jsdemo/phantomjs/" + title + ".png");
    phantom.exit();
});