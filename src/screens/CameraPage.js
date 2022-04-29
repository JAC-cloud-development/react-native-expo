import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image, ScrollView} from 'react-native';
import { Camera } from 'expo-camera';
import {Button} from '../components/Button';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as MediaLibrary from 'expo-media-library';

export const CameraPage = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [pictures, setPictures] = useState([]);
  // const [status, requestPermission] = MediaLibrary.usePermissions();

  const cameraRef = useRef()

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    (async () => {
      console.log({MediaLibrary})
      const permission = await MediaLibrary.getPermissionsAsync()
      console.log({permission})
      const assets = await MediaLibrary.getAssetsAsync()
      console.log({assets})
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const onCreatePhoto = async () => {
    console.log({cameraRef})
    const newPhoto = await cameraRef.current.takePictureAsync()
    console.log({newPhoto})
    setPictures([...pictures, newPhoto.uri])
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
        {/*<View style={styles.buttonContainer}>*/}
        {/*  <Button onPress={onCreatePhoto} text={'New photo'}/>*/}
        {/*</View>*/}
      </Camera>




      <View style={{height: '100%', width: '100%', position: 'absolute', justifyContent: 'flex-end'}}>
        <View style={{flex: 1}}/>

        <View style={{height: 240, backgroundColor: 'white', alignItems: 'center'}}>
          <Button onPress={onCreatePhoto} text={'scatta'}/>
          <ScrollView horizontal={true}  contentContainerStyle={{height: 160}}>
            {pictures.map(picture => {
              return <Image source={{uri: picture}} style={styles.image}/>
            })}
          </ScrollView>
        </View>

      </View>
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
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    backgroundColor: 'red',
    height: 50,
    width: '100%',
  },
  image: {
    height: 150, width: 150,
    marginHorizontal: 10
  }

});
