import { useState } from 'react';
import { Header } from './components/Header';
import {Post} from './components/Post';
import styles from './App.module.css' ;
import './global.css';
import { SideBar } from './components/Sidebar';
export function App() {

  return (
    <div>
      <Header/>
      <div className={styles.wrapper}>
        <SideBar/>
        <main>  
            <Post author="Maria"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique ipsum repudiandae aut facilis nam quos modi libero ipsa nihil. Accusantium architecto qui aliquid ullam? Dolorem provident aliquam tenetur recusandae.
      "/></main>
      </div>

</div>
  )
}


//vantagem de usar o export default: posso dar um nome diferente na importação
//vantagem do named export: não deixa colocar outro nome a nao ser o da função
