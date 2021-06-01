import React, { Component } from 'react';

import './App.css';
class App extends Component {
  state = {
    response: '',
    id: '',name:'',email:'',course:'',
    responseToPost: ''
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('http://localhost:7000/learner/1');
    //alert(response);
    const body = await response.json();
    
    if (response.status !== 200) throw Error(body.message);
    return body;
  
  };

 /* handleSubmit = (event) => {
    alert(this.state.email);
    alert('A form was submitted: ' + this.state);

    fetch('http://localhost:7000/learnerAddEdit', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
       // console.log(response)
        
        return response.json();
      });

    event.preventDefault();
}
  
  */
  
render() {
  
    return (
    <div className="App">
        
        <p>{this.state.response}</p>
         
        
      </div>
    );
  }
}

export default App;