export interface ClienteData {
  meta: {
    tituloPagina: string;
    descripcionPagina: string;
  };
  cliente: {
    nombre: string;
    proyecto: string;
    fecha: string;
    vigencia: string;
  };
  autor: {
    nombre: string;
    rol: string;
    email: string;
    telefono: string;
    whatsapp: string;
  };
  hero: {
    etiqueta: string;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    ctaPrimario: string;
    ctaSecundario: string;
  };
  sobreProyecto: {
    etiqueta: string;
    titulo: string;
    descripcion: string;
    objetivo: string;
    publicoObjetivoTitulo: string;
    publicoObjetivo: string[];
    canalesTitulo: string;
    canales: { nombre: string; icono: string }[];
  };
  alcance: {
    etiqueta: string;
    titulo: string;
    descripcion: string;
    categorias: {
      titulo: string;
      icono: string;
      items: string[];
    }[];
  };
  fases: {
    etiqueta: string;
    titulo: string;
    descripcion: string;
    moneda: string;
    fase1: Fase;
    fase2: Fase;
    notaResumen: string;
  };
  cronograma: {
    etiqueta: string;
    titulo: string;
    pasos: {
      titulo: string;
      descripcion: string;
      condicional?: boolean;
    }[];
  };
  tiempos: {
    etiqueta: string;
    titulo: string;
    parrafos: string[];
  };
  condiciones: {
    etiqueta: string;
    titulo: string;
    tarjetas: {
      titulo: string;
      icono: string;
      items: string[];
    }[];
  };
  valorAgregado: {
    etiqueta: string;
    titulo: string;
    items: {
      titulo: string;
      descripcion: string;
      icono: string;
    }[];
  };
  ctaFinal: {
    titulo: string;
    descripcion: string;
    ctaPrimario: string;
    ctaSecundario: string;
  };
  detallesTecnicos: {
    titulo: string;
    items: string[];
  };
}

export interface Fase {
  numero: string;
  nombre: string;
  badge: string;
  descripcion: string;
  precio: number;
  incluye: string[];
}
