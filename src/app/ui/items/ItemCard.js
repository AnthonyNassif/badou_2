import Image from "next/image"
import Link from "next/link"
import {  CurrencyDollarIcon, ArchiveBoxIcon, ArchiveBoxXMarkIcon } from "@heroicons/react/24/solid";

const ItemCard = ({item})=> {

    return(

    <Link href={`/store/${item.id}`} >
        <div className="flex flex-col items-center rounded-xl bg-amber-700 p-2 m-2 shadow-sm " >
        <div className="flex p-2">
          <h3 className="ml-2 text-sm text-amber-100 font-medium">{item.title}</h3>
        </div>
            
            <div className="mb-2 h-13">
            <Image className="mr-2 rounded-md"
            src={item.cover}
            alt={item.title}
            width={150}
            height={100}
            style={{height: '200px', width: 'auto'}}
            priority={true} />
            </div>

        <div className="flex flex-col justify-around truncate rounded-xl bg-orange-500 px-4 py-8 w-full text-xs">

          <div className="flex justify-around text-amber-200 ">
            <div className="p-1" > {item.stock ? 

              <div className="flex">
                <ArchiveBoxIcon className="w-5 mr-1"/> 
                <span className="text-sm">{item.stock} in stock</span>
              </div> : 

              <div className="flex">
                <ArchiveBoxXMarkIcon className="w-5 mr-1"/>
                <span className="text-sm">No Stock</span>
              </div>  }             
            </div> 

            <div className="flex p-1">
              <CurrencyDollarIcon className="w-5  mr-0.5"/> 
              <span className="text-sm"> {item.sellPrice} to buy</span>
            </div>
           
          </div>       

        </div>

             
            
            
        </div>

    </Link> 

    )


}

export default ItemCard