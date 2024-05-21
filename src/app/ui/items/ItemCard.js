import Image from "next/image"
import Link from "next/link"

const ItemCard = ({item})=> {

    return(

    <Link href={`/store/${item.id}`} >
        <div className="flex flex-col items-center rounded-xl bg-amber-700 p-2 m-2 shadow-sm " >
            
            <Image className="mr-2 rounded-md"
            src={item.cover}
            alt={item.title}
            width={150}
            height={100}
            style={{height: '200px', width: 'auto'}}
            priority={true}
            />

            {item.title}
            
        </div>

    </Link> 

    )


}

export default ItemCard