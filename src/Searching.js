import React from "react";
import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import NewsItem from "./NewsItem";
import Aside from "./Aside";

const SelectedCategory = () => {
    const {keywords} = useParams();
    console.log(keywords);
    const url = "http://api.mediastack.com/v1/news?access_key=34864e80d74349037192ca1414391249&languages=en&keywords=" + keywords;
    console.log(url);
    const {datas: articles} = useFetch(url);

    return (
        <div class="row g-5">
            <div className="col-md-8">
                <h1>News Lists - Keywords: {keywords}</h1>

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