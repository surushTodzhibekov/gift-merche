import { useLocation, Link } from "wouter";
import { 
  Search, 
  User, 
  ShoppingBag, 
  Menu, 
  CheckCircle, 
  Clock, 
  Zap, 
  MessageCircle,
  ArrowRight,
  Instagram,
  Facebook,
  Twitter
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

import heroImage from "@assets/generated_images/two_happy_women_hugging_in_winter_clothes_on_purple_gradient.png";
import bagsImage from "@assets/generated_images/black_and_white_tote_bags_mockup.png";
import mugsImage from "@assets/generated_images/two_white_mugs_product_shot.png";
import giftboxImage from "@assets/generated_images/open_corporate_gift_box_with_items.png";
import sweatersImage from "@assets/generated_images/two_white_sweatshirts_on_hangers.png";
import doodlesImage from "@assets/generated_images/hand_drawn_lightbulb_and_rocket_doodles.png";

const ASSETS = {
  hero: heroImage,
  bags: bagsImage,
  mugs: mugsImage,
  giftbox: giftboxImage,
  sweaters: sweatersImage,
  doodles: doodlesImage
};

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Logo */}
            <div className="text-2xl font-bold tracking-widest font-heading text-slate-900 uppercase cursor-pointer">
              Gifts & Merch
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
              <Input 
                className="w-full bg-slate-100 border-none rounded-full pl-10 pr-4 h-10 focus-visible:ring-brand-purple shadow-none" 
                placeholder="Search..." 
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex bg-brand-green hover:bg-emerald-600 text-white rounded-full px-6 font-medium shadow-lg shadow-emerald-200 border-none cursor-pointer">
                +38 044 123 45 67
              </Button>
              <button className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
                <User className="w-6 h-6 text-slate-600" />
              </button>
              <div className="relative">
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
                  <ShoppingBag className="w-6 h-6 text-slate-600" />
                </button>
                <span className="absolute top-1 right-0 bg-brand-green text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  0
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-between mt-4 py-2 border-t border-slate-100 text-sm font-medium text-slate-600 overflow-x-auto">
            <Link href="/sets" className="whitespace-nowrap hover:text-brand-purple transition-colors px-2 cursor-pointer">Sets</Link>
            <Link href="/all" className="bg-slate-900 text-white px-4 py-1 rounded-full whitespace-nowrap hover:bg-slate-800 transition-colors cursor-pointer">All items</Link>
            <Link href="/textiles" className="whitespace-nowrap hover:text-brand-purple transition-colors px-2 cursor-pointer">Textiles</Link>
            <Link href="/production" className="whitespace-nowrap hover:text-brand-purple transition-colors px-2 cursor-pointer">Production</Link>
            <Link href="/info" className="whitespace-nowrap hover:text-brand-purple transition-colors px-2 cursor-pointer">Information</Link>
            <Link href="/sale" className="whitespace-nowrap text-brand-purple font-bold px-2 cursor-pointer">SHOPPERS DISCOUNT -25%</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-purple-200 via-purple-100 to-blue-50 pt-16 pb-32 overflow-hidden rounded-b-[50px]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div className="space-y-8 z-20">
            <h1 className="text-4xl md:text-6xl font-black font-heading uppercase leading-tight text-slate-900">
              Fresh breath in <br />
              <span className="text-slate-800">corporate life</span>
            </h1>
            <p className="text-slate-600 max-w-md text-lg leading-relaxed">
              We manufacture high-quality merch for those who want to show their individuality and team spirit.
            </p>
            
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 rounded-full bg-purple-200/50 flex items-center justify-center text-brand-purple backdrop-blur-sm">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide">High quality ONLY</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 rounded-full bg-purple-200/50 flex items-center justify-center text-brand-purple backdrop-blur-sm">
                  <Clock className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide">Manager support 24/7</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="w-16 h-16 rounded-full bg-purple-200/50 flex items-center justify-center text-brand-purple backdrop-blur-sm">
                  <Zap className="w-8 h-8" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wide">Order in TURBO-mode</span>
              </div>
            </div>
          </div>
          
          <div className="relative z-10">
            {/* Image */}
            <div className="relative transform md:translate-x-10 md:scale-110">
              <img 
                src={ASSETS.hero} 
                alt="Happy corporate life" 
                className="rounded-3xl object-cover h-[500px] w-full shadow-2xl mask-image-gradient"
              />
            </div>
            {/* Decorative blurred circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-300/30 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
        
        {/* Wavy bottom separator using SVG */}
        <div className="absolute bottom-0 left-0 w-full leading-none text-white translate-y-1">
           <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
             <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="currentColor"></path>
           </svg>
        </div>
      </section>

      {/* POPULAR SECTION */}
      <section className="py-20 container mx-auto px-4 relative">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold font-heading flex items-center gap-2">
            Most Popular <span className="text-brand-green text-xl">★</span>
          </h2>
          <Link href="/all" className="text-sm text-slate-500 hover:text-brand-purple flex items-center gap-1 cursor-pointer">
            See all <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
          {/* Large Card */}
          <div className="md:col-span-2 bg-slate-50 rounded-3xl p-8 flex items-center justify-center relative group overflow-hidden cursor-pointer">
            <img 
              src={ASSETS.bags} 
              alt="Tote Bag" 
              className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
            />
            <div className="absolute bottom-6 left-6">
              <h3 className="text-xl font-bold">Shoppers</h3>
              <p className="text-slate-400 text-sm">Cotton Tote Bag Mock-up</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-6">
            {/* Top Right */}
            <div className="bg-slate-50 rounded-3xl p-6 flex flex-col items-center justify-center relative group cursor-pointer">
              <div className="absolute top-4 right-4 bg-brand-green text-white text-xs font-bold px-2 py-1 rounded-full z-10">
                275 UAH
              </div>
               <img 
                src={ASSETS.mugs} 
                alt="Mugs" 
                className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform mix-blend-multiply"
              />
              <h3 className="font-bold">Mugs</h3>
            </div>

            {/* Bottom Right Split */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-3xl p-4 flex flex-col items-center justify-center group cursor-pointer">
                 <div className="h-20 w-full flex items-center justify-center mb-2">
                   <div className="w-12 h-16 bg-blue-600 rounded-lg shadow-lg group-hover:scale-110 transition-transform"></div>
                 </div>
                <h3 className="text-sm font-bold">Thermos</h3>
              </div>
              <div className="bg-slate-50 rounded-3xl p-4 flex flex-col items-center justify-center group cursor-pointer">
                 <div className="h-20 w-full flex items-center justify-center mb-2">
                    <div className="w-16 h-16 bg-slate-800 rounded-lg shadow-lg group-hover:scale-110 transition-transform"></div>
                 </div>
                <h3 className="text-sm font-bold">T-Shirts</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Chat Button */}
        <div className="absolute right-4 top-20 animate-bounce z-30">
          <div className="bg-brand-green p-4 rounded-full shadow-lg shadow-emerald-200 cursor-pointer hover:bg-emerald-600 transition-colors">
            <MessageCircle className="text-white w-6 h-6" />
          </div>
        </div>
      </section>

      {/* CREATIVE SECTION */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <h2 className="text-5xl font-black tracking-tighter select-none">
              <span className="text-pink-400">C</span>
              <span className="text-purple-400">R</span>
              <span className="text-blue-400">E</span>
              <span className="text-green-400">A</span>
              <span className="text-yellow-400">T</span>
              <span className="text-orange-400">I</span>
              <span className="text-red-400">V</span>
              <span className="text-indigo-400">E</span>
            </h2>
            <h3 className="text-3xl font-bold font-heading leading-tight">
              Want to surprise your colleagues/partners with unusual gifts?
            </h3>
            <p className="text-slate-500">
              Choose ready-made gift sets or decide on the criteria by which we will assemble a box for YOU.
            </p>
            
            <div className="flex gap-4">
              <Button className="bg-slate-900 text-white rounded-full px-8 py-6 hover:bg-slate-800 cursor-pointer shadow-xl">
                Go to sets
              </Button>
              <Button variant="outline" className="rounded-full px-8 py-6 border-slate-200 hover:bg-slate-50 cursor-pointer">
                Open constructor
              </Button>
            </div>
          </div>

          <div className="relative h-[500px] flex items-center justify-center">
            <div className="bg-purple-200 absolute inset-10 rounded-[40px] rotate-6 scale-90 -z-10 opacity-50"></div>
            <div className="bg-purple-100 absolute inset-10 rounded-[40px] -rotate-3 scale-95 -z-10 opacity-50"></div>
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={ASSETS.giftbox} 
                alt="Creative Gift Box" 
                className="w-full max-w-md shadow-2xl rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOM CLOTHING SECTION */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 rounded-3xl p-8 relative overflow-hidden group">
             <img 
                src={ASSETS.sweaters} 
                alt="Sweater Mockups" 
                className="w-full rounded-lg shadow-lg mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 text-center rotate-[-5deg] opacity-80">
                <h4 className="text-xl font-black text-slate-800 uppercase">Your<br/>Design<br/>Can Be<br/>Here</h4>
              </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading leading-snug">
              Besides finished products of high quality, we can produce clothes, accessories, sweets and other things for you upon request.
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Thanks to our production facilities, we can produce large batches in a short time, with strictly fixed deadlines.
            </p>
            
            <div className="flex gap-4 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-brand-purple hover:bg-purple-100 cursor-pointer transition-all hover:scale-110 group shadow-sm">
                   <img src={`https://placehold.co/40x40/e9d5ff/6b21a8?text=${i}`} className="rounded-full w-10 h-10 object-cover opacity-80 group-hover:opacity-100" alt="icon" />
                </div>
              ))}
              <div className="w-16 h-16 flex items-center justify-center text-slate-400 border border-slate-200 rounded-full hover:bg-slate-50 cursor-pointer transition-colors">
                <ArrowRight className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IDEAS FORM SECTION */}
      <section className="py-24 relative bg-purple-50 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full leading-none text-white rotate-180 translate-y-1">
           <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
             <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="currentColor"></path>
           </svg>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 relative z-10 pt-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-heading">
              Do you have a UNIQUE idea <br />
              for merch development?
            </h2>
            <p className="text-slate-500">
              Briefly describe your idea in the contact form, and our manager will contact you within 1 hour.
            </p>
            
            <form className="space-y-8 max-w-md" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-2 gap-8">
                 <Input placeholder="Your name" className="bg-transparent border-b border-slate-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-brand-purple placeholder:text-slate-400 shadow-none" />
                 <Input placeholder="Your phone/social" className="bg-transparent border-b border-slate-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-brand-purple placeholder:text-slate-400 shadow-none" />
               </div>
               <div className="flex gap-8 items-end">
                  <Input placeholder="Your email" className="bg-transparent border-b border-slate-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-brand-purple placeholder:text-slate-400 flex-1 shadow-none" />
                  <Button type="submit" className="bg-brand-green hover:bg-emerald-600 text-white rounded-full px-10 py-2 h-auto shadow-lg shadow-emerald-200 font-bold cursor-pointer">
                    Send
                  </Button>
               </div>
            </form>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
              {/* Doodles Image */}
              <img 
                src={ASSETS.doodles} 
                alt="Ideas Doodle" 
                className="max-w-xs mix-blend-multiply opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full leading-none text-white">
           <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-16 md:h-24">
             <path d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z" fill="currentColor"></path>
           </svg>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 container mx-auto px-4">
        <h3 className="text-xl font-bold font-heading mb-8">We work with</h3>
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
          <div className="text-3xl font-black italic">NIKE</div>
          <div className="text-3xl font-serif">Coca-Cola</div>
          <div className="text-xl font-bold uppercase tracking-widest border-2 border-black px-2">ATLAS WEEKEND</div>
          <div className="text-xl font-mono border-2 border-current p-1">MEIZU</div>
          <div className="text-2xl font-black font-hand rotate-[-5deg]">CRAZYBOX</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-100">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-widest font-heading text-slate-900 uppercase">
              Gifts & Merch
            </div>
            <p className="text-xs text-slate-500 max-w-xs">
              Fresh breath in corporate life and fresh corporate merch solutions.
            </p>
            <div className="flex gap-4">
              <div className="bg-white p-2 rounded-full shadow-sm hover:text-brand-purple cursor-pointer transition-colors">
                <Facebook className="w-4 h-4" />
              </div>
              <div className="bg-white p-2 rounded-full shadow-sm hover:text-brand-purple cursor-pointer transition-colors">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="bg-white p-2 rounded-full shadow-sm hover:text-brand-purple cursor-pointer transition-colors">
                <Twitter className="w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Categories</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-purple transition-colors">Sets</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">All items</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Textiles</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Production</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Information</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-purple transition-colors">About us</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-brand-purple transition-colors">Contacts</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Connect with manager</h4>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs text-slate-400">Type number...</span>
              <div className="ml-auto w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 cursor-pointer hover:bg-brand-green hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4 font-medium">
              +38 044 123 45 67 <br/>
              sales@giftsmerch.com
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 text-center border-t border-slate-200 pt-8 text-xs text-slate-400">
          © 2025 Gifts & Merch. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
