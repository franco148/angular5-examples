import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';



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
  exercises: Observable<any>;

  constructor(public trainingService: TrainingService,
              private db: AngularFirestore) { 
  }

  ngOnInit() {
    // this.exercises = this.trainingService.getAvailableExercises();    
    // this.db.collection('availableExercises').valueChanges().subscribe(result => {
    //   console.log(result);
    // });

    this.exercises = this.db.collection('availableExercises').valueChanges();
  }

  onStartTraining(form: NgForm) {
    // this.trainingStart.emit();
    this.trainingService.startExercise(form.value.training);
  }
}
