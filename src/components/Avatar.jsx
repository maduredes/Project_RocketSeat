import styles from './Avatar.module.css'

//desestruturar
//const user ={name="Maria"}
//const{name}=user
export function Avatar({hasBorder=true,src}){
    return(
        <img className={hasBorder? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
        )
}