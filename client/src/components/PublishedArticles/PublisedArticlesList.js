import React, {Component} from 'react'
import PublishedArticle from './PublishedArticle'

class PublisedArticlesList extends Component {
    render() {
        return (
            <ul>
                <li><PublishedArticle article={this.props.articles[0]}/></li>
            </ul>
        )
    }
}

export default PublisedArticlesList