import { Map } from 'immutable';

import * as actionTypes from './constants'

const defaultState = Map({
    playList: [{
        "name": "有何不可",
        "id": 167876,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000007916021",
        "fee": 8,
        "v": 51,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 16953,
            "name": "自定义",
            "picUrl": "https://p2.music.126.net/KyBR4ZDYFlzQJE_uyvfjpA==/109951166118671647.jpg",
            "tns": [],
            "pic_str": "109951166118671647",
            "pic": 109951166118671650
        },
        "dt": 241840,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9675799,
            "vd": -21099
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5805497,
            "vd": -18400
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3870346,
            "vd": -16900
        },
        "a": null,
        "cd": "1",
        "no": 3,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 51,
        "songJumpInfo": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 22036,
        "rtype": 0,
        "rurl": null,
        "mv": 0,
        "publishTime": 1231516800000
    },
    {
        "name": "雅俗共赏",
        "id": 411214279,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": null,
        "fee": 8,
        "v": 33,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 34749138,
            "name": "青年晚报",
            "picUrl": "https://p2.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
            "tns": [],
            "pic": 3431575794705764
        },
        "dt": 249621,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9987177,
            "vd": -22200
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5992323,
            "vd": -19600
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3994896,
            "vd": -17800
        },
        "a": null,
        "cd": "1",
        "no": 2,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 0,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 33,
        "songJumpInfo": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "mst": 9,
        "cp": 22036,
        "rtype": 0,
        "rurl": null,
        "mv": 5302271,
        "publishTime": 1461723397683
    },
    {
        "name": "素颜",
        "id": 167827,
        "pst": 0,
        "t": 0,
        "ar": [
            {
                "id": 5771,
                "name": "许嵩",
                "tns": [],
                "alias": []
            },
            {
                "id": 8022,
                "name": "何曼婷",
                "tns": [],
                "alias": []
            }
        ],
        "alia": [],
        "pop": 100,
        "st": 0,
        "rt": "600902000009525588",
        "fee": 8,
        "v": 65,
        "crbt": null,
        "cf": "",
        "al": {
            "id": 16949,
            "name": "素颜",
            "picUrl": "https://p1.music.126.net/LMyITvYRS7NsgA9lYUKpqg==/109951164179134667.jpg",
            "tns": [],
            "pic_str": "109951164179134667",
            "pic": 109951164179134670
        },
        "dt": 238733,
        "h": {
            "br": 320000,
            "fid": 0,
            "size": 9551455,
            "vd": -2
        },
        "m": {
            "br": 192000,
            "fid": 0,
            "size": 5730890,
            "vd": -2
        },
        "l": {
            "br": 128000,
            "fid": 0,
            "size": 3820607,
            "vd": -2
        },
        "a": null,
        "cd": "1",
        "no": 1,
        "rtUrl": null,
        "ftype": 0,
        "rtUrls": [],
        "djId": 0,
        "copyright": 2,
        "s_id": 0,
        "mark": 8192,
        "originCoverType": 1,
        "originSongSimpleData": null,
        "tagPicList": null,
        "resourceState": true,
        "version": 65,
        "songJumpInfo": null,
        "single": 0,
        "noCopyrightRcmd": null,
        "rtype": 0,
        "rurl": null,
        "mst": 9,
        "cp": 14026,
        "mv": 0,
        "publishTime": 1282060800000
    }
    ],
    currentSongIndex: 0,
    currentSong: {},
    sequence: 0 ,
    lyricList: [],
    currentLyricIndex: 0
});

function reducer(state = defaultState, action) {
    switch(action.type) {
        case actionTypes.CHANGE_CURRENT_SONG:
            return state.set("currentSong", action.currentSong);
        case actionTypes.CHANGE_PLAY_LIST:
            return state.set("playList", action.playList);
        case actionTypes.CHANGE_CURRENT_SONG_INDEX:
            return state.set("currentSongIndex", action.index)
        case actionTypes.CHANGE_SEQUENCE:
            return state.set("sequence", action.sequence)
        case actionTypes.CHANGE_LYRIC_LIST:
            return state.set("lyricList", action.lyricList)
        case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
            return state.set("currentLyricIndex", action.index)
        default:
            return state;
    }
}
export default reducer;