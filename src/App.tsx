import { BrowserRouter as Router } from 'react-router-dom';
import MainPage from './pages/main-page/main-page';

function App() {
  return (
    <Router>
      <div>
        <MainPage />
      </div>
    </Router>
  );
}

export default App;
