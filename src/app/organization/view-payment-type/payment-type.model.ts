/**
 * Payment Type Model
 */
export interface PaymentType {
  id: string;
  name: string;
  description: string;
  iscashpayment: boolean;
  position: number;
}
