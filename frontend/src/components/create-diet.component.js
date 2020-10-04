import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateDiet extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDietName = this.onChangeDietName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeCalories = this.onChangeCalories.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        username: '',
        dietName: '',
        description: '',
        calories: 0,
        date: new Date(),
        users: []
    }
  }

  componentDidMount() {
    this.setState({ 
      users: ['test user'],
      username: 'test user'
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeDietName(e) {
    this.setState({
      dietName: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeCalories(e) {
    this.setState({
      calories: e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onSubmit(e) {
    e.preventDefault();
  
    const diet = {
      username: this.state.username,
      dietName: this.state.dietName,
      description: this.state.description,
      calories: this.state.calories,
      date: this.state.date,
    };
  
    console.log(diet);
    
    // window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Create New Diet Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <select ref="userInput"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangeUsername}>
                {
                  this.state.users.map(function(user) {
                    return <option 
                      key={user}
                      value={user}>{user}
                      </option>;
                  })
                }
            </select>
          </div>
          <div className="form-group"> 
            <label>Diet Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.dietName}
                onChange={this.onChangeDietName}
                />
          </div>
          <div className="form-group"> 
            <label>Description: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeDescription}
                />
          </div>
          <div className="form-group">
            <label>Calories: </label>
            <input 
                type="text" 
                className="form-control"
                value={this.state.calories}
                onChange={this.onChangeCalories}
                />
          </div>
          <div className="form-group">
            <label>Date: </label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Diet Log" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}

