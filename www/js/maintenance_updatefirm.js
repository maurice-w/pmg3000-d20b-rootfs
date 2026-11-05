var interval_total = 0;
var check_total    = 0;
var interval_reset = 0;
var times_total    = 1;
var html_setp      = "";
var reset_time     = 50;
var update_init    = false;
var chk_serv_times = 180;
var g_ip_info      = null;

var str_other_run 	= "Another file transfer process in running.";
var str_ip_chg 		= "The IP address had changed, you must reset the ONU.";
var str_time		= "Time";
var str_sec			= "s";
var str_setp		= "STEP ";
var str_loading		= "Loading.....";
var str_uploading	= "Uploading onu image.....";
var str_verify		= "Verifying onu image.....";
var str_image_err	= "ONU image is invalid.";
var str_burning		= "Burning onu image.....";
var str_burn_failed	= "Burn onu image failed.";
var str_reseting	= "Reseting the ONU.....";
var str_reset_failed= "Reset ONU failed, please reset manual.";
var str_chk_srv		= "Checking update status.....";
var str_update_ok	= "Update Success";
var str_firm_ver	= "ONU Version";
var str_timeout		= "timeout";
var str_too_long    = "The submitted file is too long";
var str_malloc_err  = "ONU memory alloc fail.";
var str_submit_err  = "Uploading error.";

function chgLanguage()
{
    try {
        chg_language(top.g_lang.h_update);
        str_other_run 	= top.g_lang.h_update.js_string.str_other_run;
        str_ip_chg 		= top.g_lang.h_update.js_string.str_ip_chg;
        str_time		= top.g_lang.h_update.js_string.str_time;
        str_sec			= top.g_lang.h_update.js_string.str_sec;
        str_setp		= top.g_lang.h_update.js_string.str_setp;
        str_loading		= top.g_lang.h_update.js_string.str_loading;
        str_uploading	= top.g_lang.h_update.js_string.str_uploading;
        str_verify		= top.g_lang.h_update.js_string.str_verify;
        str_image_err	= top.g_lang.h_update.js_string.str_image_err;
        str_burning		= top.g_lang.h_update.js_string.str_burning;
        str_burn_failed	= top.g_lang.h_update.js_string.str_burn_failed;
        str_reseting	= top.g_lang.h_update.js_string.str_reseting;
        str_reset_failed= top.g_lang.h_update.js_string.str_reset_failed;
        str_chk_srv		= top.g_lang.h_update.js_string.str_chk_srv;
        str_update_ok	= top.g_lang.h_update.js_string.str_update_ok;
        str_firm_ver	= top.g_lang.h_update.js_string.str_firm_ver;
        str_timeout		= top.g_lang.h_update.js_string.str_timeout;
        str_too_long    = top.g_lang.h_update.js_string.str_too_long;
        str_malloc_err  = top.g_lang.h_update.js_string.str_malloc_err;
        str_submit_err  = top.g_lang.h_update.js_string.str_submit_err;
    } catch(E){}
}

window.onload = function() {
    top.g_cur_main_url = window.location.href;
    chgLanguage();

    $("page_body").style.visibility = "visible";
}

function init(ipaddr) {
    //	if (ipaddr.ip == ipaddr.cur_ip) {
    if (ipaddr.file_flag != 0) {
        $("txt_step").innerHTML = "<b><font color=\"red\">" + str_other_run + "</font></b>";
        alert(str_other_run);
        return;
    }
    g_ip_info = ipaddr;
    showIFrame();
    //	} else {
    //alert(str_ip_chg);
    //window.location.href = "maintenance_reset.html";
    //	}
}

function changeTime() {
    $("td_time").innerHTML = str_time + ": " + (times_total++) + str_sec;
    if (times_total > g_ip_info.upload_timeout)
    {
        times_total = 0;
        clearInterval(interval_total);
        $("burn_img").style.visibility = "hidden";
        $("txt_step").innerHTML = "<font color='red'>" + "HTTP Server" + str_timeout + "</font>";
    }
}

function showIFrame() {
    if (html_setp == "" && $("td_step").innerHTML != "") {
        html_setp = $("td_step").innerHTML;
    }
    $("td_step").innerHTML = "";
    $("step_title").innerHTML = str_setp + "1";
    $("upload_iframe").height = 90;
    $("td_time").innerHTML = "";
}

function initUpdate() {
    clearInterval(interval_total);
    times_total = 1;

    $("td_step").innerHTML = html_setp;
    $("step_title").innerHTML = str_loading;
    $("txt_step").innerHTML = str_loading;	
    $("upload_iframe").src = "maintenance_updatefire_iframe.html";
}

function uploadImage() {
    interval_total = setInterval("changeTime();", 1000);

    $("upload_iframe").height = 0;
    $("td_step").innerHTML = html_setp;
    $("txt_step").innerHTML = str_uploading;
    $("step_title").innerHTML = str_setp + "2";
}

function setUploadStatus(st, percent)
{
    if (st == 0)
    {
        $("txt_step").innerHTML = str_uploading + "[" + percent + "%]";
    }
    else if (st == 1)
    {
        $("txt_step").innerHTML = str_verify;
        $("step_title").innerHTML = str_setp + "3";
    }
    else if (st == 21)
    {
        alert(str_image_err);
        initUpdate();
    }
    else if (st == 2)
    {
        $("txt_step").innerHTML = str_burning;
        $("step_title").innerHTML = str_setp + "4";
    }
    else if (st == 22)
    {
        alert(str_burn_failed);
        initUpdate();
    }
    else if (st == 3)
    {
    	clearInterval(interval_total);
        setTimeout("resetONU();", 1000);
    }
    else if (st == 10)
    {
        $("txt_step").innerHTML = str_too_long;
        $("step_title").innerHTML = str_setp + "1";
    }
    else if (st == 11)
    {
        $("txt_step").innerHTML = str_malloc_err;
        $("step_title").innerHTML = str_setp + "1";
    }
    else
    {
        $("txt_step").innerHTML = str_submit_err;
        $("step_title").innerHTML = str_setp + "1";
    }
}

    function verifyImage(ret) {
        if (ret == 200)
        {
            $("txt_step").innerHTML = str_verify;
            $("step_title").innerHTML = str_setp + "3";

            var parm = "";
            var xmlhttp = new XMLHttp();
            parm += "?rand=" 	+ Math.random();
            xmlhttp.sendRequest("cgi/get_imgcrc" + parm, "", verifyImageResult);
        }
        else
        {
            alert("Upload file failed. err=" + ret);
            initUpdate();
        }
    }

function verifyImageResult(s) {
    ret = evalJSON(s);
    if (ret == 1) {
        burnImage();
    } else {
        alert(str_image_err);
        initUpdate();
    }
}

function burnImage() {
    $("txt_step").innerHTML = str_burning;
    $("step_title").innerHTML = str_setp + "4";

    var parm = "";
    var xmlhttp = new XMLHttp();
    parm += "?rand=" 	+ Math.random();
    xmlhttp.sendRequest("cgi/get_imgwrite" + parm, "", burnImageResult);
}

function burnImageResult(s) {
    ret = evalJSON(s);
    if (ret == 1) {
        resetONU();
    } else {
        alert(str_burn_failed);
        initUpdate();
    }
}

function resetONU() {
    $("step_title").innerHTML = str_setp + "5";

    var parm = "";
    var xmlhttp = new XMLHttp();
    parm += "?rand=" 	+ Math.random();
    xmlhttp.sendRequest("cgi/reset_onu" + parm, "", resetONUResult);

    reset_time = 80;
    interval_reset = setInterval("changeLeaveTime();", 1000);
}

function resetONUResult(s) {
}

function changeLeaveTime() { 
    if (reset_time-- > 0) {
        $("txt_step").innerHTML        = str_reseting + reset_time + str_sec;
    } else {
        clearInterval(interval_reset);
        $("step_title").innerHTML      = str_setp + "6";
        $("txt_step").innerHTML        = str_chk_srv;
        chk_serv_times                 = 180;
        $("burn_img").style.visibility = "visible";
        check_total                    = setInterval("checkServer()", 1000);
    }
}

function checkServer() {
    $("txt_step").innerHTML = str_chk_srv;// + "[" + chk_serv_times + "]";
    var parm = "";
    var xmlhttp = new XMLHttp();
    parm += "?rand=" 	+ Math.random();
    xmlhttp.sendRequest("cgi/get_server" + parm, "", checkServerResult);
}

function checkServerResult(s) {
    var obj = evalJSON(s);
    try {
        if (obj.result == 1) {
            clearInterval(interval_total);
            clearInterval(check_total);
            $("step_title").innerHTML = str_update_ok;
            $("burn_img").style.visibility = "visible";
            $("burn_img").src = "img/i_today.gif";
            $("burn_img").width = 16;
            $("burn_img").height = 16;
            $("txt_step").innerHTML = str_firm_ver + ": " + obj.version;
        } else {
            if (chk_serv_times-- > 1)
            {
            }
            else
            {
                clearInterval(interval_total);
                clearInterval(check_total);
                $("burn_img").style.visibility = "hidden";
                $("txt_step").innerHTML = "<font color='red'>" + str_chk_srv + str_timeout + "</font>";
            }
        }
    } catch(e){
        if (chk_serv_times-- > 1)
        {
        }
        else
        {
            clearInterval(interval_total);
            clearInterval(check_total);
            $("burn_img").style.visibility = "hidden";
            $("txt_step").innerHTML = "<font color='red'>" + str_chk_srv + str_timeout + "</font>";
        }
    }
}

function getIpAddr() {
    var parm = "";
    parm += "?rand=" 	+ Math.random();

    var xmlhttp = new XMLHttp();
    xmlhttp.sendRequest("cgi/getNext_ip" + parm, "", getIpAddrResult);
}

function getIpAddrResult(s) {
    var ip_info = evalJSON(s);
    try
    {
        init(ip_info);
    } catch(E){}
}

