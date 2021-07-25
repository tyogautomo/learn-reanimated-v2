import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import {
  PanGesture,
  Home,
  Worklet,
  Transitions
} from './screenConfigs';

type MainStackParamTypes = {
  Home: undefined;
  PanGesture: { title: string };
  Worklet: { title: string };
  Transitions: { title: string }
}

const Stack = createStackNavigator<MainStackParamTypes>();

const options = ({ route }: { route: any }) => {
  return {
    title: route.params.title
  };
};

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Worklet" component={Worklet} {...{ options }} />
      <Stack.Screen name="PanGesture" component={PanGesture} />
      <Stack.Screen name="Transitions" component={Transitions} {...{ options }} />
    </Stack.Navigator>
  );
};

export { MainNavigator };
