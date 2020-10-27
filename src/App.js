import React from 'react';
import GridStyles from "./styles/styles";
import {css, StyleSheet} from "aphrodite";
import UpdatedAt from "./components/UpdatedAt";
import StationsList from "./components/StationsList";

const App = () => {
    const styles = StyleSheet.create({
        container: {
            ...GridStyles.define("max-content 20px max-content", "auto"),
            padding: 20
        },
        updatedAt: GridStyles.setRowCol(1, 1),
        stations: GridStyles.setRowCol(3, 1),
    });

    return (
        <React.Fragment>
            <div className={css(styles.container)}>
                <UpdatedAt extraStyle={styles.updatedAt}/>
                <StationsList extraStyle={styles.stations}/>
            </div>
        </React.Fragment>
    );
};

export default App;
