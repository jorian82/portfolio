export const CardsGrid = () => {
    return (
        <div className="grid-cards">
            <Card />
            <Card />
            {/* <Card /> */}
        </div>
    )
}
export const Card = () => {
    return (
        <div className="card">
            <div className="card-image"></div>
            <h4 className="card-title">Lorem ipsum dolor sit.</h4>
            <p className="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab accusamus ipsa veniam dolorem! Debitis nam, accusantium assumenda neque, doloremque aliquid ipsum dolor fugit harum placeat ab nobis! Et, vero.</p>
            <div className="card-container-buttons">
                <button>Buy</button>
                <button>Show</button>
            </div>
        </div>
    )
}
