import React, { useEffect } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { PanGestureHandlerEventPayload, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay
} from 'react-native-reanimated';
import { View } from 'react-native';

import { styles } from './PanGesture.styles';
import { Card } from '../../components/Card/Card.component';

type ScreenParams = {
  title: string;
}

type PanGestureContext = {
  offsetX: number;
  offsetY: number;
}

const PanGesture: React.FC<{ pageName: string }> = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  useEffect(() => {
    const title = (route.params as ScreenParams).title;
    navigation.setOptions({ title: title });
  });

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (_, ctx: PanGestureContext) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event: PanGestureHandlerEventPayload, ctx: PanGestureContext) => {
      translateX.value = ctx.offsetX + event.translationX;
      translateY.value = ctx.offsetY + event.translationY;
    },
    onEnd: (event: PanGestureHandlerEventPayload) => {
      translateX.value = withDecay({ velocity: event.velocityX });
      translateY.value = withDecay({ velocity: event.velocityY });
    }
  });

  const cardAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value }
      ]
    };
  });

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={cardAnimatedStyle}>
          <Card />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export { PanGesture };
