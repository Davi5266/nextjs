import { useRouter } from "next/router";

const Idade = () => {
    const router = useRouter();
    const { rotaDina } = router.query;

    return (
        <div>{rotaDina} tem 90 anos.</div>
    );
}

export default Idade;