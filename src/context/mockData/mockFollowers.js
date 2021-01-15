// 20210115062953
// https://api.github.com/users/mcperera/followers

const mockFollowers = [
  {
    login: "atherdon",
    id: 1469198,
    node_id: "MDQ6VXNlcjE0NjkxOTg=",
    avatar_url: "https://avatars1.githubusercontent.com/u/1469198?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/atherdon",
    html_url: "https://github.com/atherdon",
    followers_url: "https://api.github.com/users/atherdon/followers",
    following_url:
      "https://api.github.com/users/atherdon/following{/other_user}",
    gists_url: "https://api.github.com/users/atherdon/gists{/gist_id}",
    starred_url: "https://api.github.com/users/atherdon/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/atherdon/subscriptions",
    organizations_url: "https://api.github.com/users/atherdon/orgs",
    repos_url: "https://api.github.com/users/atherdon/repos",
    events_url: "https://api.github.com/users/atherdon/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/atherdon/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "dmcshehan",
    id: 29309950,
    node_id: "MDQ6VXNlcjI5MzA5OTUw",
    avatar_url: "https://avatars2.githubusercontent.com/u/29309950?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/dmcshehan",
    html_url: "https://github.com/dmcshehan",
    followers_url: "https://api.github.com/users/dmcshehan/followers",
    following_url:
      "https://api.github.com/users/dmcshehan/following{/other_user}",
    gists_url: "https://api.github.com/users/dmcshehan/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/dmcshehan/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/dmcshehan/subscriptions",
    organizations_url: "https://api.github.com/users/dmcshehan/orgs",
    repos_url: "https://api.github.com/users/dmcshehan/repos",
    events_url: "https://api.github.com/users/dmcshehan/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/dmcshehan/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "simplesolutiondev",
    id: 48798703,
    node_id: "MDQ6VXNlcjQ4Nzk4NzAz",
    avatar_url: "https://avatars3.githubusercontent.com/u/48798703?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/simplesolutiondev",
    html_url: "https://github.com/simplesolutiondev",
    followers_url: "https://api.github.com/users/simplesolutiondev/followers",
    following_url:
      "https://api.github.com/users/simplesolutiondev/following{/other_user}",
    gists_url: "https://api.github.com/users/simplesolutiondev/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/simplesolutiondev/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/simplesolutiondev/subscriptions",
    organizations_url: "https://api.github.com/users/simplesolutiondev/orgs",
    repos_url: "https://api.github.com/users/simplesolutiondev/repos",
    events_url:
      "https://api.github.com/users/simplesolutiondev/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/simplesolutiondev/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "geekwolverine",
    id: 4777626,
    node_id: "MDQ6VXNlcjQ3Nzc2MjY=",
    avatar_url: "https://avatars1.githubusercontent.com/u/4777626?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/geekwolverine",
    html_url: "https://github.com/geekwolverine",
    followers_url: "https://api.github.com/users/geekwolverine/followers",
    following_url:
      "https://api.github.com/users/geekwolverine/following{/other_user}",
    gists_url: "https://api.github.com/users/geekwolverine/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/geekwolverine/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/geekwolverine/subscriptions",
    organizations_url: "https://api.github.com/users/geekwolverine/orgs",
    repos_url: "https://api.github.com/users/geekwolverine/repos",
    events_url: "https://api.github.com/users/geekwolverine/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/geekwolverine/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "QuidarSarhan",
    id: 18348217,
    node_id: "MDQ6VXNlcjE4MzQ4MjE3",
    avatar_url: "https://avatars0.githubusercontent.com/u/18348217?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/QuidarSarhan",
    html_url: "https://github.com/QuidarSarhan",
    followers_url: "https://api.github.com/users/QuidarSarhan/followers",
    following_url:
      "https://api.github.com/users/QuidarSarhan/following{/other_user}",
    gists_url: "https://api.github.com/users/QuidarSarhan/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/QuidarSarhan/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/QuidarSarhan/subscriptions",
    organizations_url: "https://api.github.com/users/QuidarSarhan/orgs",
    repos_url: "https://api.github.com/users/QuidarSarhan/repos",
    events_url: "https://api.github.com/users/QuidarSarhan/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/QuidarSarhan/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "akhila-ariyachandra",
    id: 15926278,
    node_id: "MDQ6VXNlcjE1OTI2Mjc4",
    avatar_url: "https://avatars2.githubusercontent.com/u/15926278?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/akhila-ariyachandra",
    html_url: "https://github.com/akhila-ariyachandra",
    followers_url: "https://api.github.com/users/akhila-ariyachandra/followers",
    following_url:
      "https://api.github.com/users/akhila-ariyachandra/following{/other_user}",
    gists_url:
      "https://api.github.com/users/akhila-ariyachandra/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/akhila-ariyachandra/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/akhila-ariyachandra/subscriptions",
    organizations_url: "https://api.github.com/users/akhila-ariyachandra/orgs",
    repos_url: "https://api.github.com/users/akhila-ariyachandra/repos",
    events_url:
      "https://api.github.com/users/akhila-ariyachandra/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/akhila-ariyachandra/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "iamshz97",
    id: 33499387,
    node_id: "MDQ6VXNlcjMzNDk5Mzg3",
    avatar_url: "https://avatars3.githubusercontent.com/u/33499387?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/iamshz97",
    html_url: "https://github.com/iamshz97",
    followers_url: "https://api.github.com/users/iamshz97/followers",
    following_url:
      "https://api.github.com/users/iamshz97/following{/other_user}",
    gists_url: "https://api.github.com/users/iamshz97/gists{/gist_id}",
    starred_url: "https://api.github.com/users/iamshz97/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/iamshz97/subscriptions",
    organizations_url: "https://api.github.com/users/iamshz97/orgs",
    repos_url: "https://api.github.com/users/iamshz97/repos",
    events_url: "https://api.github.com/users/iamshz97/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/iamshz97/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "ChathukaLiyanage",
    id: 64010522,
    node_id: "MDQ6VXNlcjY0MDEwNTIy",
    avatar_url: "https://avatars1.githubusercontent.com/u/64010522?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/ChathukaLiyanage",
    html_url: "https://github.com/ChathukaLiyanage",
    followers_url: "https://api.github.com/users/ChathukaLiyanage/followers",
    following_url:
      "https://api.github.com/users/ChathukaLiyanage/following{/other_user}",
    gists_url: "https://api.github.com/users/ChathukaLiyanage/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/ChathukaLiyanage/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/ChathukaLiyanage/subscriptions",
    organizations_url: "https://api.github.com/users/ChathukaLiyanage/orgs",
    repos_url: "https://api.github.com/users/ChathukaLiyanage/repos",
    events_url:
      "https://api.github.com/users/ChathukaLiyanage/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/ChathukaLiyanage/received_events",
    type: "User",
    site_admin: false,
  },
  {
    login: "alxwndr",
    id: 10734450,
    node_id: "MDQ6VXNlcjEwNzM0NDUw",
    avatar_url: "https://avatars1.githubusercontent.com/u/10734450?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/alxwndr",
    html_url: "https://github.com/alxwndr",
    followers_url: "https://api.github.com/users/alxwndr/followers",
    following_url:
      "https://api.github.com/users/alxwndr/following{/other_user}",
    gists_url: "https://api.github.com/users/alxwndr/gists{/gist_id}",
    starred_url: "https://api.github.com/users/alxwndr/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/alxwndr/subscriptions",
    organizations_url: "https://api.github.com/users/alxwndr/orgs",
    repos_url: "https://api.github.com/users/alxwndr/repos",
    events_url: "https://api.github.com/users/alxwndr/events{/privacy}",
    received_events_url: "https://api.github.com/users/alxwndr/received_events",
    type: "User",
    site_admin: false,
  },
];

export default mockFollowers;
