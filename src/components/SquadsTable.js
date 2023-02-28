import styles from './SquadsTable.module.css';

export default function SquadsTable() {
  const squads = [
    { id: 1, nome: 'Squad 1' },
    { id: 2, nome: 'Squad 2' },
    { id: 3, nome: 'Squad 3' },
    { id: 4, nome: 'Squad 4' },
    { id: 5, nome: 'Squad 5' },
  ];

  return (
    <div className={styles.frame_1}>
      <table>
        <thead>
          <tr className={styles.header}>
            <div className={styles.id_box}>
              <th className={styles.header_id}>ID</th>
            </div>
            <div className={styles.nome_box}>
              <th className={styles.header_nome}>Nome</th>
            </div>
          </tr>
        </thead>
        <tbody>
          {squads.map((squad) => (
            <tr key={squad.id} className={styles.teste}>
              <td className={styles.nome_box}><b>{squad.id}</b></td>
              <td className={styles.nome_box}><b>{squad.nome}</b></td>
              <td>
                <button type="submit" className="btn btn-primary">
                  Visitar Squad
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.submit}>
        <button type="submit" className="btn btn-primary">
          Criar Squad
        </button>
      </div>
    </div>
  );
}
