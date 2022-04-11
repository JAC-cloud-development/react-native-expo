import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity} from 'react-native';
import LIST from './coins'
console.log({LIST})

export const CoinList = ({onPressCoin}) => {

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {LIST.map(coin => {
          return (
            <TouchableOpacity onPress={() => onPressCoin(coin)} key={coin.name} style={styles.coin} >
              <Text>{coin.name}</Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView >
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
  coin: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
