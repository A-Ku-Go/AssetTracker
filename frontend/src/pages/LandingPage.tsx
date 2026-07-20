import BlurText from "@/components/ui/BlurText";
import {useState} from "react";
import AnimatedOutlineButton from "@/components/ui/AnimatedOutlineButton";
import {motion} from "motion/react";
import {useNavigate} from "react-router-dom";

function LandingPage() {
    const [titleFinished, setTitleFinished] = useState(false);

    const [subtitleFinished, setSubtitleFinished] = useState(false);

    const navigate = useNavigate();

    const handleTitleAnimationComplete = () => {
        console.log("TITLE FINISHED");
        setTitleFinished(true);
    };

    const handleSubtitleAnimationComplete = () => {
        console.log("SUBTITLE FINISHED");
        setSubtitleFinished(true);
    };




    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-6">
            <BlurText
                text=" Asset-Flow"
                animateBy="words"
                direction="top"
                onAnimationComplete={handleTitleAnimationComplete}
                className="text-4xl mb-8 font-bold text-white" 
                delay={1000}
                start = {true}
            />
            <div className="h-8">
            {
                    titleFinished && (
                    <BlurText 
                        text="Modern Asset Management for growing organizations."
                        animateBy="words"
                        direction="top"
                        className="text-xl mb-8 font-bold text-white" 
                        delay={600}
                        onAnimationComplete={handleSubtitleAnimationComplete}
                        start = {true}
                    /> 
                )
            }

            </div>

            <div className="h-8">
            {
                subtitleFinished && (
                    <motion.div initial={{ opacity: 0, y: 3 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                        <AnimatedOutlineButton onClick={() => navigate("/dashboard")}>
                            Get Started
                        </AnimatedOutlineButton>
                    </motion.div>
                )
            }
            </div>
        </div>
        
    );
}

export default LandingPage;