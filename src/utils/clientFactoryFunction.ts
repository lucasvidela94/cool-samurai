export const clientFactoryFunction = () => {
  return {
    email: import.meta.env.EMAIL,
    pass: import.meta.env.PASS,
    host: import.meta.env.HOST,
    resendApiKey: import.meta.env.RESEND_API_KEY,
  };
};
