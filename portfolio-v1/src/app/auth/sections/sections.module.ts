import { NgModule } from '@angular/core';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { SkillsSectionComponent } from './skills-section/skills-section.component';
import { LearningSectionComponent } from './learning-section/learning-section.component';
import { ProjectsSectionComponent } from './projects-section/projects-section.component';
import { ProjectComponent } from './projects-section/project/project.component';
import { SkillComponent } from './skills-section/skill/skill.component';
import { SharedModule } from '../../shared/shared.module';
// import { SectionsComponent } from './sections.component';

@NgModule({
  imports: [SharedModule],
  exports: [],
  declarations: [
    HeroSectionComponent,
    SkillsSectionComponent,
    LearningSectionComponent,
    ProjectsSectionComponent,
    ProjectComponent,
    SkillComponent
  ],
  providers: [],
})
export class SectionsModule {}
