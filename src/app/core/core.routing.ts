import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';

import * as fromComponents from './components';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [{
      path: '',
      component: MainComponent
    }]
  },
  {
    path: 'chinguyentai',
    component: DashboardComponent,
    children: [
      {
        path: 'lich-su',
        component: fromComponents.GenealogyHistoryListComponent
      },
      {
        path: 'lich-su/:genealogyHistoryId',
        component: fromComponents.GenealogyHistoryComponent
      },
      {
        path: 'pha-ky',
        component: fromComponents.MemoirListComponent
      },
      {
        path: 'pha-ky/:memoirId',
        component: fromComponents.MemoirDetailComponent
      },
      {
        path: 'pha-do',
        component: fromComponents.FamilyTreeListComponent
      },
      {
        path: 'pha-do/:id',
        component: fromComponents.FamilyTreeComponent
      },
      {
        path: 'dia-do',
        component: fromComponents.MapComponent
      },
      {
        path: 'them-thanh-vien',
        component: fromComponents.TreeFormComponent
      },
      {
        path: 'chi-tiet/thanh-vien/:id',
        component: fromComponents.MemberDetailComponent
      },
      {
        path: 'doanh-nhan',
        component: fromComponents.EntrepreneursComponent
      },
      {
        path: 'doanh-nhan/:entrepreneursId',
        component: fromComponents.EntrepreneursDetailComponent
      },
      {
        path: 'thu-vien-anh',
        component: fromComponents.ImageLibComponent
      },
      {
        path: 'tin-tuc',
        component: fromComponents.NewsComponent
      },
      {
        path: 'tin-tuc/:id',
        component: fromComponents.NewsDetailComponent
      },
      {
        path: 'them-tin-tuc',
        component: fromComponents.NewsAddComponent
      },
      {
        path: 'lien-he',
        component: fromComponents.ContactComponent
      },
      {
        path: 'thac-mac',
        component: fromComponents.QuestionsComponent
      }
    ]
  },
];

