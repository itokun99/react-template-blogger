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
  sectionConfig: {
    homepage: {
      top: Array<{
        id: number;
        title: string;
        type: string;
        show: boolean;
        data?: {
          label: string;
        };
      }>;
      main: Array<{
        id: number;
        title: string;
        type: string;
        show: boolean;
      }>;
      side: Array<{
        id: number;
        title: string;
        type: string;
        show: boolean;
        data?: Array<{
          id: number;
          type: string;
          image?: string;
          url?: string;
          content?: string;
          data?: Array<{
            id: number;
            image: string;
            url: string;
          }>;
        }>;
      }>;
    };
    postDetail: {
      side: Array<{
        id: number;
        title: string;
        type: string;
        show: boolean;
      }>;
    };
  };
};
