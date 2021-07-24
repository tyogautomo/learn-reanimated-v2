import React, { useEffect } from 'react';
import { useHeaderHeight } from '@react-navigation/stack';
import { useRoute, useNavigation } from '@react-navigation/native';
import { PanGestureHandlerEventPayload, PanGestureHandler } from 'react-native-gesture-handler';
import { View, Dimensions } from 'react-native';
import { clamp } from 'react-native-redash';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withDecay
} from 'react-native-reanimated';

import { styles } from './PanGesture.styles';
import { Card } from '../../components/Card/Card.component';

const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

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
  const headerHeight = useHeaderHeight();
  const translateX = useSharedValue<number>(0);
  const translateY = useSharedValue<number>(0);

  const boundX: number = deviceWidth - (deviceWidth * 0.75);
  const boundY: number = deviceHeight - (deviceWidth * 0.4) - headerHeight;

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
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: (event: PanGestureHandlerEventPayload) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, boundX]
      });
      translateY.value = withDecay({
        velocity: event.velocityY,
        clamp: [0, boundY]
      });
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
