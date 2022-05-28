import React from 'react';
import {Link} from 'react-router-dom';
import NoImage from './img/NoImage.png';

const NewsItem = (article) => {
    const encryptTitle = encodeURIComponent(article.title);
    const encryptCategory = encodeURIComponent(article.category);
    const encryptAuthor = encodeURIComponent(article.author);
    const encryptCountry = encodeURIComponent(article.country);
    const encryptPublish = encodeURIComponent(article.published_at);
    const encryptImg = encodeURIComponent(article.image);
    const encryptDesc = encodeURIComponent(article.description);
    const encryptSource = encodeURIComponent(article.source);
    const encryptUrl = encodeURIComponent(article.url);

    console.log("Data news setelah di encrypt");
    console.log(encryptTitle);
    console.log(encryptCategory);
    console.log(encryptAuthor);
    console.log(encryptCountry);
    console.log(encryptPublish);
    console.log(encryptImg);
    console.log(encryptDesc);
    console.log(encryptSource);
    console.log(encryptUrl);

    return (
        <div className="news-box">
            {/* /Detail/:country/:category/:published_at/:source/:title/:author/:image/:description/:url */}
            <Link to={`/Detail/${encryptCountry}/${encryptCategory}/${encryptPublish}/${encryptSource}/${encryptTitle}/${encryptAuthor}/${encryptImg}/${encryptDesc}/${encryptUrl}`} className="news-click">
                <div className="tabcontent">
                    {/* <h1>Testing</h1>
                    <img src={article.image} alt="News Image" />
                    <h2>{article.title}</h2>
                    <h3>{article.category}</h3>
                    <h3>from {article.country}</h3> */}

                    <div className="blog-post">
                        <div className="row featurette">
                            <div className="col-md-7">
                                <h2 className="featurette-heading">{article.title}</h2>
                                <h2 className="featurette-heading"><span className="text-muted">{article.category}</span></h2>
                                <p className="lead">from {article.country}</p>
                            </div>
                            <div className="col-md-5">
                                <img src={article.image || NoImage} alt="No Picture" className="photo-img" />
                            </div>
                        </div>

                        <hr className="featurette-divider" />
                    </div>
                </div>
            </Link>
        </div>
    );
}
 
export default NewsItem;