import React from 'react'
import PublishedArticle from './PublishedArticle'
import contents_ready from '../../contents_ready'


function PublishedArticlesList () {
    const artilces = contents_ready.reverse();
    const articleElement = artilces.map(article => 
        <div class="card pArticle" key={article.id}><PublishedArticle article = {article}/></div>)
        return (
            <div>
                <h1>Published Articles</h1>
                <hr/>
                <div class="card-columns">
                {articleElement}
            </div>
            </div>
        )
    }


export default PublishedArticlesList