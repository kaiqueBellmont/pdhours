import styles from './CreateUser.module.css';

export default function CreateUser() {

  function handleSubmit(e) {
    e.preventDefault(); // impedir comportamento padrão do navegador
    // realizar as ações desejadas, como enviar dados para o servidor
  }

  return (
    <div className={styles.main_container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_content}>
          <h2 className={styles.form_title}>Criar Squad</h2>
          <div className="form-group mt-1">
            <label>nome da Squad</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Digite o nome da squad"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Criar squad
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
