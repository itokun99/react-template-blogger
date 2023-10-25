export interface AppConfig {
  app?: App;
  blogger?: Blogger;
  google?: Google;
  disqus?: Disqus;
  addThis?: AddThis;
  menu?: Menu;
}

interface App {
  author?: string;
  defaultImage?: string;
  logo?: string;
}

interface Blogger {
  blogId?: string;
  blogUrl?: string;
}

interface Google {
  apiKey?: string;
  cse?: Cse;
}

interface Cse {
  url?: string;
}

interface Disqus {
  username?: string;
}

interface AddThis {
  id?: string;
}

interface Menu {
  header: Header[];
}

interface Header {
  id: number;
  title: string;
  url: string;
}
