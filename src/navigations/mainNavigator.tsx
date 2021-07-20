import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const MainNavigator: React.FC<{ name: string }> = ({ name }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="PanGesture" component={''} />
    </Stack.Navigator>
  );
};

export { MainNavigator };
