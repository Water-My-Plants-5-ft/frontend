import fb from './art/facebook.png';
import insta from './art/insta.png';
import twit from './art/twitterlogo.png';
import snap from './art/snapchatsq.png';
import wmplogo from './art/wmplogo.png';

const Footer = () => {


    return (
        <div className="footer-container1">
            <div className="footer-container2">
                <div>
                    <img src={fb} alt="social media logos" id="logo-nav-favicons" />
                </div>
                <div>
                    <img src={insta} alt='Awesome Logo' id="logo-nav-favicons" />
                </div>
                <div>
                    <img src={twit} alt='Awesome Logo' id="logo-nav-favicons" />
                </div>
                <div>
                    <img src={snap} alt='Awesome Logo' id="logo-nav-favicons" />
                </div>
            </div>
            <div>
                <img src={wmplogo} alt='Awesome Logo' id="logo-footer" />
            </div>
        </div>
    );
};
export default Footer;

