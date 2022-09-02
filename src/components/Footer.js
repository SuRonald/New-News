import { React } from "react";
import mylogo from "../image/MyLogo.png";
import LogoReact from '../image/LogoReact.svg';

function Footer() {
    return (
        <footer>
            <div className="footLeft">
                <img src={mylogo} alt="New-News-Logo" />
                <p>Yuk tambah wawasan kita dengan membaca berita menggunakan applikasi New-News untuk membaca berbagai berita mulai dari teknologi, kesehatan, ekonomi dan lain-lain.</p>
            </div>
            <div className="footRight">
                <img src={LogoReact} alt="React-Logo" />
                <p>Applikasi New-News! ini dibuat menggunakan <a href="https://reactjs.org/" target="_blank" rel="noreferrer">React</a> dan berita berita yang didapatkan diambil dari API <a href="https://mediastack.com/" target="_blank" rel="noreferrer">MediaStack</a>.</p>
            </div>
        </footer>
    );
}

export default Footer;