import React from "react";
import {useHistory, useLocation, useParams} from "react-router-dom";

export default function Header(props: {}) {
    const history = useHistory();
    let location = useLocation();
    const collections: Array<string> = ['books', 'characters', 'houses'];

    const onLogout = () => {
        localStorage.clear();
        window.location.reload();
    }

    const onList = (collectionStr: string) => {
        history.push(`/collection/${collectionStr}`)
    }

    return (
        <div id="kt_header" className="header">

            <div className="container-xxl d-flex align-items-stretch justify-content-between"
                 style={{maxWidth: '100%'}}>

                <div className="d-flex align-items-center">
                    <button className="btn btn-icon btn-accent me-2 me-lg-6" id="kt_mega_menu_toggle">
                          <span className="svg-icon svg-icon-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15"
                                             viewBox="0 0 16 15" fill="none">
											<rect y="6" width="16" height="3" rx="1.5" fill="black"></rect>
											<rect opacity="0.3" y="12" width="8" height="3" rx="1.5"
                                                  fill="black"></rect>
											<rect opacity="0.3" width="12" height="3" rx="1.5" fill="black"></rect>
										</svg>
									</span>
                    </button>


                    <div id="kt_toolbar" className="d-flex flex-stack flex-wrap flex-sm-nowrap">
                        <div className="d-flex flex-column align-items-start justify-content-center flex-wrap me-1">
                            <h3 className="text-dark fw-bolder my-1">Game Of Thrones Fan
                                <small className="text-muted fs-7 fw-bold ms-1"> </small></h3>
                        </div>
                    </div>

                </div>


                <div className="d-flex align-items-center">
                    {
                        collections.map((value, index) => {
                            return (
                                <button style={{textTransform: 'capitalize'}} onClick={() => onList(value)}
                                        key={index.toString()}
                                        className={"btn btn-sm ms-1 ms-lg-6 " + (location.pathname.indexOf(value) > 0 ? 'btn-primary' : '')}>{value.toString()}</button>
                            )
                        })
                    }

                    <button onClick={event => onLogout()}
                            className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6">

                          <span className="svg-icon svg-icon-1 svg-icon-dark">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none">
<rect opacity="0.3" x="4" y="11" width="12" height="2" rx="1" fill="black"/>
<path
    d="M5.86875 11.6927L7.62435 10.2297C8.09457 9.83785 8.12683 9.12683 7.69401 8.69401C7.3043 8.3043 6.67836 8.28591 6.26643 8.65206L3.34084 11.2526C2.89332 11.6504 2.89332 12.3496 3.34084 12.7474L6.26643 15.3479C6.67836 15.7141 7.3043 15.6957 7.69401 15.306C8.12683 14.8732 8.09458 14.1621 7.62435 13.7703L5.86875 12.3073C5.67684 12.1474 5.67684 11.8526 5.86875 11.6927Z"
    fill="black"/>
<path
    d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z"
    fill="#C4C4C4"/>
</svg>
									</span>

                    </button>
                </div>

            </div>

        </div>
    )
}
