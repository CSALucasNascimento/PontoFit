import { TEST_DATA } from '../../../../../testing/test.data';
import { posts, postSaveStatus, userPosts,
    samplePosts, unpublishedPosts } from './posts.reducer';
import { PostActions } from '../actions';
import { Post, PostStatus } from '../../model';

//posts
describe('Reducer: posts', () => {
  let _testReducer = posts;

  it('Initial State', () => {
    let state: Post[] = _testReducer(undefined, {type: null, payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(0);
  });

  it('Load Posts Success Action', () => {
    let initialPosts: Post[] = TEST_DATA.posts.published.slice(0, 2);
    let state: Post[] = _testReducer(null, {type: PostActions.LOAD_POSTS_SUCCESS, payload: initialPosts});
    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(initialPosts.length);

    let newState: Post[] = _testReducer(initialPosts, {type: PostActions.LOAD_POSTS_SUCCESS, payload: TEST_DATA.posts.published});

    expect(Array.isArray(newState)).toEqual(true);
    expect(newState.length).toEqual(TEST_DATA.posts.published.length);
    expect(newState).not.toEqual(state);
  });

  it('Any other action', () => {
    let state: Post[] = _testReducer(TEST_DATA.posts.published, {type: "any other action", payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state).toEqual(TEST_DATA.posts.published);
  });

});

//unpublishedPosts
describe('Reducer: unpublishedPosts', () => {
  let _testReducer = unpublishedPosts;

  it('Initial State', () => {
    let state: Post[] = _testReducer(undefined, {type: null, payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(0);
  });

  it('Load Unpublished Posts Success Action', () => {
    let initialPosts: Post[] = TEST_DATA.posts.published.slice(0, 2);
    let state: Post[] = _testReducer(null, {type: PostActions.LOAD_UNPUBLISHED_POSTS_SUCCESS, payload: initialPosts});
    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(initialPosts.length);

    let newState: Post[] = _testReducer(initialPosts, {type: PostActions.LOAD_UNPUBLISHED_POSTS_SUCCESS, payload: TEST_DATA.posts.published});

    expect(Array.isArray(newState)).toEqual(true);
    expect(newState.length).toEqual(TEST_DATA.posts.published.length);
    expect(newState).not.toEqual(state);
  });

  it('Any other action', () => {
    let state: Post[] = _testReducer(TEST_DATA.posts.published, {type: "any other action", payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state).toEqual(TEST_DATA.posts.published);
  });

});


//userPosts
describe('Reducer: userPosts', () => {
  let _testReducer = userPosts;

  it('Initial State', () => {
    let state: Post[] = _testReducer(undefined, {type: null, payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(0);
  });

  it('Load User Posts Success Action', () => {
    let initialPosts: Post[] = TEST_DATA.posts.published.slice(0, 2);
    let state: Post[] = _testReducer(null, {type: PostActions.LOAD_USER_POSTS_SUCCESS, payload: initialPosts});
    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(initialPosts.length);

    let newState: Post[] = _testReducer(initialPosts, {type: PostActions.LOAD_USER_POSTS_SUCCESS, payload: TEST_DATA.posts.published});

    expect(Array.isArray(newState)).toEqual(true);
    expect(newState.length).toEqual(TEST_DATA.posts.published.length);
    expect(newState).not.toEqual(state);
  });

  it('Any other action', () => {
    let state: Post[] = _testReducer(TEST_DATA.posts.published, {type: "any other action", payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state).toEqual(TEST_DATA.posts.published);
  });

});

//samplePosts
describe('Reducer: samplePosts', () => {
  let _testReducer = samplePosts;

  it('Initial State', () => {
    let state: Post[] = _testReducer(undefined, {type: null, payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(0);
  });

  it('Load Sample Posts Success Action', () => {
    let initialPosts: Post[] = TEST_DATA.posts.published.slice(0, 2);
    let state: Post[] = _testReducer(null, {type: PostActions.LOAD_SAMPLE_POSTS_SUCCESS, payload: initialPosts});
    expect(Array.isArray(state)).toEqual(true);
    expect(state.length).toEqual(initialPosts.length);

    let newState: Post[] = _testReducer(initialPosts, {type: PostActions.LOAD_SAMPLE_POSTS_SUCCESS, payload: TEST_DATA.posts.published});

    expect(Array.isArray(newState)).toEqual(true);
    expect(newState.length).toEqual(TEST_DATA.posts.published.length);
    expect(newState).not.toEqual(state);
  });

  it('Any other action', () => {
    let state: Post[] = _testReducer(TEST_DATA.posts.published, {type: "any other action", payload: null});

    expect(Array.isArray(state)).toEqual(true);
    expect(state).toEqual(TEST_DATA.posts.published);
  });

});

//postSaveStatus
describe('Reducer: samplePosts', () => {
  let _testReducer = postSaveStatus;

  it('Initial State', () => {
    let state: string = _testReducer(undefined, {type: null, payload: null});

    expect(state).toEqual("NONE");
  });

  it('Add Posts Actions', () => {
    let state: string = _testReducer(null, {type: PostActions.ADD_POST});
    expect(state).toEqual("IN PROGRESS");

    let newState: string = _testReducer("IN PROGRESS", {type: PostActions.ADD_POST_SUCCESS});
    expect(newState).toEqual("SUCCESS");
  });

  it('Any other action', () => {
    let state: string = _testReducer("IN PROGRESS", {type: "any other action", payload: null});

    expect(state).toEqual("IN PROGRESS");
  });

});
