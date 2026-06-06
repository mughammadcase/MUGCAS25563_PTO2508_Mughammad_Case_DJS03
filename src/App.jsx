import Header from "./components/Header";
import { useEffect, useState } from "react";
import { fetchPodcasts } from "./api/fetchPodcasts";
import PodcastGrid from "./components/PodcastGrid";

/**
 * The main application component.
 *
 * Fetches podcast data  and renders loading, error, and podcast states.
 *
 * @returns {JSX.Element} application UI
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadPodcasts() {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    loadPodcasts();
  }, []);

  if (loading) {
    return (
      <div className="message-container">
        <div className="spinner"></div> <p>Loading podcasts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="message-container">
        <div className="error">
          Error occurred while trying to fetch podcasts: {error}
        </div>
      </div>
    );
  }

  // Handle case if no podcasts are returned
  if (!loading && podcasts.length === 0) {
    return (
      <div className="message-container">
        <p>No podcasts available.</p>
      </div>
    );
  }

  return (
    <>
      <Header />

      <main>
        <PodcastGrid podcasts={podcasts} />
      </main>
    </>
  );
}

export default App;
