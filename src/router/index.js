import React from "react";
import { Redirect } from "react-router-dom";

const WEDiscover = React.lazy(() => import ("@/pages/discover"))
const WERecommend = React.lazy(_ => import("../pages/discover/c-pages/recommend"));
const WERanking = React.lazy(_ => import ("../pages/discover/c-pages/ranking"))
const WESongs = React.lazy(_ => import("../pages/discover/c-pages/songs"));
const WEDjradio = React.lazy(_ => import ("../pages/discover/c-pages/djradio"))
const WEArtist = React.lazy(_ => import("../pages/discover/c-pages/artist"));
const WEAlbum = React.lazy(_ => import ("../pages/discover/c-pages/album"))
const WEPlayer = React.lazy(_ => import("../pages/player"));

const WEMine = React.lazy(_ => import ("@/pages/mine"))
const WEFriend = React.lazy(_ => import("@/pages/friend"));


const routes = [
  {
    path: "/",
    exact: true,
    render: () => (
      <Redirect to="/discover"/>
    )
  },
  {
    path: "/discover",
    component: WEDiscover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend"/>
        )
      },
      {
        path: "/discover/recommend",
        component: WERecommend
      },
      {
        path: "/discover/ranking",
        component: WERanking
      },
      {
        path: "/discover/songs",
        component: WESongs
      },
      {
        path: "/discover/djradio",
        exact: true,
        component: WEDjradio
      },
      {
        path: "/discover/artist",
        component: WEArtist
      },
      {
        path: "/discover/album",
        component: WEAlbum
      },
      {
        path: "/discover/player",
        component: WEPlayer
      }
    ]
  },
  {
    path: "/mine",
    component: WEMine
  },
  {
    path: "/friend",
    component: WEFriend
  },
];

export default routes;