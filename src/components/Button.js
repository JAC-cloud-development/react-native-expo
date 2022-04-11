import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const Button = ({text, onPress}) => {

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
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
