
var express = require('express');
var app = express();
var fs = require('fs');
app.get('/', function(req, res) {
  fs.readFile("mozi_demo.html", 'utf8', function(err, text){
      console.log(text);
      res.setHeader("Content-Type", "text/html");
      res.end(text);
    });
});

app.use(express.static(__dirname));
app.listen(8080);

var apiUrl = "http://localhost:3000/api/";

var inputs = {devices:[]};
var outputs = {devices:[]};

/****** DEVICES *****/

/*
    Retrieves devices from API
 */
function getDevices(callback) {
    $.get( apiUrl+"devices", function( data ) {
        callback(data);
    });
}

/*
    Handles a single device
 */
function handleDevice(device){
    console.log("device: "+device.config.info.userID);
    var inputPrps = {id:device.config.info.userID,ports:[]};
    var outputPrps = {id:device.config.info.userID,ports:[]}; 
    for(port in device.config.ports){
 	if(device.config.ports[port].state != null && Object.keys(device.config.ports[port].state).length != 0){
		var inputPort = {id:device.config.ports[port].state.info.userID,props:[]};
		var outputPort = {id:device.config.ports[port].state.info.userID,props:[]};
		if(device.config.ports[port].state.state.input != null){
			for(prop in device.config.ports[port].state.state.input){
				inputPort.props.push({prop:device.config.ports[port].state.state.input});
			}
			//write module into INPUT array
		}
		if(device.config.ports[port].state.state.output != null){
			for(prop in device.config.ports[port].state.state.output){
			    outputPort.props.push({prop:device.config.ports[port].state.state.output});
			}
			//write module into OUTPUT array
		}
		if(inputPort.props.length > 0){
			inputPrps.ports.push(inputPort);
		}
		if(outputPort.props.length > 0){
			outputPrps.ports.push(outputPort);
		}
	}
    }
    if(inputPrps.ports.length > 0){inputs.devices.push(inputPrps);}
    if(outputPrps.ports.length > 0){outputs.devices.push(outputPrps);}
    console.log(inputs);
    console.log(outputs);
}

function writeDeviceBlock(){
    console.log("requiring");
    var fs = require('fs');
    fs.writeFile("/test", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
}


