import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Topics from './routes/Topics/topics.component';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="topics" element={<Topics />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;

() => {
  
}