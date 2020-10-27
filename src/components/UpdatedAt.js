import {css, StyleSheet} from "aphrodite";
import React from 'react';
import moment from 'moment';
import {useSelector} from "react-redux";

const UpdatedAt = ({extraStyle}) => {
    const {updatedAt} = useSelector(state => state.main),
        styles = StyleSheet.create({
            container: {}
        });

    return (
        <div className={css(styles.container, extraStyle)}>
            {updatedAt ? `Updated at ${moment(updatedAt).format("YYYY-MM-DD hh:mm:ss")}` : "Waiting for an update..."}
        </div>
    );
};

export default UpdatedAt;
