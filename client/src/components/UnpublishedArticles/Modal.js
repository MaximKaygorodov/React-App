import React, {Component} from 'react'

function Modal(props) {
  function deleteUnpublished() {
    var articleId = props.article.id
    var deleteMethod = { 
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
                };    
    fetch('api/contents/'+ articleId, deleteMethod).then(function(content){
    console.log(content);
    });
}
    return (
        <div id={"myModal" + props.article.id} class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Are you sure you want to delete the article?</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body btn-group w-25 justify-content-end">
        <button type="button" onClick={deleteUnpublished} class="btn btn-danger" >Yes</button>
        <button type="button" class="btn btn-light" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>
    )}

export default Modal