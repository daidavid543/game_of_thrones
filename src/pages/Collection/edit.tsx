import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {getCollection} from "../../services/App";

export default function CollectionEdit(props: any) {
    let {id, collection}: any = useParams();
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
                        <div className="">
                            <h3 className="fw-bolder fs-1 mb-1">
                                <a href="#" className="text-gray-800">{row?.name || ''}</a>
                            </h3>

                            <div className="fs-7 mb-8">{row?.coatOfArms || ''}</div>
                            <table className="table table-borderless align-middle fw-bold">
                                <tbody>
                                <tr>
                                    <td className="text-gray-600 ps-0">Region</td>
                                    <td className="text-dark pe-0">{row?.region || '--'}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">Founded</td>
                                    <td className="text-dark pe-0">{row?.founded || '--'}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">DiedOut</td>
                                    <td className="text-dark pe-0">{row?.diedOut || '--'}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">Words</td>
                                    <td className="text-dark pe-0">{row?.words || '--'}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">Overlord</td>
                                    <td className="text-dark pe-0">{row?.overlord || '--'}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">Heir</td>
                                    <td className="text-dark pe-0">{row?.heir || '--'}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">Seats</td>
                                    <td className="text-dark pe-0">{(row?.seats || []).join(', ')}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">Titles</td>
                                    <td className="text-dark pe-0">{(row?.titles || []).join(', ')}</td>
                                </tr>
                                <tr>
                                    <td className="text-gray-600 ps-0">AncestralWeapons</td>
                                    <td className="text-dark pe-0">{(row?.ancestralWeapons || []).join(', ')}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
