var hintColor="#CC3366";   
var hintfont="15px";


var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
              "A", "B", "C", "D", "E", "F");
var unsafeString = "\"<>%\\^[]`\+\$\,'#&";
// deleted these chars from the include list ";", "/", "?", ":", "@", "=", "&" and #
// so that we could analyze actual URLs

function isUnsafe(compareChar)
// this function checks to see if a char is URL unsafe.
// Returns bool result. True = unsafe, False = safe
{
   if ( unsafeString.indexOf(compareChar) == -1 && compareChar.charCodeAt(0) > 32
        && compareChar.charCodeAt(0) < 123 )
      return false; // found no unsafe chars, return false
   else
      return true;
}

function decToHex(num, radix)
// part of the hex-ifying functionality
{
   var hexString = "";
   while ( num >= radix ) {
      temp = num % radix;
      num = Math.floor(num / radix);
      hexString += hexVals[temp];
   }
   hexString += hexVals[num];
   return reversal(hexString);
}

function reversal(s)
// part of the hex-ifying functionality
{
   var len = s.length;
   var trans = "";
   for (i = 0; i < len; i++)
      trans = trans + s.substring(len-i-1, len-i);
   s = trans;
   return s;
}

function convert(val)
// this converts a given char to url hex form
{
   return  "%" + decToHex(val.charCodeAt(0), 16);
}


function encodeUrl(val)
{
   var len     = val.length;
   var i       = 0;
   var newStr  = "";
   var original = val;

   for ( i = 0; i < len; i++ ) {
      if ( val.substring(i,i+1).charCodeAt(0) < 255 ) {
         // hack to eliminate the rest of unicode from this
         if (isUnsafe(val.substring(i,i+1)) == false)
            newStr = newStr + val.substring(i,i+1);
         else
            newStr = newStr + convert(val.substring(i,i+1));
      } else {
         // woopsie! restore.
         alert ("Found a non-ISO-8859-1 character at position: " + (i+1) + ",\nPlease eliminate before continuing.");
         newStr = original;
         // short-circuit the loop and exit
         i = len;
      }
   }

   return newStr;
}

function valDoValidateInteger(Integer,Result)
{   
    if(Integer.match("^[0-9]+\$")) { return null;}
    return("An integer can only have digits");
}

function valDoValidateIp(Address)
{
    var address = Address.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
    var digits;
    var i;
    var error=null;

    if(address == null) { error="Invalid IP address"; }
    else
    {
        digits = address[0].split(".");
        for(i=0; i < 4; i++)
        {
            if((Number(digits[i]) > 255 ) || (Number(digits[i]) < 0 ) || (Number(digits[0]) > 223))
            { error="Invalid IP address"; break; }
        }

    }
    return error;
}

function valDoValidateHostName(HostName)
{
    if (HostName.match("^[a-zA-Z]+") == null) return ("Host Name must start with a character");
    else if (HostName.match("^([a-zA-Z]+[a-zA-Z0-9_-]*)(\.*[a-zA-Z0-9])+$") == null) return ("Host Name does not have correct format"
            );
    else if ((HostName.length == 0) || (HostName.length > 63)) { return("A host name must contain 1..63 characters"); }
    return null;
}

function jslDoToggleCheckBox(id)
{
    var checkbox,i;
    var num = jslDoToggleCheckBox.arguments.length;

    if(num==0) return;
    if(num==1)
    {
        // Toggle only one checkbox
        checkbox = document.getElementById(id);
        if(checkbox == null) return;

        if(checkbox.value==1)
        {
            checkbox.value=0;
        }
        else
        {
            checkbox.value=1;
        }
    }
    else
    {
        checkbox = document.getElementById(id);
        if(checkbox == null) return;

        // Set the first one to "checked" and the rest to "unchecked"
        checkbox.value=1;

        for(i=1;i < num; i++)
        {
            checkbox = document.getElementById(jslDoToggleCheckBox.arguments[i]);
            if(checkbox == null) return;
            checkbox.value=0;
        }
    }
    return false;
}

var util = {

  shouldDebug: false,

  // Note: Will fail in pathological cases (where the members contain
  // strings similar to describe() result).
  membersEqual: function(array1, array2) {
    return util.describe(array1)==util.describe(array2);
  },

  describe: function(obj) {
    if (obj==null) { return null; }
    switch(typeof(obj)) {
      case 'object': {
        var message = "";
        for (key in obj) {
          message += ", [" + key + "]: [" + obj[key] + "]";
        }
        if (message.length > 0) {
          message = message.substring(2); // chomp initial ', '
        }
        return message;
      }
      default: return "" + obj;
    }
  },

  debug: function(message) {
      if (this.shouldDebug) {
        alert("AjaxJS Message:\n\n" + message);
      }
  },

  error: function(message) {
      if (this.shouldDebug) {
        alert("AjaxJS ERROR:\n\n" + message);
      }
  },

  // trim() From Shawn Milo
  // https://lists.latech.edu/pipermail/javascript/2004-May/007567.html
  trim: function(str) {
    return str.replace(/^(\s+)?(.*\S)(\s+)?$/, '$2');
  },

  strip: function(str) {
    return str.replace(/\s+/, "");
  }
}

function $() {

    var elements = new Array();

    for (var i = 0; i < arguments.length; i++) 
    {
      var element = arguments[i];

      if (typeof element == 'string') {
        if (document.getElementById) {
          element = document.getElementById(element);
        } else if (document.all) {
          element = document.all[element];
        }
      }

      elements.push(element);
    }

    if (arguments.length == 1 && elements.length > 0) {
      return elements[0];
    } else {
      return elements;
    }
}

function $C(elType) {
  return document.createElement(elType);
}

// From prototype library. Try.these(f1, f2, f3);
var Try = {
  these: function() {
    var returnValue;
    for (var i = 0; i<arguments.length; i++) {
      var lambda = arguments[i];
      try {
        returnValue = lambda();
        break;
      } catch (e) {}
    }
    return returnValue;
  }
}

function getElementsByClassName(classname) {
    var a = [];
    var re = new RegExp('\\b' + classname + '\\b');
    var els = document.getElementsByTagName("*");
    for(var i=0,j=els.length; i<j; i++)
        if(re.test(els[i].className))a.push(els[i]);
    return a;
}

function extractIFrameBody(iFrameEl) {

  var doc = null;
  if (iFrameEl.contentDocument) { // For NS6
    doc = iFrameEl.contentDocument; 
  } else if (iFrameEl.contentWindow) { // For IE5.5 and IE6
    doc = iFrameEl.contentWindow.document;
  } else if (iFrameEl.document) { // For IE5
    doc = iFrameEl.document;
  } else {
    alert("Error: could not find sumiFrame document");
    return null;
  }
  return doc.body;

}

/* function getElementsByClassName(needle) {
  var xpathResult = document.evaluate('//*[@class = needle]', document, null, 0, null);
  var outArray = new Array();
  while ((outArray[outArray.length] = xpathResult.iterateNext())) {
  }
  return outArray;
}
*/

function log(message) {
  $("log").innerHTML += message + "<br/>";
}

function createXMLHttpRequest() {
  try { return new ActiveXObject("Msxml2.XMLHTTP");    } catch(e) {}
  try { return new ActiveXObject("Microsoft.XMLHTTP"); } catch(e) {}
  try { return new XMLHttpRequest();                   } catch(e) {}
  alert("XMLHttpRequest not supported");
  return null;
}

function addEvent(obj, evt, fn) {
    try { obj.addEventListener(evt, fn, false); return true;} catch(E) {}
    try { obj.attachEvent("on"+evt, fn); return true;       } catch(E) {}
    return false;
}

function getEventElement(e) {
    if (e.srcElement) {
        return e.srcElement;
    } else if (e.originalTarget) {
        return e.originalTarget;
    }
    return null;
}

function dispalyObj(obj, show)
{
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
    (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
    (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
    (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
     
    try {
        obj.style.display = show ? "block" : "none";
    } catch(E){}

    if (show)
    {
        obj.style.visibility = "visible";
    }
}

var menu_list = [];
function addMenuEvent(name_src, name_dst) {
    try {
        var obj_src = $(name_src);
        var obj_dst = $(name_dst);
        obj_dst.setAttribute("show", "false");
        obj_src.setAttribute("obj_name", name_dst);
        dispalyObj(obj_dst, false);
        addEvent(obj_src, "click", showHideMeun);
        menu_list.push(obj_src);
    } catch (e) {alert(e);} 
}
            
function showHideMeun(e) {
    var obj_src = getEventElement(e);
    try {
        var obj_dst = $(obj_src.getAttribute("obj_name"));
        var str_show = "collapse";      
        if (obj_dst.getAttribute("show") == "false") {
            obj_dst.setAttribute("show", "true");
            dispalyObj(obj_dst, true);
        } else {
            dispalyObj(obj_dst, false);
            obj_dst.setAttribute("show", "false");
        }
    } catch(e) {alert(e);}
}

function XMLHttp() {
    var _xmlhttp = null;
    var _sendMethod = "GET";
    var _handler = null;
    
    this.create = create;
    this.sendRequest = sendRequest;
    this.setSendMethod = setSendMethod;
    this.getResponseHeader  =  function(headerName){
        return _xmlhttp.getResponseHeader(headerName);
    }
    create();
    
    function create() {
        try {
            _xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                _xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(oc) {
                _xmlhttp = null;
            }
        }
        
        if ((_xmlhttp == null) && ((typeof XMLHttpRequest) != "undefined" )) {
            _xmlhttp = new XMLHttpRequest();
        }
    }

    function setSendMethod(method) {
        _sendMethod = method;
    }
    
    function sendRequest(url, body, fn) {
        if (_xmlhttp == null) return null;
        try
        {
            _handler = fn;
            _xmlhttp.open(_sendMethod, url, true);
            _xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
            _xmlhttp.onreadystatechange = requestComplete;
            _xmlhttp.send(body);
        }catch(e){};
    }
    
    function requestComplete(responseText) {
        if (_xmlhttp.readyState == 4) {         
            _handler(_xmlhttp.responseText);
        }
    }
}

function evalJSON(json) {
    var obj = null;
    try {
        json = json.replace(/\,\s*\]/g, "]");
        json = json.replace(/\,\s*\}/g, "}");
        obj = eval("(" + json + ")");
    } catch(E) 
    {
    }
    
    return obj ;
}

/*
    用途：检查输入字符串是否为空或者全部都是空�
    输入：str
    返回�
    如果全是空返回true,否则返回false
*/

function isNull(str) {
    if (str == "") return true;
    var regu = "^[ ]+$";
    var re = new RegExp(regu);
    return re.test(str);
}

/*
 * 描述：跨浏览器的设置 innerHTML 方法
 *       允许插入�?HTML 代码中包�?script �?style
 * 作者：kenxu <kenxu at ajaxwing dot com>
 * 日期�?006-09-01
 * 参数�
 *    el: 合法�?DOM 树中的节�
 *    htmlCode: 合法�?HTML 代码
 * 经测试的浏览器：ie5+, firefox1.5+, opera8.5+
 */
var setInnerHTML = function(el, htmlCode) {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('msie') >= 0 && ua.indexOf('opera') < 0) {
        htmlCode = '<div style="display:none">for IE</div>' + htmlCode;
        htmlCode = htmlCode.replace(/<script([^>]*)>/gi,
                                    '<script$1 defer>');
        el.innerHTML = '';
        el.innerHTML = htmlCode;
        el.removeChild(el.firstChild);
    } else {
        var el_next = el.nextSibling;
        var el_parent = el.parentNode;
        el_parent.removeChild(el);
        el.innerHTML = htmlCode;
        if (el_next) {
            el_parent.insertBefore(el, el_next)
        } else {
            el_parent.appendChild(el);
        }
    }
}

function verifyIP(IPvalue) {
    var ipPattern = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/;
    var ipArray = IPvalue.match(ipPattern);
    
    if (IPvalue == "0.0.0.0")
    {
        return false;
    }
    else if (IPvalue == "255.255.255.255")
    {
        return true;
    }
        
    if (ipArray == null)
    {
        return false;
    }
    else if (ipArray.length != 5)
    {
        return false;
    }
    else 
    {
        for (var i=1; i<5; i++) 
        {
            if (ipArray[i] > 255) 
            {
                return false;
            }
        }
    }
    
    return true;
}

function checkChar(num) {
    var s = "0123456789ABCDEF";
    for (var i=0; i<s.length; i++) {
        if (s.charCodeAt(i) == num) {
            return true;
        }
    }  
    
    return false;
}

function verifyMac(mac) {
    if (mac.length != 17) {
        return false;
    }
    var mac_arr =  mac.toUpperCase().split(":");
    if (mac_arr.length != 6) {
        return false;
    }
    
    for (var i=0; i<mac_arr .length; i++) {
        if (!checkChar(mac_arr[i].charCodeAt(0)) 
         || !checkChar(mac_arr[i].charCodeAt(1))) {
            return false;
        }
    } 
    
    return true;    
} 

function compactArray(arr) {
    var new_arr = new Array();
    for (var i=0; i<arr.length; i++) {
        if (arr[i] != null) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
} 

function removeArray(arr, dx) {
    var new_arr = new Array();
    for (var i=0; i<arr.length; i++) {
        if (i != dx) {
            new_arr.push(arr[i]);
        }
    }
    return new_arr;
}

function replaceString(str, template, replaceText) {
    var s = "";
    var s_s = '<!-- ' + template + ' BEGIN-->';
    var s_e = '<!-- ' + template + ' END-->';
    
    var start   = str.indexOf(s_s);
    var end     = str.indexOf(s_e);
    
    if (start == -1 || end == -1) return str;
    
    end += s_e.length;
    
    s += str.substring(0, start);
    s += replaceText;
    s += str.substr(end);
    return s;   
}

function getTemplateString(str, template) {
    var s = '<!-- ' + template + ' BEGIN-->';
    var start   = str.indexOf(s);
    var end     = str.indexOf('<!-- ' + template + ' END-->');
    
    if (start == -1 || end == -1) return "";
    
    start += s.length;
    return str.substring(start, end);
}

// Retrieve the value of the cookie with the specified name.
function getCookie(sName)
{
    // cookies are separated by semicolons
    var aCookie = document.cookie.split("; ");
    for (var i=0; i < aCookie.length; i++)
    {
        // a name alue pair (a crumb) is separated by an equal sign
        var aCrumb = aCookie[i].split("=");
        if (sName == aCrumb[0])
        {
            return aCrumb[1];
        }
    }
    // a cookie with the requested name does not exist
    return null;
}

// Retrieve the value of the cookie with the specified name.
function LoginUser(sName)
{
    // cookies are separated by semicolons
    try
    {
        var login_user = getCookie(sName).split("|");
        return login_user[0];
    }
    catch(E){}
    return "";
}

function getAdminName(sName)
{
    try
    {
        var login_user = getCookie(sName).split("|");
        return login_user[1];
    }
    catch(E){}
    return "";
}

function getUserName(sName)
{
    try
    {
        var login_user = getCookie(sName).split("|");
        return login_user[2];
    }
    catch(E){}
    return "";
}

function getWebLanguage(sName)
{
    try
    {
        var login_user = getCookie(sName).split("|");
        return login_user[3];
    }
    catch(E){}
    return "";
}

function getEthPortNum(sName)
{
    try
    {
        var login_user = getCookie(sName).split("|");
        return login_user[4];
    }
    catch(E){}
    return "";
}

function getEthPotsNum(sName)
{
    try
    {
        var login_user = getCookie(sName).split("|");
        return login_user[5];
    }
    catch(E){}
    return "";
}

function getPotsNum(sName)
{
    try
    {
        var login_user = getCookie(sName).split("|");
        return login_user[5];
    }
    catch(E){}
    return "";
}

function chg_language(obj)
{
    for (var attr in obj)
    {
        try
        {
            switch (attr)
            {
                case "title":
                    document.title = obj[attr];
                    break;
                case "innerHTML":
                    var o_arr = obj[attr];
                    for (var k in o_arr)
                    {
                        try
                        {
                            $(k).innerHTML = o_arr[k];
                        }
                        catch(E)
                        {
                        }
                    }
                    break;
                case "value":
                    var o_arr = obj[attr];
                    for (var k in o_arr)
                    {
                        try
                        {
                            $(k).value = o_arr[k];
                        }
                        catch(E)
                        {
                        }
                    }
                    break;              
                case "option_title":
                    var o_arr = obj[attr];
                    for (var k in o_arr)
                    {
                        try
                        {
                            for (var i=0; i<o_arr[k].length; i++)
                            {
                                try
                                {
                                    $(k).options[i].title = o_arr[k][i];
                                }
                                catch(E)
                                {
                                }
                            }
                        }
                        catch(E)
                        {
                        }
                    }
                    break;
                case "option_text":
                    var o_arr = obj[attr];
                    for (var k in o_arr)
                    {
                        try
                        {
                            for (var i=0; i<o_arr[k].length; i++)
                            {
                                try
                                {
                                    $(k).options[i].text = o_arr[k][i];
                                }
                                catch(E)
                                {
                                }
                            }
                        }
                        catch(E)
                        {
                        }
                    }
                    break;
                default:
            }
        }
        catch(E)
        {
        }
    }
}

