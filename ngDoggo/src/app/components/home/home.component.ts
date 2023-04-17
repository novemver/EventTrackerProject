import { Component } from '@angular/core';
import { DogHouse } from 'src/app/models/dog-house';
import { DoggoService } from 'src/app/services/doggo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  dogHouse: DogHouse[] = [];

  constructor(
    private doggoService: DoggoService
    ) {}

  ngOnInit(): void {
    this.reload();
  }

  reload() {
    this.doggoService.index().subscribe({
      next: (data) => {
        this.dogHouse = data;
      },
      error: (fail) => {
        // TODO
      },
    });
  }
}
