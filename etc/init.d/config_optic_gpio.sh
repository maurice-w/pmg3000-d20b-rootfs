#!/bin/sh

# request_gpio(2)
echo 2 > /sys/class/gpio/export

# gpio_direction_output(2, 1)
echo "high" > /sys/class/gpio/gpio2/direction

# gpio_direction_input(2)
# echo "in" > /sys/class/gpio/gpio2/direction

# get current direction
# cat /sys/class/gpio/gpio2/direction

# gpio_set_value(2, 1)
echo 1 > /sys/class/gpio/gpio2/value

# gpio_get_value(2)
# cat /sys/class/gpio/gpio2/value

# free_gpio(2)
echo 2 > /sys/class/gpio/unexport
