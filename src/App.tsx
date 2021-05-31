import { Provider } from "react-redux";
import { AuthProvider } from "./hooks/auth";
import Routes from "./routes";
import { store } from './store'
import GlobalStyles from "./styles/GlobalStyles";

function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Provider store={store}>
          <Routes />
          <GlobalStyles />
        </Provider>
      </AuthProvider> 
    </div>
  );
}

export default App;
