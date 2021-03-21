import {Link, NavLink, Route} from 'react-router-dom';
import Profile from './Profile'

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };

    return (
        <div>
            <h3>User List</h3>
            <ul>
                <li>
                    <Link to="/profiles/person1">Person One</Link>
                </li>
                <li>
                    <Link to="/profiles/person2">Person Two</Link>
                </li>
            </ul>

            <h3>User List(Using NavLink)</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/person1">Person One</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/person2">Person Two</NavLink>
                </li>
            </ul>
            <Route path="/profiles" exact render={() => <div>Choose User!</div>} />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    )
}


export default Profiles;