import {configureStore} from '@reduxjs/toolkit';
import api from './middleware/api';
import history from './reducer/history';
import orders from './reducer/orders';
import product from './reducer/products';
import Login from '../redux/reducer/login';

export default configureStore({
    reducer: { history, orders,product, Login },
    middleware: [api]
});