import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';


import WEThemeHeaderRCM from '@/components/theme-header-rcm';
import WETopRanking from '@/components/top-ranking'
import { RankingWrapper } from './style';
import { getTopListAction } from '../../store/actionCreators';

export default memo(function WERecomendRanking() {
    // redux hooks
    const { upRanking, newRanking, originRanking } = useSelector(state => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
    }), shallowEqual);
    const dispatch = useDispatch();
  
    // other hooks
    useEffect(() => {
      dispatch(getTopListAction(0));
      dispatch(getTopListAction(2));
      dispatch(getTopListAction(3));
    }, [dispatch]);
  
    return (
      <RankingWrapper>
        <WEThemeHeaderRCM title="榜单" />
        <div className="tops">
          <WETopRanking info={upRanking}/>
          <WETopRanking info={newRanking}/>
          <WETopRanking info={originRanking}/>
        </div>
      </RankingWrapper>
    )
  })