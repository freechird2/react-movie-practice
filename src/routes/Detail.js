import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(true)
    const [movie, setMovie] = useState({})

    const getMovie = async () => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json()
        console.log(json.data.movie)

        setMovie(json.data.movie)
        setLoading(false)
    }

    useEffect(() => {
        if (!id) alert('id가 없습니다.')
        else getMovie()
    }, [])
    return (
        <div>
            <h1>Detail</h1>
        </div>
    )
}

export default Detail
