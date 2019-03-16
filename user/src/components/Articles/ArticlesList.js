import React from 'react'
import Article from './Article'
import articles from '../../articles'


function PublishedArticlesList() {
    const artilcesArr = articles.reverse();
    const articleElement = artilcesArr.map(article => 
        <div class="card mb-5 mx-3" key={article.id}><Article article = {article}/></div>)
        return (  
               <div>
                    {articleElement}
               </div>
        )
    }


export default PublishedArticlesList