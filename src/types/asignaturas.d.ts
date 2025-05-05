export type Pantalla = {
  titulo: string;
  slug: string;
  descripcion?: string;
};

export type ObjetoAprendizaje = {
  titulo?: string;
  slug: string;
  descripcion?: string;
  portada?: string;
  resumen?: string;
  pantallas?: Pantalla[];
};

export type Asignatura = {
  slug: string;
  titulo: string;
  descripcion: string;
  objetos_aprendizaje: ObjetoAprendizaje[];
};

export type AsignaturasData = {
  asignaturas: Record<string, Asignatura>;
};