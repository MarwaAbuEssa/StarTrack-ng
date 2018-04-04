import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Events, NavController } from '@ionic/angular';
@Component({
  selector: 'menu-list',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.scss']
})
export class MenulistComponent implements OnInit {
  public favorites = [];
  constructor(
    private router: Router,
    public event: Events,
    public storage: Storage,
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    this.getKeys();
    this.event.subscribe('songAdded', e => {
      this.favorites.push(e);
    });
    this.event.subscribe('songRemoved', e => {
      this.favorites.splice(this.favorites.indexOf(e), 1);
    });
  }
  getKeys() {
    this.storage.forEach(entry => {
      this.favorites.push(entry);
    });
  }
  goToDetail(favorite) {
    this.router.navigateByUrl(`/app/menu/detail/${favorite.trackId}`);
  }
}