import Layout from "../components/Layout/Layout";
import Carrito from "../pages/Carrito/Carrito";
import CompraTerminada from "../pages/Carrito/CompraTerminada";

import Home from '../pages/Home'

const routes = [
	{
		path: '/',
		component: Layout,
		exact: false,
		routes: [
			{
				path: '/',
				component: Home,
				exact: true,
			},
			{
				path: '/carrito',
				component: Carrito,
				exact: true,
			},
			{
				path: '/finalizada',
				component: CompraTerminada,
				exact: true,
			},
			{
				component: ""
			}
		]
	}
];

export default routes;