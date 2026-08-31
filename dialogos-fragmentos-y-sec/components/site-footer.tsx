import Link from 'next/link'
import { Mail } from 'lucide-react'
import { mainNav, secondaryNav, projectTitle, projectSubtitle } from '@/lib/nav'
import { contactEmails } from '@/lib/project'

export function SiteFooter() {
  return (
    <footer id="contacto" className="relative bg-ink text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-primary text-balance">
              {projectTitle}
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-background/70">
              {projectSubtitle}
            </p>

            <div className="mt-6 flex flex-col gap-2">
              {contactEmails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="inline-flex w-fit items-center gap-2 text-sm text-background/80 transition-colors hover:text-primary"
                >
                  <Mail className="size-4 text-secondary" />
                  {email}
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Secciones">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Secciones</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/75 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Más">
            <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Más</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-background/75 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-14 border-t border-background/15 pt-8">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs uppercase tracking-wide text-background/60">
            <span className="rounded-full border border-background/20 px-3 py-1">
              Logo UNSAM — espacio reservado
            </span>
            <span>Escuela de Humanidades</span>
            <span>Comunicación Audiovisual a distancia</span>
            <span className="rounded-full border border-background/20 px-3 py-1">
              Redes sociales — por definir
            </span>
          </div>
          <p className="mt-6 text-xs text-background/50">
            © {new Date().getFullYear()} UNSAM · Publicación multimedia y archivo de investigación.
          </p>
        </div>
      </div>
    </footer>
  )
}
