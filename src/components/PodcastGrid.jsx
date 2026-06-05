import PodcastCard from "./PodcastCard";

/**
 * Creates a grid for displaying podcasts.
 *
 * @param {Object} props - Component props
 * @param {Array} props.podcasts - Podcast data
 * @returns {JSX.Element} Podcast grid
 */
export default function PodcastGrid({ podcasts }) {
  return (
    <section className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastCard key={podcast.id} podcast={podcast} />
      ))}
    </section>
  );
}
