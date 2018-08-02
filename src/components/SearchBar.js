import React, { Component } from 'react';
import * as action from '../actions/index';

import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux';

class SearchBar extends Component {
	render() {

		const { sort, onSort } = this.props;
		const { sortType } = sort;

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
					<button className="dropdown-item" type="button" onClick={() => onSort(1)}>
						<span className="fa fa-sort-alpha-down mr-1"></span>
						A - Z
						{sortType === 1 && <span><i className="fa fa-check ml-3"></i></span>}
					</button>
					<button className="dropdown-item" type="button" onClick={() => onSort(2)}>
						<span className="fa fa-sort-alpha-up mr-1"></span>
						Z - A
						{sortType === 2 && <span><i className="fa fa-check ml-3"></i></span>}
					</button>
					<button className="dropdown-item" type="button" onClick={() => onSort(3)}>
						Active Order
						{sortType === 3 && <span><i className="fa fa-check ml-3"></i></span>}
					</button>
					<button className="dropdown-item" type="button" onClick={() => onSort(4)}>
						Deactive Order
						{sortType === 4 && <span><i className="fa fa-check ml-3"></i></span>}
					</button>
				</div>
			</div>
		</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		onSort: action.onSort
	}, dispatch);
}

function mapStateToProps(state) {
	return {
		sort: state.sort
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
