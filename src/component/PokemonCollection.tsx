import React from "react";
import {  PokemonDetail } from "../interface";
import PokemonList from "./PokemonList";
import "./Pokemon.css";
import { Detail } from "../App";

interface Props {
  pokemons: PokemonDetail[];
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
}

const PokemonCollection: React.FC<Props> = (props) => {
  const { pokemons, viewDetail, setDetail } = props;
  const selectPokemon = (id:number) => {
    if(!viewDetail.isOpened){

        setDetail({
            id:id,
            isOpened: true,
        })
    }
  }
  return (
    <>
      <section className={viewDetail.isOpened? 'collection-container-active' : 'collection-container'}>
        
        {viewDetail.isOpened ? (
            <div className="overlay">

            </div>
        ) : (
            <div className="">

            </div>
        )}
        {pokemons.map((pokemons) => {
          return (
            <div onClick={()=>selectPokemon(pokemons.id)} >
              <PokemonList
                viewDetail={viewDetail}
                setDetail={setDetail}
                key={pokemons.id}
                name={pokemons.name}
                id={pokemons.id}
                abilities={pokemons.abilities}
                image={pokemons.sprites.front_default}
              />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default PokemonCollection;
