export type Article = {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  // tagList: [];
  description: string;
  // author: {
  //   username: prabhu23;
  //   bio: null;
  //   image: https://static.productionready.io/images/smiley-cyrus.jpg;
  //   following: false
  // };
  favorited: boolean;
  favoritesCount: number
};
