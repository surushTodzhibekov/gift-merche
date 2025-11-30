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
  Twitter,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { useState } from "react";

// import heroImage from "@/assets/images/two_happy_women_hugging_in_winter_clothes_on_purple_gradient.png";
import heroImage from "@/assets/images/fashion-portrait.png";
import bagsImage from "@/assets/images/black_and_white_tote_bags_mockup.png";
import mugsImage from "@/assets/images/two_white_mugs_product_shot.png";
import giftboxImage from "@/assets/images/open_corporate_gift_box_with_items.png";
import sweatersImage from "@/assets/images/two_white_sweatshirts_on_hangers.png";
import doodlesImage from "@/assets/images/hand_drawn_lightbulb_and_rocket_doodles.png";

const ASSETS = {
  hero: heroImage,
  bags: bagsImage,
  mugs: mugsImage,
  giftbox: giftboxImage,
  sweaters: sweatersImage,
  doodles: doodlesImage,
};

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800">
      {/* MAIN WRAPPER FOR GRADIENT BACKGROUND (Header + Hero) */}
      <div
        className="relative rounded-b-[40px] overflow-hidden pb-20"
        style={{
          background:
            "linear-gradient(42.14deg, #9796F0 -17.31%, #FBC7D4 106.72%)",
        }}
      >
        {/* HEADER */}
        <header className="relative z-50 pt-6 ">
          <div className="flex items-center justify-between gap-8 mb-8 px-4 md:px-12">
            {/* Logo */}
            <div className="text-2xl md:text-3xl font-black tracking-widest font-heading text-slate-900 uppercase cursor-pointer">
              GIFTS & MERCH
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl relative">
              <Input
                className="w-full bg-transparent border-2 border-slate-800 rounded-full pl-12 pr-4 h-12 placeholder:text-slate-400 focus-visible:ring-0 focus-visible:border-slate-900 font-medium"
                placeholder="Поиск"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-6">
              <Button className="hidden lg:flex bg-[#00C48C] hover:bg-[#00A876] text-white rounded-full px-8 h-12 font-bold shadow-lg shadow-emerald-200/50 border-none cursor-pointer text-base">
                +380 630 130 103
              </Button>
              <button className="p-2 hover:bg-white/20 rounded-full transition-colors cursor-pointer">
                <User className="w-7 h-7 text-slate-800" />
              </button>
              <div className="hidden md:flex items-center gap-1 font-medium text-slate-600 text-sm cursor-pointer hover:text-slate-900">
                <span className="font-bold text-slate-900">RU</span>
                <span>/</span>
                <span>ENG</span>
              </div>
            </div>
          </div>

          {/* Navigation Row */}
          <div
            className="flex flex-col md:flex-row items-center justify-between w-full pt-4 md:pt-0 px-4 md:px-8"
            style={{ background: "rgba(250, 251, 253, 0.44)" }}
          >
            {/* Left Nav Items */}
            <nav className="flex items-center gap-0 overflow-x-auto w-full md:w-auto">
              <Link
                href="/sets"
                className="px-6 py-3 font-semibold text-lg text-[--brand-text] whitespace-nowrap"
              >
                Наборы
              </Link>
              <div className="relative">
                <Link
                  href="/all"
                  className="px-8 py-8 bg-slate-900 text-white font-semibold text-sm uppercase tracking-wide rounded-[6px] whitespace-nowrap block shadow-lg z-10"
                >
                  Все товары
                </Link>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-black rounded-b-full"></div>
              </div>
              <Link
                href="/tailoring"
                className="px-6 py-3 font-semibold text-lg text-[--brand-text] whitespace-nowrap"
              >
                Пошив
              </Link>
              <Link
                href="/production"
                className="px-6 py-3 font-semibold text-lg text-[--brand-text] whitespace-nowrap"
              >
                Производство
              </Link>
              <Link
                href="/info"
                className="px-6 py-3 font-semibold text-lg text-[--brand-text] whitespace-nowrap"
              >
                Информация
              </Link>
            </nav>

            {/* Right Promo */}
            <div className="hidden lg:flex items-center gap-3 ml-auto">
              <span className="promo-text text-slate-800">
                ШОППЕРЫ СО СКИДКОЙ - 25%
              </span>
              <div className="relative w-12 h-12 rotate-12 transform hover:scale-110 transition-transform">
                <img
                  src={ASSETS.bags}
                  className="w-full h-full object-contain drop-shadow-md"
                  alt="Bag icon"
                />
              </div>
            </div>
          </div>
        </header>

        {/* HERO CONTENT */}
        <div className="container mx-auto px-4 md:px-12 pt-8 md:pt-12 pb-0">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 max-w-2xl z-20">
              <h2 className="font-black font-heading uppercase leading-[1.1] text-slate-800 tracking-tight drop-shadow-sm">
                СВЕЖЕЕ ДЫХАНИЕ В <br />
                КОРПОРАТИВНОЙ ЖИЗНИ
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed max-w-lg font-medium">
                Ми вдосконалили процес замовлення продукції для того, щоб Ви і
                Ваша компанія сконцентрувались на основних задачах і досягали
                поставлених цілей.
              </p>

              {/* Feature Circles */}
              <div className="flex flex-wrap gap-8 pt-8">
                <div className="flex flex-col items-center text-center gap-3 w-32">
                  <div className="w-20 h-20 rounded-full bg-purple-200/80 flex items-center justify-center text-purple-600 shadow-inner border border-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
                    <CheckCircle className="w-8 h-8 relative z-10 stroke-[1.5]" />
                  </div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider leading-tight text-slate-800">
                    Высокое <br /> качество ONLY
                  </span>
                </div>

                <div className="flex flex-col items-center text-center gap-3 w-32">
                  <div className="w-20 h-20 rounded-full bg-purple-200/80 flex items-center justify-center text-purple-600 shadow-inner border border-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
                    <Clock className="w-8 h-8 relative z-10 stroke-[1.5]" />
                  </div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider leading-tight text-slate-800">
                    Поддержка <br /> менеджера 24/7
                  </span>
                </div>

                <div className="flex flex-col items-center text-center gap-3 w-32">
                  <div className="w-20 h-20 rounded-full bg-purple-200/80 flex items-center justify-center text-purple-600 shadow-inner border border-purple-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
                    <Zap className="w-8 h-8 relative z-10 stroke-[1.5]" />
                  </div>
                  <span className="text-[0.7rem] font-bold uppercase tracking-wider leading-tight text-slate-800">
                    Выполнение заказа <br /> в TURBO-режиме
                  </span>
                </div>
              </div>
            </div>

            {/* Hero Image - Positioned to look like cutout */}
            <div className="relative h-full min-h-[500px] flex items-end justify-center md:justify-end">
              {/* We use the generated image but try to blend it. 
                   Since it's a rectangle, we'll use a mask to soften the bottom/sides 
                   or just rely on the composition.
               */}
              <img
                src={ASSETS.hero}
                alt="Corporate Life"
                className="relative z-10 max-w-full md:max-w-[120%] w-auto h-[600px] object-cover object-center mask-image-gradient-b"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 80%, transparent 100%)",
                }}
              />
            </div>
          </div>
        </div>

        {/* Wavy Bottom Separator */}
        <div className="absolute bottom-0 left-0 w-full leading-none text-white z-20">
          <svg
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            className="w-full h-20 md:h-32"
          >
            <path
              d="M0,60 Q360,20 720,60 T1440,60 L1440,120 L0,120 Z"
              fill="white"
            ></path>
          </svg>
        </div>
      </div>

      {/* POPULAR SECTION */}
      <section className="py-20 container mx-auto px-4 relative">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-bold font-heading flex items-center gap-2">
            Самое популярное <span className="text-brand-green text-xl">★</span>
          </h2>
          <div className="text-sm text-slate-400">
            Товары, которые чаще всего заказывают наши клиенты
          </div>
          <Link
            href="/all"
            className="text-sm text-slate-500 hover:text-brand-purple flex items-center gap-1 cursor-pointer ml-auto font-semibold"
          >
            Все товары <ArrowRight className="w-4 h-4" />
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
              <h3 className="text-xl font-bold">Шопперы</h3>
              <p className="text-slate-400 text-sm">Cotton Tote Bag Mock-up</p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid grid-rows-2 gap-6">
            {/* Top Right */}
            <div className="bg-slate-50 rounded-3xl p-6 flex flex-col items-center justify-center relative group cursor-pointer">
              <div className="absolute top-4 right-4 flex items-center gap-2">
                <div className="bg-white rounded-full p-1 shadow-sm">
                  <span className="text-[10px] font-bold px-2">
                    Популярность
                  </span>
                </div>
                <div className="bg-brand-green text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg shadow-emerald-200">
                  <ShoppingBag className="w-4 h-4" />
                </div>
              </div>
              <img
                src={ASSETS.mugs}
                alt="Mugs"
                className="h-32 object-contain mb-4 group-hover:scale-105 transition-transform mix-blend-multiply"
              />
              <h3 className="font-bold self-start px-4">Чашки</h3>
              <div className="self-start px-4 text-xs font-bold text-slate-900 mt-1">
                275 грн
              </div>
            </div>

            {/* Bottom Right Split */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-3xl p-4 flex flex-col items-center justify-center group cursor-pointer">
                <div className="h-20 w-full flex items-center justify-center mb-2">
                  <div className="w-10 h-14 bg-blue-600 rounded-sm shadow-lg group-hover:scale-110 transition-transform"></div>
                </div>
                <h3 className="text-sm font-bold">Термосы</h3>
              </div>
              <div className="bg-slate-50 rounded-3xl p-4 flex flex-col items-center justify-center group cursor-pointer">
                <div className="h-20 w-full flex items-center justify-center mb-2">
                  <div className="w-14 h-14 bg-slate-800 rounded-sm shadow-lg group-hover:scale-110 transition-transform"></div>
                </div>
                <h3 className="text-sm font-bold">Футболки</h3>
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
            <h2 className="text-5xl font-black tracking-tighter select-none flex gap-1">
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
              Хотите удивить ваших коллег/партнеров необычными подарками?
            </h3>
            <p className="text-slate-500">
              Выберите готовые подарочные наборы или задайте критерии по которым
              мы соберем для ВАС уникальный бокс.
            </p>

            <div className="flex gap-4">
              <Button className="bg-slate-900 text-white rounded-full px-8 py-6 hover:bg-slate-800 cursor-pointer shadow-xl font-bold">
                Перейти к наборам
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 border-slate-200 hover:bg-slate-50 cursor-pointer font-bold text-slate-500"
              >
                Собрать свой
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
              <h4 className="text-xl font-black text-slate-800 uppercase">
                YOUR
                <br />
                DESIGN
                <br />
                CAN BE
                <br />
                HERE
              </h4>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold font-heading leading-snug">
              Помимо готовой продукции высокого качества, мы можем для Вас
              произвести одежду, аксессуары, вкусности и другое под заказ.
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Благодаря нашему производству мы изготавливаем большие партии в
              короткие сроки, а так же у Вас всегда есть возможность
              кастомизировать изделия.
            </p>

            <div className="flex gap-4 pt-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center text-brand-purple hover:bg-purple-100 cursor-pointer transition-all hover:scale-110 group shadow-sm"
                >
                  <img
                    src={`https://placehold.co/40x40/e9d5ff/6b21a8?text=${i}`}
                    className="rounded-full w-10 h-10 object-cover opacity-80 group-hover:opacity-100"
                    alt="icon"
                  />
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
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24"
          >
            <path
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 relative z-10 pt-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-heading">
              У вас своя УНИКАЛЬНАЯ идея <br />
              по разработке мерча?
            </h2>
            <p className="text-slate-500">
              Кратко опишите вашу идею в форму ниже, и наш менеджер свяжется с
              Вами в течении 1 часа
            </p>

            <form
              className="space-y-8 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-2 gap-8">
                <Input
                  placeholder="Ваше имя"
                  className="bg-transparent border-b border-slate-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-brand-purple placeholder:text-slate-400 shadow-none"
                />
                <Input
                  placeholder="Ваш телефон/соц.сеть"
                  className="bg-transparent border-b border-slate-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-brand-purple placeholder:text-slate-400 shadow-none"
                />
              </div>
              <div className="flex gap-8 items-end">
                <Input
                  placeholder="Ваш e-mail"
                  className="bg-transparent border-b border-slate-300 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-brand-purple placeholder:text-slate-400 flex-1 shadow-none"
                />
                <Button
                  type="submit"
                  className="bg-brand-green hover:bg-emerald-600 text-white rounded-full px-10 py-2 h-auto shadow-lg shadow-emerald-200 font-bold cursor-pointer"
                >
                  Заказать
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
          <svg
            viewBox="0 0 1440 100"
            preserveAspectRatio="none"
            className="w-full h-16 md:h-24"
          >
            <path
              d="M0,0 C480,100 960,100 1440,0 L1440,100 L0,100 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="py-16 container mx-auto px-4">
        <h3 className="text-xl font-bold font-heading mb-8">
          С нами сотрудничают
        </h3>
        <div className="flex flex-wrap justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 cursor-default">
          <div className="text-3xl font-black italic">NIKE</div>
          <div className="text-3xl font-serif">Coca-Cola</div>
          <div className="text-xl font-bold uppercase tracking-widest border-2 border-black px-2">
            ATLAS WEEKEND
          </div>
          <div className="text-xl font-mono border-2 border-current p-1">
            MEIZU
          </div>
          <div className="text-2xl font-black font-hand rotate-[-5deg]">
            CRAZYBOX
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-100">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="text-xl font-bold tracking-widest font-heading text-slate-900 uppercase">
              GIFTS & MERCH
            </div>
            <p className="text-xs text-slate-500 max-w-xs">
              Свежее дыхание в корпоративной жизни и свежие решения для
              корпоративного мерча.
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
            <h4 className="font-bold mb-4 text-sm">Категории</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  Наборы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  Все товары
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  Пошив
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  Производство
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Информация</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  О нас
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brand-purple transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-sm">Связаться с менеджером</h4>
            <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs text-slate-400">Введите номер...</span>
              <div className="ml-auto w-6 h-6 bg-slate-200 rounded-full flex items-center justify-center text-slate-500 cursor-pointer hover:bg-brand-green hover:text-white transition-colors">
                <ArrowRight className="w-3 h-3" />
              </div>
            </div>
            <p className="text-xs text-slate-400 mt-4 font-medium">
              +380 630 130 103 <br />
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
