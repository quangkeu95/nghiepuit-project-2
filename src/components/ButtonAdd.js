import React, { Component } from 'react';

class ButtonAdd extends Component {
  render() {
    return (
      <div className="row mb-2">
        <div className="col-md-1">
          <button className="btn btn-primary" onClick={() => this.props.showEditForm(false, {})}>
            <span className="fa fa-plus mr-2"></span>
            Add To Do
          </button>
        </div>
      </div>
    );
  }
}

export default ButtonAdd;