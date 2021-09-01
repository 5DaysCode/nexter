import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import mockAxios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import  {listOfCategorys}  from '../categoryActions';
import { ExpectationFailed } from 'http-errors';
const middleware = [thunk];
const mockStore = configureMockStore(middleware);
const mock = new MockAdapter(axios);
const store = mockStore();


describe("User Actions", () => {
    let store;

    beforeEach(() => {

        store = mockStore({
            categorys: {}
        });
    });

  describe("getCategory action creator", () => {


        it("dispatches GET_listOffCategorys action and returns data on success", async () => {


            mock.onGet('api/category').reply(200, {
                response: [
                    { _id: "6054ae2dae3cd034545c76cb", name: "Mobiles", __v: 0, createdAt: "2021-03-19T13:59:09.625Z", updatedAt: "2021-03-19T13:59:09.625Z" },
                    { _id: "6054ae2dae3cd034545c76ca", name: "Airpods", __v: 0, createdAt: "2021-03-19T13:59:09.624Z", updatedAt: "2021-03-19T13:59:09.624Z" },
                    { _id: "6054ae2dae3cd034545c76cc", name: "Cameras", __v: 0, createdAt: "2021-03-19T13:59:09.626Z", updatedAt: "2021-03-19T13:59:09.626Z" },
                ]
            })

           
           await store.dispatch(listOfCategorys());
            const actions =  store.getActions();
            // console.log('Actions' ,  actions);
            // console.log = jest.fn();
            expect(actions[0].type).toEqual('CATEGORY_LIST_QUERY_SUCESS');

     });
    });



});