export interface Item {
  id: number;
  title: string;
  desctription: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
