import React from "react";
import ServiceCard from "../components/ServiceCard"; // Import the reusable ServiceCard component
import { services } from "@/lib/data"; // Import the services data

export default function ServiceCards() {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-2">
          Verified Pro <span className="text-purple-600">Services</span>
        </h1>
        <p className="text-gray-600 mb-8">
          Hand-vetted talent for all your professional needs
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
