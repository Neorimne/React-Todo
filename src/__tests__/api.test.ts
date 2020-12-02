import axios from "axios";
import { getPostsData, getUsersData } from "../api/api";
jest.mock("axios");

describe("API getPosts: ", () => {
  let response: any;
  let posts: any;
  beforeEach(() => {
    posts = [
      {
        userId: 1,
        id: 1,
        title:
          "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit  architecto",
      },
    ];
    response = {
      data: {
        posts,
      },
    };
  });

  test("should return a valid response", async () => {
    axios.get.mockReturnValue(response);
    let data = await getPostsData();
    expect(data.posts).toEqual(posts);
  });
});

describe("API GetUsers: ", () => {
  let response: any;
  let users: any;

  beforeEach(() => {
    users = [
      {
        id: 1,
        email: "george.bluth@reqres.in",
        first_name: "George",
        last_name: "Bluth",
        avatar:
          "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
      },
    ];
    response = {
      data: {
        users,
      },
    };
  });

  test("should return a valid response", async () => {
    axios.get.mockReturnValue(response);
    let data = await getUsersData();
    expect(data.users).toEqual(users);
  });
});
