import { React, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Sidebar() {
    const [searchIn, setSearchIn] = useState("");
    const inputRef = useRef();
    let navigate = useNavigate();

    function searchSomething(e) {
        e.preventDefault();
        console.log(searchIn);
        if (searchIn.length <= 3) {
            inputRef.current.focus();
            alert("Search word must be longer than 3 character");
        } else {
            navigate(`/keywords/${searchIn}`);
            setSearchIn("");
        }
    }

    return (
        <section className="sidebar">
            <h3>Search</h3>
            <div className="searchForm">
                <input
                    ref={inputRef}
                    type="text"
                    value={searchIn}
                    onChange={(e) => setSearchIn(e.target.value)}
                    placeholder="Search Something"
                />
                <button onClick={searchSomething} type="submit">
                    Search
                </button>
            </div>
        </section>
    );
}

export default Sidebar;
