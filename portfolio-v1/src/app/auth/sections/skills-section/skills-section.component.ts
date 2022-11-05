import { Component, OnInit } from '@angular/core';
import { Skill } from './skill/skill.model';


// Skills
const currentSkills: Skill[] = [
  new Skill("html", "HTML", "html.png", 10, "dummy__description", 2),
  new Skill("css", "CSS", "css.png", 10, "dummy__description", 2),
  new Skill("js", "Javascript", "js.png", 10, "dummy__description", 2),
  new Skill("sql", "SQL", "sql.png", 10, "dummy__description", 2),
  new Skill("angular", "Angular", "angular.png", 10, "dummy__description", 2),
  new Skill("react", "React", "react.png", 10, "dummy__description", 2),
  new Skill("go", "Go", "Go-Logo_Blue.png", 10, "dummy__description", 2),
  new Skill("csharp", "C#", "c--4.png", 10, "dummy__description", 2),
  new Skill("swift", "Swift", "swift.png", 10, "dummy__description", 2),
  new Skill("git", "Git", "git.png", 10, "dummy__description", 2),
  new Skill("java", "Java", "java.png", 10, "dummy__description", 2),
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
