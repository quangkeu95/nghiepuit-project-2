import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

class DataTable extends Component {

  render() {
    const { tasks, filter, changeFilterName, changeFilterStatus, sort } = this.props;
    const { sortType } = sort;

	let filterData = tasks;

	if (filter) {
		if (filter.filterName) {
			filterData = tasks.filter(item => {
				return item.name.toLowerCase().indexOf(filter.filterName) !== -1;
			});
		} 

		if (filter.filterStatus) {
			filterData = filterData.filter(item => {
				if (filter.filterStatus === "active") {
					return item.status === "active";
				} else if (filter.filterStatus === "deactive") {
					return item.status === "deactive";
				}
				return item;
			});
		}
	}

	switch(sortType) {
		case 1:
			filterData = _.orderBy(filterData, ['name'], ['asc']);
			break;
		case 2:
			filterData = _.orderBy(filterData, ['name'], ['desc']);
			break;
		case 3:
			filterData = _.orderBy(filterData, ['status'], ['asc']);
			break;
		case 4:
			filterData = _.orderBy(filterData, ['status'], ['desc']);
			break;
	}
	

    const data = filterData.map((item, index) => 
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
                    value={ filter.filterName }
                    className="form-control"
                    onChange={(event) => changeFilterName(event.target.value) } />
                </td>
                <td>
                  <select 
                    name="filterStatus"
                    value= { filter.filterStatus }
                    className="custom-select" 
                    onChange={(event) => changeFilterStatus(event.target.value) }>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="deactive">Deactive</option>
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
		tasks: state.tasks,
		filter: state.filter,
		sort: state.sort
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		changeFilterName: actions.changeFilterName,
		changeFilterStatus: actions.changeFilterStatus
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);