import { useState } from 'react';
import styles from './CreateUser.module.css';
import { BiError } from 'react-icons/bi';
import { MdClose } from "react-icons/md";


export default function CreateUser() {
  // arrumar a funçao para verificar no banco
  // utilizar fastAPI
  const [squad, setSquad] = useState('');
  const [squadError, setSquadError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!squad) {
      setSquadError(true);
      return;
    }
  };

  const handleSquadChange = (e) => {
    setSquad(e.target.value);
    setSquadError(false);
  };

  const handleClearError = () => {
    setSquadError(false);
  };
  return (
    <div className={styles.main_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_content}>
          <h2 className={styles.form_title}>Criar usuário</h2>
          {squadError && (
            <div className={styles.error_message}>
              <div className={styles.icon_error}>
                <span className={styles}><BiError size={30} /></span>
              </div>
              <span className={styles.span_text}>não existe squad com este id</span>
              <div className={styles.x}>
                <span onClick={handleClearError}>
                  <MdClose size={25} />
                </span>
              </div>
            </div>
          )}
          <div className="form-group mt-1">
            <label>nome do usuário</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Digite o nome do usuário"
            />
          </div>
          <div className="form-group mt-2">
            <label>Horas estimadas de trabalho</label>
            <input
              type="number"
              className="form-control mt-"
              placeholder="Digite a quantidade de horas"
            />
          </div>

          {!squadError && (
            <div className="form-group mt-3">
              <label>Squad</label>
              <input
                className="form-control mt-3"
                type="text"
                placeholder="Digite o nome da squad"
                value={squad}
                onChange={handleSquadChange}
              />
            </div>
          )}
          {squadError && (
            <div className={styles.squad_error}>
              <label>Squad</label>
              <input
                className={styles.squad_error_input}
                type="text"
                id='squaderror'
                placeholder="Erro"
                value={squad}
                onChange={handleSquadChange}
              />
            </div>
          )}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Criar usuário
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
