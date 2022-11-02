console.log("this was logged");

import axios from "axios";

//in an interface can ignore properties

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  console.log(todo);

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logToDo(ID, title, completed);
});

const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(
    ` The id is ${id}, 
      the title is: ${title}, 
      is it finished?: ${completed}`
  );
};
