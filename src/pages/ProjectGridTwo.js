import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridTwo = () => {

    return (
        <>
        <SEO title="Project Three Column" />
        <ColorSwitcher />
        <main className="main-wrapper">
            <Header />
            <BcrumbBannerOne 
                title="Our Projects"
                paragraph ="A quick view of industry specific problems solved with design by the awesome team at BytesClient.
                "
                styleClass=""
                mainThumb="/images/banner/banner-thumb-1.png"
            />
            <ProjectOne colSize="col-xl-4 col-md-6" columnGap="row-15"/>
            <CtaLayoutOne />
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridTwo;