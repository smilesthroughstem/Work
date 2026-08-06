import Link from 'next/link'
import { FlaskConical } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center rounded-full bg-secondary text-primary">
            <FlaskConical aria-hidden="true" className="size-4" />
          </span>
          <div>
            <p className="font-heading font-bold text-foreground">Smiles Through STEM</p>
            <p className="text-sm text-muted-foreground">Curiosity, comfort, and care.</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
          <Link className="transition-colors hover:text-primary" href="mailto:smilesthroughstem@gmail.com">
            smilesthroughstem@gmail.com
          </Link>
          <p>Student-led since 2024</p>
        </div>
      </div>
    </footer>
  )
}
