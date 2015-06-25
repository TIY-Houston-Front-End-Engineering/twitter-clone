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
                    <div className='bar'>
                            <div> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                                        viewBox="0 0 24 24" enable-background="new 0 0 24 24">
                                        <path d="M15,3H6C5.2,3,4.5,3.5,4.2,4.2l-3,7.1C1,11.5,1,11.7,1,12v1.9l0,0L1,14c0,1.1,0.9,2,2,2h6.3l-0.9,4.6l0,0.3
                                        c0,0.4,0.2,0.8,0.4,1.1L9.8,23l6.6-6.6C16.8,16,17,15.6,17,15V5C17,3.9,16.1,3,15,3z M19,3v12h4V3H19z"/>
                            </svg> </div>

                            <div> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                        viewBox="0 0 24 24" enable-background="new 0 0 24 24">
                                        <path d="M12,6v3l4-4l-4-4v3c-4.4,0-8,3.6-8,8c0,1.6,0.5,3,1.2,4.3l1.5-1.5C6.2,14,6,13,6,12C6,8.7,8.7,6,12,6z M18.8,7.7l-1.5,1.5
                                        C17.7,10,18,11,18,12c0,3.3-2.7,6-6,6v-3l-4,4l4,4v-3c4.4,0,8-3.6,8-8C20,10.4,19.5,9,18.8,7.7z"/>
                            </svg></div>


                    </div>
                </div>)
    }
}

var test = new Bleep()
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
