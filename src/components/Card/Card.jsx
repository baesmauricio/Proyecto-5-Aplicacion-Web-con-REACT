const Card = ({ item }) => {
  return (
    <div
      className="col-12 col-sm-6 col-md-4 col-lg-3 " key={item.id}>
      <div className="card h-100 text-bg text-bg-success border-primary mb-3">
        <img
          src={item.image} className="card-img-top img-fluid" alt={item.name}
          style={{ objectFit: 'cover', height: '300px', width: '100%' }} />

        <div className="card-body" >
          <h5 className="card-title fs-2 fw-bold ">{item.name}</h5>
          <p className="card-text text-start fs-4 "><span className="text-decoration-underline">Estado:</span>{item.status}</p>
          <p className="card-text text-start fs-4"> <span className="text-decoration-underline">Genero:</span>{item.gender}</p>
          <p className="card-text text-start fs-4"> <span className="text-decoration-underline">Especie:</span>{item.species}</p>
        </div>
      </div>
    </div>
  )
}
export default Card