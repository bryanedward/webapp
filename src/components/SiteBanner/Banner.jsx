import React from 'react'
import './style.css'

const Banner = () => {
    return (
        <section className="site-banner">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 site-title">
                        <h3 className="title-text">Hi there</h3>
                        <h1 className="title-text text-uppercase">I am Bryan</h1>
                        <h4 className="title-text text-uppercase">engineering student</h4>
                        <div className="site-buttons">
                            <div className="d-flex flex-row flex-wrap">
                                <button type="button"
                                    className="btn button primary-button mr-4 text-uppercase">hireme</button>
                                <a type="button" className="btn button secondary-button text-uppercase"
                                    href="https://github.com/bryanedward">Repository</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 banner-image">
                        <img src={require('../../assets/banner/profile.jpg')} alt="banner-img" className="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
