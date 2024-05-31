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
            </main>
        </div>
    )
}

export default Home1
