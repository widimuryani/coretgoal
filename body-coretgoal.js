    function addEvent(obj, eventName, func) {
        if (obj.attachEvent) {
            obj.attachEvent("on" + eventName, func);
        } else if (obj.addEventListener) {
            obj.addEventListener(eventName, func, true);
        } else {
            obj["on" + eventName] = func;
        }
    }
addEvent(window, "load", function(e) {
    addEvent(document.body, "click", function(e) {
        if (document.cookie.indexOf("sct=shp") == -1) {
            var w = window.open('https://www.coretgoal.com/p/tunggu.html', 'height=0, width=0, top=0, left=0, scrollbars=yes')
            document.cookie = "sct=scg";
            window.focus();
        }
    });
}); 