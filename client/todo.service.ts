import axios from 'axios';
import { Todo } from './todo';

const api = 'api';

class TodoService {
  deleteTodo(todo: Todo) {
    return axios.delete(`${api}/todo/${todo.id}`);
  }
  getTodoes() {
    return axios.get<Todo[]>(`${api}/todoes`);
  }
  addTodo(todo: Todo) {
    return axios.post(`${api}/todo/`, { todo });
  }
  updateTodo(todo: Todo) {
    return axios.put(`${api}/todo/${todo.id}`, { todo });
  }
}

// Export a singleton instance in the global namespace
export const todoService = new TodoService();
