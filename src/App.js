import React from 'react';
import PropTypes from "prop-types";



class App extends React.Component {
    state = {
        isLoading: true,
        movies : []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((current) => { return { isLoading: !current.isLoading } });
        }, 3000);
    }
    render() {
        console.log(this.state)
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading" : "we are ready"}
        </div>;
    }
}


export default App;
