import React, {Component} from 'react'
import PublishedArticlesList from './PublishedArticles/PublishedArticlesList'
import { Route, Router } from 'react-router-dom'
import Editor from './CreateAtriclePage/Editor'
import UnpublishedArticlesList from './UnpublishedArticles/UnpublishedArticlesList'
import {history} from './SideMenuComponents/SideMenuBody'



class ContentField extends Component {
    render(){

        return (
            <div>
            <div class="col-sm-3 full-height"></div>
        <div class="col-sm-9 col-xs-12 content-field" >
            <Router history={history}>
                <div>
                    <Route exact path='/' component={PublishedArticlesList}/>       
                    <Route path='/create' component={Editor}/>
                    <Route path='/unpublished' component={UnpublishedArticlesList}/>
                </div>  
            </Router>         
            </div>
        </div>
    )
}
}

export default ContentField