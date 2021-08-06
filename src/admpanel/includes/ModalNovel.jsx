import React, { useState, useEffect } from 'react';
import useAuth from 'helpers/Context';
import Multiselect from 'multiselect-react-dropdown';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import api from 'services/restapi';

function ModalNovel({status}) {
    const {handleModal} = useAuth()
    const [state, setState] = useState({})
    const [genre, setGenre] = useState(null)
    const [show, setShow] = useState(status)

    const handleOnchange = (e) => {
        setState({ ...state, [e.target.name]: [e.target.value][0]})
    }
    const handleCKeditor = (e, editor) => {
        const data = editor.getData();
        setState({ ...state, description: data})
    }

    useEffect(() => {
        async function loadAllNovel() {
            await api.get('genre/')
                .then(res => {
                    const {data} = res.data
                    setGenre(data)
                })
                .catch(err => {
                    return false
                })
        }
        loadAllNovel()
    }, [])
    
    const onSelect = (selectedList, selectedItem) => {
        console.log(selectedList, selectedItem);
        setState({...state, genre:selectedList})
    }

    const onRemove = (selectedList, removedItem) => {
        const genre = state.genre.filter(x => x.id !== removedItem.id)
        setState({...state, genre})
    }

    const handleClose = () => {
        handleModal(null)
        setShow(false)
    }
    return (
        <div className={`modal fade ${show ? 'show' : ''}`} id="add-novel" role="dialog" aria-labelledby="add-novel-label">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add-novel-label">Add New Novel</h5>
                        <button type="button" onClick={handleClose} className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row no-gutters">
                            {
                                genre ?
                                    <div className="col-12">
                                        <form noValidate>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label className="font-weight-6">Poster Image</label>
                                                        <div className="custom-file">
                                                            <input type="file" className="custom-file-input" id="poster" name="poster" onChange={handleOnchange} />
                                                            <label className="custom-file-label">Choose file</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label className="font-weight-6">Novel Name</label>
                                                        <input type="text" id="title" name="title" className="form-control" onChange={handleOnchange} placeholder="Type novel name ..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label className="font-weight-6">Author Name</label>
                                                        <input type="text" id="author" name="author" className="form-control" onChange={handleOnchange} placeholder="Type novel name ..." />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row mb-2">
                                                <div className="col-sm-12 col-md-6">
                                                    <label className="font-weight-6">Type Novel</label>
                                                    <select id="type" name="type" onChange={handleOnchange} className="form-control">
                                                        <option value="" disabled>-- Select One --</option>
                                                        <option value="WN">Web Novel (WN)</option>
                                                        <option value="LN">Light Novel (WN)</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <label className="font-weight-6">Language</label>
                                                    <select id="language" name="language" onChange={handleOnchange} className="form-control">
                                                        <option value="" disabled>-- Select One --</option>
                                                        <option value="Korean">Korea</option>
                                                        <option value="Japanese">Japanese</option>
                                                        <option value="Chinesee">Chinesee</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="form-group">
                                                        <label className="font-weight-6">Genre Novel</label>
                                                        <Multiselect
                                                            options={genre} // Options to display in the dropdown
                                                            selectedValues={state.genre} // Preselected value to persist in dropdown
                                                            onSelect={onSelect} // Function will trigger on select event
                                                            onRemove={onRemove} // Function will trigger on remove event
                                                            displayValue="name" // Property name to display in the dropdown options
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="form-group">
                                                        <label className="font-weight-6">Status Novel</label>
                                                        <select id="status" name="status" onChange={handleOnchange} className="form-control">
                                                            <option value="" disabled>-- Select One --</option>
                                                            <option value="Ongoing">Ongoing</option>
                                                            <option value="Completed">Completed</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <div className="form-group">
                                                        <label className="font-weight-6">Sinopsis</label>
                                                        <CKEditor
                                                            name="sinopsis"
                                                            editor={ ClassicEditor }
                                                            onChange={handleCKeditor}
                                                            data="<p>Type sinopsis of novel ...</p>">
                                                        </CKEditor>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-info float-right">Add Novel</button>
                                        </form>
                                    </div>
                                :
                                    <div className="col-12 text-center">
                                        <div className="spinner-border text-success mr-1" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-success mr-1" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                        <div className="spinner-border text-success" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalNovel;