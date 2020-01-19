import React from "react";


export class Container extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {

        const n = this.props.ncounters != null ? this.props.ncounters : 1;

        return (
            <div>
                <h4>Counters</h4>
                {

                }
            </div>
        );
    }
}