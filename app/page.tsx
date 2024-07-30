import PostsForm from "@/components/posts-form";
import prisma from "@/utils/db";
import { Post } from "@prisma/client";

export default async function Home() {
    const posts: Post[] = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="w-full flex flex-col gap-2">
                {posts.map((post) => (
                    <div key={post.id} className="p-3 flex justify-between items-center gap-2 border-2 border-black">
                        {post.text}
                    </div>
                ))}
            </div>
            <PostsForm />
        </main>
    );
}