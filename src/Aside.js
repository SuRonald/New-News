import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

const Aside = () => {
    const blank = "";
    const [searchKey, setSearchKey] = useState("");
    const [keyError, setKeyError] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(searchKey);
        console.log("Validating");
        console.log(searchKey.length);

        if (!(searchKey.length > 2)){
            setKeyError("At least 3 character!");
        }
        else {
            setKeyError(blank);
            history.push(`/Search/${searchKey}`);
        }
    }

    return (
        <div className="col-md-4">
            <div className="position-sticky tops">
                <div className="p-4 mb-3 bg-light box-about">
                    <div>
                        <h2>Search</h2>
                        <p className="mb-0">Ingin mencari informasi tertentu? Gunakan searchbar kami.</p>
                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 pad-top">
                            <input
                                type="text"
                                required
                                className="form-control"
                                placeholder="Search..."
                                value={searchKey}
                                onChange={(e) => setSearchKey(e.target.value)}
                            />
                            <p className="mb-0" style={{color: "red"}}>{keyError}</p>
                            <button type="button" className="btn btn-outline-secondary me-2 btn-search" onClick={handleSubmit}>Search</button>
                        </form>
                    </div>

                    <hr className="featurette-divider" />

                    <div>
                        <h2>More Info</h2>
                        <p className="mb-0">Ingin tahu lebih lanjut tentang kami silahkan klik link berikut: <Link to="/AboutUs">About Us</Link>.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Aside;