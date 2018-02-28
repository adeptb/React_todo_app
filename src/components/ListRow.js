import React from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import ListItem from './ListItem';

export default class ListRow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false, //режим редактирования по умолчанию устанавливаем false
      task: this.props.task,
    };
  }

  setEditState = () => {
    //обработчик события при нажатии на кнопку Edit меняет режим редактирования
    this.setState({ isEditing: !this.state.isEditing });
  };

  render() {
    // формируем строку списка (компоненты: ячейка с задачей и кнопки)
    return (
      <tr>
        <ListItem
          task={this.state.task}
          isEditing={this.state.isEditing}
          index={this.props.index}
        />
        <DeleteButton deleteTask={() => this.props.deleteTask(this.props.index)} />
        <EditButton
          task={this.state.task}
          index={this.props.index}
          saveEditedTask={this.props.saveEditedTask}
          setEditState={this.setEditState}
          isEditing={this.state.isEditing}
        />
      </tr>
    );
  }
}
