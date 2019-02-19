import React from 'react'
import {render} from 'react-dom'
import ContentField from './components/ContentField'
import SideMenu from'./components/SideMenu'
import Header from './components/Header'

render (<SideMenu/>, document.getElementById('left-menu'))
render (<Header/>, document.getElementById('header'))
render (<ContentField/>, document.getElementById('content-field'))

