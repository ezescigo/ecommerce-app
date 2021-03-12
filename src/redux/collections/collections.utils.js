// export const addCollection = (category, newCollection) => {
//   // Search first item found in our array based on condition: existing id item.
//   const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

//   toast('Item added to your Shopping Cart.');
//   // If the item already existis on the array: Return new array with each cartItem and add quantity on the new cartItem
//   if (existingCartItem) {
//     return cartItems.map(cartItem => 
//       cartItem.id === cartItemToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     )
//   }

// export const addCollection = (category, subcategory, newCollection) => {
//   // category&subcategory undefined => 'preview'
//   // subcategory undefined => category

//   const title = subcategory === undefined
//     ? (category === undefined
//       ? return
//       : category
//     ) : subcategory
//   return { ...state.collections, [action.payload.category]: action.payload.collection }
// }

// improve para minimizar las calls a la db:
// guardar las subcategorias como nuevo objecto de la categoria, simulando el mismo arbol de la db. categoria > subcategoria > items.
// el fetch para /shop deberia ser un fetch custom, o bien un par de cada categoria, o bien los mas vendidos, etc, y ser guardados
// en el Redux Store con la misma estructura categoria > subcategoria > items
// de esta forma, cuando ya hayamos navegado por subcategorias y luego vamos a una categoria parent, no es necesario pedir TODAS las subcat,
// sino solo aquellas que nos faltan.

// por simpleza, no armaré el árbol, sino que dejaré todas las subcategorías en el root. Cuando pida la categoría,
// bajaré todas las subcategorías de esa categoría.

// para mayor simpleza aún, las categorías 