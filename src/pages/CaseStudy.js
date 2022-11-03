import React from 'react';
import Footer from '../common/footer/Footer';
import Header from '../common/header/Header';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import CaseStudyProp from '../component/casestudy/CaseStudyProp';


const CaseStudy = () => {

    return (
        <>
        <SEO title="Case Study" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <Header />
                <BcrumbBannerOne 
                title="Case Study"
                paragraph ="We design and develop web and mobile applications for our clients worldwide."
                styleClass="thumbnail-3"
                mainThumb="/images/banner/banner-thumb-5.png"
                />
                <div className="pt--250 pt_lg--200 pt_md--100 pt_sm--80 case-study-page-area">
                    <div className="container">
                        <CaseStudyProp />
                    </div>
                </div>
                <CtaLayoutOne />
                <Footer parentClass="" />
            </main>
        </>
    )
}

export default CaseStudy;