"use client";

import { State, updatePost } from "@/actions/posts";
import { useFormState } from "react-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Post } from "@prisma/client";
import { useState } from "react";

interface UpdateFormProps {
  post: Post;
}

export default function UpdateForm({ post }: UpdateFormProps) {
  const initialState: State = { message: null };
  const updatePostWithId = updatePost.bind(null, post.id);
  const [state, dispatch] = useFormState(updatePostWithId, initialState);
  const [text, setText] = useState(post.text);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={dispatch} className="flex flex-col gap-4">
        {state.message && <div>{state.message}</div>}
        <div className="flex gap-2">
          <Input
            name="text"
            type="string"
            placeholder="Add some text here."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button>Submit</Button>
        </div>
      </form>
    </main>
  );
}
