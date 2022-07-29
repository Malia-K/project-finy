
import { Route, Routes } from "react-router-dom";

import {Main} from '../components/main/mainPage';
import {Game1} from '../components/content/gameOne';
import { FirstGame } from "../components/content/gameOne/game";
import { Game2 } from "../components/content/gameTwo";
import { SecondGame } from "../components/content/gameTwo/game";


export const RouteList = () => (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/game1" element={<Game1 />} />
      <Route path="/game1start" element={<FirstGame />} />
      <Route path="/game2" element={<Game2 />} />
      <Route path="/game2start" element={<SecondGame />} />

    </Routes>
);

  