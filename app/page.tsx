import { Navbar } from '@/components/portfolio/navbar'
import { Hero } from '@/components/portfolio/hero'
import { About } from '@/components/portfolio/about'
import { Skills } from '@/components/portfolio/skills'
import { Projects } from '@/components/portfolio/projects'
import { Experience } from '@/components/portfolio/experience'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { CursorGlow } from '@/components/portfolio/cursor-glow'
import { ScrollToTop } from '@/components/portfolio/scroll-to-top'

/**
 * Homepage — a Server Component that composes the portfolio sections.
 * Interactive/animated pieces are isolated in their own Client Components,
 * so the page stays mostly server-rendered for fast first paint.
 */
export default function Page() {
  return (
    <>
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
