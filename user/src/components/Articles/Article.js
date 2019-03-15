import React from 'react'

function Article(props) {
  return (
					<div>
						<div class='card-header'>
						<h2>{props.article.title}</h2>
						</div>
					<div class='card-body'>
						<p>{props.article.context}</p>
					</div>
					</div>
  )
}

export default Article;