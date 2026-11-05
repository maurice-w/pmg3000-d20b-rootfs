#!/bin/sh /etc/rc.common

START=07
STOP=93

export PATH='/sbin:/usr/sbin:/bin:/usr/bin:/opt/lantiq/bin:/usr/local/bin'
export LD_LIBRARY_PATH=/lib:/usr/lib:/usr/local/lib
EGIS_TAR_FILE="egis_file.tar.gz"

check_file()
{
	local files='egis egis/config egis/config/goi_config egis/optic egis/optic/goi_table_laser_ref.csv egis/optic/goi_age egis/optic/goi_table_pth_corr.csv egis/optic/goi_table_rssi1490_corr.csv egis/optic/goi_table_laser_ref_base.csv egis/optic/goi_table_text_corr.csv egis/optic/goi_table_rf1550_corr.csv egis/optic/goi_table_mpd_resp_corr.csv egis/optic/goi_config.sh'

	cd /tmp
	
	for file in ${files}; do
		if [ ! -e ${file} ]; then
			return 1
		fi
	done

	return 0
}

boot() {
	cd /tmp
	egistool -e ${EGIS_TAR_FILE}
	tar xzf ${EGIS_TAR_FILE}
	check_file
	if [ $? -eq 1 ]; then
		cp -fr /etc/default/egis /tmp/egis
		echo "load file from egis failed!!!" > egis_error
	fi
}
