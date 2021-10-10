import axios from 'axios';

// TODO: offload into env file
const baseUrl = 'http://localhost:8000/user';

const USER_TAG = 'testUser#1111';
const USER_ID = '11111';

beforeAll(async () => {
  try {
    const url = `${baseUrl}/create`;
    const body = {
      userTag: USER_TAG,
      userId: USER_ID,
    };
    await axios.post(url, body);
  } catch (err) {
    console.log(`Error creating test user: ${err}`);
  }
});

describe('[User] api tests - ', () => {
  afterAll(async () => {});

  it('Should be able to create new user ', async () => {
    const url = `${baseUrl}/create`;
    const body = {
      userTag: 'testUser#1234',
      userId: '12345',
    };
    const response = await axios.post(url, body);

    expect(response).toBeDefined();
    expect(response.status).toEqual(201);
  });

  it('Should be able to get data of existing user', async () => {
    const id = USER_ID;
    const url = `${baseUrl}/${id}`;
    const response = await axios.get(url);

    expect(response).toBeDefined();
    expect(response.status).toEqual(200);
    expect(response.data).toBeDefined();
    expect(response.data.userTag).toEqual(USER_TAG);
    expect(response.data.userId).toEqual(USER_ID);
  });

  it('Should return NOT_FOUND when user data does not exist', async () => {
    const id = '00000';
    const url = `${baseUrl}/${id}`;
    const response = await axios.get(url, { validateStatus: false });

    expect(response).toBeDefined();
    expect(response.status).toEqual(404);
  });
});

describe('[User - Holdings] api tests',  () => {
  it('Should be able to buy shares from a company', async () => {
    const url = `${baseUrl}/buy/${USER_ID}`;
    const body = {
      symbol: 'GME',
      amount: '5'
    }
    const response = await axios.post(url, body);

    expect(response).toBeDefined();
    expect(response.status).toEqual(200)
  });
});
