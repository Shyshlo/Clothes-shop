function Clothes({codeword}) {


    return(
        <div className="products">
            {codeword.map((elements => {
                const {id, name, searchTerm, price, image} = elements;
                return(
                    <div className="product-card" key={id}>
                        <img src={image} width = '400px' heigth = '500px' />
                        <div className='product-info'>
                            <h3>{name}</h3>
                            <h4>{searchTerm}</h4>
                            <h4>{price}</h4>

                        </div>

                    </div>
                )

            }))}

        </div>
    )
}
export default Clothes;