import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss']
})
export class LeftSideComponent implements OnInit {

  categories = [
    {
      name: 'Lịch sử dòng họ',
      link: '/chinguyentai/lich-su'
    },
    {
      name: 'Doanh nhân nổi tiếng',
      link: '/chinguyentai/doanh-nhan'
    },
    {
      name: 'Hoạt động dòng họ',
      link: '/'
    },
    {
      name: 'Văn hóa đời sống',
      link: '/'
    },
    {
      name: 'Sách viết về dòng họ',
      link: '/chinguyentai/tin-tuc'
    },
    {
      name: 'Tác giả tác phẩm dòng họ',
      link: '/chinguyentai/tin-tuc'
    },
    {
      name: 'Cúng tiến công đức',
      link: '/chinguyentai/tin-tuc'
    },
    {
      name: 'Kết nối dòng họ',
      link: '/chinguyentai/lien-he'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
