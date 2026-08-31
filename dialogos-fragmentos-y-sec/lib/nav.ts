export type NavItem = {
  label: string
  href: string
}

export const mainNav: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'El proyecto', href: '/proyecto' },
  { label: 'Inventario de voces', href: '/inventario' },
  { label: 'Libro', href: '/libro' },
  { label: 'Presentaciones y actividades', href: '/actividades' },
  { label: 'Producciones de estudiantes', href: '/producciones' },
]

export const secondaryNav: NavItem[] = [
  { label: 'Equipo', href: '/proyecto#equipo' },
  { label: 'El proyecto en números', href: '/#numeros' },
  { label: 'Reseñas', href: '/producciones#resenas' },
  { label: 'Semblanzas', href: '/producciones#semblanzas' },
  { label: 'Entrevistas', href: '/producciones#entrevistas' },
  { label: 'Otras producciones', href: '/producciones#otras' },
  { label: 'Contacto', href: '/#contacto' },
]

export const projectTitle = 'Diálogos, fragmentos y secuencias'
export const projectSubtitle =
  'Testimonios de mujeres de la comunicación audiovisual en Argentina'
