import React from 'react'

// function Greet() {
//     return <h1>Hello Jeabede</h1>
// }

const Greet = props => {
    const { name, filmName } = props
    return (
        <div>
            <h1>
                Hello {name} as {filmName}
            </h1>
        </div>
    )
}

export default Greet