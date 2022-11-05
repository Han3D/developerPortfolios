export class Skill {
  id: string;
  name: string;
  imageName: string;
  percentage: number;
  description: string;
  experience: string;
  clicked: boolean;

  constructor(
    id: string,
    name: string,
    imageName: string,
    percentage: number,
    description: string,
    experience: string
  ) {
    this.id = id;
    this.name = name;
    this.imageName = imageName;
    this.percentage = percentage;
    this.description = description;
    this.experience = experience;
    this.clicked = false;
  }
}
