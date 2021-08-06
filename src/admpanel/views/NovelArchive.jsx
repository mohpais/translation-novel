import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom';
import api from 'services/restapi';
import useAuth from 'helpers/Context';

function NovelArchive() {
    const history = useHistory()
    const [novel, setNovel] = useState()
    const [loading, setLoading] = useState(true)
    const {handleModal} = useAuth()
    useEffect(() => {
        async function loadAllNovel() {
            // api.defaults.headers.Authorization = `Bearer ${token}`
            await api.get('novel/')
                .then(res => {
                    const {data} = res.data
                    setNovel(data)
                })
                .catch(err => {
                    return false
                })
            setLoading(false)
        }
        loadAllNovel()
    }, [])

    const fetchData = data => {
        return data.map((novel, i) => {
            return (
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{novel.title}</td>
                    <td><i className="bx bxs-star mr-1 text-warning"></i>4.5 (1260 vote)</td>
                    <td>
                        {
                            novel.type === 'WN' ?
                                'Web Novel '
                            :
                                'Light Novel '
                        }
                        ({novel.type})
                    </td>
                    <td>{novel.author}</td>
                    <td>{novel.language}</td>
                    <td>{novel.year}</td>
                    <td>
                        <span className={`badge ${novel.status === 'Ongoing' ? 'badge-success' : 'badge-primary'} p-1 font-10`}>{novel.status}</span>
                    </td>
                    <td className="td-actions text-right">
                        <button type="button" onClick={() => history.push('/adm-panel/novel-archive/' + novel.slug + '/detail')} className="btn btn-sm btn-warning text-white mr-1">
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
            )
        })
    }
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header mb-2">
                        <div className="row">
                            <div className="col">
                                <h4 className="card-title">Novel Archive</h4>
                                <p className="card-category">Here is a file-file for novel</p>
                            </div>
                            <div className="ml-auto my-auto col-auto">
                                {/* <button type="button" onClick={() => history.push('/adm-panel/novel-archive/add')} className="btn btn-sm btn-success d-flex align-items-center">
                                    <i className="bx bx-plus-medical mr-1"></i>
                                    Add Archive
                                </button> */}
                                <button type="button" onClick={() => handleModal('modal-novel')} className="btn btn-sm btn-success d-flex align-items-center">
                                    <i className="bx bx-plus-medical mr-1"></i>
                                    Add Archive
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Novel Name</th>
                                            <th>Rate</th>
                                            <th>Type</th>
                                            <th>Authors</th>
                                            <th>Language</th>
                                            <th>Year</th>
                                            <th>Status Translation</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { 
                                            !loading ? 
                                                fetchData(novel) 
                                            : 
                                                <tr>
                                                    <td colSpan="9" className="text-center">
                                                        <div className="spinner-border text-success mr-1" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                        <div className="spinner-border text-success mr-1" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                        <div className="spinner-border text-success" role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                        }
                                        {/* <tr>
                                            <td>1</td>
                                            <td>Tensei Shitara Slime Datta Ken</td>
                                            <td><i className="bx bxs-star mr-1 text-warning"></i>4.5 (1260 vote)</td>
                                            <td>Web Novel (WN)</td>
                                            <td>Fuse</td>
                                            <td>Japanese</td>
                                            <td>2013</td>
                                            <td>
                                                <span className="badge badge-primary p-1 font-10">Completed</span>
                                            </td>
                                            <td className="td-actions text-right">
                                                <button type="button" onClick={() => history.push('/adm-panel/novel-archive/tensei-shitara-slime-datta-ken/detail')} className="btn btn-sm btn-warning text-white mr-1">
                                                    <i className="bx bx-book"></i>
                                                </button>
                                                <button type="button" className="btn btn-sm btn-info mr-1">
                                                    <i className="bx bxs-edit-alt"></i>
                                                </button>
                                                <button type="button" className="btn btn-sm btn-danger">
                                                    <i className="bx bx-trash"></i>
                                                </button>
                                            </td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NovelArchive
