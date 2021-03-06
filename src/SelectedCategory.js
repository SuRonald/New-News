import React from "react";
import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import NewsItem from "./NewsItem";
import Aside from "./Aside";

const SelectedCategory = () => {
    const {category} = useParams();
    console.log(category);
    const url = "http://api.mediastack.com/v1/news?access_key=34864e80d74349037192ca1414391249&languages=en&categories=" + category;
    console.log(url);
    const {datas: articles} = useFetch(url);

    return (
        <div class="row g-5">
            <div className="col-md-8">
                <h1>News Lists - Category: {category}</h1>

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