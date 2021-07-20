import React, { useState } from 'react';
import { runOnUI, runOnJS } from 'react-native-reanimated';
import { View, TouchableOpacity, Text } from 'react-native';

import { styles } from './Worklet.style';

const Worklet: React.FC = () => {
  const [artistName, setArtistName] = useState<string>('Bengkoang');

  const workletFunction = (
    name: string,
    cb: (name: string) => void,
    cb2: (artistName: string) => void
  ) => {
    'worklet';
    console.log(`THIS IS RUN ON UI BROOOO! YOU ${name} LITTLE PIECE OF SUGAR!`);
    runOnJS(cb)('Badrun');
    runOnJS(cb2)(name);
  };

  const renderCard = () => {
    return (
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.8}
        onPress={() => runOnUI(workletFunction)(
          'Dododdd',
          (name) => console.log(`This is a JS code ${name}`),
          (name) => setArtistName(name)
        )}
      >
        <Text style={styles.buttonText}>PRESS ME! and watch the Log!</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderCard()}
      <Text style={styles.text}>{artistName}</Text>
    </View>
  );
};

export { Worklet };
