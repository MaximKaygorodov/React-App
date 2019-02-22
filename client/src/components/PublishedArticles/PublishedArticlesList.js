import React, {Component} from 'react'
import PublishedArticle from './PublishedArticle'
import contents_ready from '../../contents_ready'


function PublishedArticlesList () {
    const articleElement = contents_ready.map(article => 
        <p key={article.id}><PublishedArticle article = {article}/></p>)
        return (
            <div>
                {articleElement}
            </div>

        )
    }


export default PublishedArticlesList