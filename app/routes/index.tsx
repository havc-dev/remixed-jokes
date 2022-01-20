import { Link, LinksFunction } from "remix";
import stylesUrl from "../styles/index.css";

export const links: LinksFunction = () => {
	return [{ rel: "stylesheet", href: stylesUrl }];
};

export default function IndexRoute() {
	return (
		<>
			<h1>Hello Index Route</h1>
			<div className='links'>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
					<li>
						<Link to='/jokes'>Jokes</Link>
					</li>
				</ul>
			</div>
		</>
	);
}
