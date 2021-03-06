import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input() details:Character
  public on_off = false;

  constructor() { }

  ngOnInit(): void {
  }



}
