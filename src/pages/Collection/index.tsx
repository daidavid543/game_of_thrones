import React from "react";
import {useParams} from "react-router-dom";
import HouseList from "./House";
import BookList from "./Book";

export default function Collection(props: any) {
    const {collection} = useParams<{ collection: string }>();

    return (
        <>
            <div className="card">
                {
                    collection === 'houses' ? (<HouseList collection={collection}/>) : null
                }
                {
                    collection === 'books' ? (<BookList collection={collection}/>) : null
                }
                {
                    collection === 'characters' ? (<HouseList collection={collection}/>) : null
                }
            </div>
        </>
    )
}
