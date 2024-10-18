//Entendendo SSG
import Link from "next/link";

type Props = {
    name: string;
}

const Blog = ({name}: Props) => {

    return (
        <div>
            <h1>Blog</h1>
            <p>Blog de {name}</p>
            <li>
                <Link href="">link</Link>
            </li>
        </div>
    );
}

export const getStaticProps = () => {

    return {
        props: {
            name: 'Bonieky'
        }
    }
}

export default Blog;