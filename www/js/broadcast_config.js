var port_info 	    = null;
var html_loading    = "";
var html_table 	    = "";
var html_tr_list    = "";
var str_tr          = "";
var eth_enable_arr  = null;
var eth_mode_arr    = null;

window.onload       = init;
var str_set         = "Change storm restrain configuration ";
var str_set_ok      = "success.";
var str_set_failed  = "failed.";
var str_rate_err    = "Rate value is error.";
var isAdmin         = false;
var max_rate        = 50000;

function chgLanguage()
{
	try 
	{
		chg_language(top.g_lang.h_broadcast);
		str_set 		= top.g_lang.h_broadcast.js_string.str_set;
		str_set_ok 		= top.g_lang.h_broadcast.js_string.set_ok;
		str_set_failed 	= top.g_lang.h_broadcast.js_string.set_fail;
		str_rate_err    = top.g_lang.h_broadcast.js_string.str_rate_err;
	} catch(E){}
	
    eth_enable_arr = $("enable").cloneNode(true);
    eth_mode_arr   = $("mode").cloneNode(true);
}

function init() {
	top.g_cur_main_url = window.location.href;
	
	for (var num = 0; num < getEthPortNum("user"); num++)
	{
		$("port_id").options[num] = new Option(num+1, num+1);
	}
	
	chgLanguage(); 
    
	$("page_body").style.visibility = "visible";
	html_loading = $("div_loading").innerHTML;
	html_table   = $("div_table").innerHTML;
	html_tr_list = getTemplateString(html_table, "TR_PORT_LIST");
	$("div_edit_table").style.visibility = "visible";

	isAdmin = (LoginUser("user") == "admin") ? true : false;
	if (!isAdmin)
	{
		$("bt_apply").disabled = true;
	}
	
	GetBroadcastInfo();
}

function GetBroadcastInfo() {
	$("bt_refresh").disabled = true;
    
    if (isAdmin)
    {
        $("bt_apply").disabled = true;
    }
	$("div_loading").innerHTML = html_loading;
	
    var parm = "";
	parm += "?rand=" 	+ Math.random();	
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/getNext_broadcast" + parm, "", GetBroadcastInfoResult);
}

function GetBroadcastInfoResult(s) {
	$("bt_refresh").disabled = false;
    if (isAdmin)
    {
        $("bt_apply").disabled = false;
    }
	port_info = evalJSON(s);
	genNewTable();
}

function genNewTable()
{
	var port_table = html_table;
	var ss = html_tr_list;
	
	if (0 == port_info)
	{
		port_table = replaceString(port_table, "TR_PORT_LIST", str_tr);
		
		$("div_table").innerHTML = port_table;	
		$("div_table").style.visibility = "visible";
		$("div_loading").innerHTML = "";
		
		return;
	}
	
	ss = ss.replace(/PORT_ID/g, port_info.port);
	ss = ss.replace(/PORT_EN/g, eth_enable_arr.options[port_info.enable].text);
	if (0 == port_info.enable)
	{
		ss = ss.replace(/PORT_MODE/g, "");
		ss = ss.replace(/PORT_RATE/g, "");
	}
	else
	{
		ss = ss.replace(/PORT_MODE/g, eth_mode_arr.options[port_info.mode-1].text);
		ss = ss.replace(/PORT_RATE/g, port_info.sr_rate);
	}
	str_tr += ss;
	
	GetBroadcastInfo();
}

function SetBroadcastInfo() {
	var parm = "";
	parm += "?rand=" 	+ Math.random();
	parm += "&port="    + $("port_id").value;
	parm += "&enable=" 	+ $("enable").selectedIndex;
	parm += "&mode=" 	+ $("mode").value;
	parm += "&sr_rate="	+ $("sr_rate").value;
	
	$("bt_refresh").disabled = true;
	$("bt_apply").disabled   = true;
    
	$("div_add_loading").innerHTML = html_loading;
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/set_broadcast" + parm, "", SetBroadcastInfoResult);	
}

function SetBroadcastInfoResult(s) 
{
	$("div_add_loading").innerHTML = "";
	$("bt_refresh").disabled = false;
	$("bt_apply").disabled = false;	
	
	var ret = evalJSON(s);
	if (ret == 1) 
	{
		alert(str_set + str_set_ok);
		
	} 
	else 
	{
		alert(str_set + str_set_failed);
	}
	
	location.reload();
}
