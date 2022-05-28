import {useState, useEffect} from "react";

const useFetch = (url) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        console.log("Fetching Data!");
        fetch(url)
            .then(res => {
                // Ubah ke json
                return res.json();
            })
            .then(data => {
                console.log("Fetch Bisa. Cek Hasilnya Dibawah!");
                console.log(data.data);
                setDatas(data.data);
            })
    }, [url]);

    return {datas}
}

export default useFetch;