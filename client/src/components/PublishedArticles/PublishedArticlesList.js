import React, {Component} from 'react'
import PublishedArticle from './PublishedArticle'
import pArticles from '../../pArticles'


class PublishedArticlesList extends Component {
    render() {
        return (
            <PublishedArticle article={pArticles[ 1 ]}/>
        )
    }
}

export default PublishedArticlesList