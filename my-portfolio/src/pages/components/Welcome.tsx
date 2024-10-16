import { Fade, Slide } from "react-awesome-reveal";

const Welcome = () =>  {
    return(
        <div className="clip-polygon w-full text-center text-3xl leading-loose">
            <Fade direction="up"  delay={450} duration={2000} cascade damping={0.5}>
                <p>Hi my name is Krishi</p>
                <p>I'm currently a final year CS student at</p>
                <p>Middlesex University Mauritius</p>
            </Fade>  

            <Slide direction="up"  delay={2400} duration={3000}>
                <img src="programmer.png" alt="gif" className="block relative mr-auto ml-auto" />
            </Slide>
        </div>
    );
}

export default Welcome;