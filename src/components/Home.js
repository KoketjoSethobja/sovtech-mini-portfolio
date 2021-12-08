import React from 'react';

const Home = () => {
    return (
        <div className="home" id="home">
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
                        <h1 className="hello-text">Hello</h1>
                        <p className="aboutme-text">I am Koketjo Sethobja and an aspiring Software Developer. 
                            I am a final year student at the North-West University and studying towards
                            my undergraduate degree in Information Technology (BSc IT). 
                            I have worked part-time as a Studant Assistant at the North-West University. 
                            I have worked on a few projects (deployed and not deployed) throughout my degree
                            to further my skills in the field of Software Development. I have gained as much knowledge
                            as I can in the field of Software Development and I would like to know more. I have worked with React Js,
                            ASP.NET, Node Js and Express Js, HTML & CSS, JavaScript, Java, Oracle SQL, and MySQL.
                        </p>
                    </div>
                    <div className="why-sovtech">
                        <h1 className="sovtech-question">Why I want to be a developer at SovTech?</h1>
                        <p className="sovtech-answer">
                            I see this opportunity as a way to furthur my skills and be a great employee
                            at SovTech. I've seen your company featured as one of the best places 
                            to work on numerous occasions. I've heard about your passion for fostering staff development 
                            through education, training, and a variety of resources. I'm already aware that engaged staff do better work. I'd love to join your innovative and positive team,
                            continue to do excellent work, and advance within the organization by learning 
                            new abilities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;