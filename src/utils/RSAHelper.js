import { JSEncrypt } from "jsencrypt";
import RSAConfig from "../configs/RSAConfig";

export const RSAEncrypt = (str) => {
  const jse = new JSEncrypt();
  jse.setPublicKey(RSAConfig.publicKey);
  return jse.encrypt(str);
};
