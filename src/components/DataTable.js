import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { ALL_STATUS, ACTIVE_STATUS, DEACTIVE_STATUS } from '../constants/constants';

import { connect } from 'react-redux';

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {
        filterName: "",
        filterStatus: ALL_STATUS
      }
    }
  }

  onFilter(event) {
    const { onFilter } = this.props;

    if (event.target.name === 'filterName') {
      const filterName = event.target.value;

      this.setState({
        filter: {
          ...this.state.filter,
          filterName: filterName
        }
      }, () => {
        onFilter(this.state.filter);
      });
      
    } else if (event.target.name === 'filterStatus') {
      const filterStatus = event.target.value;

      this.setState({
        filter: {
          ...this.state.filter,
          filterStatus: filterStatus
        }
      }, () => {
        onFilter(this.state.filter);
      });
    }
  }

  render() {
    const { tasks } = this.props;

    const data = tasks.map((item, index) => 
      <ToDoItem 
        key={item.id} 
        index={index} 
        toDoItem={item}
        editItem={this.props.showEditForm}
        deleteItem={this.props.deleteItem}
      />
    );

    return (
      <div className="row">
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th scope="col">Index</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Operations</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>
                  <input 
                    type="text" 
                    name="filterName"
                    value={ this.state.filter.filterName }
                    className="form-control"
                    onChange={ this.onFilter.bind(this) } />
                </td>
                <td>
                  <select 
                    name="filterStatus"
                    value= { this.state.filter.filterStatus }
                    className="custom-select" 
                    onChange={ this.onFilter.bind(this) }>
                    <option value={ALL_STATUS}>All</option>
                    <option value={ACTIVE_STATUS}>Active</option>
                    <option value={DEACTIVE_STATUS}>Deactive</option>
                  </select>
                </td>
                <td></td>
              </tr>
              {data}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		tasks: state.tasks
	}
}

export default connect(mapStateToProps, null)(DataTable);