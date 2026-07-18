import BlurText from "@/components/ui/BlurText";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <BlurText
                text="  Welcome to AssetFlow"
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl mb-8 font-bold text-white" 
                delay={1000}
            />
        </div>
        
    );
}

export default LandingPage;