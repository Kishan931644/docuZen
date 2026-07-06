## register (Registers a new user)
**Endpoint:** `/api/auth/register`  
**Method:** `POST`  
**Header:** `null`

### Request Body
- **name** (String, REQUIRED): Name of the user.
- **address** (String, REQUIRED): Address of the user.
- **city** (String, REQUIRED): City of the user.
- **country** (String, REQUIRED): Country of the user.
- **phone** (String, REQUIRED): Phone number of the user.
- **password** (String, REQUIRED): Password of the user.
- **email** (String, REQUIRED): Email of the user.

### Responses
- **201 - Created**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "User registered successfully"
      },
      "hasData": true
    }
    ```

- **400 - Bad Request**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "Email already exists"
      },
      "hasData": false
    }
    ```

## tokenValidate (Validates the user's token)
**Endpoint:** `/api/auth/tokenValidate`  
**Method:** `GET`  
**Header:** `Authorization` (Bearer token)

### Request Body
- **None**

### Responses
- **200 - OK**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "Token is valid"
      },
      "hasData": false
    }
    ```

- **401 - Unauthorized**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "Access denied"
      },
      "hasData": false
    }
    ```

- **401 - Unauthorized**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "Invalid token"
      },
      "hasData": false
    }
    ```

## login (Logs in an existing user)
**Endpoint:** `/api/auth/login`  
**Method:** `POST`  
**Header:** `null`

### Request Body
- **email** (String, REQUIRED): Email of the user.
- **password** (String, REQUIRED): Password of the user.

### Responses
- **200 - OK**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "Login successful",
        "role": "user",
        "isAdmin": false,
        "token": "JWT_TOKEN"
      },
      "hasData": true
    }
    ```

- **401 - Unauthorized**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "No user founded with this credentials"
      },
      "hasData": false
    }
    ```

- **401 - Unauthorized**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "Invalid password"
      },
      "hasData": false
    }
    ```

- **500 - Internal Server Error**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "Internal server error"
      },
      "hasData": false
    }
    ```

## googleLogin (Initiates Google login flow)
**Endpoint:** `/api/auth/googleLogin`  
**Method:** `GET`  
**Header:** `null`

### Request Body
- **None**

### Responses
- **302 - Found**
    - Redirects to Google OAuth2 authorization endpoint with required parameters

## googleLoginCallback (Handles Google login callback)
**Endpoint:** `/api/auth/googleLogin`  
**Method:** `GET`  
**Header:** `null`

### Request Body
- **None**

### Responses
- **200 - OK**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "Google login successfull",
        "role": "user",
        "token": "JWT_TOKEN"
      },
      "hasData": true
    }
    ```

- **302 - Found**
    - Redirects to login page on error

## googleData (Retrieves Google user data)
**Endpoint:** `/api/auth/googleData`  
**Method:** `POST`  
**Header:** `null`

### Request Body
- **profile** (Object, REQUIRED): Google user profile data.

### Responses
- **200 - OK**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "Google login successfull",
        "profile": { /* Google user profile data */ }
      },
      "hasData": true
    }
    ```

## logout (Logs out the user)
**Endpoint:** `/api/auth/logout`  
**Method:** `POST`  
**Header:** `null`

### Request Body
- **None**

### Responses
- **200 - OK**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "Logged out successfully"
      },
      "hasData": false
    }
    ```

## changePassword (Changes the user's password)
**Endpoint:** `/api/auth/changePassword`  
**Method:** `POST`  
**Header:** `Authorization` (Bearer token)

### Request Body
- **oldPassword** (String, REQUIRED): Old password of the user.
- **newPassword** (String, REQUIRED): New password of the user.

### Responses
- **200 - OK**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "Password changed successfully"
      },
      "hasData": false
    }
    ```

- **401 - Unauthorized**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "Invalid password"
      },
      "hasData": false
    }
    ```

- **404 - Not Found**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "User not found"
      },
      "hasData": false
    }
    ```

## deleteAccount (Deletes the user's account)
**Endpoint:** `/api/auth/deleteAccount`  
**Method:** `POST`  
**Header:** `Authorization` (Bearer token)

### Request Body
- **password** (String, REQUIRED): Password of the user.

### Responses
- **200 - OK**
    ```javascript
    {
      "status": "success",
      "data": {
        "message": "Account deleted successfully"
      },
      "hasData": false
    }
    ```

- **401 - Unauthorized**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "Invalid password"
      },
      "hasData": false
    }
    ```

- **404 - Not Found**
    ```javascript
    {
      "status": "error",
      "data": {
        "message": "User not found"
      },
      "hasData: false
    }
    ```

---
