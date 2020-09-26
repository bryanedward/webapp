import React, { Component } from 'react'
import './style.css'


export default class SiteContact extends Component {

    render() {
        return (
            <section className="brand-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="first-row row">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                        <img src={require('../../assets/brands/github.png')} alt="github" onClick={this.github} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                        <img src={require('../../assets/brands/instagram.png')} alt="Brand-1" onClick={this.instagram} />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="single-brand">
                                        <img src={require('../../assets/brands/twitter.png')} alt="Brand-1 " onClick={this.twitter} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="experience-area">
                                <div className="d-flex flex-row years-area">
                                    <h2 className="p-3 years">1</h2>
                                    <h2>
                                        <span>Year</span>
                                        <span>Experience</span>
                                        <span>Working</span>
                                    </h2>
                                </div>
                                <div className="bg-panel"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }

    github = () => {
        window.location.href = "https://github.com/bryanedward"

    }
    instagram = () => {
        window.location.href = "https://www.instagram.com/bryanedward96"
    }

    twitter = () => {
        window.location.href = "https://twitter.com/devBryanEd"
    }
}

