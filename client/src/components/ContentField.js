import React, {Component} from 'react'
import PublishedArticlesList from './PublishedArticles/PublisedArticlesList'
import articles from '../pArticles'

class ContentField extends Component {
    render(){

        return (
            <div>
            <div class="col-sm-3 full-height">123</div>
        <div class="col-sm-9 col-xs-12 content-field" >
            <PublishedArticlesList articles={articles}/>                
            </div>
        </div>
    )
}
}

export default ContentField