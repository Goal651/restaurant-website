import Header from "../components/header";

const Home1 = () => {
    return (
        <div className="bg-white">
            <Header />
            <main>
                <div className="hero  h-[630px]  flex justify-center"
                    style={{
                        backgroundImage: "url('chicken.png')",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <div className="flex flex-col  gap-20">
                        <div className="text-white  w-1/2">
                            <div className="font-bold text-[50px] font-fredoka">The Perfect Space to Enjoy Fantastic Food</div>
                            <div className="text-lg mt-2 ">Festive dining at Farthings where are strong believers in using the very best produce</div>
                        </div>

                        <div className=" flex gap-4 text-white">
                            <div className="border-4 border-red-700 max-w-fit rounded-xl py-1">
                                <button className="relative right-2 btn border-0 bg-red-600 w-full  text-white font-fredoka rounded-xl">See our Menus</button>
                            </div>
                            <button className="border-2 border-white rounded-full p-5 w-fit">
                                <img src="play.png" alt="" />
                            </button>
                            <div
                            className="font-bold"
                            > Video</div>
                        </div>
                        <div>
                            <img src="bullets.png" alt="" />
                        </div>

                    </div>
                    <div
                        className="text-white flex gap-10 border-solid border-4 border-yellow-500 rounded-3xl p-4  bg-black  bg-opacity-75 justify-items-center"
                    >
                        <div className="w-1/2 font-semibold justify-center">
                            <h5>Weekly Special</h5>
                            <div className="">$90.85</div>
                            <div className="">Silicon Pizza</div>
                            <div className="text-yellow-500 font-bold text-lg">*****</div>
                        </div>
                        <img src="weeklySp.png" alt="" />
                    </div>
                </div>

                <div>
                    <div>
                        <h5>ABOUT THE FOOD RESTAURANT</h5>
                        <h1>New Ground with Dishes to be enjoyed</h1>
                    </div>
                    <div>
                        <p>Nisl quam nestibulum ac quam nec odio eleme aucan ligula. Orci
                            varius nat oque pena tibus et urient monte nascete ridiculus mus
                            nellentesq um ac qu am nec odio rbine. Nisl quam nestibu aucan
                            ligula.</p>
                        <div>
                            <div>
                                <img src="author.png" alt="" />
                            </div>
                            <div>
                                <h2>Willimes James</h2>
                                <h6>Director and Chief Operations Officer</h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <div><h1>Restaurant</h1></div>
                    </div>
                    <div>
                        <div><h1>Coctail Bar</h1></div>
                    </div>
                    <div>
                        <div><h1>Private Dining</h1></div>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <img src="sample.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                    <div>
                        <div>
                            <img src="sample1.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                    <div>
                        <div>
                            <img src="sample2.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                    <div>
                        <div>
                            <img src="sample3.png" alt="" />
                        </div>
                        <h3>Dessert</h3>
                    </div>
                </div>

                <div>
                    <img src="/chickens.png" alt="" />
                    <div>
                        <h2>BBQ</h2>
                        <div>
                            <h6>Sake BBQ sauce <span style={{ color: 'red', float: 'right' }}>$9.00</span></h6>
                            <p>redish,black sesame seeds, coriander</p>
                            <hr />
                        </div>
                        <div>
                            <h6>BBQ baby back ribs <span style={{ color: 'red', float: 'right' }}>$16.00</span></h6>
                            <p>sticky Asian glaze,charred lime,chili cashews</p>
                            <hr />
                        </div>
                        <div>
                            <h6>Half smoked chicken <span style={{ color: 'red', float: 'right' }}>$34.00</span></h6>
                            <p>misa butter glaze,charred lime wedge,sake bbq</p>
                            <hr />
                        </div>
                        <div>
                            <h6>Dusted chicken wings <span style={{ color: 'red', float: 'right' }}>$40.00</span></h6>
                            <p>tossed in Korean hot sauce,picked radish</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>Discover Menu</h2>
                    <div>
                        <div>
                            <h1>Steaks & BBQ</h1>
                            <p>canonical classics to obscure tiki drinks</p>
                            <div>
                                <h1>$120</h1>
                                <h5>person</h5>
                            </div>
                        </div>
                        <div>
                            <h1>Steaks & BBQ</h1>
                            <p>canonical classics to obscure tiki drinks</p>
                            <div>
                                <h1>$120</h1>
                                <h5>person</h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h1>RESERVE A TABLE</h1>
                        <p>Discover our New Menu!</p>
                    </div>
                    <form>
                        <div>
                            <div>
                                <input type="number" placeholder="No of Guest" />
                                <input type="text" placeholder="Full Name" />
                            </div>
                            <div>
                                <div>
                                    <input type="date" placeholder="Date" />
                                    <input type="time" placeholder="Time" />
                                </div>
                                <input type="tel" placeholder="Phone No" />
                            </div>
                        </div>
                        <button type="submit"><span>Submit</span></button>
                    </form>
                </div>

                <div>
                    <h1>Featured Dishes</h1>
                    <div>
                        <div>
                            <h4>Sale</h4>
                            <span>
                                <img src="chickens.png" alt="" />
                            </span>
                            <span>
                                <span></span>
                                <h5>Crispy Fried Chicken</h5>
                                <h6>$14.85</h6> <span>$10.85</span>
                                <span>
                                    <img src="add-cart.png" alt="" />
                                </span>
                            </span>
                        </div>
                        <div>
                            <h4>Sale</h4>
                            <span>
                                <img src="dish1.png" alt="" />
                            </span>
                            <span>
                                <span></span>
                                <h5>Crispy Fried Chicken</h5>
                                <h6>$14.85</h6> <span>$10.85</span>
                                <span>
                                    <img src="add-cart.png" alt="" />
                                </span>
                            </span>
                        </div>
                        <div>
                            <h4>Sale</h4>
                            <span>
                                <img src="dish2.png" alt="" />
                            </span>
                            <span>
                                <span></span>
                                <h5>Crispy Fried Chicken</h5>
                                <h6>$14.85</h6> <span>$10.85</span>
                                <span>
                                    <img src="add-cart.png" alt="" />
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h6 style={{ color: 'red' }}>TESTIMONIALS & REVIEWS</h6>
                        <h1>Our Customers Feedbacks</h1>
                        <div>
                            <p>A good restaurant is like a vacation; it
                                transports you, and it becomes a lot more
                                than just about the food. All great deeds
                                and all great thoughts
                            </p>
                            <h3>Bratlee Hamint</h3>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <img src="feedback1.png" alt="" />
                        <img src="feedback2.png" alt="" />
                        <img src="feedback3.png" alt="" />
                    </div>
                </div>

                <div>
                    <div>
                        <h1>Meet Our Expert</h1>
                    </div>
                    <div>
                        <div>
                            <img src="chef1.png" alt="" />
                            <div>
                                <h6>Dessert specialist</h6>
                                <h3>Thomas Walim</h3>
                                <img src="sign.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <img src="chef2.png" alt="" />
                            <div>
                                <h6>Dessert specialist</h6>
                                <h3>Thomas Walim</h3>
                                <img src="sign.png" alt="" />
                            </div>
                        </div>
                        <div>
                            <img src="chef3.png" alt="" />
                            <div>
                                <h6>Dessert specialist</h6>
                                <h3>Thomas Walim</h3>
                                <img src="sign.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home1;
