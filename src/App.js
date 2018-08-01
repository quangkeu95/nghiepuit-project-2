import React, { Component } from 'react';
import ButtonAdd from './components/ButtonAdd';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import EditForm from './components/EditForm';
import uuidv4 from 'uuid';
import { ALL_STATUS, ACTIVE_STATUS, DEACTIVE_STATUS } from './constants/constants';

import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editFormVisible: false,
      isEdit: false,
      currentItem: {
        id: "",
        name: "",
        status: "active"
      },
      filter: {
        filterName: "",
        filterStatus: ALL_STATUS
      }
    };
  }


  onFilter(filter) {
    this.setState({
      filter: filter
    });
  }

  onSort(type, data) {
    let result;
    if (type === 0) {
      result = data.sort()
    }

    return result;
  }

  render() {
    const { filter, toDoList } = this.state;

    // let data = JSON.parse(JSON.stringify(toDoList));

    // if (filter) {
    //   if (filter.filterName) {
    //     data = toDoList.filter(item => {
    //       return item.name.toLowerCase().indexOf(filter.filterName) !== -1;
    //     });
    //   }     

    //   const filterStatus = parseInt(filter.filterStatus, 10);
    //   if (filterStatus !== null || filterStatus !== undefined) {        
    //     data = data.filter(item => {
    //       if (filterStatus === ACTIVE_STATUS) {
    //         return item.status === "active";
    //       } else if (filterStatus === DEACTIVE_STATUS) {
    //         return item.status === "deactive";
    //       }
    //       return item;
    //     });
    //   }
    // }

    // data.sort

    const { editFormVisible } = this.props;

    return (
      <div className="container">
        <h1 className="text-center">
          To-do List
        </h1>
        <hr />
        {editFormVisible && 
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 ">
            <EditForm 
              closeEditForm={this.closeEditForm.bind(this)}
              addToDo={this.addToDo.bind(this)}
              item={this.state.currentItem}
              isEdit={this.state.isEdit}/>
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
            <ButtonAdd />
            <SearchBar />
            <DataTable          
              deleteItem={this.deleteItem.bind(this)}
              onFilter={this.onFilter.bind(this)}/>
          </div>
        </div>}
        {!editFormVisible &&
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <ButtonAdd />
            <SearchBar />
            <DataTable 
              deleteItem={this.deleteItem.bind(this)}
              onFilter={this.onFilter.bind(this)}/>
          </div>
        </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
	return {
		editFormVisible: state.editing.editFormVisible
	}
}

export default connect(mapStateToProps, null)(App);
