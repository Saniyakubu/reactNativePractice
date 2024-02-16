import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useNavigation } from "expo-router";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
SplashScreen.preventAutoHideAsync();

const Home = () => {
  const navigation = useNavigation();
  const [appIsReady, setAppIsReady] = useState(false);

  const { width, height } = useWindowDimensions();
  console.log("width", width, "height", height);
  setTimeout(() => {
    setAppIsReady(true);
    console.log(appIsReady);
  }, 1000);

  useEffect(() => {
    console.log(appIsReady);
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  return (
    <SafeAreaView style={{ marginTop: 70, flex: 1 }}>
      <Text>Home</Text>
      {/* 
      <View
        style={{
          width: width,
          height: height < 500 ? 230 : 200,
          backgroundColor: "tomato",
          padding: width > 500 ? 80 : 60,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Text
          style={{
            fontSize: width < 500 ? 30 : 40,
            color: "white",
            fontWeight: "bold",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          My Name Is Sani
        </Text>
        <Text
          style={{
            fontSize: hp(3.9),
            color: "#f0ffff",
            fontWeight: "bold",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
          }}
        >
          My Name Is Speedy
        </Text>
      </View> */}

      <View
        style={{
          width: "80%",
          // height: 50,
          aspectRatio: 1,
          backgroundColor: "tomato",
          marginLeft: "auto",
          marginRight: "auto",
          // padding: width > 500 ? 80 : 60,
        }}
      ></View>

      <Link
        href={"/page2"}
        style={{
          fontSize: width > 500 ? 30 : 20,
          paddingLeft: width > 500 ? 50 : 5,
        }}
      >
        Go to page 2
      </Link>
      <Text>{"\n"}</Text>
      <Link
        style={{
          fontSize: width > 500 ? 30 : 20,
          paddingLeft: width > 500 ? 50 : 5,
        }}
        href={"/page/page1/22"}
      >
        Go to page 1
      </Link>

      <Text
        style={{
          fontSize: width > 500 ? 30 : 20,
          paddingLeft: width > 500 ? 50 : 5,
        }}
        onPress={() => navigation.navigate("tab1")}
      >
        Go to second screen
      </Text>
      <Text
        style={{
          fontSize: width > 500 ? 30 : 20,
          paddingLeft: width > 500 ? 50 : 5,
        }}
        onPress={() => navigation.navigate("page/page1")}
      >
        Go to second screen
      </Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  Link: {
    fontSize: 20,
  },
});
