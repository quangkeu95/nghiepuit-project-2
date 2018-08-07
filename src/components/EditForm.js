import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class EditForm extends Component {
	onNameChange(value) {
		const { changeCurrentName } = this.props;

		changeCurrentName(value);
	}

	onStatusChange(value) {
		const { changeCurrentStatus } = this.props;

		changeCurrentStatus(value);
	}

  	submitForm(event) {
		const { addTodo, editTodo } = this.props; 
		const { isEdit, editingTask} = this.props.editing;
		
		event.preventDefault();
		const action = Object.assign({}, editingTask);
		if (isEdit) {
			editTodo(action);
		} else {
			addTodo(action);
		}	
	}

  	render() {
		const { closeEditForm } = this.props;
		const { isEdit, editingTask } = this.props.editing;

		return (
		<div className="card">
			<div className="card-header bg-info text-white">
				<h3 className="card-title text-center">
					{!isEdit && <span>Add To-do Action</span>}
					{isEdit && <span>Edit To-do Action</span>}
				</h3>
			</div>
			<div className="card-body">
				<form id="editForm" onSubmit={this.submitForm.bind(this)}>
					<div className="form-group">
						<label>Name</label>
						<input type="text" 
							className="form-control" 
							value={editingTask.name}
							onChange={(event) => this.onNameChange(event.target.value)}/>
					</div>
					<div className="form-group">
						<label>Status</label>
						<select className="custom-select"
								id="statusSelection" 
								value={editingTask.status} 
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
		addTodo: actions.addTodo,
		editTodo: actions.editTodo,
		closeEditForm: actions.closeForm,
		changeCurrentName: actions.changeCurrentName,
		changeCurrentStatus: actions.changeCurrentStatus
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditForm);