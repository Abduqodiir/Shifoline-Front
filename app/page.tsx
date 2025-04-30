import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ShoppingBag, Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Floating Navigation - Pill-shaped with neon glow */}
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
              { name: "ACCESSORIES", href: "/accessories" },
              { name: "ABOUT", href: "/about" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wider hover:text-fuchsia-400 transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
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

      {/* Rest of the homepage content remains the same */}
      {/* Hero Section - Split with Animated Elements */}
      <section className="min-h-screen relative flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-fuchsia-950 z-0"></div>

        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                NEW SEASON DROP
              </div>
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
                <span className="block">BREAK</span>
                <span className="block bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                  THE CODE
                </span>
              </h1>
              <p className="text-xl text-white/70 max-w-md">
                Fashion that defies algorithms. Express your unique identity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="group rounded-full px-8 py-6 bg-white text-black hover:bg-fuchsia-500 transition-all duration-300">
                  SHOP NOW
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  variant="outline"
                  className="group rounded-full px-8 py-6 border-white/20 hover:border-white hover:bg-transparent"
                >
                  WATCH REEL
                </Button>
              </div>
            </div>

            <div className="relative h-[60vh] w-full">
              {/* Glitch effect container */}
              <div className="absolute inset-0 overflow-hidden rounded-[30px] border border-white/10">
                <div className="absolute inset-0 glitch-image">
                  <Image
                    src="/placeholder.svg?height=800&width=600"
                    alt="Teen model in avant-garde clothing"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>

                {/* Floating product tags */}
                <div className="absolute top-1/4 left-1/4 animate-float-slow">
                  <div className="bg-black/50 backdrop-blur-md rounded-full px-3 py-1 text-xs border border-white/10">
                    CYBER JACKET • $129
                  </div>
                </div>
                <div className="absolute bottom-1/3 right-1/4 animate-float delay-300">
                  <div className="bg-black/50 backdrop-blur-md rounded-full px-3 py-1 text-xs border border-white/10">
                    NEON BOOTS • $89
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories - Horizontal Scroll with Hover Effects */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold">
              <span className="text-white/50">#</span>TRENDING
            </h2>
            <Link href="/categories" className="group flex items-center text-white/70 hover:text-white">
              See All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8">
            {[
              { name: "CYBER", color: "from-fuchsia-600 to-fuchsia-900", href: "/clothing/cyber" },
              { name: "GLITCH", color: "from-cyan-600 to-cyan-900", href: "/clothing/glitch" },
              { name: "RETRO", color: "from-amber-600 to-amber-900", href: "/clothing/retro" },
              { name: "NEON", color: "from-lime-600 to-lime-900", href: "/clothing/neon" },
              { name: "FUTURE", color: "from-violet-600 to-violet-900", href: "/clothing/future" },
            ].map((category, index) => (
              <Link key={index} href={category.href} className="min-w-[280px] h-[50vh] relative group cursor-pointer">
                <div
                  className={`absolute inset-0 rounded-3xl overflow-hidden border border-white/10 transition-transform duration-500 group-hover:scale-[0.98]`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-60`}></div>
                  <Image
                    src={`/placeholder.svg?height=800&width=600&text=${category.name}`}
                    alt={category.name}
                    fill
                    className="object-cover object-center mix-blend-overlay"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <div className="bg-white/10 backdrop-blur-sm w-fit rounded-full px-3 py-1 text-xs">
                    {index + 10} ITEMS
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{category.name}</h3>
                    <div className="overflow-hidden h-8">
                      <p className="transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                        Explore Collection →
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Drops - 3D Card Effect */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/20 to-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
              JUST DROPPED
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter">
              NEW{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                ARRIVALS
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Digital Denim Jacket", price: "$129", discount: "15% OFF", href: "/products/digital-denim" },
              { name: "Holographic Hoodie", price: "$89", discount: null, href: "/products/holographic-hoodie" },
              { name: "Pixel Pattern Pants", price: "$75", discount: "NEW", href: "/products/pixel-pants" },
            ].map((product, index) => (
              <Link href={product.href} key={index} className="group">
                <div className="relative perspective-card">
                  <div className="card-3d-effect bg-gradient-to-br from-black to-zinc-900 rounded-3xl p-1 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]">
                    <div className="aspect-[4/5] bg-zinc-900 rounded-[22px] overflow-hidden relative">
                      <Image
                        src={`/placeholder.svg?height=600&width=480&text=Product ${index + 1}`}
                        alt={product.name}
                        width={480}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Product tag */}
                      {product.discount && (
                        <div className="absolute top-4 left-4 bg-white text-black font-bold text-xs rounded-full px-3 py-1">
                          {product.discount}
                        </div>
                      )}

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
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <p className="text-white/70">{product.price}</p>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-1 h-1 rounded-full ${i < 4 ? "bg-fuchsia-500" : "bg-white/20"}`}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

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

      {/* Featured Collection - Asymmetric Grid */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                FEATURED COLLECTION
              </div>
              <h2 className="text-5xl font-bold leading-tight">
                DIGITAL <span className="text-fuchsia-500">DYSTOPIA</span>
              </h2>
              <p className="text-lg text-white/70">
                A bold statement on the intersection of technology and fashion. Each piece tells a story of digital
                rebellion.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                  EXPLORE COLLECTION
                </Button>
                <div className="flex items-center gap-4 text-white/70">
                  <span className="text-4xl font-black">24</span>
                  <span className="text-sm">
                    LIMITED
                    <br />
                    PIECES
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=600&width=450"
                    alt="Collection item 1"
                    width={450}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Collection item 2"
                    width={450}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-8">
                <div className="aspect-[3/5] rounded-3xl overflow-hidden border border-white/10">
                  <Image
                    src="/placeholder.svg?height=750&width=450"
                    alt="Collection item 3"
                    width={450}
                    height={750}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Avant Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
              WHY CHOOSE AVANT
            </div>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter">
              BEYOND{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                FASHION
              </span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We're not just creating clothes. We're building the future of self-expression in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "DIGITAL INTEGRATION",
                desc: "Every piece comes with a digital twin for virtual worlds and AR experiences that bring your fashion to life.",
                icon: "🔮",
              },
              {
                title: "CUTTING-EDGE MATERIALS",
                desc: "We use reactive fabrics, LED elements, and nano-materials that respond to your environment and digital inputs.",
                icon: "✨",
              },
              {
                title: "SUSTAINABLE INNOVATION",
                desc: "Our digital-first approach reduces waste, while our physical products use eco-friendly materials and ethical production.",
                icon: "🌱",
              },
              {
                title: "EXCLUSIVE DROPS",
                desc: "Limited edition collections and collaborations with digital artists ensure your style remains unique and ahead of trends.",
                icon: "🎭",
              },
              {
                title: "COMMUNITY-DRIVEN",
                desc: "Join a global community of forward-thinkers who are redefining fashion and digital identity together.",
                icon: "🌐",
              },
              {
                title: "FUTURE-PROOF",
                desc: "As technology evolves, so do our products. Your Avant pieces are designed to integrate with emerging platforms and tech.",
                icon: "⚡",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500/50 transition-all duration-300 group hover:transform hover:translate-y-[-8px]"
              >
                <div className="text-4xl mb-6 transition-transform duration-300 group-hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/70">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button className="rounded-full px-8 py-6 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
              DISCOVER THE DIFFERENCE
            </Button>
          </div>
        </div>
      </section>

      {/* Social Feed - Interactive Grid */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/20 to-black"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold">
              <span className="text-fuchsia-500">@</span>AVANT_STYLE
            </h2>
            <p className="text-white/70 max-w-md mx-auto">Join our community and share your style with #AvantStyle</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="group relative cursor-pointer">
                <div
                  className={`aspect-square rounded-2xl overflow-hidden ${index % 3 === 0 ? "md:col-span-2 md:row-span-2" : ""}`}
                >
                  <Image
                    src={`/placeholder.svg?height=400&width=400&text=Social ${index + 1}`}
                    alt={`Social post ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-sm font-medium">@user_{index + 1}</p>
                      <p className="text-xs text-white/70">#AvantStyle #DigitalFashion</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Futuristic Design */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950/30 to-cyan-950/30"></div>

        {/* Animated Circles */}
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-fuchsia-500/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/2 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto bg-black/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="text-center space-y-6 mb-8">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                JOIN THE{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                  MOVEMENT
                </span>
              </h2>
              <p className="text-white/70 max-w-md mx-auto">
                Get early access to drops, exclusive content, and special events.
              </p>
            </div>

            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-fuchsia-500 transition-colors"
              />
              <Button className="rounded-full px-8 py-4 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                SUBSCRIBE
              </Button>
            </form>

            <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-white/50 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-fuchsia-500"></div>
                <span>Exclusive Drops</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-fuchsia-500"></div>
                <span>Early Access</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-fuchsia-500"></div>
                <span>Special Events</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-fuchsia-500"></div>
                <span>15% Off First Order</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Modern with Animated Elements */}
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
