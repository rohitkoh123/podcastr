import Image from "next/image";
import React from "react";

interface podcastProps {
  description: string;
  imgURL: string;
  title: string;
  podcastId: number;
}
const PodcastCard: React.FC<podcastProps> = ({
  description,
  imgURL,
  title,
  podcastId,
}) => {
  return (
    <div className="cursor-pointer">
      <figure className="flex flex-col gap-2">
        <Image
          className="aspect-square h-fit w-full rounded-xl 2xl:size-[200px]"
          src={imgURL}
          width={174}
          height={174}
          alt={title}
        />
        <div className="flex flex-col">
          <h1 className="text-16 truncate font-bold text-white-1">{title}</h1>
          <h2 className="text-12 truncate font-normal capitalize text-white-4">
            {description}
          </h2>
        </div>
      </figure>
    </div>
  );
};

export default PodcastCard;
