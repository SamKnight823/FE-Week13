import React, {Component} from 'react'

let date = new Date()

let singleUser = {
  name: 'John',
  time: date.toDateString(),
}

export default class Section extends Component {
  render() {
    return (
      <div className="welcomeSection">
        <div >
        <h3 className="header">Log In</h3>
        </div>
        <form>
        <label for="uname"><b>Username: </b></label>
        <input type="text" placeholder="Enter Username" name="uname" required></input><br></br>
        <label for="psw"><b>Password: </b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input><br></br>
        <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}