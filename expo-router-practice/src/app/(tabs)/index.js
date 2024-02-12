import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Text>{"\n"}</Text>
      <Link href={"/page2"}>Go to page 2</Link>
      <Text>{"\n"}</Text>
      <Link href={"/page/page1"}>Go to page 1</Link>
    </View>
  );
};

export default Home;
