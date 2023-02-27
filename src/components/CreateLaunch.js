import { useState } from 'react';
import styles from './CreateLauch.module.css';
import { BiError } from 'react-icons/bi';
import { MdClose } from "react-icons/md";


export default function CreateLaunch() {
    // arrumar a funçao para verificar no banco
    // utilizar fastAPI
    const [launch, setLaunch] = useState('');
    const [launchError, setLaunchError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!launch) {
            setLaunchError(true);
            return;
        }
    };

    const handleLaunchChange = (e) => {
        setLaunch(e.target.value);
        setLaunchError(false);
    };

    const handleClearError = () => {
        setLaunchError(false);
    };
    return (
        <div className={styles.main_container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.form_content}>
                    <h2 className={styles.form_title}>Criar Lançamento</h2>
                    {launchError && (
                        <div className={styles.error_message}>
                            <div className={styles.icon_error}>
                                <span className={styles}><BiError size={30} /></span>
                            </div>
                            <span className={styles.span_text}>não existe usuario com este id</span>
                            <div className={styles.x}>
                                <span onClick={handleClearError}>
                                    <MdClose size={25} />
                                </span>
                            </div>
                        </div>
                    )}
                    {launchError && (
                        <div className={styles.squad_error}>
                            <label>ID do usuário</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Erro"
                                value={launch}
                                onChange={handleLaunchChange}
                            />
                        </div>
                    )}
                    {!launchError && (
                        <div className="form-group mt-1">
                            <label>ID do usuário</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Digite o Id do usuário"
                                value={launch}
                                onChange={handleLaunchChange}
                            />
                        </div>
                    )}
                    <div className="form-group mt-2">
                        <label>Horas gastas</label>
                        <input
                            type="number"
                            className="form-control mt-"
                            placeholder="Digite a quantidade de horas"
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Descrição</label>
                        <input
                            className="form-control mt-3"
                            style={{ height: '80px' }}
                            type="text"
                            placeholder="Exemplo de texto de descrição da tarefa executada"
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
    );
}


