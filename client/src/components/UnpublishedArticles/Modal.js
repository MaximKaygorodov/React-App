import React, {Component} from 'react'

class Modal extends Component {
    render(){


            function deleteContent(id) { 
                
                var myInit = { method: 'DELETE', 
                headers: { 
                'Content-Type': 'application/json'} 
            }; 
                  fetch('api/contents/' + id, myInit).then(function(content){ 
                  console.log(content); 
                  }); 
                }
    
    return (
        <div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Are you sure you want to delete the article?</h4>
      </div>
      <div class="modal-footer">
        <button type="button" onClick={deleteContent()} class="btn btn-danger" data-dismiss="modal">Yes</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">No</button>
      </div>
    </div>

  </div>
</div>
    )}}

export default Modal