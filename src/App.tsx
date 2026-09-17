import { useState } from 'react'

const features = [
  ['01', 'Identity', 'Learn how OAuth turns a provider login into an app session.'],
  ['02', 'Sessions', 'Understand authenticated state, redirects, and logout.'],
  ['03', 'Profiles', 'Build the bridge from an auth user to application data.'],
]

function App() {
  const [message, setMessage] = useState('')

  const handleLogin = (provider: 'GitHub' | 'Google') => {
    setMessage(`${provider} OAuth is the next connection point. Supabase will handle the real sign-in.`)
  }

  return (
    <main className="site-shell">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Tensoramax Lab home">
          <span className="brand-mark">T</span>
          <span>Tensoramax <b>Lab</b></span>
        </a>
        <span className="lab-status"><i /> AUTH LAB · 001</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent AI · Software · Research</p>
          <h1>Build the<br /><em>connection.</em></h1>
          <p className="lede">
            A small authentication playground for learning how modern apps connect identity,
            sessions, profiles, and protected experiences.
          </p>
          <div className="hero-meta">
            <span>React + Vite</span><span>TypeScript</span><span>Supabase Auth</span>
          </div>
        </div>

        <div className="auth-card" aria-label="Login interface">
          <div className="card-top">
            <div>
              <p className="card-kicker">MEMBER ACCESS</p>
              <h2>Enter the Lab</h2>
            </div>
            <span className="lock">◈</span>
          </div>

          <p className="card-description">Choose an identity provider to continue.</p>

          <div className="provider-stack">
            <button className="provider-button" onClick={() => handleLogin('GitHub')}>
              <span className="provider-icon github">GH</span>
              <span>Continue with GitHub</span>
              <span className="arrow">↗</span>
            </button>
            <button className="provider-button" onClick={() => handleLogin('Google')}>
              <span className="provider-icon google">G</span>
              <span>Continue with Google</span>
              <span className="arrow">↗</span>
            </button>
          </div>

          {message && <p className="auth-message" role="status">{message}</p>}
          <p className="privacy-note">No password stored here. OAuth + Supabase will own the authentication flow.</p>
        </div>
      </section>

      <section className="learning-grid" aria-label="What this lab teaches">
        {features.map(([number, title, text]) => (
          <article className="feature" key={number}>
            <span className="feature-number">{number}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <footer>
        <span>© {new Date().getFullYear()} TENSORAMAX LAB</span>
        <span>AUTH LAB / EXPERIMENT 001</span>
      </footer>
    </main>
  )
}

export default App
