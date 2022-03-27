import React from "react";
import {House} from "../../../types/House";
import {useHistory} from "react-router-dom";

export default function HouseEdit(props: { data: House }) {
    const row = props.data;
    const history = useHistory();

    const onDetail = (item: string) => {
        const params: Array<string> = item.split('/');
        const id = params.pop();
        const collection = params.pop();
        history.push(`/collection/${collection}/detail/${id}`)
    }

    return (
        <>
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
                        <td className="text-dark pe-0">
                            <a onClick={() => onDetail(row?.overlord)}>{row?.overlord || '--'}</a>
                        </td>
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
                    <tr>
                        <td className="text-gray-600 ps-0">CurrentLord</td>
                        <td className="text-dark pe-0">
                            <a onClick={() => onDetail(row?.currentLord)}>{row?.currentLord}</a>
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">SwornMembers</td>
                        <td className="text-dark pe-0">
                            {
                                row?.swornMembers?.map((value, index) => {
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
