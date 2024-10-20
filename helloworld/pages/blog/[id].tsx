import { ParsedUrlQuery } from 'querystring';
import { Post } from '../../types/Post';
import { GetStaticProps} from 'next';
type Props = {
    post: Post
}

const BlogItem = ({post}: Props) => {
    return (
        <div>
            <h1>Blog</h1>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>
    );
}
export default BlogItem;

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts: Post[] = await res.json();

    const paths = posts.map(post => ({
        params: {id: post.id.toString()}
    }));

    // se false retorna 404
    // se true mostra alguma coisa se não existir
    // 'blocking' se não houver nada ele bloqueia o request
    return { paths, fallback: false }
}

interface IParams extends ParsedUrlQuery {
    id: string
}
export const getStaticProps: GetStaticProps = async (context) => {
    const { id } = context.params as IParams;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();

    return {
        props: {
            post
        }
    }
}