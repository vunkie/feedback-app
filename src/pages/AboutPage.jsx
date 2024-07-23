import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
	return (
		<Card>
			<div className='about'>
				<h1>Sobre Esse Projeto</h1>
				<p>
					Este é um app React para deixar Feedback para um produto ou
					serviço{" "}
				</p>
				<p>Versão: 1.0.0</p>

				<p>
					<strong>Desenvolvido por:</strong>{" "}
					<a href='https://github.com/vunkie/' target='_blank'>
						Vunk
					</a>
				</p>

				<p>
					<Link to='/'>Voltar à Página Inicial</Link>
				</p>
			</div>
		</Card>
	);
}

export default AboutPage;
