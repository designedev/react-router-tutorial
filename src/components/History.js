
import { Component } from 'react';

class History extends Component {
    handleGoBack = () => {
        this.unblock && this.unblock();
        this.props.history.goBack();
    }
    handleGoHome = () => {
        this.unblock && this.unblock();
        this.props.history.push('/');
    }
    componentDidMount() {
        this.unblock = this.props.history.block('are you sure to leave?');
    }
    componentWillUnmount() {
        if(this.unblock) {
            this.unblock();
        }
    }

    render() {
        return(
            <div>
                <button onClick={this.handleGoBack}>Back</button>
                <button onClick={this.handleGoHome}>Home</button>
            </div>
        )
    }
}
export default History;