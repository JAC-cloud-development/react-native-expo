import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Button} from '../components/Button';

export const CoinDetailPage = ({navigation, route}) => {
  const params = route.params;
  const coin = params.coin
  console.log({params})
  console.log({passedCoin: coin})

  const onGoBack = () => {
    navigation.pop(1)
  }
  const onGoBackToTop = () => {
    navigation.popToTop()
  }
  const onGoToCoinDetail = () => {
    navigation.push('CoinDetail')
  }

  return (
    <View style={styles.container}>
      <Text>COIN DETAIL</Text>
      <Text style={{fontSize: 40}}>{coin.name}</Text>
      <Button onPress={onGoBack} text={'POP'}/>
      <Button onPress={onGoBackToTop} text={'POP TO TOP'}/>
      <Button onPress={onGoToCoinDetail} text={'PUSH Coin Detail'}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    borderWidth: 4,
    borderColor: 'black'
  },
});
