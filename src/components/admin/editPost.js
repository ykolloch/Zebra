import React, {
  PureComponent
} from 'react';
import ReactDOM from 'react-dom';

export default class EditPost extends PureComponent {

  componentDidMount() {
    $(this.el).characterCounter();
  }

  submit() {
    
  }

  render() {
    return (
      <div className="container">
       <h3>Edit Post: </h3>
       <div className={'row'}>
          <div className="col s12">
             <div className="row">
                <div className="input-field col s12">
                   <input id="title" type="text" className="validate" />
                   <label htmlFor="title">Title</label>
                </div>
             </div>
             <div className="row">
                <div className="input-field col s12">
                   <textarea ref={el => this.el= el} id="post" className="materialize-textarea" data-length="20000"/>
                   <label htmlFor="post">Post</label>
                </div>
             </div>
          </div>
       </div>
       <button onClick={this.submit} className="btn waves-effect waves-light" type="submit" name="action">Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
    );
  }
}
