import React from "react";
import {Book} from "../../../types/Book";
import {useHistory} from "react-router-dom";

export default function BookEdit(props: { data: Book }) {
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

                <div className="fs-7 mb-8">{row?.publisher || ''}</div>
                <table className="table table-borderless align-middle fw-bold">
                    <tbody>
                    <tr>
                        <td className="text-gray-600 ps-0">country</td>
                        <td className="text-dark pe-0">{row?.country || '--'}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">numberOfPages</td>
                        <td className="text-dark pe-0">{row?.numberOfPages || '--'}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">isbn</td>
                        <td className="text-dark pe-0">{row?.isbn || '--'}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">mediaType</td>
                        <td className="text-dark pe-0">{row?.mediaType || '--'}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">authors</td>
                        <td className="text-dark pe-0">{(row?.authors || []).join(', ')}</td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">characters</td>
                        <td className="text-dark pe-0">
                            {
                                row?.characters?.map((value, index) => {
                                    return (
                                        <div key={index.toString()}><a key={index.toString()} onClick={() => onDetail(value)}>{value}</a></div>
                                    )
                                })
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="text-gray-600 ps-0">povCharacters</td>
                        <td className="text-dark pe-0">
                            {
                                row?.povCharacters?.map((value, index) => {
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
