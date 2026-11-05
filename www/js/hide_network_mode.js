var html_loading 		= "";
var str_set				= "Change ONU network mode ";
var str_set_ok 			= "success.";
var str_set_failed 		= "failed.";
var isAdmin				= false;

function chgLanguage()
{
	try {
        str_set = top.g_lang.h_hide_onu_network.js_string.str_set_config;
        str_set_ok = top.g_lang.h_hide_onu_network.js_string.set_ok;
        str_set_failed = top.g_lang.h_hide_onu_network.js_string.set_fail;
		chg_language(top.g_lang.h_hide_onu_network);
	} catch(E){}
}

window.onload = function()
{
    top.g_cur_main_url = window.location.href;
    chgLanguage();
    
    $("onu_mode").disabled = true;
    $("bt_apply").disabled = true;
    
	$("page_body").style.visibility = "visible";
	html_loading = $("div_loading").innerHTML;
	isAdmin = (LoginUser("user") == "admin") ? true : false;
	// if (!isAdmin)
	{
		$("div_table").style.visibility = "hidden";
	}
	// else
	// {
		// $("div_table").style.visibility = "visible";
	// }
	dispalyObj($("div_table2"), false);
	getOnuMode();
}

function getOnuMode() {
	var parm = "";
	parm += "?rand=" 	+ Math.random();
	
	var xmlhttp = new XMLHttp();
	$("div_loading").innerHTML = html_loading;
	disableButton(true);
	try
	{
		xmlhttp.sendRequest("cgi/get_onu_mode" + parm, "", getOnuModeResult);
	}
	catch(E)
	{
		$("div_loading").innerHTML = "";
		disableButton(false);
	}
}

var info;

function getOnuModeResult(s) {
	$("div_loading").innerHTML = "";
	disableButton(false);
	info = evalJSON(s);
	try {
		$("td_mode").innerHTML = "&nbsp;&nbsp;" + $("onu_mode").options[info.cur_onu_mode].text + "&nbsp;&nbsp;";
		
		if (isAdmin)
		{
			$("onu_mode").selectedIndex	= info.onu_mode;
		}
		checkMode(info.onu_mode);
	} catch(e) {alert(e);}
}

function setOnuMode() {
	var mode= $("onu_mode").selectedIndex;
	
	var parm = "";
	parm += "?rand=" 	+ Math.random();
	parm += "&onu_mode="+ mode;
	
	var xmlhttp = new XMLHttp();
	$("div_apply_loading").innerHTML = html_loading;
	disableButton(true);
	xmlhttp.sendRequest("cgi/set_onu_mode" + parm, "", setOnuModeResult);
}

var interval_reset 	= 0;
var times_reset 	= 45;
function setOnuModeResult(s) {
	$("div_apply_loading").innerHTML = "";
	disableButton(false);
	var ret = evalJSON(s);
	if (ret == 1)
	{
		alert(str_set + str_set_ok);
        dispalyObj($("div_table2"), true);
        interval_reset = setInterval("showMode();", 1000);
        disableButton(true);
	}
	else
	{
		alert(str_set + str_set_failed);
	}
}

function showMode()
{
	if (times_reset-- <= 0)
	{
		clearInterval(interval_reset);
		dispalyObj($("div_table2"), false);
		dispalyObj($("div_table"), true);
		times_reset = 45;
		disableButton(false);
		getOnuMode();
	}
	
	$("cur_time").innerHTML = times_reset;
}

function checkMode(val)
{
	if (val == info.onu_mode)
	{
		$("bt_apply").disabled = true;
	}
	else
	{
		$("bt_apply").disabled = false;
	}
}

function disableButton(dis)
{
	try
	{
		$("bt_refresh").disabled = dis;
		$("bt_apply").disabled = dis;
		$("onu_mode").disabled = dis;
	}
	catch(E)
	{
	}
}
