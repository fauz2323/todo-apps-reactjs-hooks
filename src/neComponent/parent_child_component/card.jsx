import React from "react";
import './style.css'

// const CardProduct = () => {
//     const [getState, setState] = useState({
//         order: 1
//     });

//     const handlerPlus = () => {
//         setState(({
//             order: getState.order + 1
//         }))
//     }

//     const handlerMinus = () => {
//         setState(({
//             order: getState.order - 1
//         }))

//     }

//     return (
//         <div>
//             <div className="container">
//                 <div className="card width m-4" >
//                     <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/04/09/3026907431.jpg" className="card-img-top" alt="..." />
//                     <div className="card-body">
//                         <h5 className="card-title">Product</h5>
//                         <p className="card-text"></p>
//                         <div className="row">
//                             <button className="btn btn-primary" onClick={handlerMinus}>-</button>
//                             <input type="text" value={getState.order} />
//                             <button className="btn btn-primary" onClick={handlerPlus}>+</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }


class Tests extends React.Component {
    state = {
        order: 2
    }

    onHandlerChangeParent = (value) => {
        this.props.onHandlerChange(value)
    }

    handlerPlus = () => {
        this.setState(
            {
                order: this.state.order + 1
            },
            () => {
                this.onHandlerChangeParent(this.state.order);

            }
        )
    }

    handlerMinus = () => {
        this.setState(
            {
                order: this.state.order - 1
            },
            () => {
                this.onHandlerChangeParent(this.state.order);

            }
        )


    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="card width m-4" >
                        <img src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2021/04/09/3026907431.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Product</h5>
                            <p className="card-text"></p>
                            <div className="row">
                                <button className="btn btn-primary" onClick={this.handlerMinus}>-</button>
                                <input type="text" readOnly value={this.state.order} />
                                <button className="btn btn-primary" onClick={this.handlerPlus}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Tests;