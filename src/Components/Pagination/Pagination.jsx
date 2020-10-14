import React, { Component } from 'react'

class Pagination extends Component {
    state = {
        isEditabele: false
    }
    render() {
        const {next,
            prev,
            isPrev,
            isNext,
            totalPage,
            currentPage,
            goToPage,
            handleChange
            } = this.props
        return (
            <div className="d-flex align-items-center my-5">
                <button className="btn btn-warning" disabled={!isPrev} onClick = {() => {
                    prev()
                }}>Previous</button>
                <div className="flex-grow-1 text-center">
                {this.state.isEditabele ? (
                    <input type="number" value={currentPage} onChange={(e)=> handleChange(e.target.value)} onKeyPress={(e)=> {
                        if(e.key==="Enter") {
                            goToPage();
                            this.setState({isEditabele: false})
                           
                        }
                    }} name="" id=""/>
                ):(
                    <p style={{ userSelect: "none", lineHeight: "1.1" }}  title="Double tap to jump page" onDoubleClick={() => {
                        this.setState({
                            isEditabele: !this.state.isEditabele
                        })
                    }} >
                        {currentPage} of {totalPage}
                        <br/>
                        <small>double tap to edit</small>
                    </p>
                )}
                </div>
                
                <button className="btn btn-warning ml-auto" disabled={!isNext} onClick={()=> {
                    next()
                }}>Next</button>
            </div>
        )
    }
}

export default Pagination
