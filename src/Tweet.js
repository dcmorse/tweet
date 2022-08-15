import { useState } from "react";
import { TextInput } from "./TextInput";
import { Submit } from "./Submit";

export const Tweet = () => {
  const [tweet, setTweet] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    alert(JSON.stringify(tweet));
    setTweet("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        What's on your mind?
        <br />
        <TextInput text={tweet} setText={setTweet} />
      </label>
      <Submit text="Tweet" />
    </form>
  );
};
