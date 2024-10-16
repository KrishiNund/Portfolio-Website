import { Fade, Slide } from "react-awesome-reveal";

const Welcome = () =>  {
    return(
        <div className="clip-polygon w-full text-center text-3xl">
            <Fade direction="up"  delay={450} duration={2000} cascade damping={0.5}>
                <p>Hi my name is Krishi</p>
                <p>I'm currently a final year CS student at Middlesex University Mauritius.</p>
            </Fade>  
        </div>
    );
}

export default Welcome;