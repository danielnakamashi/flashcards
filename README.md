# flashcards

Flashcards app using clean architecture.

This is composed by server side which creates a graphql server and client side.

## Preparing to run

### Firebase

Create a Firebase app and a Firebase service account (going to your Firebase project settings / service accounts / generate new private key) and fill the .env.local file with these values with this format.

```ini
NEXT_PUBLIC_FIREBASE_API_KEY=################
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=################
NEXT_PUBLIC_FIREBASE_PROJECT_ID=################
NEXT_PUBLIC_FIREBASE_SENDER_ID=################
NEXT_PUBLIC_FIREBASE_APP_ID=################
FIREBASE_ADMIN_PRIVATE_KEY_ID==################
FIREBASE_ADMIN_PRIVATE_KEY==################
FIREBASE_ADMIN_CLIENT_EMAIL==################
FIREBASE_ADMIN_CLIENT_ID==################
FIREBASE_ADMIN_AUTH_URI==################
FIREBASE_ADMIN_TOKEN_URI==################
FIREBASE_ADMIN_AUTH_PROVIDER_X509_CERT_URL==################
FIREBASE_ADMIN_CLIENT_X509_CERT_URL==################
```

Create a new firestore database.

### Docker

Install docker

## Start web project

So far we just have a web project.

run `yarn dev`

## Architecture

I'm trying to follow Bob Martin's Clean Architecture but adapted to a frontend project.

![](./architecture.jpeg)
