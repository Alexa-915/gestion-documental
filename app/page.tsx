export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-200 via-pink-100 to-yellow-100 p-8">

      {/* HERO */}
      <section className="text-center mt-10">
        <h1 className="text-5xl font-bold text-purple-700">
          Hola, soy Alexa 💜
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Ingeniera en formación 👩‍💻 | Creativa | Apasionada por la tecnología
        </p>
      </section>

      {/* SOBRE MÍ */}
      <section className="mt-12 max-w-3xl mx-auto bg-white/70 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-purple-200">
        <h2 className="text-2xl font-semibold text-purple-700">
          Sobre mí ✨
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Soy una estudiante apasionada por la tecnología, con habilidades en programación,
          trabajo en equipo y liderazgo. Me encanta aprender cosas nuevas y crear soluciones
          innovadoras que impacten positivamente a las personas.
        </p>
      </section>

    </main>
  );
}