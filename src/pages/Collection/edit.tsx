import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getCollection} from "../../services/App";
import HouseEdit from "./House/edit";
import BookEdit from "./Book/edit";
import CharacterEdit from "./Character/edit";

export default function CollectionEdit(props: any) {
    let {id, collection} = useParams<{ id: string, collection: string }>();
    const [row, setRow] = useState<any>({});


    useEffect(() => {
        getCollection(collection, id).then(value => {
            if (value) {
                setRow(value);
            }
        })
    }, [id, collection])


    return (
        <>
            <div className="card mb-5 mb-xxl-8">
                <div className="card-body d-flex bg-white p-12 flex-column flex-md-row flex-lg-column flex-xxl-row">
                    <div className="card shadow-none w-auto w-md-300px w-lg-auto w-xxl-300px ml-auto">
                        {
                            collection === 'houses' ? (<HouseEdit data={row}/>) : null
                        }
                        {
                            collection === 'books' ? (<BookEdit data={row}/>) : null
                        }
                        {
                            collection === 'characters' ? (<CharacterEdit data={row}/>) : null
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
