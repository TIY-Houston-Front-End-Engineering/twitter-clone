'use-strict';
require('es5-shim');
require('babel/register')

import {Promise} from 'es6-promise'
import $ from 'jquery'
import Backbone from 'backbone'
import React from 'react'
import * as Images from './images.js'
import {BleepRouter} from './app.js' 

Parse = window.Parse
Parse.$ = $



window.addEventListener('load',() => {
            new BleepRouter
})