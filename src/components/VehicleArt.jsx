/* Side profiles drawn as line art so the fleet section has no stock photos.
   Swap any of these for a real photograph when you have one. */

const SHAPES = {
  van: (
    <>
      <g className="vg">
        <path d="M30 96 L30 52 Q30 40 44 36 L118 22 Q130 20 144 20 L256 20 Q282 20 288 36 L294 56 Q296 70 296 84 L296 96 Z" />
        <path className="vg-win" d="M52 44 L52 66 L108 66 L108 36 L62 44 Z" />
        <path className="vg-win" d="M122 34 L122 66 L176 66 L176 32 L130 32 Z" />
        <path className="vg-win" d="M190 32 L190 66 L244 66 L244 32 Z" />
        <path className="vg-win" d="M258 32 L258 66 L282 66 L274 36 Z" />
        <line x1="182" y1="24" x2="182" y2="96" />
      </g>
      <circle className="vw" cx="86" cy="98" r="18" />
      <circle className="vw" cx="244" cy="98" r="18" />
      <circle className="vh" cx="86" cy="98" r="7" />
      <circle className="vh" cx="244" cy="98" r="7" />
    </>
  ),

  suv: (
    <>
      <g className="vg">
        <path d="M30 88 L30 46 Q30 34 44 32 L60 24 Q66 22 78 22 L200 22 Q212 22 218 30 L238 52 L276 56 Q292 58 292 70 L292 88 Z" />
        <path className="vg-win" d="M46 40 L46 62 L84 62 L84 38 Z" />
        <path className="vg-win" d="M96 37 L96 62 L140 62 L140 36 Z" />
        <path className="vg-win" d="M152 35 L152 62 L196 62 L196 34 Z" />
        <path className="vg-win" d="M206 34 L206 60 L234 60 Z" />
        <line x1="146" y1="24" x2="146" y2="88" />
      </g>
      <circle className="vw" cx="86" cy="96" r="22" />
      <circle className="vw" cx="238" cy="96" r="22" />
      <circle className="vh" cx="86" cy="96" r="8" />
      <circle className="vh" cx="238" cy="96" r="8" />
    </>
  ),

  sprinter: (
    <>
      <g className="vg">
        <path d="M22 96 L22 40 Q22 24 40 20 L250 14 Q278 14 286 32 L296 60 Q300 74 300 86 L300 96 Z" />
        <path className="vg-win" d="M44 34 L44 62 L96 62 L96 30 L52 32 Z" />
        <path className="vg-win" d="M110 30 L110 62 L164 62 L164 28 Z" />
        <path className="vg-win" d="M178 28 L178 62 L232 62 L232 26 Z" />
        <path className="vg-win" d="M246 26 L246 62 L286 62 L276 32 Z" />
        <line x1="170" y1="18" x2="170" y2="96" />
      </g>
      <circle className="vw" cx="78" cy="98" r="18" />
      <circle className="vw" cx="248" cy="98" r="18" />
      <circle className="vh" cx="78" cy="98" r="7" />
      <circle className="vh" cx="248" cy="98" r="7" />
    </>
  ),

  minibus: (
    <>
      <g className="vg">
        <path d="M14 96 L14 32 Q14 18 32 18 L290 18 Q306 18 306 32 L306 96 Z" />
        <path className="vg-win" d="M30 32 L30 62 L76 62 L76 32 Z" />
        <path className="vg-win" d="M88 32 L88 62 L134 62 L134 32 Z" />
        <path className="vg-win" d="M146 32 L146 62 L192 62 L192 32 Z" />
        <path className="vg-win" d="M204 32 L204 62 L250 62 L250 32 Z" />
        <path className="vg-win" d="M262 32 L262 62 L292 62 L292 32 Z" />
        <line x1="256" y1="18" x2="256" y2="96" />
      </g>
      <circle className="vw" cx="66" cy="98" r="18" />
      <circle className="vw" cx="244" cy="98" r="18" />
      <circle className="vh" cx="66" cy="98" r="7" />
      <circle className="vh" cx="244" cy="98" r="7" />
    </>
  ),
}

export default function VehicleArt({ id, alt }) {
  return (
    <svg viewBox="0 0 320 132" role="img" aria-label={alt}>
      {SHAPES[id] ?? SHAPES.van}
    </svg>
  )
}
