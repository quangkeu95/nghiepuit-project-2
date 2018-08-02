import React, { Component } from 'react';
import ButtonAdd from './components/ButtonAdd';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';
import EditForm from './components/EditForm';
import uuidv4 from 'uuid';

import { connect } from 'react-redux';

class App extends Component {

  render() {
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
            <EditForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8 ">
            <ButtonAdd />
            <SearchBar />
            <DataTable />         
          </div>
        </div>}
        {!editFormVisible &&
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 ">
            <ButtonAdd />
            <SearchBar />
            <DataTable />
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
