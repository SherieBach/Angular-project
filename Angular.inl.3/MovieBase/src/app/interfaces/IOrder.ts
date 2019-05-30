export interface IOrder {
  companyId: number;
  paymentMethod: string;
  totalPrice: number;
  orderRows: object;
}
