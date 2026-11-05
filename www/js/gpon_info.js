var html_loading= "";
var loid_auth_status = ["INIT", "SUCCESS", "LOID INEXITENCE", "PASSWORD ERROR", "FAIL"];

function chgLanguage()
{
	try {
		chg_language(top.g_lang.h_gpon_info);
		loid_auth_status = top.g_lang.h_gpon_info.js_string.loid_auth_status;
	} catch(E){}
}

window.onload = function()
{
	top.g_cur_main_url = window.location.href;
	chgLanguage();
	
	$("page_body").style.visibility = "visible";
	html_loading = $("div_loading").innerHTML;
	getGponInfo();
	$("bt_refresh").onclick = getGponInfo;
}

function getGponInfo()
{
	$("div_loading").innerHTML = html_loading;
	var parm = "";
	parm +="?rand=" 	+ Math.random();
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/get_gpon_info" + parm, "", getGponInfoResult);
}

function getGponInfoResult(s)
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
					case "line_status":
						str_val = "O" + info[key];
						break;
					case "loid_status":
						str_val = loid_auth_status[info[key]];
						break;
                        
					case "temp":
						str_val = info[key] + "C";
						break;
					case "voltage":
						str_val = info[key] + "V";
						break;
					case "current":
						str_val = info[key] + "mA";
						break;
					case "tx_power":
						str_val = info[key] + "dBm";
						break;
					case "rx_power":
						str_val = info[key] + "dBm";
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
