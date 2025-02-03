"use client"

import Link from "next/link"
import InputField from "@/components/Input"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Tizimga kirish</h2>
        <form>
          <InputField type="email" label="Email" name="email" required />
          <InputField type="password" label="Parol" name="password" required />
          <div className="flex items-center justify-between mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-600" />
              <span className="ml-2 text-sm text-gray-600">Eslab qolish</span>
            </label>
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Parolni unutdingizmi?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded mt-6 hover:bg-blue-700 transition-colors"
          >
            Kirish
          </button>
          <div className="text-center mt-4 text-sm text-gray-600">
            Accountingiz yo'qmi?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Ro'yxatdan o'tish
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

