import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaGlobe } from "react-icons/fa";

const socialIconMapping = {
  LinkedIn: <FaLinkedin size={16} className="inline mr-1" />,
  Github: <FaGithub size={16} className="inline mr-1" />,
  Twitter: <FaTwitter size={16} className="inline mr-1" />,
  Facebook: <FaFacebook size={16} className="inline mr-1" />,
  Brandfetch: <FaGlobe size={16} className="inline mr-1" />,
};

const Footer = ({ theme }) => {
  const footerInfo = {
    reviews: "Reviewed on ⭐⭐⭐⭐⭐ (5/5) 2K+ Reviews",
    address: "R-7 Street, Yamuna Nagar, Haryana 135001",
    phone: "0612-2500-971",
    email: "connect@finolity.com",
    social: [
      { label: "LinkedIn", href: "#" },
      { label: "Github", href: "#" },
      { label: "Twitter", href: "#" },
      { label: "Facebook", href: "#" },
      { label: "Brandfetch", href: "#" },
    ],
    legalLinks: [
      { label: "Terms & Conditions", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Refund and Cancellation Policy", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Case studies", href: "#" },
      { label: "Events", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  };

  return (
    <footer className={`mt-20 border-t ${theme === "dark" ? "border-neutral-700 text-neutral-300" : "border-neutral-300 text-neutral-800"}`}>
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center">
            <p className="text-sm font-medium">{footerInfo.reviews}</p>
            <p className="mt-1 text-sm">{footerInfo.address}</p>
            <p className="mt-1 text-sm">
              T: <a href={`tel:${footerInfo.phone}`} className="hover:underline">{footerInfo.phone}</a>
            </p>
            <p className="mt-1 text-sm">
              E: <a href={`mailto:${footerInfo.email}`} className="hover:underline">{footerInfo.email}</a>
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {footerInfo.social.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`flex items-center text-sm hover:underline ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}
              >
                {socialIconMapping[social.label]} {social.label}
              </a>
            ))}
          </div>
        </div>

        <hr className={`my-8 ${theme === "dark" ? "border-neutral-700" : "border-neutral-300"}`} />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4">
          <p>© {new Date().getFullYear()} Finolity</p>
          <div className="flex flex-wrap gap-4 justify-center">
            {footerInfo.legalLinks.map((link, index) => (
              <a key={index} href={link.href} className={`hover:underline text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
