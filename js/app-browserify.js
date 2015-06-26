'use-strict';
require('es5-shim');
require('babel/register')

import {Promise} from 'es6-promise'
import $ from 'jquery'
import Backbone from 'backbone'
import React from 'react'
import * as Images from './images.js'

Parse.initialize("OWNIhkyQCSu1aS74cx0DkdSF31EN314Vz5YDyLsd", "XkdUHPnU0KAYIXnvfcOEpQAkA1zCNDvxhKuN2maZ");

var Bleep = Parse.Object.extend({
    className: 'tweets',
    defaults: {
        handle: '',
        bleeps: `I'm so stupid that I forgot to write a message. Nice!`
    }
})

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
        return (<div className="wrapper">
            <form>
                LOG-IN
                <input type="email" placeholder="email" ref='logEmail'></input>
                <input type="password" placeholder="password" ref='logPassword'></input>
                <button onClick={(e) => this.login(e)} type="submit"></button>
            </form>
            <form>
                REGISTER
                <input type="email" placeholder="email" ref='regEmail'></input>
                <input type="password" placeholder="password" ref='regPassword'></input>
                <button onClick={(e) => this.register(e)} type="submit"></button>
            </form>
        </div>)
    }
}

React.render(<Register />, document.querySelector('.container'))