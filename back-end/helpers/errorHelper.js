exports.errorResponse = function (data) {
  const { status, message } = { ...data };

  return {
    error: {
      status,
      message,
    },
  };
};
