import { Post } from './../post';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  hide: boolean = false;

  @Input() post!: Post;


  constructor() { }

  ngOnInit(): void {
  }

  getColor() {
    if(this.post.likes < 0) {
      return 'red';
    } else if(this.post.likes > 0) {
      return 'green';
    } else {
      return '';
    }
  }

  showThumb() {
    if(this.post.likes < 0) {
      this.hide = true;
    } else if(this.post.likes > 0) {
      this.hide = false;
    }
  }

  onLike() {
    this.post.likes += 1;
    this.showThumb();
  }

  onDislike() {
    this.post.likes -= 1;
    this.showThumb();
  }

}
