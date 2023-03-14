# Dial Button Macro

Welcome to our WXSD DEMO Repo! <!-- Keep this here --> 

This Webex Device macro creates a single speed dial button on your devices touch interface.

![image](https://user-images.githubusercontent.com/21026209/213460048-d8881f80-61fd-41be-88aa-95139b728929.png)


It is easy to configure and delpoy without the need to upload a seperate UI Extension file to the device.

```javascript
const config = {
  targetNumber: 'user@example.com', // The target number which will be dialled
  buttoName: 'Queue Button',        // The text displayed below the button
  buttonIcon: 'Helpdesk',           // The buttons icon, check UI Extention Editor for more options
  buttonColor: '#148579',           // The buttons color in Hex format
  panelId: 'queue-button'           // A unique panel Id so not to conflict with other buttons
}
```

With additional configuration, the Webex Devices other calling icons can also be removed so only your custom dial button is available.

![image](https://user-images.githubusercontent.com/21026209/213461826-f41dcbf8-0242-4e85-82d9-d41f4ecb5027.png)


<!-- Keep the following here -->  
 *_Everything included is for demo and Proof of Concept purposes only. Your use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex usecases, but are not Official Cisco Webex Branded demos._


## Requirements

1. RoomOS/CE 9.6.x or above Webex Device.
2. Web admin access to the device to uplaod the macro.


## Setup

1. Download the ``dial-button.js`` file and upload it to your Webex Room devices Macro editor via the web interface.
2. Configure the Macro by changing the initial values, there are comments explaining each one.
3. Enable the Macro on the editor.

## Validation

Validated Hardware:

* Room Kit Pro
* Desk Pro
* Desk Hub
* Room Kit

This macro should work on other Webex Devices but has not been validated at this time.

## Support

Please reach out to the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=dial-button-macro)
