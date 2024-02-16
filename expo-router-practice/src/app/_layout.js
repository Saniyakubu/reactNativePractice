import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="page2"
        options={{
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "tomato",
          },
          headerBackTitle: "back",
          headerBackTitleStyle: {
            fontSize: 20,
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
        name="page/page1"
        options={{
          title: "page 1",
          headerStyle: {
            backgroundColor: "blue",
          },
          headerShadowVisible: false,
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
    </Stack>
  );
};

export default RootLayout;
