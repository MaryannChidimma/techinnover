function formatMessage(objectOrMessage: any) {
  if (typeof objectOrMessage === "string") return objectOrMessage;

  if (typeof objectOrMessage === "object" && objectOrMessage.message) {
    return objectOrMessage.message;
  }

  return "";
}

function createResponse(
  objectOrMessage: any,
  data: any = null,
  success: boolean = true
) {
  if (data) {
    return {
      success: success === null ? true : success,
      message: formatMessage(objectOrMessage),
      data,
    };
  }
  return {
    success: success === null ? true : success,
    message: formatMessage(objectOrMessage),
  };
}

export default createResponse;
