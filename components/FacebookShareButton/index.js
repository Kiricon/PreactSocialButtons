import { h, Component } from 'preact';
import style from './style';

export default class FacebookShareButton extends Component {
    render() {
        return (
            <div class={style.shareButton}>
                <span class={style.imgSpan}>
                    <img src="https://www.facebook.com/rsrc.php/v3/yP/r/Wq8eKb91kes.png" />
                </span>
                <span>Share</span>
            </div>
        );
    }
}