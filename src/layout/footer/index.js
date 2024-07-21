import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center border-b pb-6 mb-6">
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                <FontAwesomeIcon icon={faFacebook} />
                Facebook
            </Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
            </Link>
            <Link to="/" className="text-gray-700 hover:text-gray-900 flex items-center gap-1">
                <FontAwesomeIcon icon={faYoutube} />
                Youtube
            </Link>
          </div>
          <div className="text-gray-700 font-bold text-lg">+994 50 232 92 07</div>
          <div className="text-gray-700">Qaynar xətt</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 text-gray-700 text-sm mb-6">
          <div>
            <p className="hover:underline">Baş səhifə</p>
            <p className="hover:underline">BKOT haqqında</p>
            <p className="hover:underline">Missiya və vizyon</p>
          </div>
          <div>
            <p className="hover:underline">Rəhbərlik</p>
            <p className="hover:underline">Maliyyə hesabatları</p>
            <p className="hover:underline">Lombard krediti</p>
          </div>
          <div>
            <p className="hover:underline">Avtomobil lizinqi</p>
            <p className="hover:underline">İş yerindən arayışla kredit</p>
            <p className="hover:underline">Kənd təsərrüfatı krediti</p>
          </div>
          <div>
            <p className="hover:underline">Sahibkarlıq krediti</p>
            <p className="hover:underline">Biznes krediti</p>
          </div>
          <div>
            <p className="hover:underline">+994 50 232 92 07</p>
            <p className="hover:underline">+994 12 489 80 00</p> 
            <p className="hover:underline">info@nasproject.az</p>
          </div>
        </div>
        <div className="flex justify-between items-center text-xs text-gray-500 border-t pt-10">
          <div>
            <p>Copyright ©2024 "NAS Project" Bank Olmayan Kredit Təşkilatı</p>
          </div>
          <div className="flex items-center"> 
            <span>Saytın hazırlanması</span> 
            <img src="assets/images/okmedia_logo.png" alt="Okmedia" className="ml-2 h-5" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
