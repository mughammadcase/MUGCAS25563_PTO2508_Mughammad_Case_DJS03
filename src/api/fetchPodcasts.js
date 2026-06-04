/**
 * @function fetchPodcasts
 * Fetches podcast data from the external API
 *
 * @throws {Error} Throws an error if the fetch request fails
 * @returns {Promise<Object>} A promise that returns the podcast data as a JSON object
 */
export async function fetchPodcasts() {
  const response = await fetch("https://podcast-api.netlify.app/");

  if (!response.ok) {
    throw new Error("Failed to fetch podcasts from API");
  }

  return response.json();
}
