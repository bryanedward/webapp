import React from 'react'
import AboutArea from '../SiteAboutArea/AboutArea'
import SiteArea from '../SiteArea/SiteArea'
import Banner from '../SiteBanner/Banner'
import SiteContact from '../SiteContact/SiteContact'

const SiteMain = () => {
    return (
        <div>
            <div className="site-main">
                <Banner />
                <AboutArea />
                <SiteContact />
                <SiteArea />
            </div>
        </div>
    )
}

export default SiteMain
