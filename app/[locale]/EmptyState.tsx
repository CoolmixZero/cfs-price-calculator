'use client';

import { useRouter } from "next/navigation";

import Button from "./Button";
import Heading from "./Heading";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset
}) => {
  const router = useRouter();

  return ( 
    <div 
      className="
        h-[40vh]
        flex 
        flex-col 
        gap-2 
        justify-center 
        items-center 
        text-black
        dark:text-white
      "
    >
      <Heading
        center
        title={title}
        subtitle={subtitle}
      />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            small
            label="Remove all filters"
            onClick={() => router.refresh()}
          />
        )}
      </div>
    </div>
   );
}
 
export default EmptyState;