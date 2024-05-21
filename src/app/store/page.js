

import { getAllitems } from '../lib/fake.data';
import ItemList from "../ui/items/ItemList";

const ItemListPage = () => {

    const items = getAllitems();
    

  return (
    
        <ItemList items={items}/>
  )
}

export default ItemListPage
