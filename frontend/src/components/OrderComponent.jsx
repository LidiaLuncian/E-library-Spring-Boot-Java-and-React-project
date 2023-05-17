import React, {Component} from "react";

class OrderComponent extends Component{

    constructor(props) {
        super(props);

        this.state = {
            placedOrderId: 0,
            client: '',
            cart: [],
            value: 0.0
        }
    }

    render() {
        return(
            <div>

            </div>
        )
    }

}

export default OrderComponent