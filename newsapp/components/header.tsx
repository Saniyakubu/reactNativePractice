import { Text, View } from './Themed';
// import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from './Themed';
import { TextProps } from './Themed';
import { StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ContextData } from '../ContextApi/Context';

export default function Header(props: TextProps) {
  const news = useContext(ContextData);

  function length() {
    if (news) {
      const newsLength = news.length.toString();
      return newsLength;
    }
  }

  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');
  return (
    <View>
      <View style={styles.header}>
        <Text className=" font-bold text-lg">Home</Text>
        <View className=" relative">
          <Ionicons
            className=" z-0"
            name="notifications"
            size={24}
            color={color}
          />
          <View className="absolute  z-30 -top-2 right-5">
            <Text className=" font-bold shadow-lg ">{length()}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
  },
});
