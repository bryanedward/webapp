import React from 'react'
import './style.css'

const SiteArea = () => {
    return (
        <section className="services-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center services-title">
                        <h1 className="text-uppercase title-text">Geek - Goals</h1>
                    </div>
                </div>
                <div className="container services-list">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="services">
                                <div className="service-img text-center py-4">
                                    <img src={require('../../assets/services/Computer.png')} alt="serviceOne" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppsercase font-roboto">Backend</h5>
                                    <p className="card-text text-secondary">Definity I am a geek in the Backend</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="services">
                                <div className="service-img text-center py-4">
                                    <img src={require('../../assets/services/phone.png')} alt="serviceOne" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppsercase font-roboto">Mobile native</h5>
                                    <p className="card-text text-secondary">I hope to back to kotlin someday</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-12">
                            <div className="services">
                                <div className="service-img text-center py-4">
                                    <img src={require('../../assets/services/rocket.png')} alt="serviceOne" />
                                </div>
                                <div className="card-body text-center">
                                    <h5 className="card-title text-uppsercase font-roboto">Cloud</h5>
                                    <p className="card-text text-secondary">I work with the services AWS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SiteArea
