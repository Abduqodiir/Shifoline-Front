import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ShoppingBag, Search, Plus, Trash2, CreditCard, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Cart() {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Floating Navigation - Same as homepage */}
            <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
                <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-full px-6 py-4 flex justify-between items-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <Link
                        href="/"
                        className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                    >
                        AVANT
                    </Link>

                    <nav className="hidden md:flex space-x-8">
                        {["NEW", "CLOTHING", "ACCESSORIES", "COLLABS"].map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-sm font-medium tracking-wider hover:text-fuchsia-400 transition-colors relative group"
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <button className="rounded-full p-2 hover:bg-white/10 transition-colors">
                            <Search className="h-5 w-5" />
                        </button>
                        <Link href="/cart" className="rounded-full p-2 bg-white/10 transition-colors relative">
                            <ShoppingBag className="h-5 w-5" />
                            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-fuchsia-500 text-[10px] flex items-center justify-center">
                                3
                            </span>
                        </Link>
                        <button className="md:hidden rounded-full p-2 hover:bg-white/10 transition-colors">
                            <Plus className="h-5 w-5 rotate-45" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Cart Page */}
            <div className="pt-32 pb-20 container mx-auto px-4">
                <h1 className="text-4xl font-bold mb-8">YOUR CART</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Cart Items - 2 columns on large screens */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Cart Items */}
                        {[
                            { name: "Digital Denim Jacket", price: "$129.00", color: "Cyber Blue", size: "M", quantity: 1 },
                            { name: "Holographic Hoodie", price: "$89.00", color: "Neon Pink", size: "L", quantity: 1 },
                            { name: "Pixel Pattern Pants", price: "$75.00", color: "Digital Black", size: "M", quantity: 1 },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-6 border border-white/10 rounded-2xl p-4 bg-white/5 backdrop-blur-sm"
                            >
                                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                    <Image
                                        src={`/placeholder.svg?height=96&width=96&text=Item ${index + 1}`}
                                        alt={item.name}
                                        width={96}
                                        height={96}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="flex-1 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between">
                                            <h3 className="font-medium">{item.name}</h3>
                                            <span>{item.price}</span>
                                        </div>
                                        <div className="text-sm text-white/70 mt-1">
                                            <p>
                                                Color: {item.color} • Size: {item.size}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center mt-4">
                                        <div className="flex items-center">
                                            <button className="w-8 h-8 rounded-l-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                                <Minus className="h-3 w-3" />
                                            </button>
                                            <div className="w-8 h-8 border-t border-b border-white/20 flex items-center justify-center text-sm">
                                                {item.quantity}
                                            </div>
                                            <button className="w-8 h-8 rounded-r-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                                <Plus className="h-3 w-3" />
                                            </button>
                                        </div>

                                        <button className="text-white/50 hover:text-white transition-colors">
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Continue Shopping */}
                        <div className="flex justify-between items-center pt-4">
                            <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                <ArrowLeft className="h-4 w-4" />
                                <span>Continue Shopping</span>
                            </Link>

                            <button className="text-white/70 hover:text-white transition-colors">Clear Cart</button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="border border-white/10 rounded-2xl p-6 bg-white/5 backdrop-blur-sm sticky top-32">
                            <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between">
                                    <span className="text-white/70">Subtotal</span>
                                    <span>$293.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Shipping</span>
                                    <span>Calculated at checkout</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white/70">Tax</span>
                                    <span>Calculated at checkout</span>
                                </div>

                                <div className="border-t border-white/10 my-4 pt-4">
                                    <div className="flex justify-between font-bold">
                                        <span>Total</span>
                                        <span>$293.00</span>
                                    </div>
                                </div>

                                <Button className="w-full rounded-full py-6 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                                    <CreditCard className="h-4 w-4 mr-2" />
                                    CHECKOUT
                                </Button>

                                {/* Payment methods */}
                                <div className="pt-4">
                                    <p className="text-center text-white/50 text-sm mb-4">WE ACCEPT</p>
                                    <div className="flex justify-center gap-2">
                                        {[...Array(4)].map((_, index) => (
                                            <div key={index} className="w-12 h-8 bg-white/10 rounded-md"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* You May Also Like */}
            <section className="py-12 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl font-medium mb-8">YOU MAY ALSO LIKE</h2>

                    <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="min-w-[180px]">
                                <div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden mb-3">
                                    <Image
                                        src={`/placeholder.svg?height=240&width=180&text=Item ${index + 1}`}
                                        alt={`Recommended item ${index + 1}`}
                                        width={180}
                                        height={240}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <h3 className="text-sm font-medium truncate">Neon Graphic Tee</h3>
                                <p className="text-white/70 text-xs">$49.00</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer - Same as homepage */}
            <footer className="py-16 border-t border-white/10 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        <div className="space-y-6">
                            <Link
                                href="/"
                                className="text-3xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500"
                            >
                                AVANT
                            </Link>
                            <p className="text-white/70 max-w-xs">
                                Redefining fashion for the digital generation. Bold, unique, and unapologetically you.
                            </p>
                            <div className="flex gap-4">
                                {["TikTok", "Instagram", "Twitter", "Discord"].map((social, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                                    >
                                        <span className="sr-only">{social}</span>
                                        {/* Simplified social icons */}
                                        <div className="w-5 h-5 rounded-full bg-white/70"></div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {[
                            { title: "SHOP", links: ["New Arrivals", "Best Sellers", "Collections", "Accessories"] },
                            { title: "INFO", links: ["About Us", "Sustainability", "Stores", "Careers"] },
                            { title: "HELP", links: ["Contact", "Shipping", "Returns", "Size Guide"] },
                        ].map((section, index) => (
                            <div key={index} className="space-y-6">
                                <h3 className="text-lg font-bold">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.links.map((link, idx) => (
                                        <li key={idx}>
                                            <Link href="#" className="text-white/70 hover:text-white transition-colors">
                                                {link}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Avant. All rights reserved.</p>
                        <div className="flex flex-wrap gap-6 text-sm text-white/50">
                            <Link href="#" className="hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                Cookies
                            </Link>
                            <Link href="#" className="hover:text-white transition-colors">
                                Accessibility
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
