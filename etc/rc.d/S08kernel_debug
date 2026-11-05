#! /bin/sh /etc/rc.common

START=08

start() {
	ulimit -c 1024
	echo 5 > /proc/sys/kernel/panic
	echo 1 > /proc/sys/kernel/panic_on_oops
	echo 1 > /proc/sys/kernel/core_uses_pid
	mkdir -p /var/config/kernel
	echo /var/config/kernel/core-%e-%p-%t > /proc/sys/kernel/core_pattern
	#set the max number of message queue
	echo 64 >  /proc/sys/kernel/msgmni
	echo 131072 >  /proc/sys/kernel/msgmnb
}
