import all from "../../components/index";

const register = (type: string) => {
  let typeUpperCase = "";
  for (let i = 0; i < type.length; i++) {
    typeUpperCase += i ? type[i] : type[i].toUpperCase();
  }
  const component = all[typeUpperCase];
  const comp = component ? component() : null;
  return comp;
};

export { register };
