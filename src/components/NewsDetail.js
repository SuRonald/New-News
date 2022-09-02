import { React } from "react";
import Sidebar from "./Sidebar";
import noImage from "../image/NoImage.png";

function NewsDetail({ author, title, description, url, source, image, category, published_at }) {
    return (
        <main>
            <article className="atlLeft">
                <h2>News Detail</h2>
                <hr />
                <img src={image || noImage} alt="NewsImage" />
                <h3>{title}</h3>
                <h4>
                    By {author || "Anonymous"} at {published_at} from {source}
                </h4>
                <h4>Tag: {category}</h4>
                <p>{description}</p>
                <h5>
                    For further information: <a href={url}>Here</a>
                </h5>
            </article>
            <article className="atlRight">
                <Sidebar />
            </article>
        </main>
    );
}

export default NewsDetail;
