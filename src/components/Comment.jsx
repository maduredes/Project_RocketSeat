import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/maduredes.png" alt="" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                        <strong>Maria Eduarda</strong>
                        <time title="15 de janeiro de 2022" dateTime="2023-01-15">Cerca de 1h atrás</time>

                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom</p>
                </div>
                <footer>
                    <button>
                    <ThumbsUp/>
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>

        </div>
    )
}