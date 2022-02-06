import React, { memo } from 'react'

import {
    PlayerWrapper,
    PlayerLeft,
    PlayerRight,
} from './style'

export default memo(function WEPlayer() {
    return (
        <PlayerWrapper>
            <div className="content wrap-v2">
                <PlayerLeft>
                    <h2>WEPlayerInfo</h2>
                </PlayerLeft>
                <PlayerRight>
                    <h2>WESimiPlaylist</h2>
                    <h2>WESimiSong</h2>            
                    <h2>Download</h2>          
                </PlayerRight>
            </div>
        </PlayerWrapper>
    )
})
