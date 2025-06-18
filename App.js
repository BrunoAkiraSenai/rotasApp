//fornece o componente que vai envolver nossa navegação!
import { NavigationContainer } from "@react-navigation/native";
//importando as funções da rota stack
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/Home";
import Sobre from "./src/pages/Sobre";
import Erro from "./src/pages/Erro";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="Erro" component={Erro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
