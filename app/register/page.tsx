"use client"

import Link from "next/link"
import InputField from "@/components/Input"

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Ro'yxatdan o'tish</h2>
        <form>
          <InputField type="email" label="Email" name="email" required />
          <InputField type="tel" label="Telefon" name="phone" required />
          <InputField type="password" label="Parol" name="password" required />
          <div className="flex items-center mt-4">
            <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
            <span className="ml-2 text-sm text-gray-600">Eslab qolish</span>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded mt-6 hover:bg-blue-700 transition-colors"
          >
            Ro'yxatdan o'tish
          </button>
          <div className="text-center mt-4 text-sm text-gray-600">
            Accountingiz bormi?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Kirish
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

