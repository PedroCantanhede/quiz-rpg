import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import { Home } from './pages/Home';
import { Game } from './pages/Game';
import { GameOver } from './pages/GameOver';

function App() {
  return (
    <GameProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/gameover" element={<GameOver />} />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
