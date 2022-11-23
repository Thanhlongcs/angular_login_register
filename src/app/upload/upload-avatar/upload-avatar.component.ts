import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference,} from '@angular/fire/storage';


@Component({
  selector: 'app-upload-avatar',
  templateUrl: './upload-avatar.component.html',
  styleUrls: ['./upload-avatar.component.scss']
})
export class UploadAvatarComponent implements OnInit {

  selectFile: File;
  urlFile: string;
  checkUpload = false;
  fileInFireBase: AngularFireStorageReference;
  @Output()
  urlFromFireBase = new EventEmitter<string>();


  constructor(private afService: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  onChangeFile($event) {
    console.log('event---', $event);
    this.selectFile = $event.target.files[0];
  }

  upload() {
    this.checkUpload = true;
    this.fileInFireBase = this.afService.ref(this.selectFile.name);
    this.fileInFireBase.put(this.selectFile).then(data => {
      return data.ref.getDownloadURL(); //tra ve 1 link firebase
    }).then(url => {
      this.checkUpload = false;
      this.urlFile = url;
      this.urlFromFireBase.emit(this.urlFile);
      return this.urlFile;
    }).catch(error => {
      `upload file failed! ${error}`;
    });

  }

}
