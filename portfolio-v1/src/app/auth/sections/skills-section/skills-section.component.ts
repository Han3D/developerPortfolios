import { Component, OnInit } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';
import { Skill } from './skill/skill.model';


// Skills
const currentSkills: Skill[] = [
  new Skill("html", "HTML", "html.png", 85, "dummy__description", "3+"),
  new Skill("css", "CSS", "css.png", 90, "dummy__description", "3+"),
  new Skill("js", "Javascript", "js.png", 70, "dummy__description", "1.5+"),
  new Skill("sql", "SQL", "sql.png", 75, "dummy__description", "4+"),
  new Skill("angular", "Angular", "angular.png", 75, "dummy__description", "1.5+"),
  new Skill("react", "React", "react.png", 30, "dummy__description", "0.2"),
  new Skill("go", "Go", "Go-Logo_Blue.png", 70, "dummy__description", "1+"),
  new Skill("csharp", "C#", "c--4.png", 20, "dummy__description", "0.2"),
  new Skill("swift", "Swift", "swift.png", 35, "dummy__description", "0.5"),
  new Skill("git", "Git", "git.png", 60, "dummy__description", "3+"),
  new Skill("java", "Java", "java.png", 65, "dummy__description", "2+"),
  new Skill("php", "PHP", "php.png", 55, "dummy__description", "1+"),
];

@Component({
  selector: 'app-skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss']
})
export class SkillsSectionComponent implements OnInit {
  currentSkills = currentSkills;

  constructor() { }

  ngOnInit(): void {
    // VanillaTilt.init(document.querySelector('.vTilt') as any);
  }

  onSelectSkill(skillID: string) {
    const selectedSkill = currentSkills.find((skill) => skill.id === skillID);
    // console.log("✏️ ~ onSelectSkill ~ selectedSkill", selectedSkill);
    if (selectedSkill !== undefined) {
      // set all other selections to false;
      // currentSkills.map(skill => skill.clicked = false);
      selectedSkill.clicked = !selectedSkill.clicked;
    }
  }
}
