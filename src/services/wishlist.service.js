import api from "../helpers/api";

class Wishlist {
	addToWishlistProduct = (params) => api().post(`auth/addtofavorite`, params);
	GetWishlist = () => api().get(`auth/getfavorite`);
	wishlistDelete = (id) => api().post('auth/favoritedelete', id)
}

export default new Wishlist();