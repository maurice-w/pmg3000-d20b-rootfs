var html_status    = "";
var html_form	   = "";
var ip_info        = null;
var reset_time     = 8;
var interval_reset = 0;
var str_resting    = "Reseting the ONU.....";
var str_sec 	   = "s";
var str_failed 	   = "Reset ONU failed.";
var str_resume	   = "Reset to factory default setting failed.";

function chgLanguage()
{
    try {
        chg_language(top.g_lang.h_rstonu);
        str_resting = top.g_lang.h_rstonu.js_string.str_resting;
        str_sec 	= top.g_lang.h_rstonu.js_string.str_sec;
        str_failed 	= top.g_lang.h_rstonu.js_string.str_failed;
        str_resume	= top.g_lang.h_rstonu.js_string.str_resume;
    } catch(E){}
}

window.onload = function() 
{
    top.g_cur_main_url = window.location.href;
    chgLanguage();	

    $("page_body").style.visibility = "visible";
    getIpAddr();
    html_status = $("td_status").innerHTML;
    html_form	= $("td_form").innerHTML;
    $("td_status").innerHTML = "";
    $("td_form").style.visibility = "visible";
    var user = LoginUser("user");
    if (user != "admin") {
        $("reset_type_0").disabled 	= true;
        $("reset_type_1").disabled 	= true;
        $("bt_apply").disabled 	= true;
    }	
}

function resetONU() 
{
    if ($("reset_type_0").checked == true) 
    {
        exe_reset();
    } else {
        clearConfig();
    }
}

function exe_reset() 
{
    var parm = "";
    var xmlhttp = new XMLHttp();
    parm += "?rand=" + Math.random();
    $("td_form").innerHTML = "";
    $("td_status").innerHTML = html_status;
    xmlhttp.sendRequest("cgi/reset_onu" + parm, "", resetONUResult);
    reset_time = 80;
    interval_reset = setInterval("changeLeaveTime();", 1000);
}

function changeLeaveTime() 
{ 
    if (reset_time-- > 0) 
    {
        $("txt_step").innerHTML = str_resting + reset_time + str_sec;
    } 
    else 
    {
        var old_ip_info = ip_info;
        getIpAddr();
        clearInterval(interval_reset);
       
        if (ip_info.ip != old_ip_info.ip) 
        {
            parent.window.location.href = "http://" + ip_info.ip;
        } else {
            $("td_form").innerHTML = html_form;
            $("td_status").innerHTML = "";
        }
    }
}

function resetONUResult(s) 
{
}

var __xmlhttp = null;
function getIpAddr() 
{
    var parm = "";
    parm += "?rand=" 	+ Math.random();

    __xmlhttp = new XMLHttp();
    __xmlhttp.sendRequest("cgi/getNext_ip" + parm, "", getIpAddrResult);
}

function getIpAddrResult(s) 
{
    ip_info = evalJSON(s);
}

function clearConfig() 
{
    var parm = "";
    parm += "?rand=" + Math.random();
    var xmlhttp = new XMLHttp();
    xmlhttp.sendRequest("cgi/set_default" + parm, "", clearConfigResult)
}

function clearConfigResult(s) 
{
    var ret = evalJSON(s);
    if (ret == 1) 
    {
        exe_reset();
    } 
    else 
    {
        alert(str_resume);
    }
}
