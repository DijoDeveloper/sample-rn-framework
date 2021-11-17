# INSTALL STEPS


1. yarn install (to install the dependencies).
2. yarn android:dev (create a debug build)

# POST INSTALL SCRIPTS

## Create AutoLoadPath file in configs

1. run "yarn autload dump" on root of the project
# Connecting to Android Device through Network

1. Connect the device via USB and make sure debugging is working;
2. adb tcpip 5555. This makes the device to start listening for connections on port 5555;
3. Look up the device IP address with adb shell netcfg or adb shell ifconfig with 6.0 and higher;
4. You can disconnect the USB now;
5. adb connect <DEVICE_IP_ADDRESS>:5555. This connects to the server we set up on the device on step 2;

Now you have a device over the network with which you can debug as usual.

To switch the server back to the USB mode, run adb usb, which will put the server on your phone back to the USB mode. If you have more than one device, you can specify the device with the -s option: adb -s <DEVICE_IP_ADDRESS>:5555 usb.

# Creating Branch from a commit

git clone --single-branch --branch <branchname> <remote-repo>

# Framework Architecture

[Architecture of the application](docs/eo-arch.png)

