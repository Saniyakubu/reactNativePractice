import { StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native';
import { useState, useEffect } from 'react';
export default function TabTwoScreen() {
  const { url } = useLocalSearchParams<{ url: string }>();
  const [list, setList]: any = useState<any>([]);
  console.log(list);
  /* async function getData() {
    const res: any = await fetch('http://jsonplaceholder.typicode.com/posts');
    console.log(res);
    if (!res.ok) throw new Error('failed to fetch');
    const data: any = await res.json();
    setList(data);
  } */

  console.log(url);
  return <Text style={styles.title}>Tab Two</Text>;
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
