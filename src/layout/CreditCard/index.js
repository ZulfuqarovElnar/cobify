import React from "react";
import { motion } from "framer-motion";

const creditCards = [
  { title: "Lombard krediti", rate: "28%-dən başlayaraq" },
  { title: "Avtomobil lizinqi", rate: "27%-dən başlayaraq" },
  { title: "Avtokredit", rate: "28%-dən başlayaraq" },
  { title: "Biznes krediti", rate: "25%-dən başlayaraq" },
  { title: "İstehlak krediti", rate: "25%-dən başlayaraq" },
];

const CreditCards = () => {
  return (
    <div className="text-left p-6 py-20">
      <h1 className="text-2xl font-bold mb-6 px-10">Kreditlər</h1>
      <div className="flex flex-wrap justify-center gap-10">
        {creditCards.map((card, index) => (
          <motion.div
            className="bg-white rounded-lg shadow-md py-6 w-96 h-64 hover:shadow-lg text-center cursor-pointer"
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="mt-10 mb-4">
              <img src="assets/images/credit-card.png" alt="Credit Icon" className="mx-auto" />
            </div>
            <h2 className="text-lg font-semibold">{card.title}</h2>
            <p className="text-gray-500">{card.rate}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CreditCards;
