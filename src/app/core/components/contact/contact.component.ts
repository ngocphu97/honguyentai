import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  familyContact = [
    {
      contactName: 'Gia đình ông A',
      address: 'Địa chỉ: 37 Thống Nhất, Phường Tân Phú, Quận Tân Phú, TP.HCM',
      phoneNumber: '0919.053.369',
      email: 'chinguyentai@gmail.com',
      // tslint:disable-next-line:max-line-length
      mapLink: '"https://maps.google.com/maps?q=university%20of%20san%20francisco&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      contactName: 'Gia đình ông B',
      address: 'Địa chỉ: 37 Thống Nhất, Phường Tân Phú, Quận Tân Phú, TP.HCM',
      phoneNumber: '0919.053.369',
      email: 'chinguyentai@gmail.com',
      // tslint:disable-next-line:max-line-length
      mapLink: 'https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15677.922604148289!2d106.66164161977538!3d10.774451099999993!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1547272579755'
    },
    {
      contactName: 'Gia đình ông C',
      address: 'Địa chỉ: 37 Thống Nhất, Phường Tân Phú, Quận Tân Phú, TP.HCM',
      phoneNumber: '0919.053.369',
      email: 'chinguyentai@gmail.com',
      // tslint:disable-next-line:max-line-length
      mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.695813859935!2d106.6324281634559!3d10.791011135885222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eab75aa197b%3A0xd494f7f7a7808ff9!2zVGjhu5FuZyBOaOG6pXQsIFBoxrDhu51uZyBUw6JuIFRow6BuaCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1539935973277'
    },
    {
      contactName: 'Gia đình ông D',
      address: 'Địa chỉ: 37 Thống Nhất, Phường Tân Phú, Quận Tân Phú, TP.HCM',
      phoneNumber: '0919.053.369',
      email: 'chinguyentai@gmail.com',
      // tslint:disable-next-line:max-line-length
      mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.695813859935!2d106.6324281634559!3d10.791011135885222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eab75aa197b%3A0xd494f7f7a7808ff9!2zVGjhu5FuZyBOaOG6pXQsIFBoxrDhu51uZyBUw6JuIFRow6BuaCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1539935973277'
    },
    {
      contactName: 'Gia đình ông E',
      address: 'Địa chỉ: 37 Thống Nhất, Phường Tân Phú, Quận Tân Phú, TP.HCM',
      phoneNumber: '0919.053.369',
      email: 'chinguyentai@gmail.com',
      // tslint:disable-next-line:max-line-length
      mapLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.695813859935!2d106.6324281634559!3d10.791011135885222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752eab75aa197b%3A0xd494f7f7a7808ff9!2zVGjhu5FuZyBOaOG6pXQsIFBoxrDhu51uZyBUw6JuIFRow6BuaCwgVMOibiBQaMO6LCBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1539935973277'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
