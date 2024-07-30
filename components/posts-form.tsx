"use client";

import { addPosts, State } from "@/actions/posts";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function PostsForm() {
  const initialState: State = {
    message: null,
  };

  const [state, dispatch] = useFormState(addPosts, initialState);
  return (
    <form action={dispatch} className="w-full flex flex-col gap-4">
      {state.message && <div>{state.message}</div>}
      <div className="flex gap-2">
        <Input name="text" type="string" placeholder="Add some text here." />
        <Button>Submit</Button>
      </div>
    </form>
  );
}
