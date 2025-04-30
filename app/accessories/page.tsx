import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag, Search, Plus, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AccessoriesPage() {
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
                        {[
                            { name: "NEW", href: "/news" },
                            { name: "CLOTHING", href: "/clothing" },
                            { name: "ACCESSORIES", href: "/accessories", active: true },
                            { name: "ABOUT", href: "/about" },
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-medium tracking-wider hover:text-fuchsia-400 transition-colors relative group ${item.active ? "text-fuchsia-400" : ""
                                    }`}
                            >
                                {item.name}
                                <span
                                    className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-300 ${item.active ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                ></span>
                            </Link>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="hidden md:flex text-sm font-medium tracking-wider hover:text-fuchsia-400 transition-colors relative group"
                        >
                            LOGIN
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
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

            {/* Hero Banner */}
            <section className="pt-32 pb-12 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black to-cyan-950/30 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            ACCESSORIES
                            <span className="block text-2xl md:text-3xl font-medium mt-2 text-white/70">
                                COMPLETE YOUR DIGITAL IDENTITY
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Category Navigation */}
            <section className="py-6 border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between overflow-x-auto hide-scrollbar">
                        <div className="flex gap-4">
                            {[
                                { name: "ALL", href: "/accessories" },
                                { name: "BAGS", href: "/accessories/bags" },
                                { name: "JEWELRY", href: "/accessories/jewelry" },
                                { name: "HATS", href: "/accessories/hats" },
                                { name: "TECH", href: "/accessories/tech" },
                                { name: "OTHER", href: "/accessories/other" },
                            ].map((category, index) => (
                                <Link
                                    key={index}
                                    href={category.href}
                                    className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0 ? "bg-white text-black" : "bg-white/5 hover:bg-white/10 text-white"
                                        }`}
                                >
                                    {category.name}
                                </Link>
                            ))}
                        </div>

                        <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap">
                            <Filter className="h-4 w-4" />
                            FILTER
                            <ChevronDown className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                        {[...Array(8)].map((_, index) => (
                            <Link href={`/products/accessory-${index + 1}`} key={index} className="group">
                                <div className="relative perspective-card">
                                    <div className="card-3d-effect bg-gradient-to-br from-black to-zinc-900 rounded-2xl p-1 transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,255,255,0.2)]">
                                        <div className="aspect-square bg-zinc-900 rounded-xl overflow-hidden relative">
                                            <Image
                                                src={`/placeholder.svg?height=450&width=450&text=Accessory ${index + 1}`}
                                                alt={`Accessory item ${index + 1}`}
                                                width={450}
                                                height={450}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Product tag */}
                                            {index % 4 === 0 && (
                                                <div className="absolute top-3 left-3 bg-cyan-500 text-white font-bold text-xs rounded-full px-3 py-1">
                                                    NEW
                                                </div>
                                            )}
                                            {index % 5 === 0 && (
                                                <div className="absolute top-3 left-3 bg-fuchsia-500 text-white font-bold text-xs rounded-full px-3 py-1">
                                                    SALE
                                                </div>
                                            )}

                                            {/* Quick add button */}
                                            <div className="absolute bottom-0 left-0 w-full p-3 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                                <button className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full py-2 flex items-center justify-center gap-2 transition-all">
                                                    <ShoppingBag className="h-4 w-4" />
                                                    QUICK ADD
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3 px-1">
                                        <h3 className="text-sm font-medium truncate">
                                            {
                                                [
                                                    "Holographic Backpack",
                                                    "LED Bracelet",
                                                    "Digital Watch",
                                                    "AR Glasses",
                                                    "Tech Earrings",
                                                    "Cyber Beanie",
                                                    "Smart Wallet",
                                                    "Glow Necklace",
                                                ][index]
                                            }
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <p className="text-white/70 text-sm">${(39 + index * 10).toFixed(2)}</p>
                                            <div className="flex gap-1">
                                                {[...Array(4)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1 h-1 rounded-full ${i < (4 - (index % 3)) ? "bg-cyan-500" : "bg-white/20"}`}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="mt-12 text-center">
                        <Button
                            variant="outline"
                            className="rounded-full px-8 py-6 border-white/20 hover:border-white hover:bg-transparent"
                        >
                            LOAD MORE
                        </Button>
                    </div>
                </div>
            </section>

            {/* Featured Tech Accessories */}
            <section className="py-16 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-950/30 to-black z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                                FEATURED COLLECTION
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                TECH <span className="text-cyan-500">FUSION</span>
                            </h2>
                            <p className="text-lg text-white/70">
                                Where fashion meets technology. Smart accessories that enhance your digital lifestyle with style.
                            </p>
                            <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-cyan-500 hover:text-white transition-all duration-300">
                                SHOP COLLECTION
                            </Button>
                        </div>
                        <div className="relative h-[60vh] rounded-3xl overflow-hidden">
                            <Image
                                src="/placeholder.svg?height=800&width=600&text=TECH FUSION"
                                alt="Tech Fusion Collection"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accessory Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8">
                        <span className="text-white/50">#</span>CATEGORIES
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {[
                            { name: "BAGS", image: "bags", count: 12 },
                            { name: "JEWELRY", image: "jewelry", count: 18 },
                            { name: "HATS", image: "hats", count: 8 },
                            { name: "TECH", image: "tech", count: 15 },
                            { name: "EYEWEAR", image: "eyewear", count: 10 },
                            { name: "OTHER", image: "other", count: 7 },
                        ].map((category, index) => (
                            <Link href={`/accessories/${category.name.toLowerCase()}`} key={index} className="group">
                                <div className="relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={`/placeholder.svg?height=300&width=400&text=${category.name}`}
                                        alt={category.name}
                                        width={400}
                                        height={300}
                                        className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-4">
                                        <h3 className="text-xl font-bold">{category.name}</h3>
                                        <p className="text-white/70 text-sm">{category.count} Products</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Styling Tips */}
            <section className="py-16 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12 space-y-4">
                        <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                            STYLE GUIDE
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                            HOW TO{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-fuchsia-500">STYLE</span>
                        </h2>
                        <p className="text-white/70 max-w-md mx-auto">
                            Tips and inspiration for styling your accessories with our clothing collections.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "LAYER YOUR TECH", desc: "Stack digital accessories for maximum impact" },
                            { title: "MIX MATERIALS", desc: "Combine holographic with matte for contrast" },
                            { title: "COLOR COORDINATE", desc: "Match your accessories to your outfit's accent color" },
                        ].map((tip, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="relative rounded-2xl overflow-hidden">
                                    <Image
                                        src={`/placeholder.svg?height=400&width=400&text=Tip ${index + 1}`}
                                        alt={`Styling tip ${index + 1}`}
                                        width={400}
                                        height={400}
                                        className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                                    <div className="absolute bottom-0 left-0 w-full p-6">
                                        <h3 className="text-xl font-bold mb-2">{tip.title}</h3>
                                        <p className="text-white/70">{tip.desc}</p>
                                        <div className="mt-4 overflow-hidden h-8">
                                            <p className="transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0 flex items-center">
                                                Learn More <ArrowRight className="ml-2 h-4 w-4" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
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
