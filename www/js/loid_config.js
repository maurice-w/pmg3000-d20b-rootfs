var html_loading = "";
var set_config   = "Change loid configuration ";
var str_set_ok   = "success.";
var set_failed   = "failed.";
var isAdmin      = false;
var str_enter_error = " illegal character";

function chgLanguage()
{
	try
	{
		chg_language(top.g_lang.h_loid_conf);
        set_config 	= top.g_lang.h_loid_conf.js_string.set_config;
        str_set_ok 	= top.g_lang.h_loid_conf.js_string.str_set_ok;
        set_failed 	= top.g_lang.h_loid_conf.js_string.set_failed;
        str_enter_error = top.g_lang.h_loid_conf.js_string.str_enter_error;
	} catch(E){}
}

window.onload = function() {
	top.g_cur_main_url = window.location.href;
	chgLanguage();
    
	$("page_body").style.visibility = "visible";
    $("div_table").style.visibility = "visible";
	html_loading = $("div_loading").innerHTML;
	isAdmin = (LoginUser("user") == "admin") ? true : false;
	if (!isAdmin)
	{
		disableButton(true);
	}
	getLoidConfig();
}

function getLoidConfig() {
	var parm = "";
	parm += "?rand=" 	+ Math.random();
	
	var xmlhttp = new XMLHttp();
	$("div_loading").innerHTML = html_loading;
	xmlhttp.sendRequest("cgi/get_loid" + parm, "", getLoidConfigResult);
}

function getLoidConfigResult(s) {
    $("div_loading").innerHTML = "";
    var info = evalJSON(s);

    $("loid").value = info.loid;
    $("pass").value = info.pass;
}

function disableButton(dis)
{
    $("bt_apply").disabled = dis;   
}

function SetLoidConfig()
{
	var parm = "";
    var loid_value = "";
    var pass_value = "";

	parm += "?rand=" + Math.random();
    loid_value = $("loid").value;
    pass_value = $("pass").value;
    
    if ("" != loid_value)
    {
       if (0 == checkValue(loid_value))
       {
           alert("Loid" + str_enter_error);
           return;
       }
    }
    
    if ("" != pass_value)
    {
       if (0 == checkValue(pass_value))
       {
           alert("password" + str_enter_error);
           return;
       }
    }
    
    parm += "&loid=" + encodeURIComponent(loid_value);
    parm += "&pass=" + encodeURIComponent(pass_value);
	
	disableButton(true);
	$("div_apply_loading").innerHTML = html_loading;
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/set_loid" + parm, "", SetLoidConfigResult);
}

function SetLoidConfigResult(s)
{
	disableButton(false);
	$("div_apply_loading").innerHTML = "";
	
	var ret = evalJSON(s);
	if (ret == 1) {
		alert(set_config + str_set_ok);
	} else {
		alert(set_config + set_failed);
	}
	getLoidConfig();
}

function checkValue(val)
{
    var i = 0;
    
    for (i = 0; i < val.length; i++)
    {
       if (val.substring(i, i+1).charCodeAt(0) > 255)
       {
            return 0;
       }
    }
    
    if ((null == val.match(/^[\w\$#\&\*\+=<>%\^-].*/))
     || (null == val.match(/.*[\w\$#\&\*\+=<>%\^-]$/)))
    {
        return 0;
    }
    
    return 1;
}


