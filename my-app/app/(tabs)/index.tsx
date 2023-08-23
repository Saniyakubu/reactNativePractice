import { StyleSheet, FlatList } from 'react-native';
import { Link } from 'expo-router';
import { Text, View } from '../../components/Themed';
import { Image, Pressable } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { RefreshControl } from 'react-native';

export default async function TabOneScreen() {
  return (
    <SafeAreaProvider>
      <RefreshControl refreshing={true} colors={['yellow']} />
      <View style={styles.container}>
        <Text style={styles.title}>Tab One</Text>
        <Link
          href={{
            pathname: '/see',
            params: { name: 'sani', sunneame: 'yakubu' },
          }}
        >
          <Text>Go To Page 3</Text>
        </Link>
        <Link href={'/pages'}>
          <Text>Go To Home</Text>
        </Link>
        <Link
          href={{
            pathname: '/pages',
            params: {
              url: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
          }}
          asChild
        >
          <Pressable>
            {() => (
              <Image
                style={{ width: 250, height: 200 }}
                source={{
                  uri: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }}
              />
            )}
          </Pressable>
        </Link>
      </View>
    </SafeAreaProvider>
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
