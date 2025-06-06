import { asignaturas } from '@/pages/asignaturas/asignaturas.json';

export function GET() {
  const asignaturaNames = ['matematicas_1', 'matematicas_2', 'matematicas_3', 'calculo', 'estadistica'];
  const objetosMap = new Map<string, any>();

  asignaturaNames.forEach((name) => {
    const asignatura = asignaturas[name as keyof typeof asignaturas];
    if (asignatura) {
      asignatura.objetos_aprendizaje.forEach((objeto: any) => {
        objetosMap.set(objeto.id, objeto);
      });
    }
  });

  const objetosArray = Array.from(objetosMap.values());

  // Aleatorizar
  const seleccionados = [];
  while (seleccionados.length < 3 && objetosArray.length > 0) {
    const idx = Math.floor(Math.random() * objetosArray.length);
    seleccionados.push(objetosArray.splice(idx, 1)[0]);
  }

  return new Response(JSON.stringify(seleccionados), {
    headers: { 'Content-Type': 'application/json' }
  });
}
