import { Provider } from "react-redux";
import { AuthProvider } from "./hooks/auth";
import Routes from "./routes";
import { store } from './store'

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Provider store={store}>
          <Routes />
        </Provider>
      </AuthProvider> 
    </div>
  );
}

export default App;
