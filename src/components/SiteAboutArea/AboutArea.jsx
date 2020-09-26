import React from 'react'
import './style.css'

const AboutArea = () => {
    return (
        <section className="about-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src={require("../../assets/about-us.png")} alt="about-us" className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 about-title">
                        <h2 className="text-uppercase pt-5">
                            <span>JavaScript</span>
                            <span>Developer</span>
                        </h2>
                        <div className="paragraph py-4 w-75">
                            <p className="para">I have a greater love for Nodejs - PostgreSQl - MongooseDB.</p>
                            <p className="para">I would like to be a full-stack someday.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutArea
