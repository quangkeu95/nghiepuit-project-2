import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/index';

class ToDoItem extends Component {
  render() {
	const item = this.props.toDoItem;
	
	const { showEditForm } = this.props;
    
    return (
      <tr className="text-center">
        <td>{this.props.index + 1}</td>
        <td>
          {item.name}
        </td>
        <td>
          {item.status === "active" && <span className="badge badge-success">{item.status}</span>}
          {item.status === "deactive" && <span className="badge badge-secondary">{item.status}</span>}
        </td>
        <td>
          <button className="btn btn-warning mr-2" onClick={() => showEditForm(true, item)}>
            <span className="fa fa-edit mr-2"></span>
            Edit
          </button>
          <button className="btn btn-danger" onClick={() => this.props.deleteItem(item)}>
            <span className="fa fa-trash mr-2"></span>
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		showEditForm: action.openForm
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(ToDoItem);