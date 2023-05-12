import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ManageExpense from './screens/expenses/ManageExpenses';
import ExpensesContextProvider from './store/store';
import LoginScreen from './screens/user/LoginScreen';
import SignOutScreen from './screens/user/SignOutScreen';
import ExpensesOverview from './screens/expenses/ExpensesOverview'

const Stack = createNativeStackNavigator();

export default function App({navigation}) {
  return (
    <>
      <StatusBar style="auto" />
      <ExpensesContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ExpensesOverview"
              component={ExpensesOverview}
              options={{ headerShown: false }}
              // Pass the navigation prop to ExpensesOverview component
              initialParams={{ navigation: navigation }}
            />
            <Stack.Screen name="ManageExpense" component={ManageExpense} />
            <Stack.Screen name="SignOut" component={SignOutScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ExpensesContextProvider>
    </>
  );
}

