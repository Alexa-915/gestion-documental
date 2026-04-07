export default function Home() {
  return (
    <main>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-white/10 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center">

        <h1 className="font-bold text-lg">Alexa 💜</h1>

        <ul className="flex gap-6 text-sm font-medium">
          <li className="hover:text-pink-300 cursor-pointer">Inicio</li>
          <li className="hover:text-pink-300 cursor-pointer">Sobre mí</li>
          <li className="hover:text-pink-300 cursor-pointer">Habilidades</li>
          <li className="hover:text-pink-300 cursor-pointer">Proyectos</li>
          <li className="hover:text-pink-300 cursor-pointer">Contacto</li>
        </ul>

      </nav>

      {/* HERO */}
      <section className="relative h-[550px] mt-16 flex items-center justify-center">

        {/* Imagen de fondo */}
        <img
          src="/fondo.jpg"
          alt="fondo"
          className="absolute w-full h-full object-cover"
        />

        {/* Capa oscura para contraste */}
        <div className="absolute w-full h-full bg-black/60"></div>

        {/* Texto */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold">
            Alexa Galeano
          </h1>

          <p className="mt-4 text-lg">
            Ingeniera en formación 💻✨
          </p>
        </div>

      </section>

      {/* FOTO PERFIL */}
      <div className="flex justify-center -mt-20 relative z-10">
        <img
          src="/perfil.jpg"
          alt="perfil"
          className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
        />
      </div>

      {/* BIENVENIDA */}
      <section className="mt-16 max-w-3xl mx-auto text-center px-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Bienvenido a mi sitio ✨
        </h2>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Soy Alexa, una ingeniera en formación apasionada por la tecnología,
          la creatividad y el desarrollo de soluciones digitales. Este espacio
          refleja mi crecimiento, mis habilidades y mi forma de ver el mundo
          desde la ingeniería 💻💜
        </p>

        <div className="mt-6 h-1 w-20 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto rounded-full"></div>

      </section>

    </main>
  );
}