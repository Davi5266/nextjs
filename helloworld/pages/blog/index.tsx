//Entendendo SSG
import Link from "next/link";
import { Post } from '../../types/Post';

type Props = {
    name: string;
    posts: Post[]
}

const Blog = ({name, posts }: Props) => {

    return (
        <div>
            <h1>Blog</h1>
            <p>Blog de {name}</p>
            <ul>
                {posts.map((post, index) => (
                    <li key={index}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                        </li>
                ))}
            </ul>
        </div>
    );
}

export const getStaticProps = async () => {
    //Requisição a API
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    //const posts = await res.json();
    const posts: Post[] = await res.json();

    return {
        props: {
            name: 'Bonieky',
            posts
        },
        revalidate: 7200
    }
}

export default Blog;