import { getAminoColor } from "@/helpers";
import { useCopyWithNotify } from "@/hooks";

import { Typography } from "./ui";

interface IAlignmentVisualizerProps {
  firstAlignedSequence: string;
  secondAlignedSequence: string;
}

export const AlignmentVisualizer = ({
  firstAlignedSequence,
  secondAlignedSequence
}: IAlignmentVisualizerProps) => {
  const { handleCopy } = useCopyWithNotify();

  return (
    <div className='mt-10 min-h-[182px] p-6 rounded-lg shadow-md'>
      <Typography tag='h2' variant='m_medium' className='text-center border-b pb-4'>
        Визуализация сравнения
      </Typography>

      <div className='flex items-center flex-col justify-center'>
        {firstAlignedSequence && secondAlignedSequence ? (
          <>
            <div className='mb-2 p-3 rounded-md mt-2 bg-gray-100'>
              <Typography className='flex flex-wrap gap-y-1' onMouseUp={handleCopy}>
                {firstAlignedSequence.split("").map((char, index) => (
                  <span
                    className='px-2.5 py-1 ml-1 first:ml-0 rounded-sm'
                    style={{ backgroundColor: char !== "-" ? getAminoColor(char) : undefined }}
                    key={`first-sequence-${index}`}
                  >
                    {char}
                  </span>
                ))}
              </Typography>
            </div>

            <div className='flex flex-wrap gap-1 p-3 rounded-md bg-gray-100'>
              <Typography className='flex flex-wrap' onMouseUp={handleCopy}>
                {secondAlignedSequence.split("").map((char, index) => (
                  <span
                    className='px-2.5 py-1 ml-1 first:ml-0 rounded-sm'
                    style={{
                      backgroundColor:
                        firstAlignedSequence[index] !== char && char !== "-"
                          ? getAminoColor(char)
                          : undefined
                    }}
                    key={`second-sequence${index}`}
                  >
                    {char}
                  </span>
                ))}
              </Typography>
            </div>
          </>
        ) : (
          <Typography className='mt-5'>
            Введите последовательности для сравнения чтобы увидеть результат
          </Typography>
        )}
      </div>
    </div>
  );
};
