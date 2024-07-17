import {create} from 'zustand';

interface CartState {
  cartItems: { id: number; quantity: number }[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  getTotalCartQuantity: number;
}

export const useCartStore = create<CartState>((set) => ({
  cartItems: [],
  addToCart: (productId) => {
    set((state) => {
      const existingItem = state.cartItems.find((item) => item.id === productId);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { ...state, cartItems: [...state.cartItems, { id: productId, quantity: 1 }] };
    });
  },
  removeFromCart: (productId) => {
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
    }));
  },
  getTotalCartQuantity:  () => {
    return useCartStore.getState().cartItems.reduce((acc, item) => acc + item.quantity, 0);
  },
}));
