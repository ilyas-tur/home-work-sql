const userSchema = {
  type: "object",
  properties: {
    _id: { type: "string" },
    firstName: { type: "string" },
    lastName: { type: "string" },
    email: { type: "string", format: "email" },
    role: { type: "string", enum: ["user", "manager", "admin"] },
  },
};

export default userSchema;
