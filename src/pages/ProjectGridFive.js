import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ProjectFive from '../component/project/ProjectFive';


const ProjectGridFive = () => {

    return (
        <>
        <SEO title="Project Full Width Four Column" />
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
            <ProjectFive colSize ="row-cols-sm-2 row-cols-lg-3 row-cols-xl-4" parentClass="project-column-4" perPageShow="8"/>
            <CtaLayoutOne />
            <Footer parentClass="" />
        </main>
        </>
    )
}

export default ProjectGridFive;