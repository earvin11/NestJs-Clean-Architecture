import * as CryptoJS from 'crypto-js';

const secretKey = 'your-shared-secret-key'; // Clave compartida

// Cifrar un mensaje
export function encryptMessage(message: any): string {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
}

// Descifrar un mensaje
export function decryptMessage(encryptedMessage: string): string {
  const bytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
  return bytes.toString(CryptoJS.enc.Utf8);
}
