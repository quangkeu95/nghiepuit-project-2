import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as action from '../actions/index';

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
	const { editing } = this.props;
	const { editingTask } = editing;

    this.setState({
      	id: editingTask.id,
    	name: editingTask.name,
      	status: editingTask.status
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
    const { addToDo } = this.props; 

    event.preventDefault();
    const action = Object.assign({}, this.state);
    addToDo(action);
  }

  render() {
    const { closeEditForm } = this.props;
	const { isEdit } = this.props.editing;

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
              {!isEdit && <span>Add</span>}
              {isEdit && <span>Save</span>}
            </button>
            <button className="btn btn-danger mx-1" onClick={closeEditForm}>
              <span className="fa fa-ban mr-2"></span>
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		editing: state.editing
	};
}

function mapDispatchToProps(dispatch, props) {
	return bindActionCreators({
		addToDo: action.addToDo,
		closeEditForm: action.closeForm
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);