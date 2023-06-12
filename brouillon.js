const getItemsQuantiy = (id) => {
    ls.getItem(id)
    return produits.find((produit) => produit.id === id)?.quantity || 0
  };

  const increaseCardQuantity = (id) => {
    console.log(id)
    const calculPositif = (id) => {
      const produitFound = produits.find(produit => produit.id === id);
      if (!produitFound) {
        
        return [...produits, { id, quantity: 1 }]
      }else{
        if(!produitFound.quantity){
          produitFound.quantity = 1;
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la",produits, ls) 
        }else{
          produitFound.quantity++
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la X2", produits, ls)
        }
        ls.setItem("cart", JSON.stringify(produits));
        return (
          produits
        )
      }
    }
    setProduits(calculPositif(id));
    forceUpdate();
  }

  const decreaseCardQuantity = (id) => {
    console.log(id)
    const calculnegatif = (id) => {
      const produitFound = produits.find(produit => produit.id === id);
      if (!produitFound) {
        
        return [...produits, { id, quantity: 0 }]
      }else{
        if(!produitFound.quantity){
          produitFound.quantity = 0;
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la",produits, ls) 
        }else{
          produitFound.quantity--
          ls.setItem(id,produitFound.quantity)
          console.log("je suis la X2", produits, ls)
        }
        ls.setItem("cart", JSON.stringify(produits));
        return (
          produits
        )
      }
    }
    setProduits(calculnegatif(id));
    forceUpdate();
  }

  const deleteCardQuantity = (id) => {
    console.log(id)
    const calculnegatif = (id) => {
      const produitFound = produits.find(produit => produit.id === id);
      if (!produitFound) {
        
        return [...produits, { id, quantity: 0 }]
      }else{
        if(produitFound.quantity){
          produitFound.quantity = 0;
          ls.removeItem(id,produitFound.quantity)
          console.log("je suis la",produits, ls) 
        }
        ls.setItem("cart", JSON.stringify(produits));
        return (
          produits
        )
      }
    }
    setProduits(calculnegatif(id));
    forceUpdate();
  }