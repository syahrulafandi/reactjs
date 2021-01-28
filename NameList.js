import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Enrique', 'Syahrul', 'Qolbi', 'Enrique']
    const persons = [
        {
            id: 1,
            name: 'Enrique',
            age: 18,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Syahrul',
            age: 18,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Qolbi',
            age: 17,
            skill: 'Vue'
        }
    ]
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return <div>{nameList}</div>
}

export default NameList
