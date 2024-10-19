import Image from 'next/image'
import { Search, Lock, FileSearch, Briefcase } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Navbar } from './Navbar'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <main className="container mx-auto px-4 pt-32">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Are you looking for Companies?</h1>
            <p className="text-xl text-gray-600 mb-8">Find a company, Fast. TaskNest helps you find elite companies at a moment's notice</p>
            <div className="flex space-x-2">
              <Button size="lg">Find a company</Button>
              <div className="relative flex-grow">
                <Input type="text" placeholder="search companies work" className="w-full pl-10" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <Image src="/placeholder.svg" alt="Illustration" width={400} height={400} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            { icon: Lock, title: "Create Account", description: "First you have to create a account here" },
            { icon: FileSearch, title: "Find companies", description: "Search the best freelance work here" },
            { icon: Briefcase, title: "Request Project", description: "Apply or save and start your work" },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <feature.icon className="mx-auto h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}