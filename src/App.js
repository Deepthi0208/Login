import Signinform from './components/Signinform';
import Logout from './components/Welcome';
import {connect} from 'react-redux';
function App({user}){
  return(
    <div>
      {user.username?<Logout/>:<Signinform/>}
    </div>
  );
}
const mapStateToProps = (state) => {
    return {
user:state.user.user
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      
    };
  }; 
  export default connect(mapStateToProps,mapDispatchToProps)(App);