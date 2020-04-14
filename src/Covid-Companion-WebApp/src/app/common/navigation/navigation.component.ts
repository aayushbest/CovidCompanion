import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { MenuInterace } from 'src/app/utils/menu.interace';
import { MenuItems } from 'src/app/utils/menuitems';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  navMenu: Array<MenuInterace> = MenuItems.getMenu();
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }

}
