import  Image  from 'next/image'
import { GiSattelite } from 'react-icons/gi'

function WorldMap({xPos, yPos}) {

    


    return (
        <div className="max-w-screen-xl  mx-auto relative">
            <div className="absolute left-0 top-0 w-auto">
                <Image className="bottom-0 left-0 mx-auto" src="/earth-at-night.jpeg" height={300} width={800} layout='responsive' />
            </div>
            <div className={`absolute top-5/10 left-2/10 z-30 h-8 w-8`}>
                <GiSattelite className="h-8 w-8 text-white bg-transparent animate-pulse hover:scale-125" />
            </div>
        </div>
    )
}

export default WorldMap
