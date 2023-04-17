import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DogHouse } from 'src/app/models/dog-house';
import { DoggoService } from 'src/app/services/doggo.service';


@Component({
  selector: 'app-dogs-list',
  templateUrl: './dogs-list.component.html',
  styleUrls: ['./dogs-list.component.css']
})
export class DogsListComponent {

  title: String = 'ngToDo';

  ///FIELDS
  dogs: DogHouse[] = [];

  selected: DogHouse | null = null;

  newDog = new DogHouse();

  editDog: DogHouse | null = null;
  showComplete: boolean = false;
  // route: any;
  // router: any;

  ////METHODS
  constructor(private route: ActivatedRoute, private doggoService: DoggoService, private router: Router) { }

  ngOnInit(): void {
    let dogIdString = this.route.snapshot.paramMap.get('dogId');
    if (dogIdString) {
      console.log('ngOnInit: dogId ' + dogIdString);
      let dogId = parseInt(dogIdString);
      console.log(dogId);
      if (isNaN(dogId)) {
        this.router.navigateByUrl('invalidId');
      } else {
        this.doggoService.show(dogId).subscribe({
          next: (dog) => {
            this.selected = dog;
          },
          error: (fail) => {
            this.router.navigateByUrl('Hound not found');
          },
        });
      }
    }
    this.reload();
  }

  displayDog(dog: DogHouse) {
    this.selected = dog;
  }
  displayTable(): void {
    this.selected = null;
  }

  setEditTodo() {
    this.editDog = Object.assign({}, this.selected);
  }

  addDog(dog: DogHouse): void {
    this.doggoService.create(dog).subscribe({
      next: (result) => {
        this.newDog = new DogHouse();
        this.reload();
      },
      error: (tryagain) => {
        console.error(
          ' error creating dog:'
        );
        console.error(tryagain);
      },
    });
  }

  setEditDog() {
    this.editDog = Object.assign({}, this.selected);
    this.reload();
  }

  updateDog(dog: DogHouse) {
    console.log(dog);
    this.doggoService.update(dog).subscribe({
      next: (updateResult) => {
        this.editDog = null;
        if (DogHouse) {
          this.selected = updateResult;
        }
        this.reload();

      },
      error: (errorUp) => {
        console.error('error updating todo:');
        console.error(errorUp);
      },
    });
  }

  deleteDog(dogId: number) {
    // this.todoService.destroy(todoId);
    this.doggoService.destroy(dogId).subscribe({
      next: () => {
        this.reload();
      },
      error: (ummNo) => {
        console.error('Error deleting dog');
        console.error(ummNo);
      },
    });
  }

  // service will return an observable we must subscribe to
  reload() {
    this.doggoService.index().subscribe({
      next: (dogs) => {
        this.dogs = dogs;
      },
      error: (problem) => {
        console.error(' error loading Todo List:');
        console.error(problem);
      },
    });
  }
}
