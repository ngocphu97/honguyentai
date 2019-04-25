import { Component, OnInit } from '@angular/core';

import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  annouce: any;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;

    emailjs.sendForm('honguyentai', 'honguyentaitemplate', contactForm, 'user_sRHy4wAHAQVGsGMJGq1tW')
      .then((response) => {
        this.annouce = response;
      }, (err) => {
        this.annouce = err;
      });
  }


}
