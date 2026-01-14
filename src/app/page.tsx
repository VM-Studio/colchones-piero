"use client";

import Image from "next/image";
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
        <div className="max-w-7xl mx-auto px-0 h-20 flex items-center">
          <div className="flex items-center gap-2 pl-0">
            <Image
              src="/logocolchones.png"
              alt="Colchones Piero"
              width={60}
              height={60}
              className="object-contain"
              priority
            />
            <span className="text-2xl font-bold text-[#032858] tracking-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
              Colchones Piero
            </span>
          </div>
          
          <div className="ml-auto flex items-center gap-8 pr-6">
            <a href="#productos" className="text-gray-700 hover:text-[#027de1] transition-colors text-[15px] font-medium">
              Productos
            </a>
            <a href="#local" className="text-gray-700 hover:text-[#027de1] transition-colors text-[15px] font-medium">
              Nuestro Local
            </a>
            <a href="#contacto" className="text-gray-700 hover:text-[#027de1] transition-colors text-[15px] font-medium">
              Contacto
            </a>
            <a 
              href="#contacto" 
              className="bg-[#027de1] text-white px-6 py-2.5 rounded-lg text-[15px] font-semibold hover:bg-[#0268c1] transition-all duration-300"
            >
              Visitanos
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#032858]" style={{ fontFamily: 'var(--font-poppins)' }}>
                Encontrá el colchón ideal para tu descanso
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                En nuestro local te asesoramos personalmente para que elijas el colchón que mejor se adapta a tus necesidades.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <a 
                  href="#productos"
                  className="bg-[#027de1] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#0268c1] transition-all inline-flex items-center gap-2"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Ver Productos
                </a>
                <a 
                  href="#contacto"
                  className="border-2 border-[#027de1] text-[#027de1] px-8 py-3.5 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                  style={{ fontFamily: 'var(--font-poppins)' }}
                >
                  Contactanos
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 size={18} className="text-[#027de1]" />
                    <span className="font-semibold text-[#032858]" style={{ fontFamily: 'var(--font-poppins)' }}>15+</span>
                  </div>
                  <p className="text-sm text-gray-600">Años de experiencia</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Truck size={18} className="text-[#027de1]" />
                    <span className="font-semibold text-[#032858]" style={{ fontFamily: 'var(--font-poppins)' }}>Envío</span>
                  </div>
                  <p className="text-sm text-gray-600">A todo el país</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Shield size={18} className="text-[#027de1]" />
                    <span className="font-semibold text-[#032858]" style={{ fontFamily: 'var(--font-poppins)' }}>Garantía</span>
                  </div>
                  <p className="text-sm text-gray-600">De fábrica</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden">
                <Image
                  src="/colchon.png"
                  alt="Colchones de calidad"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full bg-[#027de1] flex items-center justify-center text-white font-bold">P</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                      <Star size={14} className="fill-yellow-400 text-yellow-400" />
                    </div>
                    <p className="text-sm font-semibold text-gray-800">+200 clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-[#027de1] font-semibold text-sm uppercase tracking-wider">Nuestra Colección</span>
            </div>
            <h2 className="text-5xl font-bold text-[#032858] mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
              Nuestros Productos
            </h2>
            <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-outfit)' }}>
              Descubre nuestra selección de colchones de alta calidad
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {productos.map((producto, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#027de1]/30 hover:-translate-y-2"
              >
                <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-center">
                      <div className="text-5xl mb-3">🛏️</div>
                      <p className="text-sm font-medium">Imagen de producto</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-[#027de1] text-white px-3 py-1 rounded-full text-xs font-bold">
                    NUEVO
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#032858] mb-2 group-hover:text-[#027de1] transition-colors" style={{ fontFamily: 'var(--font-poppins)' }}>
                    {producto.nombre}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                    {producto.descripcion}
                  </p>
                  <button className="text-[#027de1] text-sm font-bold hover:text-[#0268c1] transition-colors flex items-center gap-2 group-hover:gap-3 transition-all">
                    Ver detalles 
                    <span className="text-lg">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Section */}
      <section id="local" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#032858] mb-4 leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
                Vení a conocer nuestro local
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                En nuestro showroom vas a poder probar los colchones y recibir asesoramiento personalizado para elegir el que mejor se adapte a vos.
              </p>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin size={22} className="text-[#027de1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#032858] mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>Dirección</h4>
                    <p className="text-gray-600" style={{ fontFamily: 'var(--font-outfit)' }}>Av. Principal 1234, Ciudad</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock size={22} className="text-[#027de1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#032858] mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>Horarios</h4>
                    <p className="text-gray-600" style={{ fontFamily: 'var(--font-outfit)' }}>Lunes a Viernes: 9:00 - 19:00</p>
                    <p className="text-gray-600" style={{ fontFamily: 'var(--font-outfit)' }}>Sábados: 9:00 - 13:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                    <Phone size={22} className="text-[#027de1]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#032858] mb-1" style={{ fontFamily: 'var(--font-poppins)' }}>Teléfono</h4>
                    <p className="text-gray-600" style={{ fontFamily: 'var(--font-outfit)' }}>+54 11 1234-5678</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square relative group">
              <Image
                src={localImages[currentImage]}
                alt="Nuestro local"
                fill
                className="object-cover"
              />
              
              {/* Navigation buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} className="text-[#032858]" />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100"
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={24} className="text-[#032858]" />
              </button>

              {/* Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {localImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImage
                        ? "bg-white w-8"
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
      <section id="contacto" className="py-20 px-6 bg-[#027de1]">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
            ¿Tenés consultas?
          </h2>
          <p className="text-xl mb-8 text-white/90" style={{ fontFamily: 'var(--font-outfit)' }}>
            Escribinos o llamanos, estamos para ayudarte
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:+541112345678"
              className="bg-white text-[#027de1] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-50 transition-all flex items-center gap-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <Phone size={20} />
              11 1234-5678
            </a>
            <a
              href="https://wa.me/541112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-3.5 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center gap-2"
              style={{ fontFamily: 'var(--font-poppins)' }}
            >
              <Mail size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#032858] text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/logocolchones.png"
                  alt="Colchones Piero"
                  width={40}
                  height={40}
                  className="object-contain brightness-0 invert"
                />
                <span className="text-lg font-bold" style={{ fontFamily: 'var(--font-poppins)' }}>Colchones Piero</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-outfit)' }}>
                Más de 15 años brindando calidad y confort en colchones.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>Enlaces</h4>
              <ul className="space-y-2 text-sm text-white/70" style={{ fontFamily: 'var(--font-outfit)' }}>
                <li><a href="#productos" className="hover:text-white transition-colors">Productos</a></li>
                <li><a href="#local" className="hover:text-white transition-colors">Nuestro Local</a></li>
                <li><a href="#contacto" className="hover:text-white transition-colors">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>Contacto</h4>
              <ul className="space-y-2 text-sm text-white/70" style={{ fontFamily: 'var(--font-outfit)' }}>
                <li>Av. Principal 1234, Ciudad</li>
                <li>+54 11 1234-5678</li>
                <li>Lun a Vie: 9-19hs | Sáb: 9-13hs</li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 text-center text-sm text-white/50" style={{ fontFamily: 'var(--font-outfit)' }}>
            <p>© 2026 Colchones Piero. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

