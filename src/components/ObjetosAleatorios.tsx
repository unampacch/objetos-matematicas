import React, { useEffect, useState } from 'react';
import SummaryItemReact from './SummaryItemReact';

export default function ObjetosAleatorios() {
  const [objetos, setObjetos] = useState<any[] | null>(null);

 useEffect(() => {
  fetch('/data/asignaturas.json')
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      console.log('Data fetchada:', data);

      const asignaturaNames = ['matematicas_1', 'matematicas_2', 'matematicas_3', 'calculo', 'estadistica'];

      const objetosSet = new Set<any>();
      asignaturaNames.forEach((name) => {
        const asignatura = data.asignaturas[name]; // ✅ CORREGIDO AQUÍ
        console.log('Asignatura:', name, asignatura);
        if (asignatura?.objetos_aprendizaje) {
          asignatura.objetos_aprendizaje.forEach((obj: any) => objetosSet.add(obj));
        }
      });

      const objetosArray = Array.from(objetosSet);
      console.log('Objetos únicos:', objetosArray);

      const seleccionados = [];
      while (seleccionados.length < 3 && objetosArray.length > 0) {
        const index = Math.floor(Math.random() * objetosArray.length);
        seleccionados.push(objetosArray.splice(index, 1)[0]);
      }

      console.log('Objetos seleccionados:', seleccionados);

      setObjetos(seleccionados);
    })
    .catch((error) => {
      console.error('Error al cargar objetos:', error);
    });
}, []);


  if (!objetos) {
    return <p className="text-center text-white text-xl py-10">Cargando materiales...</p>;
  }

  return (
    <section className="container mx-auto my-40">
      <h2 className="my-5 text-3xl font-extrabold text-light lg:text-4xl animate-fade-down overflow-hidden transform transition duration-1000 ease-in-out">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-light from-lightblue">
          Estos son algunos de nuestros materiales que tenemos disponibles
        </span>
      </h2>
      <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
        <li className="aspect-square lg:aspect-video">
          <SummaryItemReact objeto={objetos[0]} />
        </li>
        <li className="aspect-square lg:aspect-video">
          <SummaryItemReact objeto={objetos[1]} />
        </li>
        <li className="aspect-square lg:min-h-96 lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:aspect-video">
          <SummaryItemReact objeto={objetos[2]} />
        </li>
      </ul>
    </section>
  );
}
