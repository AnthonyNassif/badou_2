import Image from "next/image";

const ItemDetails = ({item}) => {

    return(
 
        <div className="p-2 flex flex-col items-center" >
           
            <div className="mb-2" >
                <Image className="mr-2 rounded-md"
                src={ item.cover }
                alt={ item.title }
                width={300}
                height={300}
                priority={true} />  
            </div>

            <div className="p-2 flex flex-col items-center">

                <p className="text-3xl"> {item.title} size {item.size} </p>
                <p className="mt-3 md:w-2/3"> {item.description}</p>

                <div className="text-xl mt-3 mb-5" >
                    <p> {item.type} - brand:{item.brand} - {item.stock ? `${item.stock} peices are in stock` :`No Stock`} </p>
                </div>



            </div>     

        </div>

    )


}

export default ItemDetails;