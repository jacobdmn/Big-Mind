/// User Class
export class USER {
  userId: number;
  userName: string;
  fullName: string;
  age: number;
  userAvatar: string;
  location: string;

  constructor(
    userId: number,
    userName: string,
    fullName: string,
    age: number,
    userAvatar: string,
    location: string
  ) {
    this.userId = userId;
    this.userName = userName;
    this.fullName = fullName;
    this.age = age;
    this.userAvatar = userAvatar;
    this.location = location;
  }
}
/// Story Class
export class STORY {
  storyId: number;
  storySrc: string;
  userId: number;

  constructor(storyId: number, storySrc: string, userId: number) {
    this.storyId = storyId;
    this.storySrc = storySrc;
    this.userId = userId;
  }
}
/// SCREAM CLASS
export class SCREAM {
  screamId: number;
  userId: number;
  screamContent: { text: string; img?: string; location?: string };
  createdAt: string;

  constructor(
    screamId: number,
    userId: number,
    screamContent: {
      text: string;
      img?: string;
      location?: string;
    },
    createdAt: string
  ) {
    this.screamId = screamId;
    this.userId = userId;
    this.screamContent = screamContent;
    this.createdAt = createdAt;
  }
}
/// Users database
export const USERS = [
  new USER(
    100,
    "jacob.dmn",
    "Jacob Dmn",
    23,
    "./imgs/users/jacob_dmn/avatar/jacob_dmn.jpeg",
    "Bay Area, SF"
  ),
  new USER(
    20,
    "moha.dmn",
    "Moha Dmn",
    19,
    "./imgs/users/moha_dmn/avatar/moha_dmn.jpg",
    "Brooklyn, NY"
  ),
  new USER(
    3,
    "zino.bacha3a",
    "Zino Rappeur",
    20,
    "./imgs/users/zino_bacha3a/avatar/zino_bacha3a.jpg",
    "Manhattan, NY"
  ),
];
/// Stories database
export const STORIES = [
  new STORY(
    198,
    "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    20
  ),
  new STORY(
    298,
    "https://images.unsplash.com/photo-1608159477202-8a0e27f807b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    100
  ),
  new STORY(
    212,
    "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
    3
  ),
];

/// currentUser
export const CURRENT_USER = USERS[0];
/// userFriends
export const USER_FRIENDS: number[] = [];
/// userInvitations
export const USER_INVITATIONS = [20, 3];
/// User Screams
export const SCREAMS = [
  new SCREAM(
    1,
    20,
    {
      text: "this is the first scream using Redux! From Moha",
      img: "https://i.ytimg.com/vi/jkdtIcuTMsA/maxresdefault.jpg",
      location: "Manhattan, NYC",
    },
    "Jan 13"
  ),
  new SCREAM(
    234,
    100,
    {
      text: "this is the first scream using Redux! From Jacob, This was one of the most beautiful days in my life, Maybe one of the most memorizable in my entire life",
      img: "https://images.unsplash.com/photo-1608159477202-8a0e27f807b4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmVhdXRpZnVsJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      location: "Bay Area, SF",
    },
    "Apr 10"
  ),
  new SCREAM(
    433,
    3,
    {
      text: "this is the first scream using Redux! From Zino",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Above_Gotham.jpg/1200px-Above_Gotham.jpg",
      location: "Brooklyn, NYC",
    },
    "Mai 2"
  ),
];
