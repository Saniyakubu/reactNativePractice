import { StyleSheet, Image } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { Tabs, Link } from 'expo-router';
import { Text, View } from '../../components/Themed';

export default function Home() {
  const { url } = useGlobalSearchParams<{ url: string }>();
  console.log(url);
  return (
    <View>
      <Text>Home</Text>
      <Image style={{ width: 350, height: 200 }} source={{ uri: url }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
