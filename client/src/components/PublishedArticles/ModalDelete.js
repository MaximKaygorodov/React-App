import React from 'react'

function ModalDelete(props) {
    function deleteContent() {
      var id = props.article.id;
      var myInit = { 
          method: 'DELETE',
          headers: {'Content-Type': 'application/json'}
                  };
      fetch('aplic/contents/'+id, myInit).then(function(content){
      console.log(content);
      });
  }
    return (
        <div id={"myModalDelete" + props.article.id} class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Are you sure you want to delete the article?</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body btn-group w-25 justify-content-end">
        <button type="button" onClick={deleteContent} class="btn btn-danger" >Yes</button>
        <button type="button" class="btn btn-light" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>
    )}

export default ModalDelete