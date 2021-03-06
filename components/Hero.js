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
                    verst, inc. is a contemporary tech studio designed to build new things.
                </h1>
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
                <p>team@verst.io (MAIL) | +1(760)338-2739 (SMS)</p>
            </div>

        </div>
    );
}

export default Hero
