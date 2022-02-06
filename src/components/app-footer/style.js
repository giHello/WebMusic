import styled from 'styled-components';

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;
  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }
  .info {
    .police-logo {
      width: 14px;
      height: 14px;
      background-size: cover;
      display: inline-block;
      margin-right: 2px;
      vertical-align: -2px;
      background-image: url(https://s2.music.126.net/style/web2/img/3rd/police.png?ffaa8c767edd199136176ebac273f0ea)
    }
  }
`

export const FooterRight = styled.ul`
  display: flex;

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(https://s2.music.126.net/style/web2/img/foot_enter_new.png?47530b8324abbfbec488fc5c26f52729);
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: 50px 370px;
    }
    :nth-child(2) .link {
      background-position: -60px 82px;
    }
    :nth-child(3) .link {
      background-position: 50px -36px;
    }
    :nth-child(4) .link {
      background-position: -110px 455px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(https://s2.music.126.net/style/web2/img/foot_enter_tt.png?4d7b7bb7e2110974a56660a7ff6e3777);
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: 2px -65px;
    }
    :nth-child(2) .title {
      background-position: 1px -1px;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 5px -38px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: 0px -53px;
      margin-top: 7px;
    }
  }
`
