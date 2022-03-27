import React from "react";
import {Character} from "../../../types/Character";
import {useHistory} from "react-router-dom";

export default function CharacterEdit(props: { data: Character }) {
    const row = props.data;
    const history = useHistory();

    const onDetail = (item: string) => {
        const params: Array<string> = item.split('/');
        const id = params.pop();
        const collection = params.pop();
        history.push(`/collection/${collection}/detail/${id}`)
    }

    console.log(row);

    return (
        <>
            <div className="">
                <h3 className="fw-bolder fs-1 mb-1">
                    <a href="#" className="text-gray-800">{row?.name || ''}</a>
                </h3>

                <div className="fs-7 mb-8">{row?.born || ''}</div>
                <table className="table table-borderless align-middle fw-bold">
                    <tbody>
                    <tr>
                        <td className="text-gray-600 ps-0">gender</td>
                        <td className="text-dark pe-0">{row?.gender || '--'}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">culture</td>
                        <td className="text-dark pe-0">{row?.culture || '--'}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">titles</td>
                        <td className="text-dark pe-0">{(row?.titles || []).join(', ')}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">Titles</td>
                        <td className="text-dark pe-0">{(row?.titles || []).join(', ')}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">aliases</td>
                        <td className="text-dark pe-0">{(row?.aliases || []).join(', ')}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">tvSeries</td>
                        <td className="text-dark pe-0">{(row?.tvSeries || []).join(', ')}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">playedBy</td>
                        <td className="text-dark pe-0">{(row?.playedBy || []).join(', ')}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">Books</td>
                        <td className="text-dark pe-0">
                            {
                                row?.books?.map((value, index) => {
                                    return (
                                        <div key={index.toString()}><a key={index.toString()} onClick={() => onDetail(value)}>{value}</a></div>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">allegiances</td>
                        <td className="text-dark pe-0">
                            {
                                row?.allegiances?.map((value, index) => {
                                    return (
                                        <div key={index.toString()}><a key={index.toString()} onClick={() => onDetail(value)}>{value}</a></div>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">povBooks</td>
                        <td className="text-dark pe-0">
                            {
                                row?.povBooks?.map((value, index) => {
                                    return (
                                        <div key={index.toString()}><a key={index.toString()} onClick={() => onDetail(value)}>{value}</a></div>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
