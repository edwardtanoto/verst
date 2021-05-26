import { server } from '../config'
const Hero = () => {
    const socmeds = [
        { name: "Medium", image: `${server}/socmed/Medium.svg`, link: "https://verst-io.medium.com" },
        { name: "Instagram", image: `${server}/socmed/Instagram.svg`, link: "https://instagram.com/verst.inc" },
        { name: "Linkedin", image: `${server}/socmed/LinkedIn.svg`, link: "https://linkedin.com/company/verst-inc" },
        { name: "Dribbble", image: `${server}/socmed/Dribbble.svg`, link: "https://dribbble.com/verst" },
    ];
    return (
        <div className="container">
            <div className="wrapper">
                <h1>
                    <b>The first class <span className="gradient-text">technology</span> <span className="gradient-text1">& design</span> <br /></b>
                </h1>
                <p>INDEPENDENT STUDIO, BUILDING IMPACTFUL PRODUCTS.</p>
                <br />
                <div className="socials">
                    {socmeds.map(el => (
                        <span
                            className="social"
                            key={el.name}>
                            <a href={el.link}><img src={el.image} /></a>
                        </span>
                    ))}
                </div>
                <br />
                <p>team@verst.io | +1(760)338-2739</p>
            </div>

        </div>
    );
}

export default Hero
