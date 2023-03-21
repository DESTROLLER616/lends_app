import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Section } from 'src/models/section.interface';
import { AlertsService } from 'src/services/alerts/alerts.service';
import { SectionsService } from 'src/services/sections/sections.service';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.page.html',
  styleUrls: ['./sections.page.scss'],
})
export class SectionsPage implements OnInit {

  constructor(private sectionService: SectionsService, private alert: AlertsService) { }

  image: string = ''

  section: Section = {
    _id: '',
    title: '',
    url: ''
  }

  ngOnInit() {
  }

  cleanForm(form: NgForm) {
    return form.reset()
  }

  addSection(form: NgForm) {
    this.sectionService.createSection(form.value).subscribe(
      res => {
        this.cleanForm(form)
        this.alert.createSection()
      }, err => {
        console.error(err);
      }
    )
  }

  updateSection() {

  }

  showImage(image: string) {
    this.image = image
  }

}
