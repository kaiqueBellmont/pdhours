import styles from './Home.module.css'

// import { useNavigate } from 'react-router-dom';

export default function Home() {
  // const navigate = useNavigate();

  // function handleCriarUsuario() {
  //   navigate("/criarusuario");
  // }

  // function handleAlgumaOutraAcao() {
  //   navigate("/algumaoutraacao");
  // }

  // function handleMaisUmaAcao() {
  //   navigate("/maisumaacao");
  // }

  return (

    <div className={styles.main_container}>
      <div className={styles.modal}>
        <img src="logoempresa.svg" alt="" />

        <div className={styles.modal_content}>
          <h3 className={styles.modal_content_title}>Ações Disponíveis</h3>
          <div className="d-grid gap-2 mt-3">
            <button
              // onClick={handleCriarUsuario}
              className="btn btn-primary"
            >
              Criar Usuário
            </button>
            <button
              // onClick={handleAlgumaOutraAcao}
              className="btn btn-primary"
            >
              Criar lançamento
            </button>
            <button className="btn btn-primary">
              Criar equipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}