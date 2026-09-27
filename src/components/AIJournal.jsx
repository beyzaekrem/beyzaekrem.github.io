import { useEffect, useMemo, useState } from 'react'
import { FiBookOpen, FiCode, FiEdit3, FiExternalLink, FiGithub, FiX } from 'react-icons/fi'
import { JOURNAL_CATEGORIES, journalEntries } from '../data/journalData'
import './AIJournal.css'

const categoryMeta = {
  'Kodlama Projesi': { icon: FiCode, accent: '#5ea87c' },
  'Makale Özeti': { icon: FiBookOpen, accent: '#8b96ef' },
  'Günlük Not': { icon: FiEdit3, accent: '#5a9ea6' },
}

function formatDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function AIJournal() {
  const [activeCategory, setActiveCategory] = useState('Tümü')
  const [selected, setSelected] = useState(null)

  const entries = useMemo(() => {
    const sorted = [...journalEntries].sort((a, b) => b.date.localeCompare(a.date))
    if (activeCategory === 'Tümü') return sorted
    return sorted.filter((entry) => entry.category === activeCategory)
  }, [activeCategory])

  useEffect(() => {
    if (!selected) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selected])

  return (
    <section id="journal" className="section journal">
      <div className="container">
        <div className="section-label">
          <span className="label-line"></span>
          AI & Data Journal
        </div>
        <h2 className="section-title">
          Learning <span className="gradient-text">marathon</span>
        </h2>
        <p className="section-subtitle">
          Yapay zeka ve veri bilimi notları: günlük projeler, makale özetleri ve kısa öğrenme kayıtları.
        </p>

        <div className="journal__filters" role="tablist" aria-label="Journal categories">
          {['Tümü', ...JOURNAL_CATEGORIES].map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={`journal__filter ${activeCategory === category ? 'journal__filter--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {entries.length === 0 ? (
          <p className="journal__empty">Yükleniyor...</p>
        ) : (
          <div className="journal__timeline">
            {entries.map((entry, index) => {
              const meta = categoryMeta[entry.category] || categoryMeta['Günlük Not']
              const Icon = meta.icon
              return (
                <article key={entry.id} className="journal__item">
                  <div className="journal__marker">
                    <div
                      className="journal__marker-icon"
                      style={{ borderColor: meta.accent, color: meta.accent }}
                    >
                      <Icon size={16} />
                    </div>
                    {index < entries.length - 1 && <div className="journal__line"></div>}
                  </div>

                  <button
                    type="button"
                    className="journal__card"
                    onClick={() => setSelected(entry)}
                    style={{ '--journal-accent': meta.accent }}
                  >
                    <div className="journal__card-meta">
                      <span className="journal__date">{formatDate(entry.date)}</span>
                      <span className="journal__badge">{entry.category}</span>
                    </div>
                    <h3 className="journal__card-title">{entry.title}</h3>
                    <p className="journal__card-summary">{entry.summary}</p>
                    <span className="journal__read-more">Detayı aç</span>
                  </button>
                </article>
              )
            })}
          </div>
        )}
      </div>

      {selected && (
        <div className="journal__modal-overlay" onClick={() => setSelected(null)}>
          <div
            className="journal__modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="journal-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="journal__modal-close"
              onClick={() => setSelected(null)}
              aria-label="Kapat"
            >
              <FiX size={20} />
            </button>
            <span className="journal__badge">{selected.category}</span>
            <p className="journal__modal-date">{formatDate(selected.date)}</p>
            <h3 id="journal-modal-title" className="journal__modal-title">
              {selected.title}
            </h3>
            <p className="journal__modal-summary">{selected.summary}</p>

            {selected.keyTakeaways?.length > 0 && (
              <>
                <h4 className="journal__modal-subtitle">Öğrendiklerim</h4>
                <ul className="journal__takeaways">
                  {selected.keyTakeaways.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            <div className="journal__modal-links">
              {selected.github && (
                <a
                  href={selected.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline"
                >
                  <FiGithub size={18} /> GitHub
                </a>
              )}
              {selected.demo && (
                <a
                  href={selected.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FiExternalLink size={18} /> Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default AIJournal
