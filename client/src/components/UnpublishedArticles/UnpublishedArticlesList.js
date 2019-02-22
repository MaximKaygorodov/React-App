import React from 'react'
import UnpublishedArticle from './UnpublishedArticle'
import contents from '../../contents'
import Modal from './Modal'

function UnpublishedArticlesList () {
    const articleElement = contents.map(article => 
        <p key={article.id}><Modal article={article}/><UnpublishedArticle article = {article}/></p>)
        return (
            <div>
                {articleElement}
                
            </div>
        )
    }


export default UnpublishedArticlesList