import React from 'react'
import UnpublishedArticle from './UnpublishedArticle'
import contents from '../../contents'
import Modal from './Modal'

function UnpublishedArticlesList () {
    const articleElement = contents.map(article => 
        <div class="container-fluid mx-0 px-0 mb-3" key={article.id}><Modal article={article}/><UnpublishedArticle article = {article}/></div>)
        return (
            <div>
                {articleElement} 
            </div>
        )
    }


export default UnpublishedArticlesList