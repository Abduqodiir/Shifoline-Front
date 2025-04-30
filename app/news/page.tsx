import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Search, Plus, Filter, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NewArrivalsPage() {
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
                            { name: "NEW", href: "/new", active: true },
                            { name: "CLOTHING", href: "/clothing" },
                            { name: "ACCESSORIES", href: "/accessories" },
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
                <div className="absolute inset-0 bg-gradient-to-b from-black to-fuchsia-950/30 z-0"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center space-y-4">
                        <div className="inline-block rounded-full bg-fuchsia-500 px-4 py-1 text-sm font-medium">JUST DROPPED</div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                            NEW ARRIVALS
                            <span className="block text-2xl md:text-3xl font-medium mt-2 text-white/70">FRESH DROPS EVERY WEEK</span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* Featured New Arrival */}
            <section className="py-12 relative">
                <div className="container mx-auto px-4">
                    <div className="relative rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950/80 to-black/40 z-10"></div>
                        <Image
                            src="/placeholder.svg?height=600&width=1200&text=FEATURED DROP"
                            alt="Featured new arrival"
                            width={1200}
                            height={600}
                            className="w-full h-[70vh] object-cover"
                        />
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="container mx-auto px-4">
                                <div className="max-w-lg space-y-6">
                                    <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                                        LIMITED EDITION
                                    </div>
                                    <h2 className="text-5xl font-bold leading-tight">
                                        DIGITAL <span className="text-fuchsia-500">DYSTOPIA</span> COLLECTION
                                    </h2>
                                    <p className="text-lg text-white/70">
                                        Our most ambitious collection yet. Featuring holographic fabrics, LED accents, and augmented reality
                                        experiences.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                                            SHOP NOW
                                        </Button>
                                        <Button
                                            variant="outline"
                                            className="rounded-full px-8 py-6 border-white/20 hover:border-white hover:bg-transparent"
                                        >
                                            WATCH LOOKBOOK
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* New Arrivals Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold">
                            <span className="text-white/50">#</span>THIS WEEK
                        </h2>
                        <div className="flex items-center gap-4">
                            <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full text-sm font-medium">
                                <Filter className="h-4 w-4" />
                                FILTER
                                <ChevronDown className="h-4 w-4" />
                            </button>
                            <div className="hidden md:flex gap-2">
                                {["ALL", "CLOTHING", "ACCESSORIES"].map((category, index) => (
                                    <button
                                        key={index}
                                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${index === 0 ? "bg-white text-black" : "bg-white/5 hover:bg-white/10 text-white"
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[...Array(6)].map((_, index) => (
                            <Link href={`/products/new-item-${index + 1}`} key={index} className="group">
                                <div className="relative perspective-card">
                                    <div className="card-3d-effect bg-gradient-to-br from-black to-zinc-900 rounded-3xl p-1 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]">
                                        <div className="aspect-[4/5] bg-zinc-900 rounded-[22px] overflow-hidden relative">
                                            <Image
                                                src={`/placeholder.svg?height=600&width=480&text=New ${index + 1}`}
                                                alt={`New arrival ${index + 1}`}
                                                width={480}
                                                height={600}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                            />

                                            {/* Product tag */}
                                            <div className="absolute top-4 left-4 bg-fuchsia-500 text-white font-bold text-xs rounded-full px-3 py-1">
                                                NEW
                                            </div>

                                            {/* Quick add button */}
                                            <div className="absolute bottom-0 left-0 w-full p-4 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                                <button className="w-full bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 rounded-full py-3 flex items-center justify-center gap-2 transition-all">
                                                    <ShoppingBag className="h-4 w-4" />
                                                    QUICK ADD
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-4 px-2">
                                        <h3 className="text-lg font-medium">
                                            {
                                                [
                                                    "Holographic Hoodie",
                                                    "Pixel Pattern Pants",
                                                    "Digital Denim Jacket",
                                                    "Neon Graphic Tee",
                                                    "Cyber Cargo Pants",
                                                    "AR-Enhanced Cap",
                                                ][index]
                                            }
                                        </h3>
                                        <div className="flex justify-between items-center">
                                            <p className="text-white/70">${(79 + index * 10).toFixed(2)}</p>
                                            <div className="flex gap-1">
                                                {[...Array(5)].map((_, i) => (
                                                    <div
                                                        key={i}
                                                        className={`w-1 h-1 rounded-full ${i < 5 ? "bg-fuchsia-500" : "bg-white/20"}`}
                                                    ></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* View All Button */}
                    <div className="mt-12 text-center">
                        <Button
                            variant="outline"
                            className="rounded-full px-8 py-6 border-white/20 hover:border-white hover:bg-transparent"
                        >
                            VIEW ALL NEW ARRIVALS
                        </Button>
                    </div>
                </div>
            </section>

            {/* Coming Soon */}
            <section className="py-16 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/20 to-black"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-12 space-y-4">
                        <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                            COMING SOON
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                            NEXT{" "}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">DROP</span>
                        </h2>
                        <p className="text-white/70 max-w-md mx-auto">
                            Get notified when our next collection drops. Limited quantities available.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="relative h-[60vh] rounded-3xl overflow-hidden">
                            <Image
                                src="/placeholder.svg?height=800&width=600&text=COMING SOON"
                                alt="Coming soon collection"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                            <div className="absolute bottom-8 left-8 right-8">
                                <div className="bg-black/50 backdrop-blur-md rounded-full px-6 py-4 flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-white/70">Dropping in</p>
                                        <p className="text-xl font-bold">3 DAYS : 14 HOURS : 22 MINS</p>
                                    </div>
                                    <Button className="rounded-full px-6 py-2 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                                        NOTIFY ME
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-3xl font-bold">NEON DREAMS COLLECTION</h3>
                            <p className="text-lg text-white/70">
                                Inspired by the vibrant nightlife of digital metropolises. This collection features glow-in-the-dark
                                elements, reactive fabrics, and designs that blur the line between reality and the digital world.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center text-black font-bold">
                                        1
                                    </div>
                                    <div>
                                        <h4 className="font-medium">LIMITED QUANTITIES</h4>
                                        <p className="text-white/70">Only 200 pieces per design will be produced</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center text-black font-bold">
                                        2
                                    </div>
                                    <div>
                                        <h4 className="font-medium">EARLY ACCESS</h4>
                                        <p className="text-white/70">Members get 24-hour early access to the collection</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center text-black font-bold">
                                        3
                                    </div>
                                    <div>
                                        <h4 className="font-medium">EXCLUSIVE EXTRAS</h4>
                                        <p className="text-white/70">Each order includes digital collectibles and AR experiences</p>
                                    </div>
                                </div>
                            </div>
                            <form className="flex gap-4">
                                <input
                                    type="email"
                                    placeholder="YOUR EMAIL"
                                    className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-fuchsia-500 transition-colors"
                                />
                                <Button className="rounded-full px-8 py-4 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                                    GET NOTIFIED
                                </Button>
                            </form>
                        </div>
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
