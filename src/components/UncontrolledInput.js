import React from 'react'

export default class UncontrolledInput extends React.Component {

    handleSubmit = event => {
        event.preventDefault()
        const firstName = event.target.children[0].value
        const lastName = event.target.children[1].value
        this.sendFormDataSomewhere({ firstName, lastName })
    }

    render() {
        return(
            <form onSubmit = { event => this.handleSubmit(event) } >

            </form>
        )
     }
}