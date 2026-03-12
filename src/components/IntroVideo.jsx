import "../index.css"
import Intro from "../assets/video/intro.mp4"
function IntroVideo(){
    return(
        <>
        <div className="mt-5 mb-30 px-15 flex justify-center md:px-35 lg:px-80">
            <video src={Intro} controls="controls" autoPlay={true} className="rounded-4xl" />
        </div>
        </>
    )   
}

export default IntroVideo 