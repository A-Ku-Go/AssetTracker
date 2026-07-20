import BlurText from "@/components/ui/BlurText";
import {useState} from "react";



function LandingPage() {
    const [titleFinished, setTitleFinished] = useState(false);

    const handleAnimationComplete = () => {
        console.log("TITLE FINISHED");
        setTitleFinished(true);
    };



    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <BlurText
                text=" Asset-Flow"
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl mb-8 font-bold text-white" 
                delay={1000}
                start = {true}
            />
            <div className="h-10">
            {
                    titleFinished && (
                    <BlurText 
                        text=" Modern Asset Management for growing organizations."
                        animateBy="words"
                        direction="top"
                        className="text-xl mb-8 font-bold text-white" 
                        delay={400}
                        start = {true}
                    /> 
                )
            }
            </div> 
        </div>
        
    );
}

export default LandingPage;