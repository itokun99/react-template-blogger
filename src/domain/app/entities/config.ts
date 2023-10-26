export type AppConfig = {
  app: {
    author: string;
    defaultImage: string;
    logo: string;
  };
  blogger: {
    blogId: string;
    blogUrl: string;
  };
  google: {
    apiKey: string;
    cse: {
      url: string;
    };
  };
  disqus: {
    username: string;
  };
  addThis: {
    id: string;
  };
  menu: {
    header: Array<{
      id: number;
      title: string;
      url: string;
    }>;
  };
  author: Array<{
    id: string;
    name: string;
    email: string;
    title: string;
    username: string;
    nickname: string;
    profilePic: string;
    coverPic: string;
    socialLinks: Array<{
      id: number;
      name: string;
      title: string;
      url: string;
      username: string;
    }>;
  }>;
};
