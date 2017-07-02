import { h, Component } from 'preact';
import style from './style';

export default class TwitterShareButton {
    render() {
        return (
            <a href="https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Flocalhost%3A8080%2F&ref_src=twsrc%5Etfw&text=Hello%20world&tw_p=tweetbutton&url=http%3A%2F%2Flocalhost%3A8080%2F"
            target="_blank"
            class={style.twitterButton}>
                <i/>
            </a>
        );
    }
}