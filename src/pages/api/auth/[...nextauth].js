import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const findUserByCredentials = (credentials) => {
  if (
    credentials.email === process.env.USER_EMAIL &&
    credentials.password === process.env.USER_PASSWORD
  ) {
    return { id: 1, name: "Daigoro" };
  } else {
    return null;
  }
};

// NextAuth に渡すオプション
const options = {
  providers: [
    Providers.Credentials({
      name: "Email",

      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      authorize: async (credentials) => {
        const user = findUserByCredentials(credentials);
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
};

export default (req, res) => NextAuth(req, res, options);
