import React from 'react'
import { Router ,Link } from 'react-router-dom'
import createBorwserHistory from 'history/createBrowserHistory'

const history = createBorwserHistory();

function SideMenuBody (props) {

function logout(e){
    e.preventDefault();
        console.log("log_out");
        var myInit = { method: 'POST',
            headers: {
                'Content-Type': 'application/json'},
            redirect: 'follow'
        };
        fetch('api/logout/', myInit).then(function(res){
            window.location.href = '/registration';
        });
}

        return (
            <div class={props.class} id="side-menu"> 
                <div class="row">
                    <div class="container-fluid text-center">
                        <img src="http://makisushi.kz/image/cache/data/4sezona-500x500.jpg" class="rounded-circle block-100 my-4 mx-auto d-block" alt="User"></img>
                        <Router  history={history}>
                            <div class="nav nav-pills flex-column" id="">
                            <Link class="nav-link dark-hover" to='/create'>Create New Article</Link>
                            <Link class='nav-link dark-hover' to='/'>Published Articles</Link>
                            <Link class='nav-link dark-hover' to='/unpublished'>Unpublished Articles</Link>
                            <Link class='nav-link dark-hover' to='#' id="logout" onClick={logout}>Exit</Link>
                            </div>
                        </Router >
                    </div>
                </div>
            </div>
    )
}
export {history}
export default SideMenuBody