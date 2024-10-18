import Link from "next/link";

const HomePage = () => {
    return(
        <div>
            <h1>Hello World!!!!</h1>
            <ul>
                <li><Link href="/subDiretorios/">subDiretorio</Link></li>
                <li><Link href="/subDiretorios/joao">subDiretorio Joao</Link></li>
                <li><Link href="/blog/">Blog</Link></li>
                <li><a href="">link04</a></li>
            </ul>
        </div>
    );
}
export default HomePage;