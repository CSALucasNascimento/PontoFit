import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { Component, DebugElement }    from '@angular/core';
import { SharedMaterialModule } from '../../../shared/shared-material.module';

import { TEST_DATA } from '../../../testing/test.data';
import { Post, PostStatus }     from '../../../model';
import { PostsComponent } from './posts.component';

//Isolated Test
describe('Component: PostsComponent', () => {

  let comp: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent ], // declare the test component
      imports: [
        //Material
        SharedMaterialModule
      ],
    providers:[
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PostsComponent);

    comp = fixture.componentInstance; // Component test instance

  }));

  //Unit Tests
  it('Post Count', () => {
    //set component input
    comp.posts = TEST_DATA.posts.published;
    comp.categoryDictionary = TEST_DATA.categoryDictionary;
    comp.showApproveButton = false;

    fixture.detectChanges();
    let qNodes = fixture.debugElement.queryAll(By.css('md-card'));

    expect(qNodes.length).toEqual(TEST_DATA.posts.published.length);
  });

  it('Post Status & Approve Button Click', () => {
    //set component input
    let expectedPost: Post = TEST_DATA.posts.published[0];
    expectedPost.status = 0;
    comp.posts = TEST_DATA.posts.published;
    comp.categoryDictionary = TEST_DATA.categoryDictionary;
    comp.showApproveButton = true;

    fixture.detectChanges();

    let selectedPost: Post;
    comp.approveClicked.subscribe((post: Post) => selectedPost = post);

    let qNodes = fixture.debugElement.queryAll(By.css('md-card'));
    let qApproveButtons = fixture.debugElement.queryAll(By.css('.approve-button'));
    expect(qApproveButtons.length).toEqual(1);  //only one approve button should exist

    let qStatus  = qNodes[0].query(By.css('.post-status')).nativeElement; // find staus of the 1st Q
    expect(qStatus.textContent).toContain(PostStatus[expectedPost.status]);

    let qButton  = qNodes[0].query(By.css('.approve-button')); // find approve button on the 1st Q
    qButton.triggerEventHandler('click', null);
    expect(selectedPost).toBe(expectedPost);
  });
});

//Using a test host component
describe('Component: PostsComponent using Test Host', () => {

  let comp: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsComponent, TestHostComponent ], // declare the test component
      imports: [
        //Material
        SharedMaterialModule
      ],
    providers:[
        
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);

    comp = fixture.componentInstance; // Component test instance

  }));

  //Unit Tests
  it('Post Count', () => {
    //set component input
    //comp.posts = TEST_DATA.posts.published;
    //comp.categoryDictionary = TEST_DATA.categoryDictionary;
    //comp.showApproveButton = false;

    fixture.detectChanges();
    let qNodes = fixture.debugElement.query(By.css('post-list')).queryAll(By.css('md-card'));

    expect(qNodes.length).toEqual(TEST_DATA.posts.published.length);
  });

  it('Post Status & Approve Button Click', () => {
    //set component input
    let expectedPost: Post = comp.posts[0];
    expectedPost.status = 0;
    comp.showApproveButton = true;

    fixture.detectChanges();

    let qNodes = fixture.debugElement.query(By.css('post-list')).queryAll(By.css('md-card'));
    let qApproveButtons = fixture.debugElement.queryAll(By.css('.approve-button'));
    expect(qApproveButtons.length).toEqual(1);  //only one approve button should exist

    let qStatus  = qNodes[0].query(By.css('.post-status')).nativeElement; // find staus of the 1st Q
    expect(qStatus.textContent).toContain(PostStatus[expectedPost.status]);

    let qButton  = qNodes[0].query(By.css('.approve-button')); // find approve button on the 1st Q
    qButton.triggerEventHandler('click', null);
    expect(comp.selectedPost).toBe(expectedPost);
  });
});

@Component({
  template: `
    <post-list [posts]="posts" 
                   [categoryDictionary]="categoryDictionary"
                   [showApproveButton]="showApproveButton"
                   (approveClicked)="approvePost($event)">
    </post-list>
    `
})
class TestHostComponent {
  posts:Post[] = TEST_DATA.posts.published;
  categoryDictionary = TEST_DATA.categoryDictionary;
  showApproveButton = false;

  selectedPost: Post;
  approvePost(post: Post) { this.selectedPost = post; }
}
