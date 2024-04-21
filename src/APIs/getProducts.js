export const getProducts = async (params) => {
  let url; 
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjFjMDdkZDg0NDQ4MjY1MjAzOThhNzEiLCJuYW1lIjoibmV3VXNlciIsImlhdCI6MTcxMzExMzA1MywiZXhwIjoxNzE1NzA1MDUzfQ.JN9UU8E6C3cB4dG0pGG-6dQksZkLxFWK9W8z3jXhHQA';
    url = new URL('https://sore-ruby-squirrel-sari.cyclic.app/api/v1/productRoutes');
    if (params) {
      const searchParams = new URLSearchParams();
      Object.keys(params).forEach(key => {
        if (params[key] !== undefined || params[key] !== null) {
          searchParams.append(key, params[key]);
        }
      });
      url.search = searchParams.toString();
    }
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const responseData = await response.json();
    if (response.ok) {
      return { status: 'success', data: responseData?.allProducts };
    }
    return { status: 'failure', error: responseData.error };
    
  } catch (error) {
    return { status: 'failure', error: error.message };
  }
};
