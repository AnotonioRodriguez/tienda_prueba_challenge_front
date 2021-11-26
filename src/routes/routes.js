import Layout from "../components/Layout/Layout";

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
				component: ""
			}
		]
	}
];

export default routes;