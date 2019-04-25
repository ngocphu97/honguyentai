import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { TreeService } from '../service/tree.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit {
  @Input() parent: any;

  id = '';
  member: any;

  data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  constructor(private route: ActivatedRoute, private service: TreeService) { }

  ngOnInit() {
    // this.id = this.route.snapshot.paramMap.get('id');
    // this.getMemberById(this.id);
  }

  // getMemberById(id) {
  //   const treeName = 'profileChi1';
  //   this.service.getNodeById(id).subscribe((data) => {
  //     const mem = data.result;
  //     this.pipeMember(mem);
  //     this.data$.next(mem);
  //   }
  //   );
  // }

  // pipeMember(mem) {
  //   console.log(mem);
  //   this.member = mem;
  // }

  // onDeleteMember(HTMLid) {
  //   console.log(HTMLid);
  //   this.service.deleteNode(HTMLid);
  // }
}
