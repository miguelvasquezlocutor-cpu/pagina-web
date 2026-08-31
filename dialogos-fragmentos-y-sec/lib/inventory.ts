/**
 * Inventario de voces — estructura de base de datos.
 *
 * El PDF no provee un listado completo de registros individuales, por lo que
 * NO se fabrican perfiles. Esta estructura está lista para expandirse como una
 * base de datos real. Agregar registros al arreglo `voices` a medida que estén
 * disponibles.
 */

export type RecordType =
  | 'entrevista-semi' // respondió entrevista semiestructurada
  | 'entrevista-av' // entrevistada con registro en audio/video
  | 'semblanza' // no entrevistada directamente; reseñada o semblanteada por estudiantes

export const recordTypeLabels: Record<RecordType, string> = {
  'entrevista-semi': 'Entrevista semiestructurada',
  'entrevista-av': 'Entrevista con registro audiovisual',
  semblanza: 'Reseñada / semblanteada por estudiantes',
}

export const recordTypeDescriptions: Record<RecordType, string> = {
  'entrevista-semi':
    'Profesionales que respondieron el formulario de entrevistas semiestructuradas.',
  'entrevista-av':
    'Mujeres entrevistadas en profundidad con registro en audio o audiovisual. Se prioriza el acceso a los video-resúmenes de cada entrevista.',
  semblanza:
    'Referentes y profesionales que no figuran entre las entrevistadas, pero fueron reseñadas o semblanteadas por estudiantes.',
}

export type Voice = {
  id: string
  name: string
  roles: string[]
  mediaType: string[]
  outlet?: string
  venture?: string
  province: string
  yearsExperience?: number
  migratedForWork?: boolean
  anecdote?: string
  recordType: RecordType
  videoSummaryUrl?: string | null
}

/* Facetas de filtrado disponibles (el PDF define estos ejes de navegación) */
export const filterFacets = {
  roles: [
    'Periodista',
    'Productora',
    'Directora',
    'Realizadora',
    'Conductora',
    'Editora',
    'Camarógrafa',
    'Docente / Investigadora',
    'Guionista',
    'Sonidista',
  ],
  mediaTypes: ['Radio', 'Televisión', 'Cine', 'Streaming', 'Medios comunitarios', 'Plataformas digitales'],
  provinces: [
    'Buenos Aires',
    'CABA',
    'Córdoba',
    'Santa Fe',
    'Mendoza',
    'Tucumán',
    'Salta',
    'Jujuy',
    'Neuquén',
    'Río Negro',
    'Chubut',
    'Santa Cruz',
    'Misiones',
    'Corrientes',
    'Entre Ríos',
    'La Pampa',
    'San Juan',
    'Chaco',
    'Formosa',
  ],
}

/**
 * Registros individuales. Vacío por diseño: el PDF indica no fabricar perfiles.
 * Ejemplo de forma (comentado) para futuras cargas:
 *
 * {
 *   id: 'v1',
 *   name: 'Nombre Apellido',
 *   roles: ['Periodista'],
 *   mediaType: ['Televisión'],
 *   outlet: 'Canal / Productora',
 *   province: 'CABA',
 *   yearsExperience: 20,
 *   migratedForWork: true,
 *   anecdote: 'Anécdota relevante en términos de género.',
 *   recordType: 'entrevista-av',
 *   videoSummaryUrl: null,
 * }
 */
export const voices: Voice[] = []
