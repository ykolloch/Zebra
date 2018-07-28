import React, {
  PureComponent
} from 'react';
import ReactDOM from 'react-dom';

export default class Content extends PureComponent {

  constructor(props) {
    super(props);
  }

  edit(id) {
    console.log(id);
  }

  delete(id) {
    console.log(id);
  }

  render() {
    return (
      <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{this.props.data.title}</span>
              <p>{this.props.data.post}</p>
            </div>
            <div class="card-action">
              <a onClick={() => this.edit(this.props.data.id)}>Edit</a>
              <a onClick={() => this.delete(this.props.data.id)}>Delete</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

exports.module
