import config from '../config';

// Layouts
// import { HeaderOnly } from '~/layouts';

// Pages
import Home from '../pages/Home';
import PhimBo from '../pages/PhimBo';
import PhimLe from '../pages/PhimLe';
import QuocGia from '../pages/QuocGia';
import Search from '../pages/Search';
import TheLoai from '../pages/TheLoai';

// Public routes
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.phimbo, component: PhimBo },
    { path: config.routes.phimle, component: PhimLe },
    { path: config.routes.quocgia, component: QuocGia },
    { path: config.routes.theloai, component: TheLoai },
    { path: config.routes.search, component: Search },
];
const privateRoutes = [];
export { publicRoutes, privateRoutes };
