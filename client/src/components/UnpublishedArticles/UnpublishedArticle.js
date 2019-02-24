import React from 'react'
import Modal from './Modal'

function UnpublisedArticle(props) {
    const body = <p>{props.article.context}</p>
    return (
        <div class="row">
            <div class="card col-10">
                <div class="card-body">
                    <h3>{props.article.title}</h3><br/>
                    {body}
                </div>
            </div>
            <div class="btn-group-vertical ml-1 h-25">
                <button type="button" class=" btn-danger btn" data-toggle="modal" data-target={"#myModal" + props.article.id}><i class="fas fa-trash-alt"></i></button>
                <button type="button" class=" btn-light btn"><i class="fas fa-pencil-alt"></i></button>
                <button type="button" class=" btn-light btn"><i class="fas fa-bullhorn"></i></button>      
            </div>
        </div>
    )}


    
export default UnpublisedArticle