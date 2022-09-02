import { React } from "react";
import { useParams } from "react-router-dom";
import getData from "../utils/testData";
import useFetch from "../utils/useFetch";
import NewsItem from "./NewsItem";
import Sidebar from "./Sidebar";

function Main({ passDetail }) {
    const { tag, code } = useParams();
    let newsList;
    let url =
        "http://api.mediastack.com/v1/news?access_key=0aa2d2e86dcec2dd518398a64d077f24&sources=cnn,bbc&languages=en";

    // newsList = getData();

    // console.log(tag + " + " + code);
    if (tag && code) {
        url = url + "&" + tag + "=" + code;
        // console.log(url);
    }

    newsList = useFetch(tag, code, url);
    console.log(newsList);

    return (
        <main>
            <article className="atlLeft">
                <h2>News List{!tag && !code ? "" : ` - ${code}`}</h2>
                <hr />
                {newsList.map((news) => (
                    <NewsItem key={news.url} {...news} passDetail={passDetail} />
                ))}
            </article>
            <article className="atlRight">
                <Sidebar />
            </article>
        </main>
    );
}

export default Main;
