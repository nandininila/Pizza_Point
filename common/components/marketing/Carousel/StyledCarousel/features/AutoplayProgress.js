import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";

const AutoplayProgress = (props) => {
    const { progressCircle, progressContent, activeIndex } = props;

    let left;
    let right = "25%";

    if (activeIndex === 1) {
        left = "25%"
        right = 0;
    }

    const styles = {
        "--autoplay-progress-left": left,
        "--autoplay-progress-right": right,
        "--autoplay-progress-font-size": `${createFluidValue(.47, 1.2)}`,
        "--autoplay-progress-stroke-width": `${createFluidValue(.25, .35)}`,
    };

    return (
        <div style={styles} className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
        </div>
    )
}

export default AutoplayProgress