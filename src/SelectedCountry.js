import React from "react";
import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import NewsItem from "./NewsItem";
import Aside from "./Aside";

const SelectedCategory = () => {
    const {country} = useParams();
    console.log(country);
    // Note: Link API untuk categoty = http://api.mediastack.com/v1/news?access_key=82911763eb8f145de0c286180df1661f&languages=en&countries=
    const url = "http://api.mediastack.com/v1/news?access_key=82911763eb8f145de0c286180df1661f&languages=en&countries=" + country;
    console.log(url);
    const {datas: articles} = useFetch(url);

    return (
        <div class="row g-5">
            <div className="col-md-8">
                <h1>News Lists - From: {country}</h1>

                <hr className="featurette-divider" />

                <br /><br />

                {articles.map((article) => (
                    <NewsItem title={article.title} category={article.category} author={article.author} country={article.country} published_at={article.published_at} image={article.image} description={article.description} source={article.source} url={article.url}/>
                ))}
            </div>

            <Aside />
        </div>
    );
}
 
export default SelectedCategory;