import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <div style = {{backgroundColor : 'yellow'}}>
            <ul>
                <br />
                <br />
                <br />
                <Link to='/posts'><li>Click Here To View Data In Table !</li></Link>
                <br />
                <br />
                <br />
                <Link to='/apiJson'><li>Click Here To View Data !</li></Link>
                <br />
                <br />
                <br />
                <Link to='/home'><li>Go Back To Home Page !</li></Link>
                <br />
                <br />
                <br />
            </ul>
        </div>
        
     );
}
export default NavBar;