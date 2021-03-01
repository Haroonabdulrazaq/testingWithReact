import moxios from 'moxios';
import { testStore } from '../../Utils';
import { fetchPosts } from '../actions';



describe("Fetch post action", ()=>{

  beforeEach(()=>{
    moxios.install()
  })

  afterEach(()=>{
    moxios.uninstall()
  })

  test("Store is updated Correctly",()=>{
    const expectedState = [{
      title: 'Example title1',
      body: 'Expected body1'
    },
    {
      title: 'Example title2',
      body: 'Expected body2'
    },
    {
      title: 'Example title3',
      body: 'Expected body3'
    }]
     
    const store = testStore();

    moxios.wait(()=>{
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: expectedState
      })
    })

    return store.dispatch(fetchPosts())
    .then(()=>{
      const newState = store.getState()
      expect(newState.postReducer).toBe(expectedState)
    })
  })
})