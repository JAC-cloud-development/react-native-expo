import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Button = ({text, onPress, children, style, imageSource}) => {

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text>{text}</Text>
      {children}
      {imageSource && <Image source={imageSource} />}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10
  }
});
