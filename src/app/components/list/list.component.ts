import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  characters: Character[] = [
    {name: "Hitagi", age: 18, haircolor: "Purple", details: "Crab"},
    {name: "Suruga", age: 17, haircolor: "Blue", details: "Monkey"},
    {name: "Shinobu", age: 598, haircolor: "Blonde", details: "Vampire"},
    {name: "Nadeko", age: 16, haircolor: "Brown", details: "Snake"}
  ]
  public show: boolean = true
  public btnName: any = "Hide"
  public charac: Character

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(character: Character): void{
    this.charac = character
  }

  toggle(): void{
    this.show = !this.show
    if(this.show)
      this.btnName = "Hide"
    else
      this.btnName = "Show"
  }

  selChar(){

  }

}
