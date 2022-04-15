import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-giphy',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs:any[]=[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.myTrendingGifs()
    .subscribe((response: any) => {
      
      this.gifs = response.data;
     console.log('Data',response);
    })
  }

}
