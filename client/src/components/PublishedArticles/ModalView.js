import React from 'react'

function ModalView(props) {

    return (
        <div id={"myModalView" + props.article.id} class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">{props.article.title}</h4>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>{props.article.context}</p>
      </div>
    </div>

  </div>
</div>
    )}

export default ModalView