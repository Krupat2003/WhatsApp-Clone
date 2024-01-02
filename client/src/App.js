// import logo from './logo.svg';
// import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';

// components 
import Messenger from './components/Messenger';
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '897705387576-09nmlhtgmh4pnob2vk3j92tov5rb89fv.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider >
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider >
  );
}

export default App;
