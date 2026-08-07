import type { Metadata } from 'next'
import Image from 'next/image'
import { Eye, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | Smiles Through STEM',
  description: 'Meet the founder and learn about the mission and vision behind Smiles Through STEM.',
}

export default function AboutPage() {
  return (
    <main>
      <section className="bg-muted">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <h1 className="mx-auto max-w-3xl text-center font-heading text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:py-28 lg:gap-20">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-primary">The Story</p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight sm:text-4xl">A personal mission</h2>
          <p className="mt-7 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {"My name is Arshia Malhotra, and I am currently a sophomore in a medical school early acceptance program at Middle Tennessee State University. Spending hours volunteering with children receiving treatment and with individuals with special needs firsthand exposed me to the struggles they face. Oftentimes, they are severely anxious and may be missing school to get the help they require. To address this issue, I started this project in 2024 to keep children busy in an educational manner. Since then, I have created and donated over 200 kits to various children's hospitals and medical centers. However, my desire to help these individuals has only grown stronger, as I am now working on making this initiative larger and more sustainable."}
          </p>
        </div>
        <figure className="w-full max-w-xs justify-self-center overflow-hidden rounded-3xl bg-muted shadow-sm">
          <Image
            src="/images/arshia-malhotra.jpg"
            alt="Arshia Malhotra smiling in a garden"
            width={648}
            height={864}
            sizes="(min-width: 768px) 320px, calc(100vw - 40px)"
            className="aspect-[3/4] h-auto w-full object-cover object-center"
          />
        </figure>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-24">
          <article className="flex flex-col gap-5 rounded-3xl bg-background p-8 shadow-sm sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-full bg-muted text-primary">
              <Heart aria-hidden="true" className="size-5" />
            </span>
            <h2 className="font-heading text-2xl font-extrabold">Our Mission</h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              To alleviate anxiety of children during their clinical visits or medical treatment in an educational way.
            </p>
          </article>
          <article className="flex flex-col gap-5 rounded-3xl bg-background p-8 shadow-sm sm:p-10">
            <span className="flex size-12 items-center justify-center rounded-full bg-muted text-primary">
              <Eye aria-hidden="true" className="size-5" />
            </span>
            <h2 className="font-heading text-2xl font-extrabold">Our Vision</h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"To expand this initiative to children’s hospitals and clinics across different regions because every child deserves the right to channel their curiosity into discovery, regardless of their circumstance."}
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}
