#!/bin/sh /etc/rc.common

START=06
STOP=94

export PATH='/sbin:/usr/sbin:/bin:/usr/bin:/opt/lantiq/bin:/usr/local/bin'
export LD_LIBRARY_PATH=/lib:/usr/lib:/usr/local/lib
CFGMTD=`cat /proc/mtd | grep "Config" | awk -F : '{print $1;}' | sed s/mtd//`

boot() {
	mkdir -p /var/config
	mkdir -p /var/run
	mkdir -p /var/log

	mount -t jffs2 /dev/mtdblock${CFGMTD} /var/config > /dev/null 2>&1
	if [ $? -eq 0 ] ; then
		echo "mount config partition OK" > /dev/null 2>&1
	else
		echo -e "\033[033mMount Config partition fail, erase it and mount again\033[0m"
		mtd erase /dev/mtd${CFGMTD}
		mount -t jffs2 -o sync /dev/mtdblock${CFGMTD} /var/config > /dev/null 2>&1
	fi

	dmesg | grep "JFFS2 notice:" | grep "jffs2_get_inode_nodes: Node header CRC failed at"> /dev/null 2>&1
	if [ $? -eq 0 ]; then
		echo -e "\033[031mJffs2 filesystem error, erase Config partition and mount again\033[0m"
		mtd erase /dev/mtd${CFGMTD}
		mount -t jffs2 -o sync /dev/mtdblock${CFGMTD} /var/config > /dev/null 2>&1
	fi
}
