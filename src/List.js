import './list.css'

const List = ({people}) => {
    return (
        <>
            {people.map((person) => {
                const {id, name, age, image} = person
                return (
                    <div className="col">
                        <div key={id} className="card" style={{width: '18rem'}}>
                            <img src={image} className="card-img-top img-thumbnail" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h5 className="card-title">{age} years</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default List