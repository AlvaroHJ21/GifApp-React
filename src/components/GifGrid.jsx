import React, { useState, useEffect } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

//useEffect: ejecutra codigo de manera condcional

export const GifGrid = ({ category }) => {
    const { data: images, loading } = useFetchGifs(category);

    return (
        <div className="categoria">
            <h3>{category}</h3>
            {loading && <p>"Cargando..."</p>}
            <div className="container-gifs">
                {images.map((img) => (
                    <GifGridItem key={img.id} img={img} />
                ))}
            </div>
        </div>
    );
};
