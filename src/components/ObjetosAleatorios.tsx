import { useState } from 'react';

type Objeto = {
  titulo: string;
  slug: string;
  portada: string;
  resumen?: string;
};

type Props = {
  objetos: Objeto[];
};

export default function ObjetosAleatorios({ objetos }: Props) {
  const [visibleCount, setVisibleCount] = useState(4);
  const [isLoading, setIsLoading] = useState(false);

  const cargarMas = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 4);
      setIsLoading(false);
    }, 700); // Simula carga y permite animación
  };

  const objetosVisibles = objetos.slice(0, visibleCount);

  return (
    <section className="max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Objetos de aprendizaje</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {objetosVisibles.map((obj, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md p-4 transform transition-all duration-500 animate-fade-slide"
          >
            <img
              src={obj.portada}
              alt={obj.titulo}
              className="w-full h-48 object-cover rounded-xl mb-3"
            />
            <h3 className="text-lg font-semibold">{obj.titulo}</h3>
            <p className="text-sm text-gray-600">{obj.resumen}</p>
          </div>
        ))}
      </div>

      {visibleCount < objetos.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={cargarMas}
            disabled={isLoading}
            className="relative inline-flex items-center justify-center px-6 py-2 text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-2xl transition-all duration-300 shadow-md active:scale-95 disabled:opacity-60"
          >
            {isLoading ? (
              <>
                <span className="loader mr-2"></span> Cargando...
              </>
            ) : (
              'Cargar más'
            )}
          </button>
        </div>
      )}
    </section>
  );
}
