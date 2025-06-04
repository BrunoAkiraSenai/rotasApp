//fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from "@react-navigation/native";
//importando as funções da rota stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: { backgroundColor: "#FFF" },
          drawerActiveBackgroundColor: "000",
          drawerActiveTintColor: "#FFF",
          drawerInactiveBackgroundColor: "#FFF",
          drawerInactiveTintColor: "#000",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerIcon: ({ color, size }) => {},
          }}
        />
        <Drawer.Screen
          name="Sobre"
          component={Sobre}
          options={{
            drawerIcon: ({ color, size }) => {
              return <Feather name="home" size={size} color={color} />;
            },
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
