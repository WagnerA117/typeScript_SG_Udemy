/// <reference types="@types/google.maps" />p
import { User } from "./User";
import { CustomMap } from "./CustomMap";
import { Company } from "./Company";

const company = new Company();
const user = new User();


const customMap = new CustomMap("map");

customMap.addUserMarker(user);

customMap.addCompanyMarker(company)

console.log(user);