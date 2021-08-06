import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Banner() {
    return (
        <div className="page-header">
            <div className="overlay"></div>
            <div className="container banner">
                <div className="col px-0">
                    <div className="row align-items-center justify-content-center mb-4">
                        <div className="col-7 text-center text-white">
                            <div className="title font-rhd-bold">Selamat Datang di Translation Novel</div>
                            {/* <p>TNovel adalah platform untuk membaca novel online berbahasa indonesia di mana saja dan kapan saja. Kamu bisa menemukan berbagai cerita menarik dengan berbagai genre. Ayo mulai baca sekarang!</p> */}
                        </div>
                    </div>
                    <div className="row align-items-center justify-content-center">
                        <div className="col-8 text-center">
                            <form noValidate>
                                <div className="input-group-custom">
                                    <input id="search" type="text" className="form-control-custom" placeholder="Pencarian..." name="search" autoComplete="off" />
                                    <select className="form-control-custom">
                                        <option value="" disabled>-- Type Novel --</option>
                                        <option value="0">Web Novel (WN)</option>
                                        <option value="1">Light Novel (LN)</option>
                                    </select> 
                                    <button type="submit" className="btn-custom" id="submit">
                                        <FontAwesomeIcon icon={["fa", "search"]} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
