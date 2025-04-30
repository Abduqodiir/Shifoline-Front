import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Search, Plus, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
              { name: "NEW", href: "/new" },
              { name: "CLOTHING", href: "/clothing" },
              { name: "ACCESSORIES", href: "/accessories" },
              { name: "ABOUT", href: "/about", active: true },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium tracking-wider hover:text-fuchsia-400 transition-colors relative group ${
                  item.active ? "text-fuchsia-400" : ""
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-fuchsia-500 to-cyan-500 transition-all duration-300 ${
                    item.active ? "w-full" : "w-0 group-hover:w-full"
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

        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
              OUR STORY
              <span className="block text-2xl md:text-3xl font-medium mt-2 text-white/70">
                REDEFINING FASHION FOR THE DIGITAL AGE
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                ESTABLISHED 2023
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                BREAKING THE <span className="text-fuchsia-500">CODE</span>
              </h2>
              <p className="text-lg text-white/70">
                Avant was born from a simple yet revolutionary idea: what if fashion could transcend the physical world
                and embrace the digital revolution? Founded by a collective of designers, technologists, and digital
                artists, we set out to create clothing that exists at the intersection of reality and the digital realm.
              </p>
              <p className="text-lg text-white/70">
                Our journey began in the underground fashion scenes of Tokyo, Berlin, and Seoul, where we witnessed
                firsthand how the next generation was blurring the lines between their physical and digital identities.
                We saw an opportunity to create a brand that speaks to this new reality.
              </p>
              <div className="pt-4">
                <Link href="/collections" className="group flex items-center text-fuchsia-400 hover:text-fuchsia-300">
                  Explore our collections
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="relative h-[60vh] rounded-3xl overflow-hidden order-1 lg:order-2 perspective-card">
              <div className="card-3d-effect absolute inset-0 border border-white/10">
                <Image
                  src="/placeholder.svg?height=800&width=600&text=AVANT STORY"
                  alt="Avant brand story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/20 to-black"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
              OUR MISSION
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
              WHAT WE{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                STAND FOR
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "INNOVATION",
                desc: "We push the boundaries of what fashion can be, incorporating technology, digital experiences, and cutting-edge materials into every design.",
                icon: "🔮",
              },
              {
                title: "SUSTAINABILITY",
                desc: "Our commitment to the planet is unwavering. We use eco-friendly materials, ethical manufacturing processes, and minimize waste in all our operations.",
                icon: "🌱",
              },
              {
                title: "INCLUSIVITY",
                desc: "Fashion should be for everyone. We design for all body types, gender expressions, and personal styles, celebrating the diversity of our community.",
                icon: "✨",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-fuchsia-500/50 transition-colors"
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-white/70">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
              THE VISIONARIES
            </div>
            <h2 className="text-4xl font-bold">
              MEET THE <span className="text-fuchsia-500">TEAM</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              A collective of designers, technologists, and digital artists pushing the boundaries of fashion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Kai Zhang", role: "Founder & Creative Director", image: "team1" },
              { name: "Mia Rodriguez", role: "Head of Technology", image: "team2" },
              { name: "Jamal Williams", role: "Design Lead", image: "team3" },
              { name: "Sophia Chen", role: "Sustainability Officer", image: "team4" },
            ].map((member, index) => (
              <div key={index} className="group">
                <div className="relative perspective-card">
                  <div className="card-3d-effect bg-gradient-to-br from-black to-zinc-900 rounded-3xl p-1 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(255,0,255,0.3)]">
                    <div className="aspect-[3/4] bg-zinc-900 rounded-[22px] overflow-hidden relative">
                      <Image
                        src={`/placeholder.svg?height=600&width=450&text=${member.name}`}
                        alt={member.name}
                        width={450}
                        height={600}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-6">
                        <div>
                          <p className="text-lg font-bold">{member.name}</p>
                          <p className="text-white/70">{member.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-950/30 to-cyan-950/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
                OUR APPROACH
              </div>
              <h2 className="text-4xl font-bold leading-tight">
                DIGITAL-FIRST <span className="text-cyan-500">FASHION</span>
              </h2>
              <p className="text-lg text-white/70">
                We believe that fashion in the digital age should be more than just physical garments. Each Avant piece
                is designed with both physical and digital experiences in mind.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex-shrink-0 flex items-center justify-center text-black font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">AR EXPERIENCES</h3>
                    <p className="text-white/70">
                      Each garment comes with a unique AR experience that can be activated through our app.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex-shrink-0 flex items-center justify-center text-black font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">DIGITAL TWINS</h3>
                    <p className="text-white/70">
                      Own both the physical item and its digital counterpart for use in virtual worlds.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex-shrink-0 flex items-center justify-center text-black font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">SMART MATERIALS</h3>
                    <p className="text-white/70">
                      We use innovative fabrics that respond to light, temperature, and digital inputs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[60vh] rounded-3xl overflow-hidden">
              <Image
                src="/placeholder.svg?height=800&width=600&text=DIGITAL FASHION"
                alt="Digital fashion approach"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-4 py-1 text-sm font-medium">
              SUSTAINABILITY
            </div>
            <h2 className="text-4xl font-bold">
              FASHION WITH A <span className="text-fuchsia-500">CONSCIENCE</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Our commitment to the planet is as important as our commitment to innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-3xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=400&text=ECO MATERIALS"
                alt="Eco-friendly materials"
                width={400}
                height={600}
                className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-xl font-bold mb-2">ECO-FRIENDLY MATERIALS</h3>
                <p className="text-white/70">
                  We use recycled fabrics, organic cotton, and innovative sustainable materials in all our products.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=400&text=ETHICAL PRODUCTION"
                alt="Ethical production"
                width={400}
                height={600}
                className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-xl font-bold mb-2">ETHICAL PRODUCTION</h3>
                <p className="text-white/70">
                  All our manufacturing partners adhere to strict ethical standards and fair labor practices.
                </p>
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden group">
              <Image
                src="/placeholder.svg?height=600&width=400&text=DIGITAL REDUCTION"
                alt="Digital waste reduction"
                width={400}
                height={600}
                className="w-full aspect-[2/3] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h3 className="text-xl font-bold mb-2">DIGITAL WASTE REDUCTION</h3>
                <p className="text-white/70">
                  Our digital-first approach reduces physical waste by allowing customers to try before they buy using
                  AR.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-fuchsia-950/20 to-black"></div>
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
                Be part of the fashion revolution. Sign up for exclusive updates, early access to drops, and special
                events.
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
