import { StyleSheet, Dimensions } from 'react-native';

const { width: deviceWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: deviceWidth * 0.75,
    height: deviceWidth * 0.4,
    backgroundColor: 'skyblue',
    borderRadius: 8
  }
});

export { styles };
