import {useState} from 'react';
import axios from 'axios';
import "./person.css";

function Person() {
    const [persons, setPersons] = useState([]);
    axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            const persons = res.data;
            setPersons(persons);

        })
    return (
        <div className="person row">
                    {persons.map((person) => (
                        <div className="col-md-4 person-card">
                            <h1>Name : {person.name}</h1>
                            <h5>Email : {person.email}</h5>
                            <p>Adresse : </p>
                            <ul>
                                <li>{person.address.street}</li>
                                <li>{person.address.suite}</li>
                                <li>{person.address.city}</li>
                                <li>{person.address.zipcode}</li>
                            </ul>
                        </div>
                    ))}
        </div>
    )
}

export default Person;