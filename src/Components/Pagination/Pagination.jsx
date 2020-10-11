import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        isEditabele: false
    }
    render() {
        return (
            <div className="d-flex align-items-center my-5">
                <button className="btn btn-warning">Previous</button>
                <div className="flex-grow-1 text-center">
                {this.state.isEditabele ? (
                    <input type="number" value="1" name="" id=""/>
                ):(
                    <p style={{ userSelect: "none", lineHeight: "1.1" }}  title="Double tap to jump page" onDoubleClick={() => {
                        this.setState({
                            isEditabele: !this.state.isEditabele
                        })
                    }} >
                        {1} of {100}
                        <br/>
                        <small>double tap to edit</small>
                    </p>
                )}
                </div>
                
                <button className="btn btn-warning ml-auto">Next</button>
            </div>
        )
    }
}

export default Pagination
