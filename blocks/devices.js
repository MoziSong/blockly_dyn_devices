Blockly.Blocks['ArduinoFiov2IN'] = {
  init: function() {
    var PROPERTIES = [["DigitalINOne", "DIGITALINONE"],["AnalogINOne", "ANALOGINONE"]];
    this.setColour(120);
    this.setOutput(true);
    this.appendDummyInput('')
        .appendField("ArduinoFiov2."); //The text field for the device name
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
       var portInput = option;
       this.sourceBlock_.dynamicOptions(portInput); 
       //calling dynamicOptions to work on properties dropdown
    }); 
    this.appendDummyInput('')
        .appendField(dropdown, 'PROPERTY'); //dropdown list to choose modules 
    this.setInputsInline(true);
    this.setTooltip('');
  },
  dynamicOptions: function(portInput) {
    if (portInput == 'DIGITALINONE') { //if this module is selected
	if(!this.getInput('P_DIGITALINONE')){ //if the property list for DIGITALINONE is not present
	    this.appendDummyInput('P_DIGITALINONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["boolValue", "BOOLVALUE"]]), "PROP_DIGITALINONE");
		//generate property list for DIGITALINONE
	}
	if(this.getInput('P_ANALOGINONE')){this.removeInput('P_ANALOGINONE');}
    }
    if (portInput == 'ANALOGINONE') { //if this module is selected
	if(!this.getInput('P_ANALOGINONE')){ //if the property list for ANALOGINONE is not present
	    this.appendDummyInput('P_ANALOGINONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["voltage", "VOLTAGE"]]), "PROP_ANALOGINONE");
		//generate property list for ANALOGINONE
	}
	if(this.getInput('P_DIGITALINONE')){this.removeInput('P_DIGITALINONE');}
    }
  },
 /*creating XML of current status--mutationToDom here*/
  mutationToDom: function() {
    var container = document.createElement('mutation');
    if(this.getFieldValue('PROPERTY') == 'DIGITALINONE'){
  	  container.setAttribute('PROP_DIGITALINONE', 'true');
	  container.setAttribute('PROP_ANALOGINONE', 'false');
      }
    if(this.getFieldValue('PROPERTY') == 'ANALOGINONE'){
  	  container.setAttribute('PROP_ANALOGINONE', 'true');
	  container.setAttribute('PROP_DIGITALINONE', 'false');
      }
    return container;
  }, 
 /*retrieving information from XML and calling function to work with dyna. drop-down lists*/
   domToMutation: function(xmlElement) {
    var portInput;
    if(xmlElement.getAttribute('PROP_DIGITALINONE') == 'true'){portInput = 'DIGITALINONE'};
    if(xmlElement.getAttribute('PROP_ANALOGINONE') == 'true'){portInput = 'ANALOGINONE'};
    this.dynamicOptions(portInput);  
  }
};
Blockly.Blocks['RaspberryPiIN'] = {
  init: function() {
    var PROPERTIES = [["WebDisplayOne", "WEBDISPLAYONE"],["Example", "EXAMPLE"]];
    this.setColour(120);
    this.setOutput(true);
    this.appendDummyInput('')
        .appendField("RaspberryPi."); //The text field for the device name
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
       var portInput = option;
       this.sourceBlock_.dynamicOptions(portInput); 
       //calling dynamicOptions to work on properties dropdown
    }); 
    this.appendDummyInput('')
        .appendField(dropdown, 'PROPERTY'); //dropdown list to choose modules 
    this.setInputsInline(true);
    this.setTooltip('');
  },
  dynamicOptions: function(portInput) {
    if (portInput == 'WEBDISPLAYONE') { //if this module is selected
	if(!this.getInput('P_WEBDISPLAYONE')){ //if the property list for WEBDISPLAYONE is not present
	    this.appendDummyInput('P_WEBDISPLAYONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["fileserverIP", "FILESERVERIP"]]), "PROP_WEBDISPLAYONE");
		//generate property list for WEBDISPLAYONE
	}
	if(this.getInput('P_EXAMPLE')){this.removeInput('P_EXAMPLE');}
    }
    if (portInput == 'EXAMPLE') { //if this module is selected
	if(!this.getInput('P_EXAMPLE')){ //if the property list for EXAMPLE is not present
	    this.appendDummyInput('P_EXAMPLE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["voltage", "VOLTAGE"]]), "PROP_EXAMPLE");
		//generate property list for EXAMPLE
	}
	if(this.getInput('P_WEBDISPLAYONE')){this.removeInput('P_WEBDISPLAYONE');}
    }
  },
 /*creating XML of current status--mutationToDom here*/
  mutationToDom: function() {
    var container = document.createElement('mutation');
    if(this.getFieldValue('PROPERTY') == 'WEBDISPLAYONE'){
  	  container.setAttribute('PROP_WEBDISPLAYONE', 'true');
	  container.setAttribute('PROP_EXAMPLE', 'false');
      }
    if(this.getFieldValue('PROPERTY') == 'EXAMPLE'){
  	  container.setAttribute('PROP_EXAMPLE', 'true');
	  container.setAttribute('PROP_WEBDISPLAYONE', 'false');
      }
    return container;
  }, 
 /*retrieving information from XML and calling function to work with dyna. drop-down lists*/
   domToMutation: function(xmlElement) {
    var portInput;
    if(xmlElement.getAttribute('PROP_WEBDISPLAYONE') == 'true'){portInput = 'WEBDISPLAYONE'};
    if(xmlElement.getAttribute('PROP_EXAMPLE') == 'true'){portInput = 'EXAMPLE'};
    this.dynamicOptions(portInput);  
  }
};
Blockly.Blocks['ArduinoFiov3IN'] = {
  init: function() {
    var PROPERTIES = [["DigitalINOne", "DIGITALINONE"],["AnalogINOne", "ANALOGINONE"]];
    this.setColour(120);
    this.setOutput(true);
    this.appendDummyInput('')
        .appendField("ArduinoFiov3."); //The text field for the device name
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
       var portInput = option;
       this.sourceBlock_.dynamicOptions(portInput); 
       //calling dynamicOptions to work on properties dropdown
    }); 
    this.appendDummyInput('')
        .appendField(dropdown, 'PROPERTY'); //dropdown list to choose modules 
    this.setInputsInline(true);
    this.setTooltip('');
  },
  dynamicOptions: function(portInput) {
    if (portInput == 'DIGITALINONE') { //if this module is selected
	if(!this.getInput('P_DIGITALINONE')){ //if the property list for DIGITALINONE is not present
	    this.appendDummyInput('P_DIGITALINONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["boolValue", "BOOLVALUE"]]), "PROP_DIGITALINONE");
		//generate property list for DIGITALINONE
	}
	if(this.getInput('P_ANALOGINONE')){this.removeInput('P_ANALOGINONE');}
    }
    if (portInput == 'ANALOGINONE') { //if this module is selected
	if(!this.getInput('P_ANALOGINONE')){ //if the property list for ANALOGINONE is not present
	    this.appendDummyInput('P_ANALOGINONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["voltage", "VOLTAGE"]]), "PROP_ANALOGINONE");
		//generate property list for ANALOGINONE
	}
	if(this.getInput('P_DIGITALINONE')){this.removeInput('P_DIGITALINONE');}
    }
  },
 /*creating XML of current status--mutationToDom here*/
  mutationToDom: function() {
    var container = document.createElement('mutation');
    if(this.getFieldValue('PROPERTY') == 'DIGITALINONE'){
  	  container.setAttribute('PROP_DIGITALINONE', 'true');
	  container.setAttribute('PROP_ANALOGINONE', 'false');
      }
    if(this.getFieldValue('PROPERTY') == 'ANALOGINONE'){
  	  container.setAttribute('PROP_ANALOGINONE', 'true');
	  container.setAttribute('PROP_DIGITALINONE', 'false');
      }
    return container;
  }, 
 /*retrieving information from XML and calling function to work with dyna. drop-down lists*/
   domToMutation: function(xmlElement) {
    var portInput;
    if(xmlElement.getAttribute('PROP_DIGITALINONE') == 'true'){portInput = 'DIGITALINONE'};
    if(xmlElement.getAttribute('PROP_ANALOGINONE') == 'true'){portInput = 'ANALOGINONE'};
    this.dynamicOptions(portInput);  
  }
};
Blockly.Blocks['RaspberryPiOUT'] = {
  init: function() {
    var PROPERTIES = [["WebDisplayOne", "WEBDISPLAYONE"],["Example", "EXAMPLE"]];
    this.setColour(240);
    this.setOutput(true);
    this.appendDummyInput('')
        .appendField("RaspberryPi."); //The text field for the device name
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
       var portInput = option;
       this.sourceBlock_.dynamicOptions(portInput); 
       //calling dynamicOptions to work on properties dropdown
    }); 
    this.appendDummyInput('')
        .appendField(dropdown, 'PROPERTY'); //dropdown list to choose modules 
    this.setInputsInline(true);
    this.setTooltip('');
  },
  dynamicOptions: function(portInput) {
    if (portInput == 'WEBDISPLAYONE') { //if this module is selected
	if(!this.getInput('P_WEBDISPLAYONE')){ //if the property list for WEBDISPLAYONE is not present
	    this.appendDummyInput('P_WEBDISPLAYONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["showURL", "SHOWURL"],["showText", "SHOWTEXT"]]), "PROP_WEBDISPLAYONE");
		//generate property list for WEBDISPLAYONE
	}
	if(this.getInput('P_EXAMPLE')){this.removeInput('P_EXAMPLE');}
    }
    if (portInput == 'EXAMPLE') { //if this module is selected
	if(!this.getInput('P_EXAMPLE')){ //if the property list for EXAMPLE is not present
	    this.appendDummyInput('P_EXAMPLE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["showURL", "SHOWURL"],["showText", "SHOWTEXT"]]), "PROP_EXAMPLE");
		//generate property list for EXAMPLE
	}
	if(this.getInput('P_WEBDISPLAYONE')){this.removeInput('P_WEBDISPLAYONE');}
    }
  },
 /*creating XML of current status--mutationToDom here*/
  mutationToDom: function() {
    var container = document.createElement('mutation');
    if(this.getFieldValue('PROPERTY') == 'WEBDISPLAYONE'){
  	  container.setAttribute('PROP_WEBDISPLAYONE', 'true');
	  container.setAttribute('PROP_EXAMPLE', 'false');
      }
    if(this.getFieldValue('PROPERTY') == 'EXAMPLE'){
  	  container.setAttribute('PROP_EXAMPLE', 'true');
	  container.setAttribute('PROP_WEBDISPLAYONE', 'false');
      }
    return container;
  }, 
 /*retrieving information from XML and calling function to work with dyna. drop-down lists*/
   domToMutation: function(xmlElement) {
    var portInput;
    if(xmlElement.getAttribute('PROP_WEBDISPLAYONE') == 'true'){portInput = 'WEBDISPLAYONE'};
    if(xmlElement.getAttribute('PROP_EXAMPLE') == 'true'){portInput = 'EXAMPLE'};
    this.dynamicOptions(portInput);  
  }
};
Blockly.Blocks['ArduinoFiov3OUT'] = {
  init: function() {
    var PROPERTIES = [["DigitalOUTOne", "DIGITALOUTONE"],["DigitalOUTTwo", "DIGITALOUTTWO"],["DigitalOUT4", "DIGITALOUT4"],["PWMOutOne", "PWMOUTONE"]];
    this.setColour(240);
    this.setOutput(true);
    this.appendDummyInput('')
        .appendField("ArduinoFiov3."); //The text field for the device name
    var dropdown = new Blockly.FieldDropdown(PROPERTIES, function(option) {
       var portInput = option;
       this.sourceBlock_.dynamicOptions(portInput); 
       //calling dynamicOptions to work on properties dropdown
    }); 
    this.appendDummyInput('')
        .appendField(dropdown, 'PROPERTY'); //dropdown list to choose modules 
    this.setInputsInline(true);
    this.setTooltip('');
  },
  dynamicOptions: function(portInput) {
    if (portInput == 'DIGITALOUTONE') { //if this module is selected
	if(!this.getInput('P_DIGITALOUTONE')){ //if the property list for DIGITALOUTONE is not present
	    this.appendDummyInput('P_DIGITALOUTONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["boolValue", "BOOLVALUE"]]), "PROP_DIGITALOUTONE");
		//generate property list for DIGITALOUTONE
	}
	if(this.getInput('P_DIGITALOUTTWO')){this.removeInput('P_DIGITALOUTTWO');}
	if(this.getInput('P_DIGITALOUT4')){this.removeInput('P_DIGITALOUT4');}
	if(this.getInput('P_PWMOUTONE')){this.removeInput('P_PWMOUTONE');}
    }
    if (portInput == 'DIGITALOUTTWO') { //if this module is selected
	if(!this.getInput('P_DIGITALOUTTWO')){ //if the property list for DIGITALOUTTWO is not present
	    this.appendDummyInput('P_DIGITALOUTTWO')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["boolValue", "BOOLVALUE"]]), "PROP_DIGITALOUTTWO");
		//generate property list for DIGITALOUTTWO
	}
	if(this.getInput('P_DIGITALOUTONE')){this.removeInput('P_DIGITALOUTONE');}
	if(this.getInput('P_DIGITALOUT4')){this.removeInput('P_DIGITALOUT4');}
	if(this.getInput('P_PWMOUTONE')){this.removeInput('P_PWMOUTONE');}
    }
    if (portInput == 'DIGITALOUT4') { //if this module is selected
	if(!this.getInput('P_DIGITALOUT4')){ //if the property list for DIGITALOUT4 is not present
	    this.appendDummyInput('P_DIGITALOUT4')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["boolValue", "BOOLVALUE"]]), "PROP_DIGITALOUT4");
		//generate property list for DIGITALOUT4
	}
	if(this.getInput('P_DIGITALOUTONE')){this.removeInput('P_DIGITALOUTONE');}
	if(this.getInput('P_DIGITALOUTTWO')){this.removeInput('P_DIGITALOUTTWO');}
	if(this.getInput('P_PWMOUTONE')){this.removeInput('P_PWMOUTONE');}
    }
    if (portInput == 'PWMOUTONE') { //if this module is selected
	if(!this.getInput('P_PWMOUTONE')){ //if the property list for PWMOUTONE is not present
	    this.appendDummyInput('P_PWMOUTONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([["pwmValue", "PWMVALUE"]]), "PROP_PWMOUTONE");
		//generate property list for PWMOUTONE
	}
	if(this.getInput('P_DIGITALOUTONE')){this.removeInput('P_DIGITALOUTONE');}
	if(this.getInput('P_DIGITALOUTTWO')){this.removeInput('P_DIGITALOUTTWO');}
	if(this.getInput('P_DIGITALOUT4')){this.removeInput('P_DIGITALOUT4');}
    }
  },
 /*creating XML of current status--mutationToDom here*/
  mutationToDom: function() {
    var container = document.createElement('mutation');
    if(this.getFieldValue('PROPERTY') == 'DIGITALOUTONE'){
  	  container.setAttribute('PROP_DIGITALOUTONE', 'true');
	  container.setAttribute('PROP_DIGITALOUTTWO', 'false');
	  container.setAttribute('PROP_DIGITALOUT4', 'false');
	  container.setAttribute('PROP_PWMOUTONE', 'false');
      }
    if(this.getFieldValue('PROPERTY') == 'DIGITALOUTTWO'){
  	  container.setAttribute('PROP_DIGITALOUTTWO', 'true');
	  container.setAttribute('PROP_DIGITALOUTONE', 'false');
	  container.setAttribute('PROP_DIGITALOUT4', 'false');
	  container.setAttribute('PROP_PWMOUTONE', 'false');
      }
    if(this.getFieldValue('PROPERTY') == 'DIGITALOUT4'){
  	  container.setAttribute('PROP_DIGITALOUT4', 'true');
	  container.setAttribute('PROP_DIGITALOUTONE', 'false');
	  container.setAttribute('PROP_DIGITALOUTTWO', 'false');
	  container.setAttribute('PROP_PWMOUTONE', 'false');
      }
    if(this.getFieldValue('PROPERTY') == 'PWMOUTONE'){
  	  container.setAttribute('PROP_PWMOUTONE', 'true');
	  container.setAttribute('PROP_DIGITALOUTONE', 'false');
	  container.setAttribute('PROP_DIGITALOUTTWO', 'false');
	  container.setAttribute('PROP_DIGITALOUT4', 'false');
      }
    return container;
  }, 
 /*retrieving information from XML and calling function to work with dyna. drop-down lists*/
   domToMutation: function(xmlElement) {
    var portInput;
    if(xmlElement.getAttribute('PROP_DIGITALOUTONE') == 'true'){portInput = 'DIGITALOUTONE'};
    if(xmlElement.getAttribute('PROP_DIGITALOUTTWO') == 'true'){portInput = 'DIGITALOUTTWO'};
    if(xmlElement.getAttribute('PROP_DIGITALOUT4') == 'true'){portInput = 'DIGITALOUT4'};
    if(xmlElement.getAttribute('PROP_PWMOUTONE') == 'true'){portInput = 'PWMOUTONE'};
    this.dynamicOptions(portInput);  
  }
};
