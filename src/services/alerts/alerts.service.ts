import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private alertController: AlertController) { }

  async deleteCategory(name: string, id:string){
    const alert = await this.alertController.create({
      header: `are you sure want to delete ${name}`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return false
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            return true
          },
        },
      ],
    });

    await alert.present();
  }

  async editCategory(id: any, name: string, description: string) {
    const alert = await this.alertController.create({
      header: 'Change any information',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'name',
          value: name,
          attributes: {
            minlength: 4,
          },
        },
        {
          placeholder: 'description',
          type: 'textarea',
          value: description
        },
      ],
    });

    await alert.present();
  }
}
