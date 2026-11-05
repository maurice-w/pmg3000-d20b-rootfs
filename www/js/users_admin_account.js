var html_div_loading = "";
var str_chgpwd 	     = "Change admin account password ";
var str_ok		     = "successful.";
var str_failed	     = "failed.";
var str_err          = "Invaild input.";
var account_info     = "";
var str_tr           = "";
var str_default      = "";

function chgLanguage()
{
    try 
    {
        chg_language(top.g_lang.h_admin);
        str_chgpwd 	= top.g_lang.h_admin.js_string.str_chgpwd;
        str_ok		= top.g_lang.h_admin.js_string.str_ok;
        str_failed	= top.g_lang.h_admin.js_string.str_failed;
        str_err	    = top.g_lang.h_admin.js_string.str_err;
        str_default = top.g_lang.h_admin.js_string.str_default;
    } catch(E){}
}

window.onload = function() 
{
    top.g_cur_main_url = window.location.href;
    chgLanguage();

    $("page_body").style.visibility = "visible";
    $("div_edit_table").style.visibility = "visible";
    html_div_loading = $("div_loading").innerHTML;
    $("div_loading").innerHTML = "";

    html_table = $("div_table").innerHTML;
    html_tr_list = getTemplateString(html_table, "TR_QINQ_LIST");

    getAdminName("user");
    if (LoginUser("user") != "admin") 
    {
        disableButton(true);
    }

    getInfo();
}

function getInfo() 
{
    disableButton(true);

    var parm = "";
    parm += "?rand=" 	+ Math.random();	
    var xmlhttp = new XMLHttp();	
    xmlhttp.sendRequest("cgi/getNext_admin" + parm, "", GetInfoResult);
}

function GetInfoResult(s) 
{
    disableButton(false);

    account_info = evalJSON(s);
    getNewTable();
}

function getNewTable()
{
    var account_table = html_table;        
    var ss = html_tr_list;

    if (0 == account_info)
    {
        account_table = replaceString(account_table, "TR_QINQ_LIST", str_tr);

        $("div_table").innerHTML = account_table;  
        $("div_table").style.visibility = "visible";
        $("div_loading").innerHTML = "";

        return;
    }

    ss = ss.replace(/USERNAME/g,  account_info.username);
    ss = ss.replace(/PASSWORD/g,  "");
    ss = ss.replace(/PRIVILEGE/g, account_info.level);
    str_tr += ss;

    getInfo();
}

function chgPasswd(type) 
{
    if ($("username").value == "") 
    {
        alert(str_err);
        return;
    }

    if ("admin" == util.trim($("username").value))
    {
        alert(str_default);
        return;
    }

    var parm = "";
    parm += "?rand=" 	  + Math.random();
    parm += "&type="      + type; 
    parm += "&username="  + util.trim($("username").value);
    parm += "&password="  + util.trim(encryptPwd($("password").value));
    parm += "&level="     + util.trim($("level").value);

    disableButton(true);
    $("div_loading").innerHTML = html_div_loading;
    var xmlhttp = new XMLHttp();
    xmlhttp.sendRequest("cgi/set_admin" + parm, "", chgPasswdResult)
}

function encryptPwd(tmpPwd)
{
    var SecPwd = "";
    var pwdLength = tmpPwd.length;

    for (var i = 0; i < pwdLength; i++)
    {
        SecPwd += tmpPwd.charCodeAt(i).toString(16);
        if (isNaN(tmpPwd.charAt(i)))
        {
            SecPwd += "s";
        }
        else if (true == tmpPwd.charAt(i).match(/^.*[A-O]+.*$/))
        {
            SecPwd += "k";
        }
        else if (true == tmpPwd.charAt(i).match(/^.*[P-Z]+.*$/))
        {
            SecPwd += "w";
        }
        else if (true == tmpPwd.charAt(i).match(/^.*[a-o]+.*$/))
        {
            SecPwd += "p";
        }
        else if (true == tmpPwd.charAt(i).match(/^.*[p-z]+.*$/))
        {
            SecPwd += "t";
        }
        else if (true == tmpPwd.charAt(i).match(/^.*[0-4]+.*$/))
        {
            SecPwd += "r";
        }
        if (0 == i%3)
        {
            SecPwd += "m";
        }

        if (0 == i%4)
        {
            SecPwd += "z";
        }

        if (0 == i%5)
        {
            SecPwd += "l";
        }
    }

    return SecPwd;
}
function chgPasswdResult(s) 
{
    disableButton(false);
    $("div_loading").innerHTML = "";
    var ret = evalJSON(s);
    if (ret == 1) {
        alert(str_chgpwd + str_ok);
        location.reload();
    } 
    else 
    {
        alert(str_chgpwd + str_failed);
    }
}

function disableButton(dis)
{
    try
    {
        $("bt_chg").disabled = dis;
        $("bt_add").disabled = dis;
        $("bt_del").disabled = dis;
    }
    catch(E)
    {
    }
}
