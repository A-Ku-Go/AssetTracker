import Ferrofluid from "@/components/background/Ferrofluid";

function Background() {
  return (
  <div style={{position: 'fixed',top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, overflow: 'hidden' }}>
    <Ferrofluid 
      colors={["#ffffff","#ffffff","#ffffff"]}
      speed={0.5}
      scale={1.5}
      turbulence={1}
      fluidity={0.1}
      rimWidth={0.2}
      sharpness={2.5}
      shimmer={1.5}
      glow={1.0}
      flowDirection="down"
      opacity={1}
      mouseInteraction
      mouseStrength={1}
      mouseRadius={0.35}
    />
  </div>
  );
}
export default Background;
