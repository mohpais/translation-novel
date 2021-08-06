import React, { useState } from 'react';
import useAuth from 'helpers/Context';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


function ModalChapter({status}) {
    const {handleModal} = useAuth()
    const [state, setState] = useState({})
    const [show, setShow] = useState(status)
    
    const handleOnchange = (e) => {
        setState({ ...state, [e.target.name]: [e.target.value][0]})
    }

    const handleCKeditor = (e, editor) => {
        const data = editor.getData();
        setState({ ...state, description: data})
    }
    const handleClose = () => {
        handleModal(null)
        setShow(false)
    }
    return (
        <div className={`modal fade ${show ? 'show' : ''}`} id="add-chapter" data-backdrop="static" role="dialog" aria-labelledby="add-chapter-label">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add-chapter-label">Add New Chapter</h5>
                        <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
                        <   span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form noValidate>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Title</label>
                                        <input type="text" id="title" name="title" onChange={handleOnchange} className="form-control" placeholder="Type title ..." />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Chapter</label>
                                        <input type="number" id="chapter" name="chapter" className="form-control" min="0" placeholder="0" onChange={handleOnchange} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="form-group">
                                        <label className="font-weight-6">Description</label>
                                        <CKEditor 
                                            name="description"
                                            editor={ ClassicEditor }
                                            onChange={handleCKeditor}
                                            data="<p>Type description of chapter ...</p>">
                                        </CKEditor>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <button type="submit" className="btn btn-info float-right">Add Chapter</button>
                        </form>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Add Chapter</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default ModalChapter;