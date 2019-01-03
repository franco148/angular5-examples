import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {

  // @Output() trainingStart = new EventEmitter<void>();
  exercises: Exercise[] = [];
  // exercises: Observable<Exercise[]>;
  exerciseSubscription: Subscription;
  // isLoading = false;
  isLoading$: Observable<boolean>;

  constructor(public trainingService: TrainingService,
              private db: AngularFirestore,
              private store: Store<{ui: fromRoot.State}>) {
  }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
    this.exerciseSubscription = this.trainingService.exercisesChanged.subscribe(exercises => {
      this.exercises = exercises;
      // this.isLoading = false;
    });
    // this.trainingService.fetchAvailableExercises();
    this.fetchExercises();
  }

  fetchExercises() {
    // this.isLoading = true;
    this.trainingService.fetchAvailableExercises();
  }

  onStartTraining(form: NgForm) {
    // this.trainingStart.emit();
    this.trainingService.startExercise(form.value.training);
  }

  ngOnDestroy() {
    if (this.exerciseSubscription) {
      this.exerciseSubscription.unsubscribe();
    }
  }
}
