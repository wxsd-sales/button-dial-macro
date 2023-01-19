/********************************************************
Copyright (c) 2022 Cisco and/or its affiliates.
This software is licensed to you under the terms of the Cisco Sample
Code License, Version 1.1 (the "License"). You may obtain a copy of the
License at
               https://developer.cisco.com/docs/licenses
All use of the material herein must be in accordance with the terms of
the License. All rights not expressly granted by the License are
reserved. Unless required by applicable law or agreed to separately in
writing, software distributed under the License is distributed on an "AS
IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
or implied.
*********************************************************
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
 * More information available here:
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
        <Type>Statusbar</Type>
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
