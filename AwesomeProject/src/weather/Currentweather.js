import { Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles3 } from '../../styles/style';
function Weather() {
  return (
    <SafeAreaView style={styles3.view}>
      <Feather name="sun" size={24} color="black" />
      <View style={styles3.wrapper}>
        <Text>Hello</Text>
      </View>
      <View style={styles3.end}>
        <Text>End</Text>
      </View>
    </SafeAreaView>
  );
}

export default Weather;
