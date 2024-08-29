import { StyleSheet } from 'react-native';

export const colors = {
  heading: '#000',
  button: '#1E90FF',
  background: '#f2f2f2',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 20,
    backgroundColor: colors.background,
  },
  innerContainer: {
    marginTop: 8,
    position: 'relative',
  },
  heading: {
    color: colors.heading,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
  image: {
    width: 200,
    height: 200,
  },
  inputContainer: {
    marginHorizontal: 8,
  },
  label: {
    color: colors.heading,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 25,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  button: {
    padding: 16,
    borderRadius: 25,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  switchScreenText: {
    color: colors.button,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  spacer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    shadowColor: '#000',
  },
  detailContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  detailItem: {
    alignItems: 'center',
    backgroundColor: '#ecf9ec',
    padding: 20,
    borderRadius: 15,
  },
});
