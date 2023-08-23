import { StyleSheet } from 'react-native';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useGlobalSearchParams } from 'expo-router';
import { useState } from 'react';
import { FlatList } from 'react-native';

export default function TabTwoScreen(): React.JSX.Element {
  const data: any = useGlobalSearchParams();
  console.log(data);
  const [savedData, setSavedData] = useState<dataType[]>(data);
  console.log(savedData);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FlatList
        data={savedData}
        renderItem={({ item }) => {
          const { title } = item;
          return <Text>{title}</Text>;
        }}
      />
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
