import * as React from "react";
import './ErrorBoundary.css'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.log('Component Did Catch is triggered', errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <div className="error-image-wrapper"></div>;
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
