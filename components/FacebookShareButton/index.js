import { h, Component } from 'preact';
import style from './style';

export default class FacebookShareButton extends Component {
    render() {
        return (
            <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io" target="_blank">
                <div class={style.shareButton} >
                    <span class={style.imgSpan}>
                        <img src="https://www.facebook.com/rsrc.php/v3/yP/r/Wq8eKb91kes.png" />
                    </span>
                    <span>Share</span>
                </div>

                <div class={style.iframeContainer}>
                </div>

            </a>
            
        );
    }

    openPopup() {
        let iframeContainer = this.base.querySelector('.'+style.iframeContainer);
        let iframe = document.createElement('IFRAME');
        iframe.src = 'https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fsharingbuttons.io';
        iframeContainer.appendChild(iframe);
    }
}