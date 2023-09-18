function TechList({ techs }) {
  return (
    <section className="section is-medium" id="techs">
      <div className="container">
        <h2 className="title has-text-centered">What Students Learned</h2>
        <div className="columns is-multiline is-mobile">
          {
            techs?.map((tech) => (
              <div className="column m-0 is-narrow" key={tech.text}>
                <div className="box p-5">
                  <figure className="image is-48x48">
                    <img src={tech.square_icon} alt={tech.text} title={tech.text} />
                  </figure>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default TechList;
