//fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from "@react-navigation/native";
//importando as funções da rota stack
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveBackgroundColor: "purple",
          tabBarActiveTintColor: "black",
          tabBarStyle: {
            backgroundColor: "#fff",
            height: 50,
            position: "absolute",
            bottom: 50,
            borderTopEndRadius: 15,
            borderTopColor: "transparent",
            padding: 10,
            shadowColor: "purple",
            shadowoffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            elevation: 8,
            width: "80%",
            left: "10%",
            marginHorizontal: "10%",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => {
              return <FontAwesome name="home" size={size} color={color} />;
            },
            headerShown: false,
            title: "",
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Feather name="home" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
