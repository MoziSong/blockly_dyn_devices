Blockly.Blocks['device1'] = {
  init: function() {
    var PROPERTIES = [["analoginone", "AONE"], ["analogintwo", "ATWO"]];
    this.appendDummyInput('')
        .appendField("device1."); //The text field for the device name
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
    if (portInput == 'AONE') { //if the module A-ONE is selected
	if(!this.getInput('P_AONE')){ //if the property list for A-ONE is not present
	    this.appendDummyInput('P_AONE')
	        .appendField('.')
	        .appendField(new Blockly.FieldDropdown([['input1','IN1'],['input2','IN2']]), "PROP_AONE");
		//generate property list for A-ONE
	}
	if(this.getInput('P_ATWO')){this.removeInput('P_ATWO');}
	//if the property list for the other module(s) is(are) present, then delete it(them)
    }
    else if(portInput == 'ATWO'){
	if(!this.getInput('P2')){
	    this.appendDummyInput('P2')
	   	.appendField('.')
	    	.appendField(new Blockly.FieldDropdown([['input3','IN3'],['input4','IN4']]), "PROP_ATWO");
	}
	if(this.getInput('P_AONE')){this.removeInput('P_AONE');}
    }
  },
 /*creating XML of current status*/
  mutationToDom: function() {
    var container = document.createElement('mutation');
    var portInput = (this.getFieldValue('PROPERTY') == 'AONE');
    /*if(this.getFieldValue('PROPERTY') == 'AONE'){
  	  container.setAttribute('PROP_AONE', 'true');
	  container.setAttribute('PROP_ATWO', 'false');
      }*/
    container.setAttribute('PROP_AONE', portInput);
    container.setAttribute('PROP_ATWO', !portInput);
    return container;
  }, 
 /*retrieving information from XML and calling function to work with dyna. drop-down lists*/
  domToMutation: function(xmlElement) {
    console.log('domToMutation: xmlELE.getAttribute(prop1)='+xmlElement.getAttribute('PROP1'));
    var portInput = (xmlElement.getAttribute('PROP_AONE') == 'true')?'AONE':'ATWO';
    //var portInput;
    //if(xmlElement.getAttribute('PROP_AONE') == 'true'){portInput = 'AONE'};
    //if(xmlElement.getAttribute('PROP_ATWO') == 'true'){portInput = 'ATWO'};
    this.dynamicOptions(portInput);  
  }
};
