'use-strict';
require('es5-shim');
require('babel/register')

import {Promise} from 'es6-promise'
import $ from 'jquery'
import Backbone from 'backbone'
import React from 'react'

Parse.initialize("OWNIhkyQCSu1aS74cx0DkdSF31EN314Vz5YDyLsd", "XkdUHPnU0KAYIXnvfcOEpQAkA1zCNDvxhKuN2maZ");

var Bleep = Parse.Object.extend({
    className: 'tweets',
    defaults: {
        handle: '',
        bleeps: `you're so stupid that you forgot to write a message. Nice!`
    }
})

class BleepView extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        return (<div className='bleep'>
                     <div className='user'></div>
                    <div className='content'></div>
                    <div className='bar'></div>
                </div>)
    }
}

var BitterUser = Parse.User.extend({
    
    userEmail: 'email',
     userName: ''
     password: ''
})

window.test = new Bleep()

test.save()