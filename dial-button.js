/********************************************************
 * 
 * Macro Author:      	William Mills
 *                    	Technical Solutions Specialist 
 *                    	wimills@cisco.com
 *                    	Cisco Systems
 * 
 * Version: 1-0-0
 * Released: 01/19/23
 * 
 * This macro creates a single speed dial button on your Webex Devices.
 * It will dial a target number which you can configure below.
 * 
 * It also lets you easily change the button name/color/icon
 * 
 * Full Readme, source code and license agreement available on Github:
 * https://github.com/wxsd-sales/dial-button-macro
 * 
 ********************************************************/

import xapi from 'xapi';

/*********************************************************
 * Configure the settings below
**********************************************************/

const config = {
  targetNumber: 'user@example.com',   // The target number which will be dialled
  buttoName: 'Queue Button',          // The text displayed below the button
  buttonIcon: 'Helpdesk',              // The buttons icon, check UI Extention Editor for more options
  buttonColor: '#148579',              // The buttons color in Hex format
  panelId: 'queue-button'             // A unique panel Id so not to conflict with other buttons
}

/*********************************************************
 * The functions below create the button and add event 
 * listener for clicks.
**********************************************************/

createPanel();
xapi.Event.UserInterface.Extensions.Panel.Clicked.on(processClicks);

function processClicks(event) {
  if (event.PanelId != config.panelId) return;
  console.log(`Button [${config.buttoName}] clicked, dialling number: [${config.targetNumber}]`)
  xapi.Command.Dial({ Number: config.targetNumber });
}

async function createPanel() {
  const panel = `
    <Extensions>
      <Panel>
        <Location>HomeScreen</Location>
        <Icon>${config.buttonIcon}</Icon>
        <Color>${config.buttonColor}</Color>
        <Name>${config.buttoName}</Name>
        <ActivityType>Custom</ActivityType>
      </Panel>
    </Extensions>`
  xapi.Command.UserInterface.Extensions.Panel.Save(
    { PanelId: config.panelId },
    panel
  )
    .catch(e => console.log('Error saving panel: ' + e.message))
}
