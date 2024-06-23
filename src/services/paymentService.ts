import { stkPushRequest, STKPushRequestParam, STKPushSuccessfulCallbackBody, STKPushErrorCallbackBody, STKPushResponse } from 'daraja-kit';

const isSuccessfulResponse = (response: any): response is STKPushSuccessfulCallbackBody => {
  return response && response.Body && response.Body.stkCallback && response.Body.stkCallback.ResultCode === 0;
};

export const processPayment = async (phoneNumber: string): Promise<boolean> => {
  const myReqObj: STKPushRequestParam = {
    phoneNumber: phoneNumber,
    amount: "50",
    callbackURL: "https://example.com/api/stk-push-callback",
    transactionDesc: "Payment for voting service",
    accountReference: phoneNumber,
  };

  try {
    const response: STKPushResponse = await stkPushRequest(myReqObj);

    if (isSuccessfulResponse(response)) {
      return true;
    }
    return false;
  } catch (error) {
    console.error("Error:", (error as Error).message);
    return false;
  }
};
