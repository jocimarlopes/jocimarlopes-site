import { NgModule } from "@angular/core";
import { IonicModule } from "@ionic/angular";
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { AboutComponent } from "./about/about.component";
import { EducationComponent } from "./education/education.component";
import { SkillsComponent } from "./skills/skills.component";
import { FooterComponent } from "./footer/footer.component";
import { ExperienceComponent } from "./experience/experience.component";
import { InterestsComponent } from "./interests/interests.component";
import { AppsComponent } from "./apps/apps.component";

@NgModule({
    declarations: [HeaderComponent, 
        AboutComponent, 
        EducationComponent, 
        SkillsComponent, 
        FooterComponent, 
        ExperienceComponent,
        InterestsComponent,
        AppsComponent
    ],
    imports: [IonicModule, 
        CommonModule],
    exports: [HeaderComponent, 
        AboutComponent, 
        EducationComponent, 
        SkillsComponent, 
        FooterComponent, 
        ExperienceComponent,
        InterestsComponent,
        AppsComponent
    ]
})

export class ComponentsModule {

    constructor() {}
}