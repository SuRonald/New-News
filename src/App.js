import { React, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import NewsDetail from "./components/NewsDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [detail, setDetail] = useState();

    function passDetail({ ...data }) {
        setDetail({ ...data });
        // console.log(detail);
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route exact path="/" element={<Main passDetail={passDetail} />} />
                    <Route exact path="/:tag/:code" element={<Main passDetail={passDetail} />} />
                    <Route path="/detail/:title" element={<NewsDetail {...detail} />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
