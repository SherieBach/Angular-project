import {IOrderItem} from './IOrderItem';

export interface IOrder {
  id: number;
  created: string;
  companyId: number;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: IOrderItem[];
}
