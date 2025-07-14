import { Link } from "react-router-dom";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiLogoTwitter,
  BiLogoYoutube,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-[#00629B] text-white py-10">
      <div className="container mx-auto px-4 text-center space-y-6">
        
        {/* Quick Links */}
        <div>
          
          <div className="text-sm md:text-base flex flex-wrap justify-center gap-x-2 gap-y-1">
            <Link to="/" className="hover:underline">Home</Link>
            <span>|</span>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <span>|</span>
            <a href="https://www.ieee.org/accessibility.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Accessibility
            </a>
            <span>|</span>
            <a href="https://www.ieee.org/about/corporate/governance/p9-26.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Nondiscrimination Policy
            </a>
            <span>|</span>
            <a href="https://ethics.ieee.org/" target="_blank" rel="noopener noreferrer" className="hover:underline">
              IEEE Ethics Reporting
            </a>
            <span>|</span>
            <a href="https://www.ieee.org/security-privacy.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
              IEEE Privacy Policy
            </a>
            <span>|</span>
            <a href="https://www.ieee.org/about/help/site-terms-conditions.html" target="_blank" rel="noopener noreferrer" className="hover:underline">
              Terms
            </a>
          </div>
        </div>

        {/* Follow Us */}
        <div>

          
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center gap-6">
            <BiLogoFacebook size={36} className="hover:scale-110 transition-transform duration-200" />
            <BiLogoWhatsapp size={36} className="hover:scale-110 transition-transform duration-200" />
            <BiLogoTwitter size={36} className="hover:scale-110 transition-transform duration-200" />
            <BiLogoInstagram size={36} className="hover:scale-110 transition-transform duration-200" />
            <BiLogoYoutube size={36} className="hover:scale-110 transition-transform duration-200" />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white my-4"></div>

        {/* Footer Note */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} IEEE - All rights reserved. A not-for-profit organization, IEEE is the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
