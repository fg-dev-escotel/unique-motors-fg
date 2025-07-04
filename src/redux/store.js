import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./features/auth/userSlice";
import { modalSlice } from "./shared/modalSlice";
import { registroSlice } from "./features/auth/registroSlice";
import { slideshowSlice } from "./shared/slideshowSlice";
import { subastaSlice } from "./features/auction/subastaSlice";
import { loaderSlice } from "./shared/loaderSlice";
import { busquedaSlice } from "./features/search/busquedaSlice";
import { vendedorSlice } from "./features/sell/venderSlide";


export const store = configureStore({
    reducer: {
      userReducer: userSlice.reducer,
      modalReducer: modalSlice.reducer,
      registroReducer: registroSlice.reducer,
      slideshowReducer: slideshowSlice.reducer,
      subastaReducer: subastaSlice.reducer,
      busquedaReducer: busquedaSlice.reducer,
      vendedorReducer:vendedorSlice.reducer,
      loaderReducer:loaderSlice.reducer
    },
  });
  