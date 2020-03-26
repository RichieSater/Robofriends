import React from 'react';
import { render } from 'react-dom';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }

    componendDidCatch(error, info) {
        this.setState({hasError: true})
    }


render() {
    if (this.state.hasError) {
        return <h1>Oops. That is not good</h1>
    }
    return this.props.children
}

}
export default ErrorBoundary;

