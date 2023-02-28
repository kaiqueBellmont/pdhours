import styles from './Main.module.css'
import { useState } from 'react';


import union from "../assets/union.svg";

// import CardFrame from "../components/CardFrame";
import SquadsTable from '../components/SquadsTable';

export default function Main() {
  const [activeTab, setActiveTab] = useState('Squads');

  const handleSquadsClick = () => {
    setActiveTab('Squads');
  };

  const handleUsersClick = () => {
    setActiveTab('Usuários');
  };

  return (
    <div className={styles.squads_empty}>
      <div className={styles.flex_container}>
        <img className="union" src={union} alt="" />
      </div>
      <div className={styles.flex_container_1}>
        <span className={styles.pd_hours}>PD Hours</span>
        <button type="submit" className="btn btn-primary">
          Lançar horas
        </button>
      </div>
      <div className={styles.flex_container_2}>
        <span
          className={`${styles.squads} ${activeTab === 'Squads' ? styles.activeTab : ''
            }`}
          onClick={handleSquadsClick}
        >
          {activeTab === 'Squads' ? <b>Squads</b> : 'Squads'}
        </span>
        <span
          className={`${styles.users} ${activeTab === 'Usuários' ? styles.activeTab : ''
            }`}
          onClick={handleUsersClick}
        >
          {activeTab === 'Usuários' ? <b>Usuários</b> : 'Usuários'}
        </span>
      </div>
      <div className={styles.rectangle_5}>
        <div className={styles.rectangle_3}>
        </div>
        <div>
          <h2 className={styles.squad_list_title}>
            Lista de squads
          </h2>
        </div>
        <SquadsTable/>
        {/* <CardFrame className={styles.frame_1_instance_1} /> */}
      </div>
    </div>
  );
};
