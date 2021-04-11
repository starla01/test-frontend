export const QUERY_SEARCH = `query search($strSearch: String){
  viewer{
    products(strSearch: $strSearch){
				id
        title
        picture
      	state_name
        condition
        free_shipping
        price {
          currency
          amount
          decimals
        }									
    }
  }
}`;

export const QUERY_PRODUCT = `query detail($id: String){
  viewer{
    detailProduct(id:$id) {
      id
      title
      picture
      condition
      free_shipping
      state_name
      description
      price {
        currency
        amount
        decimals
      }
    }
  }
}`;
