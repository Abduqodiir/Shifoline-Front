import Link from "next/link"
import { ShoppingBag, Search, Plus, EyeOff, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Register() {
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

      {/* Register Section */}
      <div className="min-h-screen flex items-center justify-center pt-20 pb-20">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-fuchsia-950 z-0"></div>

        {/* Animated Circles */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-cyan-500/20 blur-3xl animate-pulse delay-700"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-lg mx-auto">
            <div className="bg-black/40 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-[0_0_30px_rgba(255,0,255,0.15)]">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                    CREATE ACCOUNT
                  </span>
                </h1>
                <p className="text-white/70">Join the Avant movement</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium block">
                      FIRST NAME
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="Your first name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium block">
                      LAST NAME
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Your last name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium block">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="text-sm font-medium block">
                    PASSWORD
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition-colors"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    >
                      <EyeOff className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="confirmPassword" className="text-sm font-medium block">
                    CONFIRM PASSWORD
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-fuchsia-500 transition-colors"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white"
                    >
                      <EyeOff className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex items-center h-5 mt-1">
                    <input type="checkbox" id="terms" className="sr-only peer" />
                    <div className="w-5 h-5 border border-white/20 rounded flex items-center justify-center peer-checked:bg-fuchsia-500 peer-checked:border-fuchsia-500 transition-colors cursor-pointer">
                      <Check className="h-3 w-3 text-white hidden peer-checked:block" />
                    </div>
                  </div>
                  <label htmlFor="terms" className="text-sm text-white/70 cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-fuchsia-400 hover:text-fuchsia-300">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-fuchsia-400 hover:text-fuchsia-300">
                      Privacy Policy
                    </Link>
                  </label>
                </div>

                <div className="pt-2">
                  <Button className="w-full rounded-xl py-6 bg-white text-black hover:bg-fuchsia-500 hover:text-white transition-all duration-300">
                    CREATE ACCOUNT
                  </Button>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="border-t border-white/10 absolute w-full"></div>
                  <span className="bg-black/40 px-4 relative text-white/50 text-sm">OR</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/70"></div>
                    <span className="text-sm">Google</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-white/70"></div>
                    <span className="text-sm">Apple</span>
                  </button>
                </div>
              </form>

              <div className="text-center mt-8">
                <p className="text-white/70 text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="text-fuchsia-400 hover:text-fuchsia-300">
                    Login
                  </Link>
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "EARLY ACCESS", desc: "Be first to shop new drops" },
                { title: "EXCLUSIVE OFFERS", desc: "Members-only discounts" },
                { title: "DIGITAL WARDROBE", desc: "Track your collection" },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4 hover:border-fuchsia-500/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-black" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{benefit.title}</h3>
                      <p className="text-xs text-white/70">{benefit.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Simplified version */}
      <footer className="py-8 border-t border-white/10 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link
              href="/"
              className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-cyan-500"
            >
              AVANT
            </Link>

            <div className="flex gap-6 text-sm text-white/50">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Help Center
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
