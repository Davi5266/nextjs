import Link from 'next/link'

const Teste002 = () => {
    return (
        <div>
            <h1>Página Sobre</h1>

            <ul>
                <li>
                    <Link href="/subDiretorios/joao">link01</Link>
                </li>
                <li>
                    <Link href="/subDiretorios/maria">link02</Link>
                </li>
                <li>
                    <Link href="/subDiretorios/maria">Teste tag: Link</Link>
                </li>
            </ul>
        </div>
    );
}

export default Teste002;