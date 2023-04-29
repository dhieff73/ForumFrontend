import {ReactionTypeModel} from "./reactionType.model";
import {Post} from "./post";
import {User} from "./user.model";
import {Comment} from "./comment.model";

export class Reaction{
   reactionType: ReactionTypeModel;
  dateReaction: string;
  username: string;
  post: Post
  comment: Comment;
  user : User
  constructor( reactionType :ReactionTypeModel,
               user: User,
               post: Post,
               username: string,
  comment: Comment,
  dateReaction: string) {

  this.reactionType = reactionType;
  this.user = user;
  this.post = post
  this.username = username;
  this.comment = comment;
  this.user = user;
  this.dateReaction = dateReaction
  }


  static create() {
    return Object.create(this.prototype);
  }
}
