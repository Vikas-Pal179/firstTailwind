import React from "react";

function Footer() {
  return (
    <div className="mainFooter mt-20 bg-[#f0f0f0f0] md:flex md:justify-center md:mx-auto md:space-x-20 sm:pt-5 text-xs xs:pt-5 md:pt-14 pb-10 text-gray-500 sm:space-y-6 xs:space-y-6 xs:px-0 xs:space-x-4 sm:space-x-4">
      <div></div>
      <div className="whatsNew md:space-y-5 sm:space-y-2 xs:space-y-2 cursor-pointer">
        <p className="text-gray-700 text-xl">What's new</p>
        <p>Microsoft 365</p>
        <p>Surface Pro X</p>
        <p>Surface Pro 7</p>
        <p>Surface Laptop 3</p>
        <p>Windows 11 apps</p>
      </div>
      <div className="microsoftStore  md:space-y-5 sm:space-y-2 xs:space-y-2 cursor-pointer">
        <p className="text-gray-700  text-xl">Microsoft Store</p>
        <p>Account profile</p>
        <p>Download Center</p>
        <p>Microsoft Store Support</p>
        <p>Returns</p>
        <p>Order tracking</p>
      </div>
      <div className="education  md:space-y-5 sm:space-y-2 xs:space-y-2  cursor-pointer">
        <p className="text-gray-700  text-xl">Education</p>
        <p>Microsoft in education</p>
        <p>Devices for education</p>
        <p>Microsoft Teams for Education</p>
        <p>Microsoft 365 Education</p>
        <p>Office Education</p>
        <p>Educator training and development</p>
        <p>Deals for students and parents</p>
        <p>Azure for students</p>
      </div>
      <div className="business md:space-y-5 sm:space-y-2 xs:space-y-2  cursor-pointer">
        <p className="text-gray-700  text-xl">Business</p>
        <p>Microsoft Cloud</p>
        <p>Microsoft Security</p>
        <p>Azure</p>
        <p>Dynamics 365</p>
        <p>Microsoft 365</p>
        <p>Microsoft Advertising</p>

        <p>Microsoft Industry</p>
        <p>Microsoft Teams</p>
      </div>
      <div className="developer  md:space-y-5 sm:space-y-2 xs:space-y-2  cursor-pointer">
        <p className="text-gray-700  text-xl">Developer & IT</p>
        <p>Developer Center</p>
        <p>Documentation</p>
        <p>Microsoft Learn</p>
        <p>Microsoft Tech Community</p>
        <p>Azure Marketplace</p>
        <p>AppSource</p>
        <p>Microsoft Power Platform</p>
        <p>Visual Studio</p>
      </div>
      <div className="company  md:space-y-5 sm:space-y-2 xs:space-y-2  cursor-pointer">
        <p className="text-gray-700  text-xl">Company</p>
        <p>Careers</p>
        <p>About Microsoft</p>
        <p>Company news</p>
        <p>Privacy at Microsoft</p>
        <p>Investors</p>
        <p>Security</p>
        <p>Sustainability</p>
      </div>
    </div>
  );
}

export default Footer;
