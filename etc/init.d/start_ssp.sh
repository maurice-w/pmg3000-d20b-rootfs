#!/bin/sh
export PATH='/sbin:/usr/sbin:/bin:/usr/bin:/usr/local/bin:/opt/lantiq/bin'
export LD_LIBRARY_PATH=/lib:/usr/lib:/usr/local/lib

mkdir -p /var/config
mkdir -p /var/run
mkdir -p /var/log

CFGMTD=`cat /proc/mtd | grep "Config" | awk -F : '{print $1;}' | sed s/mtd//`

ulimit -c 1024
echo 5 > /proc/sys/kernel/panic
echo 1 > /proc/sys/kernel/panic_on_oops
echo 1 > /proc/sys/kernel/core_uses_pid
mkdir -p /var/config/kernel
echo /var/config/kernel/core-%e-%p-%t > /proc/sys/kernel/core_pattern
#wait for firmware load
sleep 2
#set the max number of message queue
echo 64 >  /proc/sys/kernel/msgmni
echo 131072 >  /proc/sys/kernel/msgmnb

if [ -e /var/config/5s.state ]; then
  rm -f /var/config/mib.conf
fi

if [ ! -e /var/config/mib.conf ]; then
  [ -e /etc/default/mib.conf ] && cp -f /etc/default/mib.conf /var/config/mib.conf
fi

if [ -e /var/config/soft_feature.conf ]; then
	/usr/local/bin/soft_feature /var/config/soft_feature.conf
	if [ $? -ne 0 ] ; then
		/usr/local/bin/soft_feature /soft_feature.conf
	fi
else
	/usr/local/bin/soft_feature /soft_feature.conf
fi

if [ -e /ont/gpon/tardev.ko ]; then
  sp=`cat /version|grep "Service Pack"|awk -F: '{print $2;}'|sed 's/ *//'|sed 's/ *$//'`
  insmod /ont/gpon/tardev.ko sp="$sp"
  major=`cat /proc/devices | awk "\\$2==\"tardev\" {print \\$1}"`  
  mknod /dev/tardev c $major 0
fi

if [ -e /var/config/run-syslog.sh ]; then
  sh /var/config/run-syslog.sh
fi

echo 8 > /sys/class/gpio/export
#onu lanpd 0
#onu mdiodw 0 9 1792
#onu lanpe 0
#onu mdiodw 0 9 1792


mkdir -p /tmp/etc
cp -f /etc/default/passwd /tmp/etc/passwd
cp -f /etc/default/group /tmp/etc/group
if [ -e /usr/local/bin/dropbear ]; then
  /usr/local/bin/dropbear -c /usr/local/bin/dropbear.script
fi

if [ ! -e /var/config/tr069_status_file.conf ]; then
  cp -f /etc/tr069_status_file /var/config/tr069_status_file.conf
fi
if [ ! -e /var/config/tr069_result_file.conf ]; then
  cp -f /etc/tr069_result_file /var/config/tr069_result_file.conf
fi
if [ ! -e /var/config/tr069_limit_file.conf ]; then
  cp -f /etc/tr069_limit_file /var/config/tr069_limit_file.conf
fi
if [ ! -e /var/config/tr069_times_file.conf ]; then
  cp -f /etc/tr069_times_file /var/config/tr069_times_file.conf
fi
if [ ! -e /var/config/tr069_event_status.conf ]; then
  cp -f /etc/tr069_event_status /var/config/tr069_event_status.conf
fi
if [ ! -e /var/config/tr069_cfg_file.conf ]; then
  cp -f /tr069_def_cfg_file /var/config/tr069_cfg_file.conf
fi

optic bosa_rx_disable > /dev/null
optic bosa_tx_disable > /dev/null
cd /usr/local/bin
/usr/local/bin/ssp > /dev/ttyLTQ0 2> /dev/ttyLTQ0
