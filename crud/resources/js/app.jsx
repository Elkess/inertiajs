import './bootstrap';
import {createInertiaApp} from '@inertiajs/inertia-react';
import { createRoot } from 'react-dom/client';
import '@/css/app.css';
import Layout from '@/js/Layouts/Layout';

createInertiaApp({
	resolve: name =>{
		const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
		let page = pages [`./Pages/${name}.jsx`]
		page.default.layout = 
			page.default.layout || (page => <Layout children={page}/>);
		return page
	}, 
	setup({ el, App, props}) {
		const root = createRoot(el);
		root.render(<App {...props} />);
	}
})
