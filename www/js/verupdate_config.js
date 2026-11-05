var verupdate_info 	= null;
var html_loading= "";
var html_table 	= "";

var set_config = "Change batch upgrade configuration ";
var str_set_ok = "success.";
var set_failed = "failed.";
var age_out_of_rang = "Out of rang.";
var str_ip_err = "IP address is error."
var str_mask_err = "Netmask address is error."
var state_arr = new Array("Disable", "Enable");
var isAdmin = false;

function chgLanguage()
{
	try {
		chg_language(top.g_lang.h_vu_conf);
		set_config 	= top.g_lang.h_vu_conf.js_string.set_config;
		str_set_ok 	= top.g_lang.h_vu_conf.js_string.set_ok;
		set_failed 	= top.g_lang.h_vu_conf.js_string.set_failed;
		state_arr 	= top.g_lang.h_vu_conf.js_string.state_arr;
		str_ip_err		= top.g_lang.h_ipconf.js_string.ip_err;
		str_mask_err	= top.g_lang.h_ipconf.js_string.mask_err;		
		age_out_of_rang	= top.g_lang.h_vu_conf.js_string.out_of_rang;
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
	
	GetVerUpdateInfo();
}

function GetVerUpdateInfo() {
	disableButton(true);
	$("div_loading").innerHTML = html_loading;
	var parm = "";
	parm += "?rand=" 	+ Math.random();	
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/get_verupdate_config" + parm, "", GetVerUpdateResult);
}

function GetVerUpdateResult(s) {
	disableButton(false);
	$("div_loading").innerHTML = "";
	verupdate_info = evalJSON(s);
	
	try
	{
		$("update_stat").innerHTML = state_arr[verupdate_info.update_en];
		$("auto_stat").innerHTML = state_arr[verupdate_info.auto_en];
		$("cur_ip").innerHTML 	= "&nbsp;&nbsp;<b>" + verupdate_info.ip + "</b>";
		$("cur_mask").innerHTML = "&nbsp;&nbsp;<b>" + verupdate_info.netmask + "</b>";
		$("td_policy_port").innerHTML = verupdate_info.policy_port;		
		$("td_retry_time").innerHTML = verupdate_info.retry_time;
		$("td_vlan_id").innerHTML = verupdate_info.vlan_id;
        
		if (isAdmin)
		{
			$("update_en").selectedIndex = verupdate_info.update_en;
			$("auto_en").selectedIndex = verupdate_info.auto_en;
			$("ip").value 			= verupdate_info.ip;
			$("mask").value 		= verupdate_info.netmask;
			$("policy_port").value = verupdate_info.policy_port;
			$("retry_time").value = verupdate_info.retry_time;
			$("vlan_idnum").value = verupdate_info.vlan_id;
		}
	}
	catch(E)
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
			$("update_en").disabled = dis;
			$("auto_en").disabled = dis;
			$("ip").disabled = dis;
			$("mask").disabled = dis;
			$("policy_port").disabled = dis;
			$("retry_time").disabled = dis;
			$("bt_apply").disabled = dis;
			$("vlan_idnum").disabled = dis;
		}
	}
	catch(E)
	{
	}
}

function SetVerUpdateConfig()
{
	var time = parseInt($("retry_time").value);
	var portnum = parseInt($("policy_port").value);
	var vlanid = parseInt($("vlan_idnum").value);
	var ip_value 	= $("ip").value.replace(/(^\s*)|(\s*$)/g, "");
	var mask_value 	= $("mask").value.replace(/(^\s*)|(\s*$)/g, "");
	var parm = "";
	
	if (isNaN(time) || time < 1 || time > 4080)
	{
		alert(age_out_of_rang);
		return;
	}
	if (isNaN(portnum) || portnum < 0|| portnum > 65535)
	{
		alert(age_out_of_rang);
		return;
	}
	if (isNaN(vlanid) || vlanid < 2|| vlanid > 4094)
	{
		alert(age_out_of_rang);
		return;
	}
	if (verifyIP(ip_value) == false) {
		alert(str_ip_err);
		return;
	}

	if (verifyIP(mask_value) == false) {
		alert(str_mask_err);
		return;
	}
	
	parm += "?rand="   + Math.random();
	parm += "&update_en=" + $("update_en").selectedIndex;
	parm += "&auto_en=" + $("auto_en").selectedIndex;
	parm += "&ip=" 		+ ip_value;
	parm += "&mask=" 	+ mask_value;
	parm += "&policy_port=" + portnum;
	parm += "&retry_time=" + time;
	parm += "&vlan_id=" + vlanid;
	
	disableButton(true);
	$("div_apply_loading").innerHTML = html_loading;
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/set_verupdate_config" + parm, "", SetVerupdateResult);		
}

function SetVerupdateResult(s)
{
	disableButton(false);
	$("div_apply_loading").innerHTML = "";
	
	var ret = evalJSON(s);
	if (ret == 1) {
		alert(set_config + str_set_ok);
	} else {
		alert(set_config + set_failed);
	}
	GetVerUpdateInfo();
}
