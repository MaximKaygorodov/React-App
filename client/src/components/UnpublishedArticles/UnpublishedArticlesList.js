import React from 'react'
import UnpublishedArticle from './UnpublishedArticle'
import contents from '../../contents'

function UnpublishedArticlesList () {
    const articleElement = contents.map(article => 
        <p><UnpublishedArticle article = {article}/></p>)
        return (
            <div>
                {articleElement}
            </div>
        )
    }


export default UnpublishedArticlesList