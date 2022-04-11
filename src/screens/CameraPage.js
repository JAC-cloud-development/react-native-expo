import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Camera } from 'expo-camera';
import {Button} from '../components/Button';
import {BarCodeScanner} from 'expo-barcode-scanner';

export const CameraPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onCreatePhoto = () => {
    console.log({cameraRef})
  }
  const onScanBar = (bar) => {
    console.log({bar})
  }
  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type}
              onBarCodeScanned={onScanBar}
              barCodeScannerSettings={{
                barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr, BarCodeScanner.Constants.BarCodeType.bar],
              }}>
        <View style={styles.buttonContainer}>
          <Button onPress={onCreatePhoto} text={'New photo'}/>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    width: '100%'
  },
  buttonContainer: {
    backgroundColor: 'red',
    height: 50,
    width: '100%'
  }

});
