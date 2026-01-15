"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Clock, Mail, Star, CheckCircle2, Truck, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const localImages = ["/local1.png", "/local2.png"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % localImages.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + localImages.length) % localImages.length);
  };

  const productos = [
    {
      nombre: "Sommier Matrimonial",
      descripcion: "2 plazas - Resortes bonnell de alta densidad",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      nombre: "Colchón Ortopédico",
      descripcion: "1 plaza - Espuma HR de 30kg/m³",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      nombre: "King Size Premium",
      descripcion: "2½ plazas - Pillow top y memoria viscoelástica",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      nombre: "Individual Pocket",
      descripcion: "1 plaza - Resortes ensacados independientes",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logocolchones.png"
              alt="Pietro"
              width={50}
              height={50}
              className="object-contain w-10 h-10 sm:w-[60px] sm:h-[60px]"
              priority
            />
            <span className="text-lg sm:text-2xl font-bold text-[#032858] tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              Pietro
            </span>
          </div>
          
          <div className="ml-auto flex items-center gap-3 sm:gap-8">
            <a href="#productos" className="hidden md:block text-gray-700 hover:text-[#027de1] transition-colors text-[15px] font-medium">
              Productos
            </a>
            <a href="#contacto" className="hidden sm:block text-gray-700 hover:text-[#027de1] transition-colors text-sm sm:text-[15px] font-medium">
              Contacto
            </a>
            <a 
              href="#contacto" 
              className="bg-[#027de1] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-[15px] font-semibold hover:bg-[#0268c1] transition-all duration-300"
            >
              Visitanos
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-20 md:pb-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="text-left">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-[#032858]" style={{ fontFamily: 'var(--font-poppins)' }}>
                Encontrá el colchón ideal para tu descanso
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                En nuestro local te asesoramos personalmente para que elijas el colchón que mejor se adapta a tus necesidades.
              </p>
              
              <div className="flex flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
                <a 
                  href="#productos"
                  className="bg-[#027de1] text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-[#0268c1] transition-all inline-flex items-center gap-2 text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Ver Productos
                </a>
                <a 
                  href="#contacto"
                  className="border-2 border-[#027de1] text-[#027de1] px-6 sm:px-8 py-3 sm:py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all text-sm sm:text-base"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Contactanos
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-gray-200 bg-[#027de1]/5 p-4 sm:p-6 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={16} className="text-[#027de1] sm:w-[18px] sm:h-[18px]" />
                    <span className="font-semibold text-[#032858] text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>15+</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">Años de experiencia</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Truck size={16} className="text-[#027de1] sm:w-[18px] sm:h-[18px]" />
                    <span className="font-semibold text-[#032858] text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>Envío</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">A todo el país</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={16} className="text-[#027de1] sm:w-[18px] sm:h-[18px]" />
                    <span className="font-semibold text-[#032858] text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>Garantía</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600">De fábrica</p>
                </div>
              </div>
            </div>

            <div className="relative mt-8 md:mt-0">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full aspect-[4/3] object-cover rounded-xl sm:rounded-2xl"
              >
                <source src="/colchon.mp4" type="video/mp4" />
                Tu navegador no soporta el video.
              </video>
              <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#027de1] flex items-center justify-center text-white font-bold text-sm sm:text-base">P</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-0.5 sm:gap-1 mb-1">
                      <Star size={12} className="fill-yellow-400 text-yellow-400 sm:w-3.5 sm:h-3.5" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400 sm:w-3.5 sm:h-3.5" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400 sm:w-3.5 sm:h-3.5" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400 sm:w-3.5 sm:h-3.5" />
                      <Star size={12} className="fill-yellow-400 text-yellow-400 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-gray-800">+200 clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-16 sm:py-20 md:py-28 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-block mb-3 sm:mb-4">
              <span className="text-[#027de1] font-semibold text-xs sm:text-sm uppercase tracking-wider">Nuestra Colección</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#032858] mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Nuestros Productos
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#027de1]/30 hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-4xl sm:text-5xl mb-2 sm:mb-3">🛏️</div>
                      <p className="text-xs sm:text-sm font-medium px-2">Imagen de producto</p>
                    </div>
                  </div>
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-[#027de1] text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold">
                    NUEVO
                  </div>
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#032858] mb-2 group-hover:text-[#027de1] transition-colors" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                    {producto.descripcion}
                  </p>
                  <button className="text-[#027de1] text-xs sm:text-sm font-bold hover:text-[#0268c1] transition-all flex items-center gap-2">
                    Ver detalles 
                    <span className="text-base sm:text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <Link 
              href="/productos"
              className="inline-block bg-[#027de1] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#0268c1] transition-all text-sm sm:text-base"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section id="local" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#032858] mb-4 leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                Vení a conocer nuestro local
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                En nuestro showroom vas a poder probar los colchones y recibir asesoramiento personalizado para elegir el que mejor se adapte a vos.
              </p>

              <div className="space-y-4 sm:space-y-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-[#027de1] sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#032858] mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>Dirección</h4>
                    <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'var(--font-outfit)' }}>Av. Principal 1234, Ciudad</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#027de1] sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#032858] mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>Horarios</h4>
                    <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'var(--font-outfit)' }}>Lunes a Viernes: 9:00 - 19:00</p>
                    <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'var(--font-outfit)' }}>Sábados: 9:00 - 13:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-[#027de1] sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#032858] mb-1 text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>Teléfono</h4>
                    <p className="text-gray-600 text-sm sm:text-base" style={{ fontFamily: 'var(--font-outfit)' }}>+54 11 1234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg sm:rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square relative group mt-8 md:mt-0">
              <Image
                src={localImages[currentImage]}
                alt="Nuestro local"
                fill
                className="object-cover"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={20} className="text-[#032858] sm:w-6 sm:h-6" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1.5 sm:p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={20} className="text-[#032858] sm:w-6 sm:h-6" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {localImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-white w-6 sm:w-8"
                        : "bg-white/60 hover:bg-white/80"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-[#027de1] to-[#0268c1]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <div className="inline-block mb-2 sm:mb-3">
            <span className="text-white/60 text-xs sm:text-sm font-medium tracking-wider uppercase">
              Contacto
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light mb-3 sm:mb-4 tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
            ¿Tenés consultas?
          </h2>
          <p className="text-sm sm:text-base text-white/80 mb-6 sm:mb-8 font-light leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
            Estamos para ayudarte a encontrar el colchón perfecto
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 sm:mb-8">
            <a
              href="tel:+541112345678"
              className="bg-white text-[#027de1] px-5 sm:px-6 py-2.5 rounded-lg font-medium hover:bg-white/95 transition-all flex items-center justify-center gap-2 text-sm"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>11 1234-5678</span>
            </a>
            <a
              href="https://wa.me/541112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border border-white/30 px-5 sm:px-6 py-2.5 rounded-lg font-medium hover:bg-white/5 hover:border-white/50 transition-all flex items-center justify-center gap-2 text-sm"
              style={{ fontFamily: 'var(--font-outfit)' }}
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" />
              <span>WhatsApp</span>
            </a>
          </div>
          
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/60 text-xs font-light" style={{ fontFamily: 'var(--font-outfit)' }}>
              Lunes a Viernes: 9:00 - 19:00 · Sábados: 9:00 - 13:00
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#032858] text-white py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Image
                  src="/logocolchones.png"
                  alt="Pietro"
                  width={32}
                  height={32}
                  className="object-contain sm:w-10 sm:h-10"
                />
                <span className="text-base sm:text-lg font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>Pietro</span>
              </div>
              <p className="text-white/70 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                Más de 15 años brindando calidad y confort en colchones.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>Enlaces</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/70" style={{ fontFamily: 'var(--font-outfit)' }}>
                <li><a href="#productos" className="hover:text-white transition-colors">Productos</a></li>
                <li><a href="#local" className="hover:text-white transition-colors">Nuestro Local</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: 'var(--font-poppins)' }}>Contacto</h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white/70" style={{ fontFamily: 'var(--font-outfit)' }}>
                <li>Av. Principal 1234, Ciudad</li>
                <li>+54 11 1234-5678</li>
                <li>Lun a Vie: 9-19hs | Sáb: 9-13hs</li>
              </ul>
            </div>
          </div>

          <div className="pt-5 sm:pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-white/50" style={{ fontFamily: 'var(--font-outfit)' }}>
            <p>© 2026 Pietro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

