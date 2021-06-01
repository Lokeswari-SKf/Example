import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class PostData extends Component {
    state = {
        id: "",
        name: "",
        email: "",
        course: ""
      };
    
      

      handleSubmit = e => {
        e.preventDefault();
        const data = {
          id: this.state.id,
          name: this.state.name,
          email: this.state.email,
          course: this.state.course

        };
        //alert(data.email);
        axios.post("http://localhost:7000/learnerAddEdit", data)
          .then(function(response){
              console.log(response)
          })
          .catch(function(err)
          {console.log(err)
          });
      };

render() {
    return (
      <div >
        <form  onSubmit={this.handleSubmit} >
          <input 
          type="text" 
          placeholder="learner id" 
          name="id" 
          value={this.state.id} 
          onChange={e => this.setState({ id: e.target.value })} 
          />

          
          <input type="text"  placeholder="learner name"  name="name" value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}  
          />
          <input type="text" placeholder="learner email" name="email" value={this.state.email}
           onChange={e => this.setState({ email: e.target.value })} 
          />
          <input type="text" placeholder="course id" name="course" value={this.state.course}
            onChange={e => this.setState({ course: e.target.value })} 
          />
          
          <button type="submit">Submit Post Data</button>
        </form>
      </div>
    );
  }
}

export default PostData;