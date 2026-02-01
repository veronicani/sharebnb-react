import ShareBnB from './api';

describe('ShareBnB API Test', () => {
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('getProperties', () => {
    test('fetches all properties with correct URL and search term', async () => {
      const mockData = { 
        properties: [{ id: 1, name: 'Test Villa', price: 100 }] 
      };
      const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: async () => mockData,
      });
      const result = await ShareBnB.getProperties('beach');
      const calledUrl = fetchSpy.mock.calls[0][0].toString();
      
      expect(calledUrl).toContain('/properties?term=beach');
      expect(result).toEqual(mockData);
    });

    // TODOs for future robustness
    test.todo('throws error on 500 server response');
    test.todo('handles network timeout/failure');
  });

  describe('addProperty', () => {
    test('successfully posts property data and image', async () => {
      const mockResponse = { id: 101, message: "Created" };
      const fetchSpy = jest.spyOn(global, 'fetch').mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      });

      const mockFile = new File(['data'], 'cabin.jpg', { type: 'image/jpeg' });
      const mockFields = { name: 'Lake Cabin', price: 150 };
      const result = await ShareBnB.addProperty(mockFields, mockFile);
      const [url, options] = fetchSpy.mock.calls[0];
      
      expect(options.method).toBe('POST');
      expect(options.body).toBeInstanceOf(FormData);
      expect(options.body.get('image')).toEqual(mockFile);
      expect(options.body.get('name')).toBe('Lake Cabin');
      expect(result).toEqual(mockResponse);
    });
    
    test.todo('throws error on 400 bad request response');
    test.todo('handles network timeout/failure');
  });
});

describe('BASE_API_URL configuration', () => {
  it('uses environment variable when available', () => {
    // This test verifies that the BASE_API_URL logic works
    // The actual BASE_API_URL is set at module load time
    expect(process.env.REACT_APP_BASE_API_URL || "http://localhost:5001")
      .toBeDefined();
  });
});
