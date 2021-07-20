import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './Home.style';

interface Page {
  title: string;
  pageName: string;
}

const Home: React.FC = () => {
  const pages: Page[] = [
    {
      title: 'Pan Gesture',
      pageName: 'PanGesture'
    }
  ];
  const navigation = useNavigation();

  const onPressCard = (pageName: string, title: string) => () => {
    navigation.navigate(pageName, {
      title
    });
  };

  const renderCard = (page: Page, i: number) => {
    return (
      <TouchableOpacity key={i} style={styles.card} activeOpacity={0.8} onPress={onPressCard(page.pageName, page.title)}>
        <Text>{page.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {pages.map((page, i) => renderCard(page, i))}
    </View>
  );
};

export { Home };
