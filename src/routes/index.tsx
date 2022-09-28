import { useRoutes } from 'react-router-dom';
import Layout from "../layout";
import Home from "../pages/home";
// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
    return useRoutes([
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: 'home',
                    element: <Home />
                },
            ]
        }
    ]);
}
