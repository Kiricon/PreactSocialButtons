import './style';
import { Component } from 'preact';

import FacebookShareButton from './components/FacebookShareButton';
import TwitterShareButton from './components/TwitterShareButton';

export default class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello, World!</h1>
				<FacebookShareButton url="http://sharingbuttons.io" style="margin:3px;"/>
				<TwitterShareButton url="http://sharingbuttons.io" style="margin:3px" />
			</div>
			
		);
	}
}
