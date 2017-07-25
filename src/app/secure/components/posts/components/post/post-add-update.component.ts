import { Component, OnInit, OnDestroy } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../../../../../core/store/app-store';

import { PostStore } from '../../store/post-store';
import { TagStore } from '../../../tags/store/tag-store';
import { PostActions } from '../../store/actions';
import { Post, PostStatus }     from '../../model';
import { Tag } from '../../../tags/model';
import { User }     from '../../../../../model';

@Component({
  templateUrl: './post-add-update.component.html',
  styleUrls: ['./post-add-update.component.scss']
})
export class PostAddUpdateComponent implements OnInit, OnDestroy {

  tagsObs: Observable<Tag[]>;
  // categoriesObs: Observable<Category[]>;

  //Properties
  // categories: Category[];
  // sub: any;

  tags: Tag[];
  sub2: any;

  postForm: FormGroup;
  post: Post;

  autoTags: Tag[] = []; //auto computed based on match within Q/A
  enteredTags: Tag[] = [];

  user: User;

  get tagsArray(): FormArray {
    return this.postForm.get('tagsArray') as FormArray;
  }

  //Constructor
  constructor(private fb: FormBuilder,
              private store: Store<AppStore>,
              private postStore: Store<PostStore>,
              private tagStore: Store<TagStore>,
              private postActions: PostActions) {
    // this.categoriesObs = store.select(s => s.categories);
    this.tagsObs = tagStore.select(s => s.tags);
  }

  //Lifecycle hooks
  ngOnInit() {
    this.post = new Post();
    this.createForm(this.post);

    let postControl = this.postForm.get('postText');

    postControl.valueChanges.debounceTime(500).subscribe(v => this.computeAutoTags());

    // this.sub = this.categoriesObs.subscribe(categories => this.categories = categories);
    this.sub2 = this.tagsObs.subscribe(tags => this.tags = tags);

  }

  ngOnDestroy() {
    // if (this.sub)
      // this.sub.unsubscribe();
    if (this.sub2)
      this.sub2.unsubscribe();
  }

  //Event Handlers
  addTag() {
    let tag = this.postForm.get('tags').value;
    if (tag) {
      if (this.enteredTags.indexOf(tag) < 0)
        this.enteredTags.push(tag);
      this.postForm.get('tags').setValue('');
    }
    this.setTagsArray();
  }
  removeEnteredTag(tag) {
    this.enteredTags = this.enteredTags.filter(t => t !== tag);
    this.setTagsArray();
  }
  onSubmit() {
    //validations
    this.postForm.updateValueAndValidity();
    if (this.postForm.invalid)
      return;

    //get post object from the forms
    //console.log(this.postForm.value);
    let post: Post = this.getPostFromFormValue(this.postForm.value);

    post.status = PostStatus.SUBMITTED;
    this.store.take(1).subscribe(s => this.user = s.user);
    //console.log(post);

    post.created_uid = this.user.userId;
    //call savePost
    this.savePost(post);
  }

  //Helper functions
  getPostFromFormValue(formValue: any): Post {
    let post: Post;

    post = new Post();
    post.postText = formValue.postText;
    // post.categoryIds = [formValue.category];
    post.tags = [...this.autoTags, ...this.enteredTags];

    return post;
  }

  savePost(post: Post) {
    this.postStore.dispatch(this.postActions.addPost(post));
  }

  computeAutoTags() {
    let formValue = this.postForm.value;

    let allTextValues: string[] = [formValue.postText];

    let wordString: string = allTextValues.join(" ");

    let matchingTags: string[] = [];
    this.tags.forEach(tag => {
      let patt = new RegExp('\\b(' + tag.replace("+", "\\+") + ')\\b', "ig");
      if (wordString.match(patt))
        matchingTags.push(tag);
    });
    this.autoTags = matchingTags;

    this.setTagsArray();
  }
  setTagsArray() {
    this.tagsArray.controls = [];
    [...this.autoTags, ...this.enteredTags].forEach(tag => this.tagsArray.push(new FormControl(tag)));
  }
  createForm(post: Post) {

    let fcs:FormControl[] = post.tags.map(tag => {
      let fc = new FormControl(tag);
      return fc;
    });
    if (fcs.length == 0)
      fcs = [new FormControl('')];
    let tagsFA = new FormArray(fcs);

    this.postForm = this.fb.group({
        // category: [(post.categories.length>0? post.categories[0] : ''), Validators.required],
        postText: [post.postText, Validators.required],
        tags: '',
        tagsArray: tagsFA
      }, {validator: postFormValidator}
    );
  }

}

//Custom Validators
function postFormValidator(fg: FormGroup): {[key: string]: boolean} {
  let tags: Tag[] = fg.get('tagsArray').value;
  if (tags.length  < 3)
    return {'tagCountInvalid': true}

  return null;
}
