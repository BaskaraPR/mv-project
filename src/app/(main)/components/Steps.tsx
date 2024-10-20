import { Lock, Search, RefreshCcw } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Create Account",
    description: "First you have to create a account here",
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Find companies",
    description: "Search the best freelance work here",
  },
  {
    icon: <RefreshCcw className="w-6 h-6" />,
    title: "Request Project",
    description: "Apply or save and start your work",
  },
];

export default function StepsSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="border border-blue-200 rounded-lg p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-purple-100 rounded-full p-4 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
