import React from "react";
import hormuudLogo from "../assets/images/hormuud-logo.png";
import microsoftLogo from "../assets/images/image.jpg";
// import dropboxLogo from "../assets/images/dropbox-logo.png";
// import googleLogo from "../assets/images/google-logo.png";
// import teslaLogo from "../assets/images/tesla-logo.png";

const TrustedBy = () => {
  const companies = [
    { name: "Stripe", logo: hormuudLogo },
    { name: "Microsoft", logo: microsoftLogo },
    // { name: "Dropbox", logo: dropboxLogo },
    // { name: "Google", logo: googleLogo },
    // { name: "Tesla", logo: teslaLogo },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-600 text-lg mb-6">
          Trusted by over a lot of companies
        </p>
        <div className="flex justify-center items-center flex-wrap gap-6">
          {companies.map((company, index) => (
            <img
              key={index}
              src={company.logo}
              alt={company.name}
              className="h-10"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
