import React from 'react'

function Editor() {
    return (
<div>
            <br/><br/><br/>

    <div class="row">
        <div class="col-md-10" >
                <form action="/action_page.php" name="contentForm">
                    <div class="form-group">
                            <label for="text-area">What's new? </label>
                            <input type="hidden" name="id" value="0" />
                        <textarea class="form-control"  name="title" placeholder="Title" rows="1"></textarea> <br/>
                        
                        <textarea class="form-control" name="context"  id="editor" placeholder="Start to write" rows="10"></textarea>
                            

                    </div>
                    <div class="row text-right">
                            <button type="button" class="btn btn-default" id="publish">Publish Article</button>
                            <button type="button" class="btn btn-default" id="save">Save Article as Unpublished</button>
                    </div> 
                    </form>    
                               
        </div>
    </div>
</div>
    )
}

export default Editor