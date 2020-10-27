import {css, StyleSheet} from "aphrodite";
import React from 'react';

const Image = ({src, extraStyle, onClick}) => {
    const styles = StyleSheet.create({
        image: {
            userSelect: "none",
            "-webkit-user-drag": "none"
        }
    });

    return (
        <img src={src} className={css(styles.image, extraStyle)} onClick={() => onClick && onClick()} alt=""/>
    );
};

export default Image;
