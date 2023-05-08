# Dial Button Macro

This Webex Device macro creates a single speed dial button on your devices touch interface.

![image](https://user-images.githubusercontent.com/21026209/213460048-d8881f80-61fd-41be-88aa-95139b728929.png)

## Overview

This Webex Device macro programmatically adds a UI Extension button to your Webex Device and then listens for when it has been clicked. Once clicked, the macro will then dial the target number specified in the macros config. Below is an extract of the macros config, which lets you easily customise this macro on your device and for your use case.

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


## Setup

### Prerequisites & Dependencies: 

- RoomOS/CE 9.6.x or above Webex Device.
- Web admin access to the device to upload the macro.


### Installation Steps:
1. Download the ``dial-button.js`` file and upload it to your Webex Room devices Macro editor via the web interface.
2. Configure the Macro by changing the initial values, there are comments explaining each one.
3. Enable the Macro on the editor.
4. (Optional) - Hide all other native UI buttons and calling options, refer to these two device configurations:
  - https://roomos.cisco.com/xapi/Configuration.UserInterface.Features.HideAll
  - https://roomos.cisco.com/xapi/Configuration.RoomScheduler.Enabled

## Validation

Validated Hardware:

* Room Kit Pro
* Desk Pro
* Desk Hub
* Room Kit

This macro should work on other Webex Devices but has not been validated at this time.


## Demo

*For more demos & PoCs like this, check out our [Webex Labs site](https://collabtoolbox.cisco.com/webex-labs).


## License

All contents are licensed under the MIT license. Please see [license](LICENSE) for details.


## Disclaimer

Everything included is for demo and Proof of Concept purposes only. Use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for. These demos are for Cisco Webex use cases, but are not Official Cisco Webex Branded demos.


## Questions
Please contact the WXSD team at [wxsd@external.cisco.com](mailto:wxsd@external.cisco.com?subject=dial-button-macro) for questions. Or, if you're a Cisco internal employee, reach out to us on the Webex App via our bot (globalexpert@webex.bot). In the "Engagement Type" field, choose the "API/SDK Proof of Concept Integration Development" option to make sure you reach our team. 
