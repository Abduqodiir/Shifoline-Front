import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, merging Tailwind classes properly
 * @param inputs - Class names to combine
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Formats a price with currency symbol
 * @param price - Price to format
 * @param currency - Currency symbol (default: $)
 * @returns Formatted price string
 */
export function formatPrice(price: number, currency = "$") {
    return `${currency}${price.toFixed(2)}`
}

/**
 * Truncates text to a specified length and adds ellipsis
 * @param text - Text to truncate
 * @param length - Maximum length
 * @returns Truncated text
 */
export function truncateText(text: string, length = 100) {
    if (text.length <= length) return text
    return text.slice(0, length) + "..."
}

/**
 * Generates a random ID
 * @param length - Length of the ID
 * @returns Random ID string
 */
export function generateId(length = 8) {
    return Math.random()
        .toString(36)
        .substring(2, 2 + length)
}
