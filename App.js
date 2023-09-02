import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import ExploreScreen from './ExploreScreen'; 
import AddUserScreen from './AddUserScreen'; 
import UserDetailsScreen from './UserDatailsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExploreStack = () => (
  <Stack.Navigator>
      <Stack.Screen name='ExploreScreen' component={ExploreScreen} />
      <Stack.Screen name='UserDetails' component={UserDetailsScreen} />
  </Stack.Navigator>
)

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Explore" component={ExploreStack} />
        <Tab.Screen name="Add User" component={AddUserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
