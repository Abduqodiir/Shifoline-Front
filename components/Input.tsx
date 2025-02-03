'use client'

import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface InputFieldProps {
  type: string
  label: string
  name: string
  required?: boolean
}

export default function InputField({ type, label, name, required = false }: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <div className="relative">
        <input
          type={type === 'password' && showPassword ? 'text' : type}
          id={name}
          name={name}
          required={required}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
        {type === 'password' && (
          <button
            type="button"
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    </div>
  )
}
