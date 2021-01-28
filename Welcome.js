import React, { Component } from 'react'

class Welcome extends Component {
    render() {
        const { name, filmName } = this.props
        // const { state1, state2 } = this.state
        return (
            <h1>
                Welcome {name} as {filmName}
            </h1>
        )
    }
}

export default Welcome