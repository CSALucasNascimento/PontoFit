import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddUpdateComponent } from './post-add-update.component';

describe('PostAddUpdateComponent', () => {
  let component: PostAddUpdateComponent;
  let fixture: ComponentFixture<PostAddUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
