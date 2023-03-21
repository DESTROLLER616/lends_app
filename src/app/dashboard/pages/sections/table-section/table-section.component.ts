import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs';
import { Section } from 'src/models/section.interface';
import { SectionsService } from 'src/services/sections/sections.service';

@Component({
  selector: 'app-table-section',
  templateUrl: './table-section.component.html',
  styleUrls: ['./table-section.component.scss'],
})
export class TableSectionComponent  implements OnInit {

  constructor(private sectionService: SectionsService) { }

  image: string = ''

  isHidden: boolean = true

  ngOnInit() {
    this.getSection()
  }

  section: Section = {
    _id: '',
    title: '',
    url: ''
  }

  sections: Section[] = []

  imagePreview(url: string) {
    this.image = url

    console.log(this.image);
    
  }

  closeUpdate() {
    this.isHidden = true

    this.section = {
      _id: '',
      title: '',
      url: ''
    }
  }

  openUpdate() {
    this.isHidden = false
  }

   getSection() {
    this.sectionService.getSections()
      .pipe(
        take(1)
      ).subscribe( (res:any) => {
        const {data} = res

        this.sections = [...data]

        console.log(this.sections);
      }, (err) => console.log(err)
      )
  }

  updateSection(id: any, title: string, url: string) {
    this.section = {
      _id: id,
      title,
      url
    }

    this.openUpdate()

    this.image = this.section.url

    console.log(this.section);
    
  }

}
