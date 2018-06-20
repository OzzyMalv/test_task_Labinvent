export default function isIpValid(str) {
  return (
    str.split(".").filter(v => {
      return v === Number(v).toString() && Number(v) < 256;
    }).length === 4
  );
}
