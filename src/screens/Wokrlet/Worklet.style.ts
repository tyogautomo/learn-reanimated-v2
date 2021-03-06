import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'purple',
    elevation: 2,
    borderRadius: 4,
    marginBottom: 10
  },
  buttonText: {
    color: 'white'
  },
  text: {
    color: 'red',
    fontSize: 20
  }
});

export { styles };
