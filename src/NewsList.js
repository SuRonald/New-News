import React from "react";
import useFetch from "./useFetch";
import NewsItem from "./NewsItem";
import Aside from "./Aside";

const NewsList = () => {
    // Note: Link API base (Pake parameter language english) = http://api.mediastack.com/v1/news?access_key=82911763eb8f145de0c286180df1661f&languages=en
    const {datas: articles} = useFetch('http://api.mediastack.com/v1/news?access_key=82911763eb8f145de0c286180df1661f&languages=en');

    return (
        <div class="row g-5">
            <div className="col-md-8">
                <h1>News Lists</h1>

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
 
export default NewsList;