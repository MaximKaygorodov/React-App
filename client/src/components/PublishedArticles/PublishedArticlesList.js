import React, {Component} from 'react'
import PublishedArticle from './PublishedArticle'
import contents_ready from '../../contents_ready'


function PublishedArticlesList () {
    const articleElement = contents_ready.map(article => 
        <div class="card pArticle" key={article.id}><PublishedArticle article = {article}/></div>)
        return (
            <div class="card-columns">
                {articleElement}
            </div>
        )
    }


export default PublishedArticlesList