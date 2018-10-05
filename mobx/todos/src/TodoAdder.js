import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { observable, decorate } from 'mobx';

const formTemplate = {
  title: '',
  description: ''
};

class TodoAdder extends Component {
  formState = observable(Object.assign({}, formTemplate));

  onChange = ev => {
    this.formState[ev.target.name] = ev.target.value;
  };

  onSubmit = ev => {
    ev.preventDefault();
    const { store } = this.props;
    store.saveTodo(Object.assign({}, this.formState));
    Object.assign(this.formState, formTemplate);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} onChange={this.onChange}>
        <div>
          <label>Title</label>
          <input name="title" value={this.formState.title} />
        </div>
        <div>
          <label>Description</label>
          <input name="description" value={this.formState.description} />
        </div>
        <button>Add Todo</button>
      </form>
    );
  }
}

TodoAdder = observer(TodoAdder);
export default inject('store')(TodoAdder);
