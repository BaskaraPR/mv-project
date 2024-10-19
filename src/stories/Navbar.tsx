import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ChevronDown } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-auto my-5 flex max-w-[1356px] items-center justify-between rounded-full bg-white px-8 py-4 shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/placeholder.svg" alt="TaskNest Logo" width={40} height={40} className="rounded-full" />
        <span className="text-2xl font-bold">TaskNest</span>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <Link href="#" className="text-gray-600 hover:text-gray-900">
          Companies
        </Link>
        <div className="relative">
          <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-900">
            <span>Category</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
        <Button variant="ghost">Log In</Button>
        <Button>Sign Up</Button>
      </div>
    </nav>
  )
}