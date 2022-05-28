import React from 'react';
import Whoarewe from './img/whoarewe.png';
import Vision from './img/vision.png';
import Mission from './img/mission.png';

const AboutUs = () => {
    return (
        <div>
            <h1 className="top-title">~~ About Us ~~</h1>

            <br /><br /><br />

            <div className="row featurette alg-left">
                <div className="col-md-2 pic-frame">
                    <img src={Whoarewe} alt="Whoarewe" className="about-pic"/>
                </div>
                <div className="col-md-10">
                    <h2 className="featurette-heading">SIAPA KAMI ?</h2>
                    <p className="lead">
                        New-News merupakan sebuah applikasi untuk membaca berita dengan berbagai jenis category dan dari berbagai negara.
                        Sejak dibuat pada tahun 2021, New-News mulai menyebarkan berbagai informasi ke semua orang yang yang ingin membaca. 
                    </p>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette alg-right">
                <div className="col-md-10">
                    <h2 className="featurette-heading">VISI</h2>
                    <p className="lead">
                        New-News memiliki visi untuk menanamkan sifat ingin membaca berita dan membuat berita dapat diakses dengan mudah.
                        Berita yang dapat mudah diakses dan tidak lamban agar dapat menyebarkan berita lebih cepat.
                    </p>
                </div>
                <div className="col-md-2 pic-frame">
                    <img src={Vision} alt="Whoarewe" className="about-pic"/>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette alg-left">
                <div className="col-md-2 pic-frame">
                    <img src={Mission} alt="Whoarewe" className="about-pic"/>
                </div>
                <div className="col-md-10">
                    <h2 className="featurette-heading">MISI</h2>
                    <p className="lead">
                        New-News memiliki misi untuk mengembangkan UI/UX pada applikasi ini agar para pembaca semakin tertarik untuk membaca berita.
                        Lebih sering mengupdate berita yang ditampilakan, dan menambah jenis category dan negara yang dicangkup dalam applikasi ini.
                    </p>
                </div>
            </div>

            <hr className="featurette-divider" />

            <div className="row featurette alg-center">
                <h2 className="featurette-heading">DISCLAIMER</h2>
                <p className="lead">Berita dan Foto berita didapatkan dari API <a href="https://mediastack.com/">MediaStack</a>.</p>
                <p className="lead">Untuk gambar pada page about us dapat didapatkan dari pencarian <a href="https://www.google.com/">Google</a>.</p>
                <p className="lead">Logo New-News! dibuat menggunakan <a href="https://www.canva.com/">Canva</a>.</p>
                <p className="lead">Referensi dari <a href="https://reactjs.org/">React</a>.</p>
            </div>
        </div>
    );
}
 
export default AboutUs;