export interface videoGames {
  title: string;
  description: string;
  image: string [];
  category: string [];
  hovered: boolean ;
  comentary : string [];	 
  view: number;
}

export interface Comentary {
  user: string;
  comment: string;
  like: number;
  dislike: number;
  date: Date;
}