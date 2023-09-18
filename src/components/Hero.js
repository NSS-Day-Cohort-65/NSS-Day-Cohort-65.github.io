function Hero({ cohortName, programName, demoDayLink, demoDate, heroRef, navBarRef }) {
  return (
    <section className="hero is-warning is-medium is-bold" ref={heroRef}>
      <div className="hero-head has-text-weight-bold">
        <nav className="navbar">
          <div className="container">
            <div className="navbar-brand">
              <a href="https://nashvillesoftwareschool.com/" target="_blank" rel="noopener noreferrer" className="navbar-item">
                Nashville Software School Presents:
              </a>
            </div>

            <div className="navbar-menu is-active">
              <div className="navbar-end is-align-items-center">
                <li className="navbar-item has-text-white">
                  Join us for Demo Day {demoDate}
                </li>
                <span className="navbar-item">
                  <a href={demoDayLink} target="_blank" rel="noopener noreferrer" className="button is-warning is-inverted">
                    <span className="icon">
                      <i className="fa-regular fa-calendar-plus"></i>
                    </span>
                    <span>RSVP Here</span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="hero-body">
        <div className="container has-text-centered">
          <p className="title">
            {cohortName}
          </p>
          <p className="subtitle">
            {programName}
          </p>

        </div>
      </div>

      <div className="hero-foot">
        <nav className="navbar tabs" ref={navBarRef}>
          <div className="container">
            <div className="navbar-end has-text-weight-bold">
              <div className="navbar-brand">
                <a className="navbar-item" href="#students">Students</a>
                <a className="navbar-item" href="#techs">Techs</a>
                <a className="navbar-item" href="#demo-day">Demo Day</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}

export default Hero;
