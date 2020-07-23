import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { MyVolumesService } from '../my-volumes/services/my-volumes.service';
import { Router } from '@angular/router';
import { IVolume } from './volume.model';
@Component({
  selector: 'app-my-volume',
  templateUrl: './my-volume.component.html',
  styleUrls: ['./my-volume.component.css'],
})
export class MyVolumeComponent implements OnInit {
  @Input() volume: IVolume;
  localId: string;
  @ViewChild('inputBox') inputBox: ElementRef;
  @Output() removeVolumes = new EventEmitter<IVolume>();

  constructor(private volService: MyVolumesService, private router: Router) {
    this.localId = sessionStorage.getItem('localId');
  }

  ngOnInit(): void {
    this.localId = sessionStorage.getItem('localId');
  }

  deleteVolume(): void {
    this.removeVolumes.emit(this.volume);
  }
}
