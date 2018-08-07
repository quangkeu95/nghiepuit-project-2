import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/index';

class ButtonAdd extends Component {
  render() {
    const { showEditForm } = this.props;

    return (
      <div className="row mb-2">
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={() => showEditForm(false, {})}>
            <span className="fa fa-plus mr-2"></span>
            Add To Do
          </button>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		showEditForm: actions.openForm
	}, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonAdd);