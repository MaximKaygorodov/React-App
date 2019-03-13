import React from 'react'
import UnpublishedArticle from './UnpublishedArticle'
import contents from '../../contents'

function UnpublishedArticlesList () {
    const articles = contents.reverse();
    const articleElement = articles.map(article => 
        <div class="container-fluid mx-0 px-0 mb-3" key={article.id}><UnpublishedArticle article = {article}/></div>)
        return (
            <div>
                {articleElement} 
            </div>
        )
    }


export default UnpublishedArticlesList