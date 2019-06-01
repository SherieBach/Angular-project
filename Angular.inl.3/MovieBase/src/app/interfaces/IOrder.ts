import {IOrderItem} from './IOrderItem';

export interface IOrder {
  companyId: number;
  paymentMethod: string;
  totalPrice: number;
  orderRows: IOrderItem[];
}
