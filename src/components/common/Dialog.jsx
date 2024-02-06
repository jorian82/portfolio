/* eslint-disable react/prop-types */
import '../../styles/dialog.css'

export const Modal = (props) => {
    return (
        <div className="modal fade" id={props.modalId} tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl modal-fullscreen-lg-down">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">{props.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    {props.content}
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export const ButtonLaunchModal = (props) => {
    return (
        <div className="row">
            <div className="col-12 right-align">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={props.modalId}>
                    {props.label}
                </button>
            </div>
        </div>
    )
}

export const LinkLaunchModal = (props) => {
    return (
        <div className="row">
            <div className="col-12 right-align">
                <span className="modal-link" data-bs-toggle="modal" data-bs-target={props.modalId}>{props.label}</span>
            </div>
        </div>

    )
}

export const CardLaunchModal = (props) => {
    return (
        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={props.modalId}>
            {props.label}
        </button>
    )
}