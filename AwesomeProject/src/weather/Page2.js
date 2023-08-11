import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../../styles/Todostyle';
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
export default function Page2Nav() {
  const { todo_Header, todo_Input, todoList_Box, List_Wrapper, icon } = styles;

  const [inputValue, setInputValue] = useState('');
  console.log(inputValue);
  const [todoList, setTodoList] = useState([]);

  function addItem() {
    if (!inputValue) return;
    const newId = todoList.map((item) =>
      item.length && item[item.id - 1] > 0 ? item[item.id - 1] + 1 : 1
    );
    const id = newId.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 1);

    console.log(id);

    const newItem = {
      id: id,
      title: inputValue,
    };

    console.log(newItem);

    setTodoList((prev) => [newItem, ...prev]);
  }

  function remove(id) {
    setTodoList((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  }

  return (
    <SafeAreaView>
      <Text style={todo_Header}>Todo List</Text>
      <TextInput
        placeholder="Type..."
        style={todo_Input}
        onChangeText={setInputValue}
      />
      <Button title="Submit" onPress={addItem} />

      <View style={List_Wrapper}>
        <FlatList
          data={todoList}
          renderItem={({ item }) => {
            return (
              <View style={todoList_Box}>
                <Text>{item.title}</Text>
                <TouchableOpacity>
                  <AntDesign
                    name="delete"
                    size={24}
                    color="black"
                    onPress={() => remove(item.id)}
                  />
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}
