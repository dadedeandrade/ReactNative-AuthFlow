import { Button } from "react-native";
import { AuthProvider, useAuth } from "./app/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./app/screens/Home";
import Login from "./app/screens/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./app/screens/Details";

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Layout></Layout>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export const Layout = () => {
  const { authState, onLogout } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: () => <Button onPress={onLogout} title="Sair" />,
              headerTitle: "",
            }}
          ></Stack.Screen>
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          ></Stack.Screen>
        )}
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Button
                title="Voltar"
                onPress={() => navigation.navigate("Home")}
              />
            ),
            headerTitle: "Details",
          })}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
