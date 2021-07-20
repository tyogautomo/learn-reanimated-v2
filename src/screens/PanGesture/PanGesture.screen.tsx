import React, { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text } from 'react-native';

type ScreenParams = {
  title: string;
}

const PanGesture: React.FC<{ pageName: string }> = () => {
  const route = useRoute();
  const navigation = useNavigation();

  useEffect(() => {
    const title = (route.params as ScreenParams).title;
    navigation.setOptions({ title: title });
  });

  return (
    <View>
      <Text>This is first page</Text>
    </View>
  );
};

export { PanGesture };
