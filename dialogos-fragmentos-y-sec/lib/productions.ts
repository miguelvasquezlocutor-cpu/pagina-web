export type Review = {
  title: string
  student: string
  course: string
  year: string
  youtubeUrl: string | null
  youtubeId: string | null
}

export const reviewsIntro =
  'Las reseñas audiovisuales sobre producciones de mujeres del cine y la televisión argentinas apuntan a valorar las perspectivas concretas de productoras y realizadoras: las historias que narran, la estética audiovisual, sus propuestas sociales y éticas. El recorrido que cada estudiante investiga para transmitir a los espectadores es, a la vez, una selección y un recorte personal. En cada caso asume su propia perspectiva sobre las obras reseñadas y habla de una mujer del audiovisual a partir de la mirada que esas obras transmiten. Dado que se trata de reseñas audiovisuales, cada estudiante retoma también en su producción algún aspecto del lenguaje de las autoras de las obras reseñadas.'

export const reviews: Review[] = [
  {
    title: 'Reseña — Sabrina Farji',
    student: 'Luciano Caridi',
    course: 'Laboratorio en Comunicación Audiovisual',
    year: '2026',
    youtubeUrl: 'https://youtu.be/hfgvl24qNiE',
    youtubeId: 'hfgvl24qNiE',
  },
  {
    title: 'Reseña — Bernarda Llorente',
    student: 'Alex Peruzzo',
    course: 'Laboratorio en Comunicación Audiovisual',
    year: '2026',
    youtubeUrl: 'https://youtu.be/7HCGbgCChKM',
    youtubeId: '7HCGbgCChKM',
  },
  {
    title: 'Reseña — La TV de María Herminia Avellaneda',
    student: 'Ana Moruja',
    course: 'Laboratorio en Comunicación Audiovisual',
    year: '2026',
    youtubeUrl: 'https://youtu.be/aYjILTzujbs',
    youtubeId: 'aYjILTzujbs',
  },
  {
    title: 'Reseña — Corazón de cámara: la obra de Virna Molina',
    student: 'Julieta Guarnieri',
    course: 'Laboratorio en Comunicación Audiovisual',
    year: '2026',
    youtubeUrl: 'https://youtu.be/l-ueq5eYIjc',
    youtubeId: 'l-ueq5eYIjc',
  },
]

export const semblanzasIntro =
  'Las semblanzas funcionan habitualmente como relatos biográficos con los que se presenta a una persona. El género integra la vida profesional y las perspectivas, posicionamientos, miradas y elecciones que se vuelven significativas a partir de la mirada de quien escribe. En este sentido, la semblanza tiene tanta relación con la presentación de CV o bio como con el género obituario, que resume no sólo la trayectoria sino la trascendencia de una persona. Esa trascendencia, claro está, tiene una firma de autoría: aquí es tan importante la persona semblanteada como quien realiza esa revisión y rescata sus herencias profesionales y humanas.'

export const semblanzasNote =
  'Las reseñas audiovisuales se realizaron en el marco de la materia Laboratorio en Comunicación Audiovisual y las semblanzas escritas en el Seminario Producciones en Clave de Género, todas durante el ciclo lectivo 2026. Los textos escritos se conciben como documentos de 3 páginas; una menor cantidad se acompaña con material audiovisual embebido.'

export const entrevistasIntro =
  'Archivo audiovisual de testimonios. Las entrevistas en profundidad recuperan las voces de mujeres destacadas en distintos roles de la radio, la televisión y el cine de 19 provincias. Ver los testimonios es el corazón de esta sección: el material audiovisual tiene prioridad visual.'

export const otrasIntro =
  'Otras producciones desarrolladas por el equipo y las cátedras participantes a lo largo del proceso de investigación.'

export type OtherProduction = {
  title: string
  author: string
}

export const otrasProducciones: OtherProduction[] = [
  { title: 'Producción en desarrollo', author: 'Daniela Urrejola' },
]
