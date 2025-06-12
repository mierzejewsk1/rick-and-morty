export type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type ApiResponse<T> = {
  info: {
    count: number | undefined;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};
