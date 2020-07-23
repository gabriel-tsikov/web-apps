import { Component, OnInit } from '@angular/core';
import { MyVolumesService } from './services/my-volumes.service';
import { Router } from '@angular/router';
import { IVolume } from '../my-volume/volume.model';

@Component({
  selector: 'app-my-volumes',
  templateUrl: './my-volumes.component.html',
  styleUrls: ['./my-volumes.component.css'],
})
export class MyVolumesComponent implements OnInit {
  volumes: IVolume[];

  constructor(
    private volumesService: MyVolumesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.volumesService.getVolumes().subscribe((data) => {
      this.volumes = Object.values(data);
    });
  }

  removeVolumes($volume: IVolume): void {
    this.volumesService.deleteVolumes($volume).subscribe();
    let index = this.volumes.indexOf($volume);

    if (index !== -1) {
      this.volumes.splice(index, 1);
    }
  }
}
