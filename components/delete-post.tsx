"use client";
import { deletePost, State } from "@/actions/posts";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";

interface DeletePostProps {
    postId: number;
}

export default function DeletePost({ postId }: DeletePostProps) {
    const deletePostWithId = deletePost.bind(null, postId);
    return (
        <form action={deletePostWithId} className="flex">
            <Button>
                <span className="sr-only">Delete</span>
                <TrashIcon className="w-5 h-5" />
            </Button>
        </form>
    );
}