function Buttons({filterWord}) {
    return(
        <div className="cont">
            <button className="change" onClick={() => filterWord('dress')}>Dresses</button>
            <button className="change" onClick={() => filterWord('pants')}>Pants</button>
            <button className="change" onClick={() => filterWord('skirt')}>Skirts</button>
            <button className="change" onClick={() => filterWord('shoes')}>Shoes</button>
            <button className="change" onClick={() => filterWord('shirt')}>Shirts</button>

        </div>
    )
    
}

export default Buttons;