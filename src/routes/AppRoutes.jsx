import MainLayout from "../components/layouts/mainLayout"
import AboutPage from "../pages/AboutPage"
import HomePage from "../pages/HomePage"
import SkillsPage from "../pages/SkillsPage"
const AppRoutes = [
    {
        name: 'main',
        path: '/',
        component: MainLayout,
        key: "main",
        routes: [
            {
            key: "home",
            name: 'home',
            path: '/',
            index: true,
            requireAuth: false,
            component: HomePage ,
            },
            {
                key: "about",
                name: 'about',
                path: '/about',
                component: AboutPage
            },
            {
                key: "skills",
                name: 'skills',
                path: '/skills',
                component: SkillsPage
            },
        ]
    },
    {
        key: "404",
        name: '404',
        path: '*',
        component: () => <p>about page</p>
    }
]
export default AppRoutes

