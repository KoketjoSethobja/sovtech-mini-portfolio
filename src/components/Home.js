import React from 'react';

const Home = () => {
    return (
        <div className="home">
            {/* left col, mobile=top row */}
            <div className="left-col">
                <div className="pic-div">
                    <img src="../me.jpg" alt="" />
                </div>                
            </div>
            {/* right side, mobile=bottom row */}
            <div className="right-col">
                <div className="ryt-content">
                    <div className="intro-me">
                        <h1>Hello</h1>
                    </div>
                    <div className="why-sovtech">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;