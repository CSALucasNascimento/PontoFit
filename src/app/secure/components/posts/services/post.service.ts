import { Injectable }    from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import '../../../../rxjs-extensions';

import { Post, PostStatus } from '../model';
import { User } from '../../../../model';
import { Store } from '@ngrx/store';
import { PostStore } from '../store/post-store';
import { PostActions } from '../store/actions';

@Injectable()
export class PostService {
    constructor(private db: AngularFireDatabase,
                private store: Store<PostStore>,
                private postActions: PostActions) {
    }

    getSamplePosts(): Observable<Post[]> {
        return this.db.list('/posts/published', {
            query: {
                limitToLast: 4,
            }
        });
    }

    getUserPosts(user: User): Observable<Post[]> {
        return this.db.list('/users/' + user.userId + '/posts')
            .map((qids: any[]) => {
                let posts: Post[] = [];
                qids.forEach(qid => {
                    this.db.object('/posts/' + qid['$value'] + '/' + qid['$key']).take(1)
                        .subscribe(q => {
                            console.log(q);
                            posts.push(q)
                        });
                });
                return posts;
            })
            .catch(error => {
                console.log(error);
                return Observable.of(null);
            });
    }

    getPosts(): Observable<Post[]> {
        return this.db.list('/posts/published')
            .catch(error => {
                console.log(error);
                return Observable.of(null);
            });
    }

    getUnpublishedPosts(): Observable<Post[]> {
        return this.db.list('/posts/unpublished')
            .catch(error => {
                console.log(error);
                return Observable.of(null);
            });
    }

    savePost(post: Post) {
        this.db.list('/posts/unpublished').push(post).then(
            (ret) => {  //success
                if (ret.key)
                    this.db.object('/users/' + post.created_uid + '/posts').update({[ret.key]: "unpublished"});
                this.store.dispatch(this.postActions.addPostSuccess());
            },
            (error: Error) => {//error
                console.error(error);
            }
        );
    }

    editPost(post: Post) {
        this.db.list('/posts/published').push(post).then(
            (ret) => {  //success
                if (ret.key)
                    this.db.object('/users/' + post.created_uid + '/posts').update({[ret.key]: "unpublished"});
                this.store.dispatch(this.postActions.editPostSuccess());
            },
            (error: Error) => {//error
                console.error(error);
            }
        );
    }

    approvePost(post: Post) {
        let key: string = post["$key"];
        post.status = PostStatus.APPROVED;
        this.db.object('/posts/published').update({[key]: post}).then(
            (ret) => {  //success
                this.db.object('/users/' + post.created_uid + '/posts').update({[key]: "published"});
                this.db.object('/posts/unpublished/' + key).remove();
            },
            (error: Error) => {//error
                console.error(error);
            }
        );
    }

}
