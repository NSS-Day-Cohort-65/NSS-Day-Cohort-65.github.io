function DemoDayCTA({ demoDate, demoDayLink }) {
  return (
    <section className="section is-medium" id="demo-day">
      <div className="container content">
        <h2 className="title has-text-centered">Join us for Demo Day</h2>
        <p className="is-family-secondary">On {demoDate}, you can meet our latest graduates in 30-minute, 1-on-1 virtual
          meetings focused on the applications they built and questions you may have for them.
          To schedule your conversations, please <a href={demoDayLink} target="_blank" rel="noopener noreferrer">RSVP here</a>. Our RSVP form includes
          all the information we need to schedule your conversations. </p>
        <p className="is-family-secondary"> Not able to join us {demoDate}, but would like to speak with our grads? <span className="is-uppercase">No problem</span>! Let us know some days/times that work for you in the RSVP and we will gladly arrange a conversation with any graduate.</p>
      </div>
    </section>
  )
}

export default DemoDayCTA;
