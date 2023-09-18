function Footer() {
  return (
    <footer className="footer has-background-dark 	">
      <div className="container">
        <nav className="level">
          <div className="level-left">
            <p className="level-item">
              <img src={`${process.env.PUBLIC_URL}/nss_logo.png`} style={{ height: '30px' }} alt="Nashville Software School" />
            </p>
          </div>
          <div className="level-right has-text-white">
            <p className="level-item">
              <a className="link has-text-white-ter" href="https://nashvillesoftwareschool.com/" target="_blank" rel="noreferrer">
                <span className="icon is-large">
                  <i className="fa-solid fa-house fa-lg" />
                </span>
              </a>
            </p>
            <p className="level-item">
              <a className="link has-text-white-ter" href="https://www.linkedin.com/school/nashville-software-school/mycompany/" target="_blank" rel="noreferrer">
                <span className="icon is-large">
                  <i className="fa-brands fa-linkedin fa-lg" />
                </span>
              </a>
            </p>
            <p className="level-item">
              <a className="link has-text-white-ter" href="https://www.facebook.com/NashvilleSoftwareSchool/" target="_blank" rel="noreferrer">
                <span className="icon is-large">
                  <i className="fa-brands fa-square-facebook fa-lg" />
                </span>
              </a>
            </p>
            <p className="level-item">
              <a href="https://twitter.com/NashSoftware" className="link has-text-white-ter" target="_blank" rel="noreferrer">
                <span className="icon is-large">
                  <i className="fa-brands fa-square-twitter fa-lg" />
                </span>
              </a>
            </p>
          </div>
        </nav>
      </div>
    </footer>
  )
}

export default Footer;
