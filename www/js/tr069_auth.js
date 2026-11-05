var html_loading = "";

var str_set = "Change onu auth configuration ";
var str_ok = "success.";
var str_failed = "failed.";

var runflag = 0;
var serverflag = 0;//提交服务器

var InfoResult = 0;
var infostate = 10;
var div_str="";

var RegisterRebootFlag = '';
var widthShow='';
var iWidthShow=parseInt(widthShow);

var i= "";
var istatus=i;
var iresult=i;

var times = 0;
var limit = 0;
var relogin = 0;
var loginStatus = 0;
var querytimes = 0;

window.onload = function()
{
    /*
    //屏蔽退格删除键,屏蔽   F5   刷新键,Ctrl   +   R   
    if((event.keyCode==116)||(event.ctrlKey&&event.keyCode==82))   
    {     
        event.keyCode=0;   
        event.returnValue=false;   
    }
    */

    /*if (LoginUser("user") != getAdminName("user"))
    {
        //ShowOrHidden_Auth_table(0);
    }
    else
    {
        //ShowOrHidden_Auth_table(1);
    }*/
    
    dispalyObj($("tr_back"), false);
    dispalyObj($("tr_reLogin"), false);
    ShowOrHidden_Auth_table(1);
    getliodAuthConfig();
}
function ShowOrHidden_Auth_table(flag)
{
    if (flag == 1)
    {
        dispalyObj($("loidAuth_tr_1"), true);
        dispalyObj($("loidAuth_tr_2"), true);
        dispalyObj($("loidAuth_tr_4"), true);
        dispalyObj($("loidAuth_tr_5"), true);
    }
    else
    {
        dispalyObj($("loidAuth_tr_1"), false);
        dispalyObj($("loidAuth_tr_2"), false);
        //dispalyObj($("loidAuth_tr_3"), true);
        dispalyObj($("loidAuth_tr_3_2"), false);
        dispalyObj($("loidAuth_tr_4"), false);
        dispalyObj($("loidAuth_tr_5"), false);
    }
    
    hiddenAllItem();
}

var tr_arr = new Array(
    "loidAuth_tr_3_0",
    "loidAuth_tr_3_1",
    "loidAuth_tr_3_2",
    "loidAuth_tr_3_3",
    "loidAuth_tr_3_4",
    "loidAuth_tr_3_5",
    "loidAuth_tr_3_6",
    "loidAuth_tr_3_7",
    "loidAuth_tr_3_8",
    "loidAuth_tr_3_9",
    "loidAuth_tr_3_10",
    "loidAuth_tr_3_11",
    "loidAuth_tr_3_12",
    "loidAuth_tr_3_13",
    "loidAuth_tr_3_14",
    "loidAuth_tr_3_15");
    
function hiddenAllItem()
{
    var obj = null;
    for (var j=0; j<tr_arr.length; j++)
    {
        try
        {
          //obj = eval("(" + tr_arr[j] + ")");
            obj = document.getElementById(tr_arr[j]);
            dispalyObj(obj, false);
        }
        catch(E){}
    }
}

function showOneItem(flag)
{
    var obj = null;
    for (var j=0; j<tr_arr.length; j++)
    {
        try
        {
          //obj = eval("(" + tr_arr[j] + ")");
            obj = document.getElementById(tr_arr[j]);
            if (flag == j)
            { 
                dispalyObj(obj, true);
            }
        }
        catch(E){}
    }
}
/*
var iposstep= 1;
function refreshFun(callback)
{
    var imax = istatus;

    //若pos位置滞后，则提前pos位置
    if (callback>i)
    {
        //alert("i="+i+"callback="+callback);
        //i = callback; 
    }

    if(istatus == 0) 
    {
        if (iresult == 0)
        {
            imax = 300 * 0.8;
            iposstep = 1
        }
        else if (iresult == 1)
        {
            imax = 300 ;
            iposstep = iposstep * 0.5;
            //alert(iposstep);
        }
        else if (iresult == 99)
        {
            imax = 300 * 0.7;
        }
        else
        {
            imax = 300 * 0.9;
        }
    }
    else if (iWidthShow == 180)
    {
        imax = 300 * 0.6;
    }
    else
    {
        imax = 300 * 0.4;
        iposstep = iposstep * 2;
    }

    //最大和最小步进限制
    if (iposstep > 5)
    {
        iposstep = 4
    }
    else if (iposstep < 0.1)
    {
        iposstep = 0.1
    }
        
   if(i<=100) {
        if (i >= imax)
        {
            return ;
        }
        
        ps.style.width = i;
        bn.innerHTML = Math.floor((i+1)/3)+"%";
        setTimeout('refreshFun(i);',200 * iposstep);
    }
   else if(i<=150) {
        if (i >= imax)
        {
            return ;
        }
        
        ps.style.width = i;
        bn.innerHTML = Math.floor((i+1)/3)+"%";
        setTimeout('refreshFun(i);',400 * iposstep);
    }
    else if(i<=210) {
        if (i >= imax)
        {
            return ;
        }
        
        ps.style.width = i;
        bn.innerHTML = Math.floor((i+1)/3)+"%";
        setTimeout('refreshFun(i);',600 * iposstep);
    }
    else if(i<=270) {
        if (i >= imax)
        {
            return ;
        }
        
        ps.style.width = i;
        bn.innerHTML = Math.floor((i+1)/3)+"%";
        setTimeout('refreshFun(i);',800 * iposstep);
    }
    else if(i<=296) {
        if (i >= imax)
        {
            return ;
        }
        
        ps.style.width = i;
        bn.innerHTML   = Math.floor((i+1)/3)+"%";
        setTimeout('refreshFun(i);',1000 * iposstep);
    }
    i++;    
}
*/

var iii=120;
function getQueryAuthStatus(flag)
{
    iii--;
    var remain = iii * 5;
    
    if(istatus == 0) 
    {
        document.title="本窗口自动刷新，业务正在下发!";
    }
    else
    {
        document.title="本窗口自动刷新，设备正在注册!";
        //定时器偏移5s
        //setTimeout("getliodAuthConfig();", 25000);
    }
    
    if(flag == 0)
    {
        if (iii > 0)
        {
            setTimeout("getliodAuthConfig();", 5000);
        }
    }
    else
    {
        setTimeout("getliodAuthConfig();", 10000);
    }
}

function getliodAuthConfig()
{
    var parm = "";
    parm += "?rand=" + Math.random();

    disableButton(true);

    var xmlhttp = new XMLHttp();
    xmlhttp.sendRequest("cgi/get_loid" + parm, "", getAuthConfigResult);
}

function getAuthConfigResult(s)
{
    disableButton(false);

    var info = evalJSON(s);	
    
    $("td_auth_value_00").value = info.loid;
    $("td_auth_value_01").value = info.pass;
    
    if (loginStatus)
    {
       if (1 == info.status)
       {
            showOneItem(11);
            loginStatus = 0;
            querytimes  = 0;
       }
       else if (querytimes < 12)
       {
           querytimes++;
           setTimeout("getliodAuthConfig();", 5000);
       }
       else
       {
           loginStatus = 0;
           querytimes  = 0;
           showOneItem(8);
       }
    }
}

function setAuthConfig()
{
    var parm = "";
    var loid_value = "";
    var pass_value = "";

	parm += "?rand=" + Math.random();
    loid_value = $("td_auth_value_00").value;
    pass_value = $("td_auth_value_01").value;
    
    if ("" != loid_value)
    {
       if (0 == checkValue(loid_value))
       {
           alert('LOID "' + $("td_auth_value_00").value + '", 不能包含无效字符，请重新输入。');
           return;
       }
    }
    
    if ("" != pass_value)
    {
       if (0 == checkValue(pass_value))
       {
           alert('PASSWORD "' + $("td_auth_value_01").value + '", 不能包含无效字符，请重新输入。');
           return;
       }
    }
    
    parm += "&loid=" + encodeURIComponent(loid_value);
    parm += "&pass=" + encodeURIComponent(pass_value);

    disableButton(true);
    ShowOrHidden_Auth_table(0);

    var xmlhttp = new XMLHttp();
    xmlhttp.sendRequest("cgi/set_loid" + parm, "", setAuthConfigResult);
}

function setAuthConfigResult(s)
{
    var ret = evalJSON(s);
    if (ret == 1)
    {
        loginStatus = 1;
        setTimeout("getliodAuthConfig();", 5000);
    }
    else
    {
        alert("设置Loid认证失败");
        return;
    }
}
/*
function pollAuthStatus(s)
{
	disableButton(false);
	
	// 这里需要加进度条 
	ShowOrHidden_Auth_table(0);

	getliodAuthConfig();
}*/

function disableButton(dis)
{
	try
	{
		$("bt_refresh").disabled = dis;
		$("bt_apply").disabled   = dis;
	}
	catch(E)
	{
	}
}

function reLoginAuth()
{		
	getliodAuthConfig();
}

function checkValue(val)
{
    var i = 0;
    
    for (i = 0; i < val.length; i++)
    {
       if (val.substring(i, i+1).charCodeAt(0) > 255)
       {
            return 0;
       }
    }
    
    if ((null == val.match(/^[\w\$#\&\*\+=<>%\^-].*/))
     || (null == val.match(/.*[\w\$#\&\*\+=<>%\^-]$/)))
    {
        return 0;
    }
    
    return 1;
}