import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  cardsContainer: {
    height: 200,
    alignItems: 'center'
  },
  bottomContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: '#91c4c3',
    paddingVertical: 10,
    paddingHorizontal: 10,
    bottom: 0
  },
  button: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    elevation: 3,
    backgroundColor: '#598f8e'
  },
  buttonTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 15
  }
});

export { styles };
