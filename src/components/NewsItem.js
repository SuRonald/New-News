import { React } from "react";
import { Link } from "react-router-dom";
import noImage from "../image/NoImage.png";

function NewsItem({
    author,
    title,
    description,
    url,
    source,
    image,
    category,
    published_at,
    passDetail,
}) {
    return (
        <Link
            to={`/detail/${title}`}
            onClick={() =>
                passDetail({
                    author,
                    title,
                    description,
                    url,
                    source,
                    image,
                    category,
                    published_at,
                })
            }
        >
            <section className="newsItem">
                <img src={image || noImage} className="newsImg" alt="NewsIamge" />
                <div className="newsItem-info">
                    <h4>{title}</h4>
                    <h5>
                        By {author || "Anonymous"} at {published_at}
                    </h5>
                    <p>{description}</p>
                </div>
            </section>
        </Link>
    );
}

export default NewsItem;
