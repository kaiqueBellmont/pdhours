import React from 'react'
import styles from './CreateUser.module.css'

export default function CreateUser() {
  return (
    <div className={styles.main_container}>
      <form className={styles.form}>
        <div className={styles.form_content}>
          <h2 className={styles.form_title}>Criar usuário</h2>
          <div className="form-group mt-3">
            <label>nome do usuario</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Digite o nome da squad"
            />
          </div>
          <div className="form-group mt-3">
            <label>Horas estimadas de trabalho</label>
            <input
              type="number"
              className="form-control mt-1"
              placeholder="Digite a quantidade de horas" />
          </div>
          <div className="form-group mt-3">
            <label>Squad</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Digite o nome da squad"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Criar usuário
            </button>
          </div>

        </div>
      </form>
    </div>
  )
}
