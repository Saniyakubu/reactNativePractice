import { Text, View, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles3 } from '../../styles/style';
import { RefreshControl, ScrollView } from 'react-native';
function Weather() {
  return (
    <ScrollView
      style={styles3.view}
      RefreshControl={<RefreshControl refreshing={true} colors={['yellow']} />}
    >
      <Feather name="sun" size={24} color="black" />
      <View style={styles3.wrapper}>
        <Text>Hello</Text>
      </View>
      <View style={styles3.end}>
        <Text>End</Text>
      </View>
    </ScrollView>
  );
}

export default Weather;
