import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import WhyChooseOne from '../component/whychoose/WhyChooseOne';
import ProjectOne from '../component/project/ProjectOne';
import TeamOne from '../component/team/TeamOne';


const OurOffice = () => {

    return (
        <>
        <SEO title="Our Office" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne 
                title="Our Office"
                paragraph ="This is the place weher we create best solution for you with our experienced Team Member"
                styleClass="thumbnail-4"
                mainThumb="/images/banner/banner-thumb-3.png"
                />
                <WhyChooseOne />
                <ProjectOne />
                <TeamOne />
                <CtaLayoutOne />
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default OurOffice;