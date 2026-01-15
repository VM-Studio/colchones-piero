"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Filter } from "lucide-react";
import { useState } from "react";

export default function ProductosPage() {
  const [filtroActivo, setFiltroActivo] = useState("todos");

  const categorias = [
    { id: "todos", nombre: "Todos" },
    { id: "matrimonial", nombre: "Matrimonial" },
    { id: "individual", nombre: "Individual" },
    { id: "king", nombre: "King/Queen" },
    { id: "sommier", nombre: "Sommier" },
  ];

  const productos = [
    {
      id: 1,
      nombre: "Sommier Matrimonial Classic",
      categoria: "matrimonial",
      descripcion: "2 plazas - Resortes bonnell de alta densidad",
      medidas: "140 x 190 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      id: 2,
      nombre: "Colchón Ortopédico Premium",
      categoria: "individual",
      descripcion: "1 plaza - Espuma HR de 30kg/m³",
      medidas: "80 x 190 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      id: 3,
      nombre: "King Size Premium",
      categoria: "king",
      descripcion: "2½ plazas - Pillow top y memoria viscoelástica",
      medidas: "180 x 200 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      id: 4,
      nombre: "Colchón Individual Pocket",
      categoria: "individual",
      descripcion: "1 plaza - Resortes ensacados independientes",
      medidas: "90 x 190 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      id: 5,
      nombre: "Sommier Box Spring Queen",
      categoria: "sommier",
      descripcion: "2 plazas - Sistema de doble resorte",
      medidas: "160 x 200 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      id: 6,
      nombre: "Colchón Memory Foam Deluxe",
      categoria: "matrimonial",
      descripcion: "2 plazas - Espuma viscoelástica adaptable",
      medidas: "140 x 190 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      id: 7,
      nombre: "Colchón Ortopédico Plus",
      categoria: "individual",
      descripcion: "1 plaza - Refuerzo lumbar especial",
      medidas: "80 x 190 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
    {
      id: 8,
      nombre: "King Size Luxury Edition",
      categoria: "king",
      descripcion: "2½ plazas - Tecnología de gel refrigerante",
      medidas: "200 x 200 cm",
      precio: "Consultá precio",
      imagen: "/placeholder-colchon.jpg",
    },
  ];

  const productosFiltrados =
    filtroActivo === "todos"
      ? productos
      : productos.filter((p) => p.categoria === filtroActivo);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center">
          <Link href="/" className="flex items-center gap-2 pl-0">
            <Image
              src="/logocolchones.png"
              alt="Colchones Piero"
              width={40}
              height={40}
              className="object-contain sm:w-[60px] sm:h-[60px]"
              priority
            />
            <span
              className="text-lg sm:text-2xl font-bold text-[#032858] tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Pietro
            </span>
          </Link>

          <div className="ml-auto flex items-center gap-3 sm:gap-6 md:gap-8 pr-0 sm:pr-6">
            <Link
              href="/#productos"
              className="hidden sm:block text-gray-700 hover:text-[#027de1] transition-colors text-sm sm:text-[15px] font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/#contacto"
              className="hidden sm:block text-gray-700 hover:text-[#027de1] transition-colors text-sm sm:text-[15px] font-medium"
            >
              Contacto
            </Link>
            <Link
              href="/#contacto"
              className="bg-[#027de1] text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-[15px] font-semibold hover:bg-[#0268c1] transition-all duration-300"
            >
              Visitanos
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Products */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#027de1] transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft size={18} className="sm:w-5 sm:h-5" />
            <span className="font-medium">Volver al inicio</span>
          </Link>

          <div className="mb-6 sm:mb-8">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#032858] mb-3 sm:mb-4"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Todos Nuestros Productos
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-600"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              Explorá nuestra colección completa de colchones y sommiers
            </p>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600 text-sm sm:text-base">
              <Filter size={18} className="sm:w-5 sm:h-5" />
              <span className="font-medium">Filtrar por:</span>
            </div>
            {categorias.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFiltroActivo(cat.id)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-medium transition-all text-sm sm:text-base ${
                  filtroActivo === cat.id
                    ? "bg-[#027de1] text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#027de1] hover:text-[#027de1]"
                }`}
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                {cat.nombre}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4 sm:mb-6">
            <p className="text-gray-600 text-sm sm:text-base">
              Mostrando <span className="font-semibold text-[#032858]">{productosFiltrados.length}</span> productos
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {productosFiltrados.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-lg sm:rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 group"
              >
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-center">
                      <div className="text-5xl sm:text-6xl mb-2">🛏️</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 sm:p-5">
                  <h3
                    className="text-base sm:text-lg font-bold text-[#032858] mb-2 group-hover:text-[#027de1] transition-colors"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {producto.nombre}
                  </h3>
                  <p
                    className="text-gray-600 text-xs sm:text-sm mb-2"
                    style={{ fontFamily: "var(--font-outfit)" }}
                  >
                    {producto.descripcion}
                  </p>
                  <p className="text-gray-500 text-xs mb-3">
                    📏 {producto.medidas}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#027de1] font-semibold text-sm sm:text-base">
                      {producto.precio}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 bg-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#032858] mb-3 sm:mb-4"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            ¿No encontrás lo que buscás?
          </h2>
          <p
            className="text-base sm:text-lg text-gray-600 mb-5 sm:mb-6"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            Visitanos en nuestro local o contactanos por WhatsApp para más opciones
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href="/#local"
              className="bg-[#027de1] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-[#0268c1] transition-all text-sm sm:text-base"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Ver ubicación
            </Link>
            <Link
              href="/#contacto"
              className="bg-white text-[#027de1] border-2 border-[#027de1] px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all text-sm sm:text-base"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              Contactanos
            </Link>
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
                <span
                  className="text-base sm:text-lg font-bold"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Pietro
                </span>
              </div>
              <p
                className="text-white/70 text-xs sm:text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                Más de 15 años brindando calidad y confort en colchones.
              </p>
            </div>

            <div>
              <h4
                className="font-bold mb-3 sm:mb-4 text-sm sm:text-base"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Enlaces
              </h4>
              <ul
                className="space-y-2 text-xs sm:text-sm text-white/70"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <li>
                  <Link
                    href="/productos"
                    className="hover:text-white transition-colors"
                  >
                    Productos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#local"
                    className="hover:text-white transition-colors"
                  >
                    Nuestro Local
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contacto"
                    className="hover:text-white transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4
                className="font-bold mb-3 sm:mb-4 text-sm sm:text-base"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Contacto
              </h4>
              <ul
                className="space-y-2 text-xs sm:text-sm text-white/70"
                style={{ fontFamily: "var(--font-outfit)" }}
              >
                <li>Av. Principal 1234, Ciudad</li>
                <li>+54 11 1234-5678</li>
                <li>Lun a Vie: 9-19hs | Sáb: 9-13hs</li>
              </ul>
            </div>
          </div>

          <div
            className="pt-5 sm:pt-6 border-t border-white/10 text-center text-xs sm:text-sm text-white/50"
            style={{ fontFamily: "var(--font-outfit)" }}
          >
            <p>© 2026 Pietro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
