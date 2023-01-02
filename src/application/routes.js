import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../pages/home';
import Discover from '../pages/discover';
import Join from '../pages/join';

const Router = () => (
    <BrowserRouter>
        <Routes>   
            <Route index element={<Home/>} />
            <Route path="/discover/" element={<Discover/>} />
            <Route path="/join/" element={<Join/>} />
             { /* Es muy recomendable añadir esta ruta para obtener un mensaje de error en el caso de que la ruta no exista. De lo contrario, si la ruta no existe llegaremos a una página en blanco */}    
            <Route path="*" element={<div>Error 404!! Página no encontrada</div> } />
        </Routes>
    </BrowserRouter>
);

export default Router;