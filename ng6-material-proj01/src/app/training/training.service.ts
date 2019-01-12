import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Subject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { Exercise } from './exercise.model';
import { UIService } from '../shared/ui.service';
import * as fromTraining from './training.reducer';
import * as UI from '../shared/ui.actions';
import * as Training from './training.actions';


@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();

  private fbSubs: Subscription[] = [];

  private availableExercises: Exercise[] = [];

  private runningExercise: Exercise;

  constructor(private db: AngularFirestore, private uiService: UIService, private store: Store<fromTraining.State>) { }

  fetchAvailableExercises() {
    // return this.availableExercises.slice();
    this.store.dispatch(new UI.StartLoading());
    this.fbSubs.push(this.db.collection('availableExercises').snapshotChanges()
    .pipe(map(docArray => {
      // throw(new Error());
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          // name: (doc.payload.doc.data() as Exercise).name,
          // duration: (doc.payload.doc.data() as Exercise).duration,
          // calories: (doc.payload.doc.data() as Exercise).calories
          ...doc.payload.doc.data()
        } as Exercise;
      });
    })).subscribe((exercises: Exercise[]) => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new Training.SetAvailableTrainings(exercises));
      // this.availableExercises = exercises;
      // this.exercisesChanged.next([...this.availableExercises]);
    }, error => {
      this.store.dispatch(new UI.StopLoading());
      // this.uiService.loadingStateChanged.next(false);
      this.uiService.showSnackbar('Fetching Exercises failed, please try again later', null, 3000);
      this.exercisesChanged.next(null);
    }));
  }

  startExercise(selectedId: string) {
    // const selectedExercise = this.availableExercises.find(exc => exc.id === selectedId);
    // this.runningExercise = selectedExercise;
    // this.exerciseChanged.next({ ...this.runningExercise });
    this.store.dispatch(new Training.StartTraining(selectedId));
  }

  getRunningExercise() {
    return { ... this.runningExercise };
  }

  completeExercise() {

    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    // this.runningExercise = null;
    // this.exerciseChanged.next(null);
    this.store.dispatch(new Training.StopTraining());
  }

  cancelExercise(progress: number) {

    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    // this.runningExercise = null;
    // this.exerciseChanged.next(null);
    this.store.dispatch(new Training.StopTraining());
  }

  fetchCompletedOrCancelledExercises() {
    this.fbSubs.push(this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
      // this.finishedExercisesChanged.next(exercises);
      this.store.dispatch(new Training.SetFinishedTrainings(exercises));
    }, error => {
      // console.log(error);
    }));
  }

  cancelSubscriptions() {
    this.fbSubs.forEach(sub => sub.unsubscribe);
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }
}
