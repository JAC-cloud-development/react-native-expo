import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import {CoinList} from '../components/coinList';
import {Button} from '../components/Button';

export const CoinListPage = ({navigation}) => {

  const onGoToCoinDetail = (coin) => {
    console.log({coin})
    navigation.push('CoinDetail', {coin})
  }

  return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      <StatusBar style="auto" />
      <Text>COIN LIST</Text>
      {/*<Button onPress={onGoToCoinDetail} text={'Go to Coin Detail'}/>*/}
      <CoinList onPressCoin={onGoToCoinDetail}/>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  button: {
    width: 150,
    height: 50,
    borderRadius: 10,
    backgroundColor: 'green',
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
