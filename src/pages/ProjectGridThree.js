import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectOne from '../component/project/ProjectOne';


const ProjectGridThree = () => {

    return (
        <>
        <SEO title="Project Four Column" />
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
            <ProjectOne colSize="col-xl-3 col-lg-4 col-md-6" itemShow="12" columnGap="row-15" parentClass="project-column-4"/>
            <CtaLayoutOne />
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridThree;