export class Filme {
  id?: number;
  codebar: number;
  title: string;
  duration: number;
  rating: number;
  gender: string;
  genderId: number;


  constructor(codebar: number, title: string, duration: number, rating: number, gender: string, genderId: number) {
    this.codebar = codebar;
    this.title = title;
    this.duration = duration;
    this.rating = rating;
    this.gender = gender;
    this.genderId = 0;
  }

}
