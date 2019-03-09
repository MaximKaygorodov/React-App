import React from 'react'

function QuillTextArea() {
    return (
        <div>
            <textarea class="form-control"  name="title" placeholder="Title" rows="1"></textarea> <br/>
                        
            <textarea class="form-control" name="context"  id="editor" placeholder="Start to write" rows="10"></textarea>
        
        </div>

    )
}

export default QuillTextArea