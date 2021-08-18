import React from 'react';

class Editable extends React.Component {
  state = { editing: true }

  stopEdit = (e) => {
    if (e.key === "Enter") {
      this.setState({ editing: false })
    };
  }

  startEdit = () => {
    this.setState({ editing: true });
  }

  render() {
    let viewMode = {};
    let editMode = {};
    this.state.editing ? viewMode.display = "none" : editMode.display = "none";
    return (
      <div className='Editable'>
        <div style={viewMode} onDoubleClick={this.startEdit}>
        {this.props.value}
        </div>
        <input type='text'
               id={this.props.id}
               style={editMode}
               name={this.props.name}
               placeholder={this.props.placeholder}
               value={this.props.value}
               onChange={e => {
                 this.props.handleChange(e.target.value, this.props.name)
               }}
               onKeyDown={this.stopEdit} />
      </div>
    )
  }
}

export default Editable
