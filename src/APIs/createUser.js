export const createUser = async (userData) => {

  console.log('userData -----> ' , userData);
  
  try {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjFjMDdkZDg0NDQ4MjY1MjAzOThhNzEiLCJuYW1lIjoibmV3VXNlciIsImlhdCI6MTcxMzExMzA1MywiZXhwIjoxNzE1NzA1MDUzfQ.JN9UU8E6C3cB4dG0pGG-6dQksZkLxFWK9W8z3jXhHQA';

    var url;
    url = new URL('https://sore-ruby-squirrel-sari.cyclic.app/api/v1/admin/createUser');
    // url = new URL('http:localhost:3020/api/v1/admin/createUser');

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData)
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
