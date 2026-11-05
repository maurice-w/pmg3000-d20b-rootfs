#/bin/sh

msg=$1
echo "$msg" > /dev/console
for f in `find /dev/pts/ -type c`; do
    echo "$msg" > $f
done
