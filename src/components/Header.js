import { React } from "react";
import { Link } from "react-router-dom";
import mylogo from "../image/MyLogo.png";

function Header() {
    const tagList = {
        countries: [
            {
                as: "gb",
                full: "United Kingdom",
            },
            {
                as: "us",
                full: "United States",
            },
        ],
        categories: ["Technology", "Sports", "Entertainment", "Science", "Health", "Business"],
    };

    return (
        <header>
            <img src={mylogo} alt="New-News-Logo" />
            <div>
                <button>
                    <Link to="/">Home</Link>
                </button>
                {tagList.countries.map((sub) => (
                    <button key={sub.as}>
                        <Link to={`/countries/${sub.as}`}>{sub.full}</Link>
                    </button>
                ))}
                {tagList.categories.map((sub) => (
                    <button key={sub}>
                        <Link to={`/categories/${sub.toLowerCase()}`}>{sub}</Link>
                    </button>
                ))}
            </div>
        </header>
    );
}

export default Header;
