import Stepan from '/src/lib/stepan.js'

import { API_URL } from './constants/index.js'

// import {
//   TotoListHead,
//   TodoListToggleAll,
//   TodoList
// } from './components/todoList/index.js';

import { Footer } from './components/footer/index.js';

class App extends Stepan.Component {
  constructor(props) {
    super(props);

    this.state = {
      allFinished: false,
      todos: []
    }
  }

  getInitialState() {
    console.log('initial API call to get all TODOS')
  }

  toggleAll() {
    console.log('toggleAll')
  }

  createTodo() {
    console.log('toggleAll')
  }

  render() {
    return Stepan.createElement('div', {}, [
      'HERE I AM',
      'HERE I AM 2',
      new Footer ({todos: this.state.todos})
    ])
  }
}

Stepan.renderDOM(document.getElementById('todoapp'), new App());
