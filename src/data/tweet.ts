import { Tweet } from "@/types/tweet";
import { user } from "./user";

export const tweet: Tweet = {
  id: 123,
  user: user,
  body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  image:
    "https://cursinhoparamedicina.com.br/wp-content/uploads/2022/10/Paisagem-1.jpg",
  likeCount: 10,
  commentCount: 5,
  reTweetCount: 2,
  liked: true,
  retweeted: false,
  datePost: new Date(2024, 8, 1, 10, 0, 0),
};
