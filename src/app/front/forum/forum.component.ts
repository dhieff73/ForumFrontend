import {Component, OnInit} from '@angular/core';
import {PostsService} from "../../Services/posts.service";
import {Post} from "./post";

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit{

  posts: any[] | undefined
  newPost :Post=new Post(0,'',new Date(),false,false,null);

  constructor(private postservice:PostsService) {
  }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts():any{
    this.postservice.getposts().subscribe((Posts: any[]) => {
      this.posts = Posts})
  }

  createPost() {
    this.postservice.addPost(this.newPost).subscribe((response) => {
      console.log('Post created:', response);
      this.newPost = new Post(0, '', new Date(), false, false, null); // Reset the form
    });
  }
  deletPost(idPost : number){
    this.postservice.deletePost(idPost).subscribe(()=>{
      console.log('Post with id '+idPost+' deleted');
      // @ts-ignore
      this.posts = this.posts.filter((post) => post.idPost !== idPost);
    })
  }

}
