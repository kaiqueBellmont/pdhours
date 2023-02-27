import styles from './Home.module.css'


import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  function handleCreateUser() {
    navigate("/createuser");
  }

  function handleCreateLaunch() {
    navigate("/createlaunch");
  }

  function handleCreateSquad() {
    navigate("/createSquad");
  }

  function handleMainpage() {
    navigate("/mainpage");
  }

  return (

    <div className={styles.main_container}>
      <div className={styles.modal}>
        <img src="logoempresa.svg" alt="" />

        <div className={styles.modal_content}>
          <h3 className={styles.modal_content_title}>Ações Disponíveis</h3>
          <div className="d-grid gap-2 mt-3">
            <button
              onClick={handleCreateUser}
              className="btn btn-primary"
            >
              Criar Usuário
            </button>
            <button
              onClick={handleCreateLaunch}
              className="btn btn-primary"
            >
              Criar lançamento
            </button>
            <button
              onClick={handleCreateSquad}
              className="btn btn-primary">
              Criar equipe
            </button>

            <button
              onClick={handleMainpage}
              className="btn btn-primary">
              Main Page
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}