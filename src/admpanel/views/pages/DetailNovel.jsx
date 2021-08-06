import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import tensei from 'assets/images/poster/tensei-shitara.jpg';
import useAuth from 'helpers/Context';

function DetailNovel() {
    const {handleModal} = useAuth()
    const history = useHistory()
    const params = useParams()
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card strpied-tabled-with-hover">
                    <div className="card-header pb-2">
                        <div className="row">
                            <div className="col">
                                <h4 className="card-title">Novel Detail</h4>
                                <p className="card-category">Here is a file-file for novel</p>
                            </div>
                            <div className="ml-auto my-auto col-auto">
                                {/* <button type="button" onClick={() => history.push('/adm-panel/novel-archive/' + params.novel + '/add-chapter')} className="btn btn-sm btn-success d-flex align-items-center">
                                    <i className="bx bx-plus-medical mr-1"></i>
                                    Add Chapter
                                </button> */}
                                <button type="button" onClick={() => handleModal('modal-chapter')} className="btn btn-sm btn-success d-flex align-items-center">
                                    <i className="bx bx-plus-medical mr-1"></i>
                                    Add Chapter
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body border-top">
                        <div className="row">
                            <div className="col-3 pb-2">
                                <div className="poster mb-3" style={{width: "100%"}}>
                                    <img src={tensei} className="img-fluid rounded w-100" alt="poster-img" />
                                </div>
                                <div className="info">
                                    <div className="w-100">
                                        <b>Type</b>
                                        <p className="mb-0">Web Novel (WN)</p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="w-100">
                                        <b>Total Chapter</b>
                                        <p className="mb-0">224</p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="w-100">
                                        <b>Genre</b><br />
                                        <span className="badge badge-info mr-1">Isekai</span>
                                        <span className="badge badge-info mr-1">Overpower</span>
                                        <span className="badge badge-info mr-1">Fantasy</span>
                                        <span className="badge badge-info mr-1">Comedy</span>
                                        <span className="badge badge-info mr-1">Martial Arts</span>
                                        <span className="badge badge-info mr-1">Adventure</span>
                                        <span className="badge badge-info mr-1">Demon</span>
                                        <span className="badge badge-info mr-1">Shounen</span>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="w-100">
                                        <b>Language</b>
                                        <p className="mb-0">Japanesse</p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="w-100">
                                        <b>Author</b>
                                        <p className="mb-0">Fuse</p>
                                    </div>
                                    <hr className="my-2" />
                                    <div className="w-100">
                                        <b>Year</b>
                                        <p className="mb-0">2014</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="row">
                                    <div className="col-12 mb-2">
                                        <div className="h6 mb-0"><b>Novel Name</b></div>
                                        <p className="font-16 font-weight-5 mb-1">Tensei Shitara Slime Detta-ken</p>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div className="h6 mb-0"><b>Rating</b></div>
                                        <div className="d-block">
                                            <span className="font-size-20 text-warning">
                                                <i className="bx bxs-star mr-1"></i>
                                                <i className="bx bxs-star mr-1"></i>
                                                <i className="bx bxs-star mr-1"></i>
                                                <i className="bx bxs-star mr-1"></i>
                                                <i className="bx bxs-star"></i>
                                            </span>
                                            (5.0)
                                        </div>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <div className="h6 mb-0">
                                            <b>Sinopsis</b>
                                        </div>
                                        <p>A man is stabbed by a robber on the run after pushing his coworker and his coworker’s new fiance out of the way. As he lays dying, bleeding on the ground, he hears a voice. This voice is strange and interprets his dying regret of being a virgin by giving him the [Great Sage] unique skill! Is he being made fun of?!!</p>
                                    </div>
                                    <div className="col-12 table-responsive">
                                        <div className="h6"><b>List Chapter</b></div>
                                        <table className="table table-hover table-striped font-12">
                                            <thead>
                                                <tr>
                                                    <th>Chapter</th>
                                                    <th>Title Chapter</th>
                                                    <th>Published By</th>
                                                    <th>Created At</th>
                                                    <th>Updated At</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Chapter 01</td>
                                                    <td>Reinkarnasi</td>
                                                    <td>FZ-Dev</td>
                                                    <td>08 Agustus 2020</td>
                                                    <td>-</td>
                                                    <td className="td-actions text-right">
                                                        <button type="button" className="btn btn-sm btn-warning text-white mr-1">
                                                            <i className="bx bx-book"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-sm btn-info mr-1">
                                                            <i className="bx bxs-edit-alt"></i>
                                                        </button>
                                                        <button type="button" className="btn btn-sm btn-danger">
                                                            <i className="bx bx-trash"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailNovel
