import Auth from './pages/Auth';
import Registration from './pages/Registration';
import Users from './pages/Users';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, USERS_ROUTE} from './utils/const';

export const authRoutes = [
    {
        path: USERS_ROUTE,
        Component: Users
    }
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: Registration
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    }
]