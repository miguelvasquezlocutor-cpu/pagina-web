export const bookMeta = {
  title: 'Diálogos, fragmentos y secuencias',
  subtitle: 'Mujeres de la comunicación audiovisual en Argentina',
  collection: 'Léxico crítico del futuro — UNSAM Edita',
  coordinators: ['Gabriela Cicalese', 'Laura Rinaldi'],
  authors: [
    'Carolina Giosa',
    'Paula Ramos',
    'Paula Navarro',
    'Alejandra Gallo',
    'Nancy Diana',
    'María Pellegrinetti',
  ],
  authorsNote: 'Se habilitará espacio para al menos 4 o 5 autoras que pueden sumarse.',
}

export type BookSection = {
  number: string
  title: string
  subtitle: string
  articles: string[]
  pending?: boolean
}

export const bookSections: BookSection[] = [
  {
    number: '01',
    title: 'Introducción',
    subtitle: 'Proceso de investigación · Metodología · Notas de campo',
    articles: [
      'Presentación del proyecto',
      'Metodología de la investigación-acción',
      'Notas de campo y bitácoras del proceso colectivo',
    ],
  },
  {
    number: '02',
    title: 'Artículos',
    subtitle: 'Temáticas que emergen de las entrevistas',
    articles: [
      'Tecnología',
      'Ética',
      'Labor periodística',
      'Experiencias de trabajo de la temática',
      'Otras temáticas emergentes de la investigación',
    ],
  },
  {
    number: '03',
    title: 'Semblanzas',
    subtitle: 'Relatos biográficos de mujeres del audiovisual',
    articles: ['Semblanzas escritas producidas en el Seminario Producciones en Clave de Género'],
  },
  {
    number: '04',
    title: 'Contenido futuro',
    subtitle: 'Espacio abierto para nuevas incursiones',
    articles: ['Nuevos artículos, semblanzas y aportes en construcción'],
    pending: true,
  },
]
