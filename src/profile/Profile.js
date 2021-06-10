import PropTypes from 'prop-types';
import './main.css';
// import aot from './profile/aot.jpg';


export default function Profile(props) {
    return(
        <div className="container">
            <div className="wrapper">
                <div className="one">
                    <h3>Adviser:</h3>
                </div>
                <div className="two">
                    <input type="text" className="form-control" placeholder="Search"></input>
                </div>
                <div className="three">
                    <button type="button" className="btn btn-outline-primary" onClick={e=>props.handleName(e)}>Sign in</button>
                </div>
                <div className="four">
                <img src='/Mountains.jpg' alt="background pic"/>
                </div>
                <div className="five">
                    <div>
                        {props.children}
                    </div>
                </div>
                <div className="six">
                    <h3>Hi, {props.fullName}</h3>
                    <p>Welcome to GoMyCode</p>
                </div>
                <div className="seven"></div>
                <div className="eight">
                    <p>
                        your bio her {props.bio}
                    </p>
                    phone number: 0xxx xx xxx <br />
                    email: wael@GoMyCode.com <br />
                </div>
                <div className="nine">
                    <iframe src="https://www.youtube.com/watch?v=V-QO-KO90iQ&list=PLPxbbTqCLbGE5AihOSExAa4wUM-P42EIJ&index=1" title="reactjs" allow allowFullScreen></iframe>
                </div>
                <div className="ten">
                Floating in the sea of ​​treachery
                </div>
            </div>
            
            
            
            
        </div>
    );
}

Profile.defaultProps = {
    fullName : 'Anonymous',
    bio : 'Floating in the sea of ​​treachery',
    profission : 'Front-end Developer'
}

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string,
    profission : PropTypes.string
}