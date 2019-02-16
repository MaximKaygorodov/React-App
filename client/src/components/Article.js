import React, {Components} from 'react'


class Article extends Components {
    render () {
        const {article} = props
        const body = <p>{article.context}</p>
        return (
            <div>
                <h1>{article.title}</h1>
                {body}
            </div>
        )
    }
}

export default Article