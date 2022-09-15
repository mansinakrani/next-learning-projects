import NextAuth from "next-auth/next";
import CredentialsProvider from 'next-auth/providers/credentials';
import { verifyPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

export default NextAuth({
    session: {
        // Choose how you want to save the user session.
        // The default is `"jwt"`, an encrypted JWT (JWE) stored in the session cookie.
        // If you use an `adapter` however, we default it to `"database"` instead.
        // You can still force a JWT session by explicitly defining `"jwt"`.
        // When using `"database"`, the session cookie will only contain a `sessionToken` value,
        // which is used to look up the session in the database.
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials) {
                const client = await connectToDatabase();

                const usersCollection = client.db().collection('users');

                const user = await usersCollection.findOne({email: credentials.email})
                if(!user) {
                    throw new Error('No user found!');
                }

                const isvalid = await verifyPassword(credentials.password, user.password);

                if(!isvalid) {
                    client.close();
                    throw new Error('Could not log you in!');
                }

                client.close();
                return { email: user.email };                
            }
        })
    ]
});