import { h, Component } from 'preact';
import style from './style';

export default class FacebookShareButton extends Component {
    render({url, ...props}) {
        return (
            <a href={"https://www.facebook.com/sharer/sharer.php?u=" +encodeURI(url)}
            target="_blank"
            class={style.shareButton}
            {...props}>
                    <span class={style.imgSpan}>
                        <img src="https://www.facebook.com/rsrc.php/v3/yP/r/Wq8eKb91kes.png" />
                    </span>
                    <span>Share</span>
            </a>
            
        );
    }
}