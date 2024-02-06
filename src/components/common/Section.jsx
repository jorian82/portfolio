/* eslint-disable react/prop-types */
export const Section = (props) => {
    return (
        <div className="row left-align section-label">
            <div className="col-12 p-3">{props.label}</div>
        </div>
    )
}
