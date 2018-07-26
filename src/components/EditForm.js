import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: "active"
    }
  }

  componentDidMount() {
    this.setState({
      id: this.props.item.id,
      name: this.props.item.name,
      status: this.props.item.status
    });
  }

  onNameChange(value) {
    this.setState({
      name: value
    });
  }

  onStatusChange(value) {
    this.setState({
      status: value
    });
  }

  submitForm(event) {
    event.preventDefault();
    const action = Object.assign({}, this.state);
    this.props.addToDo(action);
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-info text-white">
          <h3 className="card-title text-center">
            {!this.props.isEdit && <span>Add To-do Action</span>}
            {this.props.isEdit && <span>Edit To-do Action</span>}
          </h3>
        </div>
        <div className="card-body">
          <form id="editForm" onSubmit={this.submitForm.bind(this)}>
            <div className="form-group">
              <label>Name</label>
              <input type="text" 
                    className="form-control" 
                    value={this.state.name}
                    onChange={(event) => this.onNameChange(event.target.value)}/>
            </div>
            <div className="form-group">
              <label>Status</label>
              <select className="custom-select"
                      id="statusSelection" 
                      value={this.state.status} 
                      onChange={(event) => this.onStatusChange(event.target.value)}>
                <option value="active">Active</option>
                <option value="deactive">Deactive</option>
              </select>
            </div>
          </form>
          <div className="text-center">
            <button type="submit" form="editForm" className="btn btn-warning mx-1">
              <span className="fa fa-plus mr-2"></span>
              {!this.props.isEdit && <span>Add</span>}
              {this.props.isEdit && <span>Save</span>}
            </button>
            <button className="btn btn-danger mx-1" onClick={this.props.closeEditForm}>
              <span className="fa fa-ban mr-2"></span>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditForm;