import { waLink } from '../lib/whatsapp.js'
import { useT } from '../i18n/index.jsx'

/**
 * Icon only, at every size. There is no visible label, so the name has to
 * come from aria-label (for screen readers) and title (a hover tooltip, since
 * sighted visitors lose the text cue the pill used to give them).
 */
export default function WhatsAppFloat() {
  const t = useT()

  return (
    <a
      className="float"
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.float}
      title={t.float}
    >
      <svg className="float-icon" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M16.2 4.6C9.9 4.6 4.8 9.7 4.8 16c0 2 .5 3.9 1.5 5.6L4.6 27.4l6-1.6c1.6.9 3.5 1.4 5.6 1.4 6.3 0 11.4-5.1 11.4-11.4S22.5 4.6 16.2 4.6zm0 20.8c-1.9 0-3.6-.5-5.1-1.4l-.4-.2-3.6.9.9-3.5-.2-.4a9.4 9.4 0 1 1 8.4 4.6z" />
        <path d="M21.6 18.6c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1c-.2.2-.3.2-.6.1a7.7 7.7 0 0 1-3.9-3.4c-.3-.5.3-.5.8-1.5.1-.2 0-.4 0-.5l-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.3 5.3 4.6 2 .9 2.7.9 3.7.8.6-.1 1.8-.7 2-1.5.3-.7.3-1.3.2-1.5-.1-.1-.3-.2-.6-.3z" />
      </svg>
    </a>
  )
}
