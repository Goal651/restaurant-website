import Header from "../components/header"
const Home1 = () => {
    return (
        <div className="home-1">
            <Header />
            <main>
                <div className="hero">
                    <div className="hero-head">
                        <h1>The Perfect Space to Enjoy Fantastic Food</h1>
                        <p>Festive dining at Farthings where are strong believers in using the very best produce</p>
                    </div>

                    <div className="hero-video">
                        <div className="hero-menus">
                            <div>See our Menus</div>
                        </div>
                        <div className="hero-controls">
                            <img src="play.png" alt="" />
                        </div>
                        <h3>Video</h3>
                    </div>
                    <div className="dots">
                        <img src="bullets.png" alt="" />
                    </div>
                    <div className="weekly-special">
                        <h5 className="weekly-special-badge">Weekly Special</h5>
                        <h3>$90.85</h3>
                        <h3>Silicon Pizza</h3>
                        <h3>*****</h3>
                        <img src="weeklySp.png" alt="" />
                    </div>

                </div>
                <div className="about">
                    <div className="left-about">
                        <h5>ABOUT THE FOOD RESTAURANT</h5>
                        <h1>New Ground with Dishes to be enjoyed</h1>
                    </div>
                    <div className="right-about">
                        <p>Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci
                            varius nat oque pena tibus et urient monte nascete ridiculus mus
                            nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan
                            ligula.</p>
                        <div className="director">
                            <div className="profile">
                                <img src="author.png" alt="" />
                            </div>
                            <div className="details">
                                <h2>Willimes James</h2>
                                <h6>Director and Chief Operations Officer</h6>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <div className="product-1">
                        <div><h1>Restaurant</h1></div>
                    </div>
                    <div className="product-2">
                        <div><h1>Coctail Bar</h1></div>
                    </div>
                    <div className="product-3">
                        <div><h1>Private Dining</h1></div>
                    </div>

                </div>
                <div className="samples">
                    <div className="pentagon">
                        <div className="icons">
                            <img src="sample.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                    <div className="sample-container">
                        <div >
                            <img src="sample1.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                    <div className="sample-container">
                        <div className="icons">
                            <img src="sample2.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                    <div className="sample-container">
                        <div className="icons">
                            <img src="sample3.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                </div>
                <div className="BBQ">
                    <img src="/chickens.png" alt="" />
                    <div className="BBQ-container">
                        <h2>BBQ</h2>
                        <div>
                            <h6>Sake BBQ sauce      <span style={{ color: 'red', float: 'right' }}>$9.00</span> </h6>
                            <p>redish,black sesame seeds, coriander</p>
                            <hr />
                        </div>
                        <div>
                            <h6>BBQ baby back ribs  <span style={{ color: 'red', float: 'right' }}>$16.00</span> </h6>
                            <p>sticky Asian glaze,charred lime,chili cashews</p>
                            <hr />
                        </div>
                        <div>
                            <h6>Half smoked chicken <span style={{ color: 'red', float: 'right' }}>$34.00</span> </h6>
                            <p>misa butter glaze,charred lime wedge,sake bbq</p>
                            <hr />
                        </div>
                        <div>
                            <h6>Dusted chicken wings  <span style={{ color: 'red', float: 'right' }}>$40.00</span> </h6>
                            <p>tossed in Korean hot sauce,picked radish</p>

                        </div>
                    </div>
                </div>
                <div className="discover-menu">
                    <h2>Discover Menu</h2>
                    <div className="discover-menu-container">
                        <div className="img1">
                            <h1>Steaks & BBQ</h1>
                            <p>canonical classics to obscure tiki drinks</p>
                            <div className="menu-badge">
                                <h1>$120</h1>
                                <h5>person</h5>
                            </div>
                        </div>
                        <div className="img2">
                            <h1>Steaks & BBQ</h1>
                            <p>canonical classics to obscure tiki drinks</p>
                            <div className="menu-badge">
                                <h1>$120</h1>
                                <h5>person</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu-form">
                    <div className="form-head">
                        <h1>RESERVE A TABLE</h1>
                        <p>Discover our NEw Menu !</p>
                    </div>
                    <form >
                        <div className="inputs">
                            <div className="input1">
                                <input type="number" placeholder="No of Guest" />
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div className="input2">
                                <div className="input21">
                                    <input type="date" placeholder="Date" />
                                    <input type="time" placeholder="Time" />
                                </div>
                                <input type="tel" placeholder="Phone No" />
                            </div>

                        </div>
                        <button type="submit"><span>Submit</span></button>
                    </form>
                </div>
                <div className="featured_dishes">
                    <h1>Featured Dishes</h1>
                    <div className="dishes">
                        <div>
                            <h4>Sale</h4>
                            <span>
                                <img src="chickens.png" alt="" />
                            </span>
                            <span className="dish-content">
                                <span className="dish-img"></span>
                                <h5>Crispy Fried Chicken</h5>
                                <h6>$14.85</h6> <span>$10.85</span>
                                <span className="lock">
                                    <img src="add-cart.png" alt="" />
                                </span>
                            </span>

                        </div>
                        <div>
                            <h4>Sale</h4>
                            <span >
                                <img src="dish1.png" alt="" />
                            </span>
                            <span className="dish-content">
                                <span className="dish-img"></span>
                                <h5>Crispy Fried Chicken</h5>
                                <h6>$14.85</h6> <span>$10.85</span>
                                <span className="lock">
                                    <img src="add-cart.png" alt="" />
                                </span>
                            </span>

                        </div>
                        <div>
                            <h4>Sale</h4>
                            <span>
                                <img src="dish2.png" alt="" />
                            </span>
                            <span className="dish-content">
                                <span className="dish-img"></span>
                                <h5>Crispy Fried Chicken</h5>
                                <h6>$14.85</h6> <span>$10.85</span>
                                <span className="lock">
                                    <img src="add-cart.png" alt="" />
                                </span>
                            </span>
                        </div>
                    </div>

                </div>
            </main >
        </div >
    )
}

export default Home1
