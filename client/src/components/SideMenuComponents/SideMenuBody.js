import React, {Component} from 'react'
import {  } from 'react-router'
import { Router ,Link } from 'react-router-dom'
import createBorwserHistory from 'history/createBrowserHistory'

const history = createBorwserHistory();

class SideMenuBody extends Component {
    render(){

        return (
            <div class={this.props.class} id="side-menu"> 
                <div class="row">
                    <div class="container-fluid text-center">
                        <img src="https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" class="img-circle user-photo" alt="User-Photo"></img>
                        <Router  history={history}>
                            <ul class="nav nav-pills nav-stacked">
                            <li class=''><Link to='/create'>Create New Article</Link></li>
                            <li class=''><Link to='/'>Published Articles</Link></li>
                            <li class=''><Link to='/unpublished'>Unpublished Articles</Link></li>
                            </ul>
                        </Router >
                    </div>
                </div>
            </div>
    )
}
}
export {history}
export default SideMenuBody