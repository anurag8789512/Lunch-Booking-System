import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import "../../src/styles.css";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 px-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact</h2>
          <p className="leading-relaxed">
            msg global solutions ag
            <br />
            Thurgauerstrasse 39
            <br />
            8050 Zürich/Oerlikon
            <br />
            Switzerland
          </p>
          <p className="mt-4">
            <a href="mailto:hello@msg-global.com" className="hover:underline">
              hello@msg-global.com
            </a>
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">msg global solutions</h2>
          <p className="leading-relaxed">
            msg global solutions is a systems integrator, software development
            partner, and managed services provider focused on SAP solutions for
            multiple industries. Our services include strategies for accounting,
            finance, regulatory reporting, performance management,
            sustainability, customer experience, and IoT. Operating from offices
            across the globe and growing, our expert teams help clients achieve
            operational efficiency and improve decision-making capabilities. msg
            global solutions is part of the msg group.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold mb-4">msg group</h2>
          <p className="leading-relaxed">
            msg is an independent, international group of companies with more
            than 10,000 employees around the world. The msg group is active in
            over 31 countries in the banking, insurance, automotive, consumer
            products, food, life science & healthcare, public sector,
            telecommunications, manufacturing, travel & logistics and utilities
            sectors. msg develops integrated software solutions and advises its
            customers on all aspects of information technology.
          </p>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://www.facebook.com/msgglobal/?fref=ts"
            aria-label="Facebook"
            className="text-white hover:text-gray-400"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://x.com/msg_global"
            aria-label="Twitter"
            className="text-white hover:text-gray-400"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQESU7LDktdBoQAAAZDJsXZonNgeolh33Erp81_f4Ylc1kpAPSJztm_vcv6SWxtl2BBrYJXpJOfTOwRYEVEPJeTna-n52zV67x-8d1EqPh4_WsxCQuTVrBkqzUZI9KxXfUfswcs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fmsg-global"
            aria-label="LinkedIn"
            className="text-white hover:text-gray-400"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://www.instagram.com/we_are_msg_global/"
            aria-label="Instagram"
            className="text-white hover:text-gray-400"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          &copy; 2024 MSG Global Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
