import React, {useState} from "react";
import {useParams} from "react-router-dom";
import Aside from "./Aside";
import NoImage from './img/NoImage.png';

const NewsDetail = () => {
    // Url yang dituju: /Detail/:country/:category/:published_at/:source/:title/:author/:image/:description/:url
    const {country, category, published_at, source, title, author, image, description, url} = useParams();

    console.log('Parameter encrypt setelah dipassing:');
    console.log(country);
    console.log(category);
    console.log(published_at);
    console.log(source);
    console.log(title);
    console.log(author);
    console.log(image);
    console.log(description);
    console.log(url);
    
    const decryptCountry = decodeURIComponent(country);
    const decryptCategory = decodeURIComponent(category);
    const decryptPublish = decodeURIComponent(published_at);
    const decryptSource = decodeURIComponent(source);
    const decryptTitle = decodeURIComponent(title);
    const decryptAuthor = decodeURIComponent(author);
    // Note: Untuk bisa ganti valuenya kalo dia salah.
    const [decryptImg, setDecryptImg] = useState(decodeURIComponent(image));
    const decryptDesc = decodeURIComponent(description);
    const decryptUrl = decodeURIComponent(url);

    console.log('Encrypt setelah decrypt:');
    console.log(decryptCountry);
    console.log(decryptCategory);
    console.log(decryptPublish);
    console.log(decryptSource);
    console.log(decryptTitle);
    console.log(decryptAuthor);
    console.log(decryptImg);
    console.log(decryptDesc);
    console.log(decryptUrl);

    // Note: decodeURIComponent ngereturn string.
    if (decryptImg === "null"){
        setDecryptImg(NoImage);
    }

    return (
        <div class="row g-5">
            <div className="col-md-8">
                <h1>News Detail</h1>

                <hr className="featurette-divider" />

                <br /><br />
                
                {/* <h1>Testing</h1>
                <h1>{decryptTitle}</h1>
                <h2>{decryptCategory}</h2>
                <h1>By {decryptAuthor}</h1>
                <h1>From {decryptCountry}</h1>
                <h1>Posted on {decryptPublish}</h1>
                <img src={decryptImg || NoImage} alt="No Picture" />
                <h1>Info:</h1>
                <h3>{decryptDesc}</h3>
                <h1>Source: {decryptSource}</h1>
                <h1>Link to original post: <a href={decryptUrl}>Link</a></h1> */}

                <div className="px-4">
                    <div className="text-center mb-4">
                        <div className="mb-4">
                            <h2 className="fw-bold">{decryptTitle}</h2>
                            <h4 className="featurette-heading">{decryptCategory}</h4>
                        </div>
                        <div className="overflow-hidden">
                            <div className="container px-5">
                                <img src={decryptImg} className="img-fluid border rounded-3 shadow-lg mb-4" alt="No Picture" />
                            </div>
                        </div>
                    </div>
                    <p className="lead no-margin">By {decryptAuthor}  |  From {decryptCountry}</p>
                    <p className="lead no-margin">Posted on {decryptPublish}</p>

                    <br />

                    <p className="lead no-margin">{decryptDesc}.</p>

                    <br />

                    <p className="lead no-margin">Source: {decryptSource}</p>
                    <p className="lead no-margin">Link to original post: <a href={decryptUrl}>Link</a></p>
                </div>

                <hr className="featurette-divider" />
            </div>
            
            <Aside />
        </div>
    );
}
 
export default NewsDetail;