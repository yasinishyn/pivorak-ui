const isEvent = key => key.startsWith('on');

export default class Stepan {
  static createElement(element, attibutes = {}, children = []) {
    const newElement = document.createElement(element)

    // handle events
    for (let attibute in attibutes) {
      if (isEvent(attibute)) {
        newElement.addEventListener(attibute.replace('on', ''), attibutes[attibute])
        continue;
      }

      // new to handle mono attbitues
      if(attibute === 'checked' && !attibutes[attibute]) continue;

      newElement.setAttribute(attibute, attibutes[attibute])
    }

    children.forEach(node => {
      if (typeof node === 'string') {
        newElement.appendChild(document.createTextNode(node));
      } else if (Object.getPrototypeOf(Object.getPrototypeOf(node)).constructor.name === 'Component') {
        newElement.appendChild(node.mount());
      } else {
        newElement.appendChild(node);
      }
    });

    return newElement
  }

  static renderDOM(container, component) {
    container.innerHTML = '';
    container.appendChild(component.mount());
  }

  static Component = class {
    constructor(props = {}) {
      this.props = props; // self
      this.state = {};
      this._pendingState = null;
      this._currentElement = null;

      if ( typeof this.getInitialState === null ) {
        this.getInitialState();
      }
    }

    updateComponent() {
      const prevState = this.state;

      if (this._pendingState !== prevState) {
        this.state = this._pendingState;
      }

      this._pendingState = null;
      this._currentElement.replace(this.mount());
    }

    mount() {
      this._currentElement = this.render();
      return this._currentElement;
    }

    setState(partionNewState) {
      console.log(partionNewState);
      this._pendingState = { ...this.state, ...partionNewState };
      this.updateComponent()
    }
  }
}
