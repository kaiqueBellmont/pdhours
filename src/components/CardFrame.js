import styles from "./CardFrame.module.css";
import emoji from "../assets/emoji.svg";

const CardFrame = (props) => {
  return (
    <div className={`${styles.card_frame_1} ${props.className || ""}`}>
      <img className={styles.emoji} src={props.emoji || emoji} />
      <p className={styles.nenhuma_squad_cadast}>

        Nenhuma squad cadastrada. Crie uma squad para começar.
      </p>
      <button type="submit" className="btn btn-primary">
        Criar Squad
      </button>
    </div>
  );
};
export default CardFrame;
