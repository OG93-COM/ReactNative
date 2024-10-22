const loginUser = async () => {
  try {
    const response = await fetch("https://your-website.com/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        name: "Meta User",
        email: "mataUser@example.com",
        password: "abc123$",
      }),
    });
    const responseJson = await response.json(); //Showing response message coming from server
    console.warn(responseJson);
  } catch (error) {
    console.error(error);
  }
};
