import React from 'react'
import UnpublishedArticle from './UnpublishedArticle'
import contents from '../../contents'

function UnpublishedArticlesList () {
    const articleElement = contents.map(article => 
        <p key={article.id}><UnpublishedArticle article = {article}/></p>)
        return (
            <div>
                {articleElement}
            </div>
        )
    }


export default UnpublishedArticlesList