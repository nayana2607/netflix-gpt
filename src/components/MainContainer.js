
import {useSelector} from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

import { API_OPTIONS } from '../utils/constants'

const MainContainer =async  () => {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies)
    if(movies===null)return

    const mainMovie=movies[0]
    console.log(mainMovie)
    const {original_title,overview,id}=mainMovie;
    const data=await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`,
    API_OPTIONS)
    const json= await data.json()
    console.log(json)
  return (
    <div>
          <VideoTitle title={original_title} overview={overview}/>
          <VideoBackground/>
    </div>
  )
}

export default MainContainer
