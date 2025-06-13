import { getAminoColor } from "@/helpers";

interface IAlignmentVisualizerProps {
  firstAlignedSequence: string;
  secondAlignedSequence: string;
}

export const AlignmentVisualizer = ({
  firstAlignedSequence,
  secondAlignedSequence
}: IAlignmentVisualizerProps) => (
  <div>
    <div>
      {firstAlignedSequence.split("").map((char, index) => (
        <span style={{ backgroundColor: getAminoColor(char) }} key={index}>
          {char}
        </span>
      ))}
    </div>
    <div>
      {secondAlignedSequence.split("").map((char, index) => (
        <span
          style={{
            backgroundColor: firstAlignedSequence[index] !== char ? "#CCCCCC" : "transparent"
          }}
          key={index}
        >
          {char}
        </span>
      ))}
    </div>
  </div>
);
