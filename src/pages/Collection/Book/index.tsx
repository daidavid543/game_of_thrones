import React, {useEffect, useState} from "react";
import Action from "../../../components/Action";
import {useHistory} from "react-router-dom";
import {listCollection} from "../../../services/App";
import {Book} from "../../../types/Book";

export default function BookList(props: { collection: string }) {
    const [rows, setRows] = useState<Array<Book>>([]);
    const [search, setSearch] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [countries, setCountries] = useState<Array<string>>([]);
    const history = useHistory();
    const collection = props.collection;

    useEffect(() => {
        listCollection(collection, {}).then((value: Array<Book>) => {
            if (value && value.length) {
                setRows(value);
                setCountries(prevState => {
                    // Filter unique
                    const items: Array<string> = [];
                    value.map((item: Book) => !items.includes(item.country) ? items.push(item.country) : null);
                    return items;
                });
            }
        });
    }, [collection]);

    const onDetail = (item: Book) => {
        const id = item.url.toString().split('/').pop();
        history.push(`/collection/${collection}/detail/${id}`)
    }

    const filterItems = (): Array<Book> => {
        return rows.filter((value: Book) => {
            // Filter search
            if (!!search && !value.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                return false;
            }

            // Filter region
            return !(!!country && !value.country.toLocaleLowerCase().includes(country.toLocaleLowerCase()));
        });
    }

    return (
        <div>
            <div className="card-header border-0 py-5">
                <h3 className="card-title align-items-start flex-column">
                        <span className="card-label fw-bolder text-dark"
                              style={{textTransform: 'capitalize'}}>{collection}</span>
                    <span className="text-muted mt-3 fw-bold fs-7">List {collection} - Game Of Thrones Fan</span>
                </h3>
                <div className="card-toolbar" data-select2-id="select2-data-83-brtm">
                    <div className="position-relative pe-6 my-1">
                            <span
                                className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                          transform="rotate(45 17.0365 15.1223)" fill="black"/>
                                    <path
                                        d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                        fill="black"/>
                                </svg>
                            </span>
                        <input onChange={event => setSearch(event.target.value)} type="text"
                               className="w-150px form-control form-control-sm form-control-solid ps-10"
                               name="search" value={search} placeholder="Search"/>
                    </div>
                    <div className="my-1">
                        <select
                            value={country}
                            onChange={event => setCountry(event.target.value)}
                            className="form-select form-select-sm form-select-solid fw-bolder w-125px select2-hidden-accessible">
                            <option key={'-1'} value={''}>All Country</option>
                            {
                                countries.map((value: string, index: number) => {
                                    return (
                                        <option key={index.toString()} value={value}>{value}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="card-body pt-3 pb-0 mt-n3">
                <div className="table-responsive">
                    <table className="table table-borderless align-middle">
                        <thead>
                        <tr>
                            <th className="p-0 w-50px"/>
                            <th className="p-0 min-w-150px"/>
                            <th className="p-0 min-w-120px"/>
                            <th className="p-0 min-w-70px"/>
                            <th className="p-0 min-w-50px"/>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            filterItems().map((value: Book, index: number) => {
                                return (
                                    <tr key={index.toString()}>
                                        <td className="px-0 py-3">
                                            <div className="symbol symbol-65px bg-light-primary me-3">
                                                    <span className="symbol-label">
                                                        <span className="svg-icon svg-icon-1 svg-icon-primary">
                                                            {index + 1}
                                                        </span>
                                                    </span>
                                            </div>
                                        </td>
                                        <td className="px-0">
                                            <a onClick={event => onDetail(value)}
                                               className="text-gray-800 fw-bolder text-hover-primary fs-6">{value.name || '...'}</a>
                                            <span
                                                className="text-muted fw-bold d-block mt-1">{value.publisher}</span>
                                        </td>
                                        <td/>
                                        <td className="text-end">
                                            <span className="text-gray-800 fw-bolder d-block fs-6">Country</span>
                                            <span
                                                className="text-muted fw-bold d-block mt-1 fs-7">{value.country}</span>
                                        </td>
                                        <td className="text-end pe-0">
                                            <Action type={'edit'} onClick={() => onDetail(value)}/>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
