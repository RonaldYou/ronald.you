import { useEffect, useState } from 'react'
import './App.css'

type Theme = 'light' | 'dark'

function getInitialTheme(): Theme {
  const stored = window.localStorage.getItem('theme')
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
    >
      {theme === 'dark' ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />
        </svg>
      )}
    </button>
  )
}

function SpotifyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="spotify-icon">
      <circle cx="12" cy="12" r="12" fill="currentColor" />
      <path d="M17.46 15.76a.75.75 0 0 1-1.03.25 9.47 9.47 0 0 0-4.79-1.25 11.6 11.6 0 0 0-2.88.35.75.75 0 1 1-.38-1.45 13.1 13.1 0 0 1 3.26-.4 11 11 0 0 1 5.54 1.46.75.75 0 0 1 .28 1.04Z" fill="#171613" />
      <path d="M18.45 12.76a.94.94 0 0 1-1.29.31 11.87 11.87 0 0 0-5.93-1.5 14.04 14.04 0 0 0-3.34.4.94.94 0 0 1-.45-1.83 15.9 15.9 0 0 1 3.8-.45 13.72 13.72 0 0 1 6.88 1.75.94.94 0 0 1 .33 1.32Z" fill="#171613" />
      <path d="M19.58 9.53a1.12 1.12 0 0 1-1.53.37 14.36 14.36 0 0 0-7.1-1.8 16.2 16.2 0 0 0-4 .5 1.12 1.12 0 0 1-.55-2.18 18.52 18.52 0 0 1 4.53-.56 16.6 16.6 0 0 1 8.2 2.08 1.12 1.12 0 0 1 .45 1.59Z" fill="#171613" />
    </svg>
  )
}

interface Link {
  label: string
  url: string
}

interface Favorite {
  label: string
  value: string
  url?: string
}

interface Interest {
  name: string
  note: string
}

interface LifeNote {
  title: string
  note: string
}

interface Profile {
  name: string
  tagline: string
  location: string
  email: string
  // Drop a photo into public/ (e.g. public/photo.jpg) and point this at it.
  // Leave as null to skip the photo entirely.
  photo: string | null
  resumeUrl: string
  links: Link[]
}

// ---- Edit everything in this section with your real info ----
const profile: Profile = {
  name: 'Ronald You',
  tagline: 'Just a guy trying to improve himself everyday',
  location: 'Toronto, Canada',
  email: 'me@ronald.you',
  photo: '/carouselmaker_image_5 3.PNG', // '/photo.jpg'
  resumeUrl: '/Ronald_Resume_ML.pdf',
  links: [
    { label: 'GitHub', url: 'https://github.com/RonaldYou' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/ronald-you/' },
  ],
}

const quote: string = '\"If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.\" - J.R.R. Tolkien'

const about: string =
  `Hey, I'm Ronald. I'm a software engineering undergrad at UWaterloo, and I spend most of my time working on autonomous vehicles and robotics. I really love the challenge of getting software to interact with the physical world—whether that's training RL agents for self-driving or building out simulators. It's a complex, messy puzzle that I never get tired of solving.

When I step away from my laptop, I'm usually throwing on a podcast or catching up on the news to keep a pulse on what's happening outside the tech bubble. At the end of the day, I’m really just a guy trying to constantly improve in all aspects of life—always learning, trying out new things, and working on finally making it to graduation.`

const now: string =
  'Currently training for a marathon - Toronto Waterfront Marathon on October 18th, 2026'

const upcoming: string =
  'Ski Trips - always a ski trip. When in doubt a ski trip. And Level 2 CSIA certification this upcoming winter. \n Oh and also buying a cheap manual off facebook marketplace to learn how to drive stick.'

const interests: Interest[] = [
  { name: 'Skiing', note: 'Been skiing for ~15 years. Level 1 CSIA Certified' },
  { name: 'Lego', note: 'If you need to buy me a gift, I\'ll take Lego any day' },
  { name: 'Piano', note: 'No longer any good, but love to play some nice tunes' },
  { name: 'Aviation', note: 'Love the airport and a nice window seat' },
]

const favorites: Favorite[] = [
  { label: 'Currently reading', value: 'How Smart Machines Think by Sean Gerrish' },
  { label: 'Go-to meal', value: 'Pesto Pasta' },
  { label: 'Favorite place', value: 'Copenhagen' },
  {
    label: 'On repeat',
    value: 'https://open.spotify.com/track/0L5gFNrzHyh4OhMwEz6DGS?si=8d2c71a92c414136',
  },
]

const lifeLately: LifeNote[] = [
  {
    title: 'Taking the L in ',
    note: 'Smash Bros. This game is impossible. Too many characters and new character interactions each time',
  },
  {
    title: 'Currently getting heart attacks watching the',
    note: 'Blue Jays - 2 games back from a wild card spot after a horrendous start to the season. Go Jays Go!',
  },
  {
    title: 'Coming up with new project idea',
    note: 'Mac controls with non voice audio inputs',
  },
]

const farFetchedGoals: string[] = [
  'Have always loved aviation and hope to get a Private Pilot\'s License in the near future',
  'Been enthralled by F1 and karting and want to join a racing league and race cars',
  'Get into rocketry',
]
// ---------------------------------------------------------------

function App() {
  return (
    <main className="page">
      <ThemeToggle />
      <header className="hero">
        {profile.photo && <img className="photo" src={profile.photo} alt={profile.name} />}
        <h1>{profile.name}</h1>
        <p className="tagline">{profile.tagline}</p>
        <p className="meta">{profile.location}</p>
        <nav className="links">
          {profile.links.map((link) => (
            <a key={link.label} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="resume-link" href={profile.resumeUrl} target="_blank" rel="noreferrer">
            Resume (PDF)
          </a>
        </nav>
      </header>

      <p className="fun-fact">{quote}</p>

      <section>
        <h2>About</h2>
        <p>{about}</p>
      </section>

      <section>
        <h2>Now</h2>
        <p>{now}</p>
      </section>

      <section>
        <h2>Upcoming</h2>
        <p>{upcoming}</p>
      </section>

      <section>
        <h2>Outside of work</h2>
        <div className="interest-list">
          {interests.map((interest) => (
            <div className="interest-item" key={interest.name}>
              <h3>{interest.name}</h3>
              <p>{interest.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>A few favorites</h2>
        <div className="favorites-grid">
          {favorites.map((favorite) => (
            <div className="favorite-item" key={favorite.label}>
              <span className="favorite-label">{favorite.label}</span>
              {favorite.url ? (
                <a href={favorite.url} target="_blank" rel="noreferrer" className="favorite-link">
                  {favorite.label === 'On repeat' && <SpotifyIcon />}
                  {favorite.value}
                </a>
              ) : (
                <span>{favorite.value}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Far-fetched goals</h2>
        <ul className="goals-list">
          {farFetchedGoals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ul>
      </section>

      <section className="section-compact">
        <h2>Life lately</h2>
        <div className="principle-grid">
          {lifeLately.map((item) => (
            <div className="principle-item" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>
          {profile.name} · {profile.location} ·{' '}
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </footer>
    </main>
  )
}

export default App