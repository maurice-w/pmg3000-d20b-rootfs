//var html_status    = "";
var html_form      = "";
var ip_info        = null;
var str_failed     = "changed faild";
var str_resume     = "changed success";

function chgLanguage() 
{
    try {
        chg_language(top.g_lang.h_omciupdate);
        str_failed = top.g_lang.h_omciupdate.js_string.str_failed;
        str_resume = top.g_lang.h_omciupdate.js_string.str_resume;
    } catch (E) {}
}
function getcodeExtendInfo()
{
	var parm = "";
	parm +="?rand=" 	+ Math.random();
	var xmlhttp = new XMLHttp();
	xmlhttp.sendRequest("cgi/get_omciupgrade" + parm, "", getcodeExtendInfoResult);
}

function getcodeExtendInfoResult(s)
{
	try
	{
	var ret = evalJSON(s); 
	if(ret && ret.codeExtend !== undefined) 
		{
			if(ret.codeExtend === "1")
			{
				$("mode_close").checked = true;
				console.error("Invalid response 1 format", response);
			} 
			else if(ret.codeExtend === "0") 
			{
				$("mode_open").checked = true;
			}
		} 
		else 
		{
			console.error("Invalid response 0 format", response);
		}
	}
		catch (e) 
		{
            console.error("Error parsing response", e);
        }

}
window.onload = function() {
    top.g_cur_main_url = window.location.href;
    chgLanguage();

    $("page_body").style.visibility = "visible";
    //getIpAddr();
    //html_status = $("td_status").innerHTML;
    html_form	= $("td_form").innerHTML;
    //$("td_status").innerHTML = "";
    $("td_form").style.visibility = "visible";
    var user = LoginUser("user");
    if (user != "admin") {
        $("mode_open").disabled 	= true;
        $("mode_close").disabled 	= true;
        $("bt_apply").disabled 	= true;
    }	
		getcodeExtendInfo();
}


function SetMode() 
{
    if ($("mode_open").checked == true) 
    {
        SetcodeExtend();
    } else {
        ClearcodeExtend();
    }
}

function SetcodeExtend()
{ 
    var parm = "";
    var xmlhttp = new XMLHttp();

    parm += "?mode=0";
    //$("td_form").innerHTML = "";
    //$("td_status").innerHTML = html_status;
    xmlhttp.sendRequest("cgi/set_omciupgrade" + parm, "", codeResult);
}

function codeResult(s) 
{
    var ret = evalJSON(s);
    if (ret == 1) 
    {
	    alert(str_resume);
    }
	else
	{
		alert(str_failed);
	}
}

function ClearcodeExtend()
{
    var parm = "";
    var xmlhttp = new XMLHttp();
    parm += "?mode=1";
   // $("td_form").innerHTML = "";
    //$("td_status").innerHTML = html_status;
    xmlhttp.sendRequest("cgi/set_omciupgrade" + parm, "", codeResult);
}
