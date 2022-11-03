import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import TeamOne from '../component/team/TeamOne';
import VideoTwo from '../component/video/VideoTwo';

const Team = () => {

    return (
        <>
        <SEO title="Team" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne 
                title="Meet talent &amp; experience"
                paragraph ="Grow your business online by awesomely designed mobile apps that fits all types."
                styleClass="thumbnail-2"
                mainThumb="/images/banner/banner-thumb-2.png"
                />
                <CounterUpTwo />
                <TeamOne />
                <VideoTwo />
                <CtaLayoutOne />
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default Team;