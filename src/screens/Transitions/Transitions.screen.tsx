import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import {
  useDerivedValue,
  useSharedValue,
  withSpring
} from 'react-native-reanimated';

import { styles } from './Transitions.style';
import { AnimatedCard } from '../../components/AnimatedCard/AnimatedCard.component';

type CardType = {
  color: string
}

const cards: CardType[] = [{ color: '#d98164' }, { color: '#d9a064' }, { color: '#d9c964' }];

const Transitions: React.FC = () => {
  const [toggled, setToggled] = useState<boolean>(false);
  const isToggled = useSharedValue<number>(0);

  const transition = useDerivedValue(() => {
    return withSpring(isToggled.value);
  });

  useEffect(() => {
    isToggled.value = Number(toggled);
  }, [toggled, isToggled]);

  const onPressButton = () => {
    setToggled(prevState => !prevState);
  };

  const renderAnimatedCard = (card: CardType, i: number) => {
    return (
      <AnimatedCard
        key={i}
        card={card}
        index={i}
        transition={transition}
      />
    );
  };

  const renderBottomButton = () => {
    return (
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={onPressButton}
          style={styles.button}
        >
          <Text style={styles.buttonTitle}>{toggled ? 'Reset' : 'Toggle'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        {cards.map((card, i) => renderAnimatedCard(card, i))}
      </View>
      {renderBottomButton()}
    </View>
  );
};

export { Transitions };
