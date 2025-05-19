import Layout from '@/js/Layouts/Layout';
import { Link } from '@inertiajs/inertia-react';

function Home({posts}) 
{
	// console.log(posts);
	return (
		<>
		<main>
			<h1 className="title">Home </h1>
			{posts.data.map(post =>  (
				<div key={post.id} className="p-4 mb-4 bg-white rounded shadow">
					<span>{new Date(post.created_at).toLocaleString()}</span>
					<p>{post.body}</p>	
				</div>
			))}
			</main>
			<footer className=''>
				{posts.links.map(link =>  (
					// <p>{link.label}</p>
					link.url ?
					<Link 
					key={link.label} 
					href={link.url} 
					dangerouslySetInnerHTML={{ __html: link.label}}
					className={`p-2 m-2 text-base ${link.active ? 'text-blue-600 font-bold' : 'text-black'}`}
					/>
					:
					<span 
					key={link.label} 
					dangerouslySetInnerHTML={{ __html: link.label}}
					className={`p-2 m-2 text-base ${link.active ? 'text-blue-600 font-bold' : 'text-gray-400'}`}></span>
				))}
			</footer>
		</>
	)
}

Home.layout = (page) => <Layout children={page} /> // inertia let as do this 
export default Home;