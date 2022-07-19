import supertest from 'supertest';
import app from '../index';
import imageProcessing from '../Utilities/imageProcessing';

const request = supertest(app);

describe('Testing Endpoint Response', () : void => {
  it('', async () : Promise<void> => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(500);
  });
});

describe('Test Query Parameters', () : void => {
  const filename = 'santamonica';
  const width = '300';
  const height = '300';

  it('Testing When Image Does Not Exist In Server', async () : Promise<void> => {
    const response = await request.get(
      `/api/images?filename=test&width=${width}&height=${height}`
    );
    expect(response.text).toBe(
      'Error: File Does Not Exist In Server, please verify the file name.'
    );
  });

  it('returns a proper error message if width or height are not numbers', async () : Promise<void> => {
    const response = await request.get(
      `/api/images?filename=${filename}&width=${width}&height=test`
    );
    expect(response.text).toBe(
      'Please set a filename, width and height as parameters in the url (all 3 are mandatory and width and height must be numbers).'
    );
  });
});

describe("Testing Image Processing", () : void => {
  const filename = "encenadaport";
  const width = 250;
  const height = 250;
  it("", () => {
    expect(async () : Promise<void> => {
      await imageProcessing(filename, width, height)
    }).not.toThrow();
  })
});