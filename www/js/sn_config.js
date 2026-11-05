var html_loading = "";
var set_config   = "Change sn configuration ";
var str_set_ok   = "success.";
var set_failed   = "failed.";
var isAdmin      = false;
var set_assci_mode_note1 = "max 10 chars";
var set_assci_mode_note2 = "e.g: abcdefg123";
var set_hex_mode_note1   = "max 20 chars";
var set_hex_mode_note2   = "e.g: 00112233445566778899";

function chgLanguage()
{
    try
    {
        chg_language(top.g_lang.h_sn_conf);
        set_assci_mode_note1 = top.g_lang.h_sn_conf.js_string.set_assci_mode_note1;
        set_assci_mode_note2 = top.g_lang.h_sn_conf.js_string.set_assci_mode_note2;
        set_hex_mode_note1   = top.g_lang.h_sn_conf.js_string.set_hex_mode_note1;
        set_hex_mode_note2   = top.g_lang.h_sn_conf.js_string.set_hex_mode_note2;
        set_config 	= top.g_lang.h_sn_conf.js_string.set_config;
        str_set_ok 	= top.g_lang.h_sn_conf.js_string.str_set_ok;
        set_failed 	= top.g_lang.h_sn_conf.js_string.set_failed;
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
    getSnConfig();
    showSelectInfo(0);
}

function getSnConfig()
{
    var parm = "";
    parm += "?rand=" 	+ Math.random();

    var xmlhttp = new XMLHttp();
    $("div_loading").innerHTML = html_loading;
    xmlhttp.sendRequest("cgi/get_sn" + parm, "", getSnConfigResult);
}

function getSnConfigResult(s) 
{
    $("div_loading").innerHTML = "";
    var info = evalJSON(s);
    try 
    {
        $("cur_sn").innerHTML = info.cur_sn;      
        $("cur_pass").innerHTML = info.cur_pass;
        $("sn").value = info.sn;
    }
    catch(e)
    {}
}

function disableButton(dis)
{
    $("bt_apply").disabled = dis;
}

function SetSnConfig()
{
    var parm = "";
    var password = util.trim($("pass").value);
 //   var sn       = util.trim($("sn").value);  //if need set sn, open this
    var mode     = $("mode").value;

    if ('' == password)
    {
        alert(set_config + set_failed);
        return;
    }

    if (1 == mode) 
    {
        if (null == password.match(/^[0-9a-fA-F]{1,20}$/))
        {
            alert(set_config + set_failed);
            return;
        }
/*
        if (('' == sn)
         || (null == sn.match(/^[0-9a-fA-F]{8,16}$/))
         || (16 != sn.length))
        {
            alert(set_config + set_failed);
            return;
        }
    }
    else
    {
        if (('' == sn)
         || (null == sn.match(/^[0-9a-fA-F]{4,12}$/))
         || (12 != sn.length))
        {
            alert(set_config + set_failed);
            return;
        }*/
    }

    parm += "?rand=" + Math.random();
 //   parm += "&sn=" + encodeURIComponent(sn);
 //   parm += "&pass=" + encodeURIComponent(password);
    parm += "&mode=" + encodeURIComponent(mode);

    disableButton(true);
    $("div_apply_loading").innerHTML = html_loading;
    var xmlhttp = new XMLHttp();
    xmlhttp.sendRequest("cgi/set_sn" + parm, "", SetSnConfigResult);
}

function SetSnConfigResult(s)
{
    disableButton(false);
    $("div_apply_loading").innerHTML = "";

    var ret = evalJSON(s);
    if (ret == 1)
    {
        alert(set_config + str_set_ok);
    } 
    else 
    {
        alert(set_config + set_failed);
    }
    getSnConfig();
}

function showSelectInfo(index)
{
    if (0 == index)
    {
        $("pass").maxLength         = 10; 
        $("in_pass_note").innerHTML = set_assci_mode_note1;
        $("in_mode_note").innerHTML = set_assci_mode_note2;
    }
    else
    {
        $("pass").maxLength         = 20; 
        $("in_pass_note").innerHTML = set_hex_mode_note1;
        $("in_mode_note").innerHTML = set_hex_mode_note2;
    }
}

