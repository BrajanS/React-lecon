import './App.css';
import {Liste,Values} from './components/Liste';
import Somme from './components/Somme';
import Compteur from './components/Compteur';
import { useState } from 'react';
import Form from './components/Form';
import NameForm from './components/NameForm';

export default function App() {
  const produits = [
      {id: 1, nom: "Laptop", prix: 999.99},
      {id: 2, nom: "Smartphone", prix: 599.99},
      {id: 3, nom: "Tablette", prix: 399.99},
  ];
  const [content,setContent] = useState()
  const [isClicked,setIsClicked] = useState(true);

  function ShowStuff(){
      const resultat = produits.map(produit => <li key={produit.id}>{produit.nom}</li>)
      setContent(resultat);
  }
  // const ids = produits.map(item=>item.id)
  // const names = produits.map(item=>item.nom)
  // const prixs = produits.map(item=>item.prix)
  // const [nom,setNom] = useState("")
  return (
    <div className="App">
      <h1>Hi </h1>
      <button className='btn btn-accent' onClick={()=> setIsClicked(!isClicked)}>Show Compteur</button>
      {isClicked && <Compteur/>}
      <button className='btn btn-accent' onClick={ShowStuff}>Produits</button>
      <NameForm/>
      <ul>
        {content}
      </ul>
      {/* <Form/> */}
      {/* <button onClick={()=> setNom('Brajan')}>Click</button><br></br> */}
      {/* <button className='bg-[#cccccc]' onClick={compteur}>UseEffect()</button> */}
      {/* <Liste ListI={ids} ListName={names} ListPrice={prixs}/>
      <Values ValI={ids} ValNom={names} ValPrix={prixs}/> */}
      {/*<Somme Sum={num1+num2} num1={produits[0].prix} num2={produits[2].prix}/>*/}
    </div>
  );
}