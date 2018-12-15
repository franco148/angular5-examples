import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  exerciseChanged = new Subject<Exercise>();
  exercisesChanged = new Subject<Exercise[]>();
  finishedExercisesChanged = new Subject<Exercise[]>();

  // The following code is replaced with data get from Firebase.
  // private availableExercises: Exercise[] = [
  //   { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
  //   { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
  //   { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
  //   { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
  // ];

  private availableExercises: Exercise[] = [];

  private runningExercise: Exercise;
  // private finishedExercises: Exercise[] = [];

  constructor(private db: AngularFirestore) { }

  fetchAvailableExercises() {
    // return this.availableExercises.slice();
    this.db.collection('availableExercises').snapshotChanges()
    .pipe(map(docArray => {
      return docArray.map(doc => {
        return {
          id: doc.payload.doc.id,
          name: (doc.payload.doc.data() as Exercise).name,
          duration: (doc.payload.doc.data() as Exercise).duration,
          calories: (doc.payload.doc.data() as Exercise).calories
        };
      });
    })).subscribe((exercises: Exercise[]) => {
      this.availableExercises = exercises;
      this.exercisesChanged.next([...this.availableExercises]);
    });
  }

  startExercise(selectedId: string) {
    const selectedExercise = this.availableExercises.find(exc => exc.id === selectedId);
    this.runningExercise = selectedExercise;
    this.exerciseChanged.next({ ...this.runningExercise });
  }

  getRunningExercise() {
    return { ... this.runningExercise };
  }

  completeExercise() {
    // this.exercises.push({
    //   ...this.runningExercise,
    //   date: new Date(),
    //   state: 'completed'
    // });
    // this.runningExercise = null;
    // this.exerciseChanged.next(null);

    this.addDataToDatabase({
      ...this.runningExercise,
      date: new Date(),
      state: 'completed'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  cancelExercise(progress: number) {
    // this.exercises.push({
    //   ...this.runningExercise,
    //   duration: this.runningExercise.duration * (progress / 100),
    //   calories: this.runningExercise.calories * (progress / 100),
    //   date: new Date(),
    //   state: 'cancelled'
    // });

    this.addDataToDatabase({
      ...this.runningExercise,
      duration: this.runningExercise.duration * (progress / 100),
      calories: this.runningExercise.calories * (progress / 100),
      date: new Date(),
      state: 'cancelled'
    });
    this.runningExercise = null;
    this.exerciseChanged.next(null);
  }

  fetchCompletedOrCancelledExercises() {
    // return this.finishedExercises.slice();

    this.db.collection('finishedExercises').valueChanges().subscribe((exercises: Exercise[]) => {
      // this.finishedExercises = exercises;
      this.finishedExercisesChanged.next(exercises);
    });
  }

  private addDataToDatabase(exercise: Exercise) {
    this.db.collection('finishedExercises').add(exercise);
  }
}
