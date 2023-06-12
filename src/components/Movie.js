import { Link } from 'react-router-dom'
import styles from '../styles/Movie.module.css'

const Movie = ({ movie }) => {
    return (
        <div className={styles.movieBox}>
            <div className={styles.imgBox}>
                <img
                    src={movie.medium_cover_image}
                    alt={movie.title}
                />
            </div>
            <div className={styles.letterBox}>
                <h2>
                    <Link to={`/movie/${movie.id}`}>{`${movie.title} (${movie.year})`}</Link>
                </h2>
                <p>{movie.summary}</p>
                <ul>
                    {movie.genres.map((g) => (
                        <li key={g}>{g}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Movie
