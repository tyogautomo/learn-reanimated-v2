import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { PanGesture, Home, Worklet } from './screenConfigs';

type MainStackParamTypes = {
  Home: undefined;
  PanGesture: { title: string };
  Worklet: { title: string };
}

const Stack = createStackNavigator<MainStackParamTypes>();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Worklet" component={Worklet} options={({ route }) => ({ title: route.params.title })} />
      <Stack.Screen name="PanGesture" component={PanGesture} />
    </Stack.Navigator>
  );
};

export { MainNavigator };
