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
      <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{this.props.data.title}</span>
              <p>{this.props.data.post}</p>
            </div>
            <div className="card-action" style={{cursor: "pointer"}}>
              <a className={''} onClick={() => this.edit(this.props.data.id)}>Edit</a>
              <a className={''} onClick={() => this.delete(this.props.data.id)}>Delete</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
