
import qs from 'qs'

const About = ({location}) => {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';
    console.log(query);
    return (
        <div>
            <h1> About </h1>
            <p>About this page</p>
            {showDetail && <p>Show detail enabled!</p>}
        </div>
    );
};

export default About;