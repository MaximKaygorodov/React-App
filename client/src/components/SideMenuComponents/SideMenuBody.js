import React from 'react'

function SideMenuBody(props) {
    return (
        <div class={props.class} id="side-menu"> 
                <div class="row">
                    <div class="container-fluid text-center">
                        <img src="https://www.r-users.com/wp-content/plugins/all-in-one-seo-pack/images/default-user-image.png" class="img-circle user-photo" alt="User-Photo"></img>
                        <ul class="nav nav-pills nav-stacked">
                            <li><a href="сreateNewArticle.html">Create New Article</a></li>
                                <li class="active"><a href="index.html">Published Articles</a></li>
                                <li><a href="unpublishedArticles.html">Unpublished Articles</a></li>
                            </ul>
                    </div>
                </div>
            </div>
    )
}

export default SideMenuBody