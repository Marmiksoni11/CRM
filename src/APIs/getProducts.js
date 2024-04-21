export const getProducts = async (params) => {
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjFjMDdkZDg0NDQ4MjY1MjAzOThhNzEiLCJuYW1lIjoibmV3VXNlciIsImlhdCI6MTcxMzExMzA1MywiZXhwIjoxNzE1NzA1MDUzfQ.JN9UU8E6C3cB4dG0pGG-6dQksZkLxFWK9W8z3jXhHQA';

    var url;
    url = new URL('https://sore-ruby-squirrel-sari.cyclic.app/api/v1/productRoutes');
    //  url = new URL('http:localhost:3020/api/v1/productRoutes/');
    // console.log('params ---- > ' , params);

    if (params) {
      const searchParams = new URLSearchParams();
      for (const key in params) {
        if (params[key] !== undefined || params[key] !== null) {
          searchParams.append(key, params[key]);
        }
      }
      url.search = searchParams.toString();
    }

    // Set pending status
    const status = 'pending';

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
    } else {
      return { status: 'failure', error: responseData.error };
    }
    return temp;
  } catch (error) {
    return { status: 'failure', error: error.message };
  }
};
