import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit {

  // @Output() trainingStart = new EventEmitter<void>();
  // exercises: Exercise[] = [];
  exercises: Observable<Exercise[]>;

  constructor(public trainingService: TrainingService,
              private db: AngularFirestore) { 
  }

  ngOnInit() {
    // this.exercises = this.trainingService.getAvailableExercises();    
    // this.db.collection('availableExercises').valueChanges().subscribe(result => {
    //   console.log(result);
    // });

    // First approach, this does not bring ID information from firestore
    // this.exercises = this.db.collection('availableExercises').valueChanges();

    // The following gets the metadata.
    this.exercises = this.db.collection('availableExercises').snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          name: doc.payload.doc.data().name,
          duration: doc.payload.doc.data().duration,
          calories: doc.payload.doc.data().calories
        }
      })
    }));
  }

  onStartTraining(form: NgForm) {
    // this.trainingStart.emit();
    this.trainingService.startExercise(form.value.training);
  }
}
