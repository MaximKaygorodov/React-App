import React from 'react'
import {  } from 'react-router'
import { Router ,Link } from 'react-router-dom'
import createBorwserHistory from 'history/createBrowserHistory'

const history = createBorwserHistory();

function SideMenuBody (props) {

        return (
            <div class={props.class} id="side-menu"> 
                <div class="row">
                    <div class="container-fluid text-center">
                        <img src="https://i.mycdn.me/image?id=593157762248&plc=WEB&tkn=*PwnZ2-HQ--pYdGMUh_tR5rlt1lM&fn=sqr_288" class="rounded-circle block-100 my-4 mx-auto d-block" alt="User"></img>
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
export {history}
export default SideMenuBody