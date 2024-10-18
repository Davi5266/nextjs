import { useRouter } from "next/router";

const RotaD = () => {
    const router = useRouter();
    const { rotaDina } = router.query;

    return (
        <div>
            Página de {rotaDina}
            <p>.</p>
            <p>Exemplo de Página Dinamica</p>
            <a href="">link</a>
        </div>
        
    );
}

export default RotaD;