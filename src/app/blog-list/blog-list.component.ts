import { Component, OnInit } from '@angular/core';
import { BlogService } from "../../services/blog.service"
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { Post } from '../../models/post';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [MatCardModule, HttpClientModule, NgFor, MatGridListModule],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss',
  providers: [BlogService]
})
export class BlogListComponent implements OnInit {
  data: Post[] = [];

  constructor(private blogService: BlogService) { }

  ngOnInit(): void {
    this.blogService.getData().subscribe((response: Post[]) => {
      this.data = response; // Assuming the response is an array of objects
    });
  }
}



