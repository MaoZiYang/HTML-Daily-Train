/**
 * @Author: mzy
 * @Date: 2020-1-9 10:41
 */
//禁止右键

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("禁止恶意拿代码的");
            oncontextmenu = 'return false';
        }
    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}

if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function () {
    if (window.event.keyCode == 12) {
        window.event.returnValue = false;
        return (false);
    }
}


//禁止F12

function fuckyou() {
    window.close(); //关闭当前窗口(防抽)
    window.location = "about:blank"; //将当前窗口跳转置空白页
}

function click(e) {
    if (document.all) {
        if (event.button == 2 || event.button == 3) {
            alert("禁止恶意拿代码的");
            oncontextmenu = 'return false';
        }

    }
    if (document.layers) {
        if (e.which == 3) {
            oncontextmenu = 'return false';
        }
    }
}

if (document.layers) {
    fuckyou();
    document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function () {
    if (window.event.keyCode == 123) {
        fuckyou();
        window.event.returnValue = false;
        return (false);
    }
}