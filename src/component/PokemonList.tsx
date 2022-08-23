import React, { useEffect, useState } from "react";
import { Detail } from "../App";
import "./Pokemon.css";

interface Props {
  viewDetail: Detail;
  setDetail: React.Dispatch<React.SetStateAction<Detail>>;
  abilities:
    | {
        ability: string;
        name: string;
      }[]
    | undefined;
  name: string;
  id: number;
  image: string;
}

const PokemonList: React.FC<Props> = (props) => {
  const { name, id, image, abilities, viewDetail, setDetail } = props;
  const [isSelected, setSelected] = useState(false);

  const closeDetail = () => {
    setDetail({
        id:0,
        isOpened:false,
    })
  }

  useEffect(() => {
    setSelected(id === viewDetail?.id);
  }, [viewDetail]);
  return (
    <div>
      {isSelected ? (
        <section className="pokemon-list-detailed">
          <div className="detail-container">
            <p className="detail-close" onClick={closeDetail}>x</p>
            <div className="detail-info">
              <img src={image} className="detail-image" />
              <p className="detail-name">{name}</p>
            </div>
            <div className="detail-skill">
              <p className="detail-abitlity">Abilities :</p>
              {abilities?.map((ab: any) => {
                return <div className="details">{ab.ability.name}</div>;
              })}
            </div>
          </div>
        </section>
      ) : (
        <section className="pokemon-list-container">
          <p className="pokemon-name">{name}</p>
          <img src={image} alt="pokemon" />
        </section>
      )}
    </div>
  );
};

export default PokemonList;
