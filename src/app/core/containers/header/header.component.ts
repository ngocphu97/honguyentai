import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigations = [
    {
      name: 'Trang chủ',
      link: 'trang-chu',
      children: []
    },
    {
      name: 'Lịch sử dòng họ',
      link: 'lich-su',
      children: [
        {
          name: 'Chi 1',
          link: 'chi-1'
        },
        {
          name: 'Chi 2',
          link: 'chi-1'
        },
        {
          name: 'Chi 3',
          link: 'chi-1'
        },
        {
          name: 'Chi 4',
          link: 'chi-1'
        },
        {
          name: 'Chi 5',
          link: 'chi-1'
        },
        {
          name: 'Chi 6',
          link: 'chi-1'
        },
        {
          name: 'Chi 7',
          link: 'chi-1'
        },
        {
          name: 'Chi 8',
          link: 'chi-1'
        },
        {
          name: 'Chi 9',
          link: 'chi-1'
        },
        {
          name: 'Chi 10',
          link: 'chi-1'
        },
        {
          name: 'Chi 11',
          link: 'chi-1'
        },
        {
          name: 'Chi 12',
          link: 'chi-1'
        },
      ]
    },
    {
      name: 'Phả ký',
      link: 'pha-ky',
      children: [
        {
          name: 'Chi 1',
          link: 'chi-1'
        },
        {
          name: 'Chi 2',
          link: 'chi-1'
        },
        {
          name: 'Chi 3',
          link: 'chi-1'
        },
        {
          name: 'Chi 4',
          link: 'chi-1'
        },
        {
          name: 'Chi 5',
          link: 'chi-1'
        },
        {
          name: 'Chi 6',
          link: 'chi-1'
        },
        {
          name: 'Chi 7',
          link: 'chi-1'
        },
        {
          name: 'Chi 8',
          link: 'chi-1'
        },
        {
          name: 'Chi 9',
          link: 'chi-1'
        },
        {
          name: 'Chi 10',
          link: 'chi-1'
        },
        {
          name: 'Chi 11',
          link: 'chi-1'
        },
        {
          name: 'Chi 12',
          link: 'chi-1'
        },
      ]
    },
    {
      name: 'Phả đồ',
      link: 'pha-do',
      children: [
        {
          name: 'Chi 1',
          link: 'chi-1'
        },
        {
          name: 'Chi 2',
          link: 'chi-1'
        },
        {
          name: 'Chi 3',
          link: 'chi-1'
        },
        {
          name: 'Chi 4',
          link: 'chi-1'
        },
        {
          name: 'Chi 5',
          link: 'chi-1'
        },
        {
          name: 'Chi 6',
          link: 'chi-1'
        },
        {
          name: 'Chi 7',
          link: 'chi-1'
        },
        {
          name: 'Chi 8',
          link: 'chi-1'
        },
        {
          name: 'Chi 9',
          link: 'chi-1'
        },
        {
          name: 'Chi 10',
          link: 'chi-1'
        },
        {
          name: 'Chi 11',
          link: 'chi-1'
        },
        {
          name: 'Chi 12',
          link: 'chi-1'
        },
      ]
    },
    {
      name: 'Doanh nhân đổi tiếng',
      link: 'doanh-nhan',
      children: []
    },
    {
      name: 'Thư viện ảnh',
      link: 'thu-vien-anh',
      children: []
    },
    {
      name: 'Tin tức',
      link: 'tin-tuc',
      children: []
    },
    {
      name: 'Liên hệ',
      link: 'lien-he',
      children: []
    },
    {
      name: 'Giải đáp thắc mắc',
      link: 'thac-mac',
      children: []
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
