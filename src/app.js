import Stepan from '/src/lib/stepan.js'

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
    return Stepan.createElement('div', {}, ['HERE I AM', 'HERE I AM 2'])
  }
}

Stepan.renderDOM(document.getElementById('todoapp'), new App());
