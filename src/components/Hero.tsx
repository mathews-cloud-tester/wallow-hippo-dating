type Props = {
  onStart: () => void
}

export function Hero({ onStart }: Props) {
  return (
    <section className="hero" aria-label="Welcome">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__ripple hero__ripple--1" />
        <div className="hero__ripple hero__ripple--2" />
        <div className="hero__ripple hero__ripple--3" />
        <div className="hero__photo" />
      </div>
      <div className="hero__content">
        <p className="hero__mark">WALLOW</p>
        <h1 className="hero__line">Find your mudmate.</h1>
        <button type="button" className="hero__cta" onClick={onStart}>
          Dive in
        </button>
      </div>
    </section>
  )
}
