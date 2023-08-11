import { StyleSheet } from 'react-native';
import { Tabs, Link } from 'expo-router';
import { Text, View } from '../../components/Themed';
import { useLocalSearchParams } from 'expo-router';
import { useRouter } from 'expo-router';
import EditScreenInfo from '../../components/EditScreenInfo';
import FontAwesome from '@expo/vector-icons/FontAwesome';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabThreeScreen() {
  const { name, pageThree } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Tabs.Screen
        options={{
          title: 'page 3',
          tabBarIcon: ({ color }) => <TabBarIcon name="inbox" color={color} />,
        }}
      />
      <Text style={styles.title}>Tab Tree</Text>
      <Text> Three</Text>
      <Text>
        Hello {name} @{pageThree}
      </Text>
      <Link href={'/'}>
        <Text>Go To Home</Text>
      </Link>
      <EditScreenInfo path={`app/(tabs)/${pageThree}.tsx`} />
      <Text onPress={() => router.back()}>back</Text>
      <Text onPress={() => router.push('/modal')}>modal</Text>
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
