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
                        <img src="https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" class="rounded-circle block-100 my-4 mx-auto d-block" alt="User-Photo"></img>
                        <Router  history={history}>
                            <div class="nav nav-pills flex-column" id="">
                            <Link class="nav-link dark-hover" to='/create'>Create New Article</Link>
                            <Link class='nav-link dark-hover' to='/'>Published Articles</Link>
                            <Link class='nav-link dark-hover' to='/unpublished'>Unpublished Articles</Link>
                            </div>
                        </Router >
                    </div>
                </div>
            </div>
    )
}
}
export {history}
export default SideMenuBody