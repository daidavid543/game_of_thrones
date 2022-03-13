import React from "react";

export default function Dashboard(props: any) {
    return (
        <>
            <div className="card card-stretch mb-5 mb-xxl-8">

                <div className="card-body">

                    <div className="d-flex flex-column h-100">

                        <h3 className="text-dark text-center fs-1 fw-bolder pt-15 lh-lg">Kickstart
                            <br/>Mobile Application</h3>
                        <div className="text-center pt-7">
                            <a href="#" className="btn btn-primary fw-bolder fs-6 px-7 py-3" data-bs-toggle="modal"
                               data-bs-target="#kt_modal_create_app">Create App</a>
                        </div>


                    </div>

                </div>

            </div>
        </>
    )
}
