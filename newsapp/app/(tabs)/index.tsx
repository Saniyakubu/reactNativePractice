import Header from '../../components/header';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import FetchData from '../../components/Data';
import { SafeAreaView, StyleSheet } from 'react-native';
export default function TabOneScreen() {
  console.log(process.env.EXPO_PUBLIC_API_KEY);
  return (
    <SafeAreaView className=" flex-1 mb-24 pb-10">
      <Header />
      <FetchData />
    </SafeAreaView>
  );
}
