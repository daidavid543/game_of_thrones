import React from "react";
import RouterApp from "../navigations/Router";
import {useSelector} from "react-redux";
import Auth from "./Auth";

export default function Index(props: any) {
    const user = useSelector((state: any) => state.Auth.user);

    return user ? (
        <div style={{backgroundColor: '#fbfbfb'}} className="d-flex flex-column flex-root">
            <div className="page d-flex flex-row flex-column-fluid">
                <RouterApp/>
            </div>
        </div>
    ) : (
        <Auth/>
    )
}
