var broadcast_info 	= null;
var html_loading= "";
var html_table 	= "";

var set_config = "Change Longlight configuration ";
var str_set_ok = "success.";
var set_failed = "failed.";
var state_arr = new Array("Disable", "Enable");
var isAdmin = false;

function chgLanguage()
{
	try {
		chg_language(top.g_lang.h_llit_conf);
		set_config 	= top.g_lang.h_llit_conf.js_string.set_config;
		str_set_ok 	= top.g_lang.h_llit_conf.js_string.set_ok;
		set_failed 	= top.g_lang.h_llit_conf.js_string.set_failed;
		state_arr 	= top.g_lang.h_llit_conf.js_string.state_arr;
	} catch(E){}
}

window.onload = function() {
	top.g_cur_main_url = window.location.href;
	chgLanguage();
	
	$("page_body").style.visibility = "visible";
	html_loading = $("div_loading").innerHTML;
	html_table = $("div_table").innerHTML;
	
	isAdmin = (LoginUser("user") == "admin") ? true : false;
	if (!isAdmin)
	{
		$("div_table").innerHTML = "";
	}
	else
	{
		$("div_table").style.visibility = "visible";
	}
	
	GetLonglightInfo();
}

function GetLonglightInfo() {
	disableButton(true);
	$("div_loading").innerHTML = html_loading;
	var parm = "";
	parm += "?rand=" 	+ Math.random();	
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/get_longlight_config" + parm, "", GetLonglightInfoResult);
}

function GetLonglightInfoResult(s) {
	disableButton(false);
	$("div_loading").innerHTML = "";
	multicast_info = evalJSON(s);
	
	try
	{
		$("longlight_stat").innerHTML = state_arr[multicast_info.longlight_en];
		if (isAdmin)
		{
			$("longlight_en").selectedIndex = multicast_info.longlight_en;
		}
	}
	catch(e)
	{
	}
}

function disableButton(dis)
{
	try
	{
		$("bt_refresh").disabled = dis;
		if (isAdmin)
		{
			$("longlight_en").disabled = dis;
			$("bt_apply").disabled = dis;
		}
	}
	catch(E)
	{
	}
}

function SetLonglightConfig()
{
  
	var parm = "";
	
	parm += "?rand="   + Math.random();
	parm += "&longlight_en=" + $("longlight_en").selectedIndex;
	
	disableButton(true);
	$("div_apply_loading").innerHTML = html_loading;
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/set_longlight_config" + parm, "", SetLonglightConfigResult);	
	
}

function SetLonglightConfigResult(s)
{
	disableButton(false);
	$("div_apply_loading").innerHTML = "";
	
	var ret = evalJSON(s);
	if (ret == 1) {
		alert(set_config + str_set_ok);
	} else {
		alert(set_config + set_failed);
	}
	GetLonglightInfo();
}