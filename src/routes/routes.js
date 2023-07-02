import config from '../config';

// Layouts
// import { HeaderOnly } from '~/layouts';

// Pages
import Home from '../pages/Home/Home';
import PhimBo from '../pages/PhimBo/PhimBo';
import PhimLe from '../pages/PhimLe/PhimLe';
import QuocGia from '../pages/QuocGia/QuocGia';
import Search from '../pages/Search/Search';
import TheLoai from '../pages/TheLoai/TheLoai';
import Movie from '../pages/Movie/Movie';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.phimbo, component: PhimBo },
    { path: config.routes.phimle, component: PhimLe },
    { path: config.routes.quocgia, component: QuocGia },
    { path: config.routes.theloai, component: TheLoai },
    { path: config.routes.search, component: Search },
    { path: config.routes.movie, component: Movie },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
