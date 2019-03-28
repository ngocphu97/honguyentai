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
      link: ''
    },
    {
      name: 'Doanh nhân nổi tiếng',
      link: ''
    },
    {
      name: 'Hoạt động dòng họ',
      link: ''
    },
    {
      name: 'Văn hóa đời sống',
      link: ''
    },
    {
      name: 'Sách viết về dòng họ',
      link: ''
    },
    {
      name: 'Tác giả tác phẩm dòng họ',
      link: ''
    },
    {
      name: 'Cúng tiến công đức',
      link: ''
    },
    {
      name: 'Kết nối dòng họ',
      link: ''
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
