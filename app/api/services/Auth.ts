export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (error) {
    throw new Error("An error occurred. Please try again.");
  }
};

export const registerUser = async (
  username: string,
  email: string,
  password: string,
) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, email, password }),
    });

    if (response.ok) {
      return true;
    } else {
      throw new Error("Registration failed. Please try again.");
    }
  } catch (error) {
    throw new Error("An error occurred. Please try again.");
  }
};
