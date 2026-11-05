#! /bin/sh

EGIS_FILE=/sys/class/egis/data

egis_get()
{
	if [ $# -ne 1 -a $# -ne 6 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	local var=${1}
	if [ $# -eq 1 ]; then
		grep -i ${var} ${EGIS_FILE} >> /dev/null || exit $?
		eval ${1}=`grep -i ${var} ${EGIS_FILE} | awk '{print $3}'`
	else
		if [ ${2} -lt 10 ]; then
			grep -i "${var}\[ ${2}\]" ${EGIS_FILE} >> /dev/null
			if [ $? -ne 0 ]; then
				echo "ERROR: Invalid argument"
				exit $?
			fi
			eval ${1}=`grep -i "${var}\[ ${2}\]" ${EGIS_FILE} | awk '{print $4}'`
			eval ${3}=`grep -i "${var}\[ ${2}\]" ${EGIS_FILE} | awk '{print $5}'`
			eval ${4}=`grep -i "${var}\[ ${2}\]" ${EGIS_FILE} | awk '{print $6}'`
			eval ${5}=`grep -i "${var}\[ ${2}\]" ${EGIS_FILE} | awk '{print $7}'`
		else
			grep -i "${var}\[${2}\]" ${EGIS_FILE} >> /dev/null
			if [ $? -ne 0 ]; then
				echo "ERROR: Invalid argument"
				exit $?
			fi
			eval ${1}=`grep -i "${var}\[${2}\]" ${EGIS_FILE} | awk '{print $3}'`
			eval ${3}=`grep -i "${var}\[${2}\]" ${EGIS_FILE} | awk '{print $4}'`
			eval ${4}=`grep -i "${var}\[${2}\]" ${EGIS_FILE} | awk '{print $5}'`
			eval ${5}=`grep -i "${var}\[${2}\]" ${EGIS_FILE} | awk '{print $6}'`
		fi
	fi
}

egis_get_product_code()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi

	egis_get codeClass
	egis_get codeHwInfo
	egis_get codePortMap
	egis_get codeExtend

	eval ${1}=`echo ${codeClass}:${codeHwInfo}:${codePortMap}:${codeExtend} | tr 'A-Z' 'a-z'`
}

egis_get_version()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeClass || exit $?
	let "codeClass>>=28"
	let "codeClass&=0xF"
	eval ${1}=${codeClass}
}

egis_get_product_type()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeClass || exit $?
	let "codeClass>>=24"
	let "codeClass&=0xF"
	eval ${1}=${codeClass}
}

egis_get_pon_type()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeClass || exit $?
	let "codeClass>>=16"
	let "codeClass&=0xFF"
	eval ${1}=${codeClass}
}

egis_get_class_id()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeClass || exit $?
	let "codeClass&=0xFF"
	eval ${1}=${codeClass}
}

egis_get_pots_num()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=27"
	let "codeHwInfo&=0x1F"
	eval ${1}=${codeHwInfo}
}

egis_get_fe_num()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=22"
	let "codeHwInfo&=0x1F"
	eval ${1}=${codeHwInfo}
}

egis_get_ge_num()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=17"
	let "codeHwInfo&=0x3F"
	eval ${1}=${codeHwInfo}
}

egis_get_is_support_ups()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=16"
	let "codeHwInfo&=0x1"
	eval ${1}=${codeHwInfo}
}

egis_get_is_support_psd()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=15"
	let "codeHwInfo&=0x1"
	eval ${1}=${codeHwInfo}
}

egis_get_is_support_rf()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=14"
	let "codeHwInfo&=0x1"
	eval ${1}=${codeHwInfo}
}

egis_get_wifi_type()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=11"
	let "codeHwInfo&=0x3"
	eval ${1}=${codeHwInfo}
}

egis_get_usb_num()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo>>=7"
	let "codeHwInfo&=0x3"
	eval ${1}=${codeHwInfo}
}

egis_get_pcb_version()
{
	if [ $# -ne 1 ]; then
		echo "ERROR: Invalid argument"
		exit 1
	fi
	egis_get codeHwInfo || exit $?
	let "codeHwInfo&=0x3F"
	eval ${1}=${codeHwInfo}
}
