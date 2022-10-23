import { NgModule } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { LearningSectionComponent } from './learning-section/learning-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectComponent } from './projects-section/project/project.component';
import { SkillComponent } from './skills-section/skill/skill.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  exports: [
    HeroSectionComponent,
    SkillsSectionComponent,
    LearningSectionComponent,
    ProjectsSectionComponent,
    ContactSectionComponent,
  ],
  declarations: [
    HeroSectionComponent,
    SkillsSectionComponent,
    LearningSectionComponent,
    ProjectsSectionComponent,
    ProjectComponent,
    SkillComponent,
    ContactSectionComponent,
  ],
  providers: [],
})
export class SectionsModule {}
