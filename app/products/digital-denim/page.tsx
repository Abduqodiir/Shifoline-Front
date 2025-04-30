import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight, Heart, ShoppingBag, Share2, Star, ChevronDown, Plus, Minus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProductDetail() {
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
                        <Link href="/cart" className="rounded-full p-2 hover:bg-white/10 transition-colors relative">
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

            {/* Breadcrumb */}
            <div className="pt-32 pb-4 container mx-auto px-4">
                <div className="flex items-center text-sm text-white/50">
                    <Link href="/" className="hover:text-white transition-colors">
                        Home
                    </Link>
                    <span className="mx-2">/</span>
                    <Link href="/products" className="hover:text-white transition-colors">
                        Products
                    </Link>
                    <span className="mx-2">/</span>
                    <span className="text-white">Digital Denim Jacket</span>
                </div>
            </div>

            {/* Product Detail - Unique Layout */}
            <section className="py-8 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Product Images */}
                    <div className="space-y-6">
                        {/* Main Image with Interactive Elements */}
                        <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 group">
                            <Image
                                src="/placeholder.svg?height=800&width=800&text=Digital Denim"
                                alt="Digital Denim Jacket"
                                fill
                                className="object-cover"
                            />

                            {/* Interactive hotspots */}
                            <div className="absolute top-1/4 left-1/4 animate-pulse">
                                <div className="relative">
                                    <div className="w-4 h-4 rounded-full bg-fuchsia-500 animate-ping absolute"></div>
                                    <div className="w-4 h-4 rounded-full bg-fuchsia-500 relative z-10"></div>
                                    <div className="absolute top-6 left-6 bg-black/70 backdrop-blur-md rounded-lg p-3 w-48 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-xs font-medium">Reflective Nano-Fabric</p>
                                        <p className="text-xs text-white/70">Changes color based on lighting and angle</p>
                                    </div>
                                </div>
                            </div>

                            <div className="absolute bottom-1/3 right-1/4 animate-pulse">
                                <div className="relative">
                                    <div className="w-4 h-4 rounded-full bg-cyan-500 animate-ping absolute"></div>
                                    <div className="w-4 h-4 rounded-full bg-cyan-500 relative z-10"></div>
                                    <div className="absolute top-6 right-6 bg-black/70 backdrop-blur-md rounded-lg p-3 w-48 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <p className="text-xs font-medium">Smart Temperature Control</p>
                                        <p className="text-xs text-white/70">Adapts to body heat and external temperature</p>
                                    </div>
                                </div>
                            </div>

                            {/* Image controls */}
                            <div className="absolute bottom-4 right-4 flex gap-2">
                                <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-colors">
                                    <ArrowLeft className="h-4 w-4" />
                                </button>
                                <button className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:bg-black/70 transition-colors">
                                    <ArrowRight className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Thumbnail Gallery */}
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, index) => (
                                <button
                                    key={index}
                                    className={`aspect-square rounded-2xl overflow-hidden border ${index === 0 ? "border-fuchsia-500" : "border-white/10"}`}
                                >
                                    <Image
                                        src={`/placeholder.svg?height=150&width=150&text=View ${index + 1}`}
                                        alt={`Product view ${index + 1}`}
                                        width={150}
                                        height={150}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        {/* AR Try-On Button */}
                        <button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 rounded-full py-4 flex items-center justify-center gap-2 transition-all">
                            <span className="text-sm font-medium">TRY ON WITH AR</span>
                        </button>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-500 text-xs font-medium rounded-full">
                                    NEW DROP
                                </div>
                                <div className="px-3 py-1 bg-white/10 text-white/90 text-xs font-medium rounded-full">
                                    LIMITED EDITION
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold mb-2">Digital Denim Jacket</h1>

                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < 4 ? "text-fuchsia-500 fill-fuchsia-500" : "text-white/20"}`}
                                        />
                                    ))}
                                </div>
                                <span className="text-white/70 text-sm">42 reviews</span>
                            </div>

                            <div className="flex items-baseline gap-4">
                                <span className="text-3xl font-bold">$129.00</span>
                                <span className="text-white/70 line-through">$159.00</span>
                                <span className="text-fuchsia-500 text-sm font-medium">Save 19%</span>
                            </div>
                        </div>

                        {/* Color Selection */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-medium">COLOR</h3>
                                <span className="text-white/70 text-sm">Cyber Blue</span>
                            </div>

                            <div className="flex gap-3">
                                {[
                                    { name: "Cyber Blue", color: "bg-cyan-500" },
                                    { name: "Neon Pink", color: "bg-fuchsia-500" },
                                    { name: "Digital Black", color: "bg-zinc-900" },
                                    { name: "Virtual White", color: "bg-zinc-100" },
                                ].map((color, index) => (
                                    <button
                                        key={index}
                                        className={`w-12 h-12 rounded-full ${color.color} ${index === 0 ? "ring-2 ring-offset-2 ring-offset-black ring-fuchsia-500" : ""}`}
                                        aria-label={color.name}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Size Selection */}
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-sm font-medium">SIZE</h3>
                                <button className="text-fuchsia-500 text-sm font-medium flex items-center gap-1">
                                    Size Guide
                                    <ChevronDown className="h-4 w-4" />
                                </button>
                            </div>

                            <div className="grid grid-cols-5 gap-3">
                                {["XS", "S", "M", "L", "XL"].map((size, index) => (
                                    <button
                                        key={index}
                                        className={`py-3 rounded-full border ${index === 2 ? "bg-white text-black border-white" : "border-white/20 hover:border-white/50"} transition-colors`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Quantity */}
                        <div className="space-y-4">
                            <h3 className="text-sm font-medium">QUANTITY</h3>
                            <div className="flex items-center w-1/3">
                                <button className="w-10 h-10 rounded-l-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <Minus className="h-4 w-4" />
                                </button>
                                <div className="flex-1 h-10 border-t border-b border-white/20 flex items-center justify-center">1</div>
                                <button className="w-10 h-10 rounded-r-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <Plus className="h-4 w-4" />
                                </button>
                            </div>
                        </div>

                        {/* Add to Cart and Wishlist */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button className="flex-1 rounded-full py-6 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                                ADD TO CART
                            </Button>
                            <Button
                                variant="outline"
                                className="rounded-full py-6 border-white/20 hover:border-white hover:bg-transparent"
                            >
                                <Heart className="h-5 w-5 mr-2" />
                                WISHLIST
                            </Button>
                        </div>

                        {/* Product Features */}
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 cursor-pointer group">
                                <h3 className="font-medium">PRODUCT DETAILS</h3>
                                <ChevronDown className="h-5 w-5 transition-transform group-hover:rotate-180" />
                            </div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 cursor-pointer group">
                                <h3 className="font-medium">MATERIALS & CARE</h3>
                                <ChevronDown className="h-5 w-5 transition-transform group-hover:rotate-180" />
                            </div>
                            <div className="flex items-center justify-between border-b border-white/10 pb-4 cursor-pointer group">
                                <h3 className="font-medium">SHIPPING & RETURNS</h3>
                                <ChevronDown className="h-5 w-5 transition-transform group-hover:rotate-180" />
                            </div>
                        </div>

                        {/* Share */}
                        <div className="flex items-center gap-4 pt-4">
                            <button className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                                <Share2 className="h-5 w-5" />
                                <span className="text-sm">Share</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Recommendations */}
            <section className="py-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/10 to-black"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-bold mb-12">
                        <span className="text-white/50">#</span>COMPLETE THE LOOK
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[...Array(4)].map((_, index) => (
                            <Link href="#" key={index} className="group">
                                <div className="relative">
                                    <div className="aspect-[3/4] bg-zinc-900 rounded-2xl overflow-hidden">
                                        <Image
                                            src={`/placeholder.svg?height=400&width=300&text=Item ${index + 1}`}
                                            alt={`Recommended item ${index + 1}`}
                                            width={300}
                                            height={400}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="absolute bottom-0 left-0 w-full p-3 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                        <button className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full py-2 flex items-center justify-center gap-2 transition-all">
                                            <ShoppingBag className="h-4 w-4" />
                                            QUICK ADD
                                        </button>
                                    </div>
                                </div>

                                <div className="mt-3 px-1">
                                    <h3 className="text-sm font-medium">Cyber Cargo Pants</h3>
                                    <p className="text-white/70 text-sm">$89.00</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Recently Viewed */}
            <section className="py-12 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <h2 className="text-xl font-medium mb-8">RECENTLY VIEWED</h2>

                    <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-4">
                        {[...Array(6)].map((_, index) => (
                            <div key={index} className="min-w-[180px]">
                                <div className="aspect-[3/4] bg-zinc-900 rounded-xl overflow-hidden mb-3">
                                    <Image
                                        src={`/placeholder.svg?height=240&width=180&text=Item ${index + 1}`}
                                        alt={`Recently viewed item ${index + 1}`}
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
