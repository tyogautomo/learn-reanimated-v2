import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import { styles } from './MenuButton.style';

interface ComponentProps {
  onPress: () => void,
  title: string
}

const MenuButton: React.FC<ComponentProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export { MenuButton };
