import { useState } from 'react'
import './list.css'

const List = ({people}) => {
    // grabs state from parent component
    const [users, setUsers] = useState(people)

    //filter users based on id
    const removeUser = (id) => {
        let newUsers = users.filter((user) => user.id !== id)
        setUsers(newUsers)
        
    }

    return (
        <>
            {users.map((person) => {
                const {id, name, age, image} = person
                return (
                    <div key={id} className='col-lg-6 card-position'>
                        <div className="card" style={{width: "18rem"}}>
                            <img className="card-img-top" src={image} alt={name} />
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                <h5 className="card-title">Age: {age}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <button className='btn btn-outline-primary' onClick={() => removeUser(id)}>Remove User</button>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default List