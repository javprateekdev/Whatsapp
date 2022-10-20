
import Messenger from './components/Messenger';
import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
function App() {
  
 ;
  return (
    <GoogleOAuthProvider clientId= "671782580044-kt0iuf5oahrk960baaagc2hd073s2kmt.apps.googleusercontent.com">
   <AccountProvider>
   <Messenger />
   </AccountProvider>
   
    </GoogleOAuthProvider>
    
    
   
  );
}

export default App;
