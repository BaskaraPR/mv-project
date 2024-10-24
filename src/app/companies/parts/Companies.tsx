import React from 'react';
import Card from '../components/Card'; // Import the reusable Card component
import { companies } from '@/lib/data'; // Import the services data

export default function FindCompanies() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-gray-500 mb-2">The companies work!</h2>
        <h1 className="text-4xl font-bold mb-8">
          Find <span className="text-purple-600">Companies</span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
