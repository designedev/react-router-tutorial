import {withRouter} from 'react-router-dom';

const WithRouterExample =({ location, match, history }) => {
    return (
        <div>
            <h4>Location</h4>
            <textarea
            value={JSON.stringify(location, null, 2)}
            rows={10}
            cols={40}
            readOnly
            />
            <h4>Match</h4>
            <textarea
            value={JSON.stringify(match, null, 2)}
            rows={10}
            cols={40}
            readOnly
            />
            <button onClick={() => history.push('/')}>Go Home</button>
        </div>
    )
};

export default withRouter(WithRouterExample);