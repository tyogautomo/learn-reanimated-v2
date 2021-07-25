import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { styles } from './Home.style';
import { MenuButton } from '../../components/MenuButton/MenuButton.component';

interface Page {
  title: string;
  pageName: string;
}

const pages: Page[] = [
  {
    title: 'Worklet Sanbox',
    pageName: 'Worklet'
  },
  {
    title: 'Pan Gesture',
    pageName: 'PanGesture'
  },
  {
    title: 'Transitions',
    pageName: 'Transitions'
  }
];

const Home: React.FC = () => {
  const navigation = useNavigation();

  const onPressCard = (pageName: string, title: string) => () => {
    navigation.navigate(pageName, {
      title
    });
  };

  const renderCard = (page: Page, i: number) => {
    return (
      <MenuButton
        key={i}
        title={page.title}
        onPress={onPressCard(page.pageName, page.title)}
      />
    );
  };

  return (
    <View style={styles.container}>
      {pages.map((page, i) => renderCard(page, i))}
    </View>
  );
};

export { Home };
