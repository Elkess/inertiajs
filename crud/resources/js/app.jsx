import './bootstrap';
import {createInertia} from '@inertiajs/inertia-react';
import { createRoot } from 'react-dom/client';

createInertia({
	resolve: name =>{
		const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
		return pages[`./Pages/${name}.jsx`]
	}, 
	setup({ el, App, props}) {
		createRoot(el,render(<App {...props} />))
	}
})