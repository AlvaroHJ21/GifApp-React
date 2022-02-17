import React, { useState } from "react";
import PropTypes from "prop-types";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = (props) => {
    // const categories = ["One punch", "Samuruai X", "Dragon Ball"];
    const [categorias, setCategorias] = useState([
        "Rick"
    ]);

    const handleAdd = () => {
        setCategorias([...categorias, "ahhhh"]);
    };

    return (
        <>
            <div className="container">
                <h2>GifExpertApp</h2>
                <AddCategory setCategories={setCategorias} />
                <hr />

                {/* <button onClick={handleAdd} className="btn">
                    Agregar
                </button> */}
                <ol className="categorias">
                    {categorias.map((e) =>
                        <GifGrid key={e}  category={e} />
                    )}
                </ol>
            </div>
        </>
    );
};

GifExpertApp.propTypes = {};

export default GifExpertApp;
