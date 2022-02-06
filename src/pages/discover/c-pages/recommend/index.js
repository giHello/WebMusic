import React, { memo } from 'react'

import WETopBanner from './c-cpns/top-banner'
import WEHotRecommend from './c-cpns/hot-recommend'
import WENewAlbum from './c-cpns/new-album'
import WERecommendRanking from './c-cpns/recommend-ranking'
import WEUserLogin from './c-cpns/user-login'
import WESettleSinger from './c-cpns/settle-singer'
import WEHotAnchor from './c-cpns/hot-anchor'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'

function WERecommend(props) {

  return (
    <RecommendWrapper>
      <WETopBanner/>
      <Content className = "wrap-v2">
        <RecommendLeft>
          <WEHotRecommend/>
          <WENewAlbum/>
          <WERecommendRanking/>
        </RecommendLeft>
        <RecommendRight>
          <WEUserLogin/>
          <WESettleSinger/>
          <WEHotAnchor/>
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
}
export default memo(WERecommend);
