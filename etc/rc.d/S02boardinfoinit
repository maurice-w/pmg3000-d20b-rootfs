#!/bin/sh /etc/rc.common

source /etc/egis_func.sh

egis_get_product_code_form_file()
{
	codeClass=`grep "codeClass" ${2} | awk -F '=' '{print $NF}'`
	codeHwInfo=`grep "codeHwInfo" ${2} | awk -F '=' '{print $NF}'`
	codePortMap=`grep "codePortMap" ${2} | awk -F '=' '{print $NF}'`
	codeExtend=`grep "codeExtend" ${2} | awk -F '=' '{print $NF}'`

	eval ${1}=${codeClass}:${codeHwInfo}:${codePortMap}:${codeExtend}
}

egis_product_code_check()
{
	local pc_in_flash
	local pc_in_file

	egis_get codeClass
	egis_get codeHwInfo
	egis_get codePortMap
	egis_get codeExtend
	pc_in_flash=${codeClass}:${codeHwInfo}:${codePortMap}:${codeExtend}
	pc_in_flash=`echo ${pc_in_flash} | tr 'A-Z' 'a-z'`
	egis_get_product_code_form_file pc_in_file ${1}
	pc_in_file=`echo ${pc_in_file} | tr 'A-Z' 'a-z'`
	if [ "${pc_in_flash}" != "${pc_in_file}" ]; then
		return 1
	fi
}

boot() {
	[ -e /etc/boardinfo.d/boardinfo-* ] || exit 0;
	
	for bi in `ls /etc/boardinfo.d/boardinfo-*`; do
		egis_product_code_check ${bi}
		if [ $? -eq 0 ]; then
			break;
		fi
	done
	
	for info in `sed 's/^[^#]/&/' ${bi}`; do
		tmp=`echo ${info} | tr 'A-Z' 'a-z' | awk -F "=" '{print $1}'`
		[ "${tmp}" = "codeclass" ]   && continue
		[ "${tmp}" = "codehwinfo" ]  && continue
		[ "${tmp}" = "codeportmap" ] && continue
		[ "${tmp}" = "codeextend" ]  && continue
		echo ${info} > /sys/class/egis/boardinfo
	done
}
