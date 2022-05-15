export class Filme {
  id?: string;
  codebar: number;
  title: string;
  duration: number;
  rating: number;
  gender: string;
  //genderID: string;

  constructor(codebar: number, title: string, duration: number, rating: number, gender: string) {
    this.codebar = codebar;
    this.title = title;
    this.duration = duration;
    this.rating = rating;
    this.gender = gender;
    //this.genderID = '';
  }
}
