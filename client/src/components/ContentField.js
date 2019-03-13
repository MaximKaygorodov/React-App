import React, {Component} from 'react'
import PublishedArticlesList from './PublishedArticles/PublishedArticlesList'
import { Route, Router } from 'react-router-dom'
import PublishedArticlePage from './PublishedArticles/PublishedArticlePage'
import Editor from './CreateAtriclePage/Editor'
import UnpublishedArticlesList from './UnpublishedArticles/UnpublishedArticlesList'
import {history} from './SideMenuComponents/SideMenuBody'



class ContentField extends Component {
    render(){

        return (
            <div class="row m-0 p-0 mt-5 mr-md-5 content-field">
                <div class=" col-md-3 w-0"></div>
                <Router history={history}>
                    <div class="col-md-9 col-12">
                        <Route path='/publishedArticlePage' component={PublishedArticlePage}/>
                        <Route exact path='/' component={PublishedArticlesList}/>       
                        <Route path='/create' component={Editor}/>
                        <Route path='/unpublished' component={UnpublishedArticlesList}/>
                    </div>  
                </Router>         
            </div>
    )
}
}

export default ContentField