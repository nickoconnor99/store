import { cn } from "@/lib/utils";

function EmptyList({
  heading = "No items found.",
  className,
}: {
  heading?: string;
  className?: string;
}) {
  return <h2 className={cn("text-xl ", className)}>{heading}</h2>; 
}

export default EmptyList;

//text-xl will always be applied and cn allows more classNames to be applied if sent