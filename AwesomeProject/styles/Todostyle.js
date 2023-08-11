import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  todo_Header: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 15,
  },
  todo_Input: {
    borderWidth: 2,
    borderColor: 'black',
    width: '50%',
    padding: 4,
    alignSelf: 'center',
  },
  todoList_Box: {
    backgroundColor: 'tomato',
    marginBottom: 10,
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  List_Wrapper: {
    padding: 10,
    paddingBottom: 20,
    width: '95%',
    alignSelf: 'center',
    marginBottom: 220,
  },
  icon: {
    width: 10,
  },
});
