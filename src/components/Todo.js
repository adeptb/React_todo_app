import React from 'react';
import ListRow from './ListRow';
import Input from './Input';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      tasks: [],
    };
  }

  setInput = e => {
    this.setState({ input: e.target.value });
  };

  addTask = e => {
    this.setState({
      input: '',
      tasks: [...this.state.tasks, this.state.input],
    });
    document.getElementById('task').value = '';
  };

  deleteTask = (indexToDelete) => {
    console.log(indexToDelete, this.state);
    this.setState({ tasks: this.state.tasks.filter((value, index) => index !== indexToDelete) });
  };

  saveEditedTask = (value, index) => {
    const newTasks = this.state.tasks;
    newTasks[index] = value;
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <Input setInput={this.setInput} addTask={this.addTask} />
        <table>
          <tbody>
            {this.state.tasks.map((task, index) => (
              <ListRow
                key={`id${task}`}
                task={task}
                deleteTask={this.deleteTask}
                saveEditedTask={this.saveEditedTask}
                index={index}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
