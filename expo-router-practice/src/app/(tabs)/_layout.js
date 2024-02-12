import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
const TabsLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "main",
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="logo-windows" size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "black",
        }}
      />

      <Tabs.Screen
        name="tab1"
        options={{
          tabBarLabel: "about",
          tabBarIcon: ({ size, color }) => {
            return <Ionicons name="person" size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "black",
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
