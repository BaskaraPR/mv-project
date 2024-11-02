"use client";

import Link from "@/app/(main)/components/button";
import { ArrowLeft } from "lucide-react";

export default function Language() {
  const languages = [
    { name: "English (Australia)", local: "English (Australia)" },
    { name: "English (Canada)", local: "English (Canada)" },
    { name: "English (India)", local: "English (India)" },
    { name: "English (Ireland)", local: "English (Ireland)" },
    { name: "English (New Zealand)", local: "English (New Zealand)" },
    { name: "English (Singapore)", local: "English (Singapore)" },
    { name: "English (South Africa)", local: "English (South Africa)" },
    { name: "English (US)", local: "English (US)" },
    { name: "Deutsch", local: "German" },
    { name: "Italiano", local: "Italian" }, 
    { name: "Nederlands", local: "Dutch" },
  ];
    
  return (
    <div className="max-w-md mx-auto bg-background min-h-screen">
      <div className="flex items-center p-4 border-b">
        <Link href={"/user"}>
          <ArrowLeft className="h-5 w-5" />
        </Link>

        <h1 className="text-lg font-medium ml-4">Language</h1>
      </div>
      <div className="py-2">
        {languages.map((lang, index) => (
          <button
            key={index}
            className="w-full px-4 py-3 text-left hover:bg-muted flex flex-col"
          >
            <span className="text-base">{lang.name}</span>
            {lang.local !== lang.name && (
              <span className="text-sm text-muted-foreground">
                {lang.local}
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
