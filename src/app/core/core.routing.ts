import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { MainComponent } from './components/main/main.component';
import { GenealogyHistoryComponent } from './components/genealogy-history/genealogy-history.component';
import { MapComponent } from './components/map/map.component';
import { MemberDetailComponent } from './components/member-detail/member-detail.component';
import { EntrepreneursComponent } from './components/entrepreneurs/entrepreneurs.component';
import { ImageLibComponent } from './components/image-lib/image-lib.component';
import { NewsComponent } from './components/news/news.component';
import { NewsDetailComponent } from './components/news-detail/news-detail.component';
import { NewsAddComponent } from './components/news-add/news-add.component';
import { ContactComponent } from './components/contact/contact.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { FamilyTreeComponent } from './components/family-tree/family-tree.component';
import { TreeFormComponent } from './components/tree-form/tree-form.component';
import { FamilyTreeListComponent } from './components/family-tree-list/family-tree-list.component';
import { GenealogyHistoryListComponent } from './components/genealogy-history-list/genealogy-history-list.component';

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
        component: GenealogyHistoryListComponent
      },
      {
        path: 'lich-su/:id',
        component: GenealogyHistoryComponent
      },
      {
        path: 'pha-ky',
        component: GenealogyHistoryComponent
      },
      {
        path: 'pha-do',
        component: FamilyTreeListComponent
      },
      {
        path: 'pha-do/:id',
        component: FamilyTreeComponent
      },
      {
        path: 'dia-do',
        component: MapComponent
      },
      {
        path: 'them-thanh-vien',
        component: TreeFormComponent
      },
      {
        path: 'chi-tiet/thanh-vien/:id',
        component: MemberDetailComponent
      },
      {
        path: 'doanh-nhan',
        component: EntrepreneursComponent
      },
      {
        path: 'thu-vien-anh',
        component: ImageLibComponent
      },
      {
        path: 'tin-tuc',
        component: NewsComponent
      },
      {
        path: 'tin-tuc/:id',
        component: NewsDetailComponent
      },
      {
        path: 'them-tin-tuc',
        component: NewsAddComponent
      },
      {
        path: 'lien-he',
        component: ContactComponent
      },
      {
        path: 'thac-mac',
        component: QuestionsComponent
      }
    ]
  },
];

