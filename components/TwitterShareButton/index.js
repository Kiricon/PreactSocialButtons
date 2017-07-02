import { h, Component } from 'preact';
import style from './style';

export default class TwitterShareButton {
    render({url}) {
        return (
            <a href={"https://twitter.com/intent/tweet?url="+encodeURI(url)}
            target="_blank"
            class={style.twitterButton}>
                <i></i>
                <span>Tweet</span>
            </a>
        );
    }
}