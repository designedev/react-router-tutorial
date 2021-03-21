import WithRouterExample from './WithRouterExample'

const data = {
    person1: {
        name: "person one",
        description: "The man who like money"
    },
    person2: {
        name: "person two",
        description: "The kman who dislike money"
    }
};

const Profile = ({match}) => {
    const {username} = match.params;
    const profile = data[username];
    if (!profile) {
        return <div> Not exist username</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterExample />
        </div>
    )
}

export default Profile;