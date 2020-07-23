import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyVolumesService } from '../my-volumes/services/my-volumes.service';
import { IVolume } from '../my-volume/volume.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  volume: IVolume;
  volumeForm: FormGroup;
  localId: string;

  constructor(
    private myVolumeService: MyVolumesService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('book')) {
      this.volume = JSON.parse(sessionStorage.getItem('book'));

      this.volumeForm = this.fb.group({
        id: [`${this.volume.id}`, Validators.required],
        title: [`${this.volume?.volumeInfo?.title}`, Validators.required],
        authors: [`${this.volume?.volumeInfo?.authors}`, Validators.required],
        publisher: [
          `${this.volume?.volumeInfo?.publisher}`,
          Validators.required,
        ],
        publishedDate: [
          `${this.volume?.volumeInfo?.publishedDate}`,
          Validators.required,
        ],
        pageCount: [
          `${this.volume?.volumeInfo?.pageCount}`,
          Validators.required,
        ],
        thumbnail: [
          `${this.volume?.volumeInfo?.imageLinks?.thumbnail} `,
          Validators.required,
        ],
      });
    } else {
      this.volumeForm = this.fb.group({
        id: [``, Validators.required],
        title: [``, Validators.required],
        authors: [``, Validators.required],
        publisher: [``, Validators.required],
        publishedDate: [``, Validators.required],
        pageCount: [``, Validators.required],
        thumbnail: [``, Validators.required],
      });
    }
  }

  cancel(): void {
    this.router.navigate(['my-volumes']);
    sessionStorage.removeItem('book');
  }
  editVolume(): void {
    this.volume = {
      id: this.volumeForm.value.id,
      volumeInfo: {
        title: this.volumeForm.value.title,
        authors: this.volumeForm.value.authors.split(/, /),
        publisher: this.volumeForm.value.publisher,
        publishedDate: this.volumeForm.value.publishedDate,
        pageCount: this.volumeForm.value.pageCount,
        imageLinks: {
          thumbnail: this.volumeForm.value.thumbnail,
        },
      },
    };
    this.myVolumeService.setVolumes(this.volume).subscribe();
    sessionStorage.removeItem('book');
    this.router.navigate(['my-volumes']);
  }
}
