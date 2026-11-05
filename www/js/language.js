{
    type:["English", "简体中文"],
    info:[
        {
            // en
            h_ban:
            {
                title:"PON Banner",
                innerHTML:
                {
                    in_st:"Status",
                    in_se:"Setup",
                    in_ma:"Management",
                    in_us:"User"
                }
            },
            h_statistics:
            {
                title:"Statistics",
                innerHTML:
                {
                    in_hd:"Statistics",
                    in_clear:"&nbsp;&nbsp;Clears all of the statistic counters.",
                    txt_step:"Loading.....",
                    in_name:"Name",
                    in_value:"Value",
                    in_sw_name:"Name",
                    in_portl:"Port List",

                    in_realtime:"Realtime",
                    in_monitoring:"Monitoring",                 
                    in_rec_port:"Port",
                    in_rec_stat:"State",
                    in_rec_start:"Start Time",
                    in_rec_time:"Time  (Minutes)",
                    in_rec_op:"Operate",
                    in_rec_clear:"Clear"
                },
                value:
                {
                    bt_clear:"Clear statistics",
                    bt_refresh:"Refresh"
                },
                js_string:
                {
                    str_port:"Port",
                    str_eth_port:"Ehternet Port",
                    str_pon_port:"PON & UNI",
                    str_clear:"Clear all statistics ",
                    str_ok:"successful.",
                    str_failed:"failed.",
                    str_bt_clear:"Clear"                    
                }
            },  
            h_ipconf:
            {
                title:"IP Configuration",
                innerHTML:
                {
                    in_hd:"IP Configuration",
                    txt_step:"Loading.....",
                    in_new_ip:"Local IP Address:",
                    in_new_mask:"Local Subnet Mask:"
                },          
                value:
                {
                    bt_apply:"Apply",
                    bt_refresh:"Refresh"
                },
                js_string:
                {
                    str_set:"Change IP configuration ",
                    set_ok:"success.",
                    set_failed:"failed.",
                    ip_err:"IP address is error.",
                    mask_err:"Netmask address is error.",
                    str_note:"Save and reboot, then new ip address will take effect"
                }
            },
            h_ponconf:
            {
                title:"PON Setup",
                innerHTML:
                {
                    in_hd:"PON Setup",
                    txt_step:"Loading.....",
                    in_cur_ip:"IP Address",
                    in_cur_mask:"Mask",
                    in_cur_name:"name",
                    in_cur_type:"type",
                    in_cur_dns:"DNS",
                    in_cur_gateway:"Default Gateway",
                    in_cur_vlan:"VLAN ID",
                    in_cur_enable:"VLAN Enable",
                    in_cur_prio:"Priority"
                },
                value:
                {
                    bt_refresh:"Refresh"
                },
                js_string:
                {
                    str_vlan_arr:["Disabled", "Enable"]
                }
            },
            h_rstonu:
            {
                title:"Reset ONU",
                innerHTML:
                {
                    in_hd:"Reset ONU",
                    txt_step:"Loading.....",
                    in_rstonu:"Reset ONU",
                    in_rstfac:"Reset to factory default settings"
                },
                value:
                {
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_resting:"Reseting the ONU.....",
                    str_sec:"s",
                    str_failed:"Reset ONU failed.",
                    str_resume:"Reset to factory default setting failed."
                }
            }, 
				h_omciupdate:
				{
					title:"OMCI UPGRADE",
					innerHTML:
					{
						in_hd:"OMCI UPGRADE",
						in_openmode:"enable omci upgrade",
						in_closemode:"disable omci upgrade"
					},
					value:
					{
						bt_apply:"Apply"
					},
					js_string:
					{
						str_failed:"chenged failed.",
						str_resume:"changed success."
					}
				},
            h_ml_conf:
            {
                title:"MTU Configuration",
                innerHTML:
                {
                    in_hd:"MTU Configuration"
                },
                value:
                {
                    bt_apply:"Apply",
                    bt_refresh:"Refresh"
                },
                option_text:
                {
                    ibrdcst_en:["1522 Bytes", "1600 Bytes"]
                },
                js_string:
                {
                    set_config:"Change MTU configuration",
                    set_ok:"success.",
                    set_failed:"failed.",
                    state_arr:["1522 Bytes", "1600 Bytes"]
                }
            },
            h_save:
            {
                title:"Save Configuration",
                innerHTML:
                {
                    in_hd:"Save Configuration",
                    in_save:"Save Configuration "
                },
                value:
                {
                    bt_apply:"Save Config"
                },
                js_string:
                {
                    str_save:"Save configuration ",
                    str_ok:"successful.",
                    str_failed:"failed."
                }
            },
            h_update_if:
            {
                title:"Upload Software Image",
                innerHTML:
                {
                    in_filename:"Software File Name:&nbsp;"
                },
                value:
                {
                    bt_update:"Update Software"
                }
            },      
            h_update:
            {
                title:"Update ONU Image",
                innerHTML:
                {
                    in_hd:"Update ONU Image",
                    td_intro:"<li>Obtain an updated ONU image file from your ISP.</li><li>Enter the path to the image file location in the box below or click &quot;Browse&quot; to locate the image file.</li><li>Click &quot;Update Software &quot; once to upload the new image file.</li>",
                    in_note:"<b>NOTE:&nbsp;</b>The update process that includes CRC check, image burn and reboot takes about 4 minutes to complete, and your ONU will reboot.",
                    step_title:"step_title",
                    txt_step:"Loading....."
                },
                js_string:
                {
                    str_other_run:"Another file transfer process in running.",
                    str_ip_chg:"The IP address had changed, you must reset the ONU.",
                    str_time:"Time",
                    str_sec:"s",
                    str_setp:"STEP ",
                    str_loading:"Loading.....",
                    str_uploading:"Uploading ONU image.....",
                    str_verify:"Verifying ONU image.....",
                    str_image_err:"ONU image is invalid.",
                    str_burning:"Burning ONU image.....",
                    str_burn_failed:"Burn ONU image failed.\nSystem will reboot now",
                    str_reseting:"Reseting the ONU.....",
                    str_reset_failed:"Reset ONU failed, please reset manual.",
                    str_chk_srv:"Checking ONU version.....",
                    str_update_ok:"Update Success",
                    str_timeout:"timeout",
                    str_too_long:"The submitted file is too long",
                    str_malloc_err:"ONU memory alloc fail.",
                    str_submit_err:"Uploading error.",
                    str_firm_ver:"ONU version"
                }
            },          
            h_config_update_if:
            {
                title:"Upload Config",
                innerHTML:
                {
                    in_config_inport:"Config import",
                    in_config_export:"Config export"
                },
                value:
                {
                    bt_up:"Import",
                    get_file:"Export"
                }
            },      
            h_config_update:
            {
                title:"Update Config",
                innerHTML:
                {
                    in_conifghd:"Config export and import"
                },
                js_string:
                {
                    str_other_run:"Another file transfer process in running.",
                    config_uploading:"Upgrading config ....."   ,
                    mdu_reseting:"The MDU restarting .....",
                    str_image_err:"Config upgrade fail!",
                    str_image_suc:"Config  upgrade success, the MDU restarting."        
                }
            },
            h_mgt_menu:
            {
                innerHTML:
                {
                    link_diag:"Diagnostics",
                    in_poe_st:"PoE Status",
                    in_stat:"Statistics",
                    in_update:"Update Software",
                    in_config:"Update Configuration",
					in_rest:"Reset ONU",
					in_omciupdate:"OMCI UPGRADE"

                }
            },      
            h_setup_menu:
            {
                innerHTML:
                {
                    in_sn:"SLID Config",
                    in_loid:"LOID Config",
                    in_tr69:"Tr069 Config",
                    in_ip:"IP Config",
                    in_port:"Port Config",
                    in_dhcp:"DHCP Relay",
                    in_pon:"PON Config",
                    link_switch:"Switch Config",
                    
                    link_vlan:"Vlan Config",
                    in_vlan_config:"Vlan Config",
                    in_vlan_table:"Vlan Table",
                    
                    link_qos:"Qos Config",
                    in_alg:"Algorithm",
                    in_port_pri:"Port Priority",
                    in_usr_pri_map:"User PRI Mapping",
                    in_usr_pri_regen:"User PRI Regen",
                    in_mc_config:"Multicast Config",
                    in_mac:"Address Table",
                    in_broadcast:"Storm Restrain",
                    in_longlight:"Long light Control",
                    in_verupdate:"VerUpdate Control",
                    in_machide:"Mac hide Control",
                    in_maxlen:"MTU Config",
                    in_acl:"ACL Config",
                    in_mac:"MAC Filter Config",
                    in_qinq:"VLAN Stacking"
                }
            },
            h_voip_linetest:
            {
                title:"Line Test",
                innerHTML:
                {
                    in_voip_status:"Line Test",
                    in_GR909_FEMF:"Line Voltage Test",
                    in_GR909_ROH:"Receiver Off-Hook Test",
                    in_GR909_REN:"Ringers Equivalence Number Test",
                    in_GR909_RESFAULT:"resistive Fault Test",
                    in_GR909_ALL:"All GR-909 Test",
                    in_dc_vol:"dc vol param:",         
                    in_loopback:"loopback param:",
                    in_INTER_LOOPBACK:"loopback Test",
                    in_INTER_DC_FEED:"DC Feed Self-Test",
                    in_INTER_DC_VOL:"DC Voltage Test",
                    in_INTER_DC_RING:"Ringing Self-Test",
                    in_ring_vol:"ring vol param:",
                    in_ring_freq:"ring freq param:",
                    in_INTER_DC_HOOK:"On/Off Hook Test",
                    in_INTER_DC_BAT:"DC Bat Test",
                     ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
                },
                option_text:
                {
                    loopback_type:["Digital", "Analog"]
                },  
                value:
                {
                    bt_all:"Select All",
                    bt_none:"Select None",
                    bt_refresh:"Refresh",
                    bt_test:"Test Now"
                },
                js_string:
                {
                str_current_port:"Current is port"
                }
            },
            h_voip_sip_status:
            {
                innerHTML:
                {
                    in_voip_status:"Status info",
                    in_sip_number:"Number",
                    in_sip_port_status:"Channel Status",
                    in_sip_registered:"Register Status",
                    in_sip_phone_status:"Phone Status",
                    in_protocol_type:"Protocol Type"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_current_port:"Current is port"
                }
            },
            h_voip_mgcp_status:
            {
                innerHTML:
                {
                    in_voip_status:"Status info",
                    in_mgcp_port_status:"Channel Status",
                    in_mgcp_registered:"Register Status",
                    in_mgcp_phone_status:"Phone Status",
                    in_protocol_type:"Protocol Type"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                str_current:"Current is port"
                }
            },
            
            h_mgcp_basic:
            {
                innerHTML:
                {
                    in_voip_mgcp_basic_config:"Basic Config",
                    in_domain_set:"MGID",
                    in_port_set:"Signaling Port",
                    in_phy_prefix_set:"Term_Prefix",
                    in_phy_base_set:"Term_Base",
                    in_proxy_addr_1_set:"MGC_Addr",
                    in_proxy_port_1_set:"MGC_Port",
                    ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_set_mgcp_basic:"Change voip basic config",
                    set_mgcp_basic_fail:" fail.",
                    set_mgcp_basic_ok:" success."
                }
            },
            h_mgcp_advanced:
            {
                innerHTML:
                {
                    in_voip_mgcp_basic_advanced:"Advanced Config",
                    in_dtmf_relay_set:"DTMF",
                    in_2833_set:"RFC2833 Payload",
                    in_vad_set:"VAD_ENABLE",
                    in_ec_set:"EC_ENABLE",
                    in_rtptos_set:"Media DSCP",
                    in_sigtos_set:"Signaling DSCP",
                    in_modemtime1_set:"Modem_Timer1",
                    in_modemtime2_set:"Modem_Timer2",
                    ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_set_mgcp_advanced:"change advanced config",
                    set_mgcp_advanced_ok:" fail.",
                    set_mgcp_advanced_fail:" success."
                }
            },
            h_voip_h248_status:
            {
                innerHTML:
                {
                    in_voip_status:"Status info",
                    in_h248_port_status:"Channel Status",
                    in_h248_registered:"Register Status",
                    in_h248_phone_status:"Phone Status",
                    in_protocol_type:"Protocol Type"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                　  str_current_port:"Current is port"
                }
            },
            h_voip_ring_set:
            {
                 title:"Ring Set",
				innerHTML:
                {
					in_voip_ring_set:"Ring Set",
					td_note_head:"<b>&nbsp;&nbsp;NOTE:&nbsp;&nbsp;</b>This page is used to configure the ring cadence, normally not necessary for the users. RING0-RING7 means the 8 types of cadence configurations, with data assigned for 8 bytes (64 bits). The bit pattern is defined as following:",
					td_hint:"<li>63-4 bit: Ring cadence. Each bit represents the time of 100ms, either with or without a ringing. 60 bits are totally 6 seconds. Value 1 of each bit means with a ringing, and 0 without ringing. </li><li>3 bit: This bit shows if the ringing should ring repeatedly or only once, 0 means repeatedly and 1 means only once.</li><li>2-0 bit: reserved. Must be 0.</li>",
                    td_example_head:"<b>&nbsp;&nbsp;EXAMPLE:&nbsp;&nbsp;</b>",               
                    td_example:"<li>RING0：0x00000FFC00000000 FFC0：totally 10 bits with value 1, which means 10*100ms = 1 second with ringing; 30 bits with value 0, which means 30*100ms = 3 seconds without ringing; and bit 3 is 0, which means the ringing rings repeatedly, until the stop signal is received.</ol><li>RING1：0xFFFFF00000000000  FFFFF： totally 20 bits with value 1, which means 2 seconds with ringing; 40 bits with value 0, which means 4 seconds without ringing; and bit 3 is 0, which means the ringing rings repeatedly, until the stop signal is received.</ol><li>RING5：0xF800000000000008 F8: totally 5 bits with value 1, which means 50 ms with ringing; 55 bits with value 0, which means 5.5 seconds without ringing; and bit 3 is 1, which means the ringing rings only once then stops.</ol>",
					ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    config_fail:"Ring set fail."
                }
            },
            h_h248_basic:
            {
                innerHTML:
                {
                    in_voip_h248_basic_config:"Basic Config",
                    in_domain_set:"MGID",
					in_domain_set_type:"MGID Type",
                    in_port_set:"Signaling Port",
                    in_encodeing_set:"Encoding Mode",
                    in_transport_set:"Transport",
                    in_phy_prefix_set:"Phy_Term_Prefix",
                    in_temp_prefix_set:"Temp_Term_Prefix",
					in_outvolume_set:"Tx Gain",
					in_involume_set:"Rx Gain",
					in_offhookoutvolume_set:"OFF-HOOK Tx Gain",
					in_offhookinvolume_set:"OFF-HOOK Rx Gain",
                    in_proxy_addr_1_set:"Primary_MGC_Addr",
                    in_proxy_port_1_set:"Primary_MGC_Port",
                    in_proxy_addr_2_set:"Secondary_MGC_Addr",
                    in_proxy_port_2_set:"Secondary_MGC_Port",
                    ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_set_h248_basic:"Change voip basic config",
                    set_h248_basic_fail:" fail.",
                    set_h248_basic_ok:" success."
                }
            },
            h_h248_advanced:
            {
                innerHTML:
                {
                    in_voip_h248_advanced_config:"Advanced Config",
                    in_dtmf_relay_set:"RFC2833",
                    in_2833_set:"RFC2833 Payload",
                    in_vad_set:"VAD_ENABLE",
                    in_ec_set:"EC_ENABLE",
                    in_rtptos_set:"Media DSCP",
                    in_sigtos_set:"Signaling DSCP",
                    in_termbase_set:"Rtp_Term_Base",
                    in_termnum_set:"Phy_Term_Base",
                    in_authmode_set:"MGC1_Auth",
                    in_securityKey_set:"MGC1_Key",
                    in_authmode1_set:"MGC2_Auth",
                    in_MGC2Key_set:"MGC2_Key",
                    in_modemtime1_set:"Modem_Timer1",
                    in_modemtime2_set:"Modem_Timer2",
                    ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                option_text:
                {
                    uiViewdtmf_relay:["Inband", "rfc2833 force", "rfc2833 negotiate"]
                },
                js_string:
                {
                    str_set_h248_advanced:"change advanced config",
                    set_h248_advanced_fail:" fail.",
                    set_h248_advanced_ok:" success."
                }
            },
            h_voip_basic:
            {
                innerHTML:
                {
                    in_voip_basic_config:"Basic Config",
                    in_dialplan_set:"DIGIT_MAP",
                    in_registrar_set:"Server Config",
                    in_primary_registrar_set:"REG_FQDN",
                    in_regport_set:"REG_PORT",
                    in_proxy_set:"PROXY_FQDN:", 
                    in_proxyport_set:"PROXY_PORT",
                    in_outboundproxy_set:"OUTB_FQDN",
                    in_outboundport_set:"OUTB_PORT",
                    in_second_registrar_set:"BK_REG_FQDN",
                    in_regport2_set:"BK_REG_PORT",
                    in_second_proxy_set:"BK_PROXY_FQDN",
                    in_proxyport2_set:"BK_PROXY_PORT",
                    in_outboundproxy2_set:"BK_OUTB_FQDN",
                    in_outboundport2_set:"BK_OUTB_PORT",
                    in_ringid_set:"RING_ID",
                    in_optiontime_set:"OPTIONS_TIMER",
                    in_cbarint_set:"CBAR_INT_PRE",
                    in_cbarnatpre_set:"CBAR_NAT_PRE",
                    in_cbarpwd_set:"CBAR_PWD",
                    in_outvolume_set:"TX_GAIN",
                    in_involume_set:"RX_GAIN",
                    codecing_set:"PREF_CODING_PROFILE",
                    in_ptime_set:"Packet_TIME",
                    in_account_set:"Account",
                    in_cidname_set:"CID_NAME",
                    in_number_set:"CID_NUMBER",
                    in_username_set:"AUTH_USER_NAME",
                    in_password_set:"AUTH_USER_PASSWD",
                    in_overall_set:"Global Config",
                    in_silencesupp_set:"VAD_ENABLE",
                    in_silencesupp_disable:"Close",
                    in_silencesupp_enable:"Open",
                    in_echocancel_set:"EC_ENABLE",
                    in_echocancel_disable:"Close",
                    in_echocancel_enable:"Open",
                    remote1_set:"Remote Peer No.1",
                    remote2_set:"Remote Peer No.2",
                    remote3_set:"Remote Peer No.3",
                    remote4_set:"Remote Peer No.4",
                    remote5_set:"Remote Peer No.5",
                    tcp_set:"TCP_LISTEN_PORT",
                    tls_set:"TLS_LISTEN_PORT",
                    udp_set:"UDP_LISTEN_PORT",
                    in_regexpire_set:"REG_EXPIRES",
                    ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_set_voip_basic:"change basic config",
                    set_voip_basic_ok:"fail.",
                    set_voip_basic_fail:"success.",
                    str_current_port:"Current is port",
                    str_cid_Conflict:"CID number Conflict,please check!"
                }
            },
            
            
    
            h_voip_advanced:
            {
                innerHTML:
                {
                    in_voip_advanced:"Advanced Config",
                    txt_step:"Loading.....",
                    in_protocol_set:"Transport Protocol",
                    in_port_set:"Channel level config ",
                    in_overall_set:"Global Config ",
                    in_sig_tos:"Signaling DSCP",
                    in_rtp_tos:"Media DSCP",
                    divCLNT_CERT:"Client Cert",
                    divKEY:"Key",
                    in_passthrough_set:"PASSTHROUGH",
                    in_t38_set:"T38",
                    in_nway_set:"NWAY_CONF",
                    in_cw_set:"CW_DEFAULT",
                    in_acblock_set:"ACBLOCK_DEFAULT",
                    in_cid_set:"CID_DEFAULT",
                    in_reg_ring:"REG_RINGPING",
                    in_tone_set:"TONE_PLAY",
                    in_emergncy_set:"EMERGENCY_CALL",
                    in_msg_set:"MSG_DISPLAY",
                    in_repat_set:"REPEAT_DIAL",
                    in_callreturn_set:"CALL_RETURN",
                    in_netreg_set:"NET_REG_CHECK",
                    in_notdisturb_set:"DO_NOT_DISTURB",
                    in_callerid_set:"CALLER_ID",
                    in_anowcall_set:"ANON_CALL_BLOCK",
                    in_mwi_set:"MWI",
                    in_callwating_set:"CALL_WAITING",
                    in_conference_set:"CONFERENCING",
                    in_calltransfer_set:"CALL_TRANSFER",
                    in_cfwdtone_set:"CFWD_TONE",
                    in_callforward_set:" CALL_FORWARD",
                    in_hotlineimme_set:"HOTLINE_IMME",
                    in_callbarring_set:"CALL_BARRING",
                    in_p2pcall_set:"P2P_CALL",
                    in_hotlinedelay_set:"HOTLINE_DELAY",
                    in_alarmclock_set:"ALARM_CLOCK",
                    in_abbrdial_set:"ABBR_DAIL",
                    ViewErrorHint:"Marked with an 'X' before the string of illegal importation of the contents of the inputbox"
          
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_voip_advanced_set:"change advanced config",
                    str_voip_advanced_set_ok:" success.",
                    str_voip_advanced_set_failed:" fail.",
                    str_current_port:"Current is port"
                }
            },
            h_voip_switch:
            {
                innerHTML:
                {
                    in_voip_switch:"System Control",
                    system_sw:"Protocol Switch",
                    voip_reset:"VOIP ",
                    in_voip_disable:"disable",
                    in_voip_enable:"enable",
                    in_heart_set:"Active Heartbeat",
                    in_heart_cycle_set:"Heartbeat Cycle",
                    voip_channel:"Channel" ,
                    head_cmm:"ms",
                    spylevel:"Spy level"
                },
                value:
                {
                    bt_apply:"Apply",
                    voip_apply:"Apply",
                    channel_apply:"Apply",
                    heart_apply:"Apply",
                    spy_apply:"Apply"
                },
                js_string:
                {
                    str_voip_switch_set:"Protocol stack switch",
                    str_voip_switch_set_ok:" Success.",
                    str_voip_switch_set_failed:" Fail.",
                    str_resting:"Reset MDU and Protocol stack switch...... ",
                    str_failed:"protocol stack switch fail",
                    str_disable:"VOIP already disable!!",
                    str_enable:"VOIP already enable!!",
                    str_start:"Starting VOIP...",
                    str_close:"Closing VOIP...",
                    str_vlanfail:"Set voip vlan fail.",
                    str_vlanok:"Set voip vlan success.",
                    str_heartok:"Set heartbeat success.",
                    str_heartfail:"Set heartbeat fail.",
                    str_logfail:"Set log level fail.",
                    str_switch_hint1:"Can not switch current protocol stack!",
                    str_switch_hint2:"Switch protocol stack will restart the MDU,are you sure?"
                }
            },
            h_voip_menu:
            {
                innerHTML:
                {
                    in_voip_status:"Status Info",
                    in_voip_status2:"Status Info",
                    in_voip_status3:"Status Info",
                    in_voip_basic:"Basic Config",
                    in_voip_basic2:"Basic Config",
                    in_voip_basic3:"Basic Config",
                    in_voip_advanced:"Advanced Config",
                    in_h248_advanced:"Advanced Config",
                    in_mgcp_advanced:"Advanced Config",
                    in_system_switch:"System Control",       
                    in_ring_set:"Ring Set",   
                    in_linetest:"Line Test"   
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                
                }
            },

            h_sys_menu:
            {
                innerHTML:
                {
                    in_over:"Overview",
                    in_ctc:"CTC Information",
                    in_gpon_info:"GPON Information"
                }
            },
            h_user_menu:
            {
                innerHTML:
                {
                    in_admin:"Account Info"
                }
            },
            h_qos_alg:
            {
                title:"Qos Config >> Algorithm",
                innerHTML:
                {
                    in_hd:"Qos Config &gt;&gt; Algorithm",
                    txt_step:"Loading.....",
                    in_alg:"Algorithm"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply_alg:"Apply"
                },              
                js_string:
                {
                    str_set_alg:"Change algorithm ",
                    set_ok:"successful.",
                    set_fail:"failed."  
                }
            },
            h_poe_info:
            {
                title:"Port PoE Status",
                innerHTML:
                {
                    in_hd:"Port PoE Status",
                    txt_step:"Loading.....",
                    in_usr_pri:"Port",
                    in_queue_map:"Power Supply Status"
                },
                value:
                {
                    bt_refresh:"Refresh"
                }
            },             
            h_sn_conf:
            {
                title:"SLID Configuration",
                innerHTML:
                {
                    in_hd:"SLID Configuration",
                    txt_step:"Loading.....",
                    in_sn:"Pon SN:",
                    in_td_sn:"Pon SN:",
                    in_sn_com:"12 chars",
                    in_pass:"SLID:",
                    in_td_pass:"SLID:",
                    in_td_mode:"SLID Mode:",
                    bt_dis:"After reboot, new SLID will take effect"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    set_assci_mode_note1:"max 10 chars",
                    set_assci_mode_note2:"e.g: abcdefg123",
                    set_hex_mode_note1:"max 20 chars",
                    set_hex_mode_note2:"e.g: 00112233445566778899",
                    set_config:"Change configuration ",
                    str_set_ok:"success.",
                    set_failed:"failed."
                }
            },
            h_loid_conf:
            {
                title:"LOID Configuration",
                innerHTML:
                {
                    in_hd:"LOID Configuration",
                    txt_step:"Loading.....",
                    in_loid:"Pon Loid:",
                    in_td_loid:"Pon Loid:",
                    in_loid_com:"24 chars",
                    in_pass:"Password:",
                    in_td_pass:"Password:",
                    in_pass_com:"12 chars",
                    bt_dis:"After reboot, new Loid will take effect"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    set_config:"Change configuration ",
                    str_set_ok:"success.",
                    set_failed:"failed.",
                    str_enter_error:" illegal character"
                }
            },
            h_tr069_conf:
            {
                title:"Tr069 Configuration",
                innerHTML:
                {
                    in_hd:"Tr069 Configuration",
                    txt_step:"Loading.....",
                    in_user_url_value:"ACS USER URL:",
                    in_user_name_value:"ACS USER NAME:",
                    in_password_value:"ACS PASSWORD:",
                    in_req_conn_user_value:"REQ CONN USER NAME:",
                    in_req_conn_password_value:"REQ CONN PASSWORD:",
                    in_req_url:"REQ URL:",
                    in_req_conn_status:"CONN STATUS:",
                    in_vlan_id:"VLAN ID:",
                    in_default_sn:"DEFAULT SN:",
                    in_wan_ip:"WAN IP:",
                    in_mask_ip:"MASK:",
                    in_dns_ip:"DNS:",
                    in_router_ip:"GATEWAY:",
                    in_ip_mode:"MODE TYPE:",
                    in_reverse_auth:"REVERSE AUTH:"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply",
                    bt_apply1:"Apply",
                    bt_reverse_auth:"Report"
                },
                js_string:
                {
                    set_config:"Change configuration ",
                    str_set_ok:"success.",
                    set_failed:"failed.",
                    str_enter_error:" illegal character"
                }
            },
            h_ports:
            {
                title:"Port Configuration",
                innerHTML:
                {
                    in_hd:"Port Configuration",
                    txt_step:"Loading.....",
                    
                    in_port:"Port",
                    in_link:"Link",
                    in_negst:"NegState",
                    in_enabl:"Enable",
                    in_PoeEnabl:"PoeEnable",
                    in_pause:"Pause",
                    in_isolate:"Isolate",
                    in_pri:"PRI",
                    in_ingress_rate:"Ingress Rate",
                    in_down_rate:"Down Rate",
                    in_pir:"Down pir",
                    in_cbs:"Up cbs",
                    in_ebs:"Up ebs",
                    
                    in_td_port:"Port",
                    in_td_enabl:"PhyAdminControl",
                    in_td_PoeEnabl:"PoeControl",
                    in_td_pause:"Pause",
                    in_td_isolate:"Port Isolate",
                    in_td_pri:"Priority",
                    in_td_ingress_rate:"Ingress Rate",
                    in_td_down_rate:"Down Rate",
                    in_td_pir:"Down pir",
                    in_td_cbs:"Up cbs",
                    in_td_ebs:"Up ebs",
                    in_td_negst:"NegAdminState"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                option_text:
                {
                    enable:["Disable", "Enable"],
                    poeenable:["Disable", "Enable"],
                    isolate:["Enable", "Disable"],
                    pause:["Disable", "Enable"],
                    neg_ct:[ "10M/HD", "100M/HD", "1000M/HD", "10M/FD", "100M/FD", "1000M/FD", "Auto Neg"]
                },
                js_string:
                {
                    str_set:"Change port configuration ",
                    set_ok:"success.",
                    str_pvid_err:"PVID is error.",
                    str_ingress_rate_err:"Ingress rate value is error.",
                    str_down_rate_err:"Down rate value is error.",
                    set_fail:"failed."
                }               
            },
            h_ctc:
            {
                title:"CTC Information",
                innerHTML:
                {
                    in_hd:"CTC Information",
                    txt_step:"Loading.....",
                    
                    in_igmp:"IGMP MODE:&nbsp;",
                    in_leave:"Fast leave:&nbsp;",
                    in_port:"Port",
                    in_link:"Link",
                    in_up:"Up Limite",
                    in_down:"Down Limite",
                    in_ingress_rate:"Rate",
                    in_enabl:"Enable",
                    in_pause:"Pause",
                    in_vidm:"VLAN Mode",
                    in_vid:"VID",
                    in_strip:"TAG STRIP",
                    in_max:"MAX GROUP"
                },
                value:
                {
                    bt_refresh:"Refresh"
                },
                js_string:
                {
                    str_set:"Change port configuration ",
                    set_ok:"success.",
                    str_pvid_err:"PVID is error.",
                    str_ingress_rate_err:"Ingress rate value is error.",
                    set_fail:"failed.",

                    igmp_arr:["SNOOPING","CTC","MLD_SNOOPING","PROXY","MLD_PROXY"],
                    leave_arr:["DISABLE","ENABLE"],
                    up_arr:["DISABLE","ENABLE"],
                    down_arr:["DISABLE","ENABLE"],
                    en_arr:["DISABLE","ENABLE"],
                    pause_arr:["DISABLE","ENABLE"],
                    vlanm_arr:["TRANSPARENT","TAG","TRANSLATION","N1TRANSLATION","TRUNK","ZTE_TRUNK","ZTE_HYBRID","NONE"],
                    strip_arr:["STRIP","NOSTRIP","TRANSLATION"],
                    neg_ct_arr:["10M", "100M", "1000M", "10M", "100M", "1000M"]
                }               
            },

            h_ppp_setup:
            {
                title:"PPPoE+ Configuration",
                innerHTML:
                {
                    in_hd:"PPPoE+ Configuration",
                    txt_step:"Loading.....",
                    
                    in_num:"PORT",
                    in_cvlan:"STATUS",
                    in_td_num:"PORT",
                    in_td_cvlan:"STATUS",
                    in_td_cvlan2:"GLOBAL"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_add:"Apply",
                    bt_add2:"Apply"
                },
                js_string:
                {
                    str_set:"Change pppoe+ configuration ",
                    set_ok:"success.",
                    str_type_err:"ppp value is error.",
                    set_fail:"failed."
                },              
                option_text:
                {
                    cvlan_val:["Disable", "Enable"],
                    cvlan_val2:["Disable", "Enable"]
                }
            },

            h_dhcp_setup:
            {
                title:"DHCP Relay Configuration",
                innerHTML:
                {
                    in_hd:"DHCP Relay Configuration",
                    txt_step:"Loading.....",
                    
                    in_num:"PORT",
                    in_cvlan:"DHCP Relay STATUS",
                    in_trust:"TRUST",
                    in_policy:"POLICY",
                    in_td_num:"PORT",
                    in_td_cvlan:"DHCP Relay STATUS",
                    in_td_trust:"TRUST",
                    in_td_policy:"POLICY",
                    in_td_cvlan2:"GLOBAL"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_add:"Apply",
                    bt_add2:"Apply"
                },
                js_string:
                {
                    str_set:"Change DHCP Relay configuration ",
                    set_ok:"success.",
                    str_type_err:"DHCP value is error.",
                    set_fail:"failed."
                },              
                option_text:
                {
                    cvlan_val:["Disable", "Enable"],
                    trust_val:["Reject", "Trust"],
                    policy_val:["Keep", "Replace", "Discard", "Add"],
                    cvlan_val2:["Disable", "Enable"]
                }
            },
            h_broadcast:
            {
                title:"Storm restrain configuration",
                innerHTML:
                {
                    in_hd:"Storm restrain configuration",
                    txt_step:"Loading.....",
                    
                    in_port:"Port",
                    in_enabl:"Storm Restrain State",
                    in_mode:"Storm Restrain Mode",
                    in_rate:"Storm Rate Limit",
                    
                    in_td_port:"Port",
                    in_td_enabl:"Storm Restrain State",
                    in_td_mode:"Storm Restrain Mode",
                    in_td_rate:"Storm Rate Limit"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                option_text:
                {
                    enable:["Disable", "Enable"],
                    mode:["DLF", "BROADCAST", "DLF+BROADCAST", "MULTICAST", "DLF+MULTCAST", "MULTCST + BRDCST", "DLF+BROADCAST+MULTCAST"]
                },
                js_string:
                {
                    str_set:"Change Storm Restrain configuration ",
                    set_ok:"success.",
                    str_ingress_rate_err:"Rate value is error.",
                    set_fail:"failed."
                }               
            },  
            h_qinq_setup:
            {
                title:"Vlan Stacking Configuration",
                innerHTML:
                {
                    in_hd:"Vlan Stacking Configuration",
                    txt_step:"Loading.....",
                    
                    in_num:"port",
                    in_field:"field",
                    in_value:"value",
                    in_svlan:"svlan",
                    in_td_num:"port",
                    in_td_field:"field",
                    in_td_value:"value",
                    in_td_svlan:"svlan"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_add:"ADD",
                    bt_del:"DEL"
                },
                js_string:
                {
                    str_set:"Change vlan stacking configuration ",
                    set_ok:"success.",
                    str_type_err:"Input value is error.",
                    set_fail:"failed."
                },             
                option_text:
                {
                    mode:["port","cvid","ethertype","cvid_ethertype","cos"]
                }
            },
            h_mac_setup:
            {
                title:"Mac filter Configuration",
                innerHTML:
                {
                    in_hd:"Mac filter Configuration",
                    txt_step:"Loading.....",
                    
                    in_vid:"VID",
                    in_mac:"MAC",
                    in_port:"PORT",
                    in_td_vid:"VID",
                    in_td_mac:"MAC",
                    in_td_port:"PORT"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_add:"ADD",
                    bt_del:"DEL"
                },
                js_string:
                {
                    str_set:"Change mac filter configuration ",
                    set_ok:"success.",
                    str_type_err:"Input value is error.",
                    set_fail:"failed."
                }             
            },
            h_acl_setup:
            {
                title:"ACL Configuration",
                innerHTML:
                {
                    in_hd:"ACL Configuration",
                    txt_step:"Loading.....",
                    
                    in_type:"Rule Type",
                    in_port:"Port",
                    in_prec:"Precedence",
                    in_fiel:"Field",
                    in_oper:"Operator",
                    in_valu:"Value",
                    in_prio:"Priority",
                    in_td_type:"Rule Type",
                    in_td_port:"Port",
                    in_td_prec:"Precedence",
                    in_td_fiel:"Field",
                    in_td_oper:"Operator",
                    in_td_valu:"Value",
                    in_td_note:'for example:"hh:hh:hh:..."',
                    in_td_prio:"Priority"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_add:"ADD",
                    bt_del:"DEL"
                },
                js_string:
                {
                    str_set:"Change ACL configuration ",
                    set_ok:"success.",
                    str_type_err:"input value is error.",
                    set_fail:"failed.",
                    sugg_decimalNum:"input a decimal number",
                    sugg_sixteenNum:'for example:"hh:hh:hh:..."',
                    sugg_ipvalue:'for example:"192.168.1.1"',
                    str_not_support:"the operation not support"
                },               
                option_text:
                {
                    type:["REMARK", "ACL"],
                    fiel:["DA_MAC", "SA_MAC", "ETHER_PRI", "VLAN_ID", "ETHER_TYPE", "DA_IP", "SA_IP", "IP_PROTOCOL_TYPE", "IPV4_TOS_DSCP", "IPVERSION", "L4_SRC_PORT", "L4_DEST_PORT", "DA_IPv6", "SA_IPv6", "NEXTHEAD", "HOPLIMIT", "TRAFFICCLASS", "FLOWLABEL", "IPv6_L4_SRC_PORT", "IPv6_L4_DEST_PORT", "IPv6_DIP_PREFIX", "IPv6_SIP_PREFIX"],
                    oper:["EQUAL","ALWAYS_MATCH"]
                }
            },
            h_sysst:
            {
                title:"System Overview",
                innerHTML:
                {
                    in_hd:"System Overview",
                    txt_step:"Loading.....",
                    
                    in_td_type:"Type:",
                    in_td_onu_conn_st:"ONU PON Connection State:",
                    in_td_reg_st:"Register Status:",                    
                    in_td_llid:"LLID:",
                    
                    in_td_uptime:"ONU Uptime",              
                    in_td_onu_ip:"ONU IP Address:",             
                    in_td_onu_netmask:"ONU Subnet Mask:",               
                    in_td_onu_mac:"ONU MAC Address:",               
                    in_td_flash_chksum:"Flash Checksum:",               
                    in_td_eeprom_chksum:"EEPROM Checksum:",     
                            
                    in_td_app_ver:"Software Version:",  
                    in_onu_sn:"ONU SN",             
                    in_td_onu_vendor_id:"Vendor ID:",               
                    in_td_onu_model:"ONU Model:",               
                    in_td_onu_id:"ONU ID:",             
                    in_td_onu_hw_ver:"Hardware Version:",               
                    in_td_onu_soft_ver:"Software Version:",             
                    in_td_onu_fm_ver:"FirmwareVer:",    
                                
                    in_chip_id:"Chipset ID",                
                    in_td_chipset_vendor_id:"Vendor ID:",               
                    in_td_chipset_chip_model:"Chip Model:",             
                    in_td_chipset_rev:"Revision:",              
                    in_td_chipset_ic_ver:"IC_Version/Date:",        
                            
                    in_onu_capa:"ONU Capabilities",             
                    in_td_capabi_service_supported:"Service Supported:",                
                    in_td_capabi_ge_num:"Number of GE Ports:",              
                    in_td_capabi_ge_bitmap:"Bitmap of GE Ports:",               
                    in_td_capabi_fe_num:"Number of FE Ports:",              
                    in_td_capabi_fe_bitmap:"Bitmap of FE Ports:",               
                    in_td_capabi_pots_num:"Number of POTS ports:",              
                    in_td_capabi_e1_num:"Number of E1 port:",               
                    in_td_capabi_us_que_num:"Number of US Queues:",             
                    in_td_capabi_max_us_queue:"QueueMax per US Port:",              
                    in_td_capabi_ds_que_num:"Number of DS Queues:",             
                    in_td_capabi_max_ds_queue:"QueueMax per DS Port:",              
                    in_td_capabi_battery_backup:"Battery Backup:",              
                    in_td_afec_ability:"aFECAbility:",              
                    in_td_fec_mode:"aFECmode:"
                },
                value:
                {
                    bt_refresh:"Refresh"
                },
                js_string:
                {
                    onu_conn_st_arr : ["Disconnected", "Connected"],
                    reg_st_arr      : ["Deregistered", "Registered"],                   
                    disable_arr     : ["Disable", "Enable"],
                    uptime_arr      : ["days", "hours", "minutes", "seconds"],
                    battery_arr     : ["NO", "YES"],
                    afec_ability_arr: ["Unknown", "Supported", "Unsupported"],
                    fec_mode_arr    : ["Unknown", "Disabled", "Enabled"]
                }
            },
            h_gpon_info:
            {
                title:"GPON Connection Information",
                innerHTML:
                {
                    in_hd:"GPON Connection Information",
                    txt_step:"Loading.....",
                    
                    in_connection_info:"GPON Connection Information",
                    in_line_status:"GPON Line Status:",
                    in_loid_status:"LOID Auth Status:",                    
                    in_up_fec:"UP FEC:",
                    in_down_fec:"DOWN FEC:",              
                    in_encrypt:"ENCRYPT:", 
                    
                    in_optic_info:"Optic Information",               
                    in_temp:"Temperature:",               
                    in_voltage:"Voltage:",               
                    in_current:"Current:",
                    in_tx_power:"TX Power:",  
                    in_rx_power:"Rx Power"           
                },
                value:
                {
                    bt_refresh:"Refresh"
                },
                js_string:
                {
                    loid_auth_status:["INIT", "SUCCESS", "LOID INEXITENCE", "PASSWORD ERROR", "LOID CLASH"]
                }
            },    
            h_admin:
            {
                title:"Account Info",
                innerHTML:
                {
                    in_hd:"Account Info",
                    txt_step:"Loading.....",
                    
                    in_intro:"Admin account has unrestricted access to change and view configuration of your ONU. ",
                    in_user:"User Name",
                    in_pass:"Password",
                    in_priv:"Privilege",
                    in_td_user:"User Name:",
                    in_td_pass:"Password:",
                    in_td_priv:"Privilege:"
                },
                value:
                {
                    bt_chg:"Change",
                    bt_add:"Add",
                    bt_del:"Del"
                },
                js_string:
                {
                    str_chgpwd:"Config admin account password ",
                    str_ok:"successful.",
                    str_failed:"failed.",
                    str_default:"Cannot change default account",
                    str_err:"Invaild Input."                 
                }
            },
            h_snmp:
            {
                title:"SNMP Configuration",
                innerHTML:
                {
                    in_hd:"SNMP Configuration",
                    txt_step:"Loading.....",
                    
                    in_intro:"SNMP can manage and get stastics data by the agent device. ",
                    in_username:"SNMP Agent:",
                    in_stop:"stop",
                    in_start:"start",
                    in_permit:"Permission",
                    in_comm:"Community"
                },
                value:
                {
                    bt_apply:"Apply"
                },
                js_string:
                {
                    str_chgpwd:"Change snmp configuration ",
                    str_ok:"successful.",
                    snmp_st_arr : ["read only", "write only", "read and write"],
                    str_failed:"failed."
                }
            }
        },
        {
            // cn
            h_ban:
            {
                title:"PON Banner",
                innerHTML:
                {
                    in_st:"系统状态",
                    in_se:"高级配置",
                    in_ma:"系统管理",
                    in_us:"用户管理"
                }
            },
            h_voip_menu:
            {
                innerHTML:
                {
                    in_voip_status:"状态信息",
                    in_voip_status2:"状态信息",
                    in_voip_status3:"状态信息",
                    in_voip_basic:"基本配置",
                    in_voip_basic2:"基本配置",
                    in_voip_basic3:"基本配置",
                    in_voip_advanced:"高级配置",
                    in_h248_advanced:"高级配置",
                    in_mgcp_advanced:"高级配置",
                    in_system_switch:"系统控制",       
                    in_ring_set:"铃音设置",
                    in_linetest:"线路测试"     
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                 
                }
            },
            h_voip_sip_status:
            {
                innerHTML:
                {
                    in_voip_status:"状态信息",
                    in_sip_number:"号码",
                    in_sip_port_status:"通道状态",
                    in_sip_registered:"注册状态",
                    in_sip_phone_status:"话机状态",
                    in_protocol_type:"协议类型"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                str_current_port:"当前是Port"
                }
            },
            
        h_voip_mgcp_status:
            {
                innerHTML:
                {
                    in_voip_status:"状态信息",
                    in_mgcp_port_status:"通道状态",
                    in_mgcp_registered:"注册状态",
                    in_mgcp_phone_status:"话机状态",
                    in_protocol_type:"协议类型"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                 str_current:"当前是Port"
                }
            },
            
            
        h_mgcp_basic:
            {
                innerHTML:
                {
                    in_voip_mgcp_basic_config:"基本配置",
                    in_domain_set:"网关标识",
                    in_port_set:"信令端口",
                    in_phy_prefix_set:"端点前缀",
                    in_phy_base_set:"端点基数",
                    in_proxy_addr_1_set:"MGC地址",
                    in_proxy_port_1_set:"MGC端口",
                    ViewErrorHint:"标有'X'字符前的输入框内容不合法,请检查"
         
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_set_mgcp_basic:"改变基本配置",
                    set_mgcp_basic_fail:" 失败.",
                    set_mgcp_basic_ok:" 成功."
                }
            },
            h_mgcp_advanced:
            {
                innerHTML:
                {
                    in_voip_mgcp_basic_advanced:"高级配置",
                    in_dtmf_relay_set:"DTMF",
                    in_2833_set:"2833净荷",
                    in_vad_set:"静音检测",
                    in_ec_set:"回音消除",
                    in_rtptos_set:"媒体DSCP",
                    in_sigtos_set:"信令DSCP",
                    in_modemtime1_set:"传真Timer1",
                    in_modemtime2_set:"Modem_Timer2",
                    ViewErrorHint:"标有'X'字符前的输入框内容不合法,请检查"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_set_mgcp_advanced:"改变高级配置",
                    set_mgcp_advanced_ok:" 失败.",
                    set_mgcp_advanced_fail:" 成功."
                }
            },      
            h_voip_h248_status:
            {
                innerHTML:
                {
                    in_voip_status:"状态信息",
                    in_h248_port_status:"通道状态",
                    in_h248_registered:"注册状态",
                    in_h248_phone_status:"话机状态",
                    in_protocol_type:"协议类型"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_current_port:"当前是Port"
                }
            },
            
            
            h_h248_basic:
            {
                innerHTML:
                {
                    in_voip_h248_basic_config:"基本配置",
                    in_domain_set:"网关标识",
					in_domain_set_type:"网关标识类型",
                    in_port_set:"信令端口",
                    in_encodeing_set:"信令编码",
                    in_transport_set:"传输协议",
                    in_phy_prefix_set:"物理端点前缀",
                    in_temp_prefix_set:"临时端点前缀",
					in_outvolume_set:"发送增益",
					in_involume_set:"接收增益",
					in_offhookoutvolume_set:"OFF-HOOK发送增益",
					in_offhookinvolume_set:"OFF-HOOK接收增益",
                    in_proxy_addr_1_set:" MGC1地址",
                    in_proxy_port_1_set:"MGC1端口",
                    in_proxy_addr_2_set:"MGC2地址",
                    in_proxy_port_2_set:"MGC2端口",
                    ViewErrorHint:"标有'X'字符前的输入框内容不合法,请检查"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_set_h248_basic:"更改VOIP基本配置",
                    set_h248_basic_fail:"失败.",
                    set_h248_basic_ok:"成功."
                }
            },
            
            h_h248_advanced:
            {
                innerHTML:
                {
                    in_voip_h248_advanced_config:"高级配置",
                    in_dtmf_relay_set:"RFC2833",
                    in_2833_set:"2833净荷",
                    in_vad_set:"静音检测",
                    in_ec_set:"回音消除",
                    in_rtptos_set:"媒体DSCP",
                    in_sigtos_set:"信令DSCP",
                    in_termbase_set:"临时端点基数",
                    in_termnum_set:"物理端点基数",
                    in_authmode_set:"MGC1认证",
                    in_securityKey_set:"MGC1密钥",
                    in_authmode1_set:"MGC2认证",
                    in_MGC2Key_set:"MGC2密钥",
                    in_modemtime1_set:"传真Timer1",
                    in_modemtime2_set:"传真Timer2",
                    ViewErrorHint:"标有'X'字符前的输入框内容不合法,请检查"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                option_text:
                {
                    uiViewdtmf_relay:["Inband", "rfc2833强制", "rfc2833协商"]
                },
                js_string:
                {
                    str_set_h248_basic:"更改VOIP高级配置",
                    set_h248_basic_fail:"失败.",
                    set_h248_basic_ok:"成功."
                }
            },
            
            
            h_voip_basic:
            {
                innerHTML:
                {
                    in_voip_basic_config:"基本配置",
                    in_dialplan_set:"拨号规则",
                    in_registrar_set:"服务器配置",
                    in_primary_registrar_set:"首选注册服务器地址",
                    in_regport_set:"端口",
                    in_proxy_set:"首选代理服务器地址", 
                    in_proxyport_set:"端口",
                    in_outboundproxy_set:"outbound地址",
                    in_outboundport_set:"端口",
                    in_second_registrar_set:"备用注册服务器地址",
                    in_regport2_set:"端口",
                    in_second_proxy_set:"备用代理服务器地址",
                    in_proxyport2_set:"端口",
                    in_outboundproxy2_set:"备用outbound地址",
                    in_outboundport2_set:"端口",
                    in_ringid_set:"振铃ID",
                    in_optiontime_set:"OPTIONS间隔时间",
                    in_cbarint_set:"国际长途前缀",
                    in_cbarnatpre_set:"国内长途前缀",
                    in_cbarpwd_set:"呼出限制密码",
                    in_outvolume_set:"发送增益",
                    in_involume_set:"接收增益",
                    codecing_set:"语音编解码",
                    in_ptime_set:"语音打包时间",
                    in_account_set:"帐户",
                    in_cidname_set:"CID名字",
                    in_number_set:"CID号码",
                    in_username_set:"用户名",
                    in_password_set:"密码",
                    in_overall_set:"全局配置",
                    in_silencesupp_set:"静音压缩",
                    in_silencesupp_disable:"关",
                    in_silencesupp_enable:"开",
                    in_echocancel_set:"G.168 回声消除",
                    in_echocancel_disable:"关",
                    in_echocancel_enable:"开",
                    remote1_set:"远端SIP地址1",
                    remote2_set:"远端SIP地址2",
                    remote3_set:"远端SIP地址3",
                    remote4_set:"远端SIP地址4",
                    remote5_set:"远端SIP地址5",
                    tcp_set:"TCP监听端口",
                    tls_set:"TLS监听端口",
                    udp_set:"UDP监听端口",
                    in_regexpire_set:"注册周期(秒)",
                    ViewErrorHint:"标有'X'字符前的输入框内容不合法,请检查"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_set_voip_basic:"更改VOIP基本配置",
                    set_voip_basic_ok:"成功.",
                    set_voip_basic_fail:"失败.",
                    str_current_port:"当前是Port",
                    str_cid_Conflict:"CID号码有冲突,请检查"
                }
            },
            
            h_voip_switch:
            {
                innerHTML:
                {
                    in_voip_switch:"系统控制",
                    system_sw:"协议栈切换",
                    in_heart_set:"主动心跳",
                    in_heart_cycle_set:"心跳周期",
                    voip_reset:"VOIP使能 ",
                    in_voip_disable:"禁用",
                    in_voip_enable:"启用",
                    head_cmm:"毫秒",
                    voip_channel:"通道使能" 
                },
                value:
                {
                    bt_apply:"应用",
                    voip_apply:"应用",
                    heart_apply:"应用",
                    channel_apply:"应用",
                    spy_apply:"应用"
                },
                js_string:
                {
                    str_voip_switch_set:"切换协议栈",
                    str_voip_switch_set_ok:" 成功.",
                    str_voip_switch_set_failed:" 失败.",
                    str_resting:"正在重启MDU并切换协议栈.....",
                    str_failed:"协议栈切换失败.",
                    str_disable:"VOIP模块已禁用!!",
                    str_enable:"VOIP模块已开启!!",
                    str_start:"正在启动VOIP...",
                    str_close:"正在关闭VOIP...",
                    str_vlanfail:"设置VOIP VLAN 失败.",
                    str_vlanok:"设置VOIP VLAN 成功.",
                    str_heartok:"设置心跳功能成功.",
                    str_heartfail:"设置心跳功能失败.",
                    str_logfail:"设置日志级别失败",
                    str_switch_hint1:"正在运行的协议栈就是要切换的协议栈!",
                    str_switch_hint2:"切换协议栈将会重启MDU系统，是否要切换?"
                }
            },
                
            h_voip_advanced:
            {
                innerHTML:
                {
                    in_voip_advanced:"高级配置",
                    txt_step:"正在加载.....",
                    in_protocol:"传输协议",
                    in_port_set:"端口级配置",
                    in_overall_set:"全局配置 ",
                    in_protocol_set:"传输协议",
                    in_passthrough_set:"透传",
                    in_t38_set:"T38",
                    in_nway_set:"多路会话",
                    in_cw_set:"呼叫等待默认",
                    in_acblock_set:"匿名呼叫默认",
                    in_cid_set:"发送CID",
                    in_reg_ring:"注册振铃提示",
                    in_tone_set:"铃音播放",
                    in_emergncy_set:"紧急呼叫",
                    in_msg_set:"消息显示",
                    in_repat_set:"遇忙重拨",
                    in_callreturn_set:"回拨",
                    in_netreg_set:"网络注册状态检查",
                    in_notdisturb_set:"免打扰",
                    in_callerid_set:"发送呼叫ID",
                    in_anowcall_set:"匿名呼叫阻塞",
                    in_mwi_set:"消息等待指示",
                    in_callwating_set:"呼叫等待",
                    in_conference_set:"电话会议",
                    in_calltransfer_set:"呼叫转接",
                    in_cfwdtone_set:"前转状态指示",
                    in_callforward_set:" 呼叫前转",
                    in_hotlineimme_set:"立即热线",
                    in_callbarring_set:"呼出限制",
                    in_p2pcall_set:"点对点呼叫",
                    in_hotlinedelay_set:"延迟热线",
                    in_alarmclock_set:"闹钟",
                    in_abbrdial_set:"缩位拨号",
                    ViewErrorHint:"标有'X'字符前的输入框内容不合法,请检查"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_voip_advanced_set:"更改高级配置",
                    str_voip_advanced_set_ok:"成功.",
                    str_voip_advanced_set_failed:"失败.",
                    str_current_port:"当前是Port"
                }
            },
            h_statistics:
            {
                title:"流量统计",
                innerHTML:
                {
                    in_hd:"流量统计",
                    in_clear:"&nbsp;&nbsp;清除统计计数器.",
                    txt_step:"正在加载.....",
                    in_name:"名称",
                    in_value:"值",
                    in_sw_name:"端口列表",
                    in_portl2:"端口",

                    in_realtime:"实时统计",
                    in_monitoring:"定时监视",                   
                    in_rec_port:"端口",
                    in_rec_stat:"状态",
                    in_rec_start:"开始时间",
                    in_rec_time:"统计时间(分钟)",
                    in_rec_op:"操作",
                    in_rec_clear:"清除"
                },
                value:
                {
                    bt_clear:"清除统计",                    
                    bt_refresh:"刷新"
                },
                js_string:
                {
                    str_port:"端口",
                    str_eth_port:"以太网端口",
                    str_pon_port:"PON & UNI",
                    str_clear:"清除统计",
                    str_ok:"成功.",
                    str_failed:"失败.",
                    str_bt_clear:"清除"                     
                },
                option_text:
                {
                    show_type:["PON & UNI", "以太网端口"]
                },
            },
            h_ipconf:
            {
                title:"IP 设置",
                innerHTML:
                {
                    in_hd:"IP 设置",
                    txt_step:"正在加载.....",
                    in_new_ip:"本地IP地址:",
                    in_new_mask:"本地子网掩码:"
                },
                value:
                {
                    bt_apply:"应用",
                    bt_refresh:"刷新"
                },
                js_string:
                {
                    str_set:"更改IP配置",
                    set_ok:"成功.",
                    set_failed:"失败.",
                    ip_err:"IP地址错误.",
                    mask_err:"子网掩码错误.",
                    str_note:"保存并重启，设置才能生效"
                }
            },
            h_ponconf:
            {
                title:"PON 设置",
                innerHTML:
                {
                    in_hd:"PON 设置",
                    txt_step:"正在加载.....",
                    in_cur_ip:"IP地址",
                    in_cur_mask:"子网掩码",
                    in_cur_name:"接口名字",
                    in_cur_type:"类型",
                    in_cur_dns:"域名服务器",
                    in_cur_gateway:"默认网关",
                    in_cur_vlan:"VLAN ID",
                    in_cur_enable:"VLAN开关",
                    in_cur_prio:"优先级"
                },
                value:
                {
                    bt_refresh:"刷新"
                },
                js_string:
                {
                    str_vlan_arr:["禁用", "使能"]
                }
            },
            h_ml_conf:
            {
                title:"MTU配置",
                innerHTML:
                {
                    in_hd:"MTU配置"
                },
                value:
                {
                    bt_apply:"应用",
                    bt_refresh:"刷新"
                },
                option_text:
                {
                    ibrdcst_en:["1522字节", "1600字节"]
                },
                js_string:
                {
                    set_config:"更改MTU配置",
                    set_ok:"成功.",
                    set_failed:"失败.",
                    state_arr:["1522字节", "1600字节"]
                }
            },
            h_rstonu:
            {
                title:"重启ONU",
                innerHTML:
                {
                    in_hd:"重启ONU",
                    txt_step:"正在加载.....",
                    in_rstonu:"重启ONU",
                    in_rstfac:"恢复默认设置并重启ONU"
                },
                value:
                {
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_resting:"正在重启ONU.....",
                    str_sec:"秒",
                    str_failed:"重启ONU失败.",
                    str_resume:"恢复默认配置失败."
                }
            },
            
				h_omciupdate:
				{
					title:"OMCI升级",
					innerHTML:
					{
						in_hd:"OMCI升级",
						in_openmode:"开启omci升级",
						in_closemode:"关闭omci升级"
					},
					value:
					{
						bt_apply:"应用"
					},
					js_string:
					{
						str_failed:"切换失败.",
						str_resume:"切换成功."
					}
				},
            h_save:
            {
                title:"保存配置信息",
                innerHTML:
                {
                    in_hd:"保存配置信息",
                    in_save:"保存配置信息"
                },
                value:
                {
                    bt_apply:"保存配置"
                },
                js_string:
                {
                    str_save:"保存配置信息",
                    str_ok:"成功.",
                    str_failed:"失败."
                }
            },      
            h_update_if:
            {
                title:"上传软件升级文件",
                innerHTML:
                {
                    in_filename:"软件文件名:&nbsp;"
                },
                value:
                {
                    bt_update:"软件升级"
                }
            },
            h_update:
            {
                title:"软件升级",
                innerHTML:
                {
                    in_hd:"软件升级",
                    td_intro:"<li>从你的ISP获取一个最新版本的软件文件.</li><li>选择正确的软件文件的路径.</li><li>点击&quot;软件升级&quot;按钮开始升级.</li>",
                    in_note:"<b>注意:&nbsp;</b>整个升级过程包括CRC校验, 烧写FLASH, 以及自动重启,大约需要4分钟,升级完成后ONU将自动重启.",                    
                    step_title:"",
                    txt_step:"正在加载....."
                },
                js_string:
                {
                    str_other_run:"另一个升级进程正在运行.",
                    str_ip_chg:"IP地址已经更改, 你必须先重启ONU.",
                    str_time:"时间",
                    str_sec:"秒",
                    str_setp:"步骤 ",
                    str_loading:"正在加载.....",
                    str_uploading:"正在上传软件文件.....",
                    str_verify:"正在校验软件文件.....",
                    str_image_err:"软件文件镜像错误.",
                    str_burning:"正在写软件镜像文件到FLASH.....",
                    str_burn_failed:"写软件镜像文件到FLASH失败.\n系统将重新启动",
                    str_reseting:"正在重启ONU.....",
                    str_reset_failed:"重启ONU失败, 请手动重启ONU.",
                    str_chk_srv:"检查升级后的软件版本.....",
                    str_update_ok:"软件升级成功",
                    str_timeout:"超时",
                    str_too_long:"上传的文件过长",
                    str_malloc_err:"内存分配失败",
                    str_submit_err:"上传过程发生错误",
                    str_firm_ver:"软件版本"
                }
            },          
            h_config_update_if:
            {
                title:"Upload Config",
                innerHTML:
                {
                    in_config_inport:"配置文件导入:",
                    in_config_export:"配置文件导出:"
                },
                value:
                {
                    bt_up:"导入配置",
                    get_file:"导出配置"
                }
            },      
            h_config_update:
            {
                title:"Update Config",
                innerHTML:
                {
                    in_conifghd:"配置文件导入导出"
    
                },
                js_string:
                {
                    str_other_run:"另一个升级进程正在运行.",
                    config_uploading:"正在升级配置文件...." ,
                    mdu_reseting:"正在重启MDU.....",
                    str_image_err:"配置文件升级失败!",
                    str_image_suc:"配置文件升级成功,MDU将重启."     
                }
            },
            h_mgt_menu:
            {
                innerHTML:
                {
                    link_diag:"诊断",
                    in_poe_st:"PoE状态",
                    in_stat:"流量统计",
                    in_update:"软件升级",
                    in_config:"配置更新",
					in_rest:"重启ONU",
					in_omciupdate:"OMCI升级"

                }
            },
			h_voip_ring_set:
            {
                title:"铃音设置",
				innerHTML:
                {
					in_voip_ring_set:"铃音设置",
					td_note_head:"<b>&nbsp;&nbsp;提示:&nbsp;&nbsp;</b>此页用来配置振铃的节奏(Ring Cadence), 一般不需要用户配置。RING0--RING7表示8中振铃节奏配置，配置数据共8个字节64位，其中，位的定义如下:",
					td_hint:"<li>63--4：表示振铃节奏，其中每位代表100ms的振铃或者不振铃时间，60位共表示6秒，位值为1表示振铃，为0反之。</li><li>3：此位表示振铃是按照节奏连续执行还是只执行一次，如果此位值为0，表示连续振铃，为1表示只振铃一次。</li><li>2--0: 保留，必须为0</li>",
                    td_example_head:"<b>&nbsp;&nbsp;例如:&nbsp;&nbsp;</b>",                
                    td_example:"<li>RING0：0x00000FFC00000000 FFC0：共10位1，表示10*100ms＝1s的振铃 C0000000：共30位0，表示30*100ms=3s的停止振铃  bit3：为0，表示按照节奏连续振铃，直到收到停止振铃命令。</ol><li>RING1：0xFFFFF00000000000  FFFFF：共20位1，表示2s的振铃 0000000000：共40位0，表示4s的停止振铃  bit3：为0，表示按照节奏连续振铃，直到收到停止振铃命令。</ol><li>RING5：0xF800000000000008 F8: 共5位1，表示500ms的振铃 80000000000000：共55位0，表示5.5s的停止振铃  bit3：为1，表示节奏只执行一次，故振铃一下就会停止。</ol>",
					ViewErrorHint:"标有'X'字符串前的输入框内容不合法,请检查!!"
                },
                value:
                {
                    bt_refresh:"Refresh",
                    bt_apply:"Apply"
                },
                js_string:
                {
                    config_fail:"Ring set fail."
                }
            },
            h_setup_menu:
            {
                innerHTML:
                {
                    in_sn:"SLID设置",
                    in_loid:"LOID设置",
                    in_tr69:"Tr069设置",
                    in_ip:"IP设置",
                    in_port:"端口设置",
                    in_dhcp:"DHCP Relay",
                    in_pon:"PON设置",
                    link_switch:"Switch设置",
                    
                    link_vlan:"Vlan 配置",
                    in_vlan_config:"Vlan 配置",
                    in_vlan_table:"Vlan 表",
                    
                    link_qos:"Qos 配置",
                    in_alg:"算法",
                    in_usr_pri_map:"优先级映射",
                    in_port_pri:"端口优先级",
                    in_usr_pri_regen:"优先级再生",
                    in_mc_config:"多播配置",
                    in_mac:"地址表",
                    in_broadcast:"风暴抑制",
                    in_longlight:"常发光",
                    in_verupdate:"批量升级",
                    in_machide:"Mac 隐藏设置",
                    in_maxlen:"MTU 设置",
                    in_acl:"ACL 设置",
                    in_mac:"MAC地址限制",
                    in_qinq:"VLAN嵌套设置"
                }
            },
            h_sys_menu:
            {
                innerHTML:
                {
                    in_over:"系统状态",
                    in_ctc:"CTC配置信息",
                    in_gpon_info:"GPON连接信息"
                }
            },
            h_user_menu:
            {
                innerHTML:
                {
                    in_admin:"帐号管理"
                }
            },
            h_qos_alg:
            {
                title:"Qos 配置 >> 算法",
                innerHTML:
                {
                    in_hd:"Qos 配置 &gt;&gt; 算法",
                    txt_step:"正在加载.....",
                    in_alg:"算法",
                    in_scheme:"调度策略",
                    in_en:"启用",
                    in_bound:"最高优先级边界值",
                    in_cycle:"周期长度",
                    in_services:"业务个数",

                    in_ser1:"业务1",
                    in_queue1:"队列",
                    in_fps1:"队列包长",
                    in_fb1:"固定带宽",
                    in_gb1:"保证带宽",
                    in_bb1:"突发带宽",
                    in_weight1:"权值",

                    in_ser2:"业务2",
                    in_queue2:"队列",
                    in_fps2:"队列包长",
                    in_fb2:"固定带宽",
                    in_gb2:"保证带宽",
                    in_bb2:"突发带宽",
                    in_weight2:"权值",

                    in_ser3:"业务3",
                    in_queue3:"队列",
                    in_fps3:"队列包长",
                    in_fb3:"固定带宽",
                    in_gb3:"保证带宽",
                    in_bb3:"突发带宽",
                    in_weight3:"权值",

                    in_ser4:"业务4",
                    in_queue4:"队列",
                    in_fps4:"队列包长",
                    in_fb4:"固定带宽",
                    in_gb4:"保证带宽",
                    in_bb4:"突发带宽",
                    in_weight4:"权值",
                    
                    in_ser5:"业务5",
                    in_queue5:"队列",
                    in_fps5:"队列包长",
                    in_fb5:"固定带宽",
                    in_gb5:"保证带宽",
                    in_bb5:"突发带宽",
                    in_weight5:"权值",

                    in_ser6:"业务6",
                    in_queue6:"队列",
                    in_fps6:"队列包长",
                    in_fb6:"固定带宽",
                    in_gb6:"保证带宽",
                    in_bb6:"突发带宽",
                    in_weight6:"权值",

                    in_ser7:"业务7",
                    in_queue7:"队列",
                    in_fps7:"队列包长",
                    in_fb7:"固定带宽",
                    in_gb7:"保证带宽",
                    in_bb7:"突发带宽",
                    in_weight7:"权值",

                    in_ser8:"业务8",
                    in_queue8:"队列",
                    in_fps8:"队列包长",
                    in_fb8:"固定带宽",
                    in_gb8:"保证带宽",
                    in_bb8:"突发带宽",
                    in_weight8:"权值"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply_alg:"应用"
                },              
                js_string:
                {
                    str_set_alg:"更改算法",
                    set_ok:"成功",
                    set_fail:"失败"
                }
            },  
            h_poe_info:
            {
                title:"端口PoE状态",
                innerHTML:
                {
                    in_hd:"端口PoE状态",
                    txt_step:"正在加载.....",
                    in_usr_pri:"端口",
                    in_queue_map:"供电状态"
                },
                value:
                {
                    bt_refresh:"刷新"
                }
            },     
            h_sn_conf:
            {
                title:"SLID 设置",
                innerHTML:
                {
                    in_hd:"SLID 设置",
                    txt_step:"正在加载.....",
                    in_sn:"SN:",
                    in_td_sn:"SN:",
                    in_sn_com:"12个字符",
                    in_pass:"SLID:",
                    in_td_pass:"SLID:",
                    in_td_mode:"SLID Mode:",
                    bt_dis:"若启用新设置的SLID，请重启ONU"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    set_assci_mode_note1:"最大10个字符",
                    set_assci_mode_note2:"例如：abcdefg123",
                    set_hex_mode_note1:"最大20个字符",
                    set_hex_mode_note2:"例如：00112233445566778899",
                    set_config:"更改配置",
                    str_set_ok:"成功.",
                    set_failed:"失败."
                }
            },
            h_loid_conf:
            {
                title:"LOID 设置",
                innerHTML:
                {
                    in_hd:"LOID 设置",
                    txt_step:"正在加载.....",
                    in_loid:"Loid:",
                    in_td_loid:"Loid:",
                    in_loid_com:"24个字符",
                    in_pass:"密码:",
                    in_td_pass:"密码:",
                    in_pass_com:"12个字符",
                    bt_dis:"若启用新设置的密码，请重启ONU"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                js_string:
                {
                    set_config:"更改配置",
                    str_set_ok:"成功.",
                    set_failed:"失败.",
                    str_enter_error:"不合法"
                }
            },
            h_tr069_conf:
            {
                title:"Tr069 设置",
                innerHTML:
                {
                    in_hd:"Tr069 设置",
                    txt_step:"正在加载.....",
                    in_user_url_value:"ACS用户URL:",
                    in_user_name_value:"ACS用户名:",
                    in_password_value:"ACS用户密码:",
                    in_req_conn_user_value:"用户名:",
                    in_req_conn_password_value:"用户密码:",
                    in_req_url:"请求URL:",
                    in_req_conn_status:"连接状态:",
                    in_vlan_id:"VLAN ID:",
                    in_default_sn:"DEFAULT SN:",
                    in_wan_ip:"WAN IP:",
                    in_mask_ip:"MASK:",
                    in_dns_ip:"DNS:",
                    in_router_ip:"GATEWAY:",
                    in_ip_mode:"MODE TYPE:",
                    in_reverse_auth:"REVERSE AUTH:"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用",
                    bt_apply1:"应用",
                    bt_reverse_auth:"手动上报"
                },
                js_string:
                {
                    set_config:"更改配置",
                    str_set_ok:"成功.",
                    set_failed:"失败.",
                    str_enter_error:"不合法"
                }
            },
            h_ports:
            {
                title:"端口设置",
                innerHTML:
                {
                    in_hd:"端口设置",
                    txt_step:"正在加载.....",
                    
                    in_port:"端口号",
                    in_link:"连接",
                    in_negst:"模式",
                    in_enabl:"使能",
                    in_PoeEnabl:"PoE控制",
                    in_pause:"流控",
                    in_isolate:"隔离状态",
                    in_pri:"优先级",
                    in_ingress_rate:"上行速率",
                    in_down_rate:"下行速率",
                    in_pir:"下行最大速率",
                    in_cbs:"上行桶深",
                    in_ebs:"上行突发值",
                    
                    in_td_port:"端口号",
                    in_td_enabl:"使能状态",
                    in_td_PoeEnabl:"PoE控制",
                    in_td_pause:"流控",
                    in_td_isolate:"端口隔离",
                    in_td_pri:"端口优先级",
                    in_td_ingress_rate:"端口上行速率",
                    in_td_down_rate:"端口下行速率",
                    in_td_pir:"下行最大速率",
                    in_td_cbs:"上行桶深",
                    in_td_ebs:"上行突发值",
                    in_td_negst:"端口模式"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                option_text:
                {
                    enable:["禁用", "激活"],
                    isolate:["隔离", "未隔离"],
                    poeenable:["禁用", "激活"],
                    pause:["禁用", "激活"],
                    neg_ct:[ "10M/半双工", "100M/半双工", "1000M/半双工", "10M/全双工", "100M/全双工", "1000M/全双工", "自动协商"]
                },
                js_string:
                {
                    str_set:"更改端口配置",
                    set_ok:"成功.",
                    str_pvid_err:"错误的PVID.",
                    str_ingress_rate_err:"错误的上行速率值.",
                    str_ingress_rate_err:"错误的下行速率值.",
                    set_fail:"失败."
                }
            },
            h_ctc:
            {
                title:"CTC配置信息",
                innerHTML:
                {
                    in_hd:"CTC配置信息",
                    txt_step:"正在加载.....",
                    
                    in_igmp:"IGMP 模式:&nbsp;",
                    in_leave:"IGMP 快速离开:&nbsp;",
                    in_port:"端口号",
                    in_link:"连接",
                    in_up:"上行管制",
                    in_down:"下行限速",
                    in_ingress_rate:"速率",
                    in_enabl:"使能",
                    in_pause:"流控",
                    in_vidm:"VLAN 模式",
                    in_vid:"VID",
                    in_strip:"组播剥离",
                    in_max:"组播最大数"
                },
                value:
                {
                    bt_refresh:"刷新"
                },
                js_string:
                {
                    str_set:"更改端口配置",
                    set_ok:"成功.",
                    str_pvid_err:"错误的PVID.",
                    str_ingress_rate_err:"错误的上行速率值.",
                    set_fail:"失败.",

                    igmp_arr:["SNOOPING","CTC"],
                    leave_arr:["关闭","启用"],
                    up_arr:["禁用","激活"],
                    down_arr:["禁用","激活"],
                    en_arr:["禁用","激活"],
                    pause_arr:["禁用","激活"],
                    vlanm_arr:["透传模式","标记模式","转换模式","N:1转换","过滤模式","中兴过滤模式","中兴混杂模式","无"],
                    strip_arr:["剥除","不剥除","透传"],
                    neg_ct_arr:["10M", "100M", "1000M", "10M", "100M", "1000M"]
                }               
            },
            h_ppp_setup:
            {
                title:"PPPoE+ 设置",
                innerHTML:
                {
                    in_hd:"PPPoE+ 设置",
                    txt_step:"正在加载.....",
                    
                    in_num:"端口",
                    in_cvlan:"状态",
                    in_td_num:"端口",
                    in_td_cvlan:"状态",
                    in_td_cvlan2:"全局设定"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_add:"应用",
                    bt_add2:"应用"
                },
                js_string:
                {
                    str_set:"改变pppoe+设定 ",
                    set_ok:"成功.",
                    str_type_err:"ppp值错误 .",
                    set_fail:"失败."
                },              
                option_text:
                {
                    cvlan_val:["禁用", "激活"],
                    cvlan_val2:["禁用", "激活"]
                }
            },

            h_dhcp_setup:
            {
                title:"DHCP Relay 设置",
                innerHTML:
                {
                    in_hd:"DHCP Relay 设置",
                    txt_step:"正在加载.....",
                    
                    in_num:"端口",
                    in_cvlan:"DHCP Relay状态",
                    in_td_num:"端口",
                    in_td_cvlan:"状态",
                    in_td_cvlan2:"全局设定"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_add:"应用",
                    bt_add2:"应用"
                },
                js_string:
                {
                    str_set:"改变DHCP Relay设定 ",
                    set_ok:"成功.",
                    str_type_err:"ppp值错误 .",
                    set_fail:"失败."
                },              
                option_text:
                {
                    cvlan_val:["禁用", "激活"],
                    cvlan_val2:["禁用", "激活"]
                }
            },
            h_broadcast:
            {
                title:"风暴抑制",
                innerHTML:
                {
                    in_hd:"风暴抑制",
                    txt_step:"正在加载.....",
                    
                    in_port:"端口号",
                    in_enabl:"风暴抑制状态",
                    in_mode:"风暴抑制模式",
                    in_rate:"风暴限速",
                    
                    in_td_port:"端口号",
                    in_td_enabl:"风暴抑制状态",
                    in_td_mode:"风暴抑制模式",
                    in_td_rate:"风暴限速"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_apply:"应用"
                },
                option_text:
                {
                    enable:["禁用", "激活"],
                    mode:["未知单播", "广播", "未知单播+广播", "组播", "未知单播+组播", "广播+组播", "未知单播+广播+组播"]
                },
                js_string:
                {
                    str_set:"更改风暴抑制配置",
                    set_ok:"成功.",
                    str_ingress_rate_err:"错误的速率值.",
                    set_fail:"失败."
                }
            },
            h_qinq_setup:
            {
                title:"VLAN嵌套设置",
                innerHTML:
                {
                    in_hd:"VLAN嵌套设置",
                    txt_step:"正在加载.....",
                    
                    in_num:"端口号",
                    in_field:"域",
                    in_value:"值",
                    in_svlan:"服务VLAN",
                    in_td_num:"端口号",
                    in_td_field:"域",
                    in_td_value:"值",
                    in_td_svlan:"服务VLAN"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_add:"增加",
                    bt_del:"删除"
                },
                js_string:
                {
                    str_set:"更改VLAN嵌套设置",
                    set_ok:"成功.",
                    str_type_err:"错误的输入值.",
                    set_fail:"失败."
                },               
                option_text:
                {
                    mode:["端口","客户VLAN","以太网类型","客户VLAN+以太网类型","VLAN优先级"]
                }
            },
            h_mac_setup:
            {
                title:"用户MAC过滤设置",
                innerHTML:
                {
                    in_hd:"用户MAC过滤设置",
                    txt_step:"正在加载.....",

                    in_vid:"VLAN",
                    in_mac:"MAC地址",
                    in_port:"端口",
                    in_td_vid:"VLAN",
                    in_td_mac:"MAC地址",
                    in_td_port:"端口"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_add:"增加",
                    bt_del:"删除"
                },
                js_string:
                {
                    str_set:"更改MAC过滤设置",
                    set_ok:"成功.",
                    str_type_err:"错误的输入值.",
                    set_fail:"失败."
                }               
            },
            h_acl_setup:
            {
                title:"ACL 设置",
                innerHTML:
                {
                    in_hd:"ACL 设置",
                    txt_step:"正在加载.....",
                    
                    in_type:"类别",
                    in_port:"端口",
                    in_prec:"规则优先级",
                    in_fiel:"域",
                    in_oper:"操作",
                    in_valu:"值",
                    in_prio:"重标记优先级",
                    in_td_type:"类别",
                    in_td_port:"端口",
                    in_td_prec:"规则优先级",
                    in_td_fiel:"域",
                    in_td_oper:"操作",
                    in_td_valu:"值",
                    in_td_note:'例如: "hh:hh:hh:..."',
                    in_td_prio:"重标记优先级"
                },
                value:
                {
                    bt_refresh:"刷新",
                    bt_add:"增加",
                    bt_del:"删除"
                },
                js_string:
                {
                    str_set:"更改ACL设置",
                    set_ok:"成功.",
                    str_type_err:"错误的输入值.",
                    set_fail:"失败.",
                    sugg_decimalNum:"说明：所输入的值为十进制数",
                    sugg_sixteenNum:'例如: "hh:hh:hh:..."',
                    sugg_ipvalue:'例如:"192.168.1.1"',
                    str_not_support:"不支持的操作类型"

                },               
                option_text:
                {
                    type:["REMARK", "ACL"],
                    fiel:["目的MAC地址", "源MAC地址", "802.1Q优先级", "VLAN", "以太网类型", "目的IPv4地址", "源IPv4地址", "IP协议类型", "IPV4包中DSCP", "IP版本", "源端口", "目的端口", "目的IPV6地址", "源IPV6地址", "下一协议类型", "跳限度", "流量类别", "流标签", "源IPv6端口", "目的IPv6端口", "IPv6包DIP前缀", "IPv6包SIP前缀"],
                    oper:["相等","总是匹配"]
                }
            },
            h_sysst:
            {
                title:"系统状态",
                innerHTML:
                {
                    in_hd:"系统状态",
                    txt_step:"正在加载.....",
                    
                    in_td_type:"型号:",
                    in_td_onu_conn_st:"PON连接状态:",
                    
                    in_td_reg_st:"注册状态:",
                    in_td_llid:"LLID:",
                    
                    in_td_uptime:"ONU运行时间",             
                    in_td_onu_ip:"ONU IP地址:",             
                    in_td_onu_netmask:"ONU子网掩码:",               
                    in_td_onu_mac:"ONU MAC地址:",               
                    in_td_flash_chksum:"Flash校验和:",              
                    in_td_eeprom_chksum:"EEPROM校验和:",        
                            
                    in_td_app_ver:"软件版本:",              
                    in_td_fm_ver:"固件版本:",               
                    in_td_oam_ver:"OAM版本:",           
                        
                    in_onu_sn:"ONU序列号",              
                    in_td_onu_vendor_id:"厂商ID:",              
                    in_td_onu_model:"ONU Model:",               
                    in_td_onu_id:"ONU ID:",             
                    in_td_onu_hw_ver:"硬件版本:",               
                    in_td_onu_soft_ver:"软件版本:",             
                    in_td_onu_fm_ver:"固件版本:",   
                                
                    in_chip_id:"芯片编号",              
                    in_td_chipset_vendor_id:"厂商编号:",                
                    in_td_chipset_chip_model:"芯片Model:",              
                    in_td_chipset_rev:"修订版:",                
                    in_td_chipset_ic_ver:"IC版本/日期:",        
                            
                    in_onu_capa:"ONU性能",              
                    in_td_capabi_service_supported:"支持的服务:",               
                    in_td_capabi_ge_num:"千兆端口数量:",                
                    in_td_capabi_ge_bitmap:"千兆端口分布:",             
                    in_td_capabi_fe_num:"百兆端口数量:",                
                    in_td_capabi_fe_bitmap:"百兆端口分布:",             
                    in_td_capabi_pots_num:"POTS端口数量:",              
                    in_td_capabi_e1_num:"E1端口数量:",              
                    in_td_capabi_us_que_num:"上行队列数:",              
                    in_td_capabi_max_us_queue:"每端口上行最大队列数:",              
                    in_td_capabi_ds_que_num:"下行队列数:",              
                    in_td_capabi_max_ds_queue:"每端口下行最大队列数:",              
                    in_td_capabi_battery_backup:"备用电池:",                
                    in_td_afec_ability:"前向纠错能力:",             
                    in_td_fec_mode:"前向纠错状态:"
                },
                value:
                {
                    bt_refresh:"刷新"
                },
                js_string:
                {
                    onu_conn_st_arr : ["断开", "连接"],
                    reg_st_arr      : ["注销", "注册"],
                    disable_arr     : ["禁用", "激活"],
                    uptime_arr      : ["日", "小时", "分", "秒"],
                    battery_arr     : ["无", "有"],
                    afec_ability_arr: ["未知", "支持", "不支持"],
                    fec_mode_arr    : ["未知", "禁用", "激活"]
                }
            },
            h_gpon_info:
            {
                title:"GPON连接信息",
                innerHTML:
                {
                    in_hd:"GPON连接信息",
                    txt_step:"加载.....",
                    
                    in_connection_info:"GPON连接信息",
                    in_line_status:"GPON链路连接状态:",
                    in_loid_status:"LOID验证状态:",                    
                    in_up_fec:"上行FEC:",
                    in_down_fec:"下行 FEC:",              
                    in_encrypt:"加密模式:", 
                    
                    in_optic_info:"光模块信息",               
                    in_temp:"温度:",               
                    in_voltage:"电压:",               
                    in_current:"电流:",      
                    in_tx_power:"发送光功率:",  
                    in_rx_power:"接收光功率"            
                },
                value:
                {
                    bt_refresh:"刷新"
                },
                js_string:
                {
                    loid_auth_status:["初始状态", "注册成功", "LOID不存在", "PASSWORD错误", "LOID冲突"]
                }
            },
            h_admin:
            {
                title:"帐号管理",
                innerHTML:
                {
                    in_hd:"帐号管理",
                    txt_step:"正在加载.....",
                    
                    in_intro:"只有管理员可以修改ONU配置.",
                    in_user:"用户名",
                    in_pass:"密码",
                    in_priv:"权限",
                    in_td_user:"用户名:",
                    in_td_pass:"密码:",
                    in_td_priv:"权限:"
                },
                value:
                {
                    bt_chg:"改变",
                    bt_add:"增加",
                    bt_del:"删除"
                },
                js_string:
                {
                    str_chgpwd:"配置帐号信息",
                    str_ok:"成功.",
                    str_failed:"失败.",
                    str_default:"不能改变缺省用户",
                    str_err:"错误的输入."
                }
            },
            h_snmp:
            {
                title:"SNMP设置",
                innerHTML:
                {
                    in_hd:"SNMP设置",
                    txt_step:"正在加载.....",
                    
                    in_intro:"简单网络管理协议允许通过SNMP代理设备来管理、统计数据等. ",
                    in_username:"SNMP 代理:",
                    in_stop:"关闭",
                    in_start:"启动",
                    in_permit:"访问级别",
                    in_comm:"团体名"
                },
                value:
                {
                    bt_apply:"应用"
                },
                js_string:
                {
                    str_chgpwd:"改变SNMP设置 ",
                    str_ok:"成功.",
                    snmp_st_arr : ["可读", "可写", "读写"],
                    str_failed:"失败."
                }
            }
        }
    ]
}

