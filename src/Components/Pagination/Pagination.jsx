import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        isEditabele: false
    }
    render() {
        return (
            <div className="d-flex align-items-center my-5">
                <button className="btn btn-warning">Previous</button>
            </div>
        )
    }
}

export default Pagination
