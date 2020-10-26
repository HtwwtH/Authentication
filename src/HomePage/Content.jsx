import React from 'react';

const Content = (props) => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-8 offset-md-3">
            <h1>Hi {props.currentUser.firstName} {props.currentUser.lastName}!</h1>
            <p>You're logged in!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content;
