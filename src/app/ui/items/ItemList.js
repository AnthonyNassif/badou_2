import ItemCard from "./ItemCard"

const ItemList = ({items}) => {
return (
<>
    {
        items.map((item) =>{
            
        return(

            <ItemCard key={item.id} item={item} />

        )

        })

    }
</>
)

}

export default ItemList