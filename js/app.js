



import {Promise} from 'es6-promise'
import $ from 'jquery'
import Backbone from 'backbone'
import React from 'react'
import * as Images from './images.js'


var Parse = window.Parse

Parse.$ = $

var Bleep = Parse.Object.extend({
    className: 'tweets',
    defaults: {
        handle: '',
        bleeps: `I'm so stupid that I forgot to write a message. Nice!`
    }
})

var mostRecent = new Parse.Query(Bleep)
mostRecent.descending("createdAt");
mostRecent.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) {
      var object = results[i];
      alert(object.id + ' - ' + object.get('playerName'));
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});


class Bleeplist extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (<ul>
                // something.map()
            </ul>)
    }
}

class BleepView extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (<div className='bleep'>
                    <div className='user'>
                            <span> Username </span> <span> time </span> 
                    </div>
                    <div className='content'>
                             <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    </div>
                    <div className='bar'>
                            <div><images.svgOne /> </div>
                            <div><images.svgTwo /> </div>


                    </div>
                </div>)
    }
}

class Register extends React.Component {
    constructor(props) {
        super(props)
    }
    register(e) {
        e.preventDefault()
        console.log(this.refs.regEmail)
        var user = new Parse.User({
            username: React.findDOMNode(this.refs.regEmail).value,
            password: React.findDOMNode(this.refs.regPassword).value
        })
        user.signUp(null, {
        success: function(user) {
            // Hooray! Let them use the app now.
        },
        error: function(user, error) {
            // Show the error message somewhere and let the user try again.
        alert("Error: " + error.code + " " + error.message);
  }
})
    }
    login(e) {
        e.preventDefault()
        Parse.User.logIn(React.findDOMNode(this.refs.logEmail).value, React.findDOMNode(this.refs.logPassword).value, {
        success: function(user) {
            // Do stuff after successful login.
            },
        error: function(user, error) {
            // The login failed. Check error to see why.
  }
} )
    }
    render() {
        return (<div><header>
        <div class="head_logo">
            <img className="logo" src="../images/bitter_bw.svg"/>
        </div>
    
    </header><div className="wrapper">
            <form>
                LOG-IN
                <input type="email" placeholder="email" ref='logEmail'></input>
                <input type="password" placeholder="password" ref='logPassword'></input>
                <button onClick={(e) => this.login(e)} type="submit">  </button>
            </form>
            <form>
                REGISTER
                <input type="email" placeholder="email" ref='regEmail'></input>
                <input type="password" placeholder="password" ref='regPassword'></input>
                <button onClick={(e) => this.register(e)} type="submit"></button>
            </form>
            SPECIAL THANKS TO PAUL SAAD AND TONI LOUSTEAU
        </div></div>)
    }
}

class NavigationView extends React.Component{
    constructor(props){
        super(props)

    }

    render() {
        return(
          <div className="navigation"> 

            <div className="navLogo">
              <img  a href="/#home" className="logo" src="../images/bitter_bw.svg"/>
            </div>     

            <form>
              <input type="search" placeholder="Search or something"> </input>
            </form>

            <ul>
                <li><a href="/#home"> Home </a> </li>
                <li> <a href="/#login"> Login </a> </li>
                <li> Profile </li>
                <li> <a href="/#home"> Bleeps </a> </li>
            </ul>


     </div>

            )
    }
}


class Home extends React.Component{
    constructor(props){
        super(props)
    }


render() {
    return (
        <div className="home"> 
            <div className="bitterFeed"> 

            </div>
  </div>



        )
    }
}


class Profile extends React.Component{
    constructor(props){
        super(props)
    }


render() {
    return (
        <div className="profile"> 
            <div className="prof_info">
                    <div className="avatar"> </div>

              </div>

            
    </div>



        )
    }
}

export var BleepRouter = Parse.Router.extend({
    
    initialize: function() {
        console.log('app is routing')
        Parse.history.start()
    },
    
    routes: {
        'login': 'login',
        'profile': 'profile',
        'home': 'home', //timeline
        '#users/:userid' : 'profile', //profile page
        '*anything' : 'home' //anything else is home
    },

    home: function(){
        React.render(<Home />, document.querySelector('.container'))

    },

     login: function(){
        React.render(<Register />, document.querySelector('.container'))

    },

      profile: function(){
        React.render(<Profile />, document.querySelector('.container'))

    },




})





React.render(<Profile />, document.querySelector('.container'))
React.render(<NavigationView />, document.querySelector('.nav'))
React.render(<Register />, document.querySelector('.container'))