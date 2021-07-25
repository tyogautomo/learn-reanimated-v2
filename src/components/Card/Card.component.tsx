import React from 'react';
import { View } from 'react-native';

import { styles } from './Card.style';

type ScreenProps = {
  backgroundColor?: string;
}

const Card: React.FC<ScreenProps> = ({ backgroundColor }) => {
  return (
    <View style={[styles.container, backgroundColor ? { backgroundColor } : null]} />
  );
};

export { Card };
