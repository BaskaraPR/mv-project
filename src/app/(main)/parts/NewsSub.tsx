"use client";

import { Button } from "../components/button";
import InputField from "../components/Inputfield";

export default function Newsletter() {
  return (
    <div className="bg-purple-100 flex min-w-[100vh]">
      <div className="mx-auto max-w-[1169px] px-5 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Newsletter Subscription
          </h2>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter to get new company work and projects
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <InputField
              type="email"
              placeholder="Enter your email address"
              aria-label="Email address"
              className="border-2 border-gray-300 rounded-lg p-2"
            />
            <Button variant="primary" className=" h-12 rounded-xl"> {/* Set width and height for a square shape */}
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
