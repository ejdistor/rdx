import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: "2002", duration: "4:05" },
        { title: "Sunflower", duration: "2:25" },
        { title: "I Want To Break Free", duration: "3:24" },
        { title: "Bohemian Rhapsody", duration: "5:26" }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong: selectedSongReducer
});