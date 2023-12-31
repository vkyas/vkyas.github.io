var run_console = false;
let _protocol,
  _host,
  _inc = 0,
  _un_ = " is undefined",
  __nf__ = " is not found",
  __nt__ = " is nothing";
const _sWidth = screen.width,
  _sHeight = screen.height,
  _obj_d = new Date(),
  _error_message = {
    id: "Id of element " + _un_,
    id_img: "id of image " + _un_,
    attr: "Attribute " + _un_,
    name: "Name of element " + _un_,
    url: "Url " + _un_,
    url_n: "Url is not valid",
    clbck_id: "Create callback function or id of element",
    val: "Value of element " + _un_,
    val_n: "Value " + __nf__,
    cnvs: "Id Canvas " + _un_,
    val_n: "Value " + __nf__,
    class: "Class of element " + _un_,
    obj: "Element " + __nf__,
    fu: "The parameter should be a callback function ",
    fu_n: "Function call back " + _un_,
    content: "Content " + _un_,
    key_cook: "Key of cookie " + __nt__,
    ajax_start: "Start Load data",
    ajax_finish: "Finish Load Data",
    ajax_process: "Request has been proccess",
    ajax_header:
      "Request is denied ! Header of request is not come from original server !",
    ajax_obj: "Element is not initialized",
    key_s: "Key of storage " + _un_,
    key_v: "Value of storage " + _un_,
    str_n: "Sorry your browser is not supported !",
  },
  _da = new Array("1", "2", "3", "4", "5", "6", "7", "8", "9", "0"),
  _dh = new Array("?", "$", "*", "~", "!", "^", "%", ">", "-", "|"),
  _componentHTML = {
    li_open: "<li class='",
    li_close: "</li>",
    tr_open: "<tr id='",
    tr_close: "</tr>",
    td_open: "<td>",
    td_close: "</td>",
    option_open: "<option value='",
    option_close: "</option>",
  },
  _ajaxSetup = {
    header: "Content-Type",
    app: "application/x-www-form-urlencoded",
    text_plain: "text/plain;charset=UTF-8",
  },
  flat_ui_color = {
    wet_asphalt: "#34495e",
    midnight_blue: "#2c3e50",
    concrete: "#95a5a6",
    asbestos: "#7f8c8d",
    turqoise: "#1abc9c",
    green_sea: "#16a085",
    peter_river: "#3498db",
    belize_hole: "#2980b9",
    amethyst: "#9b59b6",
    wisteria: "#8e44ad",
    alizarian: "#e74c3c",
    pomegranate: "#c0392b",
    clouds: "#ecf0f1",
    silver: "#bdc3c7",
    carrot: "#e67e22",
    pumpkin: "#d35400",
    sun_flower: "#f1c40f",
    orange: "#f39c12",
    emerald: "#2ecc71",
    nephritis: "#27ae60",
  },
  _keyCode = {
    space_bar: 32,
    backspace: 8,
    clear: 12,
    tab: 9,
    ctrl: 17,
    enter: 13,
    alt: 18,
    caps_lock: 20,
    escape: 27,
    shift: 16,
    home: 36,
    end: 35,
    insert: 45,
    delete: 46,
    f1: 112,
    f2: 113,
    f3: 114,
    f4: 115,
    f5: 116,
    f6: 117,
    f7: 118,
    f8: 119,
    f9: 120,
    f10: 121,
    f11: 122,
    f12: 123,
    semi_colon: 186,
    comma: 188,
    num_lock: 144,
    minus: 173,
    win_menu: 93,
    add: 107,
    divide: 111,
    next: 176,
    previous: 177,
    left: 37,
    right: 39,
    up: 38,
    down: 40,
  };
function _getById(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_getById -> " + _error_message.id);
      }
      return;
    }
    if (document.getElementById("" + o + "")) {
      const obj = document.getElementById("" + o + "");
      if (fu === undefined) {
        return obj;
      } else {
        if (_isFunction(fu)) {
          fu(obj);
        }
      }
    } else {
      if (run_console) {
        _writeLog("_getById -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_getById -> " + e);
    }
  }
}
function _getIdByName(n) {
  try {
    if (n === undefined) {
      if (run_console) {
        _writeLog("_getIdByName -> " + _error_message.name);
      }
      return;
    }
    if (document.getElementsByName("" + n + "")) {
      const id = document.getElementsByName("" + n + "");
      return id;
    } else {
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_getIdByName -> " + e);
    }
  }
}
function _getNameById(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_getNameById -> " + _error_message.id);
      }
      return;
    }
    if (document.getElementById("" + o + "")) {
      const obj = document.getElementById("" + o + "").name;
      return obj;
    } else {
      if (run_console) {
        _writeLog("_getNameById -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_getNameById -> " + e);
    }
  }
}
function _getHost() {
  let p = window.location.protocol + "//";
  q = window.location.host + "/";
  return p + q;
}
function _printTo(o, c) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_printTo -> " + _error_message.id);
      }
      return;
    }
    if (c === undefined) {
      if (run_console) {
        _writeLog("_printTo-> " + _error_message.content);
      }
      return;
    }
    var obj = _getById(o);
    if (obj) {
      obj.innerHTML = c;
      return obj;
    } else {
      if (run_console) {
        _writeLog("_printTo -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_printTo -> " + e);
    }
  }
}
function _clear(o, t) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_clear -> " + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      if (t === undefined) {
        _setValue(o, "");
      } else {
        _getById(o).innerHTML = "";
      }
    } else {
      if (run_console) {
        _writeLog("_clear -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_clear -> " + e);
    }
  }
}
function _focus(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_focus->" + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      _getById(o).focus();
    } else {
      if (run_console) {
        _writeLog("_focus -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_focus -> " + e);
    }
  }
}
function _isUrl(s) {
  try {
    if (s === "undefined") {
      if (run_console) {
        _writeLog("_isUrl-> " + _error_message.url);
        return;
      }
    }
    var regexp =
      /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    return regexp.test(s);
  } catch (e) {
    if (run_console) {
      _writeLog(e);
      return;
    }
  }
}
function _getValById(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_getValById->" + _error_message.id);
      }
      return;
    }
    if (_isArray(o)) {
      var pp = 0,
        arr = new Array(o.length);
      while (pp <= o.length - 1) {
        arr[pp] = _getById(o[pp]).value ? _getById(o[pp]).value.trim() : "";
        pp++;
      }
      return arr;
    } else {
      if (_getById(o)) {
        return _getById(o).value === ""
          ? _getById(o).value
          : _getById(o).value.trim();
      } else {
        if (run_console) {
          _writeLog("_getValById->" + _error_message.obj);
        }
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_getValById->" + e);
    }
  }
}
function _getValByName(n, i) {
  try {
    if (n === undefined) {
      if (run_console) {
        _writeLog("_getValByName->" + _error_message.name);
      }
      return;
    }
    if (i === undefined) {
      if (run_console) {
        _writeLog(
          "_getValByName -> Index of element " + _un_ + " set default to 0"
        );
      }
      i = 0;
    }
    return document.getElementsByName(n)[i].value
      ? document.getElementsByName(n)[i].value.trim()
      : null;
  } catch (e) {
    if (run_console) {
      _writeLog("_getValByName -> " + e);
    }
  }
}
function _docWrite(v) {
  try {
    if (v === undefined) {
      if (run_console) {
        _writeLog("_docWrite -> " + _error_message.content);
      }
      return;
    }
    var obj = document.write(v);
    return obj;
  } catch (e) {
    if (run_console) {
      _writeLog("_docWrite -> " + e);
    }
  }
}
function _colorFont(s, c) {
  if (c === undefined) {
    return "<font color='#e74c3c'>" + s + "</font>";
  } else {
    return "<font color='" + c + "'>" + s + "</font>";
  }
}
function _newForm(c, u, w, h) {
  try {
    if (c === undefined) {
      if (run_console) {
        _writeLog("_newForm->" + _error_message.val_n);
      }
      return;
    }
    w = w === undefined ? 500 : w;
    h = h === undefined ? 500 : h;
    if (u === undefined) {
      var wnd = window.open("", "", "width=" + w + ",height=" + h + "");
      wnd.document.write(c);
      wnd.focus();
      return wnd;
    } else {
      if (_isUrl(u)) {
        var wnd = window.open(u, "", "width=" + w + ",height=" + h + "");
        wnd.focus();
        return wnd;
      } else {
        if (run_console) {
          _writeLog("_newForm -> " + _error_message.url);
        }
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _isFunction(f) {
  var t = {};
  return f && t.toString.call(f) === "[object Function]";
}
function _writeLog(v, t) {
  var _bg_ = "background: #ffffff; color: ";
  var r = "#e74c3c",
    g = "#2ecc71";
  if (t === undefined) {
    console.log("%c " + v + "", _bg_ + r);
  } else if (t === false) {
    console.log("%c " + v + "", _bg_ + g);
  } else {
    console.log("%c " + v + "", _bg_ + t);
  }
}
function _requestGET(u, fu, h, hV) {
  try {
    var __rg = "_requestGET";
    if (u === undefined) {
      if (run_console) {
        _writeLog(__rg + " -> " + _error_message.url);
      }
      return;
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog(__rg + " ->" + _error_message.clbck_id);
      }
      return;
    }
    var x = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHttp");
    x.onreadystatechange = function () {
      if (this.readyState == 0) {
        if (run_console) {
          _writeLog(__rg + " -> " + _error_message.ajax_obj);
        }
        return false;
      }
      if (this.readyState == 1) {
        if (run_console) {
          _writeLog(__rg + " -> " + _error_message.ajax_start);
        }
      }
      if (this.readyState == 2) {
        if (run_console) {
          _writeLog(__rg + " -> " + _error_message.ajax_finish);
        }
      }
      if (this.status == 202) {
        if (run_console) {
          _writeLog(__rg + " -> " + _error_message.ajax_process);
        }
      }
      if (this.status == 203) {
        if (run_console) {
          _writeLog(__rg + " -> " + _error_message.ajax_header);
        }
        return false;
      }
      if (this.status == 400 || this.status == 404) {
        if (_isFunction(fu)) {
          fu(this.status);
        }
        return false;
      } else if (this.readyState == 4 && this.status == 200) {
        if (_isFunction(fu)) {
          fu(this.responseText, this.status, this.readyState);
          if (run_console) {
            _writeLog(__rg + " -> Run Function Call Back " + fu, false);
          }
        } else {
          _printTo(fu, this.responseText);
          if (run_console) {
            _writeLog(__rg + " -> Print Success", false);
          }
        }
      }
    };
    x.open("GET", u, true);
    h = h === undefined ? _ajaxSetup.header : h;
    hV = hV === undefined ? _ajaxSetup.app : hV;
    x.setRequestHeader(h, hV);
    x.send();
  } catch (e) {
    if (run_console) {
      _writeLog(__rg + " -> " + e);
    }
  }
}
function _requestPUT(u, fu, h, hV) {
  try {
    var ___rp = "_requestPUT";
    if (u === undefined) {
      if (run_console) {
        _writeLog(___rp + " -> " + _error_message.url);
      }
      return;
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog(___rp + " -> " + _error_message.clbck_id);
      }
      return;
    }
    var x = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHttp");
    x.onreadystatechange = function () {
      if (this.readyState == 0) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_obj);
        }
        return false;
      }
      if (this.readyState == 1) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_start);
        }
      }
      if (this.readyState == 2) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_finish);
        }
      }
      if (this.status == 202) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_process);
        }
      }
      if (this.status == 203) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_header);
        }
        return false;
      }
      if (this.status == 400 || this.status == 404) {
        if (_isFunction(fu)) {
          fu(this.status);
        }
        return false;
      } else if (this.readyState == 4 && this.status == 200) {
        if (_isFunction(fu)) {
          fu(this.responseText, this.status, this.readyState);
          if (run_console) {
            _writeLog(___rp + " -> Run Function Call Back " + fu, false);
          }
        } else {
          _printTo(fu, this.responseText);
          if (run_console) {
            _writeLog(___rp + " -> Success load document", false);
          }
        }
      }
    };
    x.open("PUT", u, true);
    h = h === undefined ? _ajaxSetup.header : h;
    hV = hV === undefined ? _ajaxSetup.app : hV;
    x.setRequestHeader(h, hV);
    x.send();
  } catch (e) {
    if (run_console) {
      _writeLog(___rp + " -> " + e);
    }
  }
}
function _checkEmail(e) {
  try {
    if (e === undefined) {
      if (run_console) {
        _writeLog("_checkEmail -> Email " + _un_);
      }
      return;
    }
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(e);
  } catch (e) {
    if (run_console) {
      _writeLog("_checkEmail -> " + e);
    }
  }
}
function _randomStr(l) {
  try {
    if (l === undefined) {
      l = 10;
    }
    var r = "";
    var c = "a1b2c3d4e5f6g7h8i9j0klmnopqrstuvwxyz";
    for (var i = 0; i < l; i++) {
      r += c.charAt(Math.floor(Math.random() * c.length));
    }
    if (run_console) {
      _writeLog("_randomStr -> Success Generate Random String", false);
    }
    return r;
  } catch (e) {
    if (run_console) {
      _writeLog("_randomStr -> " + e);
    }
  }
}
function _randomInt(l) {
  try {
    var r = "";
    var c = "1234567890";
    if (l === undefined) {
      l = 10;
    }
    for (var i = 0; i < l; i++) {
      r += c.charAt(Math.floor(Math.random() * c.length));
    }
    if (run_console) {
      _writeLog("_randomInt -> Success Generate Random Integer", false);
    }
    return r;
  } catch (e) {
    if (run_console) {
      _writeLog("_randomInt -> " + e);
    }
  }
}
function _encryptInt(v) {
  try {
    if (v === undefined) {
      if (run_console) {
        _writeLog("_encryptInt -> " + _error_message.val_n);
      }
      return;
    }
    v = v.toString();
    var lv = v.length;
    var d = new Array(lv);
    for (var i = 0; i < lv; i++) {
      var res = v.substring(i, i + 1);
      res = abc(res);
      d[i] = res;
    }
    var vr = d.toString();
    String.prototype.replaceAll = function (target, replacement) {
      return this.split(target).join(replacement);
    };
    if (run_console) {
      _writeLog("_encryptInt -> Success Encrypt Integer", false);
    }
    return vr.replaceAll(",", "");
    function abc(v) {
      if (v === _da[9]) {
        return _dh[2];
      }
      if (v === _da[7]) {
        return _dh[4];
      }
      if (v === _da[5]) {
        return _dh[6];
      }
      if (v === _da[3]) {
        return _dh[8];
      }
      if (v === _da[0]) {
        return _dh[1];
      }
      if (v === _da[1]) {
        return _dh[3];
      }
      if (v === _da[2]) {
        return _dh[5];
      }
      if (v === _da[4]) {
        return _dh[7];
      }
      if (v === _da[6]) {
        return _dh[9];
      }
      if (v === _da[8]) {
        return _dh[0];
      }
      if (run_console) {
        _writeLog("Value must be integer only -> " + v);
      }
      return v;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_encryptInt -> " + e);
    }
  }
}
function _decryptInt(v) {
  try {
    if (v === undefined) {
      if (run_console) {
        _writeLog("_decryptInt-> " + _error_message.val_n);
      }
      return;
    }
    var length_value = v.length;
    var _data = new Array(length_value);
    for (var i = 0; i < length_value; i++) {
      var res = v.substring(i, i + 1);
      res = abc(res);
      _data[i] = res;
    }
    var vr = _data.toString();
    String.prototype.replaceAll = function (target, replacement) {
      return this.split(target).join(replacement);
    };
    if (run_console) {
      _writeLog("_decryptInt -> Success Decrypt Integer", false);
    }
    return vr.replaceAll(",", "");
    function abc(v) {
      v = v.toUpperCase();
      if (v === _dh[2]) {
        return _da[9];
      }
      if (v === _dh[4]) {
        return _da[7];
      }
      if (v === _dh[6]) {
        return _da[5];
      }
      if (v === _dh[8]) {
        return _da[3];
      }
      if (v === _dh[1]) {
        return _da[0];
      }
      if (v === _dh[3]) {
        return _da[1];
      }
      if (v === _dh[5]) {
        return _da[2];
      }
      if (v === _dh[7]) {
        return _da[4];
      }
      if (v === _dh[9]) {
        return _da[6];
      }
      if (v === _dh[0]) {
        return _da[8];
      }
      if (run_console) {
        _writeLog("Key not found " + v);
      }
      return v;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_decryptInt -> " + e);
    }
  }
}
function _replaceJS(d) {
  try {
    if (d) {
      var r = d.replace("<script", "ssccrriipptt");
      r = r.replace("script>", "ssccrriipptt");
      r = r.replace("<script>", "ssccrriipptt");
      r = r.replace("</script>", "ssccrriipptt");
      r = r.replace("alert", "aallleerrtt");
      r = r.replace("alert(", "alleerrtt");
      r = r.replace(");", "}};;");
      return r;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_replaceJS -> " + e);
    }
  }
}
function _replaceMaster(s) {
  try {
    if (s) {
      var r = s.replace("'", "'");
      r = r.replace("<?php", "%tag%php%");
      r = r.replace("#", "%HASTAG%");
      r = r.replace("<!--", "tag comment");
      r = r.replace("-->", "tag comment");
      r = r.replace("<input type=", "input text");
      r = r.replace("<style>", "style");
      r = r.replace("</style>", "style");
      r = r.replace("<button>", "button");
      r = r.replace("</button>", "button");
      r = r.replace("</hr", "hr");
      r = r.replace("<i>", "i");
      r = r.replace("</i>", "i");
      r = r.replace("<body bgcolor=", "body background color");
      r = r.replace("<html>", "html");
      r = r.replace("</html>", "html");
      r = _replaceJS(r);
      return r;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_replaceMaster -> " + e);
    }
  }
}
function _returnMaster(s) {
  try {
    if (s) {
      var r = s.replace("%HASTAG%", "#");
      r = r.replace("%tag%php%", "<?php");
      return r;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_returnMaster -> " + e);
    }
  }
}
function _escapeHtml(str) {
  try {
    return str
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/(?:\r\n|\r|\n)/g, " ");
  } catch (e) {
    if (run_console) {
      _writeLog("_escapeHtml -> " + e);
    }
  }
}
function _setCookie(nm, vl, ex) {
  try {
    if (nm === undefined) {
      if (run_console) {
        _writeLog("_setCookie -> " + _error_message.key_cook);
      }
      return;
    }
    if (vl === undefined) {
      if (run_console) {
        _writeLog(
          "_setCookie -> Value of Cookie " +
            __nt__ +
            " -> set default from name"
        );
      }
      vl = _name;
    }
    if (ex === undefined) {
      ex = 60;
    }
    _obj_d.setTime(_obj_d.getTime() + ex * 24 * 60 * 60 * 1000);
    var exp = "expires=" + _obj_d.toUTCString();
    document.cookie = nm + "=" + vl + ";" + exp + ";path=/";
    if (run_console) {
      _writeLog("_setCookie -> Success Create new cookie ", false);
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_setCookie -> " + e);
    }
  }
}
function _getCookie(nm) {
  try {
    if (nm === undefined) {
      if (run_console) {
        _writeLog("_getCookie -> " + _error_message.key_cook);
      }
      return;
    }
    var name = nm + "=";
    var dd = decodeURIComponent(document.cookie);
    var ca = dd.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        if (run_console) {
          _writeLog(
            "_getCookie -> Success get cookie of " +
              nm +
              " is " +
              c.substring(name.length, c.length),
            false
          );
        }
        return c.substring(name.length, c.length);
      } else {
        return false;
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _deleteCookie(n) {
  try {
    if (n === undefined) {
      if (run_console) {
        _writeLog("_deleteCookie -> " + _error_message.key_cook);
      }
      return;
    }
    document.cookie =
      "" + n + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _detectBrowser() {
  try {
    var isChrome = !!window.chrome && !!window.chrome.webstore;
    if (isChrome) {
      return "Chrome";
    }
    var isOpera =
      (!!window.opr && !!opr.addons) ||
      !!window.opera ||
      navigator.userAgent.indexOf(" OPR/") >= 0;
    if (isOpera) {
      return "Opera";
    }
    var isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox) {
      return "Firefox";
    }
    var isSafari =
      /constructor/i.test(window.HTMLElement) ||
      (function (p) {
        return p.toString() === "[object SafariRemoteNotification]";
      })(!window["safari"] || safari.pushNotification);
    if (isSafari) {
      return "Safari";
    }
    var isIE = /*@cc_on!@*/ false || !!document.documentMode;
    if (isIE) {
      return "Internet Explorer";
    }
    var isEdge = !isIE && !!window.StyleMedia;
    if (isIE) {
      return "Edge";
    }
    var isBlink = (isChrome || isOpera) && !!window.CSS;
    if (isBlink) {
      return "Blink";
    }
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _getLocation(fu, o) {
  try {
    if (fu === undefined || fu === false) {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(function (p) {
          var lL =
            "Latitude : " +
            p.coords.latitude +
            ", Longitude : " +
            p.coords.longitude;
          if (o === undefined) {
            alert(lL);
          } else {
            _printTo("" + o + "", lL);
          }
        }, sE);
      } else {
        if (run_console) {
          _writeLog("_getLocation -> Browser doesn't support");
        }
      }
      return;
    } else if (_isFunction(fu)) {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(fu, sE);
      } else {
        if (run_console) {
          _writeLog("_getLocation -> Browser doesn't support");
        }
      }
    } else {
      if (run_console) {
        _writeLog("_getLocation -> " + fu + " " + _error_message.fu);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
  function sE(e) {
    if (run_console) {
      switch (e.code) {
        case e.PERMISSION_DENIED:
          _writeLog("User denied the request for Geolocation.");
          break;
        case e.POSITION_UNAVAILABLE:
          _writeLog("Location information is unavailable.");
          break;
        case e.TIMEOUT:
          _writeLog("The request to get user location timed out.");
          break;
        case e.UNKNOWN_ERROR:
          _writeLog("An unknown error occurred.");
          break;
      }
    }
  }
}
function _writeAlert(o, m, t, m2) {
  if (o) {
    if (_getById(o)) {
      var x = "";
      var mm = m2 === undefined ? (mm = "") : (mm = m2);
      var p =
        '<div class="alert alert-' +
        t +
        ' alert-dismissable fade in"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>' +
        mm +
        "</strong> " +
        m +
        "</div>";
      _printTo(o, p);
    } else {
      if (run_console) {
        _writeLog("_writeAlert -> " + _error_message.obj);
      }
    }
  } else {
    if (run_console) {
      _writeLog("_writeAlert -> " + _error_message.obj);
    }
  }
}
function _animation(o, txt, ty) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_animation -> " + _error_message.id);
      }
      return;
    }
    if (txt === undefined) {
      if (run_console) {
        _writeLog("_animation -> Text Animate Null");
        txt = "";
      }
    }
    if (ty === undefined) {
      if (run_console) {
        _writeLog("_animation -> Set default animate fa fa spinner");
      }
      ty = '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
    }
    if (ty === "refresh") {
      ty = '<i class="fa fa-refresh fa-spin fa-3x fa-fw"></i>';
    }
    if (ty === "spinner") {
      ty = '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>';
    }
    if (ty === "circle") {
      ty = '<i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>';
    }
    _printTo(o, "<h4>" + ty + "" + txt + "</h4>");
    if (run_console) {
      _writeLog("_animation -> Require font awesome !", true);
      _writeLog("_animation -> refresh, circle, spinner ", false);
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_animation -> " + e);
    }
  }
}
function _setValue(o, v) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_setValue -> " + _error_message.id);
      }
      return;
    }
    if (v === undefined) {
      if (run_console) {
        _writeLog(
          "_setValue -> " + _error_message.val_n + " set default to empty"
        );
      }
      v = null;
    }
    var obj = _getById(o);
    if (obj) {
      obj.value = v;
      return obj;
    } else {
      if (run_console) {
        _writeLog("_setValue -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_setValue -> " + e);
    }
  }
}
function _openUrl(u) {
  try {
    if (u === undefined) {
      if (run_console) {
        _writeLog("_openUrl -> " + _error_message.url);
      }
      return;
    }
    if (_isUrl(u)) {
      window.location.href = u;
    } else {
      if (run_console) {
        _writeLog("_openUrl -> " + _error_message.url_n);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_openUrl -> " + e);
    }
  }
}
function _confirm(q, y, n) {
  try {
    if (q === undefined) {
      if (run_console) {
        _writeLog("_confirm -> Question confirmation " + __nt__);
      }
      return;
    }
    if (y === undefined) {
      if (run_console) {
        _writeLog("_confirm -> Confirm Yes " + __nt__);
      }
      return;
    }
    var r = confirm("" + q + "");
    if (n === undefined) {
      if (r == true) {
        if (_isFunction(y)) {
          y();
        } else {
          if (run_console) {
            _writeLog("_confirm -> " + _error_message.fu);
          }
        }
      }
    } else {
      if (r == true) {
        if (_isFunction(y)) {
          y();
        } else {
          if (run_console) {
            _writeLog("_confirm -> " + _error_message.fu);
          }
        }
      } else {
        if (_isFunction(n)) {
          n();
        } else {
          if (run_console) {
            _writeLog("_confirm -> " + _error_message.fu);
          }
        }
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _removeMe(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_removeMe ->" + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      _getById("" + o + "").style.display = "none";
    } else {
      if (run_console) {
        _writeLog("_removeMe -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_removeMe -> " + e);
    }
  }
}
function _isHidden(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_isHidden ->" + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      var get = _getById(o).style.visibility;
      if (get === "hidden") {
        if (run_console) {
          _writeLog(get);
        }
        return true;
      } else {
        if (run_console) {
          _writeLog(get);
        }
        return false;
      }
    } else {
      if (run_console) {
        _writeLog("_isHidden -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_isHidden -> " + e);
    }
  }
}
function _showMe(o, t) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_showMe ->" + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      _getById("" + o + "").style.visibility = "block";
    } else {
      if (run_console) {
        _writeLog("_showMe -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_showMe -> " + e);
    }
  }
}
function _baseUrl() {
  try {
    if (run_console) {
      _writeLog("_baseUrl -> " + document.baseURI);
    }
    return document.baseURI;
  } catch (e) {
    if (run_console) {
      _writeLog("_baseUrl -> " + e);
    }
  }
}
function _getAllCookie() {
  try {
    return document.cookie;
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _getTitle() {
  try {
    return document.title;
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _getDomain() {
  try {
    return document.domain;
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _countImage() {
  try {
    return document.images.length;
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _countLink() {
  try {
    return document.links.length;
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _countForm() {
  try {
    return document.forms.length;
  } catch (e) {
    if (run_console) {
      _writeLog("_countForm -> " + e);
    }
  }
}
function _hideMe(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_hideMe ->" + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      _getById("" + o + "").style.visibility = "hidden";
    } else {
      if (run_console) {
        _writeLog("_hideMe -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_hideMe -> " + e);
    }
  }
}
function _onClick(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onClick ->" + _error_message.id);
      }
      return;
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog("_onClick -> " + _error_message.fu_n);
      }
      return;
    }
    if (_isFunction(fu)) {
      var obj = _getById(o);
      if (obj) {
        obj.onclick = function () {
          if (obj.innerHTML) {
            fu(obj.innerHTML, obj);
          } else if (obj.value) {
            fu(obj.value, obj);
          }
        };
      } else {
        if (run_console) {
          _writeLog("_onClick -> " + _error_message.obj);
        }
      }
    } else {
      if (run_console) {
        _writeLog("_onClick -> " + _error_message.fu);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onClick -> " + e);
    }
  }
}
function _setImage(o, img) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_setImage ->" + _error_message.id);
      }
      return;
    }
    if (img === undefined) {
      if (run_console) {
        _writeLog("_setImage -> Image " + __nt__);
      }
      return;
    }
    if (_getById(o)) {
      _getById("" + o + "").src = "" + img + "";
    } else {
      if (run_console) {
        _writeLog("_setImage -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog(e);
    }
  }
}
function _refresh(u) {
  try {
    if (u === undefined) {
      window.location.href = "";
      return;
    }
    window.location.href = u;
  } catch (e) {
    if (run_console) {
      _writeLog("_refresh -> " + e);
    }
  }
}
function _qSelectorBackgroundCol(o, c, ty) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_qSelectorBackgroundCol -> " + _error_message.class);
      }
      return;
    }
    if (c === undefined) {
      if (run_console) {
        _writeLog(
          "_qSelectorBackgroundCol -> Color " +
            _un_ +
            " set default to " +
            flat_color.alizarian
        );
      }
      c = flat_color.alizarian;
    }
    if (ty === undefined) {
      var ob = (document.querySelector(o).style.backgroundColor = c);
      if (run_console) {
        _writeLog("_qSelectorBackgroundCol -> " + ob);
      }
      return ob;
    } else {
      var x = document.querySelectorAll(o);
      var i;
      for (i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = c;
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_qSelectorBackgroundCol -> " + e);
    }
  }
}
function _qSelectorHTML(o, v) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_qSelectorHTML -> " + _error_message.id);
      }
      return;
    }
    if (v === undefined) {
      if (run_console) {
        _writeLog("_qSelectorHTML -> " + _error_message.val);
      }
      return;
    }
    var ob = (document.querySelector("" + o + "").innerHTML = v);
    if (run_console) {
      _writeLog("_qSelectorHTML -> " + ob);
    }
    return ob;
  } catch (e) {
    if (run_console) {
      _writeLog("_qSelectorHTML -> " + e);
    }
  }
}
function _qSelector(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_qSelector -> " + _error_message.id);
      }
      return;
    }
    var ob = document.querySelector("" + o + "");
    if (ob) {
      if (run_console) {
        _writeLog("_qSelector -> " + obj);
      }
      return ob;
    } else {
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_qSelector -> " + e);
    }
  }
}
function _qSelectorAll(o) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_qSelectorAll -> " + _error_message.id);
      }
      return;
    }
    var ob = document.querySelectorAll(o);
    if (ob) {
      if (run_console) {
        _writeLog("_qSelectorAll -> " + obj);
      }
      return ob;
    } else {
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_qSelectorAll -> " + e);
    }
  }
}
function _onKeyUp(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onKeyUp -> " + _error_message.id);
        return;
      }
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog("_onKeyUp -> " + _error_message.fu_n);
        return;
      }
    }
    if (_isFunction(fu) == false) {
      if (run_console) {
        _writeLog("_onKeyUp -> " + fu + " is not a function");
        return;
      }
    }
    if (_getById(o)) {
      _getById("" + o + "").addEventListener("keyup", fu);
    } else {
      if (run_console) {
        _writeLog("_onKeyUp -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onKeyUp -> " + e);
    }
  }
}
function _onKeyDown(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onKeyDown -> " + _error_message.id);
        return;
      }
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog("_onKeyDown -> " + _error_message.fu_n);
        return;
      }
    }
    if (_isFunction(fu) == false) {
      if (run_console) {
        _writeLog("_onKeyDown -> " + fu + " is not a function");
        return;
      }
    }
    if (_getById(o)) {
      _getById("" + o + "").addEventListener("keydown", fu);
    } else {
      if (run_console) {
        _writeLog("_onKeyDown -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onKeyDown -> " + e);
    }
  }
}
function _previewImage(o, im) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_previewImage -> id of input file " + _un_);
        return;
      }
    }
    if (im === undefined) {
      if (run_console) {
        _writeLog("_previewImage -> id of image " + _un_);
        return;
      }
    }
    if (_getById(o)) {
      _getById("" + o + "").onchange = function () {
        var r = new FileReader();
        r.onload = function (e) {
          _getById("" + im + "").src = e.target.result;
          _getById(im).src = e.target.result;
        };
        r.readAsDataURL(this.files[0]);
      };
    } else {
      if (run_console) {
        _writeLog("_previewImage -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_previewImage -> " + e);
    }
  }
}
function _getExtensionFile(o) {
  if (o === undefined) {
    if (run_console) {
      _writeLog("_getExtensionFile-> " + _error_message.id);
    }
    return;
  }
  try {
    return o.value.split(".")[1].toLowerCase();
  } catch (e) {
    if (run_console) {
      _writeLog("_getExtensionFile -> " + e);
    }
  }
}
function _myUrl() {
  try {
    const b = window.location.origin;
    const n = b.search("localhost");
    if (n === -1) {
      return b + "/";
    } else {
      const url = window.location.pathname.split("/", 2);
      const ns = b + url;
      const nu = ns.replace(",", "/");
      if (run_console) {
        _writeLog("_myUrl() -> " + nu + "/");
      }
      return nu + "/";
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_myUrl -> " + e);
    }
  }
}
function _getYear() {
  return _obj_d.getFullYear();
}
function _getDay() {
  return _obj_d.getDay();
}
function _getMonth() {
  return _obj_d.getMonth();
}
function _getDate(t) {
  if (t === undefined) {
    const _ = _getYear() + "/" + _getMonth() + "/" + _getDay();
    if (run_console) {
      _writeLog("_getDate -> " + _);
    }
    return _;
  } else {
    const _ = _getYear() + t + _getMonth() + t + _getDay();
    if (run_console) {
      _writeLog("_getDate -> " + _);
    }
    return _;
  }
}
function _getDayName(t, v) {
  const eng = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const ind = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  v = v === undefined ? _getDay() : parseInt(v);
  return t === "eng" ? eng[v] : ind[v];
}
function _getMonthName(t, v) {
  v = v === undefined ? _getMonth() : parseInt(v);
  const eng = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const ind = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Met",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return t === "eng" ? eng[v] : ind[v];
}
function _getTime() {
  return _obj_d.toLocaleTimeString();
}
function _cYposition() {
  if (self.pageYOffset) return self.pageYOffset;
  if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}
function _elmPosition(eID) {
  var elm = _getById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  }
  return y;
}
function _scroll(o) {
  var startY = _cYposition();
  var stopY = _elmPosition(o);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY);
    return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
    for (var i = startY; i < stopY; i += step) {
      setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
      leapY += step;
      if (leapY > stopY) leapY = stopY;
      timer++;
    }
    return;
  }
  for (var i = startY; i > stopY; i -= step) {
    setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
    leapY -= step;
    if (leapY < stopY) leapY = stopY;
    timer++;
  }
}
function _keyArrow(fl, fr, fu, fd) {
  try {
    document.addEventListener(
      "keydown",
      function (event) {
        if (fl) {
          if (event.keyCode == _keyCode.left) {
            fl();
          }
        }
        if (fr) {
          if (event.keyCode == _keyCode.right) {
            fr();
          }
        }
        if (fu) {
          if (event.keyCode == _keyCode.up) {
            fu();
          }
        }
        if (fd) {
          if (event.keyCode == _keyCode.down) {
            fd();
          }
        }
      },
      true
    );
  } catch (e) {
    if (run_console) {
      _writeLog("_keyArrow-> " + e);
    }
  }
}
function _keyCustom(fc, kc) {
  try {
    if (kc === undefined) {
      kc = _keyCode.space_bar;
      if (run_console) {
        _writeLog(
          "_keyCustom -> Key code " + _un_ + " set default 32 Space Bar"
        );
      }
    }
    if (run_console) {
      _writeLog("_keyCustom -> " + kc);
    }
    if (_isFunction(fc)) {
      document.addEventListener(
        "keydown",
        function (event) {
          if (event.keyCode == kc) {
            fc();
          }
        },
        true
      );
    } else {
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_keyCustom -> " + e);
    }
  }
}
class _gData {
  constructor(o, ao, vo) {
    this.o = o;
    this.ao = ao;
    this.vo = vo;
  }
  rGet_ID() {
    var o = _getById(this.o);
    if (o) {
      return o.getAttribute(this.ao);
    } else {
      return false;
    }
  }
  rGet_Tag() {
    var o = document.getElementsByTagName(this.o)[0];
    if (o) {
      return o.getAttribute(this.ao);
    } else {
      return false;
    }
  }
  setData() {
    var o = _getById(this.o);
    if (o) {
      o.setAttribute(this.ao, this.vo);
    } else {
      return false;
    }
  }
  get dataById() {
    return this.rGet_ID();
  }
  get dataByTag() {
    return this.rGet_Tag();
  }
}
function _onKeyUpToText(o, o_d, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onKeyUpToText -> " + _error_message.id);
        return;
      }
    }
    if (o_d === undefined) {
      if (run_console) {
        _writeLog("_onKeyUpToText -> " + _error_message.id);
        return;
      }
    }
    if (_isFunction(fu)) {
      _getById("" + o + "").addEventListener("keyup", function () {
        fu(o_d, _getValById(o));
      });
    } else {
      if (_getById(o)) {
        _getById("" + o + "").addEventListener("keyup", function () {
          _printTo(o_d, _getValById(o));
        });
      } else {
        if (run_console) {
          _writeLog("_onKeyUpToText -> " + _error_message.obj);
        }
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onKeyUpToText -> " + e);
    }
  }
}
function _drawCircle(o, xC, yC, d) {
  try {
    if (o === undefined) {
      if (run_console) _writeLog("_drawCircle->" + _error_message.cnvs);
      return;
    }
    if (xC === undefined) {
      if (run_console) {
        _writeLog("_drawCircle-> X Center " + _un_ + ", set to 60");
      }
      xC = 60;
    }
    if (yC === undefined) {
      if (run_console) {
        _writeLog("_drawCircle->Y Center " + _un_ + " , set to 60");
      }
      yC = 60;
    }
    if (d === undefined) {
      if (run_console) {
        _writeLog("_drawCircle->d (diameter) " + _un_ + ", set to 50");
      }
      d = 50;
    }
    var c = _getById(o).getContext("2d");
    c.beginPath();
    c.arc(xC, yC, d, 0, 2 * Math.PI);
    c.stroke();
    return c;
  } catch (e) {
    if (run_console) {
      _writeLog("_drawCircle->" + e);
    }
  }
}
function _drawText(o, t, f, sX, sY) {
  try {
    if (o === undefined) {
      if (run_console) _writeLog("_drawText->" + _error_message.cnvs);
      return;
    }
    if (t === undefined) {
      t = "Hello World";
    }
    if (f === undefined) {
      f = "30px Arial";
    }
    if (sX === undefined) {
      sX = 30;
    }
    if (sY === undefined) {
      sY = 30;
    }
    var c = _getById(o).getContext("2d");
    c.font = f;
    c.strokeText(t, sX, sY);
    return c;
  } catch (e) {
    if (run_console) {
      _writeLog("_drawCircle->" + e);
    }
  }
}
function _drawLine(o, xL, yL, xP, yP, c) {
  try {
    if (o === undefined) {
      if (run_console) _writeLog("_drawLine->" + _error_message.cnvs);
      return;
    }
    if (xL === undefined) {
      xL = 200;
    }
    if (yL === undefined) {
      yL = 200;
    }
    if (xP === undefined) {
      xP = 0;
    }
    if (yP === undefined) {
      yP = 0;
    }
    if (c === undefined) {
      c = "2d";
    }
    var c = _getById(o).getContext(c);
    c.moveTo(xP, yP);
    c.lineTo(xL, yL);
    c.stroke();
    return c;
  } catch (e) {
    if (run_console) {
      _writeLog("_drawLine->" + e);
    }
  }
}
function _drawImage(iC, iI, cX, cY) {
  try {
    if (iC === undefined) {
      if (run_console) {
        _writeLog("_drawImage->" + _error_message.cnvs);
      }
      return;
    }
    if (iI === undefined) {
      if (run_console) {
        _writeLog("_drawImage->" + _error_message.id_img);
      }
      return;
    }
    if (cX === undefined) {
      cX = 10;
    }
    if (cY === undefined) {
      cY = 10;
    }
    var c = _getById(iC).getContext("2d");
    var img = _getById(iI);
    c.drawImage(img, cX, cY);
    return c;
  } catch (e) {
    if (run_console) _writeLog("_drawImage->" + e);
  }
}
function _clearCanvas(o) {
  try {
    if (o === undefined) {
      if (run_console) _writeLog("_clearCanvas->" + _error_message.cnvs);
      return;
    }
    var c = _getById(o);
    ctx = c.getContext("2d");
    ctx.clearRect(0, 0, c.width, c.height);
  } catch (e) {
    if (run_console) _writeLog("_clearCanvas->" + e);
  }
}
function _onDClick(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onDoubleClick->" + _error_message.id);
        return;
      }
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog("_onDoubleClick -> " + _error_message.fu_n);
        return;
      }
    }
    if (_isFunction(fu)) {
      var obj = _getById(o);
      if (obj) {
        obj.ondblclick = function () {
          if (obj.innerHTML) {
            fu(obj.innerHTML, obj);
          } else if (obj.value) {
            fu(obj.value, obj);
          }
        };
      } else {
        if (run_console) {
          _writeLog("_onDoubleClick -> " + _error_message.obj);
        }
      }
    } else {
      if (run_console) {
        _writeLog("_onDoubleClick -> " + _error_message.fu);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onDoubleClick -> " + e);
    }
  }
}
function _writeBody(v) {
  if (v) {
    var obj = (document.body.innerHTML = v);
    return obj;
  } else {
    if (run_console) {
      _writeLog("_writeBody -> " + _error_message.val);
    }
  }
}
function _isArray(arr) {
  if (arr) {
    if (Object.prototype.toString.call(arr) === "[object Array]") {
      return true;
    } else {
      return false;
    }
  } else {
    if (run_console) {
      _writeLog("_isArray->" + _error_message.val);
    }
  }
}
function _getContent(o, f) {
  if (f === undefined) {
    return o ? _getById(o).innerHTML.trim() : null;
  } else {
    return o ? f(_getById(o).innerHTML.trim()) : f(null);
  }
}
function _addList(o, c, v, type) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_addList->" + _error_message.id);
      }
      return;
    }
    if (c === undefined) {
      c = "list-group";
      if (run_console) {
        _writeLog("_addList->" + _error_message.class);
      }
    }
    if (v === undefined) {
      if (run_console) {
        _writeLog("_addList->" + _error_message.val);
      }
      return;
    }
    var current_val = _getContent(o);
    if (run_console) {
      _writeLog(current_val);
    }
    var r = "";
    if (_isArray(v)) {
      for (var i = 0; i < v.length; i++) {
        r +=
          "<div id=" +
          v[i] +
          ">" +
          _componentHTML.li_open +
          c +
          "'>" +
          v[i] +
          _componentHTML.li_close +
          "</div>";
      }
    } else {
      r =
        "<div id=" +
        v +
        ">" +
        _componentHTML.li_open +
        c +
        "'>" +
        v +
        _componentHTML.li_close +
        "</div>";
    }
    if (type === undefined) {
      if (current_val) {
        _printTo(o, current_val + r);
      }
    } else {
      _printTo(o, r);
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_addList->" + e);
    }
  }
}
function _textStyle(o, style) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_textStyle->" + _error_message.id);
      }
      return;
    }
    if (_isArray(style)) {
      var obj = _getById(o);
      if (style[0]) {
        obj.style.fontStyle = style[0];
      }
      if (style[1]) {
        obj.style.fontSize = style[1];
      }
      if (style[2]) {
        obj.style.textAlign = style[2];
      }
      if (style[3]) {
        obj.style.color = style[3];
      }
      if (style[4]) {
        obj.style.fontVariant = style[4];
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_textStyle->" + e);
    }
  }
}
function _addItemTable(o, v, t) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_addTable->" + _error_message.id);
      }
      return;
    }
    if (v === undefined) {
      if (run_console) {
        _writeLog("_addTable->" + _error_message.val);
      }
      return;
    }
    let r = _componentHTML.tr_open + _inc + "'>";
    let cv = _getById(o).innerHTML;
    if (_isArray(v)) {
      for (i = 0; i < v.length; i++) {
        r += _componentHTML.td_open + v[i] + _componentHTML.td_close;
      }
    }
    if (t === undefined) {
      if (cv) {
        _printTo(o, cv + r + _componentHTML.tr_close);
      }
      _inc++;
    } else {
      _printTo(o, r + _componentHTML.tr_close);
      _inc++;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_addTable-> " + e);
    }
  }
}
function _getLastIncrement() {
  return _inc;
}
function _rightClick(v) {
  try {
    document.body.onclick = function (e) {
      window.oncontextmenu = function () {
        if (v === undefined) {
          v = "Sorry, Right Click Disabled";
        }
        if (_isFunction(v)) {
          v();
        } else {
          alert(v);
        }
        return false;
      };
    };
  } catch (e) {
    if (run_console) {
      _writeLog("_rightClick->" + e);
    }
  }
}
function _getOption(o, t) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_getValOption->" + _error_message.id);
      }
      return;
    }
    var obj = _getById(o);
    if (obj) {
      if (t === undefined) {
        return obj.options[obj.selectedIndex].value;
      } else {
        return obj.options[obj.selectedIndex].text;
      }
    } else {
      if (run_console) _writeLog("_getValOption->" + _error_message.obj);
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_getValOption->" + e);
    }
  }
}
function _addOption(o, v, val_text) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_addOption->" + _error_message.id);
      }
      return;
    }
    var obj = _getById(o);
    if (obj) {
      v = v == undefined ? "VALUE" : v;
      var curr = obj.innerHTML;
      var tmp = "";
      if (_isArray(v)) {
        if (_isArray(val_text)) {
          for (var i = 0; i < v.length; i++) {
            vT = val_text[i] ? val_text[i] : false;
            vI = v[i] ? v[i] : "ID" + i;
            tmp +=
              '<div id="' +
              vI +
              i +
              '">' +
              _componentHTML.option_open +
              vI +
              "'>" +
              vT +
              _componentHTML.option_close +
              "</div>";
          }
          tmp = curr + tmp;
        } else {
          for (var i = 0; i < v.length; i++) {
            vI = v[i] ? v[i] : "ID" + i;
            tmp +=
              '<div id="' +
              vI +
              i +
              '">' +
              _componentHTML.option_open +
              vI +
              "'>" +
              vI +
              _componentHTML.option_close +
              "</div>";
          }
          tmp = curr + tmp;
        }
      } else {
        if (val_text === undefined) {
          val_text = v;
        }
        if (curr) {
          tmp =
            curr +
            '<div id="' +
            v +
            '">' +
            _componentHTML.option_open +
            v +
            "'>" +
            val_text +
            _componentHTML.option_close +
            "</div>";
        } else {
          tmp =
            '<div id="' +
            v +
            '">' +
            _componentHTML.option_open +
            v +
            "'>" +
            val_text +
            _componentHTML.option_close +
            "</div>";
        }
      }
      _printTo(o, tmp);
    } else {
      if (run_console) {
        _writeLog("_addOption->" + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_addOption->" + e);
    }
  }
}
function _selectText(o) {
  if (o === undefined) {
    if (run_console) {
      _writeLog("_selectText->" + _error_message.id);
    }
    return;
  }
  var obj = _getById(o);
  if (obj) {
    obj.select();
  } else {
    if (run_console) {
      _writeLog("_selectText->" + _error_message.obj);
    }
  }
}
function _print(o, w, h) {
  let otp;
  if (o === undefined) {
    if (run_console) {
      _writeLog("_print -> " + _error_message.id);
    }
    otp = document.body.innerHTML;
  } else if (_getById(o)) {
    otp = _getById(o).innerHTML;
  }
  w = w === undefined ? 500 : w;
  h = h === undefined ? 500 : h;
  let wn = window.open("", "PRINT", "height=" + h + ",width=" + w);
  wn.document.write("<html><head><title>" + _getTitle() + "</title>");
  wn.document.write("</head><body >");
  wn.document.write("<h1>" + _getTitle() + "</h1>");
  wn.document.write(otp);
  wn.document.write("</body></html>");
  wn.document.close();
  wn.focus();
  wn.print();
  wn.close();
  return true;
}
function _onChange(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onChange -> " + _error_message.id);
      }
      return false;
    }
    if (_getById(o)) {
      if (_isFunction(fu)) {
        _getById(o).onchange = function () {
          fu();
        };
      }
    } else {
      if (run_console) {
        _writeLog("_onChange -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onChange ->" + e);
    }
  }
}
function _onLoad(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onLoad -> " + _error_message.id);
      }
      return false;
    }
    if (_getById(o)) {
      if (_isFunction(fu)) {
        _getById(o).onload = function () {
          fu();
        };
      }
    } else {
      if (run_console) {
        _writeLog("_onLoad -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onLoad ->" + e);
    }
  }
}
function _onPageShow(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onPageShow -> " + _error_message.id);
      }
      return false;
    }
    if (_getById(o)) {
      if (_isFunction(fu)) {
        _getById(o).onpageshow = function () {
          fu();
        };
      }
    } else {
      if (run_console) {
        _writeLog("_onPageShow -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onPageShow ->" + e);
    }
  }
}
function _onDrag(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onDrag -> " + _error_message.id);
      }
      return false;
    }
    if (_getById(o)) {
      if (_isFunction(fu)) {
        _getById(o).ondrag = function () {
          fu();
        };
      }
    } else {
      if (run_console) {
        _writeLog("_onDrag -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onDrag ->" + e);
    }
  }
}
function _onDrop(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onDrop -> " + _error_message.id);
      }
      return false;
    }
    if (_getById(o)) {
      if (_isFunction(fu)) {
        _getById(o).ondrop = function () {
          fu();
        };
      }
    } else {
      if (run_console) {
        _writeLog("_onDrop -> " + _error_message.obj);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onDrop ->" + e);
    }
  }
}
function _allowDrop(e) {
  try {
    if (e) {
      e.preventDefault();
    } else {
      if (run_console) {
        _writeLog("_allowDrop -> Should be an event !");
      }
    }
  } catch (e) {
    if (run_console) _writeLog("_allowDrop -> " + e);
  }
}
function _onResize(fu) {
  try {
    if (fu === undefined) {
      if (run_console) {
        _writeLog("_onResize -> " + _error_message.fu);
      }
      return;
    }
    if (_isFunction(fu)) {
      document.body.onresize = function () {
        if (run_console) {
          _writeLog(
            "_onResize -> " + window.outerWidth + "," + window.outerHeight
          );
        }
        fu(window.outerWidth, window.outerHeight);
      };
    } else {
      if (run_console) {
        _writeLog("_onResize -> " + _error_message.fu);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onResize -> " + e);
    }
  }
}
function _newIframe(src, w, h, id) {
  if (src === undefined) {
    if (run_console) {
      _writeLog("_newIframe -> Source " + _un_);
    }
    return;
  }
  if (_isUrl(src) === false) {
    if (run_console) {
      _writeLog("_newIframe -> " + _error_message.url_n);
    }
    return;
  }
  if (w === undefined) {
    if (run_console) {
      _writeLog("_newIframe-> Width " + _un_ + " set to 400");
    }
    w = 400;
  }
  if (h === undefined) {
    if (run_console) {
      _writeLog("_newIframe-> Height " + _un_ + " set to 400");
    }
    h = 400;
  }
  if (id === undefined) {
    if (run_console) {
      _writeLog(
        "_newIframe-> " +
          _error_message.id +
          ", render iframe to document write"
      );
    }
    _docWrite(
      '<div id="iframe1"><iframe src="' +
        src +
        '" height="' +
        w +
        '" width="' +
        h +
        '"></iframe></div>'
    );
    return "iframe1";
  } else if (_getById(id)) {
    _printTo(
      id,
      '<div id="iframe1"><iframe src="' +
        src +
        '" height="' +
        w +
        '" width="' +
        h +
        '"></iframe></div>'
    );
    return "iframe1";
  } else {
    if (run_console) {
      _writeLog("_newIframe-> " + _error_message.obj);
    }
  }
}
function _newTab(u) {
  if (u) {
    if (_isUrl(u)) {
      var wnd = window.open(u);
      return wnd;
    } else {
      if (run_console) {
        _writeLog("_newTab -> " + _error_message.url);
      }
    }
  } else {
    if (run_console) {
      _writeLog("_newTab -> Url " + _un_);
    }
  }
}
function _onFocus(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onFocus -> " + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      var obj = _getById(o);
      obj.onfocus = function () {
        if (obj.innerHTML) {
          fu(obj.innerHTML, obj);
        } else if (obj.value) {
          fu(obj.value, obj);
        }
      };
    } else {
      if (run_console) {
        _writeLog("_onFocus -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onFocus -> " + e);
    }
  }
}
function _onMouseDown(o, fu) {
  if (o === undefined) {
    if (run_console) {
      _writeLog("_onMouseDown -> " + _error_message.id);
    }
    return;
  }
  if (_getById(o)) {
    var obj = _getById(o);
    obj.onmousedown = function () {
      if (obj.innerHTML) {
        fu(obj.innerHTML, obj);
      } else if (obj.value) {
        fu(obj.value, obj);
      }
    };
  } else {
    if (run_console) {
      _writeLog("_onMouseDown -> " + _error_message.obj);
    }
  }
}
function _onMouseOver(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onMouseOver -> " + _error_message.id);
      }
      return;
    }
    if (_getById(o)) {
      var obj = _getById(o);
      obj.onmouseover = function () {
        if (obj.innerHTML) {
          fu(obj.innerHTML, obj);
        } else if (obj.value) {
          fu(obj.value, obj);
        }
      };
    } else {
      if (run_console) {
        _writeLog("_onMouseOver -> " + _error_message.obj);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onMouseOver -> " + e);
    }
  }
}
function _onMouseOut(o, fu) {
  if (o === undefined) {
    if (run_console) {
      _writeLog("_onMouseOut -> " + _error_message.id);
    }
    return;
  }
  if (_getById(o)) {
    var obj = _getById(o);
    obj.onmouseout = function () {
      if (obj.innerHTML) {
        fu(obj.innerHTML, obj);
      } else if (obj.value) {
        fu(obj.value, obj);
      }
    };
  } else {
    if (run_console) {
      _writeLog("_onMouseOut -> " + _error_message.obj);
    }
  }
}
function _cleanArray(arr, v, w, x) {
  if (arr === undefined) {
    return false;
  }
  if (v === undefined) {
    v = null;
  }
  if (run_console) {
    _writeLog("_cleanArray -> Array : " + arr);
    _writeLog(
      "_cleanArray -> Filter : " + v + "," + (w ? w : "") + "," + (x ? x : "")
    );
    _writeLog("_cleanArray -> Parameter filter maximum is 3", 1);
  }
  if (_isArray(arr)) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == v) {
        arr.splice(i, 1);
        i--;
      }
      if (w) {
        if (arr[i] == w) {
          arr.splice(i, 1);
        }
      }
      if (x) {
        if (arr[i] == x) {
          arr.splice(i, 1);
        }
      }
    }
    return arr;
  } else {
    return false;
  }
}
function _setTitle(c) {
  if (c === undefined) {
    if (run_console) {
      _writeLog("_setTitle -> Title " + _un_);
    }
    return;
  }
  if (c) {
    document.title = c;
  }
}
function _onKeyPress(o, fu) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_onKeyPress ->" + _error_message.obj);
      }
      return;
    }
    if (_isFunction(fu)) {
      _getById(o).onkeypress = function () {
        fu();
      };
    } else {
      if (run_console) {
        _writeLog("_onKeyPress -> " + _error_message.fu);
      }
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_onKeyPress -> " + e);
    }
  }
}
function _saveStorage(k, v) {
  try {
    if (k === undefined) {
      if (run_console) {
        _writeLog("_saveStorage -> " + _error_message.key_s);
      }
      return false;
    }
    if (typeof Storage !== "undefined") {
      const m = {
        a: "_saveStorage -> Success ! Your value has been save { ",
        b: " } to storage ",
        k: v,
      };
      if (k.id) {
        v = v === undefined ? "_gQuery" : v;
        if (k.id) {
          localStorage.setItem("id" + m.k, k.id);
          if (run_console) {
            _writeLog(m.a + "id" + m.k + " -> " + k.id + m.b, false);
          }
        }
        if (k.status) {
          localStorage.setItem("status" + m.k, k.status);
          if (run_console) {
            _writeLog(m.a + "status" + m.k + " -> " + k.status + m.b, false);
          }
        }
        if (k.token) {
          localStorage.setItem("token" + m.k, k.token);
          if (run_console) {
            _writeLog(m.a + "token" + m.k + " -> " + k.token + m.b, false);
          }
        }
        if (k.ip) {
          localStorage.setItem("ip" + m.k, k.ip);
          if (run_console) {
            _writeLog(m.a + "ip" + m.k + " -> " + k.ip + m.b, false);
          }
        }
        if (k.key) {
          localStorage.setItem("key" + m.k, k.key);
          if (run_console) {
            _writeLog(m.a + "key" + m.k + " -> " + k.key + m.b, false);
          }
        }
      } else {
        if (v === undefined) {
          localStorage.setItem(k, k);
          if (run_console) {
            _writeLog(m.a + k + " -> " + k + " } to storage ", false);
          }
          return true;
        } else {
          localStorage.setItem(k, v);
          if (run_console) {
            _writeLog(m.a + k + " -> " + v + " } to storage ", false);
          }
          return true;
        }
      }
    } else {
      if (run_console) {
        _writeLog("_saveStorage -> " + _error_message.str_n);
      }
      return false;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_saveStorage -> " + e);
    }
  }
}
function _getStorage(k) {
  try {
    if (k === undefined) {
      if (run_console) {
        _writeLog("_getStorage -> " + _error_message.key_s);
      }
      return false;
    }
    return localStorage.getItem(k);
  } catch (e) {
    if (run_console) {
      _writeLog("_getStorage -> " + e);
    }
  }
}
function _removeAttribute(o, a) {
  try {
    if (o === undefined) {
      if (run_console) {
        _writeLog("_removeAttribute -> " + _error_message.obj);
      }
      return;
    }
    if (a === undefined) {
      if (run_console) {
        _writeLog("_removeAttribute -> " + _error_message.attr);
      }
      return;
    }
    _getById(o).removeAttribute(a);
  } catch (e) {
    if (run_console) {
      _writeLog("_removeAttribute ->" + e);
    }
  }
}
function _import(u, fu, id) {
  try {
    if (u === undefined) {
      if (run_console) {
        _writeLog("_import -> path file " + _un_);
      }
      return false;
    }
    var scr = document.createElement("script");
    scr.type = "text/javascript";
    if (scr.readyState) {
      scr.onreadystatechange = function () {
        if (scr.readyState == "loaded" || scr.readyState == "complete") {
          scr.onreadystatechange = null;
          if (_isFunction(fu)) {
            fu();
          }
        }
      };
    } else {
      scr.onload = function () {
        if (_isFunction(fu)) {
          fu();
        }
      };
    }
    scr.src = u;
    if (id === undefined) {
      document.getElementsByTagName("head")[0].appendChild(scr);
    } else {
      _getById(id).innerHTML = scr;
    }
  } catch (e) {
    if (run_console) {
      _writeLog("_import -> " + e);
    }
  }
}
function _GET(n) {
  if (n === undefined) {
    return false;
  }
  try {
    u = window.location.href;
    n = n.replace(/[\[\]]/g, "\\$&");
    var rg = new RegExp("[?&]" + n + "(=([^&#]*)|&|#|$)"),
      r = rg.exec(u);
    if (!r) return false;
    if (!r[2]) return false;
    var _xo = decodeURIComponent(r[2].replace(/\+/g, " "));
    if (run_console) {
      _writeLog("_GET -> " + _xo);
    }
    return _xo;
  } catch (e) {
    if (run_console) {
      _writeLog("_GET -> " + e);
    }
  }
}
function _moneyFormat(v) {
  return v.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}
function _convertHtmlToAscii(s, fu) {
  if (fu == undefined) {
    return s
      ? s
          .replace(/&/g, "&amp;")
          .replace(/>/g, "&gt;")
          .replace(/</g, "&lt;")
          .replace(/"/g, "&quot;")
      : null;
  } else {
    if (_isFunction(fu)) {
      fu(
        s
          .replace(/&/g, "&amp;")
          .replace(/>/g, "&gt;")
          .replace(/</g, "&lt;")
          .replace(/"/g, "&quot;")
      );
    }
  }
}
function _required(o, f) {
  if (o === undefined) {
    return null;
  }
  if (_isArray(o) && _isArray(f)) {
    if (o.length != f.length) {
      return null;
    }
    for (var i = 0; i < o.length; i++) {
      if (o[i] === "") {
        _focus(f[i]);
        return;
        break;
      }
    }
    return true;
  } else {
    return null;
  }
}
function _charToDec(s) {
  if (s === undefined) {
    return null;
  }
  if (s.length > 0) {
    var d = [];
    for (var i = 0; i < s.length; i++) {
      d[i] = s[i].charCodeAt(0);
    }
    return d;
  } else {
    return s.charCodeAt(0);
  }
}
function _decToChar(s) {
  if (s === undefined) {
    return null;
  }
  if (_isArray(s)) {
    var d = [];
    for (var i = 0; i < s.length; i++) {
      d[i] = String.fromCharCode(s[i]);
    }
    return d;
  } else {
    return String.fromCharCode(s);
  }
}
function _putUrl(obj, t, u) {
  try {
    obj = obj == undefined ? (obj = "") : obj;
    t = t == undefined ? (t = _getTitle()) : t;
    u = u == undefined ? (u = "") : u;
    if (run_console) {
      _writeLog("_putUrl-> New URL " + u);
    }
    window.history.pushState(obj, t, u);
  } catch (e) {
    if (run_console) {
      _writeLog("_putUrl-> " + e);
    }
  }
}
function _isUndefined(o) {
  return o === undefined ? true : false;
}
function _vardump(o) {
  return _isUndefined(o) ? undefined : typeof o;
}
function _loadDoc(u, fu, h, hV) {
  try {
    var __ldc = "_loadDoc";
    if (u === undefined) {
      if (run_console) {
        _writeLog(__ldc + " -> " + _error_message.url);
      }
      return;
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog(__ldc + " -> " + _error_message.clbck_id);
      }
      return;
    }
    var x = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHttp");
    x.onreadystatechange = function () {
      if (this.readyState == 0) {
        if (run_console) {
          _writeLog(__ldc + " -> " + _error_message.ajax_obj);
        }
        return false;
      }
      if (this.readyState == 1) {
        if (run_console) {
          _writeLog(__ldc + " -> " + _error_message.ajax_start);
        }
      }
      if (this.readyState == 2) {
        if (run_console) {
          _writeLog(__ldc + " -> " + _error_message.ajax_finish);
        }
      }
      if (this.status == 202) {
        if (run_console) {
          _writeLog(__ldc + " -> " + _error_message.ajax_process);
        }
      }
      if (this.status == 203) {
        if (run_console) {
          _writeLog(__ldc + " -> " + _error_message.ajax_header);
        }
        return false;
      }
      if (this.status == 400 || this.status == 404) {
        if (_isFunction(fu)) {
          fu(this.status);
        }
        return false;
      } else if (this.readyState == 4 && this.status == 200) {
        if (_isFunction(fu)) {
          fu(this.responseText, this.status, this.readyState);
          if (run_console) {
            _writeLog("_loadDoc -> Run Function Call Back " + fu, false);
          }
        } else {
          _printTo(fu, this.responseText);
          if (run_console) {
            _writeLog("_loadDoc -> Success load document", false);
          }
        }
      }
    };
    x.open("GET", u, true);
    h = h === undefined ? _ajaxSetup.header : h;
    hV = hV === undefined ? _ajaxSetup.app : hV;
    x.setRequestHeader(h, hV);
    x.send();
  } catch (e) {
    if (run_console) {
      _writeLog(__ldc + " -> " + e);
    }
  }
}
function _requestPOST(u, p, fu, h, hV) {
  try {
    var __rps = "_requestPOST";
    if (u === undefined) {
      if (run_console) {
        _writeLog(__rps + " -> " + _error_message.url);
      }
      return;
    }
    if (p === undefined) {
      if (run_console) {
        _writeLog(__rps + " -> Parameter POST " + __nf__);
      }
      return;
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog(__rps + " -> " + _error_message.clbck_id);
      }
      return;
    }
    var x = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHttp");
    x.onreadystatechange = function () {
      if (this.readyState == 0) {
        if (run_console) {
          _writeLog(__rps + " -> " + _error_message.ajax_obj);
        }
        return false;
      }
      if (this.readyState == 1) {
        if (run_console) {
          _writeLog(__rps + " -> " + _error_message.ajax_start);
        }
      }
      if (this.readyState == 2) {
        if (run_console) {
          _writeLog(__rps + " -> " + _error_message.ajax_finish);
        }
      }
      if (this.status == 202) {
        if (run_console) {
          _writeLog(__rps + " -> " + _error_message.ajax_process);
        }
      }
      if (this.status == 203) {
        if (run_console) {
          _writeLog(__rps + " -> " + _error_message.ajax_header);
        }
        return false;
      }
      if (this.status == 400 || this.status == 404) {
        if (_isFunction(fu)) {
          fu(this.status);
        }
        return false;
      } else if (this.readyState == 4 && this.status == 200) {
        if (_isFunction(fu)) {
          fu(this.responseText, this.status, this.readyState);
          if (run_console) {
            _writeLog(__rps + " -> Run Function Call Back " + fu, false);
          }
        } else {
          _printTo(fu, this.responseText);
          if (run_console) {
            _writeLog(__rps + " -> Print Success", false);
          }
        }
      }
    };
    x.open("POST", u, true);
    h = h === undefined ? _ajaxSetup.header : h;
    hV = hV === undefined ? _ajaxSetup.app : hV;
    x.setRequestHeader(h, hV);
    x.send("" + p + "");
  } catch (e) {
    if (run_console) {
      _writeLog(__rps + " -> " + e);
    }
  }
}
function _checkInternet(st) {
  var u = _isUndefined(st.url)
    ? "https://jsonplaceholder.typicode.com/posts/1"
    : st.url;
  var x = XMLHttpRequest
    ? new XMLHttpRequest()
    : new ActiveXObject("Microsoft.XMLHttp");
  run_console ? _writeLog("_checkInternet -> " + u) : null;
  x.onload = function () {
    st["connect"] ? st.connect() : _writeLog("Internet connected !", false);
  };
  x.onerror = function () {
    st["disconnected"]
      ? st.disconnected()
      : _writeLog("Internet disconnected !");
  };
  x.open("GET", u, true);
  x.send();
}
function _requestDELETE(u, fu, h, hV) {
  try {
    const ___rp = "_requestDELETE";
    if (u === undefined) {
      if (run_console) {
        _writeLog(___rp + " -> " + _error_message.url);
      }
      return;
    }
    if (fu === undefined) {
      if (run_console) {
        _writeLog(___rp + " -> " + _error_message.clbck_id);
      }
      return;
    }
    var x = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
    x.onreadystatechange = function () {
      if (this.readyState == 0) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_obj);
        }
        return false;
      }
      if (this.readyState == 1) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_start);
        }
      }
      if (this.readyState == 2) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_finish);
        }
      }
      if (this.status == 202) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_process);
        }
      }
      if (this.status == 203) {
        if (run_console) {
          _writeLog(___rp + " -> " + _error_message.ajax_header);
        }
        return false;
      }
      if (this.status == 400 || this.status == 404) {
        if (_isFunction(fu)) {
          fu(this.status);
        }
        return false;
      } else if (this.readyState == 4 && this.status == 200) {
        if (_isFunction(fu)) {
          fu(this.responseText, this.status, this.readyState);
          if (run_console) {
            _writeLog(___rp + " -> Run Function Call Back " + fu, false);
          }
        } else {
          _printTo(fu, this.responseText);
          if (run_console) {
            _writeLog(___rp + " -> Success load document", false);
          }
        }
      }
    };
    x.open("DELETE", u, true);
    h = h === undefined ? _ajaxSetup.header : h;
    hV = hV === undefined ? _ajaxSetup.app : hV;
    x.setRequestHeader(h, hV);
    x.send();
  } catch (e) {
    if (run_console) {
      _writeLog(___rp + " -> " + e);
    }
  }
}
