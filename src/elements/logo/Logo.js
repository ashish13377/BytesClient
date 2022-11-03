import React from 'react';
import { Link } from 'react-router-dom';


const Logo = ({limage, dimage, simage}) => {
    return (
        <Link to={process.env.PUBLIC_URL + "/"} style={{}}>
            <img className="light-version-logo" src={process.env.PUBLIC_URL + limage} alt="logo"  style={{maxWidth: "2% !important"}}/>
            <img className="dark-version-logo" src={process.env.PUBLIC_URL + dimage} alt="logo" />
            <img className="sticky-logo" src={process.env.PUBLIC_URL + simage} alt="logo" />
        </Link>
    )
}


export default Logo;