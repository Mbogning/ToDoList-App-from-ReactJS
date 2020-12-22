import React from 'react';

class ToDO extends React.Component {
    render() { 
        return ( 
            <li className="list-group-item d-flex justify-content-between align-items-center">
            {this.props.task.name}
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
         );
    }
}
 
export default ToDO;