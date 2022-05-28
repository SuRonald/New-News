import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './Header';
import NewsList from './NewsList';
import AboutUs from './AboutUs';
import SelectedCategory from './SelectedCategory';
import SelectedCountry from './SelectedCountry';
import NewsDetail from './NewsDetail';
import Searching from './Searching';
import Footer from './Footer';
import './App.css';
import './bootstrap.min.css';

function App() {
    return (
        <Router>
            <div>
                <Header />

                <div className="bg-dark">
                    <div className="bg-white bordering">
                        <div className="content pad-updown">
                            <div className="container">
                                <Switch>
                                    {/* Home/News-List */}
                                    <Route exact path="/">
                                        <NewsList />
                                    </Route>

                                    {/* Selected Category News-List */}
                                    <Route path="/Category/:category">
                                        <SelectedCategory />
                                    </Route>

                                    {/* Selected Country News-List */}
                                    <Route path="/Country/:country">
                                        <SelectedCountry />
                                    </Route>

                                    {/* Selected Search News-List */}
                                    <Route path="/Search/:keywords">
                                        <Searching />
                                    </Route>

                                    {/* Clicked News Detail */}
                                    <Route path="/Detail/:country/:category/:published_at/:source/:title/:author/:image/:description/:url">
                                        <NewsDetail />
                                    </Route>

                                    {/* About Us */}
                                    <Route path="/AboutUs">
                                        <AboutUs />
                                    </Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </Router>
    );
}
 
export default App;