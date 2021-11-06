export async function randomOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}
