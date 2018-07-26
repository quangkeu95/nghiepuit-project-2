import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortSelected: 0 // Sort order: A - Z
    }
    this.changeSort = this.changeSort.bind(this);
  }

  changeSort(type) {   
    this.setState({
      sortSelected: type
    });
  }

  render() {

    const { sortSelected } = this.state;

    return (
      <div className="row mb-2">
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="form-inline">
            <input type="text" className="form-control" name="" id="" placeholder="Search..."/>
            <button className="btn btn-primary">
              <span className="fa fa-search mr-2"></span>
              Search
            </button>
          </div>
        </div>
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <button 
            className="btn btn-secondary dropdown-toggle float-left"
            type="button"
            data-toggle="dropdown"
          >
          Sort
          </button>
          <div className="dropdown-menu">
            <button className="dropdown-item" type="button" onClick={() => this.changeSort(0)}>
              <span className="fa fa-sort-alpha-down mr-1"></span>
              A - Z
              {sortSelected === 0 && <span><i className="fa fa-check ml-3"></i></span>}
            </button>
            <button className="dropdown-item" type="button" onClick={() => this.changeSort(1)}>
              <span className="fa fa-sort-alpha-up mr-1"></span>
              Z - A
              {sortSelected === 1 && <span><i className="fa fa-check ml-3"></i></span>}
            </button>
            <button className="dropdown-item" type="button" onClick={() => this.changeSort(2)}>
              Active Order
              {sortSelected === 2 && <span><i className="fa fa-check ml-3"></i></span>}
            </button>
            <button className="dropdown-item" type="button" onClick={() => this.changeSort(3)}>
              Deactive Order
              {sortSelected === 3 && <span><i className="fa fa-check ml-3"></i></span>}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
