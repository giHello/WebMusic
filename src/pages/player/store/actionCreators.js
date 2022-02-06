import { getSongDetail, getLyric } from '@/services/player'

import { getRandomNumber } from '@/utils/math-utils'
import { parseLyric } from '@/utils/parse-lyric';

import * as actionTypes from './constants';

const changeCurrentSongAction = (currentSong) => ({
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong
  });

const changePlayListAction = (playList) => ({
    type: actionTypes.CHANGE_PLAY_LIST,
    playList
})

const changeCurrentSongIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
    index
})

const changeLyricListAction = (lyricList) => ({
    type: actionTypes.CHANGE_LYRIC_LIST,
    lyricList
})

export const changeSequenceAction = (sequence) => ({
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
})

export const changeCurrentLyricIndexAction = (index) => ({
    type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
    index
})

export const changeCurrentIndexAndSongAction = (tag) => {
    return (dispatch, getState) => {
        const playList = getState().getIn(["player", "playList"])
        const sequence = getState().getIn(["player", "sequence"]);
        let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);

        switch(sequence) {
            case 1:
            let randomIndex = getRandomNumber(playList.length)
            while(randomIndex === currentSongIndex) {
                randomIndex = getRandomNumber(playList.length)
            }
            currentSongIndex = randomIndex
            break
            default:
            currentSongIndex += tag
            if(currentSongIndex >= playList.length) {
                currentSongIndex = 0
            }
            if(currentSongIndex < 0) {
                currentSongIndex = playList.length - 1
            }
        }
        
      const currentSong = playList[currentSongIndex];
      dispatch(changeCurrentSongAction(currentSong))
      dispatch(changeCurrentSongIndexAction(currentSongIndex))
      dispatch(getLyricAction(currentSong.id))
    }
}

export const getSongDetailAction = (ids) => {
    return (dispatch, getState) => {

        const playList = getState().getIn(["player", "playList"])
        const songIndex = playList.findIndex(song => song.id === ids) 

        let  song = null
        if(songIndex !== -1) {
            dispatch(changeCurrentSongIndexAction(songIndex))
            song = playList[songIndex]
            dispatch(changeCurrentSongAction(song))
            dispatch(getLyricAction(song.id))
        }
        else {
            getSongDetail(ids).then( res => {
                song = res.songs && res.songs[0];
                if (!song) return;

                const newPlayList = [...playList]
                newPlayList.push(song)

                dispatch(changePlayListAction(newPlayList))
                dispatch(changeCurrentSongIndexAction(newPlayList.length - 1))
                dispatch(changeCurrentSongAction(song))      
                dispatch(getLyricAction(song.id))  
            })     
        }   
    }
}


export const getLyricAction = (id) => {
    return dispatch => {
        getLyric(id).then(res => {
            const lyric = res.lrc.lyric
            const lyricList = parseLyric(lyric)
            dispatch(changeLyricListAction(lyricList))
        } )
    }
}
