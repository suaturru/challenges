import {css, StyleSheet} from "aphrodite";
import React from 'react';
import {useSelector} from "react-redux";
import Station from "./Station";

const StationsList = ({extraStyle}) => {
    const {stations} = useSelector(state => state.main.data),
        {generalInfo} = useSelector(state => state.main),
        styles = StyleSheet.create({
            container: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 300px))",
                gridTemplateRows: "none",
                justifyContent: "center",
                gridRowGap: 5,
                gridColumnGap: 5
            }
        });

    return (
        <div className={css(extraStyle)}>
            <div className={css(styles.container)}>
                {stations.map((station) =>
                    <Station key={station.station_id} station={{...station, ...generalInfo[station.station_id]}}/>)
                }
            </div>
        </div>
    );
};

export default StationsList;
