import axios from "axios";

export async function get() {
  const url = "https://api.netlify.com/api/v1/sites";
  const token = import.meta.env.NETLIFY_TOKEN; // Ensure your token is stored in the .env file

  try {
    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // Sending back the sites data as JSON
    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    // Handling errors, sending back a proper error message
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.response ? error.response.status : 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
