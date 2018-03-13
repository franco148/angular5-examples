import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styles: []
})
export class ProtectedComponent implements OnInit {

  profile: any;

  constructor(private authSvr:AuthService) {

  }

  ngOnInit() {

    if (this.authSvr.userProfile) {
     this.profile = this.authSvr.userProfile;
     console.log(this.profile);
   } else {
     this.authSvr.getProfile((err, profile) => {
       this.profile = profile;
       console.log(this.profile);
     });
   }
  }

}
