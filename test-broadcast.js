var Wimoto = require('./index');
var WimotoBroadcast = Wimoto.Broadcast;


WimotoBroadcast.on('data', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

WimotoBroadcast.startScanning();
