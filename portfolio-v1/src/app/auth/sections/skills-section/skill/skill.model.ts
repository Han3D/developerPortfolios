export class Skill {
  id: string;
  name: string;
  imageName: string;
  percentage: number;
  description: string;
  experience: number;

  constructor(
    id: string,
    name: string,
    imageName: string,
    percentage: number,
    description: string,
    experience: number
  ) {
    this.id = id;
    this.name = name;
    this.imageName = imageName;
    this.percentage = percentage;
    this.description = description;
    this.experience = experience;
  }
}
