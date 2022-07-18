import React from "react";
import "./App.css";

function isDeviceAvailiable() {
  if (!navigator.bluetooth) {
    console.log("Bluetooth is not available!");
    return false;
  } else {
    console.log("Bluetooth is available!");
    return true;
  }
}

function getDevice() {
  // var deviceName = "tren abuser";
  let options = {
    acceptAllDevices: true,
    // filters: [{ name: deviceName }],
  };
  console.log("Requesting Device Info...");
  navigator.bluetooth
    .requestDevice(options)
    .then((device) => {
      console.log("Name: " + device.name);
    })
    .catch((error) => {
      console.log("Error Message: " + error);
    });
}

function listener() {
  if (isDeviceAvailiable()) {
    return getDevice();
  }
}

function App() {
  return (
    <div className='App'>
      <button onClick={listener}>Connect</button>
    </div>
  );
}

export default App;
