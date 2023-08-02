import Home from "../pages/Home/Home";
import Settings from "../pages/Settings/Settings";
import Welcome from "../pages/Welcome/Welcome";

export const RoutesData = [
    {
        path: '/settings',
        element: Settings,
        id: 1
    },
    {
        path: '/application',
        element: Home,
        id: 2
    },
    {
        path: '/welcome',
        element: Welcome,
        id: 3
    }
]