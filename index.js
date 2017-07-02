import './style';
import { Component } from 'preact';

import FacebookShareButton from './components/FacebookShareButton';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<FacebookShareButton />
			</div>
			
		);
	}
}
