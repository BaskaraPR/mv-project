'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import ClientSelect from './ClientSelect'
import UserDropdown from './UserDropdown'

export default function MobileMenu({ session, tags }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-600 hover:text-gray-900"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white mt-2 p-4 rounded-lg shadow-lg">
          <Link href="/" className="block py-2 text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/companies" className="block py-2 text-gray-600 hover:text-gray-900">
            Companies
          </Link>
          <div className="py-2">
            <ClientSelect tags={tags} />
          </div>
          {session ? (
            <div className="py-2">
              <UserDropdown user={session.user} />
            </div>
          ) : (
            <>
              <Link href="/auth/login" className="block py-2 text-gray-600 hover:text-gray-900">
                Log In
              </Link>
              <Link href="/auth/signUp" className="block py-2 bg-purple-600 text-white px-4 rounded-full hover:bg-purple-700 transition-colors duration-300">
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  )
}