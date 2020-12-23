import SignIn from "./components/auth/signin";
import Dashboard from "./components/dashboard";
import Employee from "./components/employee-manage";
import Chart from "./components/chart";
import Show from "./Show";

export default [
    { path: '/', exact: true, component: SignIn },
    { path: '/dashboard', component: Show },
    // { path: '/employee', exact: true, component: Employee },
    // { path: '/chart', exact: true, component: Chart }
]