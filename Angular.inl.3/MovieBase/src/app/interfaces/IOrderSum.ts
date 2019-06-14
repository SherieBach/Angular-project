
export interface IOrderSum {
  id: number;
  companyId: number;
  created: string;
  createdBy: string;
  paymentMethod: string;
  totalPrice: number;
  status: number;
  orderRows: IOrderSumRow[];
}

export interface IOrderSumRow {
  id: number;
  productId: number;
  product: string;
  amount: number;
  orderId: number;
}
