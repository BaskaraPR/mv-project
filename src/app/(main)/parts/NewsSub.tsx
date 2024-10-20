"use client";

import {Button} from "../components/button";
import InputField from "../components/Inputfield";

export default function Newsletter() {
  return (
    <div className="bg-purple-100 p-8 rounded-lg max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-center mb-2">
        Newsletter Subscription
      </h2>
      <p className="text-gray-600 text-center mb-6">
        Subscribe to our newsletter to get new company work and projects
      </p>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <InputField
          type="email"
          placeholder="Enter your email address"
          aria-label="Email address"
        />
        <Button variant="primary">Subscribe</Button>
      </form>
    </div>
  );
}
