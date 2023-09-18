function StudentImage({ image, className }) {
  return (
    <figure className={`image is-128x128 ${className}`}>
      {
        image
          ? <img className="is-rounded" layout="fill" src={image} alt="Profile" />
          : <i className="fa-solid fa-user-astronaut" />
      }
    </figure >
  )
}

export default StudentImage;
