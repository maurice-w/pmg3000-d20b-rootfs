var html_loading = "";
var set_config   = "Change Tr069 Configuration";
var str_set_ok   = "success.";
var set_failed   = "failed.";
var isAdmin      = false;
var str_enter_error = " illegal character";
var status_ok       = "";
var status_failed   = "";
var g_default_sn    = "";

function chgLanguage()
{
	try
	{
		chg_language(top.g_lang.h_tr069_conf);
        set_config 	= top.g_lang.h_tr069_conf.js_string.set_config;
        str_set_ok 	= top.g_lang.h_tr069_conf.js_string.str_set_ok;
        set_failed 	= top.g_lang.h_tr069_conf.js_string.set_failed;
        str_enter_error = top.g_lang.h_tr069_conf.js_string.str_enter_error;
        status_ok       = str_set_ok;
        status_failed   = set_failed;
	} catch(E){}
}

window.onload = function() {
	top.g_cur_main_url = window.location.href;
	chgLanguage();
    
	$("page_body").style.visibility = "visible";
    $("div_table").style.visibility = "visible";
	$("div_table1").style.visibility = "visible";
	$("div_table2").style.visibility = "visible";
	$("ip_mode").disabled = true;
	$("bt_apply1").disabled = true;
	
	html_loading = $("div_loading").innerHTML;
	isAdmin = (LoginUser("user") == "admin") ? true : false;
	if (!isAdmin)
    {
		disableButton(true);
	}
	getTr069Config();
}

function getTr069Config() {
	var parm = "";
	parm += "?rand=" 	+ Math.random();
	
	var xmlhttp = new XMLHttp();
	$("div_loading").innerHTML = html_loading;
	xmlhttp.sendRequest("cgi/get_tr069" + parm, "", getTr069ConfigResult);
}

function getTr069ConfigResult(s) {
    $("div_loading").innerHTML = "";
    var info = evalJSON(s);

    $("td_auth_value_08").value = info.acs_server_url;
    $("td_auth_value_09").value = info.acs_user_name;
    $("td_auth_value_10").value = info.acs_pwd;
    $("td_auth_value_12").value = info.user_name;
    $("td_auth_value_13").value = info.user_id;
    $("td_auth_value_14").innerHTML = info.req_url;
    $("vlan_id").value              = info.vlan_id;
	$("default_sn").innerHTML       = info.default_sn;
	$("wan_ip").value               = info.wan_ip;
	$("mask_ip").value              = info.mask_ip;
	$("dns_ip").value               = info.dns_ip;
	$("router_ip").value            = info.router_ip;

	g_default_sn = info.default_sn;
	
    if ("1" == info.conn_status)
    {   
        $("td_auth_value_15").innerHTML = status_ok;
    }
    else
    {
        $("td_auth_value_15").innerHTML = status_failed;
    }

}

function disableButton(dis)
{
    $("bt_apply").disabled = dis;
	$("bt_reverse_auth").disabled = dis;
}

function SetTr069Config()
{
	var parm = "";
    var acs_server_url = "";
    var acs_user_name  = "";
    var acs_pwd        = "";
    var user_name      = "";
    var user_id        = "";
    var vlan_id        = "";

	parm += "?rand=" + Math.random();
    acs_server_url = util.trim($("td_auth_value_08").value);
    acs_user_name  = util.trim($("td_auth_value_09").value);
    acs_pwd        = util.trim($("td_auth_value_10").value);
    user_name      = util.trim($("td_auth_value_12").value);
    user_id        = util.trim($("td_auth_value_13").value);
    vlan_id        = util.trim($("vlan_id").value);
    
    parm += "&acs_server_url=" + encodeURIComponent(acs_server_url);
    parm += "&acs_user_name="  + encodeURIComponent(acs_user_name);
    parm += "&acs_pwd="        + encodeURIComponent(acs_pwd);
    parm += "&user_name="      + encodeURIComponent(user_name);
    parm += "&user_id="        + encodeURIComponent(user_id);
	parm += "&vlan_id="        + encodeURIComponent(vlan_id);
	parm += "&default_sn="     + g_default_sn;
    parm += "&report=0";
	
	disableButton(true);
	$("div_apply_loading").innerHTML = html_loading;
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/set_tr069" + parm, "", SetTr069ConfigResult);
}

function SetTr069ConfigResult(s)
{
	disableButton(false);
	$("div_apply_loading").innerHTML = "";
	
	var ret = evalJSON(s);
	if (ret == 1) {
		alert(set_config + str_set_ok);
	} else {
		alert(set_config + set_failed);
	}
	getTr069Config();
}

function SetReverseAuth()
{
	var parm = "";
	parm += "?rand=" + Math.random();
	parm += "&report=1";
	
	disableButton(true);
	$("div_apply_loading2").innerHTML = html_loading;
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/set_tr069" + parm, "", SetReverseAuthResult);
}

function SetReverseAuthResult(s)
{
	disableButton(false);
	$("div_apply_loading2").innerHTML = "";
	
	var ret = evalJSON(s);
	if (ret == 1) {
		alert(set_config + str_set_ok);
	} else {
		alert(set_config + set_failed);
	}
}