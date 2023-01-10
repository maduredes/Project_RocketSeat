import { useState } from 'react'
import {Post} from './Post'
export function App() {

  return (
    <Post author="Maria"
    content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias similique ipsum repudiandae aut facilis nam quos modi libero ipsa nihil. Accusantium architecto qui aliquid ullam? Dolorem provident aliquam tenetur recusandae.
"/>
  )
}


//vantagem de usar o export default: posso dar um nome diferente na importação
//vantagem do named export: não deixa colocar outro nome a nao ser o da função
