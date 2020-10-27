import React from 'react';
import {css, StyleSheet} from "aphrodite";

const TextDiv = ({text, extraStyle, onClick}) => {
    const styles = StyleSheet.create({
        container: {
            whiteSpace: "pre-line"
        }
    });

    return (
        <div dangerouslySetInnerHTML={{__html: text}}
             className={css(styles.container, extraStyle)}
             onClick={() => onClick && onClick()}/>
    );
};

export default TextDiv;
