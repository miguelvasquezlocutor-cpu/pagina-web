export type Activity = {
  id: string
  year: number
  date: string
  institution: string
  modality?: string
  type: string
  title: string
  participants?: string
  description?: string
  materials?: { label: string; kind: 'video' | 'pptx' | 'pdf' | 'podcast' | 'link' | 'acta' }[]
  status: 'realizado' | 'proximo'
}

export const activities: Activity[] = [
  {
    id: 'a1',
    year: 2024,
    date: '27, 28 y 29 de mayo de 2024',
    institution: 'Jornadas Científicas y Tecnológicas UNSAM 2024 (2.ª edición)',
    type: 'Presentación de póster',
    title: 'La producción audiovisual como dispositivo de incidencia feminista',
    participants: 'Gabriela Cicalese',
    description:
      'Presentación de póster en las Jornadas Científicas y Tecnológicas UNSAM 2024.',
    materials: [
      { label: 'Resumen de la ponencia', kind: 'acta' },
      { label: 'Lugar de la producción audiovisual en proyectos de investigación (PPTX)', kind: 'pptx' },
    ],
    status: 'realizado',
  },
  {
    id: 'a2',
    year: 2024,
    date: '6 de junio de 2024',
    institution: 'CEIECS',
    type: 'Presentación de podcast',
    title: 'Acerca de la formación universitaria',
    participants: 'Camila Gloria, Belén Badía y María Pellegrinetti',
    description:
      'Presentación del podcast sobre formación universitaria a partir de las entrevistadas.',
    materials: [
      { label: 'Programa CEIECS (PDF)', kind: 'pdf' },
      { label: 'Podcast: Acerca de la formación universitaria', kind: 'podcast' },
    ],
    status: 'realizado',
  },
  {
    id: 'a3',
    year: 2024,
    date: '6, 7 y 8 de noviembre de 2024',
    institution: 'III Congreso Internacional de Ciencias Humanas — LICH, UNSAM',
    type: 'Congreso · Presentación de investigación',
    title: 'Presentación de la investigación y entrevista abierta a Marcela Feudale',
    participants: 'Camila Gloria, Daniela Urrejola, Belén Badía',
    description:
      'Presentación de ejes de la investigación (Tecnologías, Derecho a la Palabra, Eje Laboral "¿Techo de cristal?" y Eje Familia) y entrevista abierta a Marcela Feudale (cámara y edición: Belén Badía).',
    materials: [
      { label: 'Tecnologías 1', kind: 'video' },
      { label: 'Podcast: Derecho a la Palabra', kind: 'podcast' },
      { label: 'Podcast Eje Laboral: ¿Techo de cristal?', kind: 'podcast' },
      { label: 'Podcast Eje Familia', kind: 'podcast' },
      { label: 'Entrevista a Marcela Feudale — Parte 1', kind: 'video' },
      { label: 'Entrevista a Marcela Feudale — Parte 2', kind: 'video' },
    ],
    status: 'realizado',
  },
  {
    id: 'a4',
    year: 2024,
    date: '6, 7 y 8 de noviembre de 2024',
    institution: 'III Congreso Internacional de Ciencias Humanas — LICH, UNSAM',
    type: 'Ponencia · Mesa 22',
    title:
      'Reconfiguraciones del periodismo audiovisual: experiencias de mujeres periodistas argentinas desde la reapertura democrática',
    participants: 'Laura Rinaldi y Gabriela Cicalese',
    status: 'realizado',
  },
  {
    id: 'a5',
    year: 2025,
    date: '8 de mayo de 2025',
    institution:
      'II Jornadas de Producciones Comunicacionales en Clave de Género y Transgénero — Lic. en Comunicación Audiovisual a distancia, EH, UNSAM',
    type: 'Conversatorio',
    title: 'Investigación Latinoamericana en clave de género',
    participants: 'Presentación de la investigación a cargo de Gabriela Cicalese',
    description:
      'Producciones: "Salud, elección de la maternidad y momentos profesionales" (Daniela Urrejola) y "¿Cuántas mujeres encabezan los programas en radio y tv?" (video, Celene Razzetto).',
    materials: [
      { label: 'Programa del evento (Instagram)', kind: 'link' },
      { label: '¿Cuántas mujeres encabezan los programas en radio y tv?', kind: 'video' },
    ],
    status: 'realizado',
  },
  {
    id: 'a6',
    year: 2025,
    date: '7 de octubre de 2025',
    institution: 'AMPLIFICADAS',
    type: 'Conversatorio',
    title: 'Conversatorio con Realizadoras Audiovisuales',
    description: 'Entrevista a productoras de AMPLIFICADAS (sin editar).',
    materials: [{ label: 'Conversatorio con Realizadoras Audiovisuales', kind: 'video' }],
    status: 'realizado',
  },
  {
    id: 'a7',
    year: 2025,
    date: '31 de octubre de 2025',
    institution: 'VIII Jornadas de Comunicación Estratégica de Lomas de Zamora 2025',
    type: 'Ponencia · Mesa de Comunicación Comunitaria',
    title: 'Comunicación Comunitaria',
    participants: 'Liliana Belforte',
    description:
      'Exposición en la Mesa de Ponencias de Comunicación Comunitaria en la VIII Jornada de Comunicación Estratégica.',
    materials: [{ label: 'Comunicación Comunitaria (PPTX)', kind: 'pptx' }],
    status: 'realizado',
  },
  {
    id: 'a8',
    year: 2025,
    date: '11 de noviembre de 2025',
    institution: 'Producción comunicacional en clave de género',
    type: 'Conversatorio',
    title: 'Conversatorio con la directora Diana Álvarez sobre el documental Las Cinéphilas',
    description: 'Entrevista a María Álvarez (Las Cinéphilas) — sin editar.',
    materials: [{ label: 'Entrevista a María Álvarez (Las Cinéphilas)', kind: 'video' }],
    status: 'realizado',
  },
  {
    id: 'a9',
    year: 2026,
    date: '15 de mayo de 2026',
    institution: 'Comunicación Audiovisual a Distancia — Observatorio en Comunicación Audiovisual',
    type: 'Presentación',
    title: 'Presentación del Festival Mujer y Cine',
    description: 'Festival La Mujer y el Cine — sin editar.',
    materials: [{ label: 'Reel Mujer y Cine (MP4)', kind: 'video' }],
    status: 'proximo',
  },
  {
    id: 'a10',
    year: 2026,
    date: '1 de junio de 2026',
    institution: 'Encuentro de Cátedras de Comunicación Audiovisual de RedCom — CAaD, UNSAM',
    type: 'Taller',
    title: 'Taller Mujeres de la Industria Audiovisual',
    description:
      'Dictado desde la Carrera CAaD de UNSAM en el marco del Encuentro de Cátedras de RedCom. Hay bitácoras de las personas participantes disponibles.',
    materials: [
      { label: 'Sitio del encuentro (Canva)', kind: 'link' },
      { label: 'Programa (Instagram)', kind: 'link' },
    ],
    status: 'proximo',
  },
  {
    id: 'a11',
    year: 2026,
    date: '3 de septiembre de 2026',
    institution: 'II Jornadas del CEIECS',
    type: 'Jornadas',
    title: 'II Jornadas del CEIECS',
    description: 'Mismo Centro del evento de 2024.',
    status: 'proximo',
  },
  {
    id: 'a12',
    year: 2026,
    date: '1, 2 y 3 de octubre de 2026',
    institution: 'Congreso REDCOM 2026 — Facultad de Ciencia Política y RRII, UNR',
    type: 'Congreso · Eje Comunicación, Género y Diversidades',
    title: 'Ponencias en el eje Comunicación, Género y Diversidades',
    description:
      'En el marco del Congreso se presentarán ponencias en el eje Comunicación, Género y Diversidades.',
    status: 'proximo',
  },
]
