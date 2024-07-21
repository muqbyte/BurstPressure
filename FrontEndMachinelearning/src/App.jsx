
import AppRoutes from './components/routes/index'
import './App.css'


import AuthProvider from 'react-auth-kit';

import createStore from 'react-auth-kit/createStore';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});


function App() {
 

  return (
    <AuthProvider store={store}>
    <AppRoutes/>

    </AuthProvider>
  )
}

export default App
