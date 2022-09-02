import { useEffect, useState } from "react";

function useFetch(tag, code, url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log("DebugUseFetch");
        console.log(tag, code, url);
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data.data);
                setData(data.data);
            });
    }, [tag, code]);

    return data;
}

export default useFetch;
