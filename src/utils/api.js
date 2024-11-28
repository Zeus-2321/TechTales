export const fetchBlogs = async () => {
    try {
      const response = await fetch('https://techtales-backend.onrender.com/api/blogs', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      const data = await response.json();
      return data.data;
    } catch (err) {
      console.error('Error fetching blogs:', err);
      return [];
    }
  };
  