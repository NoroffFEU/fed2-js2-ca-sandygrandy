import { onReadPosts } from "../../ui/home";
import { authGuard } from "../../utilities/authGuard";
import { readPosts } from "../../api/post/read";

authGuard();

try {
    const posts = await readPosts();
    onReadPosts(posts);
} catch (error) {
    console.error("Failed to fill posts:", error);
    alert(error.message);
}

