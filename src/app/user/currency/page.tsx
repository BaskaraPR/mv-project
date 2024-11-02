"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function Currency() {
  const [selectedCurrency, setSelectedCurrency] = useState("EUR");

  const currencies = [
    { name: "United States Dollar", code: "USD" },
    { name: "Euro", code: "EUR" },
    { name: "British Pound", code: "GBP" },
    { name: "Australian Dollar", code: "AUD" },
    { name: "Canadian Dollar", code: "CAD" },
    { name: "Israeli Shekel", code: "ILS" },
    { name: "Brazilian Real", code: "BRL" },
    { name: "Hong Kong Dollar", code: "HKD" },
    { name: "Swedish Krona", code: "SEK" },
    { name: "New Zealand Dollar", code: "NZD" },
    { name: "Singapore Dollar", code: "SGD" },
  ];

  return (
    <div className="font-sans w-full max-w-md mx-auto bg-white shadow-lg rounded-3xl overflow-hidden p-6">
      <div className="mb-6">
        <div className="flex items-center">
          <Link href={"/user"}>
            <button className="mr-4">
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
          </Link>
          <h1 className="text-2xl font-semibold text-gray-800">
            Choose a currency
          </h1>
        </div>
      </div>
      <ul className="space-y-2">
        {currencies.map((currency) => (
          <li
            key={currency.code}
            className={`px-6 py-4 rounded-xl cursor-pointer transition-colors duration-150 ${
              selectedCurrency === currency.code
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
            onClick={() => setSelectedCurrency(currency.code)}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium text-lg">{currency.name}</span>
              <span className="text-sm text-gray-500">{currency.code}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
