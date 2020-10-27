import Config from "../config/Config";

const MediaQuery = {
    mobile: (styles) => {
        return {
            [`@media screen and (max-width: ${Config.styles.MEDIA_QUERY_MOBILE}px)`]: {...styles}
        }
    },
    backgroundMobile: (styles) => {
        return {
            [`@media screen and (max-width: ${Config.styles.MEDIA_QUERY_BACKGROUND}px)`]: {...styles}
        }
    },
    cards: (styles) => {
        return {
            [`@media screen and (max-width: ${Config.styles.MEDIA_QUERY_CARDS}px)`]: {...styles}
        }
    }
};

export default MediaQuery;
