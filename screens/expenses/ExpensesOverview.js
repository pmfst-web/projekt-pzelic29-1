import { Ionicons } from '@expo/vector-icons';
import { useRoute} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllExpenses from './AllExpenses';
import RecentExpenses from './RecentExpenses';
import ExpensesByCategoryScreen from './ExpensesByCategoryScreen';
import ChartScreen from './ChartScreen';
import ButtonIcon from '../../components/UI/ButtonIcon';


const BottomTabs = createBottomTabNavigator();

function ExpensesOverview({userName}) {
  const route = useRoute();
  const navigation = route.params.navigation;
  return (
    <BottomTabs.Navigator
      screenOptions={({ navigation }) => ({
        headerRight: () => (
          <ButtonIcon
            icon="add"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate('ManageExpense');
            }}
          />
        ),
        headerLeft: () => (
          <ButtonIcon
            icon="log-out-outline"
            size={24}
            color="black"
            onPress={() => {
              navigation.navigate('SignOut', { userName: userName });
            }}
          />
        ),
      })}
    >
      <BottomTabs.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          title: 'Recent Expenses',
          tabBarLabel: 'Recent',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          title: 'All Expenses',
          tabBarLabel: 'All Expenses',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="card-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ExpenseByCategory"
        component={ExpensesByCategoryScreen}
        options={{
          title: 'Expenses by Category',
          tabBarLabel: 'Category',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pricetag-outline" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        name="ChartScreen"
        component={ChartScreen}
        options={{
          title: 'Chart',
          tabBarLabel: 'Chart',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="pie-chart-outline" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}
export default ExpensesOverview;