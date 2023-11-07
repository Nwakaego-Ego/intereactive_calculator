"use client";
import React, { useState } from "react";

const Main = () => {
  const [finalPrice, setFinalPrice] = useState(0);
  const [initialPrice, setInitialPrice] = useState(0);
  const [discountedPrice, setDiscountedPrice] = useState(0);
  const [taxPercentage, setTaxPercentage] = useState(0);
  const [error, setError] = useState("");

  const initialPriceHandle = (e) => {
    setInitialPrice(parseFloat(e.target.value));
  };
  const discountedPercentageHandle = (e) => {
    setDiscountedPrice(parseFloat(e.target.value));
  };
  const taxPercentageHandle = (e) => {
    setTaxPercentage(parseFloat(e.target.value));
  };

  const handleClick = () => {
    //   discount is the calculated discount amount (e.g., $10 if the discount is 10% of $100).
    //  discountedPriceValue is the updated price after the discount is applied
    //   (e.g., $90 if the initial price was $100 and there was a $10 discount).

    if (initialPrice === 0 || discountedPrice === 0 || taxPercentage === 0) {
      setError("Please enter a value");
      setFinalPrice(0);
    } else {
      const discount = (initialPrice * discountedPrice) / 100;
      const discountedPriceValue = initialPrice - discount;
      const taxes = (discountedPriceValue * taxPercentage) / 100;
      const final = discountedPriceValue + taxes;
      setFinalPrice(Math.floor(final));
      setError("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Interactive Price Calculator
        </h1>
        <h3 className="text-blue-500 text-center mb-4">
          Discount Percentage: 10%
        </h3>
        <h3 className="text-blue-500 text-center mb-4">Tax Percentage: 8%</h3>
        <input
          type="number"
          placeholder="Initial price..."
          className="w-full h-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
          onChange={initialPriceHandle}
        />

        <input
          type="number"
          placeholder="Discount percentage..."
          className="w-full h-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-2"
          onChange={discountedPercentageHandle}
        />

        <input
          type="number"
          placeholder="Tax percentage..."
          className="w-full h-10 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-500 mb-4"
          onChange={taxPercentageHandle}
        />

        <button
          className="w-full h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-bold rounded-lg mb-4"
          onClick={handleClick}
        >
          Calculate
        </button>
        <div className="text-red-600 font-bold text-center mb-2">{error}</div>
        <div className="text-center">Initial Price: {initialPrice}</div>
        <div className="text-center">Discounted Price: {discountedPrice}</div>
        <div className="text-center">Tax Percentage: {taxPercentage}</div>
        <div className="text-center">Final Amount: {finalPrice}</div>
      </div>
    </div>
  );
};

export default Main;
