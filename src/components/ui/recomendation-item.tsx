"use client";

import { User } from "@/types/user";
import Link from "next/link";
import { Button } from "./button";
import { useState } from "react";

type Props = {
  user: User;
};

export const RecomentationItem = ({ user }: Props) => {
  const [following, setFollowing] = useState(false);
  const handleFollowButton = () => {
    setFollowing(true);
  };
  return (
    <div className="flex items-center">
      <div className="size-10 mr-2 rounded-full overflow-hidden">
        <Link href={`/${user.slug}`}>
          <img src={user.avatar} alt={user.name} className="size-full" />
        </Link>
      </div>
      <div className="flex-1 overflow-hidden">
        <Link href={`/${user.slug}`} className="block truncate">
          <div className="text-gray-200 hover:text-gray-600">{user.name}</div>
        </Link>
        <div className="text-gray-400 text-sm truncate">{user.slug}</div>
      </div>
      <div className="pl-2 w-20">
        {!following && (
          <Button label="Seguir" onClick={handleFollowButton} size={3}></Button>
        )}
      </div>
    </div>
  );
};

export const RecomendationItemSkeleton = () => {
  return (
    <div className="animate-pulse flex items-center">
      <div className="size-10 mr-2 rounded-full bg-gray-600"></div>
      <div className="flex-1 flex flex-col gap-1">
        <div className="bg-gray-600 w-3/4 h-4"></div>
        <div className="bg-gray-600 w-1/4 h-4"></div>
      </div>
    </div>
  );
};
