var html_loading= "";
var onu_conn_st_arr = ["Disconnected", "Connected"];
var reg_st_arr		= ["Deregistered", "Connected"];
var disable_arr		= ["Disable", "Enable"];
var uptime_arr		= ["days", "hours", "minutes", "seconds"];
var battery_arr		= ["NO", "YES"];
var afec_ability_arr= ["Unknown", "Supported", "Unsupported"];
var fec_mode_arr	= ["Unknown", "Enabled", "Disabled"];

function chgLanguage()
{
	try {
		chg_language(top.g_lang.h_sysst);
		onu_conn_st_arr = top.g_lang.h_sysst.js_string.onu_conn_st_arr;
		reg_st_arr		= top.g_lang.h_sysst.js_string.reg_st_arr;		
		disable_arr		= top.g_lang.h_sysst.js_string.disable_arr;
		uptime_arr		= top.g_lang.h_sysst.js_string.uptime_arr;
		battery_arr		= top.g_lang.h_sysst.js_string.battery_arr;
		afec_ability_arr= top.g_lang.h_sysst.js_string.afec_ability_arr;
		fec_mode_arr	= top.g_lang.h_sysst.js_string.fec_mode_arr;
	} catch(E){}
}

window.onload = function()
{
	top.g_cur_main_url = window.location.href;
	chgLanguage();
	
	var tr_arr = new Array(
		"tr_onu_conn_st",
		"tr_bank_00",
		"tr_oam_link",
		"tr_auth_st",
		"tr_pon_loopback",
		"tr_olt_mac",
		"tr_bank_01",
		"tr_bank_02",
		"tr_ctc_spec_ver",
		"tr_hw_ver",
		"tr_oam_ver");
	
	for (var i=0; i<tr_arr.length; i++)
	{
		try
		{
			dispalyObj($(tr_arr[i]), false);
		}
		catch(E){}
	}
	
	$("page_body").style.visibility = "visible";
	html_loading = $("div_loading").innerHTML;
	getOverview();
	$("bt_refresh").onclick = getOverview;
}

function getOverview()
{
	$("div_loading").innerHTML = html_loading;
	var parm = "";
	parm += "?rand=" 	+ Math.random();
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/get_system" + parm, "", getOverviewResult);
}

function getOverviewResult(s)
{
	var info = evalJSON(s);
	try
	{
		for (var key in info)
		{
			try
			{
				var str_val = info[key];
				switch (key)
				{
					case "onu_conn_st":
						str_val = onu_conn_st_arr[info[key]];
						break;
					case "reg_st":
						str_val = reg_st_arr[info[key]];
						break;
                    case "onu_id":
                        str_val = str_val.replace(/:/g,"");
                        break;
					case "uptime":
                        var time_arr  = str_val.split(" ");
                        var time_arr1 = time_arr[0].split(":");
                        if ("days" == uptime_arr[0])
                        {
                            if (time_arr[1] < 2)
                            {
                                uptime_arr[0] = "day";
                            }
                            
                            if(time_arr1[0] < 2)
                            {
                                uptime_arr[1] = "hour";
                            }
                            
                            if(time_arr1[1] < 2)
                            {
                                uptime_arr[2] = "minute";
                            }
                            
                            if(time_arr1[2] < 2)
                            {
                                uptime_arr[3] = "second";
                            }
                        }
                        str_val  = time_arr[1]  + " " + uptime_arr[0] + " ";
                        str_val += time_arr1[0] + " " + uptime_arr[1] + " ";
                        str_val += time_arr1[1] + " " + uptime_arr[2] + " ";
                        str_val += time_arr1[2] + " " + uptime_arr[3] + " ";
						break;
					case "capabi_battery_backup":
						str_val = battery_arr[info[key]];
						break;
					case "afec_ability":
						str_val = afec_ability_arr[info[key]];
						break;
					case "fec_mode":
						str_val = fec_mode_arr[info[key]];
						break;
					default:
						str_val = info[key];
				}
				$("td_" + key).innerHTML = str_val;
			}
			catch(E){
//				alert(E);
			}
		}
	}
	catch(e)
	{
//		alert(e);
	}
	$("div_loading").innerHTML = "";
}
