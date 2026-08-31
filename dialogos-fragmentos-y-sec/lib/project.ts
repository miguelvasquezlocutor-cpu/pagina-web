export type Stat = {
  value: string
  pending: boolean
  label: string
}

export const stats: Stat[] = [
  {
    value: '166',
    pending: false,
    label: 'profesionales respondieron entrevistas semiestructuradas',
  },
  {
    value: '80',
    pending: false,
    label:
      'entrevistas en profundidad a mujeres destacadas en distintos roles de la radio, la televisión y el cine de 19 provincias',
  },
  {
    value: 'XXXX',
    pending: true,
    label: 'estudiantes y graduadas participantes del proceso de investigación durante 3 años',
  },
  {
    value: '5',
    pending: false,
    label:
      'cátedras que retomaron la temática en XXX propuestas de trabajo de las que fueron parte XXX estudiantes',
  },
  {
    value: 'xxx',
    pending: true,
    label: 'profesionales e investigadoras invitadas',
  },
]

/* Three core editorial concepts */
export const concepts = [
  {
    key: 'Diálogos',
    body: 'En cada indagación y entrevista, la agenda de nuestras variables se amplió y/o recondujo a partir de la escucha y el propio relato de cada protagonista. La perspectiva feminista atraviesa el proyecto tanto por su objeto de estudio como en la vocación por la horizontalidad en el proceso y la iniciación de jóvenes en la investigación en comunicación y en feminismo. Al habilitar la emergencia de distintos arquetipos para una revisión histórica, aparecieron los listados de "las imprescindibles" y la reproducción de la lógica mainstream que hemos tenido que desandar.',
  },
  {
    key: 'Fragmentos',
    body: 'Por las condiciones estructurales y la falta de recursos, esta investigación no construiría un inventario completo de las mujeres profesionales de la comunicación en los medios audiovisuales en Argentina, pero marcaría los andamios a la estructura de un archivo imprescindible. Se supuso una explosión en términos de inclusión de mujeres en roles históricamente masculinizados a partir del movimiento Ni Una Menos. Sin embargo, se dio más la relación inversa —varones ocupando roles históricamente vinculados a mujeres— y la propiedad, los lugares de liderazgo y tomas de decisiones siguen centrados en varones, aún en los medios con estructuras nuevas, como los streamings.',
  },
  {
    key: 'Secuencias',
    body: 'Se trata de un proyecto de investigación-acción, donde los avances en el trabajo de campo y las sistematizaciones tienen tanta importancia como la presentación de las distintas aristas de estas trayectorias en eventos académicos. La reflexividad del recorrido propio de cada integrante y del proceso colectivo permitió reconfigurar permanentemente el proyecto. El proceso, por su carácter espiralado y rizomático, queda abierto y disponible para nuevas incursiones en el campo de las Mujeres de la Comunicación Audiovisual, nuevas investigaciones y nuevas interacciones.',
  },
]

export const projectParagraphs = [
  'Este proyecto inició en septiembre de 2023 desde la Carrera Comunicación Audiovisual a distancia de la Escuela de Humanidades UNSAM. El objetivo principal fue el rescate de las trayectorias de mujeres de la comunicación audiovisual en Argentina, a partir de la recuperación democrática.',
  'Desde un comienzo y a lo largo de sus 3 años de duración, la perspectiva feminista atraviesa el proyecto tanto por su objeto de estudio como en la vocación por la horizontalidad en el proceso y la iniciación de jóvenes en la investigación en comunicación y en feminismo.',
  'En el proceso pusimos en debate algunas tendencias: por un lado, la de compañeras más militantes a convocar sólo a profesionales con conciencia de género; por otro, la demanda de estructuras rígidas y propias de miradas de investigación tradicional, que también acompañamos a revisar.',
]

export const closingParagraphs = [
  'Otras condiciones estructurales del proyecto y los ritmos de trabajo han ido moldeando el proceso. Los recursos acotados y la falta de disponibilidad de algunas referentes discontinuó el registro audiovisual de un primer documental que teníamos planificado y habilitó las entrevistas por plataformas de conexión sincrónica.',
  'El análisis de los datos comenzó a partir de la entrevista número 30 y, en paralelo a ese proceso, nuevas integrantes aportaron otras y diversas oportunidades de entrevistas y siempre priorizamos ampliar los testimonios. A los formularios de entrevistas semiestructuradas les dimos corte en los primeros meses de 2025. Al momento de esta publicación hemos reconfigurado el cuestionario, que quedará habilitado a partir de ahora para nuevos testimonios.',
  'Exponemos entonces un trabajo que no tiene una lógica de hipótesis y conclusiones sino una vocación performática de invitar a continuar, de sensibilizar sobre las problemáticas de las mujeres en el sector y la visibilidad de trayectorias fundamentales.',
]

export const contactEmails = [
  'comunicacionaudiov.virtual@unsam.edu.ar',
  'comunicacionygenero@unsam.edu.ar',
]

/* EQUIPO */
export type TeamGroup = {
  title: string
  names: string[]
  note?: string
}

export const teamGroups: TeamGroup[] = [
  { title: 'Dirección', names: ['Gabriela R. Cicalese'] },
  { title: 'Co-dirección', names: ['Laura B. Rinaldi'] },
  { title: 'Productoras', names: ['Belén Badía', 'Lucía Saludas', 'Romina Barbalace'] },
  {
    title: 'Con la colaboración de',
    names: [
      'Daniela Urrejola',
      'Luisina Ojeda',
      'Celene Razzetto',
      'Laura Rinaldi',
      'Camila Gloria',
      'Norberto Trabalón',
      'Liliana Belforte',
      'Mariana Olmedo',
      'Andrea Solano',
      'Aldana Kagut Raffin',
      'Carolina de la Arena',
      'Zaida De Pedro',
    ],
  },
  {
    title: 'Realización de entrevistas',
    names: ['Gabriela Cicalese', 'Belén Badía', 'Daniela Urrejola', 'Camila Gloria', 'Laura Rinaldi'],
  },
  {
    title: 'Con la participación de',
    names: [
      'María Pellegrinetti',
      'Lucía Saludas',
      'Liliana Belforte',
      'Zaida de Pedro',
      'Camila Diotisalvi',
      'Luisina Ojeda',
    ],
  },
  {
    title: 'Realización de podcast y audiovisuales',
    names: [
      'Celene Razzetto',
      'Camila Gloria',
      'Belén Badía',
      'Nancy Diana',
      'María Pellegrinetti',
      'Daniela Urrejola',
    ],
  },
  {
    title: 'Auxiliares de investigación',
    names: ['María Pellegrinetti', 'Mariana Olmedo', 'Nancy Diana'],
    note: 'con la colaboración de Milagros Luna',
  },
  { title: 'Base de datos', names: ['Gaspar Zuker'] },
  { title: 'Ilustraciones', names: [], note: 'Por definir' },
  { title: 'Diseño de la publicación', names: [], note: 'Por definir' },
]

export const chairs = [
  { name: 'Laboratorio en Comunicación Audiovisual', period: '2024 / 2026', people: 'Laura Rinaldi' },
  {
    name: 'Observatorio de Comunicación Audiovisual',
    period: '2024 / 2026',
    people: 'Laura Rinaldi y Liliana Belforte',
  },
  {
    name: 'Producciones Comunicacionales en Clave de Género',
    period: 'Ediciones 2025 y 2026',
    people: 'Gabriela Cicalese y Daniela Urrejola',
  },
  { name: 'Narrativa Transmedia', period: 'Edición 2026', people: 'Marina García' },
]
