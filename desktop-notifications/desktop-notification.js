//desktop-notification.js
void function() {
    var TITLE = '时间到啦~~！亲！！',
            //图标路径
        ICONURL = 'icon.png';

    var DN = window.XX.DesktopNotify;

   /**
    * 通知函数，根据设置的时间间隔，周期的弹出通知框
    */
    function notify(content, duration) {
        DN.show(ICONURL, TITLE, content);
        setTimeout(function() {
            DN.hide();
        }, duration);
    }

    if (!DN.isSupport()) {
        alert('浏览器不支持桌面通知！');
        return;
    }

    var startEl = document.getElementById('start'),//开始按钮
        stopEl = document.getElementById('stop'),//停止按钮
        intervalEl = document.getElementById('interval'),//提醒时间间隔输入框
        contentEl = document.getElementById('content'),//提醒内容输入框
        durEl = document.getElementById('duration'),//通知框持续时间输入框
        timer = null;

    startEl.addEventListener('click', function(evt) {
        /**
         * 点击“开始”，先申请用户授权，经过授权后，获取相关的提醒时间间隔，以及内容，周期的调用notify函数弹出通知框
         */
        DN.requestPermission(function() {
            timer = setInterval(notify, intervalEl.value * 60 * 1000, contentEl.value, durEl.value * 60 * 1000);
            startEl.disabled = true;
        });
    }, false);

    stopEl.addEventListener('click', function(evt) {
        /**
         * 点击“停止”，清除周期调用
         */
        clearInterval(timer);
        startEl.disabled = false;
    }, false);
}();
