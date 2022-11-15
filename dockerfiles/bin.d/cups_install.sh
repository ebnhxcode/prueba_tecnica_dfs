#!/bin/bash

sudo apt-get -y install cups printer-driver-cups-pdf #cups-pdf
sudo lpadmin -p cups-pdf -v cups-pdf:/ -E -P /usr/share/ppd/cups-pdf/CUPS-PDF.ppd
lpstat -t
lpstat -p -d

# Test printer
# lp -d PDF testfile.txt
