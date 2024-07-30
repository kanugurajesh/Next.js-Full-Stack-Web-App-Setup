"use server";

import prisma from "@/utils/db";
import { revalidatePath } from "next/cache";

export type State = {
  message?: string | null;
};

export async function addPosts(prevState: State, formData: FormData) {
  const text = formData.get("text") as string;
  if (text) {
    await prisma.post.create({
      data: { text },
    });
    revalidatePath("/");
    return { message: "success" };
  } else {
    return { message: "Invalid field." };
  }
}

export async function deletePost(postId: number, formData: FormData) {
  try {
    await prisma.post.delete({
      where: { id: postId },
    });
    revalidatePath("/");
    return { message: "Post deleted successfully" };
  } catch (err) {
    console.error(err);
    return { message: "Error deleting post" };
  }
}

export async function updatePost(
  postId: number,
  prevState: State,
  formData: FormData
) {
  try {
    const text = formData.get("text") as string;
    await prisma.post.update({
      where: { id: postId },
      data: { text },
    });
    revalidatePath("/");
    return { message: "Post updated successfully" };
  } catch (err) {
    console.error(err);
    return { message: "Error updating post" };
  }
}
