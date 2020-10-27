import {css, StyleSheet} from "aphrodite";
import React from 'react';

const Station = ({station}) => {
    const styles = StyleSheet.create({
        container: {
            maxWidth: 300,
            maxHeight: 300,
            border: "1px solid red",
            textAlign: "center"
        },
        name: {
            color: "blue",
            fontWeight: "bold"
        },
        address: {
            color: "black"
        },
        available: {
            color: "green"
        }
    });

    return (
        <div className={css(styles.container)}>
            <div className={css(styles.name)}>
                {station.name}
            </div>
            <div className={css(styles.address)}>
                {`Address: ${station.address}`}
            </div>
            <div className={css(styles.available)}>
                {`Available bikes: ${station.num_bikes_available}`}
            </div>
            <div className={css(styles.available)}>
                {`Available bikes: ${station.num_docks_available}`}
            </div>
        </div>
    );
};

export default Station;
