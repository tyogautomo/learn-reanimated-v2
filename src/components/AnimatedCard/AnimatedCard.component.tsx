import React from 'react';
import { Dimensions } from 'react-native';
import Animated, { useAnimatedStyle, interpolate } from 'react-native-reanimated';

import { styles } from './AnimatedCard.style';
import { Card } from '../Card/Card.component';

const { width: deviceWidth } = Dimensions.get('window');

type CardType = {
  color: string
}

type ScreenProps = {
  index: number;
  transition: any,
  card: CardType
}

const AnimatedCard: React.FC<ScreenProps> = ({ index, transition, card }) => {
  const origin = (deviceWidth * 0.75) / 2;

  const animatedStyle = useAnimatedStyle(() => {
    const rotation = interpolate(
      transition.value,
      [0, 1],
      [0, (index - 1) * (Math.PI / 6)]
    );
    return {
      transform: [
        { translateX: -origin },
        { rotate: `${rotation}rad` },
        { translateX: origin }
      ]
    };
  });

  return (
    <Animated.View
      key={index}
      style={[
        styles.card,
        animatedStyle
      ]}
    >
      <Card backgroundColor={card.color} />
    </Animated.View>
  );
};

export { AnimatedCard };
