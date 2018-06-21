function isIpValid(str) {
  return (
    str.split(".").filter(v => {
      return v === Number(v).toString() && Number(v) < 256;
    }).length === 4
  );
}

function isDnsValid() {
  var dn = "/^(?![0-9]+$)(?!-)[a-zA-Z0-9%-]{,63}(?<!-)$/i";
}

export { isIpValid, isDnsValid };
